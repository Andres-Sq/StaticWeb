import { useState, useRef } from 'react';

export function useContactForm(onSuccess?: () => void) {
  const [formStatus, setFormStatus] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch('https://formsubmit.co/asu0090@zharkaz.com', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setFormStatus('✅ ¡Mensaje enviado con éxito!');
      form.reset();
      onSuccess?.();
    } else {
      setFormStatus('❌ Error al enviar. Intenta de nuevo.');
    }
  };

  const resetForm = () => {
    formRef.current?.reset();
    setFormStatus('');
  };

  return {
    formRef,
    formStatus,
    handleSubmit,
    resetForm,
  };
}