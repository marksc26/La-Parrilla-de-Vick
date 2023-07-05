import React from 'react'
import logo2 from '../assets/LOGO_BN-min2.png'
import './styles/Loader.css'
import video from '../assets/videos/fire.mp4'


const Loader = () => {
    return (
        <section className='sectionLoader'>

            <video autoPlay loop muted>
                <source src={video} type="video/mp4"></source>
            </video>


            <div className='logocontainer-intro'>
                <img src={logo2} alt="" />
            </div>



        </section>
    )
}

export default Loader