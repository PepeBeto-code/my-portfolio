import React from "react";
import Timeline from "../../components/TimeLine/TimeLine2";
import About from "../../components/About";
import BackLink from "../../components/BackLink";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";

export const metadata = {
  title: "Sobre mí | Pepe Dev",
  description:
    "Conoce más sobre Pepe Dev, su experiencia, habilidades y proyectos destacados en el desarrollo web.",
  keywords: "sobre mí, desarrollador web, experiencia, habilidades, Pepe Dev",
  openGraph: {
    title: "Sobre mí | Pepe Dev",
    description:
      "Conoce más sobre Pepe Dev, su experiencia, habilidades y proyectos destacados en el desarrollo web.",
    url: "https://pepedigital.netlify.app/about",
    siteName: "Pepe Dev",
    images: [
      {
        url: "/favicon-32x32.png",
        width: 1200,
        height: 630,
        alt: "Sobre mí - Pepe Dev",
      },
    ],
  },
};

export default function page() {
  return (
    <main className="">
      <div className="container">
        <BackLink></BackLink>
      </div>
      <section className="section">
        <div className="relative md:w-[20rem] m-auto w-[15rem] rounded-lg bg-white shadow-lg p-4 before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-10 before:h-10 before:bg-white before:shadow-[5px_5px_10px_rgba(0,0,0,0.2)] before:rotate-45 before:translate-x-1/2 before:translate-y-1/2 z-0">
          <Image
            src="/images/yo.jpeg"
            alt="Fotografía de José Alberto Miñón Velázquez, desarrollador de software"
            width={320}
            height={320}
            className="rounded-lg relative z-10 scale-110 -translate-y-6 shadow-xl m-auto"
          />
        </div>
        <About page={true}>
          <motion.h1
            className="section__title !my-[2rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Sobre mí
          </motion.h1>
        </About>
      </section>

      <section className="section">
        <h2 className="section__subtitle">Experiencia</h2>
        <Timeline></Timeline>
      </section>

      <section className="section">
        <h2 className="section__subtitle">Habilidades y Tecnologías</h2>

        <div className="w-full flex items-center justify-center md:justify-start">
          <ul className="list list--bulleted">
            <li className="list__item">
              <strong className="section__content--highlighted">
                Desarrollo de Software:
              </strong>
              Arquitectura limpia, modularización y buenas prácticas de código.
            </li>
            <li className="list__item">
              <strong className="section__content--highlighted">
                Optimización de Código:
              </strong>
              Refactorización para mejorar legibilidad y eficiencia.
            </li>
            <li className="list__item">
              <strong className="section__content--highlighted">
                {" "}
                Diseño de APIs:
              </strong>
              Documentación con Swagger, RESTful, y mejores prácticas de
              endpoints.
            </li>
            <li className="list__item">
              <strong className="section__content--highlighted">
                Gestión de Bases de Datos:{" "}
              </strong>
              Modelado y optimización de esquemas relacionales.
            </li>
            <li className="list__item">
              <strong className="section__content--highlighted">
                Desarrollo Full-Stack:
              </strong>
              Backend y frontend con tecnologías modernas.
            </li>
            <li className="list__item">
              <strong className="section__content--highlighted">
                Control de Versiones:{" "}
              </strong>
              Git, GitHub, GitLab y manejo de flujos de trabajo.
            </li>
            <li className="list__item">
              <strong className="section__content--highlighted">
                Trabajo en Equipo:
              </strong>
              Colaboración en proyectos ágiles y uso de herramientas como Jira y
              Trello.
            </li>
            <li className="list__item">
              <strong className="section__content--highlighted">
                Aprendizaje Rápido:
              </strong>
              Adaptabilidad a nuevas tecnologías y metodologías.
            </li>
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-[1.5rem] mb-4">
          <div className="grid grid-cols-1 gap-[1.5rem] p-0">
            <div className="p-4 card">
              <h3 className="card__title">Lenguajes de Programación</h3>
              <ul className="list list--bulleted section__content">
                <li className="list__item">JavaScript / TypeScript</li>
                <li className="list__item">Java</li>
                <li className="list__item">PHP</li>
              </ul>
            </div>
            <div className="p-4 card">
              <h3 className="card__title">Backend</h3>

              <ul className="list list--bulleted section__content">
                <li className="list__item">
                  <strong className="section__content--highlighted">
                    Laravel{" "}
                  </strong>
                  (MVC, APIs REST, Backpack)
                </li>
                <li className="list__item">
                  <strong className="section__content--highlighted">
                    Spring Boot
                  </strong>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4 card">
            <h3 className="card__title">Frontend</h3>
            <ul className="list list--bulleted section__content">
              <li className="list__item">
                <strong className="section__content--highlighted">
                  Angular
                </strong>
                (Experiencia modularizando y optimizando código)
              </li>
              <li className="list__item">
                <strong className="section__content--highlighted">
                  React / Next.js
                </strong>
                (Experiencia con UI/UX y Seo)
              </li>
              <li className="list__item">
                <strong className="section__content--highlighted">
                  HTML5, CSS3, SASS{" "}
                </strong>
                (strong Design, Metodologia BEM)
              </li>
              <li className="list__item">
                <strong className="section__content--highlighted">
                  Leaflet
                </strong>
                (Mapas interactivos y visualización geoespacial)
              </li>
            </ul>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-[1.5rem] w-full">
          <div className="p-4 card">
            <h3 className="card__title">Bases de Datos</h3>

            <ul className="list list--bulleted section__content">
              <li className="list__item">
                <strong className="section__content--highlighted">MySQL</strong>
              </li>
              <li className="list__item">
                <strong className="section__content--highlighted">
                  PostgreSQL
                </strong>
              </li>
              <li className="list__item">
                <strong className="section__content--highlighted">
                  PostGIS
                </strong>
                (Uso en geoportales)
              </li>
            </ul>
          </div>
          <div className=" p-4 card">
            <h3 className="card__title">DevOps & Cloud</h3>

            <ul className="list list--bulleted section__content">
              <li className="list__item">
                <strong className="section__content--highlighted">AWS</strong>
                (Lambda, Lex, Microservicios)
              </li>
              <li className="list__item">
                <strong className="section__content--highlighted">
                  Docker / Docker Compose
                </strong>
              </li>
              <li className="list__item">
                <strong className="section__content--highlighted">NGINX</strong>
              </li>
            </ul>
          </div>
          <div className=" p-4 card">
            <h3 className="card__title">Herramientas & Otros</h3>

            <ul className="list list--bulleted section__content">
              <li className="list__item">
                <strong className="section__content--highlighted">
                  Swagger{" "}
                </strong>
                (Documentación de APIs)
              </li>
              <li className="list__item">
                <strong className="section__content--highlighted">
                  Git, GitHub, GitLab
                </strong>
              </li>
              <li className="list__item">
                <strong className="section__content--highlighted">
                  Apache Airflow
                </strong>
                (Ingenieria de datos)
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__subtitle">Prácticas de Desarrollo</h2>
        <ul className="list list--bulleted">
          <li className="list__item">
            Aplicación de principios de Clean Code y diseño eficiente.
          </li>
          <li className="list__item">
            Mejores prácticas de programación estructurada y reducción de
            complejidad.
          </li>
          <li className="list__item">
            Colaboración en equipos para la implementación de sistemas de
            calidad.
          </li>
        </ul>
      </section>

      <section className="section">
        <h3 className="section__subtitle">Proyectos Destacados</h3>
        <ul className="list list--bulleted section__content">
          <li className="list__item flex flex-wrap">
            <strong className="section__content--highlighted contents">
              ChatLive:
            </strong>{" "}
            Un chat en tiempo real con funcionalidades avacontentsnzadas.
            <Link
              href={"/proyectos/chatlive"}
              className="flex items-center ml-2 button"
              aria-label="Ver proyecto ChatLive"
            >
              <MoveRight />
            </Link>
          </li>
          <li className="list__item flex flex-wrap">
            <span className="section__content--highlighted contents">
              Juego del Gato:
            </span>{" "}
            Servidor y cliente en Java usando Sockets, con autenticación y
            sesiones.
            <Link
              href={"/proyectos/tic-tac-toe"}
              className="flex items-center ml-2 button"
              aria-label="Ver proyecto Juego del Gato"
            >
              <MoveRight />
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
