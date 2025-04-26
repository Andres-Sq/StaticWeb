'use client';
import Head from 'next/head';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactFloating from '@/components/ContactFloating';

const services = [
  {
    title: '💻 Desarrollo de aplicaciones',
    desc: 'Creamos aplicaciones eficientes y escalables, adaptadas a las necesidades de tu negocio.',
    imgSrc: '/images/desarrollo-aplicaciones.png',
    modalKey: 'app' as const,
    modalContent: "Desarrollamos aplicaciones móviles y de escritorio personalizadas, pensadas para optimizar los procesos de tu negocio. Ya sea que necesites una app interna o un producto para tus clientes, creamos soluciones escalables y seguras con las tecnologías más innovadoras.",
  },
  {
    title: '🌐 Desarrollo de páginas web',
    desc: 'Diseñamos sitios web rápidos, atractivos y enfocados en la conversión de usuarios.',
    imgSrc: '/images/desarrollo-web.png',
    modalKey: 'web' as const,
    modalContent: "Creamos páginas web altamente interactivas y visualmente atractivas, diseñadas para atraer y retener a los usuarios. Nos enfocamos en la experiencia de usuario (UX) y optimización SEO para garantizar la mejor visibilidad de tu marca en los motores de búsqueda.",
  },
  {
    title: '🛠️ Soporte técnico general',
    desc: 'Ofrecemos diagnóstico, mantenimiento y reparación de sistemas para mantener tu negocio funcionando.',
    imgSrc: '/images/soporte-tecnico.png',
    modalKey: 'soporte' as const,
    modalContent: "Ofrecemos soporte técnico completo para garantizar el buen funcionamiento de tu infraestructura tecnológica. Nuestro equipo está listo para diagnosticar problemas, realizar mantenimiento preventivo y solucionar cualquier inconveniente técnico que surja en tu empresa.",
  },
  {
    title: '📡 Redes y conectividad',
    desc: 'Instalamos y configuramos redes empresariales, asegurando la conectividad y seguridad de tu infraestructura.',
    imgSrc: '/images/redes-conectividad.png',
    modalKey: 'redes' as const,
    modalContent: "Instalamos y gestionamos redes empresariales robustas y seguras. Desde la configuración de redes locales (LAN) hasta soluciones de red más avanzadas, aseguramos que tu empresa tenga una conectividad confiable, segura y eficiente, adaptada a tus necesidades.",
  },
  {
    title: '📱 Marketing digital',
    desc: 'Desarrollamos estrategias de marketing online para aumentar tu alcance y atraer más clientes.',
    imgSrc: '/images/marketing-digital.png',
    modalKey: 'Marketing' as const,
    modalContent: "Implementamos estrategias de marketing digital orientadas a resultados. Te ayudamos a aumentar la visibilidad de tu marca, atraer más clientes y generar conversiones a través de campañas de SEO, SEM, marketing de contenidos, redes sociales y más.",
  },
];

export default function ServiciosPage() {
  const { open, isOpen, close } = useModal();
  const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      <Head>
        <title>Servicios | Zharkaz</title>
        <meta
          name="description"
          content="Descubre los servicios de desarrollo web, aplicaciones, soporte técnico, redes y marketing digital que ofrece Zharkaz para impulsar tu negocio."
        />
        <meta
          name="keywords"
          content="desarrollo web, aplicaciones, soporte técnico, redes, marketing digital, Zharkaz"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white text-center">
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
                <Image src={imgSrc} alt={title} width={96} height={96} className="mb-4" priority />
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
      <ContactFloating />
      {/* Modal */}
      {services.map(({ modalKey, title, modalContent }) =>
        isOpen(modalKey) ? (
          <div key={modalKey} className="fixed inset-0 bg-black/40 bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm" onClick={handleCloseModal}> 
            <div className="bg-white p-6 rounded-xl max-w-md text-center">
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-gray-700">{modalContent}</p>
              {/*<Image src={modalImg} alt={title} width={100} height={100} className="mx-auto mb-4" />*/}
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