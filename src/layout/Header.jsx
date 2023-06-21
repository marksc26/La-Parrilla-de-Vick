import React from 'react'
import logo from '../assets/LOGO_BN.png'
import './styles/Header.css'


const Header = () => {
    return (
        <header className='header'>

            <div className='logoContainer'>
                <img className='logo' src={logo} alt="" />
            </div>

            <div className='navbar'>
                <ul className='list-navbar'>
                    <li>Quienes Somos</li>
                    <li>Paquetes</li>
                    <li>Contacto</li>
                </ul>
            </div>

            <div className='menuContainer'>
                <i className='bx bx-menu'></i>
            </div>

        </header>
    )
}

export default Header