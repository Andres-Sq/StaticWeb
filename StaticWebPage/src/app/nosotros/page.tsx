import Navbar from "@/components/Navbar";
import ContactFloating from "@/components/ContactFloating";
import Footer from '@/components/Footer';
import Image from "next/image";

export const metadata = {
  title: "Nosotros | TuMarca",
  description: "Desc. TuMarca",
  keywords: "keywords",
  robots: "index, follow",
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 pt-24 pb-12">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 border-b pb-2 border-gray-200">
          Nosotros
        </h1>
        <section className="space-y-8 text-lg">
          <p>
            Texto.
          </p>
          <p>
            Texto.
          </p>
          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-2">Misión</h2>
            <p>
              Texto
            </p>
            <Image src="/images/" alt="Misión" width={800} height={400}className="rounded-xl shadow-md mx-auto my-6"/>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-2">Visión</h2>
            <p>
              Texto.
            </p>
            <div className="mt-4">
            <Image src="/images/" alt="Visión" width={800} height={400} className="rounded-xl shadow-md mx-auto my-6"/>            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-2">Valores o Metas</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Texto</li>
              <li>Texto</li>
              <li>Texto</li>
              <li>Texto</li>
              <li>Texto</li>
            </ul>
            <div className="mt-4">
            <Image src="/images/" alt="Valores/Metas" width={800} height={400} className="rounded-xl shadow-md mx-auto my-6"/>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <ContactFloating />
    </main>
  );
}