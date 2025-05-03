import React from "react";
import BackLink from "../../../components/BackLink";
import * as motion from "motion/react-client";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { SiLeaflet } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

const images = [
  "/images/storymap/storymap1.png",
  "/images/storymap/storymap2.png",
  "/images/storymap/storymap3.png",
  "/images/storymap/storymap4.png",
];

export const metadata = {
  title: "Storymap: Seguridad Vial en México",
  description:
    "Storymap interactivo para explorar visualmente la situación de la seguridad vial en México. Desarrollado con Leaflet.js, JavaScript, HTML5 y CSS3 para difusión pública del Instituto de Geografía de la UNAM.",
  keywords:
    "storymap, seguridad vial, mapas interactivos, Leaflet.js, JavaScript, HTML5, CSS3, Instituto de Geografía, UNAM, visualización de datos",
  openGraph: {
    title: "Storymap: Seguridad Vial en México",
    description:
      "Sitio web interactivo que permite explorar la seguridad vial en México mediante mapas interactivos y datos relevantes.",
    url: "http://132.247.103.10:10006/istar-seguridad-vial/",
    siteName: "Storymap Seguridad Vial",
    images: [
      {
        url: "/images/storymap/storymap1.png", // asegúrate de tener esta imagen en /public/images/storymap/
        width: 1200,
        height: 630,
        alt: "Storymap - Seguridad Vial en México",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storymap: Seguridad Vial en México",
    description:
      "Storymap interactivo sobre seguridad vial en México, desarrollado con Leaflet.js y tecnologías web modernas.",
    images: ["/images/storymap/storymap1.png"],
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
            Storymap: Seguridad Vial en México
          </motion.h1>
          <p className="section__content !mb-6">
            Sitio web interactivo desarrollado para difundir información sobre
            seguridad vial a nivel nacional.
          </p>
          <a
            href="http://132.247.103.10:10006/istar-seguridad-vial/"
            target="_blank"
            className="button button--principal"
          >
            Ver Proyecto
          </a>
        </div>
      </section>

      <section className="section">
        <h2 className="section__subtitle">Descripción General</h2>
        <p className="mb-6">
          Este proyecto fue realizado en colaboración con el{" "}
          <strong className="section__content--highlighted">
            Instituto de Geografía de la UNAM
          </strong>
          , con el objetivo de desarrollar un{" "}
          <strong className="section__content--highlighted">
            Storymap interactivo
          </strong>{" "}
          que permita a la ciudadanía explorar visualmente la situación de la
          seguridad vial en México.
        </p>
        <p>
          El Storymap ofrece un recorrido narrativo apoyado por mapas
          interactivos y datos relevantes para concientizar sobre los riesgos y
          distribución de accidentes viales en el país.
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
        <h2 className="section__subtitle">Mis Aportaciones</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Reestructuración del código CSS, dividiéndolo en archivos modulares
            por funcionalidad.
          </li>
          <li>
            Implementación de variables CSS para facilitar cambios de diseño en
            el futuro.
          </li>
          <li>
            Diseño responsivo para mejorar la visualización en dispositivos
            móviles.
          </li>
          <li>
            Actualización del código JavaScript y Leaflet para mostrar nuevos
            datos en mapas.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section__subtitle">Tecnologías Utilizadas</h2>
        <ul className="list list--bulleted">
          <li className="list__item">JavaScript</li>
          <li className="list__item">HTML5</li>
          <li className="list__item">CSS3 (con variables personalizadas)</li>
          <li className="list__item">Leaflet.js para mapas interactivos</li>
        </ul>
        <div className="flex items-center justify-start space-x-4 !mt-4 pl-[2rem]">
          <IoLogoJavascript className=" text-yellow-600 text-[2rem]" />
          <TiHtml5 className=" text-orange-600 text-[2rem]" />
          <SiLeaflet className="  text-green-500 text-[2rem]" />
          <FaCss3Alt className=" text-[2rem]" />
        </div>
      </section>

      <section className="section">
        <h2 className="section__subtitle">Resultados</h2>
        <p className="mb-4">
          El sitio web resultante permite al público explorar visualmente datos
          de seguridad vial en México de forma interactiva, clara y adaptada a
          distintos dispositivos. El proyecto se encuentra actualmente{" "}
          <strong className="section__content--highlighted">en línea</strong> y
          forma parte del material de difusión pública del instituto.
        </p>
      </section>

      <section className="section flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6">Accede al Proyecto</h2>
        <a
          href="http://132.247.103.10:10006/istar-seguridad-vial/"
          target="_blank"
          className="button  button--principal"
        >
          Ver Sitio Web
        </a>
      </section>
    </main>
  );
}
