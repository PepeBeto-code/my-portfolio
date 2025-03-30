"use client";
import * as motion from "motion/react-client";
import { useRef, useState } from "react";
import { Spinner } from "reactstrap";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoadig] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoadig(true);
    const form = event.currentTarget;

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      Swal.fire({
        title: "Mensaje enviado con éxito!",
        icon: "success",
        draggable: true,
      });
      form.reset(); // Limpia el formulario
    } else {
      Swal.fire({
        title: "Hubo un error al enviar el mensaje.",
        icon: "error",
        draggable: true,
      });
    }

    setIsLoadig(false);
  };

  return (
    <section
      id="contact"
      className="section  section__container--full section--secondary"
    >
      <div className="section__container section__container--spaced w-full">
        <div className="section__content">
          <motion.h2
            className="section__title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Contacto
          </motion.h2>
          <p className="">
            Puedes contactarme en{" "}
            <a
              href="mailto:jose-alberto@ciencias.unam.mx"
              rel="noopener noreferrer nofollow"
              className="!text-blue-400"
            >
              jose-alberto@ciencias.unam.mx
            </a>
            , enviarme un mensaje directo vía{" "}
            <a
              href="https://wa.me/5631303570"
              rel="noopener noreferrer nofollow"
              className="!text-green-400"
            >
              WhatsApp
            </a>
            , o llenar el formulario.
          </p>
        </div>
        <div className="w-[30rem] flex items-center section--tertiary justify-center rounded-lg p-6">
          <form
            ref={formRef}
            action="https://formspree.io/f/mwplnwwq"
            method="POST"
            onSubmit={handleSubmit}
            className="form w-full"
          >
            <div className="flex flex-col mb-2">
              <label className="section__content mb-0" htmlFor="name">
                Nombre
              </label>
              <input
                className=" rounded-sm p-1"
                type="text"
                id="name"
                name="name"
                style={{
                  backgroundColor: "oklch(.967 .003 264.542)",
                }}
                required
              />
            </div>

            <div className="flex flex-col mb-2">
              <label className="section__content mb-0" htmlFor="email">
                Correo electrónico
              </label>
              <input
                className="rounded-sm p-1"
                type="email"
                id="email"
                name="email"
                style={{
                  backgroundColor: "oklch(.967 .003 264.542)",
                }}
                required
              />
            </div>

            <div className="flex flex-col mb-2">
              <label className="section__content mb-0" htmlFor="message">
                Mensaje:
              </label>
              <textarea
                className=" rounded-sm p-1"
                id="message"
                name="message"
                rows={4}
                style={{
                  backgroundColor: "oklch(.967 .003 264.542)",
                }}
                required
              ></textarea>
            </div>

            <div className="flex flex items-center justify-center">
              <button
                disabled={isLoading}
                className="button button--principal button--primary"
                type="submit"
              >
                {isLoading ? <Spinner size="sm" color="black" /> : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
