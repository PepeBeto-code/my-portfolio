"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    vertical: "/images/Chat/ChatV1.png",
    horizontal: "images/Chat/Chat1.png",
  },
  {
    vertical: "/images/Chat/ChatV2.png",
    horizontal: "images/Chat/Chat2.png",
  },
  {
    vertical: "/images/Chat/ChatV3.png",
    horizontal: "images/Chat/Chat3.png",
  },
];

export default function ExpandingCard({ index, onExpand }) {
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
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const baseWidth = 350;
  const expandedWidth = 950;

  return (
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

        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 w-full h-full bg-cover bg-center sm:bg-center md:bg-right
            transition-opacity duration-1000 bg-[url(${src})] ${
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
          <p className="text-sm">
            {/* Texto siempre visible */}
            Chat en vivo
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
                Aplicación de mensajería instantánea con comunicación en tiempo
                real,notificaciones push y seguridad avanzada para
                conversaciones rápidas y organizadas.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
