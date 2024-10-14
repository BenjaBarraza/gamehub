import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from "../context/AuthContext";

const apiKey = 'c0d4ff2de6834a6daf0aa751fc95f8fd';

export default function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth(); // Usa el hook personalizado
  const router = useRouter();
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

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Main Content */}
      <main className="flex-1">
        {/* Sección de Bienvenida */}
        <section className="flex flex-col items-center justify-center text-center py-20 bg-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Bienvenido a GameHub</h1>
          <p className="max-w-lg text-base sm:text-lg text-gray-600 mt-4">
            Tu destino definitivo para obtener información, reseñas y noticias sobre juegos.
          </p>
          <div className="mt-6 space-x-0 sm:space-x-4 flex flex-col sm:flex-row">
            <button
              className="px-6 py-3 mb-2 sm:mb-0 bg-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => router.push("/games")}
            >
              Explorar Juegos
            </button>
            <button
              className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => router.push("/noticias")}
            >
              Últimas Noticias
            </button>
          </div>
        </section>

        {/* Sección de Juegos Destacados */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">Juegos Destacados</h2>
            {loading ? (
              <p className="text-center">Loading games...</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.slice(0, 3).map((game) => (
                  <div key={game.id} className="shadow-lg rounded-lg overflow-hidden">
                    <Image
                      src={game.background_image || 'https://via.placeholder.com/400x200'}
                      width={400}
                      height={225}
                      alt={game.name}
                      className="w-full object-cover h-48 sm:h-56"
                    />
                    <div className="p-4 bg-white">
                      <h3 className="text-lg sm:text-xl font-semibold">{game.name}</h3>
                      <p className="text-gray-600">Puntuación: {game.rating.toFixed(2)}</p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">Juegos Más Buscados</h2>
            {loading ? (
              <p className="text-center">Cargando Juegos...</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {games.slice(3, 11).map((game) => (
                  <div key={game.id} className="shadow-lg rounded-lg overflow-hidden">
                    <Image
                      src={game.background_image || 'https://via.placeholder.com/400x225'}
                      width={400}
                      height={225}
                      alt={game.name}
                      className="w-full object-cover h-40 sm:h-48"
                    />
                    <div className="p-4 bg-white">
                      <h3 className="text-base sm:text-lg font-semibold">{game.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
