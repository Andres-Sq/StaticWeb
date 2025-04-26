'use client';

import Navbar from "@/components/Navbar";
import ContactFloating from "@/components/ContactFloating";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useMultiModal, ModalKey } from "@/hooks/useMultiModal";

export default function ServiciosPage() {
  const { open, isOpen, close } = useMultiModal();

  const services: {
    title: string;
    desc: string;
    imgSrc: string;
    modalKey: Exclude<ModalKey, null | 'privacy'>;
  }[] = [
    {
      title: "💻 Desarrollo de aplicaciones",
      desc: "Creamos aplicaciones eficientes y escalables, adaptadas a las necesidades de tu negocio.",
      imgSrc: "/images/desarrollo-aplicaciones.png",
      modalKey: "app",
    },
    {
      title: "🌐 Desarrollo de páginas web",
      desc: "Diseñamos sitios web rápidos, atractivos y enfocados en la conversión de usuarios.",
      imgSrc: "/images/desarrollo-web.png",
      modalKey: "web",
    },
    {
      title: "🛠️ Soporte técnico general",
      desc: "Ofrecemos diagnóstico, mantenimiento y reparación de sistemas para mantener tu negocio funcionando.",
      imgSrc: "/images/soporte-tecnico.png",
      modalKey: "soporte",
    },
    {
      title: "📡 Redes y conectividad",
      desc: "Instalamos y configuramos redes empresariales, asegurando la conectividad y seguridad de tu infraestructura.",
      imgSrc: "/images/redes-conectividad.png",
      modalKey: "redes",
    },
    {
      title: "📱 Marketing digital",
      desc: "Desarrollamos estrategias de marketing online para aumentar tu alcance y atraer más clientes.",
      imgSrc: "/images/marketing-digital.png",
      modalKey: "Marketing",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      <Navbar />

      <div className="pt-20">
        <section className="text-center py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
          <h1 className="text-4xl font-bold text-blue-700">Nuestros Servicios</h1>
          <p className="mt-4 text-lg text-gray-700">
            Conoce cómo podemos ayudarte a mejorar tu negocio con soluciones digitales innovadoras.
          </p>
        </section>

        <section id="servicios" className="py-16 px-4 w-full bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center text-blue-700 mb-8">
              Servicios que ofrecemos
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ title, desc, imgSrc, modalKey }, i) => (
                <div
                  key={i}
                  className="bg-blue-50 p-6 rounded-xl shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                  <Image
                    src={imgSrc}
                    alt={title}
                    width={96}
                    height={96}
                    className="mb-4"
                    priority
                  />
                  <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
                  <p className="mt-2 text-gray-600">{desc}</p>
                  <button
                    onClick={() => open(modalKey)}
                    className="mt-auto text-white bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-6 rounded-lg transition-all"
                  >
                    Saber más
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <ContactFloating />

      {/* Modales simples como ejemplo */}
      {services.map(({ modalKey, title }, i) =>
        isOpen(modalKey) ? (
          <div
            key={modalKey}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <div className="bg-white p-6 rounded-xl max-w-md text-center">
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <p className="text-gray-700">Aquí puedes agregar más detalles del servicio {title}.</p>
              <button
                onClick={close}
                className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : null
      )}
    </main>
  );
}