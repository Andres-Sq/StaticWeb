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
        {/* Footer */}
        <Footer />
      </div>
      {/* Contactanos Button */}
      <ContactFloating />
    </main>
  );
}