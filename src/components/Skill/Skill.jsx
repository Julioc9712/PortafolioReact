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
                            <img src="/images/img-svg/html.svg" className="img-fluid" alt="..." />
                            <img src="/images/img-svg/css.svg" className="img-fluid" alt="..." />
                            <img src="/images/img-svg/js.svg" className="img-fluid" alt="..." />
                            <img src="/images/img-svg/python.svg" className="img-fluid" alt="..." />
                            <img src="/images/img-svg/react.svg" className="img-fluid" alt="..." />
                            <img src="/images/img-svg/django.svg" className="img-fluid" alt="..." />
                            <img src="/images/img-svg/bootstrap.svg" className="img-fluid" alt="..." />
                            <img src="/images/img-svg/sql.svg" className="img-fluid" alt="..." />
                            <img src="/images/img-svg/postgresql.svg" className="img-fluid" alt="..." />
                            <img src="/images/img-svg/mysql.svg" className="img-fluid" alt="..." />
                            <img src="/images/img-svg/github.svg" className="img-fluid" alt="..." />
                            <img src="/images/img-svg/vsc.svg" className="img-fluid" alt="..." />
                            <img src="/images/img-svg/justinmind.svg" className="img-fluid" alt="..." />
                        </div>

                    </div>
                    <div className='contenedorImgSkill' data-aos="flip-right" >
                        <img src="/images/skill.png" className="img-skills " alt="..." />
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Skill