"use client";

import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import AnimatedLink from "./OutboundLink";
import BackLink from "./BackLink";

export default function LinkWithModal({ href, text, exp }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <AnimatedLink href={href} text={text} onClick={toggle} />
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={false}>
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
        <ModalBody>{exp.descripcionLarga}</ModalBody>
        <ModalFooter>
          <button
            onClick={toggle}
            className={"button button--back button--primary !static "}
          >
            Cerrar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}
