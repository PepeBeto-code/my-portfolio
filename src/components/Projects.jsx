import Image from "next/image";
import AnimatedLink from "./OutboundLink";
import ImageExpanded from "@/components/ImageExpanded";
const Projects = () => {
  return (
    <>
      <section id="projects" className="section section__container">
        <div
          className="card mb-2"
          style={{
            backgroundColor: "oklch(.967 .003 264.542)",
          }}
        >
          <ImageExpanded
            image={{
              src: "/images/Chat2.png",
              alt: "Proyecto Chat en vivo",
            }}
          />
          <h3 className="card__title">Chat en Vivo</h3>
          <p className="card__text pb-8">
            Aplicación de mensajería instantánea con comunicación en tiempo
            real, notificaciones push y seguridad avanzada para conversaciones
            rápidas y organizadas.
          </p>
          <AnimatedLink href={`/proyectos/chatlive`} text={"Ver mas"} />
        </div>

        <div
          className="card mb-2"
          style={{
            backgroundColor: "oklch(.967 .003 264.542)",
          }}
        >
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

        <div
          className="card mb-2"
          style={{
            backgroundColor: "oklch(.967 .003 264.542)",
          }}
        >
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
    </>
  );
};

export default Projects;
