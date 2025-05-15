"use client";

import React, { useEffect, useState } from "react";
import OutboundLink from "./OutboundLink";
import { motion } from "framer-motion";
import Link from "next/link";

const images = [
  {
    vertical: "images/Chat/ChatV1.png",
    horizontal: "images/Chat/Chat1.png",
  },
  {
    vertical: "images/Chat/ChatV2.png",
    horizontal: "images/Chat/Chat2.png",
  },
  {
    vertical: "images/Chat/ChatV3.png",
    horizontal: "images/Chat/Chat3.png",
  },
];

export default function ProyectCard({ proyect, href }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (proyect.images.length > 1) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <Link
      href={href}
      aria-label={`Ver detalles del proyecto ${proyect.name}: ${proyect.description}`}
      className="focus:outline-none focus-visible:ring-2 ring-offset-2 ring-[var(--primary-color)] rounded-lg"
    >
      <motion.article
        className="h-full w-full card"
        whileHover={{
          scale: 1.05,
          y: -10,
          zIndex: 10,
          boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        whileTap={{ scale: 0.8 }}
        aria-labelledby={`project-title-${proyect.name}`}
        aria-describedby={`project-desc-${proyect.name}`}
        role="group"
      >
        <div
          className="relative w-full h-[200px]"
          aria-hidden="true"
          role="presentation"
        >
          {proyect.images.map((src, i) => (
            <div
              key={i}
              className={`absolute bg-no-repeat inset-0 w-full h-full bg-contain !bg-center
            transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
              style={{
                backgroundImage: `url(${src})`,
              }}
            />
          ))}
        </div>
        <div className="flex flex-col items-start">
          <div
            className="flex space-x-2 space-y-2 flex-wrap"
            aria-label="Tecnologías utilizadas"
          >
            {proyect.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-[var(--primary-color)]  w-fit h-fit p-1 rounded-r-lg text-lg font-semibold !text-[var(--bg-color)]"
              >
                {skill}
              </span>
            ))}
          </div>
          <h3
            id={`project-title-${proyect.name}`}
            className="card__title text-start"
          >
            {proyect.name}
          </h3>
          <p
            id={`project-desc-${proyect.name}`}
            className="card__text text-start"
          >
            {proyect.description}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}
