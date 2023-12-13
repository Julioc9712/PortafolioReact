import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [mostrar, setMostrar] = useState(true);

  function handleSubmit() {
    setMostrar(!mostrar);
  }
  return (
    <header>
      <img className="logo" src="images/logo.png" alt="" />
      <button className="abrirMenu" id="abrir" onClick={handleSubmit}>
        <i className="bi bi-list"></i>
      </button>
      <nav className={mostrar ? "nav" : "nav-visible"} id="nav">
        <ul className="nav-list">
          <button className="cerrar-menu" id="abrir" onClick={handleSubmit}>
            <i className="bi bi-x-lg"></i>
          </button>
          <li>
            <Link to="/" onClick={handleSubmit}>
              Inicio
            </Link>
          </li>
          <li>
            <a href="/#About" onClick={handleSubmit}>
              Sobre MI
            </a>
          </li>
          <li>
            <a href="/#skill" onClick={handleSubmit}>
              Habilidad
            </a>
          </li>
          <li>
            <Link to="/Proyecto" onClick={handleSubmit}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/Contacto" onClick={handleSubmit}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
