'use client';
import Head from 'next/head';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactFloating from '@/components/ContactFloating';

const services = [
  {
    title: 'Texto',
    desc: 'Desc',
    imgSrc: '/images/imagen.jpg',
    modalKey: 'app' as const,
    modalContent: "Contenido del Modal",
  },
  {
    title: 'Texto',
    desc: 'Desc',
    imgSrc: '/images/imagen.jpg',
    modalKey: 'web' as const,
    modalContent: "Contenido del Modal",
  },
  {
    title: 'Texto',
    desc: 'Desc',
    imgSrc: '/images/imagen.jpg',
    modalKey: 'soporte' as const,
    modalContent: "Contenido del Modal",
  },
  {
    title: 'Texto',
    desc: 'Desc',
    imgSrc: '/images/imagen.jpg',
    modalKey: 'redes' as const,
    modalContent: "Contenido del Modal",
  },
  {
    title: 'Texto',
    desc: 'Desc',
    imgSrc: '/images/imagen.jpg',
    modalKey: 'Marketing' as const,
    modalContent: "Contenido del Modal",
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
        <title>Saber mas</title>
        <meta
          name="description"
          content="Desc"
        />
        <meta
          name="keywords"
          content="keywords"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white text-center">
        <h1 className="text-4xl font-bold text-green-700">Servicios</h1>
        <p className="mt-4 text-lg text-gray-700">
          Mensaje
        </p>
      </section>
      <section id="servicios" className="py-16 px-4 w-full bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-green-700 mb-8">
            Titulo
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ title, desc, imgSrc, modalKey }, i) => (
              <div
                key={i}
                className="bg-green-50 p-6 rounded-xl shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <Image src={imgSrc} alt={title} width={96} height={96} className="mb-4" priority />
                <h3 className="text-xl font-semibold text-black-700">{title}</h3>
                <p className="mt-2 text-gray-600">{desc}</p>
                <button
                  onClick={() => open(modalKey)}
                  className="mt-auto text-white bg-green-500 hover:bg-green-700 font-semibold py-2 px-6 rounded-lg transition-all"
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