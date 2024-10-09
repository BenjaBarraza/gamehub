// components/Footer.js
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/logo.ico" alt="GameHub Logo" width={32} height={32} />
          <p className="text-gray-600">&copy; 2024 GameHub. All rights reserved.</p>
        </div>
        <nav className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/about" className="text-gray-600 hover:text-black">Sobre nosotros</Link>
          <Link href="/contact" className="text-gray-600 hover:text-black">Contacto</Link>
          <Link href="/privacy" className="text-gray-600 hover:text-black">Privacidad</Link>
          <Link href="/terms" className="text-gray-600 hover:text-black">Términos</Link>
        </nav>
      </div>
    </footer>
  );
}
