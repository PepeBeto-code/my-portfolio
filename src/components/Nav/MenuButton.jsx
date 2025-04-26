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
        aria-label="Open contact menu"
        aria-controls="contact-menu"
        aria-expanded="false"
        className={`menuToggle ${active ? `x` : ""}`}
      ></button>
    </div>
  );
}

export default MenuBoton;
