import React, { useState } from 'react'
import logo from '../assets/LOGO_BN.png'
import './styles/Header.css'



const Header = ({ scrollToAbout, scrollToPacks, scrollToForm, }) => {

    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }

    const handleClose = () => {
        setMenu(!menu)
    }

    const handleOption = () => {
        setMenu(!menu)
    }

    return (
        <header className='header'>

            <div className='logoContainer'>
                <img className='logo' src={logo} alt="" />
            </div>

            <div className={!menu ? "navbar" : "show-menu"}>
                <div className='close-container'>
                    <i className='bx bx-x' onClick={handleClose}></i>
                </div>
                <ul className='list-navbar'>
                    <li onClick={scrollToAbout}><span onClick={handleOption}>Quienes Somos</span></li>
                    <li onClick={scrollToPacks}><span onClick={handleOption}>Paquetes</span></li>
                    <li onClick={scrollToForm}><span onClick={handleOption}>Contacto</span></li>
                </ul>

            </div>

            <div className='menuContainer'>
                <i className='bx bx-menu' onClick={handleMenu}></i>
            </div>

        </header>
    )
}

export default Header