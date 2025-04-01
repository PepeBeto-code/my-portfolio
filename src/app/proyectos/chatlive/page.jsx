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
        url: "/images/Chat1.png",
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
    images: ["/images/Chat1.png"],
  },
};

export default function chatlive() {
  return (
    <>
      <section className="section">
        <BackLink></BackLink>
        {/* <!-- Descripción --> */}
        <div class="section__container pb-0">
          <motion.h1
            className="section__title !mb-[4rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Chat en Tiempo Real
          </motion.h1>
          <div className="section__container--spaced">
            <div className="section__content">
              <h2 class="section__subtitle">Descripción</h2>
              <p class=" section__content--sm">
                Este proyecto es una aplicación de chat en tiempo real diseñada
                para facilitar la comunicación instantánea entre usuarios.
                Permite enviar y recibir mensajes al instante, ver el estado de
                los mensajes (enviado, entregado, visto) y recibir
                notificaciones en tiempo real.{" "}
              </p>
              <p class=" section__content--sm">
                El sistema garantiza una experiencia fluida, segura y
                organizada, permitiendo incluso archivar conversaciones y
                responder mensajes específicos dentro de un chat.
              </p>
            </div>
            <div class="section__image max-w-[40%] m-auto">
              <ImageExpanded
                image={{
                  src: "/images/Chat1.png",
                  alt: "Interfaz de ChatLive",
                }}
              />
            </div>
          </div>
        </div>

        <div class="section__container">
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
        </div>

        {/* <!-- Características --> */}
        <div class="section__container section__container--full section__container--secondary section__container--center">
          <h2 class="section__subtitle section__subtitle--center">
            Características principales
          </h2>
          <ul class="section__content list list--bulleted">
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
        </div>

        {/* <!-- Galería --> */}
        <div class="section__container section__container--center">
          <h2 class="section__title !mb-[4rem]">Capturas</h2>
          <ImagesCarousel images={images} />
        </div>

        {/* <!-- Tecnologías --> */}
        <div class="section__container section__container--center">
          <h2 class="section__title">Tecnologías utilizadas</h2>
          <h3 className="section__subtitle">Backend:</h3>
          <ul className="section__content list list--bulleted">
            <li className="list__item">Java 21 + Spring Boot</li>
            <li className="list__item">Spring Security (JWT)</li>
            <li className="list__item">WebSockets (STOMP)</li>
            <li className="list__item">JPA/Hibernate</li>
            <li className="list__item">PostgreSQL</li>
          </ul>
          <div class="gallery gallery--horizontal gallery--icon">
            <div class="gallery__item">
              <FaJava className="gallery__icon text-cyan-700" />
            </div>
            <div class="gallery__item ">
              <Image
                src="/SpringBootIcon.svg" // Ruta relativa en tu carpeta pública o una URL externa
                alt="Interfaz de ChatLive"
                width={500} // Ancho en píxeles
                height={300} // Altura en píxeles
                class="gallery__icon"
              />
            </div>
            <div class="gallery__item ">
              <Image
                src="/postgresql.svg" // Ruta relativa en tu carpeta pública o una URL externa
                alt="Interfaz de ChatLive"
                width={500} // Ancho en píxeles
                height={300} // Altura en píxeles
                class="gallery__icon"
              />
            </div>
          </div>
          <h3 className="section__subtitle">Frontend:</h3>
          <ul className="section__content list list--bulleted">
            <li className="list__item">Next.js (React)</li>
            <li className="list__item">Javascript</li>
            <li className="list__item">Tailwind CSS</li>
            <li className="list__item">Socket.io</li>
            <li className="list__item">PostgreSQL/MySQL</li>
          </ul>
          <div class="gallery gallery--horizontal gallery--icon">
            <div class="gallery__item">
              <FaNodeJs className="gallery__icon text-green-500" />
            </div>
            <div class="gallery__item ">
              <FaReact className="gallery__icon text-sky-400" />
            </div>
            <div class="gallery__item ">
              <Image
                src="/tailwind.svg" // Ruta relativa en tu carpeta pública o una URL externa
                alt="Interfaz de ChatLive"
                width={500} // Ancho en píxeles
                height={300} // Altura en píxeles
                class="gallery__icon"
              />
            </div>
          </div>
          <h3 className="section__subtitle">Extras:</h3>
          <ul className="section__content list list--bulleted">
            <li className="list__item">
              <span className="section__content--highlighted">
                Web Push Notifications
              </span>{" "}
              (Service Workers) para alertas en el navegador{" "}
            </li>
            <li className="list__item">
              Axios para manejo eficiente de peticiones HTTP
            </li>
          </ul>
        </div>

        {/* <!-- Código y Demo --> */}
        <div class="section__container gallery gallery--horizontal ">
          <a
            href="https://github.com/PepeBeto-code/chat-live.git"
            class="button button__text gallery__item !flex-none button--principal"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            GitHub
          </a>
          <a
            href="https://chat-live-client.vercel.app/login"
            class="button button__text gallery__item !flex-none button--principal"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Demo
          </a>
        </div>

        {/* <!-- Retos y Aprendizajes --> */}
        <div class="section__container section__container--center section__container--secondary section__container--full">
          <h2 class="section__title">Retos y Aprendizajes</h2>
          <ul class="section__content list list--bulleted">
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
        </div>
      </section>{" "}
    </>
  );
}
