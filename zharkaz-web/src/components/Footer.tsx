'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + descripción */}
        <div>
          <h3 className="text-white text-2xl font-bold">Zharkaz</h3>
          <p className="mt-2 text-sm">
            Soluciones digitales, soporte técnico, redes y marketing para tu negocio en Costa Rica.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-white font-semibold mb-2">Navegación</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
            <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
            <li><a href="/politica-privacidad" className="hover:text-white">Política de privacidad</a></li>
          </ul>
        </div>

        {/* Contacto y redes */}
        <div>
          <h4 className="text-white font-semibold mb-2">Contacto</h4>
          <ul className="text-sm space-y-1">
            <li>✉️ <a href="mailto:info@zharkaz.com" className="hover:text-white">info@zharkaz.com</a></li>
            <li>🌐 <a href="https://zharkaz.com" className="hover:text-white">www.zharkaz.com</a></li>
            <li>📍 San José, Costa Rica</li>
          </ul>
          <div className="flex space-x-4 mt-3">
            <a href="https://www.facebook.com/zharkaz" target="_blank" aria-label="Facebook" className="hover:text-white">📘</a>
            <a href="https://www.instagram.com/zharkaz" target="_blank" aria-label="Instagram" className="hover:text-white">📸</a>
            <a href="https://www.linkedin.com/company/zharkaz" target="_blank" aria-label="LinkedIn" className="hover:text-white">🔗</a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="text-center text-sm text-gray-500 mt-10">
        <p>&copy; {new Date().getFullYear()} Zharkaz. Todos los derechos reservados.</p>
      </div>

      {/* Botón ir arriba */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 bg-blue-700 text-white px-3 py-2 rounded-full shadow-md hover:bg-blue-800 transition"
          aria-label="Ir al inicio"
        >
          ↑
        </button>
      )}
    </footer>
  );
}