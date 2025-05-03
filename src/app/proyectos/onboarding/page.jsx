import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BsFiletypeSass } from "react-icons/bs";
import { FaAngular } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { DiNginx } from "react-icons/di";
import { SiRender } from "react-icons/si";
import Image from "next/image";
import BackLink from "../../../components/BackLink";

const images = [
  "/images/onboarding/onboarding1.png",
  "/images/onboarding/onboarding2.png",
  "/images/onboarding/onboarding3.png",
  "/images/onboarding/onboarding4.png",
  "/images/onboarding/onboarding5.png",
  "/images/onboarding/onboarding6.png",
];

export const metadata = {
  title: "Onboarding Digital - Registro Seguro de Clientes",
  description:
    "Plataforma de onboarding digital para registrar nuevos clientes de forma eficiente y segura, con autenticación JWT, cifrado AES-256, auditoría y más.",
  keywords:
    "onboarding, registro digital, clientes, autenticación JWT, cifrado AES-256, auditoría, Java, Spring Boot, Angular, Docker, PostgreSQL, SaaS",
  openGraph: {
    title: "Onboarding Digital - Registro Seguro de Clientes",
    description:
      "Plataforma segura de onboarding digital con autenticación, cifrado, gestión por etapas y auditoría.",
    url: "https://onboarding-app-jqzc.onrender.com/lading-page",
    siteName: "Onboarding Digital",
    images: [
      {
        url: "/images/onboarding/onboarding1.png", // asegúrate de tener esta imagen en public/images/onboarding/
        width: 1200,
        height: 630,
        alt: "Onboarding Digital - Registro de clientes",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onboarding Digital - Registro Seguro de Clientes",
    description:
      "Onboarding digital eficiente y seguro con autenticación JWT, cifrado AES-256 y auditoría.",
    images: ["/images/onboarding/onboarding1.png"],
  },
};

export default function Onboardin() {
  return (
    <main>
      <div className="container">
        <BackLink></BackLink>
      </div>
      <section className="py-16 shadow-[0_11px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="container flex flex-col items-center">
          <h1 className="section__title mb-4">Sistema de Onboarding Digital</h1>
          <p className="section__content mb-6">
            Plataforma segura para el registro eficiente de nuevos clientes.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://onboarding-app-jqzc.onrender.com/lading-page"
              target="_blank"
              className="button button--principal"
            >
              Ver Demo
            </a>
            <a
              href="https://github.com/PepeBeto-code/onboarding"
              target="_blank"
              className="button button--secondary"
            >
              Ver Código
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__subtitle">Descripción</h2>
        <p className="">
          El Sistema de Onboarding Digital facilita el registro de nuevos
          clientes en múltiples etapas, asegurando una experiencia intuitiva,
          segura y auditable desde el inicio hasta la finalización del proceso.
        </p>
      </section>

      {/* <!-- Tecnologías --> */}
      <div className="section ">
        <h2 className="section__subtitle">Tecnologías utilizadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
          <div className="grid grid-cols-1 ">
            <h3 className="section__subtitle">Backend:</h3>
            <ul className="section__content list list--bulleted">
              <li className="list__item">Java 21 + Spring Boot</li>
              <li className="list__item">Spring Security (JWT)</li>
              <li className="list__item">AES-256 (encriptación)</li>
              <li className="list__item">JPA/Hibernate</li>
              <li className="list__item">PostgreSQL</li>
            </ul>
            <div className="flex items-center justify-center space-x-4">
              <FaJava className=" text-cyan-700 text-[2rem]" />
              <Image
                src="/SpringBootIcon.svg" // Ruta relativa en tu carpeta pública o una URL externa
                alt="Interfaz de ChatLive"
                width={500} // Ancho en píxeles
                height={300} // Altura en píxeles
                className="w-[2rem]"
              />
              <Image
                src="/postgresql.svg" // Ruta relativa en tu carpeta pública o una URL externa
                alt="Interfaz de ChatLive"
                width={500} // Ancho en píxeles
                height={300} // Altura en píxeles
                className="w-[2rem]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 ">
            <h3 className="section__subtitle">Frontend:</h3>
            <ul className="section__content list list--bulleted">
              <li className="list__item">Angular 16</li>
              <li className="list__item">
                RxJS (manejo de Observables y programación reactiva)
              </li>
              <li className="list__item">Javascript</li>
              <li className="list__item">Tailwind CSS</li>
              <li className="list__item">Metodología BEM</li>
              <li className="list__item">Sass</li>
            </ul>
            <div className="flex items-center justify-center space-x-4">
              <FaNodeJs className=" text-green-500 text-[2rem]" />
              <BsFiletypeSass className=" text-sky-400 text-[2rem]" />
              <FaAngular className=" text-red-500 text-[2rem]" />
              <Image
                src="/tailwind.svg" // Ruta relativa en tu carpeta pública o una URL externa
                alt="Interfaz de ChatLive"
                width={500} // Ancho en píxeles
                height={300} // Altura en píxeles
                className="w-[2rem]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <h3 className="section__subtitle">Extras:</h3>
            <ul className="section__content list list--bulleted">
              <li className="list__item">
                Contenerización y despliegue con{" "}
                <span className="section__content--highlighted">
                  Docker + Render + Ngnix + Docker Compose
                </span>
              </li>
            </ul>
            <div className="flex items-center justify-center space-x-4">
              <FaDocker className="text-sky-400 text-[2rem]" />
              <DiNginx className="text-green-500 text-[2rem]" />
              <SiRender className="text-[2rem]" />
            </div>
          </div>
        </div>
      </div>

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
        <h2 className="section__subtitle">Flujo de Usuario</h2>
        <ol className="list list--numbered">
          <li className="list__item">Registro o inicio de sesión.</li>
          <li className="list__item">Inicio del proceso de onboarding.</li>
          <li className="list__item">
            Captura de datos personales, dirección y documentos.
          </li>
          <li className="list__item">
            Finalización del proceso y posibilidad de edición posterior.
          </li>
        </ol>
      </section>

      <section className="section">
        <h2 className="section__subtitle">Reto Técnico y Solución</h2>
        <p className="mb-4">
          El principal desafío fue diseñar un flujo resiliente que permitiera a
          los usuarios continuar su registro de forma segura y trazable. Se
          implementaron:
        </p>
        <ul className="list list--bulleted">
          <li className="list__item">
            <span className="section__content--highlighted">JWT</span> para
            autenticación segura
          </li>
          <li className="list__item">
            {" "}
            <span className="section__content--highlighted">
              Cifrado AES-256
            </span>
            para proteger datos sensibles
          </li>
          <li className="list__item">
            {" "}
            <span className="section__content--highlighted">Triggers SQL</span>
            para auditoría de acciones
          </li>
          <li className="list__item">
            {" "}
            <span className="section__content--highlighted">
              RxJS y observables
            </span>{" "}
            en el frontend para el manejo de formularios y para gestionar
            eventos asincrónicos de manera eficiente y reactiva
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section__subtitle">Resultados</h2>
        <p className="mb-4">
          Se logró una plataforma robusta, segura y desplegada en la nube,
          permitiendo el onboarding de clientes de manera ágil, eficiente y con
          capacidad de auditoría.
        </p>
      </section>

      <section className="section">
        <h2 className="section__subtitle text-center">Accede al Proyecto</h2>
        <div className="flex justify-center gap-4">
          <a
            href="https://onboarding-app-jqzc.onrender.com/lading-page"
            target="_blank"
            className="button button--principal"
          >
            Ver Demo
          </a>
          <a
            href="https://github.com/PepeBeto-code/onboarding"
            target="_blank"
            className="button button--secondary"
          >
            Ver Código
          </a>
        </div>
      </section>
    </main>
  );
}
