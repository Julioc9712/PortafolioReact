import React from 'react'
import './Botones.css'

function Botones() {
    return (
        <>
            <div className='contenedor-botones'>
                <div className="contacto-boton" data-aos="fade-down-right">
                    <img src="/images/contac.jpg" alt="" />
                    <div>
                        <h5>Si te ha gustado <strong>Contáctame</strong> o mira mis proyectos y evalua mi trabajo </h5>
                        <div className='contenedor-bton'>
                            <a href="/Proyecto"><button type="button" className="bton">VER PROYECTOS</button></a>
                            <a href="/Contacto"><button type="button" className="bton ">CONTÁCTAME!</button></a>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Botones