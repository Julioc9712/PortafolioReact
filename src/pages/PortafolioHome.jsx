import React from 'react'

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'


// Componentes
import Nav from '../components/Navegacion/Nav.jsx'
import Header from '../components/Header/Header.jsx'
import About from '../components/About/About.jsx'
import Skill from '../components/Skill/Skill.jsx';
import Footer from '../components/Footer/Footer.jsx'
import Botones from '../components/Botones/Botones.jsx';




function PortafolioHome() {
 
  return (
    <>
    
      <Nav/>
      <Header/>
      <About/>
      <Botones/>
      <Skill />
      <Footer />

    </>
  )
}

export default PortafolioHome