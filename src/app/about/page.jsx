import React from "react";
import Timeline from "../../components/TimeLine/TimeLine";
import About from "../../components/About";
import BackLink from "../../components/BackLink";

export default function page() {
  return (
    <div className="section ">
      <BackLink></BackLink>
      <section className="section__container">
        <About></About>
        <div>
          <h2 className="section__title">Experiencia</h2>
          <Timeline></Timeline>
        </div>

        <div className="mt-6">
          <h3 className="section__subtitle">Habilidades y Tecnologías</h3>
          <p className="section__content">
            Experiencia en desarrollo con{" "}
            <span className="">Laravel, React, Angular y Next.js</span>. También
            he trabajado con <span className="">Java y Sockets</span> en
            proyectos académicos. Me interesa el desarrollo full-stack, con
            énfasis en arquitectura escalable y código limpio.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="section__subtitle">Idiomas</h3>
          <p className="section__content">
            Actualmente finalizando mis materias de inglés para la titulación.
          </p>
        </div>

        <div className="mt-6 ">
          <h3 className="section__subtitle">Proyectos Destacados</h3>
          <ul className="list list--bulleted section__content">
            <li className="list__item">
              <span className="section__content--highlighted">ChatLive:</span>{" "}
              Un chat en tiempo real con funcionalidades avanzadas.
            </li>
            <li className="list__item">
              <span className="section__content--highlighted">
                Juego del Gato:
              </span>{" "}
              Servidor y cliente en Java usando Sockets, con autenticación y
              sesiones.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
