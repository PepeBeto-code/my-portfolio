"use client";

import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import AnimatedLink from "./OutboundLink";

export default function LinkWithModal({ href, text, exp }) {
  const [modal, setModal] = useState(false);
  const closeButtonRef = useRef(null); // Para devolver el foco
  const openButtonRef = useRef(null);

  const toggle = () => setModal(!modal);

  // Devuelve el foco al botón de apertura al cerrar el modal
  useEffect(() => {
    if (!modal && openButtonRef.current) {
      openButtonRef.current.focus();
    }
  }, [modal]);

  return (
    <>
      <AnimatedLink
        href={href}
        text={text}
        onClick={toggle}
        ref={openButtonRef} // Guarda referencia para el foco
        aria-haspopup="dialog" // Indica que abre un modal
        aria-expanded={modal}
        aria-controls={`modal-${exp.id || exp.titulo}`}
      />
      <Modal
        id={`modal-${exp.id || exp.titulo}`}
        isOpen={modal}
        toggle={toggle}
        size="lg"
        aria-labelledby={`modal-title-${exp.id || exp.titulo}`}
        aria-describedby={`modal-desc-${exp.id || exp.titulo}`}
        role="dialog"
      >
        <ModalHeader
          toggle={false}
          id={`modal-title-${exp.id || exp.titulo}`}
          tag="h2"
        >
          <p className="section__subtitle mb-0">{exp.titulo}</p>
          <p
            className="text-xs"
            style={{
              color: "oklch(.446 .03 256.802)",
            }}
          >
            {exp.fechaCompleta}
          </p>
        </ModalHeader>
        <ModalBody id={`modal-desc-${exp.id || exp.titulo}`}>
          {exp.descripcionLarga}
        </ModalBody>
        <ModalFooter>
          <button
            onClick={() => {
              toggle();
              if (openButtonRef.current) openButtonRef.current.focus(); // Asegura el retorno del foco
            }}
            className={"button button--back button--primary !static "}
            ref={closeButtonRef}
          >
            Cerrar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}
