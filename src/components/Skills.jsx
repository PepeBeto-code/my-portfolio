const Skills = () => {
  return (
    <section
      id="skills"
      className="section section--secondary section__container section__container--full"
    >
      <h2 className="section__title">Tecnologias y Habilidades</h2>
      <div className="card card--skills">
        <h4 className="card__title">Java</h4>
        <p className="card__text">
          Experto en programación orientada a objetos y desarrollo de
          aplicaciones en Java.
        </p>
      </div>
      <div className="card card--skills">
        <h4 className="card__title">Laravel</h4>
        <p className="card__text">
          Desarrollo de aplicaciones backend con Laravel, implementando API
          RESTful y gestión de bases de datos.
        </p>
      </div>
    </section>
  );
};

export default Skills;
