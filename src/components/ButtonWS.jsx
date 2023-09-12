import React from 'react'
import logows from '../assets/whatsapp2.png'
import './styles/ButtonWS.css'
import TopButton from './TopButton'

const ButtonWS = ({ scrollToTop }) => {

    const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER
    const defaultText = "¡Hola! Quiero solicitar una cotización por favor!"

    const encodedText = encodeURIComponent(defaultText)



    return (
        <div className='buttonws-container'>
            <div>
                <a href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodedText}`}>
                    <img className='whatsapp-logo' src={logows} alt="" />
                </a>

            </div>
            <TopButton scrollToTop={scrollToTop} />
        </div>
    )
}

export default ButtonWS