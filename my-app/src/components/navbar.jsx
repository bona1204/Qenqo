import React from "react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <ul>
          <li>
            <a href="#home">INICIO</a>
          </li>
          <li>
            <a href="#quienes-somos">IDENTIDAD QENQO</a>
          </li>
          <li>
            <a href="#servicios">SERVICIOS</a>
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
