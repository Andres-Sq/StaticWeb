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
            En Zharkaz nos comprometemos a proteger tu privacidad. La información que recopilamos se utiliza
            únicamente para proporcionar nuestros servicios y mejorar tu experiencia con nosotros.
          </p>

          <p>
            <strong>Información recopilada:</strong> Podemos recopilar tu nombre, dirección de correo electrónico,
            número de teléfono y otra información relacionada con nuestros servicios.
          </p>

          <p>
            <strong>Uso de la información:</strong> Utilizamos tu información para comunicarnos contigo, responder tus
            consultas y brindarte soporte técnico, marketing digital o asistencia en redes.
          </p>

          <p>
            <strong>Protección de datos:</strong> Aplicamos medidas de seguridad para garantizar la protección de tus
            datos personales. No compartimos tu información con terceros sin tu consentimiento.
          </p>

          <p>
            <strong>Cookies:</strong> Nuestro sitio puede usar cookies para mejorar la funcionalidad y analizar el
            tráfico. Puedes desactivarlas en la configuración de tu navegador.
          </p>

          <p>
            <strong>Derechos del usuario:</strong> Tienes derecho a acceder, rectificar o eliminar tus datos personales
            en cualquier momento. Para ello, puedes contactarnos a través del correo info@zharkaz.com.
          </p>

          <p>
            <strong>Modificaciones:</strong> Esta política puede ser actualizada ocasionalmente. Te recomendamos
            revisarla periódicamente.
          </p>

          <p>Última actualización: abril 2025</p>
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