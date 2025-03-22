import Image from "next/image";
import AnimatedLink from "./OutboundLink";

const Projects = () => {
  return (
    <section id="projects" className="section section__container">
      <div className="card">
        <Image
          src="/images/tictactoc.png"
          width={10}
          height={10}
          alt="Proyecto 1"
          className="card__img"
          priority // Opción para cargar inmediatamente
        />
        <h3 className="card__title">Juego Multijugador</h3>
        <p className="card__text pb-8">
          Desarrollé un juego multijugador en Java utilizando sockets para la
          comunicación entre clientes y servidores.
        </p>
        <AnimatedLink href={`/proyectos/tic-tac-toe`} text={"Ver mas"} />
      </div>
      <div className="card">
        <Image
          src="/images/chatlive.png"
          width={250}
          height={200}
          alt="Proyecto 2"
          className="card__img"
        />
        <h3 className="card__title">Aplicación de Tareas</h3>
        <p className="card__text pb-8">
          Una aplicación de gestión de tareas utilizando Laravel y React para
          gestionar las tareas de manera eficiente.
        </p>
        <AnimatedLink href={`/proyectos/chatlive`} text={"Ver mas"} />
      </div>
      <div className="card">
        <Image
          src="/images/rdt3.jpg"
          width={10}
          height={10}
          alt="Proyecto 1"
          className="card__img"
        />
        <h3 className="card__title">
          Simulación y Implementación de Protocolo rdt3.0 sobre UDP
        </h3>
        <p className="card__text pb-8">
          Protocolo rdt3.0: Transferencia Fiable Implementación del protocolo
          rdt3.0 en entornos no confiables, simulando errores y adaptándolo a
          UDP para garantizar entrega, orden e integridad de los datos.
        </p>
        <AnimatedLink href={`/proyectos/rdt3`} text={"Ver mas"} />
      </div>
    </section>
  );
};

export default Projects;
