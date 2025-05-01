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
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 py-20 bg-gradient-to-b from-green-50 to-white max-w-7xl mx-auto">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold text-green-700 leading-tight">
              Titulo
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Texto.
            </p>
            <Link href="/servicios">
                Link
            </Link>
          </div>
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image
              src="/images/imagen.jpg"
              alt="Imagen"
              width={500}
              height={400}
              className="rounded-xl"
              priority
            />
          </div>
        </section>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
              Titulo
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[ 
                ["Texto"],
                ["Texto"],
                ["Texto"]
              ].map(([title, desc], i) => (
                <div key={i} className="bg-green-50 p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-xl font-semibold text-green-700">{title}</h3>
                  <p className="mt-2 text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-10">Texto</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Item", "Item", "Item", "Item"].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                  <p className="font-semibold text-green-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 text-center bg-gradient-to-t from-green-50 to-white">
          <h2 className="text-3xl font-bold text-green-700">Texto</h2>
          <p className="mt-4 text-gray-700">Texto</p>
          <p className="mt-6 text-gray-600 text-base">
            Texto
          </p>
        </section>
        <Footer />
      </div>
      <ContactFloating />
    </main>
  );
}