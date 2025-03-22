import React from "react";
import Image from "next/image";
import BackLink from "../../../components/BackLink";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

export default function chatlive() {
  return (
    <>
      <section className="section">
        <BackLink></BackLink>
        <div className="section__container section__container--center">
          <h1 className="section__title">ChatLive</h1>
          <p class="section__content">
            Chat en tiempo real con autenticación y encriptación de mensajes.
          </p>
          <Image
            src="/images/chatlive.png" // Ruta relativa en tu carpeta pública o una URL externa
            alt="ChatLive App"
            width={500} // Ancho en píxeles
            height={300} // Altura en píxeles
            class="section__image"
            priority // Opción para cargar inmediatamente
          />
        </div>

        {/* <!-- Descripción --> */}
        <div class="section__container section__container--spaced">
          <div>
            <h2 class="section__subtitle">Descripción</h2>
            <p className="section__content section__content--sm">
              ChatLive es una aplicación que permite la comunicación en tiempo
              real con usuarios autenticados, utilizando WebSockets y JWT para
              seguridad.
            </p>
          </div>
          <Image
            src="/images/chatlive.png" // Ruta relativa en tu carpeta pública o una URL externa
            alt="Interfaz de ChatLive"
            width={500} // Ancho en píxeles
            height={300} // Altura en píxeles
            class="section__image max-w-[50%]"
            priority // Opción para cargar inmediatamente
          />
        </div>

        {/* <!-- Características --> */}
        <div class="section__container section__container--full section__container--secondary section__container--center">
          <h2 class="section__subtitle section__subtitle--center">
            Características
          </h2>
          <ul class="section__content list list--numbered">
            <li className="list__item">
              {" "}
              Mensajería en tiempo real con WebSockets
            </li>
            <li className="list__item"> Autenticación JWT</li>
            <li className="list__item">
              {" "}
              Soporte para múltiples salas de chat
            </li>
          </ul>
        </div>

        {/* <!-- Galería --> */}
        <div class="section__container section__container--center">
          <h2 class="section__title">Capturas</h2>
          <div class="gallery gallery--horizontal">
            <div class="gallery__item">
              <Image
                src="/images/chatlive.png" // Ruta relativa en tu carpeta pública o una URL externa
                alt="Lista de usuarios en línea"
                width={500} // Ancho en píxeles
                height={300} // Altura en píxeles
                class="gallery__image"
                priority // Opción para cargar inmediatamente
              />
            </div>
            <div class="gallery__item">
              <Image
                src="/images/chatlive.png" // Ruta relativa en tu carpeta pública o una URL externa
                alt="Chat en acción"
                width={500} // Ancho en píxeles
                height={300} // Altura en píxeles
                class="gallery__image"
                priority // Opción para cargar inmediatamente
              />
            </div>
          </div>
        </div>

        {/* <!-- Tecnologías --> */}
        <div class="section__container section__container--center">
          <h2 class="section__title">Tecnologías</h2>
          <div class="gallery gallery--horizontal gallery--icon">
            <div class="gallery__item">
              <FaJava className="gallery__icon text-cyan-700" />
            </div>
            <div class="gallery__item">
              <FaNodeJs className="gallery__icon text-green-500" />
            </div>
            <div class="gallery__item ">
              <FaReact className="gallery__icon text-sky-400" />
            </div>
          </div>
        </div>

        {/* <!-- Código y Demo --> */}
        <div class="section__container gallery gallery--horizontal ">
          <a
            href="https://github.com/tuusuario/chatlive"
            class="button button__text gallery__item !flex-none"
          >
            GitHub
          </a>
          <a
            href="https://chatlive-demo.com"
            class="button button__text gallery__item !flex-none"
          >
            Demo
          </a>
        </div>

        {/* <!-- Retos y Aprendizajes --> */}
        <div class="section__container section__container--center section__container--secondary section__container--full">
          <h2 class="section__title">Retos y Aprendizajes</h2>
          <p className="section__content text-center">
            Implementar WebSockets en tiempo real fue un desafío, ya que tuve
            que manejar problemas de concurrencia y sincronización de mensajes
            correctamente.
          </p>
        </div>
      </section>{" "}
    </>
  );
}
