import React, { useState } from 'react'
import './Nav.css'



function Nav() {
  const [mostrar, setMostrar] = useState(false)


  function handleSubmit() {
    setMostrar(!mostrar);
  }
  return (
    <header>
      <img  className='logo'src="images/logo.png" alt="" />
      <button className='abrirMenu' id='abrir' onClick={handleSubmit} ><i className="bi bi-list"></i></button>
      <nav className={mostrar ? "nav" : "nav-visible"} id='nav'>
        <ul className='nav-list'>
          <button className='cerrar-menu' id='abrir' onClick={handleSubmit} ><i className="bi bi-x-lg"></i></button>
          <li><a href="/#Home" onClick={handleSubmit}>Inicio</a></li>
          <li><a href="/#About" onClick={handleSubmit}>Sobre MI</a></li>
          <li><a href="/#skill" onClick={handleSubmit}>Habilidad</a></li>
          <li><a href="/Proyecto" onClick={handleSubmit}>Proyectos</a></li>
          <li><a href="/Contacto" onClick={handleSubmit}>Contacto</a></li>
          
        </ul>
      </nav>
    </header>
  )
}

export default Nav