import * as motion from "motion/react-client"
import Introduction from "@/components/Introduction"
import Header from "../components/Header"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import OutboundLink from "../components/OutboundLink"
import About from "../components/About"
import { MoveRight } from 'lucide-react';
import Link from "next/link"

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
        <About></About>
        <OutboundLink href={`/about`} text={"Ver mas"}/>
    </section>

    {/* Contact Section */}
    <section id="contact" className="section">
      <motion.h2 className="section__title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>Contacto</motion.h2>
      <p className="section__content">Puedes contactarme en <a href="mailto:tucorreo@gmail.com" className="text-blue-400">tucorreo@gmail.com</a></p>
    </section>
  </div>
  );
}
