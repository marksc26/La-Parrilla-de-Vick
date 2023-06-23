import React from 'react'
import './styles/About.css'
import img1 from '../assets/Images/img1.jpg'
import img2 from '../assets/Images/img2.jpg'
import img3 from '../assets/Images/img3.jpg'
import img4 from '../assets/Images/img4.jpg'
import img5 from '../assets/Images/img5.jpg'
import img6 from '../assets/Images/img6.jpg'




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
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus voluptate hic, nesciunt sed sit animi sunt, doloremque ratione alias, facere assumenda quaerat. Harum, dolores atque earum similique est omnis sit</p>
                    </div>


                    <div className='item1'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='item2'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='item3'>
                        <img src={img3} alt="" />
                    </div>
                    <div className='item4'>
                        <img src={img4} alt="" />
                    </div>
                    <div className='item5'>
                        <img src={img5} alt="" />
                    </div>
                    <div className='item6'>
                        <img src={img6} alt="" />
                    </div>


                </div>

                <div>

                </div>

            </div>


        </section>
    )
}

export default About