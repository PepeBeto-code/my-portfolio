"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { p } from "motion/react-client";
import Link from "next/link";

export default function ExpandingCard({ index, onExpand, proyect }) {
  const [isHovered, setIsHovered] = useState(false);

  const [current, setCurrent] = useState(0);

  const cardRef = useRef(null);
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
  }, []);

  const baseWidth = 350;
  const expandedWidth = 950;

  return (
    <Link href={proyect.src}>
      <div
        ref={cardRef}
        className={`embla__slide`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className={`relative h-[30rem] ${
            isHovered ? "z-10" : "z-1"
          }  flex flex-col items-start justify-end text-white rounded-xl overflow-hidden cursor-pointer`}
          initial={{ width: baseWidth }}
          animate={{
            width: isHovered ? expandedWidth : baseWidth,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="absolute bottom-0 w-full h-full z-10 pointer-events-none bg-radial from-transparent to-black" />

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
            />
          ))}
          <div className="p-4 relative z-10">
            <h3 className="text-xl font-bold">Proyecto destacado</h3>
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
                  transition={{ duration: 0.3 }}
                >
                  {proyect.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </Link>
  );
}
