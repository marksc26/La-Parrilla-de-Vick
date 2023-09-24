import React from 'react'
import './styles/About.css'
import img1 from '../assets/Images/img1.jpg'
import img2 from '../assets/Images/img2.jpg'
import img3 from '../assets/Images/img3.jpg'
import img4 from '../assets/Images/img4.jpg'
import img5 from '../assets/Images/img5.jpg'
import img6 from '../assets/Images/img6.jpg'
import img7 from '../assets/Images/pulpo3.jpg'
import img8 from '../assets/Images/prime5.jpg'
import img10 from '../assets/Images/ribeye.jpg'
import img11 from '../assets/Images/pulpo2.jpg'
import img12 from '../assets/Images/PORTHERHOUSE1.jpg'
import img13 from '../assets/Images/vacio4.jpg'
import img14 from '../assets/Images/cowboy2.jpg'




const About = ({ aboutSectionRef }) => {
    return (
        <section className='aboutSection' ref={aboutSectionRef}>

            <div className='aboutContainer' >

                <div className='items'>

                    <div className='item7'>

                        <div className='title1'>
                            <h3 className='part1'>Quienes</h3>
                        </div>

                        <div className='title2'>
                            <h3 className='part2'>Somos</h3>
                        </div>

                    </div>


                    <div className='item8'>
                        <p>Somos una empresa familiar con marca registrada que nos encanta el asado, ponemos en la parrilla todo nuestro conocimiento, pasión, creatividad y amor.
                            Nuestras parrilladas de cortes finos, mar y tierra, y nuestros exquisitos complementos son un éxito y satisfacción para nuestros clientes.
                            Todos nuestros productos son de alta calidad, sabor, frescura e innovación con la mejor atención personalizada.
                        </p>
                    </div>


                    <div className='item1'>
                        <img src={img12} alt="" />
                    </div>
                    <div className='item2'>
                        <img src={img7} alt="" />
                    </div>
                    <div className='item3'>
                        <img src={img13} alt="" />
                    </div>
                    <div className='item4'>
                        <img src={img11} alt="" />
                    </div>
                    <div className='item5'>
                        <img src={img8} alt="" />
                    </div>
                    <div className='item6'>
                        <img src={img14} alt="" />
                    </div>


                </div>

                <div>

                </div>

            </div>


        </section>
    )
}

export default About