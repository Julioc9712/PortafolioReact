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
                  src="/images/img-svg/react-router.svg"
                  className="img-fluid"
                  alt="react-router.svg"
                />
                <div>
                  <img
                    src="/images/img-svg/context.svg"
                    className="img-fluid"
                    alt="context.svg"
                  />
                  <p className="text_context">Context-API</p>
                </div>

                <img
                  src="/images/img-svg/redux.svg"
                  className="img-fluid"
                  alt="redux.svg"
                />
                <img
                  style={{
                    marginTop: "1.6rem",
                    marginLeft: "-10px",
                    scale: "1.4",
                  }}
                  src="/images/img-svg/axios.svg"
                  className="img-fluid"
                  alt="axios.svg"
                />
                <img
                  src="/images/img-svg/apollo.svg"
                  className="img-fluid"
                  alt="apollo.svg"
                />

                <img
                  src="/images/img-svg/jest.png"
                  className="img-fluid"
                  alt="jest.png"
                />
                <img
                  style={{ width: "90px" }}
                  src="/images/img-svg/testing-librery.png"
                  className="img-fluid"
                  alt="testing-librery.png"
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
                  src="/images/img-svg/firebase.svg"
                  className="img-fluid"
                  alt="firebase.svg"
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
