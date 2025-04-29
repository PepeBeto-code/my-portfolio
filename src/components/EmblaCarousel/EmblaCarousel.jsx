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
    <section className="embla">
      <div className="embla__controls mb-2">
        <Link
          href={"/proyectos"}
          className="!text-[var(--primary-text)] hover:!text-[var(--text-tertiary)] font-bold"
        >
          Ver Todos
        </Link>
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child) && child.type === Link) {
              const inner = child.props.children;

              return React.cloneElement(child, {
                children: React.cloneElement(inner, {
                  index,
                  onExpand: () => emblaApi?.scrollTo(index),
                }),
              });
            }

            return child;
          })}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
