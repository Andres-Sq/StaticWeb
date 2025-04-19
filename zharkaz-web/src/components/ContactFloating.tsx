'use client';

import { useState, useRef } from 'react';

export default function ContactFloatingForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleClose = () => {
    setIsOpen(false);
    setFormStatus('');
    formRef.current?.reset();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch('https://formsubmit.co/YOUR_EMAIL@zharkaz.com', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setFormStatus('✅ ¡Mensaje enviado con éxito!');
      form.reset();
    } else {
      setFormStatus('❌ Error al enviar. Intenta de nuevo.');
    }
  };

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
          className="fixed inset-0 bg-white/20 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <div className="bg-white/95 rounded-2xl p-6 w-96 shadow-xl relative animate-fade-in-up border border-gray-200">
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
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition w-full"
              >
                Enviar
              </button>
              {formStatus && (
                <p className="mt-3 text-sm text-center text-green-600">{formStatus}</p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}