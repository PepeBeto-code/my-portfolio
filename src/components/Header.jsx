import Image from "next/image";

const Header = () => {
  return (
    <header className="header fixed-top">
      <Image
        src="/android-chrome-512x512.png" // Ruta relativa en tu carpeta pública o una URL externa
        alt="Logo "
        width={40} // Ancho en píxeles
        height={40} // Altura en píxeles
        class="header__logo"
        priority // Opción para cargar inmediatamente
      />
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:text-gray-400 text-white">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400 text-white">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 text-white">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
