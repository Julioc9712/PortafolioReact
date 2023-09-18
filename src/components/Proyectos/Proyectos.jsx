import React from 'react'
import './Proyectos.css'

function Proyectos() {
    return (
        <div id='Proyecto'>
            <h1 className='titulo'>Proyectos</h1>
            <div className='contenedor-proyectos'data-aos="zoom-in">
                <div className="card" >
                    <img src="/images/portafolio.jpg" className="card-img-top" alt="portafolio" />
                    <div className="card-body">
                        <h5 className="card-title">Portafolio web</h5>
                        <p className="card-text">"Portafolio web creativo y personalizado construido con HTML, CSS y JavaScript, exhibiendo proyectos y habilidades de manera profesional."</p><br />
                        <a href="https://julioc9712.github.io/Portafolio/" target='_blanck' className="btn btn-primary"><i class="bi bi-send"></i>Ver proyecto</a>
                    </div>
                </div>
                <div className="card" >
                    <img src="/images/appReact.png" className="card-img-top" alt="appReact" />
                    <div className="card-body">
                        <h5 className="card-title">Tienda web</h5>
                        <p className="card-text">"Tienda web atractiva y dinámica construida con React, promocionando productos y servicios, con opción de contacto fácil a través de WhatsApp."</p><br />
                        <a href="https://cubanoshop.netlify.app"  target='_blanck' className="btn btn-primary"><i class="bi bi-send"></i>Ver proyecto</a>
                    </div>
                </div>
                <div className="card" >
                    <img src="/images/miniproyectos.avif" className="card-img-top" alt="miniproyectos" />
                    <div className="card-body">
                        <h5 className="card-title">Miniproyectos</h5>
                        <p className="card-text">"Miniproyecto: Clima y Roadmap. Utiliza llamadas a APIs con fetch, hook (useState, useEffect) para mostrar datos climáticos y organizar metas frontend ."</p><br />
                        <a href="https://miniproyectosjulioc97.netlify.app/" className="btn btn-primary" target='_blanck'><i class="bi bi-send"></i>Ver proyecto</a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Proyectos