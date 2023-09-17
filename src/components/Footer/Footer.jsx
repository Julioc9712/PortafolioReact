import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className="contenedor-icon-footer">
          <a href=""><i className="bi bi-linkedin"></i></a>
          <a href=""><i className="bi bi-github"></i></a>
          <a href=""><i className="bi bi-whatsapp"></i></a>
          <a href=""><i className="bi bi-twitter"></i></a>
        </div>
        <div className='gmail-footer'>
            <a href="" className='gmail'>juliocmr97@gmail.com</a>
        </div>
        <div className='logo-whatapp'><a href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20del%20PortafolioReact" target='__blanck'><img src='images/img-svg/whatsapp.svg' alt="" /></a>
    </div>
    </div>
  )
}

export default Footer