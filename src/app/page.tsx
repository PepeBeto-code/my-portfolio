import * as motion from "motion/react-client"
import Introduction from "@/components/Introduction"
import Header from "../components/Header"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import OutboundLink from "../components/OutboundLink"
import About from "../components/About"

export default function Home() {
  return (
    <div>
    {/* Header */}
    <Header></Header>

    {/* Hero Section */}
    <Introduction></Introduction>

    {/* Projects Section */}
    <Projects></Projects>

    <Skills></Skills>

    {/* About Section */}
    <section id="about" className="section section__container">
        <About>
          <h2 className="section__title">Sobre mí</h2>
        </About>
        <OutboundLink href={`/about`} text={"Ver mas"} onClick={undefined}/>
    </section>

    {/* Contact Section */}
    <section id="contact" className="section  section__container--full section--secondary">
      <div className="section__container section__container--spaced w-full">
      <div className="section__content">
      <motion.h2 className="section__title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>Contacto</motion.h2>
      <p className="">
  Puedes contactarme en <a href="mailto:jose-alberto@ciencias.unam.mx" rel="noopener noreferrer nofollow" className="!text-blue-400">jose-alberto@ciencias.unam.mx</a>, enviarme un mensaje directo vía <a href="https://wa.me/5631303570" rel="noopener noreferrer nofollow" className="!text-green-400">WhatsApp</a>, o llenar el formulario.
</p>
      </div>
      <div className="w-[30rem] flex items-center section--tertiary justify-center rounded-lg p-6">
      <form action="https://formspree.io/f/[tu-id]" method="POST" className="form w-full">
        <div className="flex flex-col mb-2">
          <label className="section__content mb-0" htmlFor="name">Nombre</label>
          <input className=" rounded-sm p-1" type="text" id="name" name="name" style={{
            backgroundColor: "oklch(.967 .003 264.542)"
          }} required />
        </div>
        
        <div className="flex flex-col mb-2">
          <label className="section__content mb-0" htmlFor="email">Correo electrónico</label>
          <input className="rounded-sm p-1" type="email" id="email" name="email" style={{
            backgroundColor: "oklch(.967 .003 264.542)"
          }} required />
        </div>

        <div className="flex flex-col mb-2">
          <label className="section__content mb-0" htmlFor="message">Mensaje:</label>
          <textarea className=" rounded-sm p-1" id="message" name="message" rows={4} style={{
            backgroundColor: "oklch(.967 .003 264.542)"
          }} required></textarea>
        </div>

        <div className="flex flex items-center justify-center">
          <button className="button button--principal button--primary" type="submit">Enviar</button>
        </div>        
      </form>
      </div>
      </div>
    </section>
  </div>
  );
}
