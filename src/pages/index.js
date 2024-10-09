import { useEffect, useState } from 'react';
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/label";
import { Search, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../context/AuthContext";
import { useRouter } from 'next/router';

const apiKey = 'c0d4ff2de6834a6daf0aa751fc95f8fd';

export default function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, logout } = useAuth(); // Usa el hook personalizado
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false); // Estado para manejar el menú desplegable
  const [username, setUsername] = useState(''); // Estado para almacenar el nombre del usuario

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}`);
        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  useEffect(() => {
    // Verifica si el usuario está logueado y establece el nombre del usuario
    if (user) {
      setUsername(user.name);
    }
  }, [user]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.ico" 
                alt="GameHub Logo" 
                width={32} 
                height={32} 
              />
              <span className="font-bold text-xl">GameHub</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/games" className="text-gray-700 hover:text-black">Juegos</Link>
              <button 
                className="px-6 py-3 bg-white text-gray-700"
                onClick={() => router.push("/noticias")}
              >
                Noticias
              </button>
              <Link href="/reviews" className="text-gray-700 hover:text-black">Reseñas</Link>
            </nav>
          </div>

          {/* Botón Menú y Búsqueda */}
          <div className="flex items-center space-x-4">
            <form className="relative flex items-center">
              <Search className="absolute left-3 h-5 w-5 text-gray-500" />
              <input 
                type="search" 
                placeholder="Search games..." 
                className="pl-10 py-2 w-64 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300" 
              />
            </form>
            {user ? (
            <div className="relative">
              <button 
                onClick={toggleMenu} 
                className="flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <User className="h-5 w-5 text-gray-700" />
                <span>{user.name}</span> {/* Usa user.name para mostrar el nombre */}
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                  <button
                    onClick={() => {
                      logout(); // Llama a logout desde el contexto
                      setMenuOpen(false); // Cierra el menú después de cerrar sesión
                      router.push("/"); // Redirige después de cerrar sesión
                    }}
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
            ) : (
              <Link href="/register/register" passHref>
                <button className="flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <User className="h-5 w-5 text-gray-700" />
                  <span>Registrarse</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </header>
      
    
      {/* Main Content */}
      <main className="flex-1">
        {/* Sección de Bienvenida */}
        <section className="flex flex-col items-center justify-center text-center py-20 bg-white">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Bienvenido a GameHub</h1>
          <p className="max-w-lg text-lg text-gray-600 mt-4">
            Tu destino definitivo para obtener información, reseñas y noticias sobre juegos.
          </p>
          <div className="mt-6 space-x-4">
            <button className="px-6 py-3 bg-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
              Explorar Juegos
            </button>
            

            <button 
                className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => router.push("/noticias")}
              >
                Ultimas Noticias
              </button>
          </div>
        </section>

        {/* Sección de Juegos Destacados */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">Juegos Destacados</h2>
            {loading ? (
              <p className="text-center">Loading games...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {games.slice(0, 3).map((game) => (
                  <div key={game.id} className="shadow-lg rounded-lg overflow-hidden">
                    <Image
                      src={game.background_image || 'https://via.placeholder.com/400x200'}
                      width={400}
                      height={225}
                      alt={game.name}
                      className="w-full object-cover h-56"
                    />
                    <div className="p-4 bg-white">
                      <h3 className="text-xl font-semibold">{game.name}</h3>
                      <p className="text-gray-600">Puntuacion: {game.rating.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Sección de Juegos Más Buscados */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">Juegos Mas Buscados</h2>
            {loading ? (
              <p className="text-center">Cargando Juegos...</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {games.slice(3, 11).map((game) => (
                  <div key={game.id} className="shadow-lg rounded-lg overflow-hidden">
                    <Image
                      src={game.background_image || 'https://via.placeholder.com/400x225'}
                      width={400}
                      height={225}
                      alt={game.name}
                      className="w-full object-cover h-56"
                    />
                    <div className="p-4 bg-white">
                      <h3 className="text-lg font-semibold">{game.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/logo.ico" 
              alt="GameHub Logo" 
              width={32} 
              height={32} 
            />
            <p className="text-gray-600">&copy; 2024 GameHub. All rights reserved.</p>
          </div>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/about" className="text-gray-600 hover:text-black">Sobre nosotros</Link>
            <Link href="/contact" className="text-gray-600 hover:text-black">Contacto</Link>
            <Link href="/privacy" className="text-gray-600 hover:text-black">Privacidad</Link>
            <Link href="/terms" className="text-gray-600 hover:text-black">Terminos</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
