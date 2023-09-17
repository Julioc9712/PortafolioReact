import React from 'react'
import './Objetivos.css'

function Objetivos() {
    return (
        <div id='Objetivos'>
            <h1 className='titulo'>Mis Objetivos</h1>
            <div >
                <div className='contenedor-objetivos'  data-aos="fade-up" >
                    <div className="card-objetivos" >
                        <img src="/images/frontend.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> Desarrollador Frontend Senior</h5>
                        </div>
                    </div>
                    <div className="card-objetivos" >
                        <img src="/images/empresa.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Trabajar para grandes empresas</h5>
                        </div>
                    </div>
                    <div className="card-objetivos" >
                        <img src="/images/eventos.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Viajar a  eventos Teconológicos</h5>
                        </div>
                    </div>
                    <div className="card-objetivos" >
                        <img src="/images/appWeb.webp" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Crear grandes aplicaciones Web</h5>
                        </div>
                    </div>
                    <div className="card-objetivos" >
                        <img src="/images/fullStack.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Ser Programador Full Stack</h5>
                        </div>
                    </div>
                    
                </div>
                <div className='boton-objetivo' data-aos="zoom-in">
                    <p>Hola 😁 si te gustó mis <strong>Proyectos</strong> no dudes en <strong>Contactarme 📲</strong> </p>
                    <a href="/Contacto"><button type="button" className=" bton ">CONTÁCTAME!</button></a>
                    </div>
                

            </div>
        </div>
    )
}

export default Objetivos