import React from 'react'
import './styles/Footer.css'
import logo from '../assets/LOGO_NG.png'

const Footer = () => {
    return (
        <footer className='footerContainer'>

            <div className='footer-info'>
                <div className='logo-container'>
                    <img className='logoFooter' src={logo} alt="" />
                    <p>2023 La Parrilla de Vick</p>
                </div>

                <div className='social-media'>
                    <h3>Síguenos</h3>
                    <div className='icons'>
                        <i className='bx bxl-facebook-circle'></i>
                        <i className='bx bxl-instagram'></i>
                        <i className='bx bxl-tiktok'></i>
                    </div>
                    <div>
                        <p>Aviso de Privacidad</p>
                    </div>
                </div>
            </div>





        </footer>
    )
}

export default Footer