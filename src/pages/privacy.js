import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Privacy() {
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
            <h1 className="text-3xl font-bold text-gray-900">Política de Privacidad</h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Última actualización: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Recopilación de Información</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  GameHub recopila información que usted proporciona directamente a través de nuestros servicios. Esto puede incluir su nombre, dirección de correo electrónico, y preferencias de juego cuando se registra para una cuenta o participa en nuestras funciones interactivas.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Uso de la Información</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Utilizamos la información recopilada para proporcionar, mantener y mejorar nuestros servicios, así como para comunicarnos con usted sobre actualizaciones, ofertas y noticias relacionadas con los videojuegos.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Compartir Información</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  No vendemos ni compartimos su información personal con terceros, excepto cuando sea necesario para proporcionar nuestros servicios o cuando estemos legalmente obligados a hacerlo.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Seguridad</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Implementamos medidas de seguridad diseñadas para proteger su información personal contra acceso no autorizado y uso indebido.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Sus Derechos</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Usted tiene derecho a acceder, corregir o eliminar su información personal. También puede optar por no recibir comunicaciones de marketing en cualquier momento.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Cambios en la Política</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Podemos actualizar esta política de privacidad de vez en cuando. Le notificaremos sobre cualquier cambio publicando la nueva política de privacidad en esta página.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Contacto</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Si tiene alguna pregunta sobre esta política de privacidad, por favor contáctenos en: privacy@gamehub.com
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}