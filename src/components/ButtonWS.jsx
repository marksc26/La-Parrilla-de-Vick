import React from 'react'
import logows from '../assets/whatsapp2.png'
import './styles/ButtonWS.css'

const ButtonWS = () => {
    return (
        <div className='buttonws-container'>
            <div>
                <img className='whatsapp-logo' src={logows} alt="" />
            </div>
        </div>
    )
}

export default ButtonWS