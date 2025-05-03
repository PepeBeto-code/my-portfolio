import React from "react";
import BackLink from "../../../components/BackLink";
import * as motion from "motion/react-client";

const images = [
  "/images/cremas/cremas1.png",
  "/images/cremas/cremas2.png",
  "/images/cremas/cremas3.png",
  "/images/cremas/cremas4.png",
  "/images/cremas/cremas4.png",
];

export const metadata = {
  title: "Cremas Corporales | Hidratantes y Reafirmantes",
  description:
    "Página informativa sobre cremas hidratantes y reafirmantes para el cuidado de tu piel. Desarrollada con Next.js y React, optimizada para SEO.",
  keywords: [
    "cremas corporales",
    "cremas hidratantes",
    "cremas reafirmantes",
    "cuidado de la piel",
    "Next.js",
    "React",
    "SEO",
  ],
  authors: [{ name: "PepeBeto-code", url: "https://github.com/PepeBeto-code" }],
  openGraph: {
    title: "Cremas Corporales | Hidratantes y Reafirmantes",
    description:
      "Descubre las mejores cremas hidratantes y reafirmantes para tu piel en esta página moderna y optimizada.",
    url: "https://effulgent-frangollo-7b19c4.netlify.app/",
    siteName: "Cremas Corporales",
    images: [
      {
        url: "/images/cremas/cremas1.png",
        width: 800,
        height: 600,
        alt: "Imagen de cremas corporales",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function page() {
  return (
    <main className="">
      <div className="container">
        <BackLink></BackLink>
      </div>

      <section className="py-16 shadow-[0_11px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="container flex flex-col items-center">
          <motion.h1
            className="section__title mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Cremas Corporales
          </motion.h1>
          <p className="section__content mb-6">
            Página informativa sobre cremas hidratantes y reafirmantes para el
            cuidado de tu piel.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://effulgent-frangollo-7b19c4.netlify.app/"
              target="_blank"
              className="button button--principal"
            >
              Ver Demo
            </a>
            <a
              href="https://github.com/PepeBeto-code/cremas.git"
              target="_blank"
              className="button button--secondary"
            >
              Ver Código
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__subtitle">Descripción General</h2>
        <p className="mb-6">
          Este proyecto es una página web desarrollada con{" "}
          <strong>Next.js</strong> y <strong>React</strong>, pensada para
          informar a los usuarios sobre las mejores cremas corporales para
          hidratar y reafirmar la piel.
        </p>
        <p>
          La página busca posicionarse en buscadores aplicando estrategias SEO
          como palabras clave relevantes, etiquetas HTML semánticas y una
          estructura bien organizada.
        </p>
      </section>

      <section className="section">
        <h2 className="section__subtitle text-center">Capturas de Pantalla</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center gap-2 bg-gray-200 px-4 py-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <img
                src={img}
                alt="Imagen de proyecto Onboarding"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section__subtitle">Características principales</h2>
        <ul className="list list--bulleted">
          <li className="list__item">
            Diseño de una interfaz moderna y responsiva usando React y Next.js.
          </li>
          <li className="list__item">
            Implementación de arquitectura de componentes para un código
            escalable.
          </li>
          <li className="list__item">
            Optimización de SEO: etiquetas semánticas, palabras clave y
            estructura amigable para buscadores.
          </li>
          <li className="list__item">
            Preparación de contenidos y categorías para futuras extensiones del
            sitio.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section__subtitle">Tecnologías Utilizadas</h2>
        <ul className="list list--bulleted">
          <li className="list__item">Next.js</li>
          <li className="list__item">React</li>
          <li className="list__item">CSS Modules / Styled Components</li>
          <li className="list__item">Netlify (despliegue)</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section__subtitle">Resultados</h2>
        <p className="mb-4">
          La página permite a los usuarios conocer opciones de cremas
          hidratantes y reafirmantes, con recomendaciones personalizadas. El
          diseño responsivo garantiza una buena experiencia en dispositivos
          móviles, y el trabajo de SEO sienta las bases para posicionarse en
          buscadores.
        </p>
      </section>

      <section className="section">
        <h2 className="section__subtitle !text-center mb-6">
          Accede al Proyecto
        </h2>
        <div className="flex justify-center space-x-8">
          <a
            href="https://effulgent-frangollo-7b19c4.netlify.app/"
            target="_blank"
            className="button  button--principal"
          >
            Ver Sitio Web
          </a>
          <a
            href="https://github.com/PepeBeto-code/cremas.git"
            className="button button--secondary"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Ver Código
          </a>
        </div>
      </section>
    </main>
  );
}
