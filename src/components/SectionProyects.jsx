import React from "react";
import ExpandingCard from "./ExpandingCard";
import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel";
import Link from "next/link";

const OPTIONS = { align: "start" };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const proyects = [
  {
    name: "Chat en vivo",
    src: "/proyectos/chatlive",
    description:
      "Aplicación de mensajería instantánea con comunicación en tiempo real,notificaciones push y seguridad avanzada para conversaciones rápidas y organizadas.",
    images: [
      {
        vertical: "/images/Chat/ChatV1.png",
        horizontal: "/images/Chat/Chat1.png",
      },
      {
        vertical: "/images/Chat/ChatV2.png",
        horizontal: "/images/Chat/Chat2.png",
      },
      {
        vertical: "/images/Chat/ChatV3.png",
        horizontal: "/images/Chat/Chat3.png",
      },
    ],
  },
  {
    name: "Storymap: Seguridad Vial en México",
    src: "/proyectos/storymap",
    description:
      "Sitio web interactivo desarrollado para el Instituto de Geografía de la UNAM, con visualización de datos de seguridad vial mediante mapas responsivos y diseño accesible.",
    images: [
      {
        vertical: "/images/storymap/storymapV1.png",
        horizontal: "/images/storymap/storymap1.png",
      },
      {
        vertical: "/images/storymap/storymapV2.png",
        horizontal: "/images/storymap/storymap2.png",
      },
      {
        vertical: "/images/storymap/storymapV3.png",
        horizontal: "/images/storymap/storymap3.png",
      },
      {
        vertical: "/images/storymap/storymapV4.png",
        horizontal: "/images/storymap/storymap4.png",
      },
    ],
  },
  {
    name: "Sistema de Onboarding Digital",
    src: "/proyectos/onboarding",
    description:
      "Plataforma de registro de clientes en múltiples etapas con autenticación segura, auditoría de acciones y despliegue en la nube.",
    images: [
      {
        vertical: "/images/onboarding/onboardingV1.png",
        horizontal: "/images/onboarding/onboarding1.png",
      },
      {
        vertical: "/images/onboarding/onboardingV2.png",
        horizontal: "/images/onboarding/onboarding2.png",
      },
      {
        vertical: "/images/onboarding/onboardingV3.png",
        horizontal: "/images/onboarding/onboarding3.png",
      },
      {
        vertical: "/images/onboarding/onboardingV4.png",
        horizontal: "/images/onboarding/onboarding4.png",
      },
    ],
  },
];

export default function SectionProyects() {
  return (
    <section id="projects" className="py-12 bg-[var(--secondary-color)]">
      <div className="flex flex-col container md:items-start items-center justify-center !mb-0">
        <h2 className="section__title">Proyectos Destacados</h2>
        <p className="section__content max-w-2xl !mb-0">
          He trabajado en una variedad de proyectos y he aprendido mucho en cada
          uno de ellos. Aquí te muestro algunos de los más destacados.
        </p>
      </div>
      <div className="container flex md:space-x-4 space-y-4 items-center justify-center flex-wrap md:!flex-nowrap">
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
          title={"Destacados del Catálogo"}
        >
          {proyects.map((p, index) => (
            <ExpandingCard key={index} proyect={p} />
          ))}
        </EmblaCarousel>
      </div>
    </section>
  );
}
