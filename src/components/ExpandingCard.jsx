"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { p } from "motion/react-client";
import Link from "next/link";

export default function ExpandingCard({ index, onExpand, proyect }) {
  const [isHovered, setIsHovered] = useState(false);

  const [current, setCurrent] = useState(0);

  const cardRef = useRef(null);
  const reduceMotion = useReducedMotion(); // respeta preferencias SO

  const [expandDirection, setExpandDirection] = useState("right");

  useEffect(() => {
    if (isHovered && onExpand) {
      onExpand();
    }
  }, [isHovered, onExpand]);

  useEffect(() => {
    const handleHover = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        // Si está más cerca del borde derecho, expandir hacia la izquierda
        const preferLeft = rect.right > windowWidth - 300;

        setExpandDirection(preferLeft ? "left" : "right");
      }
    };

    const card = cardRef.current;
    card?.addEventListener("mouseenter", handleHover);
    return () => card?.removeEventListener("mouseenter", handleHover);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % proyect.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [proyect.images.length]);

  const baseWidth = 150;
  const expandedWidth = 950;

  /* Variantes de animación */
  const widthAnim = {
    initial: { width: baseWidth },
    animate: { width: isHovered ? expandedWidth : baseWidth },
    transition: reduceMotion
      ? { duration: 0 } // sin animación si reduce-motion
      : { duration: 0.4, ease: "easeInOut" },
  };

  /* ALT o role para imágenes de fondo */
  const imgLabel = `Captura del proyecto ${proyect.name}`;

  return (
    <Link
      href={proyect.src}
      aria-label={`Ir al detalle del proyecto ${proyect.name}`}
      className=" focus:outline-none focus-visible:ring-2 ring-offset-2 ring-[var(--primary-color)] rounded-lg"
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <motion.article
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative embla__slide h-[30rem] max-w-full overflow-hidden  ${
          isHovered
            ? "!w-[16rem] md:!w-[50rem] z-10"
            : "!w-[16rem] md:!w-[19rem] z-1"
        }  flex flex-col items-start justify-end text-white rounded-xl overflow-hidden cursor-pointer`}
        role="group"
        aria-labelledby={`proj-title-${proyect.name}`}
        layout
      >
        <div
          aria-hidden="true"
          className="absolute bottom-0 w-full h-full z-10 pointer-events-none bg-radial from-transparent to-black"
        />

        {proyect.images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 w-full h-full bg-cover bg-center sm:bg-center md:bg-right
            transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: isHovered
                ? `url(${src.horizontal})`
                : `url(${src.vertical})`,
            }}
            role="img"
            aria-label={imgLabel}
          />
        ))}
        <div className="p-4 relative z-10">
          <h3 id={`proj-title-${proyect.name}`} className="text-xl font-bold">
            Proyecto destacado
          </h3>
          <p className="text-sm text-white">
            {/* Texto siempre visible */}
            {proyect.name}
          </p>

          <AnimatePresence>
            {isHovered && (
              <motion.p
                className="mt-2 text-sm text-white"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.3 }}
              >
                {proyect.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.article>
    </Link>
  );
}
