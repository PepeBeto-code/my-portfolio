import * as motion from "motion/react-client";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="section section--introduction section--secondary"
    >
      <div className="section__container section__container--center">
        <motion.h2
          className="section__title text-5xl "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hola, soy José Alberto Miñon Velázquez{" "}
        </motion.h2>

        <p className="section__content section__content--introduction">
          Un desarrollador de software especializado en crear soluciones
          eficientes con Java, PHP, y React. Mi objetivo es mejorar
          continuamente mis habilidades y construir aplicaciones robustas.
        </p>
        <a href="#projects" className="button button__text button--principal">
          Ver proyectos
        </a>
      </div>
    </section>
  );
};

export default Introduction;
