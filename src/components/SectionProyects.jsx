import React from "react";
import ExpandingCard from "./ExpandingCard";
import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel";

const OPTIONS = { align: "start" };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function SectionProyects() {
  return (
    <section id="projects" className="section bg-[var(--secondary-color)]">
      <div className="flex flex-col container md:items-start items-center justify-center !mb-0">
        <h2 className="section__title">Proyectos Destacados</h2>
        <p className="section__content max-w-2xl !mb-0">
          He trabajado en una variedad de proyectos y he aprendido mucho en cada
          uno de ellos. Aquí te muestro algunos de los más destacados.
        </p>
      </div>
      <div className="container flex md:space-x-4 space-y-4 items-center justify-center flex-wrap md:!flex-nowrap">
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
          title={"Destacados del Catálogo"}
        >
          <>
            <ExpandingCard></ExpandingCard>
            <ExpandingCard></ExpandingCard>
            <ExpandingCard></ExpandingCard>
            <ExpandingCard></ExpandingCard>
            <ExpandingCard></ExpandingCard>
          </>
        </EmblaCarousel>
      </div>
    </section>
  );
}
