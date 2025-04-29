import React from "react";
import Image from "next/image";
import BackLink from "../../../components/BackLink";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import ImagesCarousel from "../../../components/ImagesCarousel/ImagesCarousel";
import images from "../../../variables/ChatLiveVariables";
import ImageExpanded from "@/components/ImageExpanded";
import * as motion from "motion/react-client";
import { IoLogoVercel } from "react-icons/io5";
import { FaDocker } from "react-icons/fa";
import { DiNginx } from "react-icons/di";
import { SiRender } from "react-icons/si";

export const metadata = {
  title: "ChatLive - Chat en Tiempo Real",
  description:
    "ChatLive es una aplicación de chat en tiempo real con WebSockets, autenticación segura y notificaciones push. Permite mensajería instantánea, gestión de conversaciones y estados de mensaje.",
  keywords:
    "chat en tiempo real, WebSockets, mensajería instantánea, autenticación JWT, notificaciones push, ChatLive",
  openGraph: {
    title: "ChatLive - Chat en Tiempo Real",
    description:
      "Aplicación de chat en tiempo real con sincronización instantánea, autenticación segura y notificaciones push.",
    url: "https://chat-live-client.vercel.app/",
    siteName: "ChatLive",
    images: [
      {
        url: "/images/Chat/Chat1.png",
        width: 1200,
        height: 630,
        alt: "ChatLive - Interfaz de chat en tiempo real",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatLive - Chat en Tiempo Real",
    description:
      "Mensajería en tiempo real con WebSockets, JWT y notificaciones push.",
    images: ["/images/Chat/Chat1.png"],
  },
};

export default function chatlive() {
  return (
    <>
      <main className="">
        <div className="container">
          <BackLink></BackLink>
        </div>

        <section class="py-16 shadow-[0_11px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className="container flex flex-col items-center">
            <motion.h1
              className="section__title mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Proyecto de Chat en Tiempo Real
            </motion.h1>
            <p class="section__content mb-6">
              Comunicación instantánea segura con estados de mensajes en tiempo
              real.
            </p>
            <div class="flex justify-center gap-4 mt-6">
              <a
                href="https://chat-live-client.vercel.app/login"
                target="_blank"
                class="button button--principal"
              >
                Ver Demo
              </a>
              <a
                href="https://github.com/PepeBeto-code/chat-live.git"
                target="_blank"
                class="button button--secondary"
              >
                Ver Código
              </a>
            </div>
          </div>
        </section>

        {/* <!-- Descripción --> */}
        <section className="section">
          {/* <ImagesCarousel images={images} /> */}
          <h2 className="section__subtitle">Descripción</h2>
          <p className="">
            Este proyecto es una aplicación de chat en tiempo real diseñada para
            facilitar la comunicación instantánea entre usuarios. Permite enviar
            y recibir mensajes al instante, ver el estado de los mensajes
            (enviado, entregado, visto) y recibir notificaciones en tiempo real.{" "}
          </p>
          <p className="">
            El sistema garantiza una experiencia fluida, segura y organizada,
            permitiendo incluso archivar conversaciones y responder mensajes
            específicos dentro de un chat.
          </p>
        </section>

        {/* <!-- Tecnologías --> */}
        <section className="section">
          <h2 className="section__subtitle">Tecnologías utilizadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
            <div className="grid grid-cols-1 ">
              <h3 className="section__subtitle">Backend:</h3>
              <ul className="section__content list list--bulleted">
                <li className="list__item">Java 21 + Spring Boot</li>
                <li className="list__item">Spring Security (JWT)</li>
                <li className="list__item">WebSockets (STOMP)</li>
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
                <li className="list__item">Next.js (React)</li>
                <li className="list__item">Javascript</li>
                <li className="list__item">Tailwind CSS</li>
                <li className="list__item">Socket.io</li>
                <li className="list__item">Axios</li>
              </ul>
              <div className="flex items-center justify-center space-x-4">
                <FaNodeJs className=" text-green-500 text-[2rem]" />
                <FaReact className=" text-sky-400 text-[2rem]" />
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
              <ul className=" list list--bulleted">
                <li className="list__item">
                  Contenerización y despliegue con{" "}
                  <span className="section__content--highlighted">
                    Docker + Render + Vercel + Ngnix + Docker Compose
                  </span>
                </li>
                <li className="list__item">
                  <span className="section__content--highlighted">
                    Web Push Notifications
                  </span>{" "}
                  (Service Workers) para alertas en el navegador{" "}
                </li>
              </ul>
              <div className="flex items-center justify-center space-x-4">
                <FaDocker className="text-sky-400 text-[2rem]" />
                <DiNginx className="text-green-500 text-[2rem]" />
                <SiRender className="text-[2rem]" />
                <IoLogoVercel className="text-[2rem]"></IoLogoVercel>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <h2 class="section__subtitle text-center">Capturas de Pantalla</h2>

          <div class="grid md:grid-cols-2 gap-8">
            {images.map((img, index) => (
              <div
                key={index}
                class="bg-white rounded-lg shadow overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div class="flex items-center gap-2 bg-gray-200 px-4 py-2">
                  <span class="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span class="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <img src={img.src} alt={img.alt} class="w-full" />
              </div>
            ))}
          </div>
        </section>

        <section className="section ">
          <h2 className="section__subtitle">
            ¿Por qué es importante este proyecto?
          </h2>
          <div className="section__content">
            <p>
              <span className="section__content--highlighted">
                Experiencia de usuario mejorada
              </span>{" "}
              – Notificaciones y estados de mensajes en tiempo real.
            </p>
            <p>
              <span className="section__content--highlighted">
                {" "}
                Eficiencia y rapidez{" "}
              </span>
              – Sincronización instantánea de mensajes sin necesidad de recargar
              la página.
            </p>
            <p>
              <span className="section__content--highlighted">Seguridad </span>{" "}
              – Sistema de autenticación robusto para proteger la privacidad de
              los usuarios.
            </p>
          </div>
        </section>

        {/* <!-- Características --> */}
        <section className="section">
          <h2 className="section__subtitle">Características principales</h2>
          <ul className="section__content list list--bulleted">
            <li className="list__item">
              {" "}
              <span className="section__content--highlighted">
                Inicio de sesión seguro{" "}
              </span>{" "}
              – Autenticación con JWT para proteger las cuentas de usuario.
            </li>
            <li className="list__item">
              {" "}
              <span className="section__content--highlighted">
                Mensajería en tiempo real{" "}
              </span>
              – Sin retrasos gracias a WebSockets.
            </li>
            <li className="list__item">
              <span className="section__content--highlighted">
                Estados de mensajes en tiempo real{" "}
              </span>
              Indicadores visuales de "Enviado", "Entregado" y "Visto".
            </li>
            <li className="list__item">
              <span className="section__content--highlighted">
                Notificaciones en el navegador{" "}
              </span>
              – Notificaciones push sin necesidad de abrir la app.
            </li>
            <li className="list__item">
              <span className="section__content--highlighted">
                SGestión de conversaciones{" "}
              </span>
              Posibilidad de archivar chats para mantener el orden.
            </li>
            <li className="list__item">
              <span className="section__content--highlighted">
                Respuestas a mensajes{" "}
              </span>
              – Capacidad de responder a mensajes específicos dentro de una
              conversación.{" "}
            </li>
          </ul>
        </section>

        {/* <!-- Código y Demo --> */}
        <div className="section">
          <h2 class="section__subtitle text-center">Accede al Proyecto</h2>
          <div className="flex justify-center space-x-8">
            <a
              href="https://chat-live-client.vercel.app/login"
              className="button button--principal !mt-0"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Ver Demo
            </a>
            <a
              href="https://github.com/PepeBeto-code/chat-live.git"
              className="button button--secondary"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Ver Código
            </a>
          </div>
        </div>

        {/* <!-- Retos y Aprendizajes --> */}
        <section className="section">
          <h2 className="section__subtitle">Retos y Aprendizajes</h2>
          <ul className=" list list--bulleted">
            <li className="list__item">
              {" "}
              <span className="section__content--highlighted">
                WebSockets:{" "}
              </span>{" "}
              Implementar comunicación en tiempo real con Spring Boot y STOMP.
            </li>
            <li className="list__item">
              {" "}
              <span className="section__content--highlighted">
                Notificaciones Push:{" "}
              </span>
              Integración con Service Workers para alertas en el navegador.
            </li>
            <li className="list__item">
              <span className="section__content--highlighted">
                Gestión del Estado:{" "}
              </span>
              Sincronización entre clientes HTTP y WebSockets sin
              inconsistencias.
            </li>
            <li className="list__item">
              <span className="section__content--highlighted">
                Arquitectura Backend:{" "}
              </span>
              Organización eficiente para manejar múltiples conexiones de
              usuarios.
            </li>
          </ul>
        </section>
      </main>{" "}
    </>
  );
}
