// src/components/Layout.js
import Header from "./Header"; // Importa tu componente Header existente
import Footer from "./Footer"; // Importa tu componente Footer existente

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Incluye el Header en la parte superior */}
      <main className="flex-1 container mx-auto px-4">
        {children} {/* Contenido de cada página */}
      </main>
      <Footer /> {/* Incluye el Footer en la parte inferior */}
    </div>
  );
}
