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
      return slideNode.querySelector(".embla__parallax__layer");
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
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((img, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <Image
                    src={img.src} // Ruta relativa en tu carpeta pública o una URL externa
                    alt={img.alt}
                    className="embla__slide__img embla__parallax__img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    width={100} // Ancho en píxeles
                    height={100} // Altura en píxeles
                    onClick={() => setExpandedImage(img)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
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
        <div className="cursor-pointer" onClick={() => setModalGallery(true)}>
          <Images />
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => {
                isExpand.current = false;
                setIsModalNavigating(false);
                onDotButtonClick(index);
              }}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>

      {/* Imagen expandida */}
      {expandedImage && (
        <div className="expanded-image-overlay">
          {currentIndex > 0 && (
            <PrevButton
              className="!mr-[0.5rem]  !text-white embla__button embla__button--prev"
              onClick={handlePrev}
              disabled={prevBtnDisabled}
            />
          )}

          <div className="expanded-image-container">
            <button
              className="close-button"
              onClick={() => setExpandedImage(null)}
            >
              <X />
            </button>
            <Image
              src={expandedImage.src}
              alt={expandedImage.alt}
              width={800}
              height={600}
              className="expanded-image"
            />
            <div
              className="cursor-pointer flex justify-center items-center text-white text-xl mt-4"
              onClick={() => {
                setExpandedImage(null);
                setModalGallery(true);
              }}
            >
              <Images />
            </div>
          </div>

          {currentIndex < images.length - 1 && (
            <NextButton
              className="!ml-[0.5rem] !text-white embla__button embla__button--next"
              onClick={handleNext}
              disabled={nextBtnDisabled}
            />
          )}
        </div>
      )}

      {/* Gallery expandida */}
      {modalGallery && (
        <div className="expanded-image-overlay">
          <div
            style={{
              overflowY: "auto",
              maxHeight: "100%",
              width: "100%",
            }}
          >
            <div className="gallery gallery--image relative">
              <button
                className="close-button"
                onClick={() => setModalGallery(null)}
              >
                <X />
              </button>
              {images.map((img, index) => (
                <div
                  key={index}
                  className="gallery__item cursor-pointer"
                  onClick={() => {
                    setModalGallery(false);
                    setExpandedImage(img);
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    className="gallery__image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagesCarousel;
