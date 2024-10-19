// components/Header.js
import Link from "next/link";
import Image from "next/image";
import { Search, User, Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/games?search=${searchTerm.toLowerCase()}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
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
        </div>

        {/* Barra de búsqueda fuera del menú hamburguesa */}
        <form className="relative flex items-center w-full max-w-xs md:max-w-md lg:max-w-lg" onSubmit={handleSearch}>
          <Search className="absolute left-3 h-5 w-5 text-gray-500" />
          <input 
            type="search" 
            placeholder="Buscar juegos..." 
            className="pl-10 py-2 w-full border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        {/* Botón Menú y opciones */}
        <div className="flex items-center space-x-4">
          {/* Menú hamburguesa para pantallas pequeñas */}
          <button
            className="md:hidden block text-gray-700"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} {/* Cambia el ícono */}
          </button>

          {/* Menú normal para pantallas grandes */}
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

          {/* Mostrar información si el usuario está logueado */}
          {user ? (
            <div className="relative" ref={menuRef}>
              <button 
                onClick={toggleMenu} 
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
                      router.push("/"); 
                    }}
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/register/register" passHref>
                <button className="hidden md:flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <User className="h-5 w-5 text-gray-700" />
                  <span>Registrarse</span>
                </button>
              </Link>

              <Link href="/register/login" passHref>
                <button className="hidden md:flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <User className="h-5 w-5 text-gray-700" />
                  <span>Acceso</span>
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Menú desplegable para dispositivos móviles */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-16 bg-white z-50 flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link href="/games" className="text-lg text-gray-700 hover:text-black" onClick={toggleMobileMenu}>
            Juegos
          </Link>
          <button 
            className="text-lg text-gray-700 hover:text-black"
            onClick={() => {
              setMobileMenuOpen(false);
              router.push("/noticias");
            }}
          >
            Noticias
          </button>
          <Link href="/reviews" className="text-lg text-gray-700 hover:text-black" onClick={toggleMobileMenu}>
            Reseñas
          </Link>

          {user && (
            <button 
              className="text-lg text-gray-700 hover:text-black"
              onClick={() => {
                logout(); 
                setMobileMenuOpen(false);
                router.push("/"); 
              }}
            >
              Cerrar sesión
            </button>
          )}
        </div>
      )}
    </header>
  );
}
