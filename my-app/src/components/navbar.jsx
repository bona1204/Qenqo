import React from "react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div class="navbar">
      <div class="navbar-links">
        <ul>
          <li>
            <a href="#home">INICIO</a>
          </li>
          <li>
            <a href="#quienes-somos">QUIENES SOMOS</a>
          </li>
          <li>
            <a href="#servicios">SERVICIO</a>
          </li>
          <li>
            <a href="#testimonios">TESTIMONIOS</a>
          </li>
          <li>
            <a href="#contacto">CONTACTO</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
