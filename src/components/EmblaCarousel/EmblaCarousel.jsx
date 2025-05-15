"use client";
import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import "./css/base.css";
import "./css/embla.css";
import Link from "next/link";

const EmblaCarousel = (props) => {
  const { title, options, children } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section
      className="embla"
      aria-label="Carrusel de proyectos destacados"
      role="region"
    >
      <div className="embla__controls mb-2">
        <Link
          href={"/proyectos"}
          className="!text-[var(--primary-text)] hover:!text-[var(--text-tertiary)] font-bold"
        >
          Ver Todos
        </Link>
        <div className="embla__buttons">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            aria-label="Proyecto anterior"
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            aria-label="Proyecto siguiente"
          />
        </div>
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {React.Children.map(children, (child, index) =>
            React.cloneElement(child, {
              index,
              onExpand: () => emblaApi?.scrollTo(index),
              "aria-roledescription": "slide",
              role: "group",
              "aria-label": `Proyecto ${index + 1} de ${children.length}`,
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
