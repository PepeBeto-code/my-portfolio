// components/DescripcionInstituto.tsx
const DescripcionInstituto = () => (
    <div>
      <ul className="list list--bulleted section__content">
        <li className="list__item">Diseñé y desarrollé una aplicación en <strong className="section__content--highlighted">Angular</strong> para gestionar plantillas en <strong className="section__content--highlighted">YAML</strong>, agilizando la edición y almacenamiento de datos.</li>
        <li className="list__item">Documenté APIs con <strong className="section__content--highlighted">Swagger</strong>, facilitando la integración y comprensión del sistema.</li>
        <li className="list__item">Optimizé la <strong className="section__content--highlighted">base de datos</strong> del sistema de inventarios, permitiendo la incorporación de nuevas funcionalidades.</li>
        <li className="list__item">Refactoricé el código <strong className="section__content--highlighted">front-end en Angular</strong>, modularizándolo para una mejor escalabilidad.</li>
        <li className="list__item">Implementé mejoras en un <strong className="section__content--highlighted">Story Map</strong> de seguridad vial en México con <strong className="section__content--highlighted">Leaflet, CSS y JavaScript</strong>, asegurando responsividad y nuevas funcionalidades.</li>
        <li className="list__item">Aprendí sobre la creación de <strong className="section__content--highlighted">geoportales</strong> con tecnologías como <strong className="section__content--highlighted">PostGIS, QGIS y GeoServer</strong>.</li>
      </ul>
    </div>
);

// components/DescripcionFabeet.tsx
const DescripcionFabeet = () => (
    <div>
      <ul className="list list--bulleted section__content">
        <li  className="list__item">Desarrollé un sistema de evaluación de satisfacción utilizando <strong className="section__content--highlighted">PHP y Laravel (MVC)</strong>.</li>
        <li className="list__item">Implementé un <strong className="section__content--highlighted">panel de administración</strong> con Backpack for Laravel, permitiendo la gestión eficiente de evaluaciones.</li>
        <li className="list__item">Diseñé una interfaz atractiva y funcional, mejorando la experiencia de usuario.</li>
        <li className="list__item">Realicé pruebas y depuración para garantizar la estabilidad del sistema.</li>
      </ul>
    </div>
  );

// components/DescripcionChatbot.tsx
const DescripcionChatbot = () => (
    <div>
      <ul className="list list--bulleted section__content">
        <li className="list__item">Contribuí en el desarrollo de un <strong className="section__content--highlighted">chatbot con microservicios en AWS</strong>, utilizando <strong className="section__content--highlighted">Amazon Lex y AWS Lambda</strong>.</li>
        <li className="list__item">Implementé funciones <strong className="section__content--highlighted">Lambda en JavaScript</strong>, mejorando la lógica conversacional del chatbot.</li>
        <li className="list__item">Colaboré en la arquitectura y pruebas del sistema.</li>
        <li className="list__item">Aunque el proyecto no se completó, adquirí experiencia en <strong className="section__content--highlighted">desarrollo serverless y microservicios</strong>.</li>
      </ul>
    </div>
  );  

  const DescripcionTowa = () => (
    <div>
      <ul className="list list--bulleted section__content">
        <li className="list__item">Curso intensivo de <strong className="section__content--highlighted">Ingeniería de Software</strong> impartido por <strong className="section__content--highlighted">Gerardo López</strong>, fundador de Towa Software.</li>
        <li className="list__item">Duración de un mes, con clases diarias y un enfoque altamente competitivo.</li>
        <li className="list__item">Uso de <strong className="section__content--highlighted">Java</strong> como lenguaje principal para aplicar principios de software.</li>
        <li className="list__item">El curso enfatizaba la importancia de escribir <strong className="section__content--highlighted">código limpio, estructurado y legible</strong>.</li>
        <li className="list__item">Aprendí a simplificar soluciones, reducir código innecesario y mejorar la calidad del software.</li>
        <li className="list__item">Finalicé el curso con éxito y obtuve un <strong className="section__content--highlighted">reconocimiento de Towa Software</strong>.</li>
      </ul>
    </div>
  );

const experiencia = [
    {
      titulo: "Instituto de Geografía - UNAM",
      actividad: "Desarrolador",
      fechaCorta: "Abril 24",
      fechaCompleta: "Colaborador / Desarrollador de Software | Abril 2024 - Actualidad",
      descripcionCorta: "Transformé procesos de almacenamiento y visualización con soluciones Angular y geoportales avanzados.",
      descripcionLarga: <DescripcionInstituto />,
    },
    {
        titulo: "Curso de Ingeniería de Software",
        actividad: "Curso Towa Software", 
        fechaCorta: "Oct 23",
        fechaCompleta: "Octubre 2023 - Noviembre 2023",
        descripcionCorta: "Completé un curso intensivo y competitivo en Java, aprendiendo a escribir código limpio y estructurado con Java.",
        descripcionLarga: <DescripcionTowa />,
      },
    {
      titulo: "Chatbot en AWS",
      actividad: "Trainee",
      fechaCorta: "Sep 22",
      fechaCompleta: "Trainee / Junior Developer | Septiembre 2022 - Diciembre 2022",
      descripcionCorta: "Contribuí al diseño de un chatbot basado en microservicios, aplicando funciones Lambda innovadoras.",
      descripcionLarga: <DescripcionChatbot />,
    },
    {
        titulo: "Fabeet",
        actividad: "Becario",
        fechaCorta: "Octubre 21",
        fechaCompleta: "Becario de Desarrollo | Octubre 2021 - Abril 2022",
        descripcionCorta: "Creé un sistema completo para medición de satisfacción, desde la interfaz hasta informes detallados.",
        descripcionLarga: <DescripcionFabeet />,
      },
  ];
  
  export default experiencia;
  