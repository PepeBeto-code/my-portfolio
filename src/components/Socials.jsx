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
        className="!text-inherit"
      >
        {" "}
        <FaGithub className="text-3xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/josemiñon"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="!text-inherit"
      >
        {" "}
        <FaLinkedin className="text-3xl" />
      </a>
    </div>
  );
}
