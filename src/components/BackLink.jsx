import React from "react";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function BackLink({
  href = "/",
  text = "Regresar",
  onClick,
  className,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`button button--back button--primary ${className}`}
    >
      <MoveLeft />
      <p className="text-base">{text}</p>
    </Link>
  );
}
