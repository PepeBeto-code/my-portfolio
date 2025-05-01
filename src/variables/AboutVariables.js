import { Badge } from "reactstrap";

const skillsIns = [
  "Java 15",
  "ES6",
  "Angular 19",
  "ReactJS 18",
  "Spring Boot",
  "Postgres",
  "MySQL",
  "Docker",
  "JavaScript",
  "Typescript",
  "Git",
  "Gitlab",
  "Github",
  "Sass",
  "Html5",
  "Css3",
  "Maven",
  "Spring Security",
  "Hibernate JPA",
  "APIs RESTful",
  "Desarrollo de software",
  "Apis RESTful",
  "Desarrollo web"
];

const skillsUnlocker = [
  "ReactJS 18",
  "ES6",
  "JavaScript",
  "Amazon Web Services (AWS)",
  "Serverless Architecture",
  "AWS Lambda Functions",
  "Laravel",
  "Next.js",
  "Redux",
  "Php",
  "Mysql",
  "Css3",
  "Html5",
  "Eloquent",
  "Git",
  "Bitbucket",
  "Api RESTful"
];

const skillsFabeet = [
  "JavaScript",
  "ES5",
  "Laravel",
  "Php",
  "Html5",
  "Css3",
  "Web Services RESTful",
  "Git",
  "Github",
  "Laragon",
  "Backpack for Laravel",
  "Web services",
  "Bases de Datos Relacionales",
  "Desarrollo web"
];

const skillsTowa = [
  "Desarrollo de software",
  "Buenas practicas",
  "Java",
  "Principios solid",
  "Codigo limpio"
];

