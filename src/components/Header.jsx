const Header = () => {
  return (
    <header className="header fixed-top">
      <h1 className="header__logo">Pp</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:text-blue-400">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
