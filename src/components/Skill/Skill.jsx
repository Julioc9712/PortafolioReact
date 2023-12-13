import React from "react";
import "./Skill.css";

function Skill() {
  return (
    <>
      <div id="skill">
        <h1 className="titulo">Habilidades</h1>
        <div className="skillGeneral">
          <div className="contenedor-skill">
            <div className="contenedor-flex" data-aos="zoom-out-right">
              <h2 className="tituloH2">Lenguajes-Framework</h2>
              <div className="contenedorImagenes">
                <img
                  src="/images/img-svg/html.svg"
                  className="img-fluid"
                  alt="html.svg"
                />
                <img
                  src="/images/img-svg/css.svg"
                  className="img-fluid"
                  alt="css.svg"
                />
                <img
                  src="/images/img-svg/sass.svg"
                  className="img-fluid"
                  alt="sass.svg"
                />

                <img
                  src="/images/img-svg/bootstrap.svg"
                  className="img-fluid"
                  alt="bootstrap.svg"
                />
                <img
                  src="/images/img-svg/material-ui.svg"
                  className="img-fluid"
                  alt="material-ui.svg"
                />
                <img
                  src="/images/img-svg/tailwind.svg"
                  className="img-fluid"
                  alt="tailwind.svg"
                />
                <img
                  src="/images/img-svg/javascript.svg"
                  className="img-fluid"
                  alt="js.svg"
                />
                <img
                  src="/images/img-svg/typescript.svg"
                  className="img-fluid"
                  alt="typescript.svg"
                />
                <img
                  src="/images/img-svg/python.svg"
                  className="img-fluid"
                  alt="python.svg"
                />
                <img
                  src="/images/img-svg/jquery.svg"
                  className="img-fluid"
                  alt="jquery.svg"
                />
                <img
                  src="/images/img-svg/react.svg"
                  className="img-fluid"
                  alt="react.svg"
                />
                <img
                  src="/images/img-svg/redux.svg"
                  className="img-fluid"
                  alt="redux.svg"
                />
                <img
                  src="/images/img-svg/graphql.svg"
                  className="img-fluid"
                  alt="graphql.svg"
                />

                <img
                  src="/images/img-svg/jest.png"
                  className="img-fluid"
                  alt="jest.png"
                />
                <img
                  src="/images/img-svg/nextjs.svg"
                  className="img-fluid"
                  alt="nextjs.svg"
                />

                <img
                  src="/images/img-svg/git.svg"
                  className="img-fluid"
                  alt="git.svg"
                />
                <img
                  src="/images/img-svg/github.svg"
                  className="img-fluid"
                  alt="github.svg"
                />
                <img
                  src="/images/img-svg/vsc.svg"
                  className="img-fluid"
                  alt="vsc.svg"
                />
              </div>
            </div>
            <div className="contenedorImgSkill" data-aos="flip-right">
              <img src="/images/skill.png" className="img-skills " alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
