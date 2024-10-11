import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <div className={`min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 ${inter.className}`}>
      <div className="max-w-3xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.ico"
            alt="GameHub Logo"
            width={300}
            height={100}
            priority
          />
        </div>

        {/* Contenido */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-bold text-gray-900 text-center">Sobre GameHub</h1>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Nuestra misión</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  En GameHub, nos apasiona el mundo de los videojuegos. Nuestro objetivo es proporcionar a los jugadores información valiosa, reseñas honestas y las últimas noticias de la industria.
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Reseñas de juegos</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Nuestro equipo de expertos analiza minuciosamente cada juego, ofreciendo reseñas detalladas y objetivas para ayudarte a tomar decisiones informadas sobre tus próximas aventuras gaming.
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Catálogo de juegos</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Explora nuestro extenso catálogo de juegos, que abarca desde los últimos lanzamientos AAA hasta joyas indie menos conocidas. Cada entrada incluye detalles sobre la jugabilidad, gráficos y más.
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Noticias de la industria</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Mantente al día con las últimas novedades del mundo de los videojuegos. Cubrimos lanzamientos, actualizaciones, eventos de la industria y más, todo en un solo lugar.
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Comunidad</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Únete a nuestra creciente comunidad de jugadores apasionados. Comparte tus opiniones, participa en discusiones y conecta con otros entusiastas de los videojuegos.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}