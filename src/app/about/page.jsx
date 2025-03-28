import React from "react";
import Timeline from "../../components/TimeLine/TimeLine2";
import About from "../../components/About";
import BackLink from "../../components/BackLink";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function page() {
  return (
    <div className="section ">
      <BackLink></BackLink>
      <section className="section__container">
        <About>
          <h1 className="section__title">Sobre mí</h1>
        </About>
        <div className="mt-[4rem] mb-[4rem]">
          <h2 className="section__title">Experiencia</h2>
          <Timeline></Timeline>
        </div>

        <div className="mt-6">
          <h2 className="section__subtitle">Habilidades y Tecnologías</h2>
          <ul className="list list--bulleted section__content">
            <li className="list__item">
              <span className="section__content--highlighted">
                Desarrollo de Software:
              </span>
              Arquitectura limpia, modularización y buenas prácticas de código.
            </li>
            <li className="list__item">
              <span className="section__content--highlighted">
                Optimización de Código:
              </span>
              Refactorización para mejorar legibilidad y eficiencia.
            </li>
            <li className="list__item">
              <span className="section__content--highlighted">
                {" "}
                Diseño de APIs:
              </span>
              Documentación con Swagger, RESTful, y mejores prácticas de
              endpoints.
            </li>
            <li className="list__item">
              <span className="section__content--highlighted">
                Gestión de Bases de Datos:{" "}
              </span>
              Modelado y optimización de esquemas relacionales.
            </li>
            <li className="list__item">
              <span className="section__content--highlighted">
                Desarrollo Full-Stack:
              </span>
              Backend y frontend con tecnologías modernas.
            </li>
            <li className="list__item">
              <span className="section__content--highlighted">
                Control de Versiones:{" "}
              </span>
              Git, GitHub, GitLab y manejo de flujos de trabajo.
            </li>
            <li className="list__item">
              <span className="section__content--highlighted">
                Trabajo en Equipo:
              </span>
              Colaboración en proyectos ágiles y uso de herramientas como Jira y
              Trello.
            </li>
            <li className="list__item">
              <span className="section__content--highlighted">
                Aprendizaje Rápido:
              </span>
              Adaptabilidad a nuevas tecnologías y metodologías.
            </li>
          </ul>
          <div className="gallery gallery--horizontal gallery--image">
            <div class="gallery__item p-4 card">
              <h3 className="card__title">Lenguajes de Programación</h3>
              <ul className="list list--bulleted section__content">
                <li className="list__item">JavaScript / TypeScript</li>
                <li className="list__item">Java</li>
                <li className="list__item">PHP</li>
                <li className="list__item">Python</li>
              </ul>
            </div>
            <div class="gallery__item p-4 card">
              <h3 className="card__title">Frontend</h3>
              <ul className="list list--bulleted section__content">
                <li className="list__item">
                  <span className="section__content--highlighted">Angular</span>
                  (Experiencia modularizando y optimizando código)
                </li>
                <li className="list__item">
                  <span className="section__content--highlighted">
                    React / Next.js
                  </span>
                  (Experiencia con UI/UX y Seo)
                </li>
                <li className="list__item">
                  <span className="section__content--highlighted">
                    HTML5, CSS3, SASS{" "}
                  </span>
                  (Responsive Design, Metodologia BEM)
                </li>
                <li className="list__item">
                  <span className="section__content--highlighted">Leaflet</span>
                  (Mapas interactivos y visualización geoespacial)
                </li>
              </ul>
            </div>
            <div class="gallery__item p-4 card">
              <h3 className="card__title">Backend</h3>

              <ul className="list list--bulleted section__content">
                <li className="list__item">
                  <span className="section__content--highlighted">
                    Laravel{" "}
                  </span>
                  (MVC, APIs REST, Backpack)
                </li>
                <li className="list__item">
                  <span className="section__content--highlighted">
                    Spring Boot
                  </span>
                </li>
              </ul>
            </div>
            <div class="gallery__item p-4 card">
              <h3 className="card__title">Bases de Datos</h3>

              <ul className="list list--bulleted section__content">
                <li className="list__item">
                  <span className="section__content--highlighted">MySQL</span>
                </li>
                <li className="list__item">
                  <span className="section__content--highlighted">
                    PostgreSQL
                  </span>
                </li>
                <li className="list__item">
                  <span className="section__content--highlighted">PostGIS</span>
                  (Uso en geoportales)
                </li>
              </ul>
            </div>
            <div class="gallery__item p-4 card">
              <h3 className="card__title">DevOps & Cloud</h3>

              <ul className="list list--bulleted section__content">
                <li className="list__item">
                  <span className="section__content--highlighted">AWS</span>
                  (Lambda, Lex, Microservicios)
                </li>
                <li className="list__item">
                  <span className="section__content--highlighted">
                    Docker / Docker Compose
                  </span>
                </li>
                <li className="list__item">
                  <span className="section__content--highlighted">NGINX</span>
                </li>
              </ul>
            </div>
            <div class="gallery__item p-4 card">
              <h3 className="card__title">Herramientas & Otros</h3>

              <ul className="list list--bulleted section__content">
                <li className="list__item">
                  <span className="section__content--highlighted">
                    Swagger{" "}
                  </span>
                  (Documentación de APIs)
                </li>
                <li className="list__item">
                  <span className="section__content--highlighted"></span>
                </li>
                <li className="list__item">
                  <span className="section__content--highlighted">
                    Git, GitHub, GitLab
                  </span>
                </li>
                <li className="list__item">
                  <span className="section__content--highlighted">
                    Apache Airflow
                  </span>
                  (Ingenieria de datos)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="section__subtitle">Prácticas de Desarrollo</h3>
          <ul className="list list--bulleted section__content">
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
        </div>

        <div className="mt-6 ">
          <h3 className="section__subtitle">Proyectos Destacados</h3>
          <ul className="list list--bulleted section__content">
            <li className="list__item flex">
              <span className="section__content--highlighted">ChatLive:</span>{" "}
              Un chat en tiempo real con funcionalidades avanzadas.
              <Link
                href={"/proyectos/chatlive"}
                className="flex items-center ml-2 button"
              >
                <MoveRight />
              </Link>
            </li>
            <li className="list__item flex">
              <span className="section__content--highlighted">
                Juego del Gato:
              </span>{" "}
              Servidor y cliente en Java usando Sockets, con autenticación y
              sesiones.
              <Link
                href={"/proyectos/tic-tac-toe"}
                className="flex items-center ml-2 button"
              >
                <MoveRight />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
