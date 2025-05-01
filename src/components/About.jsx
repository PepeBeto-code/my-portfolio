import React from "react";

export default function About({ children, page = false }) {
  return (
    <>
      {children}
      <p className="section__content mb-2">
        Soy un{" "}
        <span className="section__content--highlighted">
          {" "}
          Desarrollador de Software
        </span>{" "}
        con formación en
        <span className="section__content--highlighted">
          {" "}
          Ciencias de la Computación en la UNAM
        </span>{" "}
        , especializado en
        <span className="section__content--highlighted">
          {" "}
          backend y frontend
        </span>{" "}
        con
        <span className="section__content--highlighted">
          {" "}
          Spring Boot, React, Angular y Laravel
        </span>{" "}
        . Me apasiona
        <span className="section__content--highlighted">
          {" "}
          crear soluciones escalables y optimizar procesos
        </span>{" "}
        mediante tecnología.
      </p>
      <p className="section__content mb-2">
        Actualmente, colaboro en el{" "}
        <span className="section__content--highlighted">
          {" "}
          Instituto de Geografía de la UNAM
        </span>{" "}
        desarrollando proyectos que combinan
        <span className="section__content--highlighted">
          {" "}
          tecnología con investigación
        </span>{" "}
        , aplicando
        <span className="section__content--highlighted">
          {" "}
          bases de datos avanzadas, APIs RESTful y arquitectura eficiente
        </span>{" "}
        .
      </p>
      {page && (
        <p className="section__content mb-2">
          Me destaco por ser autodidacta, resolutivo y por adaptarme rápidamente
          a nuevos desafíos. Mi enfoque está en el diseño eficiente de
          arquitecturas, la optimización de recursos y la construcción de
          interfaces de usuario intuitivas. Además, tengo experiencia trabajando
          con AWS Lambda, API RESTful y bases de datos, y busco continuamente
          incorporar nuevas tecnologías, como notificaciones push y Web Workers,
          para mejorar la experiencia del usuario.
        </p>
      )}
      {page && (
        <p className="section__content mb-2">
          Mi objetivo es integrarme a un equipo de desarrollo donde pueda
          aportar valor con mis habilidades técnicas y seguir creciendo
          profesionalmente en proyectos que optimicen procesos mediante la
          tecnología.
        </p>
      )}
    </>
  );
}
