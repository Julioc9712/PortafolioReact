import React, { useEffect } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Aos from 'aos';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'

//Pages of Components

import PortafolioHome from './pages/PortafolioHome';
import SkillProyecto from './pages/SkillProyecto';
import ContactoHome from './pages/ContactoHome';


function App() {
  useEffect(()=>{
    Aos.init({
      duration: 1500,
      once:true
      
  });
  },[])
  const router = createBrowserRouter([
    {
      path:"/",
      element: <PortafolioHome/>
    },
    
    {
      path:"/Proyecto",
      element: <SkillProyecto/>
    },
    {
      path:"/Contacto",
      element: <ContactoHome/>
    },
    
  ]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
