import React from "react";

import Navbar from "@/components/Navbar";
import ContactFloating from "@/components/ContactFloating";
import Footer from '@/components/Footer';
import Image from "next/image"; // Si quieres añadir alguna imagen

export const metadata = {
  title: "Nosotros | Zharkaz",
  description: "Conoce más sobre Zharkaz, nuestra misión, visión y valores.",
  keywords: "Zharkaz, soluciones tecnológicas, misión, visión, valores, innovación, calidad",
  robots: "index, follow", // Asegúrate de que los motores de búsqueda indexen esta página
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 pt-24 pb-12">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 border-b pb-2 border-gray-200">
          Sobre Nosotros
        </h1>
        
        <section className="space-y-8 text-lg">
          <p>
            En <strong>Zharkaz</strong>, nos dedicamos a ofrecer soluciones tecnológicas innovadoras que impulsan el crecimiento de las empresas. Nuestro enfoque está basado en la excelencia, el compromiso y la satisfacción de nuestros clientes.
          </p>
          <p>
            Con años de experiencia en el sector, brindamos servicios como desarrollo de software, soluciones empresariales, soporte técnico, y más, ajustados a las necesidades específicas de cada cliente.
          </p>

          {/* Misión */}
          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-2">Nuestra Misión</h2>
            <p>
              Impulsar la transformación digital de las empresas mediante soluciones tecnológicas eficientes, escalables y confiables.
            </p>
            {/* Agregar imagen ilustrativa o icono relacionado */}
            <Image src="/images/mision.jpg" alt="Nuestra misión" width={800} height={400}className="rounded-xl shadow-md mx-auto my-6"/>
          </div>

          {/* Visión */}
          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-2">Nuestra Visión</h2>
            <p>
              Ser líderes en soluciones tecnológicas en Latinoamérica, aportando innovación y valor a cada proyecto.
            </p>
            <div className="mt-4">
            <Image src="/images/vision.jpg" alt="Nuestra visión" width={800} height={400} className="rounded-xl shadow-md mx-auto my-6"/>            </div>
          </div>

          {/* Valores */}
          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-2">Nuestros Valores</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Innovación constante</li>
              <li>Compromiso con la calidad</li>
              <li>Orientación al cliente</li>
              <li>Ética profesional</li>
              <li>Trabajo en equipo</li>
            </ul>
            {/* Se puede añadir alguna imagen visual o gráfico que destaque estos valores */}
            <div className="mt-4">
            <Image src="/images/valores.jpg" alt="Nuestros valores" width={800} height={400} className="rounded-xl shadow-md mx-auto my-6"/>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <Footer />
      <ContactFloating />
    </main>
  );
}