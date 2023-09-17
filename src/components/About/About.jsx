import React from 'react'
import "./About.css"

function About() {
    return (
        <><div id='About'>
            <h1 className='titulo' >Sobre Mi</h1>
            <div className='contenedor-about' >
                <div className='contenedor-perfil'data-aos="zoom-in">
                    <img src="/images/perfil.png" alt="" className="portadaPerfil" />
                </div>
                <div className='contenedor-info'data-aos="fade-down">
                    <h1><i className="bi bi-person-vcard"></i>Perfil</h1>
                    <p>Programador en busca de empleo.Listo para utilizar habilidades y recursos
                        para impulsar el desarrollo empresarial. </p>
                    <h1><i className="bi bi-mortarboard"></i>Educacion</h1>
                    <p>Feb 2023 – Dec 2025
                        La Habana, Cuba
                        Universidad de Ciencias Informáticas
                        Estudiante de la carrera de Administración de Redes y Seguridad
                        Informática</p>
                    <h1><i className="bi bi-bar-chart-line"></i>Experiencia</h1>
                    <p>Experiencia más de 1 año con medios
                        sociales, programas tecnologico y habilidades informáticas.Actitud
                        positiva y la voluntad de mejorar constantemente
                    </p>
                    <p>Desarrollador Front-end</p>

                </div>


            </div>
        </div>
        </>
    )
}

export default About