import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex justify-center items-center space-x-4 mt-2">
      <a
        href="https://github.com/PepeBeto-code"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="!text-inherit !text-inherit focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary-color)] rounded-full p-1 transition duration-200"
      >
        <FaGithub className="text-3xl" aria-hidden="true" />
        <span className="sr-only">GitHub de José Alberto Miñón Velázquez</span>
      </a>
      <a
        href="https://www.linkedin.com/in/josemiñon"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="!text-inherit !text-inherit focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary-color)] rounded-full p-1 transition duration-200"
      >
        {" "}
        <FaLinkedin className="text-3xl" />
        <span className="sr-only">
          Perfil de LinkedIn de José Alberto Miñón Velázquez
        </span>
      </a>
    </div>
  );
}
