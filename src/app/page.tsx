import Introduction from "@/components/Introduction"
import Header from "../components/Header"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import OutboundLink from "../components/OutboundLink"
import About from "../components/About"
import Contact from "../components/Contact"

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
    <Contact />
  </div>
  );
}
