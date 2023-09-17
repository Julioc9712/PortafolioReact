import React from 'react'


// Componentes
import Nav2 from '../components/Navegacion/Nav2.jsx';
import Objetivos from '../components/Objetivos/Objetivos.jsx';

import Proyectos from '../components/Proyectos/Proyectos.jsx';
import Footer from '../components/Footer/Footer.jsx'


function SkillProyecto() {
    return (
        <>
            <Nav2/>
            <Proyectos />
            <Objetivos/>
            <Footer />
        </>
    )
}

export default SkillProyecto