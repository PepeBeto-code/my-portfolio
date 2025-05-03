"use client";
import * as motion from "motion/react-client";
import Socials from "@/components/Socials";

export default function HeroSection() {
  return (
    <section className="w-full md:h-[60vh] lg:h-[100vh] h-[100vh] flex flex-col items-center md:flex-row">
      {/* Bloque de imagen */}
      <div
        className="w-full relative md:w-1/2 h-97 sm:h-80 md:h-full bg-cover bg-center"
        style={{ backgroundImage: `url(/images/home.png)` }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Gradiente inferior para desvanecer */}
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[var(--bg-color)] to-transparent z-11 pointer-events-none" />

        <div className="absolute right-0 top-0 h-full invisible md:!visible w-40 bg-gradient-to-l from-[var(--bg-color)] to-transparent z-11 pointer-events-none" />

        <div className="absolute bottom-0 w-full h-full z-10 pointer-events-none bg-radial from-transparent to-black" />
      </div>

      {/* Bloque de contenido */}
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start px-6 md:px-12 py-12 md:py-0">
        <div className="max-w-lg text-center md:text-left space-y-6">
          <motion.h1
            className="text-4xl sm:text-5xl section__title !font-extrabold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Hola, soy José Alberto Miñon Velázquez
          </motion.h1>
          <motion.p
            className="section__content "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Un desarrollador de software especializado en soluciones escalables
            con Java, Spring Boot, React y Next.js. Diseño y construyo
            aplicaciones que mejoran procesos, automatizan tareas y optimizan la
            gestión de datos.
          </motion.p>
          <Socials></Socials>
          <motion.a
            href="#projects"
            className="button button--principal m-auto !mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Ver proyectos
          </motion.a>
        </div>
      </div>
    </section>
  );
}
