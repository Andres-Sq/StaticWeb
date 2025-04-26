import Image from "next/image";
import { useMultiModal } from "@/hooks/useMultiModal";
import type { ModalKey } from "@/hooks/useMultiModal";

type Service = {
  title: string;
  desc: string;
  imgSrc: string;
  modalKey: ModalKey;
};

const services: Service[] = [
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

export const ServicesList = () => {
  const { open } = useMultiModal();

  return (
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
          <a
            onClick={() => open(modalKey)}
            className="mt-auto text-white bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-6 rounded-lg transition-all cursor-pointer"
          >
            Saber más
          </a>
        </div>
      ))}
    </div>
  );
};