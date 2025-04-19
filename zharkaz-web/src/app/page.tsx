import Navbar from "@/components/Navbar";
import ContactFloating from "@/components/ContactFloating";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="text-center py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
          <h1 className="text-4xl font-bold text-blue-700">Bienvenido a Zharkaz</h1>
          <p className="mt-4 text-lg text-gray-700">
            Soluciones digitales y soporte técnico para impulsar tu negocio.
          </p>
        </section>

        {/* Servicios Section */}
        <section id="servicios" className="py-16 px-4 w-full bg-white">
          <h2 className="text-3xl font-semibold text-center text-blue-700">Nuestros Servicios</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              ["💻 Desarrollo de aplicaciones", "Creamos apps eficientes y escalables para tu empresa."],
              ["🌐 Desarrollo de páginas web", "Sitios modernos, rápidos y enfocados en conversión."],
              ["🛠️ Soporte técnico general", "Diagnóstico, mantenimiento y reparación de sistemas."],
              ["📡 Redes y conectividad", "Instalación y configuración de redes empresariales."],
              ["📱 Marketing digital", "Estrategias online para alcanzar más clientes."],
            ].map(([title, desc], i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Footer */}
        <Footer />
      </div>
      <ContactFloating />
    </main>
  );
}