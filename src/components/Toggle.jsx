"use client"; // si estás usando Next.js 13+ con app dir

import * as Switch from "@radix-ui/react-switch";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Toggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    setIsDark((prev) => !prev);
  };

  return (
    <form>
      <div className="flex items-center space-x-2">
        <Switch.Root
          checked={isDark}
          onCheckedChange={toggleTheme}
          className="p-2 w-[100px] bg-[#0b0b0f] !rounded-full relative data-[state=checked]:!bg-[var(--primary-color)]"
          id="theme-toggle"
        >
          <Switch.Thumb className="block w-fit !bg-white rounded-full transition-transform duration-200 transform translate-x-1 data-[state=checked]:translate-x-12">
            <Image
              src="/android-chrome-512x512.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-[2rem]"
              priority
            />
          </Switch.Thumb>
        </Switch.Root>
      </div>
    </form>
  );
}
