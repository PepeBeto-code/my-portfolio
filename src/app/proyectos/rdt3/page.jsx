import React from "react";
import BackLink from "../../../components/BackLink";
import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-client";

export const metadata = {
  title: "Simulación e Implementación de rdt3.0 sobre UDP",
  description:
    "Explora la implementación del protocolo rdt3.0 sobre UDP, con simulación de un entorno no fiable y gestión de retransmisiones.",
  keywords:
    "rdt3.0, protocolo de comunicación, UDP, transferencia de datos, Java, sockets, redes",
  openGraph: {
    title: "Simulación e Implementación de rdt3.0 sobre UDP",
    description:
      "Implementación del protocolo rdt3.0 sobre UDP, incluyendo simulación de un entorno no fiable y técnicas para garantizar la entrega de datos.",
    url: "https://chat-live-client.vercel.app/rdt3",
    siteName: "ChatLive",
    images: [
      {
        url: "/images/DF-rdt3.png",
        width: 1200,
        height: 630,
        alt: "Diagrama de Flujo del Protocolo rdt3.0",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulación e Implementación de rdt3.0 sobre UDP",
    description:
      "Explora la implementación del protocolo rdt3.0 sobre UDP, con simulación de un entorno no fiable y gestión de retransmisiones.",
    images: ["/images/DF-rdt3.png"],
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
            Simulación y Implementación de Protocolo rdt3.0 sobre UDP
          </motion.h1>
          <h2 className="section__subtitle">Descripción:</h2>
          <p class="section__content">
            Este proyecto consistió en la implementación del protocolo rdt3.0
            (Reliable Data Transfer 3.0), diseñado para garantizar una
            transferencia fiable de datos en un medio de comunicación no fiable.
            A través de dos etapas principales, creé un simulador de red que
            replicaba condiciones adversas como la pérdida y corrupción de
            paquetes, y luego adapté el protocolo para funcionar sobre UDP, un
            protocolo sin conexión que no asegura la entrega ni el orden de los
            paquetes.
          </p>
          <h2 className="section__subtitle">Tecnologías utilizadas:</h2>
          <ul class="section__content list list--bulleted">
            <li className="list__item">
              {" "}
              <span className="section__content--highlighted">Java </span>{" "}
              (Sockets, I/O, Multithreading)
            </li>
            <li className="list__item">
              {" "}
              <span className="section__content--highlighted">
                Protocolos y Comunicación de Red:{" "}
              </span>
              Sockets UDP
            </li>
            <li className="list__item">
              <span className="section__content--highlighted">JSON </span>
              (Para estructurar los mensajes de comunicación)
            </li>
            <li className="list__item">
              <span className="section__content--highlighted">Gson </span>
              (Librería para manejo de JSON en Java)
            </li>
          </ul>
        </div>

        {/* <!-- Características --> */}
        <div class="section__container section__container--full section__container--secondary section__container--center !mb-8">
          <div className="section__container !p-0">
            <h2 className="section__title">Destacados técnicos</h2>
            <ul className="section__content list list--bulleted">
              <li className="list__item">
                <span className="section__content--highlighted">
                  {" "}
                  Simulación de medio no fiable:
                </span>
                <p className="mt-2">
                  Creación de un entorno configurable con probabilidades de
                  pérdida y corrupción de paquetes.
                </p>
              </li>
              <li className="list__item">
                <span className="section__content--highlighted">
                  {" "}
                  Implementación del protocolo rdt3.0:
                </span>
                <p className="mt-2">
                  Uso de números de secuencia, retransmisiones controladas por
                  temporizadores y detección de errores con checksum.
                </p>
              </li>
              <li className="list__item">
                <span className="section__content--highlighted">
                  {" "}
                  Integración con UDP:
                </span>
                <p className="mt-2">
                  Adaptación del protocolo para manejar la naturaleza no fiable
                  de UDP, garantizando la entrega y el orden de los datos.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="section__container">
          <h2 className="section__subtitle">Desafíos enfrentados:</h2>
          <ul className="section__content list list--bulleted">
            <li className="list__item">
              Implementar una
              <span className="section__content--highlighted">
                {" "}
                gestión eficiente de retransmisiones
              </span>{" "}
              usando temporizadores para manejar la posible pérdida de paquetes
              en un medio no fiable.
            </li>
            <li className="list__item">
              Asegurar la{" "}
              <span className="section__content--highlighted">
                {" "}
                integridad de los datos{" "}
              </span>{" "}
              utilizando un mecanismo de checksum, lo que requería crear un
              sistema para detectar y manejar la corrupción de paquetes.
            </li>
            <li className="list__item">
              Desarrollar una{" "}
              <span className="section__content--highlighted">
                {" "}
                solución de secuenciación{" "}
              </span>{" "}
              de paquetes para garantizar el orden adecuado de los mismos en un
              protocolo sin conexión como UDP.
            </li>
          </ul>
        </div>

        <div className="section__container section__container--full section--secondary rounded-md !mb-8 !pr-8 !pl-8">
          <div className="section__container !p-0">
            <h2 class="section__subtitle">Fases del proyecto</h2>
            <ul class="section__content list list--numbered">
              <li className="list__item">
                Simulador de Entorno No Fiable:
                <p>
                  Desarrollé un simulador que replicaba condiciones de red no
                  fiables, con probabilidades configurables de pérdida y
                  corrupción de paquetes. Implementé funciones clave como el
                  control de temporizadores y verificación de integridad
                  mediante checksum.
                </p>
              </li>
              <li className="list__item">
                Adaptación a UDP:
                <p>
                  Adapté el protocolo rdt3.0 para que funcionara sobre UDP,
                  utilizando sockets para la transmisión de datos. Esto
                  involucró la gestión de retransmisiones, control de errores y
                  secuenciación de paquetes, dado que UDP no garantiza la
                  entrega ni el orden de los paquetes.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="section__container section__container--center">
          <h2 className="section__title">
            Diagrama de Flujo del Protocolo rdt3.0
          </h2>
          <Image
            src="/images/DF-rdt3.png" // Ruta relativa en tu carpeta pública o una URL externa
            alt="ChatLive App"
            width={500} // Ancho en píxeles
            height={300} // Altura en píxeles
            class="section__image w-[40%]"
            priority // Opción para cargar inmediatamente
          />
        </div>

        {/* <!-- Código y Demo --> */}
        <div class="section__container gallery gallery--horizontal !w-auto">
          <Link
            href="https://github.com/PepeBeto-code/protocol-rdt3"
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="button button__text gallery__item button--principal"
          >
            GitHub
          </Link>
        </div>

        {/* <!-- Retos y Aprendizajes --> */}
        <div class="section__container section__container--center section__container--secondary section__container--full">
          <h2 class="section__title">Resultados y aprendizajes clave</h2>
          <ul className="section__content list list--bulleted">
            <li className="list__item">
              Validación exitosa del comportamiento del protocolo bajo
              condiciones simuladas de error.
            </li>
            <li className="list__item">
              Profundización en el diseño e implementación de protocolos de
              transferencia de datos fiables.
            </li>
            <li className="list__item">
              Experiencia en resolución de problemas y diseño de sistemas
              resilientes en entornos reales.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
