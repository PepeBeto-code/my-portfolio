import React from "react";

export default function About({ children, page = false }) {
  return (
    <>
      {children}
      <p className="section__content mb-2">
        Soy Desarrollador de Software con formación en Ciencias de la
        Computación en la UNAM, y experiencia en desarrollo web y backend. He
        trabajado en la creación de aplicaciones escalables utilizando
        tecnologías como Java, Spring Boot, React, Angular y Laravel.
        Actualmente, estoy ampliando mis conocimientos en el Instituto de
        Geografía de la UNAM, donde previamente concluí mi servicio social y
        ahora desarrollo proyectos que combinan tecnología con investigación.
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
