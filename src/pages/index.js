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
    </div>
  );
}
