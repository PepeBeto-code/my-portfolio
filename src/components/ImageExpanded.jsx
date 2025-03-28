"use client";

import Image from "next/image";
import React, { useState } from "react";
import { X } from "lucide-react";
import "./ImagesCarousel/embla.scss";
import { Tooltip } from "reactstrap";

export default function ImageExpanded({ image }) {
  const [expandedImage, setExpandedImage] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <>
      <div id="Tooltip">
        <Image
          src={image.src}
          width={250}
          height={200}
          alt={image.alt}
          className="card__img cursor-pointer"
          onClick={() => setExpandedImage(true)}
        />
        <Tooltip
          isOpen={tooltipOpen}
          target={"Tooltip"}
          toggle={() => setTooltipOpen(!tooltipOpen)}
        >
          Expandir Imagen
        </Tooltip>
      </div>

      {/* Imagen expandida */}
      {expandedImage && (
        <div className="expanded-image-overlay">
          <div className="expanded-image-container">
            <button
              className="close-button"
              onClick={() => setExpandedImage(false)}
            >
              <X />
            </button>
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="expanded-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
