import Navbar from "@/components/Navbar";
import ContactFloating from "@/components/ContactFloating";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 py-20 bg-gradient-to-b from-blue-50 to-white max-w-7xl mx-auto">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold text-blue-700 leading-tight">
              Impulsa tu negocio con soluciones digitales personalizadas
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              En Zharkaz transformamos ideas en tecnología eficiente y accesible.
            </p>
            <Link href="/servicios">
                Conoce nuestros servicios
            </Link>
          </div>
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image
              src="/images/hero-zharkaz.png"
              alt="Soluciones digitales"
              width={500}
              height={400}
              className="rounded-xl"
              priority
            />
          </div>
        </section>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
              ¿Qué podemos hacer por ti?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[ 
                ["💻 Apps Personalizadas", "Creamos sistemas adaptados a tu negocio."],
                ["🌐 Sitios Web Profesionales", "Diseño innovador, experiencia de usuario superior y optimización SEO."],
                ["📡 Redes y conectividad", "Soluciones de conectividad segura y eficiente."]
              ].map(([title, desc], i) => (
                <div key={i} className="bg-blue-50 p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
                  <p className="mt-2 text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-blue-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-10">¿Por qué elegir Zharkaz?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Soporte cercano", "Respuesta rápida", "Precios accesibles", "Soluciones efectivas"].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                  <p className="font-semibold text-blue-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 text-center bg-gradient-to-t from-blue-50 to-white">
          <h2 className="text-3xl font-bold text-blue-700">¿Listo para comenzar?</h2>
          <p className="mt-4 text-gray-700">Conversemos sobre cómo llevar tu negocio al siguiente nivel.</p>
          <p className="mt-6 text-gray-600 text-base">
            ¿Tienes preguntas?
          </p>
        </section>
        <Footer />
      </div>
      <ContactFloating />
    </main>
  );
}