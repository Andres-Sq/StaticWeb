'use client';

import { useEffect, useState } from 'react';
import SocialLinks from './SocialLinks';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import { useMultiModal } from '@/hooks/useMultiModal';
import Link from 'next/link';

export default function Footer() {
  const [showTopButton, setShowTopButton] = useState(false);
  const { open, close, isOpen } = useMultiModal();

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
    <>
      <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-2xl font-bold">Zharkaz</h3>
            <p className="mt-2 text-sm">
              Soluciones digitales, soporte técnico, redes y marketing para tu negocio en Costa Rica.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Navegación</h4>
            <ul className="space-y-1 text-sm">
            <li>
              <Link href="/nosotros" className="hover:text-white" aria-label="Ir a la página de Servicios">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-white" aria-label="Ir a la página de Servicios">
                Servicios
              </Link>
            </li>
            <li>
              <a onClick={() => open('privacy')} className="hover:text-white cursor-pointer" aria-label="Ver Política de privacidad">
                Política de privacidad
              </a>
            </li>
          </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Contacto</h4>
            <ul className="text-sm space-y-1">
              <li>✉️ <a href="mailto:info@zharkaz.com" className="hover:text-white">info@zharkaz.com</a></li>
              <li>🌐 <a href="https://zharkaz.com" className="hover:text-white">www.zharkaz.com</a></li>
              <li>📍 San José, Costa Rica</li>
            </ul>
            <SocialLinks />
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-10">
          <p>&copy; {new Date().getFullYear()} Zharkaz. Todos los derechos reservados.</p>
        </div>

        {showTopButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-24 right-5 z-50 bg-blue-700 text-white px-3 py-2 rounded-full shadow-md hover:bg-blue-800 transition cursor-pointer"
            aria-label="Ir al inicio"
          >
            ↑
          </button>
        )}
      </footer>

      {/* Modal de Política de Privacidad */}
      <PrivacyPolicyModal isOpen={isOpen('privacy')} onClose={close} />
    </>
  );
}