import React from 'react'
import './styles/Footer.css'
import logo from '../assets/LOGO_NG.png'

const Footer = () => {
    return (
        <footer className='footerContainer'>

            <div className='footer-info'>
                <div className='logo-container'>
                    <img className='logoFooter' src={logo} alt="" />
                    <p><i className='bx bx-copyright'></i>2023 La Parrilla de Vick</p>
                </div>

                <div className='social-media'>
                    <h3>Síguenos en</h3>
                    <div className='icons'>
                        <a target='_blank' href="https://www.facebook.com/LaparrilladeVick?mibextid=ZbWKwL"><i className='bx bxl-facebook-circle'></i></a>
                        <a target='_blank' href="https://www.instagram.com/laparrilladevick/?igshid=MzRlODBiNWFlZA%3D%3D"><i className='bx bxl-instagram'></i></a>

                    </div>
                    <div className='telefono'>
                        <p>Teléfono: 33 1462 3603</p>
                        <p>Solo Eventos en Guadalajara, Zona Metropolitana</p>
                    </div>
                </div>
            </div>





        </footer>
    )
}

export default Footer