import React from "react";
import "./styles.css";

function Navbar() {
  return (
    <body>
      <header>
        <nav className="nav-navbar">
          <a className="hvr-grow" id="logo-navbar" href="/">
            Salve Pets
          </a>
          <ul className="navbar-list">
            <li>
              <a href="/" className="hvr-grow">
                Inicio
              </a>
            </li>
            <li>
              <a href="/" className="hvr-grow">
                Cachorro
              </a>
            </li>
            <li>
              <a href="/" className="hvr-grow">
                Gato
              </a>
            </li>
            <li>
              <a href="/" className="hvr-grow">
                Serviços
              </a>
            </li>
            <li>
              <a href="/" className="hvr-grow">
                Contatos
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </body>
  );
}

export default Navbar;
