import React from "react";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function BackLink() {
  return (
    <Link href={`/`} className="button button--back button--primary">
      <MoveLeft />
      <p className="text-base">Regresar</p>
    </Link>
  );
}
