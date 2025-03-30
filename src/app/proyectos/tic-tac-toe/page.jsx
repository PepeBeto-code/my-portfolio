import React from "react";
import BackLink from "../../../components/BackLink";
import CodeBlock from "../../../components/CodeBlock";
import Link from "next/link";
import Image from "next/image";
import ImagesCarousel from "../../../components/ImagesCarousel/ImagesCarousel";
import images from "../../../variables/TicTacTocVariables";
import * as motion from "motion/react-client";

export const metadata = {
  title: "Tic-Tac-Toe Multiplayer Game",
  description:
    "Implementación de un juego de Tic-Tac-Toe multijugador por terminal usando sockets, con autenticación, persistencia de sesión y protocolo de comunicación personalizado.",
  keywords:
    "Tic-Tac-Toe, multijugador, sockets, redes, Java, protocolo de comunicación, autenticación",
  openGraph: {
    title: "Tic-Tac-Toe Multiplayer Game",
    description:
      "Juego multijugador basado en terminal con comunicación mediante sockets y autenticación con cookies.",
    url: "https://chat-live-client.vercel.app/tic-tac-toe",
    siteName: "ChatLive",
    images: [
      {
        url: "/images/df-tic.png",
        width: 1200,
        height: 630,
        alt: "Diagrama de Arquitectura del Juego Tic-Tac-Toe",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tic-Tac-Toe Multiplayer Game",
    description:
      "Implementación de un juego multijugador por terminal con sockets y autenticación.",
    images: ["/images/df-tic.png"],
  },
};

export default function page() {
  return (
    <>
      <section className="section">
        <BackLink></BackLink>

        <div className="section__container">
          <motion.h1
            className="section__title !mb-[4rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Tic-Tac-Toe Multiplayer Game{" "}
          </motion.h1>
          <p class="section__content text-center">
            Implementacion de un videojuego multijugador por terminal utilizando
            sockets para la comunicación cliente-servidor, con funcionalidades
            de inicio de sesión, persistencia de sesión mediante cookies y un
            protocolo de comunicación personalizado. Este proyecto ayudo a
            consolidar mis habilidades en sistemas distribuidos y destaca por el
            diseño de un protocolo de comunicación y la experiencia práctica en
            programación de redes.
          </p>
        </div>

        {/* <!-- Características --> */}
        <div class="section__container section__container--full section__container--secondary section__container--center !mb-8">
          <div className="section__container !p-0">
            <h2 class="section__title section__subtitle--center">
              Funcionalidades principales
            </h2>
            <ul class="section__content list list--bulleted">
              <li className="list__item">
                {" "}
                <span className="section__content--highlighted">
                  Servidor con múltiples conexiones:{" "}
                </span>{" "}
                Maneja múltiples clientes conectados simultáneamente y actualiza
                el estado del juego utilizando sockets para comunicación
                bidireccional.
              </li>
              <li className="list__item">
                {" "}
                <span className="section__content--highlighted">
                  Autenticación y sesiones:{" "}
                </span>
                Permite a los jugadores iniciar sesión y mantener la sesión
                activa mediante cookies.
              </li>
              <li className="list__item">
                <span className="section__content--highlighted">
                  Protocolo de comunicación:{" "}
                </span>
                Diseño de un protocolo sencillo que define mensajes
                estructurados (JSON, texto plano, etc.), comandos básicos
                (iniciar partida, realizar jugada, consultar estado) y manejo de
                errores.
              </li>
              <li className="list__item">
                <span className="section__content--highlighted">
                  Persistencia del juego:{" "}
                </span>
                Guarda el estado de la partida en archivos JSON para garantizar
                la continuidad.
              </li>
              <li className="list__item">
                <span className="section__content--highlighted">
                  Sincronización en tiempo real:{" "}
                </span>
                Los clientes reciben actualizaciones inmediatas del estado del
                juego.
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Protocolo de Comunicación --> */}
        <div class="section__container section--secondary rounded-md !mb-8">
          <h2 class="section__subtitle">Protocolo de Comunicación</h2>
          <p className="section__content">
            Los clientes envian mensajes al servidor en formato JSON:
          </p>
          <CodeBlock
            code={`
{
  "action": "move",
  "data": {
    "gameId": "1234",
    "player": "X",
    "position": [0, 1]
  }
}

  `}
            language="json"
          />
          <p className="section__content">
            El servidor responde con el estado actualizado del juego:
          </p>
          <CodeBlock
            code={`
{
  "status": "success",
  "data": {
    "board": [
      ["X", "O", "X"],
      ["O", "X", " "],
      [" ", " ", "O"]
    ],
    "nextPlayer": "O"
  }
}

  `}
            language="json"
          />
        </div>

        <div className="section__container section__container--center">
          <h2 className="section__subtitle">Diagrama de arquitectura</h2>
          <Image
            src="/images/df-tic.png" // Ruta relativa en tu carpeta pública o una URL externa
            alt="ChatLive App"
            width={500} // Ancho en píxeles
            height={300} // Altura en píxeles
            class="section__image w-[80%]"
            priority // Opción para cargar inmediatamente
          />
        </div>

        <div className="section__container section--secondary rounded-md !mb-8">
          <h2 class="section__subtitle">Cómo jugar</h2>
          <ul class="section__content list list--numbered">
            <li className="list__item">
              Inicia el servidor: <code>java Server</code>
              <CodeBlock
                code={`
java Server

  `}
                language="bash"
              />
            </li>
            <li className="list__item">
              Inicia los clientes: <code>java Client</code>
              <CodeBlock
                code={`
java Client1  
java Client2  

  `}
                language="bash"
              />
            </li>
            <li className="list__item">
              Esperar a que un oponente se conecte. El registro e inicio de
              sesión se realizan automáticamente, generando un usuario y
              contraseña para cada cliente al ejecutar su clase correspondiente
              (Client1/Client2){" "}
            </li>
            <li className="list__item">
              Juega introduciendo coordenadas (x,y) desde la terminal (ej. 1,2
              para fila 1, columna 2), una a la vez.
            </li>
            <li className="list__item">
              Realizar movimientos en el tablero hasta que un jugador gane o se
              declare un empate.{" "}
            </li>
          </ul>
          <p>
            Consulta la <strong>especificación completa</strong> en el{" "}
            <a href="#linkRepo" className="!text-blue-400">
              repositorio
            </a>
            .
          </p>
        </div>

        <div className="section__container">
          <h2 className="section__title">Autenticación y Sesión</h2>
          <ul className="section__content list list--bulleted">
            <li className="list__item">
              Los usuarios se registran e inician sesión automáticamente al
              conectarse al servidor.
            </li>
            <li className="list__item">
              El servidor genera un sessionId que el cliente envía en cada
              solicitud.
            </li>
            <li className="list__item">
              Las sesiones se gestionan mediante cookies para evitar
              reautenticaciones innecesarias.
            </li>
          </ul>
        </div>

        {/* <!-- Capturas de Consola --> */}
        <div class="section__container section__container--center">
          <h2 class="section__title !mb-[4rem]">Capturas</h2>
          <ImagesCarousel images={images} />
        </div>

        {/* <!-- Código y Demo --> */}
        <div class="section__container gallery gallery--horizontal !w-auto">
          <Link
            id="linkRepo"
            href="https://github.com/PepeBeto-code/redes-p1"
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="button button__text gallery__item button--principal"
          >
            GitHub
          </Link>
        </div>

        {/* <!-- Retos y Aprendizajes --> */}
        <div class="section__container section__container--center section__container--secondary section__container--full">
          <h2 class="section__title">Retos y Aprendizajes</h2>
          <ul className="section__content list list--bulleted">
            <li className="list__item">
              Diseño e implementación de un{" "}
              <span className="section__content--highlighted">
                {" "}
                protocolo de comunicación{" "}
              </span>
              eficiente
            </li>
            <li className="list__item">
              Gestión de múltiples clientes mediante{" "}
              <span className="section__content--highlighted">sockets</span>
            </li>
            <li className="list__item">
              Implementación de{" "}
              <span className="section__content--highlighted">
                {" "}
                autenticación y sesiones{" "}
              </span>{" "}
              en una aplicación de red.
            </li>
            <li className="list__item ">
              Manejo de{" "}
              <span className="section__content--highlighted">
                {" "}
                persistencia y sincronización del estado{" "}
              </span>{" "}
              en un entorno multijugador.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
