import React, { useState } from 'react'
import logo from '../assets/LOGO_BN.png'
import './styles/Header.css'


const Header = ({ scrollToAbout, scrollToPacks, scrollToForm }) => {

    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }

    const handleClose = () => {
        setMenu(!menu)
    }

    return (
        <header className='header'>

            <div className='logoContainer'>
                <img className='logo' src={logo} alt="" />
            </div>

            <div className={!menu ? "navbar" : "show-menu"}>
                <div className='close-container'>
                    <i class='bx bx-x' onClick={handleClose}></i>
                </div>
                <ul className='list-navbar'>
                    <li onClick={scrollToAbout}>Quienes Somos</li>
                    <li onClick={scrollToPacks}>Paquetes</li>
                    <li onClick={scrollToForm}>Contacto</li>
                </ul>

            </div>

            <div className='menuContainer'>
                <i className='bx bx-menu' onClick={handleMenu}></i>
            </div>

        </header>
    )
}

export default Header