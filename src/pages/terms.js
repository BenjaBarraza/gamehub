import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Terms() {
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
            <h1 className="text-3xl font-bold text-gray-900">Términos y Condiciones</h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Última actualización: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Aceptación de los Términos</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Al acceder o utilizar GameHub, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Uso del Servicio</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Usted se compromete a utilizar el servicio solo para fines lícitos y de acuerdo con estos Términos. No debe usar el servicio de ninguna manera que pueda dañar, deshabilitar, sobrecargar o deteriorar el servicio.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Cuentas de Usuario</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Para acceder a ciertas funciones del servicio, es posible que deba crear una cuenta. Usted es responsable de mantener la confidencialidad de su cuenta y contraseña, y de restringir el acceso a su computadora o dispositivo.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Contenido del Usuario</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Nuestro servicio permite publicar, enlazar, almacenar, compartir y poner a disposición cierta información, texto, gráficos, videos u otro material. Usted es responsable del contenido que publica en el servicio.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Propiedad Intelectual</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  El servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de GameHub y sus licenciantes. El servicio está protegido por derechos de autor, marcas registradas y otras leyes.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Enlaces a Otros Sitios Web</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Nuestro servicio puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por GameHub. GameHub no tiene control ni asume ninguna responsabilidad por el contenido, las políticas de privacidad o las prácticas de los sitios web o servicios de terceros.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Terminación</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Podemos terminar o suspender su acceso inmediatamente, sin previo aviso ni responsabilidad, por cualquier motivo, incluido, sin limitación, si incumple estos Términos y Condiciones.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Cambios en los Términos</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, proporcionaremos un aviso de al menos 30 días antes de que entren en vigor los nuevos términos.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Contacto</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Si tiene alguna pregunta sobre estos Términos, por favor contáctenos en: terms@gamehub.com
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}