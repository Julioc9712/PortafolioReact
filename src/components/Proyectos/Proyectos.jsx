import React from "react";
import "./Proyectos.css";

function Proyectos() {
  return (
    <div id="Proyecto">
      <h1 className="titulo">Proyectos</h1>
      <div className="contenedor-proyectos" data-aos="zoom-in">
        <div className="card">
          <img
            src="/images/portafolio.jpg"
            className="card-img-top"
            alt="portafolio"
          />
          <div className="card-body">
            <h5 className="card-title">Portafolio Web-Vanilla</h5>
            <p className="card-text">
              "Portafolio web creativo y personalizado construido con HTML, CSS
              y JavaScript, exhibiendo proyectos y habilidades de manera
              profesional."
            </p>
            <br />
            <br />
            <a
              href="https://julioc9712.github.io/Portafolio/"
              target="_blanck"
              className="btn btn-primary"
            >
              <i class="bi bi-send"></i>Ver proyecto
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="/images/appReact.png"
            className="card-img-top"
            alt="appReact"
          />
          <div className="card-body">
            <h5 className="card-title">CubanoShop-Marketing</h5>
            <p className="card-text">
              "Sitio web de marketing empresarial con catálogo de
              productos/servicios. Incluye botones de contacto directo a
              WhatsApp para facilitar interacciones y establecer conversaciones
              rápidas con clientes "
            </p>
            <br />
            <a
              href="https://cubanoshop.netlify.app"
              target="_blanck"
              className="btn btn-primary"
            >
              <i class="bi bi-send"></i>Ver proyecto
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="/images/CasinoShop.jpg"
            className="card-img-top"
            alt="CasinoShop"
          />
          <div className="card-body">
            <h5 className="card-title">CasinoShop-Ecommerce</h5>
            <p className="card-text">
              Tienda online desde cero, utilizando habilidades de frontend para
              React y el backend de Firebase .Demostré mi experiencia en
              proyectos innovadores creando diseño atractivo y funcional
            </p>
            <br />
            <a
              href="https://casinoshop.netlify.app"
              className="btn btn-primary"
              target="_blanck"
            >
              <i class="bi bi-send"></i>Ver proyecto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
