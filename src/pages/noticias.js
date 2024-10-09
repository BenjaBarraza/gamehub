import { useAuth } from "../context/AuthContext"; 
import { useState } from 'react';
import { Input } from "../components/ui/Input";
import { Button } from "@/components/ui/button";
import { Search, User, Menu, Clock, Flame, Star, TrendingUp, username } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';


  export default function NewsPage() {
    const { user, logout } = useAuth(); // Obtenemos el usuario y el método de logout del contexto
    const [menuOpen, setMenuOpen] = useState(false);
    const [newsCategories] = useState([
      { id: 'latest', name: 'Ultimas noticias', icon: Clock },
      { id: 'trending', name: 'Tendencia', icon: TrendingUp },
      { id: 'popular', name: 'Más populares', icon: Flame },
      { id: 'upcoming', name: 'Proximos lanzamientos', icon: Star },
    ])
  
    const [selectedCategory, setSelectedCategory] = useState('latest')
    const router = useRouter(); // Usa el hook de `useRouter`
  
    const newsItems = [
      // Latest News
      { id: 1, category: 'latest', title: "Elden Ring 2 Anunciado Oficialmente", excerpt: "FromSoftware confirma el desarrollo de la tan esperada secuela de Elden Ring.", date: "2023-10-15", source: "GameSpot" },
  { id: 2, category: 'latest', title: "Nuevo Juego de Zelda en Desarrollo, Confirma Nintendo", excerpt: "Nintendo anuncia que ya está en marcha un nuevo título de The Legend of Zelda.", date: "2023-10-14", source: "Nintendo Life" },
  { id: 3, category: 'latest', title: "Rockstar Games Insinúa Nueva IP", excerpt: "Rockstar deja pistas sobre una nueva propiedad intelectual en desarrollo.", date: "2023-10-13", source: "IGN" },
  { id: 4, category: 'latest', title: "Sony Adquiere Importante Estudio de Juegos", excerpt: "El fabricante de PlayStation expande su línea de estudios con una adquisición significativa.", date: "2023-10-12", source: "Eurogamer" },
  { id: 5, category: 'latest', title: "Cyberpunk 2077 Phantom Liberty Rompe Récords de Ventas", excerpt: "La última expansión de CD Projekt Red supera las expectativas con ventas récord.", date: "2023-10-11", source: "PC Gamer" },
  { id: 6, category: 'latest', title: "Valve Anuncia Steam Deck 2", excerpt: "Se revela la próxima generación de la consola portátil de Valve con especificaciones impresionantes.", date: "2023-10-10", source: "The Verge" },
  { id: 7, category: 'latest', title: "Próxima Gran Actualización para Minecraft", excerpt: "Mojang adelanta características revolucionarias para la próxima actualización de Minecraft.", date: "2023-10-09", source: "Minecraft.net" },
  { id: 8, category: 'latest', title: "EA Sports FC 24 se Lanza Globalmente", excerpt: "La renovada franquicia de fútbol de EA comienza con una recepción positiva.", date: "2023-10-08", source: "EA.com" },
  { id: 9, category: 'latest', title: "Blizzard Presenta un Nuevo Héroe de Overwatch 2", excerpt: "La última incorporación al roster de Overwatch 2 trae habilidades únicas al campo de batalla.", date: "2023-10-07", source: "Blizzard" },
  { id: 10, category: 'latest', title: "Final Fantasy XVI Gana Juego del Año", excerpt: "La última entrega de Square Enix en la serie Final Fantasy se lleva los máximos honores en una ceremonia de premios.", date: "2023-10-06", source: "Square Enix" },
  { id: 11, category: 'latest', title: "Ubisoft Anuncia Nueva Ambientación para Assassin's Creed", excerpt: "El próximo juego de Assassin's Creed explorará un período histórico nunca antes visto.", date: "2023-10-05", source: "Ubisoft" },
  { id: 12, category: 'latest', title: "Actualización Importante para 'Stardew Valley'", excerpt: "ConcernedApe revela una actualización masiva de contenido gratuito para el amado simulador de granja.", date: "2023-10-04", source: "Kotaku" },
  { id: 13, category: 'latest', title: "Microsoft Flight Simulator Agrega Soporte para VR", excerpt: "El popular simulador de vuelo ahora es completamente jugable en realidad virtual en todas las plataformas.", date: "2023-10-03", source: "Microsoft" },
  { id: 14, category: 'latest', title: "Fortnite Colabora con una Importante Franquicia de Películas", excerpt: "Epic Games anuncia un sorprendente evento de colaboración en Fortnite.", date: "2023-10-02", source: "Epic Games" },
  { id: 15, category: 'latest', title: "Nuevo Juego de Mass Effect Entra en Producción Completa", excerpt: "BioWare confirma que la próxima entrega de la serie Mass Effect está bien encaminada.", date: "2023-10-01", source: "BioWare" },
  { id: 16, category: 'latest', title: "Hideo Kojima Insinúa un Nuevo Juego de Terror", excerpt: "El legendario diseñador de juegos sugiere su regreso al género de terror con un avance críptico.", date: "2023-09-30", source: "Kojima Productions" },
  { id: 17, category: 'latest', title: "Riot Games Anuncia Versión Móvil de Valorant", excerpt: "El popular shooter táctico Valorant llegará a dispositivos móviles.", date: "2023-09-29", source: "Riot Games" },
  { id: 18, category: 'latest', title: "Especificaciones de Nintendo Switch Pro Filtradas", excerpt: "Supuestas especificaciones del modelo mejorado de Switch de Nintendo aparecen en línea.", date: "2023-09-28", source: "Nintendo Enthusiast" },
  { id: 19, category: 'latest', title: "Bethesda Confirma la Preproducción de Fallout 5", excerpt: "El estudio comienza el trabajo inicial en el próximo juego principal de Fallout.", date: "2023-09-27", source: "Bethesda" },
  { id: 20, category: 'latest', title: "Desarrolladores de Among Us Anuncian Nuevo Juego", excerpt: "Innersloth revela su próximo proyecto tras el éxito de Among Us.", date: "2023-09-26", source: "Innersloth" },
  
      // Trending
  { id: 21, category: 'trending', title: "Rumores de PlayStation 6 Emergen", excerpt: "Expertos de la industria insinúan posibles características para la consola de próxima generación de Sony.", date: "2023-10-15", source: "IGN" },
  { id: 22, category: 'trending', title: "Mod de Starfield Añade Multijugador", excerpt: "Un ambicioso mod agrega funcionalidad multijugador al RPG espacial de Bethesda.", date: "2023-10-14", source: "PC Gamer" },
  { id: 23, category: 'trending', title: "Mecánica Controvertida de Cajas de Botín en Nuevo Juego AAA", excerpt: "Los jugadores expresan preocupación por la implementación de cajas de botín en un título muy esperado.", date: "2023-10-13", source: "Eurogamer" },
  { id: 24, category: 'trending', title: "Equipo de Esports Gana $10 Millones en Torneo", excerpt: "Premio récord otorgado en una competición internacional de videojuegos.", date: "2023-10-12", source: "ESPN Esports" },
  { id: 25, category: 'trending', title: "Reto Viral de Videojuegos se Apodera de las Redes Sociales", excerpt: "Un nuevo reto de videojuegos se convierte en la última sensación de internet.", date: "2023-10-11", source: "Kotaku" },
  { id: 26, category: 'trending', title: "Youtuber de Videojuegos en Gran Controversia", excerpt: "Un popular creador de contenido enfrenta críticas por declaraciones recientes.", date: "2023-10-10", source: "Dexerto" },
  { id: 27, category: 'trending', title: "Speedrunner Rompe Récord de una Década", excerpt: "Un jugador logra un tiempo aparentemente imposible en un videojuego clásico.", date: "2023-10-09", source: "Speedrun.com" },
  { id: 28, category: 'trending', title: "Descubren un Bug que Rompe el Juego en un Popular Juego en Línea", excerpt: "Los desarrolladores se apresuran a parchear un problema crítico que afecta a millones de jugadores.", date: "2023-10-08", source: "GameSpot" },
  { id: 29, category: 'trending', title: "Evento Benéfico de un Streamer Recauda Millones", excerpt: "La comunidad de videojuegos se une para un evento benéfico récord.", date: "2023-10-07", source: "Twitch" },
  { id: 30, category: 'trending', title: "Filtración de Imágenes de un Juego no Anunciado se Vuelve Viral", excerpt: "Supuesto video de juego anticipado se difunde rápidamente en internet.", date: "2023-10-06", source: "VGC" },
  { id: 31, category: 'trending', title: "Arte de Videojuegos Generado por IA Desata Debate", excerpt: "El uso de IA en la creación de arte de videojuegos genera preguntas en la industria.", date: "2023-10-05", source: "Ars Technica" },
  { id: 32, category: 'trending', title: "Escasez de Consolas Retro Aumenta los Precios", excerpt: "Los revendedores se aprovechan de la oferta limitada de una popular consola retro.", date: "2023-10-04", source: "The Verge" },
  { id: 33, category: 'trending', title: "Jugador Completa un Reto Imposible", excerpt: "Un jugador logra una hazaña previamente considerada inalcanzable en un juego desafiante.", date: "2023-10-03", source: "IGN" },
  { id: 34, category: 'trending', title: "Nuevo Paquete de Texturas de Minecraft se Vuelve Viral", excerpt: "Un paquete de texturas creado por la comunidad transforma el aspecto del popular juego de construcción.", date: "2023-10-02", source: "PCGamesN" },
  { id: 35, category: 'trending', title: "Anunciada Cadena de Restaurantes Temática de Videojuegos", excerpt: "Una importante compañía de alimentos revela planes para experiencias gastronómicas inspiradas en videojuegos.", date: "2023-10-01", source: "Food & Wine" },
  { id: 36, category: 'trending', title: "Debate sobre Crossplay se Reaviva", excerpt: "Jugadores competitivos debaten sobre el crossplay en un título de esports importante.", date: "2023-09-30", source: "Dot Esports" },
  { id: 37, category: 'trending', title: "Categoría Inusual de Speedrun Gana Popularidad", excerpt: "Los jugadores adoptan un nuevo y peculiar desafío de speedrunning en un juego clásico.", date: "2023-09-29", source: "Kotaku" },
  { id: 38, category: 'trending', title: "Banda Sonora de Videojuegos Lidera las Listas de Música", excerpt: "La banda sonora de un videojuego sorprendentemente alcanza el puesto #1 en plataformas de streaming.", date: "2023-09-28", source: "Billboard" },
  { id: 39, category: 'trending', title: "Jugadores Debaten la Ética de los Oponentes IA", excerpt: "El uso de IA avanzada en videojuegos competitivos genera acalorados debates.", date: "2023-09-27", source: "Wired" },
  { id: 40, category: 'trending', title: "Aumentan los Reportes de Lesiones por Realidad Virtual", excerpt: "Los profesionales de la salud advierten sobre prácticas adecuadas de juego en VR a medida que aumentan las lesiones.", date: "2023-09-26", source: "WebMD" },
  
      // Most Popular
      { id: 41, category: 'popular', title: "Tráiler de GTA VI Rompe Récords de Visualización", excerpt: "Primer vistazo al próximo juego de Grand Theft Auto se convierte en el video más visto en 24 horas.", date: "2023-10-15", source: "Rockstar Games" },
  { id: 42, category: 'popular', title: "Anunciado The Last of Us Parte III", excerpt: "Naughty Dog confirma el desarrollo de la tercera entrega de la aclamada serie.", date: "2023-10-14", source: "PlayStation Blog" },
  { id: 43, category: 'popular', title: "Actualización Minecraft 2.0 Revoluciona la Jugabilidad", excerpt: "Reforma masiva trae cambios sin precedentes al querido juego sandbox.", date: "2023-10-13", source: "Minecraft.net" },
  { id: 44, category: 'popular', title: "Nuevo Juego Battle Royale Causa Sensación en Steam", excerpt: "La nueva propuesta de un desarrollador indie se convierte en un éxito de la noche a la mañana.", date: "2023-10-12", source: "Steam" },
  { id: 45, category: 'popular', title: "Colaboración Innovadora de Fortnite con Disney", excerpt: "Epic Games y Disney se asocian para un gran evento en el juego y actualización de contenido.", date: "2023-10-11", source: "Epic Games" },
  { id: 46, category: 'popular', title: "CD Projekt Red Anticipa Nueva Saga de Witcher", excerpt: "El estudio insinúa el futuro de la franquicia The Witcher después de la era de Geralt.", date: "2023-10-10", source: "CD Projekt Red" },
  { id: 47, category: 'popular', title: "Nintendo Anuncia Nueva Película de Super Mario", excerpt: "Tras el éxito de la primera película, Nintendo revela planes para una secuela.", date: "2023-10-09", source: "Nintendo" },
  { id: 48, category: 'popular', title: "Anuncio Sorpresa de Valve: Half-Life 3", excerpt: "La tan esperada secuela finalmente se confirma después de años de especulación.", date: "2023-10-08", source: "Valve" },
  { id: 49, category: 'popular', title: "Ventas de PlayStation VR2 Superan las Expectativas", excerpt: "El último visor VR de Sony resulta ser más popular de lo anticipado.", date: "2023-10-07", source: "Sony Interactive Entertainment" },
  { id: 50, category: 'popular', title: "DLC de Elden Ring Recibe Puntuaciones Perfectas", excerpt: "Los críticos elogian unánimemente el nuevo y extenso contenido del exitoso juego de FromSoftware.", date: "2023-10-06", source: "Metacritic" },
  { id: 51, category: 'popular', title: "Clásicos de Rockstar Llegan a Móviles", excerpt: "Títulos populares de Rockstar reciben versiones para móviles con características mejoradas.", date: "2023-10-05", source: "Rockstar Games" },
  { id: 52, category: 'popular', title: "Gran Actualización de Balance en Overwatch 2", excerpt: "Blizzard implementa cambios significativos en los héroes en respuesta a la retroalimentación de la comunidad.", date: "2023-10-04", source: "Blizzard" },
  { id: 53, category: 'popular', title: "Xbox Game Pass Alcanza 50 Millones de Suscriptores", excerpt: "El servicio de suscripción de videojuegos de Microsoft alcanza un nuevo hito.", date: "2023-10-03", source: "Xbox Wire" },
  { id: 54, category: 'popular', title: "Aumento en el Número de Jugadores de Cyberpunk 2077", excerpt: "El RPG de CD Projekt Red experimenta un masivo incremento de jugadores tras las últimas actualizaciones.", date: "2023-10-02", source: "Steam Charts" },
  { id: 55, category: 'popular', title: "League of Legends Anuncia RPG para un Jugador", excerpt: "Riot Games expande el universo de LoL con una experiencia RPG independiente.", date: "2023-10-01", source: "Riot Games" },
  { id: 56, category: 'popular', title: "Fall Guys se Vuelve Open Source", excerpt: "Mediatonic toma la audaz decisión de hacer open source su popular juego battle royale.", date: "2023-09-30", source: "Mediatonic" },
  { id: 57, category: 'popular', title: "Among Us VR se Convierte en el Juego VR Más Vendido", excerpt: "La adaptación VR del juego de deducción social lidera las listas en todas las plataformas.", date: "2023-09-29", source: "Innersloth" },
  { id: 58, category: 'popular', title: "Creador de Stardew Valley Anuncia Nuevo Juego", excerpt: "ConcernedApe revela los primeros detalles de su próximo proyecto después de Stardew Valley.", date: "2023-09-28", source: "ConcernedApe" },
  { id: 59, category: 'popular', title: "Final Fantasy XIV Supera en Suscriptores a WoW", excerpt: "El MMORPG de Square Enix se convierte oficialmente en el juego con más suscripciones en el género.", date: "2023-09-27", source: "Square Enix" },
  { id: 60, category: 'popular', title: "Anunciada Secuela de Undertale", excerpt: "Toby Fox insinúa una continuación de su aclamado RPG indie clásico.", date: "2023-09-26", source: "Toby Fox" },
  
      // Upcoming Releases
      { id: 61, category: 'upcoming', title: "Fecha de Lanzamiento de GTA VI Revelada", excerpt: "Rockstar Games finalmente comparte el período de lanzamiento del próximo juego de Grand Theft Auto.", date: "2023-10-15", source: "Rockstar Games" },
      { id: 62, category: 'upcoming', title: "The Elder Scrolls VI: Tráiler Oficial", excerpt: "Bethesda lanza el primer tráiler oficial del tan esperado RPG.", date: "2023-10-14", source: "Bethesda" },
      { id: 63, category: 'upcoming', title: "Fecha de Lanzamiento de Breath of the Wild 2 Anunciada", excerpt: "Nintendo confirma la fecha exacta de lanzamiento de la secuela de Zelda: Breath of the Wild.", date: "2023-10-13", source: "Nintendo" },
      { id: 64, category: 'upcoming', title: "Nueva Entrega de BioShock Tiene Fecha de Lanzamiento", excerpt: "2K Games reduce el período de lanzamiento para el próximo juego de BioShock.", date: "2023-10-12", source: "2K Games" },
      { id: 65, category: 'upcoming', title: "Detalles del Pase de Expansión de Starfield", excerpt: "Bethesda detalla el contenido próximo para su RPG de exploración espacial.", date: "2023-10-11", source: "Bethesda" },
      { id: 66, category: 'upcoming', title: "Anuncio de DLC para God of War Ragnarök", excerpt: "Santa Monica Studio sorprende a los fans con planes de un DLC sustancial.", date: "2023-10-10", source: "PlayStation Blog" },
      { id: 67, category: 'upcoming', title: "Fecha de Lanzamiento de Hollow Knight: Silksong", excerpt: "Team Cherry finalmente revela cuándo los jugadores podrán disfrutar de la esperada secuela.", date: "2023-10-09", source: "Team Cherry" },
      { id: 68, category: 'upcoming', title: "Nuevo Escenario de Assassin's Creed Revelado", excerpt: "Ubisoft anuncia el entorno histórico para el próximo juego de Assassin's Creed.", date: "2023-10-08", source: "Ubisoft" },
      { id: 69, category: 'upcoming', title: "Overwatch 3 en Desarrollo, Confirma Blizzard", excerpt: "Blizzard Entertainment comienza a trabajar en la siguiente entrega de su franquicia de disparos en equipo.", date: "2023-10-07", source: "Blizzard" },
      { id: 70, category: 'upcoming', title: "Secuela de Cyberpunk 2077 Entra en Preproducción", excerpt: "CD Projekt Red inicia los trabajos preliminares para la secuela de Cyberpunk 2077.", date: "2023-10-06", source: "CD Projekt Red" },
      { id: 71, category: 'upcoming', title: "Nuevo Juego de Silent Hill Anunciado", excerpt: "Konami se asocia con un desarrollador reconocido para la revitalización de la serie.", date: "2023-10-05", source: "Konami" },
      { id: 72, category: 'upcoming', title: "Actualización en el Desarrollo de Metroid Prime 4", excerpt: "Nintendo comparte un informe de progreso sobre la esperada secuela de Metroid.", date: "2023-10-04", source: "Nintendo" },
      { id: 73, category: 'upcoming', title: "Revelación de Gameplay de Dragon Age 4", excerpt: "BioWare muestra las primeras imágenes de juego de la próxima entrega de Dragon Age.", date: "2023-10-03", source: "BioWare" },
      { id: 74, category: 'upcoming', title: "Nuevo Proyecto de Naughty Dog Anticipado", excerpt: "El aclamado estudio detrás de The Last of Us insinúa una nueva franquicia.", date: "2023-10-02", source: "Naughty Dog" },
      { id: 75, category: 'upcoming', title: "Persona 6 Oficialmente en Desarrollo", excerpt: "Atlus confirma que ha comenzado el trabajo en la próxima entrega principal de Persona.", date: "2023-10-01", source: "Atlus" },
      { id: 76, category: 'upcoming', title: "Próximo Juego de Hideo Kojima Revelado", excerpt: "El diseñador legendario presenta el último proyecto de su estudio.", date: "2023-09-30", source: "Kojima Productions" },
      { id: 77, category: 'upcoming', title: "Anunciada la Parte 3 del Remake de Final Fantasy VII", excerpt: "Square Enix confirma el desarrollo de la parte final de la trilogía del remake de FF7.", date: "2023-09-29", source: "Square Enix" },
      { id: 78, category: 'upcoming', title: "Nuevo Juego de Crash Bandicoot en Desarrollo", excerpt: "Activision revela planes para la próxima entrega de la serie Crash Bandicoot.", date: "2023-09-28", source: "Activision" },
      { id: 79, category: 'upcoming', title: "Remaster de Bloodborne Llegará a PS5 y PC", excerpt: "La obra maestra gótica de FromSoftware recibirá una mejora para la generación actual y una versión para PC.", date: "2023-09-27", source: "Sony Interactive Entertainment" },
      { id: 80, category: 'upcoming', title: "Skate 4 Entra en Fase Final de Desarrollo", excerpt: "La revitalización de la querida serie de skateboarding de EA está cerca de completarse.", date: "2023-09-26", source: "Electronic Arts" },
    ]
  
    const filteredNews = newsItems.filter(item => item.category === selectedCategory)



  return (
    <div className="flex flex-col min-h-screen">
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
      {user ? (
        <div className="relative">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <User className="h-5 w-5 text-gray-700" />
            <span>{user.name}</span>
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
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


      <main className="flex-1 container mx-auto max-w-5xl py-6 md:py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Gaming News</h1>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {newsCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-shadow ${
                selectedCategory === category.id
                  ? "bg-black text-white"
                  : "border border-gray-300 text-black"
              }`}
            >
              <category.icon className="mr-2 h-4 w-4" />
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredNews.map((news) => (
            <div key={news.id} className="border p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">{news.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{news.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <time dateTime={news.date}>{news.date}</time>
                <span>{news.source}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">No news available in this category at the moment.</p>
        )}
      </main>


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
