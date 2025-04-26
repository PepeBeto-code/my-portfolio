"use client";

import React, { useEffect, useState } from "react";
import OutboundLink from "./OutboundLink";
import { motion } from "framer-motion";

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

export default function ProyectCard({ proyect }) {
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
    <motion.div
      className="h-full w-full card"
      whileHover={{
        scale: 1.05,
        y: -10,
        zIndex: 10,
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      whileTap={{ scale: 0.8 }}
    >
      <div className="relative w-full h-[200px]">
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
        <h3 className="card__title text-start">{proyect.name}</h3>
        <p className="card__text text-start">{proyect.description}</p>
      </div>
    </motion.div>
  );
}