const DescripcionInstituto = () => (
    <div>
      <ul className="list list--bulleted section__content">
        <li className="list__item">Desallo y mantenimiento de aplicaciones utilizando <strong className="section__content--highlighted">Spring Boot, Java, Angular, React</strong> y contenedores <strong className="section__content--highlighted">Docker</strong>, adaptándome a las necesidades específicas de cada proyecto.</li>
        <li className="list__item">Configuración y despliegue de servicios web con <strong className="section__content--highlighted">Nginx</strong>, así como manejo de bases de datos <strong className="section__content--highlighted">PostgreSQL y MySQL</strong></li>
        <li className="list__item">Documentación clara y accesible para facilitar la colaboración en proyectos en equipo.</li>
        <li className="list__item">Implementación de metodologías <strong className="section__content--highlighted">ágiles</strong>, para organizar tareas y optimizar tiempos.</li>
        <li className="list__item">Participación activa en todas las etapas del ciclo de vida del software: análisis, diseño, desarrollo, pruebas e implementación</li>
        <li className="list__item">Contribución a soluciones que apoyan procesos estratégicos dentro del Instituto de Geografía.</li>
      </ul>
      <div>
        {skillsIns.map((skill, index) => (
          <Badge key={index} className="mx-1 badge">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
);

const DescripcionFabeet = () => (
<div>
  <ul className="list list--bulleted section__content">
    <li className="list__item">
      Diseñé y desarrollé un <strong className="section__content--highlighted">sistema integral de evaluación de satisfacción del cliente</strong> con encuestas personalizadas según el servicio contratado.
    </li>
    <li className="list__item">
      Implementé <strong className="section__content--highlighted">evaluaciones interactivas</strong> directamente desde correos electrónicos, incluyendo calificaciones por estrellas.
    </li>
    <li className="list__item">
      Amplié una <strong className="section__content--highlighted">API monolítica</strong> agregando controladores, endpoints y lógica de negocio para integrar el nuevo sistema.
    </li>
    <li className="list__item">
      Diseñé los <strong className="section__content--highlighted">DDL y DML</strong> necesarios para definir nuevas entidades en la base de datos.
    </li>
    <li className="list__item">
      Desarrollé un <strong className="section__content--highlighted">panel administrativo con Backpack for Laravel</strong>, incluyendo visualización, edición y análisis de información.
    </li>
    <li className="list__item">
      Integré <strong className="section__content--highlighted">gráficos y estadísticas dinámicas</strong> con librerías especializadas para facilitar el análisis de resultados.
    </li>
    <li className="list__item">
      Diseñé una <strong className="section__content--highlighted">interfaz intuitiva y atractiva</strong>, optimizando la experiencia tanto para usuarios como administradores.
    </li>
  </ul>
  <div>
    {skillsFabeet.map((skill, index) => (
      <Badge key={index} className="mx-1 badge">
        {skill}
      </Badge>
    ))}
  </div>
</div>
  );

const DescripcionChatbot = () => (
    <div>
      <ul className="list list--bulleted section__content">
        <li className="list__item">Desarrollé un <strong className="section__content--highlighted">web service RESTful</strong>, en <strong className="section__content--highlighted">JavaScript</strong>, integrado con <strong className="section__content--highlighted">AWS Lambda</strong> para gestionar peticiones dinámicas de manera eficiente.</li>
        <li className="list__item">Automatizé procesos mediante la integración de <strong className="section__content--highlighted">chatbots con Amazon Lex</strong>, fortaleciendo la interacción con los usuario</li>
        <li className="list__item">Construí un <strong className="section__content--highlighted">panel de administración en React</strong> con una estructura <strong className="section__content--highlighted">modular y componentes reutilizables</strong>, facilitando el desarrollo de <strong className="section__content--highlighted">tablas y formularios dinámicos</strong>.</li>
        <li className="list__item">Optimicé tiempos de respuesta y gestión de entidades de la API conectada al chatbot, asegurando un flujo de trabajo intuitivo para los usuarios administrativos.</li>
      </ul>
      <div>
        {skillsUnlocker.map((skill, index) => (
          <Badge key={index} className="mx-1 badge">
            {skill}
          </Badge>
        ))}
      </div>
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
      <div>
        {skillsTowa.map((skill, index) => (
          <Badge key={index} className="mx-1 badge">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );

const experiencia = [
    {
      titulo: "Instituto de Geografía - UNAM",
      actividad: "Desarrollador de Software",
      fechaCorta: "Abril 24",
      fechaCompleta: "Colaborador / Desarrollador de Software | Abril 2024 - Actualidad",
      descripcionCorta: "Desarrollo y mantenimiento de aplicaciones fullstack y APIs RESTful, colaborando en todo el ciclo de vida del software con tecnologías como Java, Spring Boot y Angular.",
      descripcionLarga: <DescripcionInstituto />,
      skills:["Desarrollo de software", "Desarrollo Front", "Desarrollo Back", "Sprint Boot", "Angular"]
    },
    {
        titulo: "Curso de Ingeniería de Software",
        actividad: "Curso Towa Software", 
        fechaCorta: "Oct 23",
        fechaCompleta: "Octubre 2023 - Noviembre 2023",
        descripcionCorta: "Completé un curso intensivo y competitivo en Java, aprendiendo a escribir código limpio y estructurado.",
        descripcionLarga: <DescripcionTowa />,
        skills:["Desarrollo de software", "Java", "Buenas Practicas"]
      },
    {
      titulo: "Unlokerfast",
      actividad: "Trainee",
      fechaCorta: "May 22",
      fechaCompleta: "Trainee / Junior Developer | Mayo 2022 - Agosto 2022",
      descripcionCorta: "Arquitectura serverless con AWS y React, integrando chatbots con Lex, funciones Lambda y un panel de administración modular.",
      descripcionLarga: <DescripcionChatbot />,
      skills:["ReactJS", "Amazon Web Services (AWS)", "Laravel", "Serverless"]
    },
    {
        titulo: "Fabeet",
        actividad: "Becario",
        fechaCorta: "Octubre 21",
        fechaCompleta: "Becario de Desarrollo | Octubre 2021 - Abril 2022",
        descripcionCorta: "Creé un sistema completo para medición de satisfacción, desde la interfaz hasta informes detallados.",
        descripcionLarga: <DescripcionFabeet />,
        skills:["Desarrollo web", "Bases de Datos Relacionales", "Web services"]
      },
  ];
  
  export default experiencia;
  