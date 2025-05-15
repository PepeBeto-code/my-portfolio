import skills from "@/variables/AkillsVariables";
import Image from "next/image";
import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

export default function Skills2() {
  return (
    <section
      className="container py-12 md:h-[60vh] lg:h-[100vh] space-y-4"
      aria-labelledby="skills-heading"
    >
      <div className="md:h-2/5 flex justify-between">
        <div className="flex md:max-w-xl flex-col md:items-start items-center justify-center mt-[15rem] md:mt-0">
          <h2 className="section__title" id="skills-heading">
            Tecnologias y Habilidades
          </h2>
          <p className="section__content">
            Me desenvuelvo con soltura en un amplio abanico de tecnologías,
            combinando lógica, creatividad y eficiencia para dar vida a cada
            proyecto.
          </p>
        </div>
        <div
          className="w-[90%] md:relative absolute md:h-auto h-[13em] md:w-1/2 bg-no-repeat  bg-contain md:bg-center bg-top"
          style={{ backgroundImage: `url(/images/skills.png)` }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          role="presentation"
          aria-hidden="true"
        >
          {/* Gradiente inferior para desvanecer */}
          <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[var(--bg-color)]  to-transparent z-11 pointer-events-none" />

          <div className="absolute right-0 top-0 h-full invisible md:!visible w-40 bg-gradient-to-l from-[var(--bg-color)]  to-transparent z-11 pointer-events-none" />

          {/* <div className="absolute bottom-0 w-full h-full z-10 pointer-events-none bg-radial from-transparent to-black" /> */}
        </div>
      </div>

      <div className="md:h-2/5 relative flex md:items-center md:justify-end justify-center">
        <div
          className="relative flex space-x-4 flex-wrap justify-center"
          role="list"
          aria-label="Logos de tecnologías"
        >
          <div className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-[var(--bg-color)] to-transparent z-11 pointer-events-none" />
          <Image
            src="/tailwind.svg" // Ruta relativa en tu carpeta pública o una URL externa
            alt="Logo de Tailwind CSS"
            width={100} // Ancho en píxeles
            height={100} // Altura en píxeles
            role="listitem"
            className="md:w-[100px] w-[3rem]"
          />
          <Image
            src="/postgresql.svg" // Ruta relativa en tu carpeta pública o una URL externa
            alt="Logo de PostgreSQL"
            width={100} // Ancho en píxeles
            height={100} // Altura en píxeles
            className="md:w-[100px] w-[3rem]"
            role="listitem"
          />
          <Image
            src="/SpringBootIcon.svg" // Ruta relativa en tu carpeta pública o una URL externa
            alt="Logo de SpringBoot"
            width={100} // Ancho en píxeles
            height={100} // Altura en píxeles
            className="md:w-[100px] w-[3rem]"
            role="listitem"
          />
          <FaJava
            className="text-sky-400 md:text-[100px] text-[3rem]"
            aria-label="Logo de Java"
            role="img"
          ></FaJava>
          <FaNodeJs
            className=" text-green-500 md:text-[100px] text-[3rem]"
            aria-label="Logo de Node.js"
            role="img"
          />
          <FaReact
            className=" text-sky-400 md:text-[100px] text-[3rem]"
            aria-label="Logo de React"
            role="img"
          />
        </div>
      </div>

      <div
        className="md:h-1/5 flex items-start justify-center space-x-4 space-y-2 flex-wrap"
        role="list"
        aria-label="Lista de habilidades"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            role="listitem"
            className="bg-[var(--primary-color)]  w-fit p-2 rounded-r-lg text-xl font-semibold text-[var(--bg-color)]"
          >
            {skill.skill}
          </div>
        ))}
      </div>
    </section>
  );
}
