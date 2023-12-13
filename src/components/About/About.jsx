import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div id="About">
        <h1 className="titulo">Sobre Mi</h1>
        <div className="contenedor-about">
          <div className="contenedor-perfil" data-aos="zoom-in">
            <img src="/images/julio.png" alt="" className="portadaPerfil" />
          </div>
          <div className="contenedor-info" data-aos="fade-down">
            <h1>
              <i className="bi bi-person-vcard"></i>Perfil
            </h1>
            <p>
              Desarrollador web Frontend en busca de empleo.Listo para utilizar
              habilidades y recursos para impulsar el desarrollo empresarial.
            </p>
            <h1>
              <i className="bi bi-mortarboard"></i>Educacion
            </h1>
            <p>
              Feb 2023 – Dec 2025 La Habana-Cuba <br />
              Universidad de Ciencias Informáticas <br />
              Estudiante de la carrera de Administración de Redes y Seguridad
              Informática
            </p>
            <h1>
              <i className="bi bi-bar-chart-line"></i>Experiencia
            </h1>
            <p>
              Tengo más de un año de experiencia en el desarrollo de proyectos
              innovadores, incluyendo la creación de portafolios web, e-commerce
              y aplicaciones del tiempo.Mi objetivo es ser full-stack por lo que
              siempre estoy aprendiendo nuevas tecnologías y elevando mis
              conocimientos
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
