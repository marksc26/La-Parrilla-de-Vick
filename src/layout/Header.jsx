import React, { useState } from 'react'
import logo from '../assets/LOGO_BN-min2.png'
import './styles/Header.css'
import { Link } from 'react-router-dom'



const Header = () => {

    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)

    }

    const handleClose = () => {
        setMenu(!menu)

    }

    const handleOption = () => {
        setMenu(false)

    }

    return (
        <header className='header'>

            <div className='logoContainer'>
                <Link to='/'><img className='logo' src={logo} alt="" /></Link>
            </div>

            <div className={!menu ? "navbar" : "show-menu"}>
                <div className='close-container'>
                    <i className='bx bx-x' onClick={handleClose}></i>
                </div>
                <ul className='list-navbar'>
                    <li onClick={handleOption}><Link className='link' to={{ pathname: "/", hash: "about" }}>Quienes Somos</Link></li>
                    <li onClick={handleOption}><Link className='link' to={{ pathname: "/", hash: "packs" }}>Paquetes</Link></li>
                    <li onClick={handleOption}><Link className='link' to={{ pathname: "/", hash: "contact" }}>Contacto</Link></li>
                    <li onClick={handleOption}><Link className='link' to='/galeria'>Galeria</Link></li>

                    <div className='navbar-icons'>
                        <a target='_blank' href="https://www.facebook.com/LaparrilladeVick?mibextid=ZbWKwL"><i className='bx bxl-facebook-circle'></i></a>
                        <a target='_blank' href="https://www.instagram.com/laparrilladevick/?igshid=MzRlODBiNWFlZA%3D%3D"><i className='bx bxl-instagram'></i></a>
                    </div>
                </ul>

            </div>

            <div className='menuContainer'>
                <i className='bx bx-menu' onClick={handleMenu}></i>
            </div>

        </header>
    )
}

export default Header