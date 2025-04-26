"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";
import "./embla.scss";
import { X } from "lucide-react";
import { Images } from "lucide-react";

const TWEEN_FACTOR_BASE = 0.2;

const ImagesCarousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);
  const [expandedImage, setExpandedImage] = useState(null);
  const [modalGallery, setModalGallery] = useState(null);
  const isExpand = useRef(null);
  // Estado para controlar si la navegación proviene del modal
  const [isModalNavigating, setIsModalNavigating] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0); // Índice sincronizado

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
      if (isModalNavigating && isExpand.current) {
        setExpandedImage(images[emblaApi.selectedScrollSnap()]); // Sincroniza modal
      }
    };

    emblaApi.on("select", onSelect);
  }, [emblaApi, isModalNavigating]);

  const handleNext = () => {
    isExpand.current = true;
    setIsModalNavigating(true);
    if (!emblaApi) return;
    emblaApi.scrollNext();
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setExpandedImage(images[newIndex]); // Sincroniza imagen expandida
  };

  const handlePrev = () => {
    isExpand.current = true;
    setIsModalNavigating(true);
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setExpandedImage(images[newIndex]); // Sincroniza imagen expandida
  };

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla-img__parallax__layer");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `translateX(${translate}%)`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax);
  }, [emblaApi, tweenParallax]);

  // Bloquear el scroll cuando la imagen está expandida
  useEffect(() => {
    if (expandedImage || modalGallery) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [expandedImage, modalGallery]);

  return (
    <div className="embla-img">
      <div
        className="embla-img__viewport relative flex items-center"
        ref={emblaRef}
      >
        <div className="embla-img__container">
          {images.map((img, index) => (
            <div className="embla-img__slide" key={index}>
              <div className="embla-img__parallax">
                <div className="embla-img__parallax__layer">
                  <Image
                    src={img.src} // Ruta relativa en tu carpeta pública o una URL externa
                    alt={img.alt}
                    className="embla-img__slide__img embla-img__parallax__img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    width={100} // Ancho en píxeles
                    height={100} // Altura en píxeles
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="embla-img__buttons absolute">
          <PrevButton
            onClick={() => {
              isExpand.current = false;
              setIsModalNavigating(false);
              onPrevButtonClick();
            }}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => {
              isExpand.current = false;
              setIsModalNavigating(false);
              onNextButtonClick();
            }}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>

      <div className="embla-img__controls">
        <div className="embla-img__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => {
                isExpand.current = false;
                setIsModalNavigating(false);
                onDotButtonClick(index);
              }}
              className={"embla-img__dot".concat(
                index === selectedIndex ? " embla-img__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesCarousel;
