import React from "react";
import styles from "./MenuButton.css";

function MenuBoton({ active, onClick }) {
  return (
    <div
      className={`icon_burguer inline-flex p-[0.5rem] rounded-full  bg-[var(--primary-color)] ${
        active ? `ekeZOi` : `menuMovil`
      }`}
    >
      <button
        onClick={onClick}
        type="button"
        aria-expanded={active}
        aria-controls="menu-principal"
        aria-label={
          active ? "Cerrar menú de navegación" : "Abrir menú de navegación"
        }
        className={`menuToggle focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary-color)] rounded ${
          active ? `x` : ""
        }`}
      ></button>
    </div>
  );
}

export default MenuBoton;
