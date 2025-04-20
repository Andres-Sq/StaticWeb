'use client';

import { useState, useEffect } from 'react';
import { useContactForm } from '@/hooks/useContactForm';

export default function ContactFloatingForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const {
    formRef,
    handleSubmit,
    resetForm,
  } = useContactForm(() => {
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      handleClose();
    }, 2500);
  });

  const handleClose = () => {
    setIsOpen(false);
    resetForm();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.querySelector<HTMLInputElement>('input[name="name"]')?.focus();
      }, 100);
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-50 bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-800 transition"
      >
        Contáctanos
      </button>

      {isOpen && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-white/30 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <div className="bg-white rounded-2xl p-6 w-96 shadow-xl relative border border-gray-200 scale-100 transition-transform duration-300 ease-out">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl"
              onClick={handleClose}
              aria-label="Cerrar"
            >
              &times;
            </button>

            <h2 className="text-lg font-semibold text-blue-700 mb-4">Envíanos un mensaje</h2>

            <form onSubmit={handleSubmit} ref={formRef}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://zharkaz.com/gracias" />

              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                required
                className="w-full mb-3 px-3 py-2 border rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Tu correo"
                required
                className="w-full mb-3 px-3 py-2 border rounded"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Tu mensaje"
                required
                className="w-full mb-3 px-3 py-2 border rounded"
              />
              <button
                type="submit"
                disabled={isSent}
                className={`w-full py-2 px-4 rounded text-white transition ${
                  isSent
                    ? 'bg-green-600 cursor-default'
                    : 'bg-blue-700 hover:bg-blue-800'
                }`}
              >
                {isSent ? '¡Enviado!' : 'Enviar'}
              </button>
              {isSent && (
                <div className="mt-3 text-green-600 text-sm text-center">
                  ✅ ¡Mensaje enviado correctamente!
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}