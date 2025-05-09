"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function OutboundLink({ href, text, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className="button m-auto button--outbound button--primary"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Texto */}
      <motion.p
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: hovered ? -20 : 0, opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="button--primary"
      >
        {text}
      </motion.p>

      {/* Flecha */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="button__arrow"
      >
        <MoveRight />
      </motion.div>
    </Link>
  );
}
