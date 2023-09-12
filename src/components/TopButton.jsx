import React from 'react'
import './styles/TopButton.css'

const TopButton = ({ scrollToTop }) => {


    return (
        <div className='topbutton'>
            <div className='button-container' onClick={scrollToTop}>
                <i className='bx bxs-up-arrow-alt'></i>
            </div>
        </div>
    )
}

export default TopButton