"use client";

import React from "react";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackLink({ text = "Regresar", className }) {
  const router = useRouter();

  function handleClick() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      // Si hay historial, regresar
      router.back();
    } else {
      // Si no hay historial (ej. acceso directo), ir al home
      router.push("/");
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`button button--back button--primary ${className}`}
      aria-label={`Volver atrás${text ? `: ${text}` : ""}`}
      type="button"
    >
      <MoveLeft aria-hidden="true" focusable="false" />
      <p className="text-base">{text}</p>
    </button>
  );
}
