'use client';

import { useEffect, useRef } from 'react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
//Efecto para cerrar fuera del area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-white w-full max-w-2xl mx-4 p-6 rounded-xl shadow-lg overflow-y-auto max-h-[90vh]"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Política de Privacidad</h2>
        <div className="text-sm text-gray-700 space-y-4">
          <p>
            TEXTO
          </p>

          <p>
            <strong>Información recopilada:</strong> TEXTO.
          </p>

          <p>
            <strong>Uso de la información:</strong> TEXTO.
          </p>

          <p>
            <strong>Protección de datos:</strong> TEXTO.
          </p>

          <p>
            <strong>Cookies:</strong> TEXTO.
          </p>

          <p>
            <strong>Derechos del usuario:</strong> TEXTO.
          </p>

          <p>
            <strong>Modificaciones:</strong> TEXTO.
          </p>

          <p>Última actualización: Fecha+año</p>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}