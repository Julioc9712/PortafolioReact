import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav2() {
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
            <a href="#Proyecto" onClick={handleSubmit}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#Objetivos" onClick={handleSubmit}>
              Objetivo
            </a>
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

export default Nav2;
