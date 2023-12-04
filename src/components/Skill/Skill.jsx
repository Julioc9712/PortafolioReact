import React from 'react'
import "./Skill.css"

function Skill() {
    return (
        <><div id='skill'>
            <h1 className='titulo' >Habilidades</h1>
            <div className='skillGeneral'>

                <div className='contenedor-skill'>
                    <div className='contenedor-flex' data-aos="zoom-out-right">
                        <h2 className='tituloH2'>Lenguajes-Framework</h2>
                        <div className="contenedorImagenes" >
                            <img src="/images/img-svg/html.svg" className="img-fluid" alt="html.svg" />
                            <img src="/images/img-svg/css.svg" className="img-fluid" alt="css.svg" />
                            <img src="/images/img-svg/js.svg" className="img-fluid" alt="js.svg" />
                            <img src="/images/img-svg/python.svg" className="img-fluid" alt="python.svg" />
                            <img src="/images/img-svg/typescript.svg" className="img-fluid" alt="typescript.svg" />
                            <img src="/images/img-svg/bootstrap.svg" className="img-fluid" alt="bootstrap.svg" />
                            <img src="/images/img-svg/react.svg" className="img-fluid" alt="react.svg" />
                            <img src="/images/img-svg/django.svg" className="img-fluid" alt="django.svg" />
                          
                            <img src="/images/img-svg/postgresql.svg" className="img-fluid" alt="postgresql.svg" />
                           
                            <img src="/images/img-svg/vsc.svg" className="img-fluid" alt="vsc.svg" />
                            <img src="/images/img-svg/git.svg" className="img-fluid" alt="git.svg" />
                            <img src="/images/img-svg/github.svg" className="img-fluid" alt="github.svg" />
                            
                        </div>

                    </div>
                    <div className='contenedorImgSkill' data-aos="flip-right" >
                        <img src="/images/skill.png" className="img-skills " alt="" />
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Skill