import skills from "@/variables/AkillsVariables";

const Skills = () => {
  return (
    <section
      id="skills"
      className="section section--secondary section__container--full"
    >
      <div className="section__container">
        <h2 className="section__title">Tecnologias y Habilidades</h2>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`card card--skills mb-2 ${
              (index + 1) % 2 == 0 ? " !flex-row-reverse" : ""
            }`}
            style={{
              justifyContent: (index + 1) % 2 == 0 ? "end" : "",
            }}
          >
            <h4
              className={`card__title ${
                (index + 1) % 2 == 0 ? "!mb-[12px] !ml-[25px]" : ""
              }`}
            >
              {skill.skill}
            </h4>
            <p className="card__text">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
