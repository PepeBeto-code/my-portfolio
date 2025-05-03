import React from "react";
import BackLink from "../../components/BackLink";
import ProyectCard from "../../components/ProyectCard";
import Link from "next/link";

const proyects = [
  {
    name: "Chat en Vivo",
    title: "Proyecto destacado",
    description:
      "Aplicación de mensajería instantánea con comunicación en tiempo real,notificaciones push y seguridad avanzada para conversaciones rápidas y organizadas.",
    src: "/proyectos/chatlive",
    image: "images/Chat/ChatV3.png",
    images: [
      "images/Chat/Chat1.png",
      "images/Chat/Chat2.png",
      "images/Chat/Chat3.png",
    ],
    skills: [
      "Spring Boot",
      "WebSockets",
      "ReactJs",
      "Redux",
      "NextJs",
      "PostgreSQL",
      "Spring Data Jpa",
      "Docker",
    ],
  },
  {
    name: "Storymap: Seguridad Vial en México",
    title: "Proyecto destacado",
    description:
      "Sitio web interactivo desarrollado para el Instituto de Geografía de la UNAM, con visualización de datos de seguridad vial mediante mapas responsivos y diseño accesible.",
    src: "/proyectos/storymap",
    image: "images/Chat/ChatV3.png",
    images: [
      "images/storymap/storymap1.png",
      "images/storymap/storymap2.png",
      "images/storymap/storymap3.png",
      "images/storymap/storymap4.png",
    ],
    skills: ["JavaScript", "CSS3", "HTML5", "Leaflet.js"],
  },
  {
    name: "Página Informativa de Cremas Corporales",
    title: "Proyecto destacado",
    description:
      "Sitio informativo desarrollado con Next.js para presentar reseñas, comparativas y recomendaciones de cremas corporales, optimizado para SEO y preparado para expansión.",
    src: "/proyectos/creams",
    image: "images/cremas/cremas_main.png",
    images: [
      "images/cremas/cremas1.png",
      "images/cremas/cremas2.png",
      "images/cremas/cremas3.png",
    ],
    skills: [
      "NextJs",
      "ReactJs",
      "CSS Modules",
      "Styled Components",
      "Netlify",
      "SEO",
    ],
  },
  {
    name: "Sistema de Onboarding Digital",
    title: "Proyecto destacado",
    description:
      "Plataforma de registro de clientes en múltiples etapas con autenticación segura, auditoría de acciones y despliegue en la nube.",
    src: "/proyectos/onboarding",
    image: "images/Chat/ChatV3.png",
    images: [
      "/images/onboarding/onboarding1.png",
      "/images/onboarding/onboarding2.png",
      "/images/onboarding/onboarding3.png",
      "/images/onboarding/onboarding4.png",
    ],
    skills: [
      "Spring Boot",
      "Angular",
      "RxJS y Observables",
      "Docker",
      "PL/SQL",
      "PostgreSQL",
      "Sass",
    ],
  },
  {
    name: "Juego Multijugador",
    title: "Proyecto destacado",
    description:
      "Desarrollé un juego multijugador en Java utilizando sockets para la comunicación entre clientes y servidores.",
    src: "/proyectos/tic-tac-toe",
    image: "images/tictactoc.png",
    images: [
      "images/multijugador/client1init.png",
      "images/multijugador/client1finit.png",
      "images/multijugador/client2init.png",
    ],
    skills: ["Java", "Gson", "Sockets", "multi-thread", "Json"],
  },
  {
    name: "Simulación y Implementación de Protocolo rdt3.0 sobre UDP",
    title: "Proyecto destacado",
    description:
      "Protocolo rdt3.0: Transferencia Fiable Implementación del protocolo " +
      "rdt3.0 en entornos no confiables, simulando errores y adaptándolo a" +
      " UDP para garantizar entrega, orden e integridad de los datos.",
    src: "/proyectos/rdt3",
    image: "images/multijugador/rdt3.jpg",
    images: ["images/rdt3.jpg"],
    skills: ["Java", "Sockets Udp", "Redes"],
  },
];

export const metadata = {
  title: "Proyectos - Pepe dev",
  description:
    "Echa un vistazo a los proyectos que he desarrollado, donde aplico mis habilidades en desarrollo web, programación de sistemas y diseño de soluciones tecnológicas.",
  keywords:
    "proyectos, desarrollo web, JavaScript, React, Next.js, Angular, Java, programación, tecnologías web, soluciones tecnológicas",
  openGraph: {
    title: "Proyectos - Mi Portafolio",
    description:
      "Descubre los proyectos más importantes que he desarrollado, desde aplicaciones web hasta sistemas de software.",
    url: "https://pepedigital.netlify.app/proyectos",
    siteName: "Mi Portafolio",
    images: [
      {
        url: "/images/portafolio.png", // Asegúrate de tener esta imagen en /public/images/portfolio/
        width: 1200,
        height: 630,
        alt: "Proyectos - Mi Portafolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyectos - Mi Portafolio",
    description:
      "Echa un vistazo a los proyectos desarrollados con tecnologías como JavaScript, React, y más.",
    images: ["/images/portafolio.png"],
  },
};

export default function proyectos() {
  return (
    <div>
      <div className="container">
        <BackLink></BackLink>
      </div>
      <div className="container !pt-6">
        <div className="flex w-full flex-col md:items-start items-center justify-center !mb-0">
          <h2 className="section__title">Proyectos</h2>
          <p className="section__content max-w-2xl mb-2">
            He trabajado en una variedad de proyectos y he aprendido mucho en
            cada uno de ellos. En esta seccion puede echar un vistazo a algunos
            de ellos.
          </p>
        </div>
      </div>

      <div className="container !pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] w-full ">
          {proyects.map((p, index) => (
            <Link href={p.src} key={index}>
              <ProyectCard proyect={p}></ProyectCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
