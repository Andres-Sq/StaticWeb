'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/logo-zharkaz.svg" alt="Zharkaz Logo" width={40} height={40} />
          <span className="text-xl font-bold text-blue-700">ZHARKAZ</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-700">Inicio</Link>
          <Link href="/nosotros" className="hover:text-blue-700">Nosotros</Link>
          <Link href="/servicios" className="hover:text-blue-700">Servicios</Link>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white px-4 pt-2 pb-4 space-y-2 text-gray-700 font-medium">
          <Link href="#servicios" className="block hover:text-blue-700" onClick={() => setIsOpen(false)}>Servicios</Link>
          <Link href="#contacto" className="block hover:text-blue-700" onClick={() => setIsOpen(false)}>Contacto</Link>
        </div>
      </div>
    </header>
  );
}