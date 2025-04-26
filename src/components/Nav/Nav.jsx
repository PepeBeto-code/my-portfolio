"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { routes } from "../../variables/MenuVariables";
import MenuButton from "./MenuButton";
import Toggle from "@/components/Toggle";
import { usePathname } from "next/navigation";
import Socials from "../Socials";

function MenuMovil() {
  const [active, setActive] = useState(false);
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);

  console.log(pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className={`fixed-top `}>
      <div
        className={`max-w-6xl mx-auto flex justify-between items-center p-4 rounded-br-[33px] rounded-bl-[33px] bg-transparent ${
          scrolling
            ? "bg-[var(--primary-color)] text-[var(--text-primary)]"
            : " text-white"
        }`}
      >
        {/* <Image
          src="/android-chrome-512x512.png" // Ruta relativa en tu carpeta pública o una URL externa
          alt="Logo "
          width={40} // Ancho en píxeles
          height={40} // Altura en píxeles
          className={`w-[4rem] ${scrolling ? "invisible" : "visible"}`}
          priority // Opción para cargar inmediatamente
        /> */}
        <div
          className={`${
            pathname != "/" ? "absolute end-0 md:mr-20 mr-4 md:mt-20 mt-10" : ""
          }`}
        >
          <Toggle></Toggle>
        </div>
        <div
          className={`${
            pathname != "/"
              ? "position-fixed bottom-0 end-0 md:mr-20 mr-10 mb-8"
              : ""
          }`}
        >
          <MenuButton active={active} onClick={handleClick} />
        </div>
      </div>

      <nav
        className={`${
          active ? "menu-visible" : "menu-hidden"
        } absolute top-0 right-0 flex flex-col items-center bg-[var(--secondary-color)] p-3  nav-burguer`}
      >
        <Link className="navbar-brand p-[1rem]" href="/">
          {" "}
          <Image
            id="logo"
            className=""
            width={150}
            height={100}
            src="/android-chrome-512x512.png"
            alt="Imagen Plan Funerario"
            priority
          />
        </Link>
        <div className="flex flex-col items-start w-full h-auto">
          {routes.map((e, i) => {
            return (
              <Link
                className="w-full text-center text-[1.5rem] no-underline px-3 py-2 rounded !text-inherit font-bold items-center justify-start hover:bg-[var(--primary-color)] hover:!text-[var(--secondary-color)] "
                href={e.path}
                key={i}
              >
                {e.title}
              </Link>
            );
          })}
        </div>
        <Socials></Socials>
      </nav>
    </header>
  );
}

export default MenuMovil;
