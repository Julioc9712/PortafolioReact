import React from 'react'
import "./Header.css"


function Header() {
  return (
    <div className='contenedor-header' id='Home'>
      <div className="contenedor-infomi">
        <div data-aos="fade-right">
          <h1 className="nombre">JULIOC MESA RUIZ</h1>
          <h2 className='title-h2'> "Soy Desarrollador Web"</h2>
          <h3><i className="bi bi-envelope-fill"></i>juliocmr97@gmail.com
          </h3>
          <h3><i className="bi bi-telephone-forward"></i>+5352990719</h3>
          <h3><i className="bi bi-geo-alt-fill"></i>CUBA</h3>
        </div>

        <div className="contenedor-icon"  data-aos="fade-down" >
          <a href=""><i className="bi bi-linkedin"></i></a>
          <a href=""><i className="bi bi-github"></i></a>
          <a href=""><i className="bi bi-whatsapp"></i></a>
          <a href=""><i className="bi bi-twitter"></i></a>
        </div>
        <div className="boton"  data-aos="fade-up"><button type="button" className="btn btn-primary">DESCARGAR CV</button><a href="/Contacto"><button type="button" className="btn btn-primary">CONTÁCTAME!</button></a></div>

      </div>

      <div>

      </div>
    </div>

  )
}

export default Header