import OutboundLink from "../components/OutboundLink"
import About from "../components/About"
import Contact from "../components/Contact"
import Nav from "@/components/Nav/Nav"
import HeroSection from '@/components/HeroSection'
import Skills2 from '@/components/Skills2'
import SectionProyects from '@/components/SectionProyects'
import Image from "next/image";

export default function Home() {
  return (
    <main>
    {/* Hero Section */}
    <HeroSection></HeroSection>

    <Skills2></Skills2>

    {/* Projects Section */}
    <SectionProyects></SectionProyects>

    {/* About Section */}
    <section id="about" className="container py-12 flex !flex-col-reverse md:!flex-row justify-between space-x-4 space-y-8">
      <div className="md:w-2/3">
        <About>
          <h2 className="section__title mt-4 md:mt-0">Sobre mí</h2>
        </About>
        <OutboundLink href={`/about`} text={"Ver mas"} onClick={undefined}/>
      </div>
      <div className="flex items-center justify-center md:w-1/3">
        <div className="relative md:w-[20rem] w-[15rem] rounded-lg bg-white shadow-lg p-4 before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-10 before:h-10 before:bg-white before:shadow-[5px_5px_10px_rgba(0,0,0,0.2)] before:rotate-45 before:translate-x-1/2 before:translate-y-1/2 z-0">
          <Image
            src="/images/yo.jpeg"
            alt="Yo"
            width={320}
            height={320}
            className="rounded-lg relative z-10 scale-110 -translate-y-6 shadow-xl"
          />
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <Contact />
  </main>
  );
}
