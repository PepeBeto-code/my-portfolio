"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
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
  const menuRef = useRef(null);

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

  useEffect(() => {
    if (active) {
      const menuLinks = Array.from(
        menuRef.current?.querySelectorAll("a[href]") || []
      );

      // Foco inicial
      menuLinks[0]?.focus();

      const handleKeyDown = (e) => {
        const currentIndex = menuLinks.findIndex(
          (el) => el === document.activeElement
        );

        if (e.key === "ArrowDown") {
          e.preventDefault();
          const nextIndex = (currentIndex + 1) % menuLinks.length;
          menuLinks[nextIndex]?.focus();
        }

        if (e.key === "ArrowUp") {
          e.preventDefault();
          const prevIndex =
            (currentIndex - 1 + menuLinks.length) % menuLinks.length;
          menuLinks[prevIndex]?.focus();
        }

        if (e.key === "Escape") {
          setActive(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [active]);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className={`fixed-top z-50`} role="banner">
      <div
        className={`max-w-6xl mx-auto flex justify-between items-center p-4 rounded-br-[33px] rounded-bl-[33px] bg-transparent ${
          scrolling
            ? "bg-[var(--primary-color)] text-[var(--text-primary)]"
            : " text-white"
        }`}
      >
        <div
          className={`${
            pathname != "/" ? "absolute end-0 md:mr-20 mr-4 md:mt-20 mt-10" : ""
          }`}
        >
          <Toggle></Toggle>
        </div>
        <div
          className={`z-[10] ${
            pathname != "/"
              ? "position-fixed bottom-0 end-0 md:mr-20 mr-10 mb-8"
              : ""
          }`}
        >
          <MenuButton active={active} onClick={handleClick} />
        </div>
      </div>

      <nav
        id="menu-principal"
        ref={menuRef}
        role="navigation"
        aria-label="Menú de navegación principal"
        aria-hidden={!active}
        className={` ${
          active ? "menu-visible" : "menu-hidden"
        } absolute top-0 right-0 flex flex-col items-center bg-[var(--secondary-color)] p-3  nav-burguer transition-all duration-300 w-[85%] max-w-sm h-screen focus:outline-none`}
      >
        <Link
          className="navbar-brand p-[1rem]"
          href="/"
          aria-label="Ir al inicio"
        >
          {" "}
          <Image
            id="logo"
            className=""
            width={150}
            height={100}
            src="/android-chrome-512x512.png"
            alt="Logo de la página"
            priority
          />
        </Link>
        <div className="flex flex-col items-start w-full h-auto">
          {routes.map((route, i) => {
            return (
              <Link
                className="w-full text-center text-[1.5rem] no-underline px-3 py-2 rounded !text-inherit font-bold items-center justify-start hover:bg-[var(--primary-color)] hover:!text-[var(--secondary-color)] focus:outline focus:outline-2 focus:outline-offset-2 "
                href={route.path}
                aria-current={pathname === route.path ? "page" : undefined}
                key={i}
                onClick={() => setActive(false)}
              >
                {route.title}
              </Link>
            );
          })}
        </div>
        <Socials></Socials>
        <div className="absolute bottom-2 right-0 w-full text-center  text-xs text-gray-500">
          <p>Hecho con amor por Pepe Miñón</p>
        </div>
      </nav>
    </header>
  );
}

export default MenuMovil;
