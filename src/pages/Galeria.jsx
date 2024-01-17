import React, { useEffect, useState } from 'react'
import Header from '../layout/Header'
import './styles/Galeria.css'
import Footer from '../layout/Footer'
import img1 from '../assets/Images/car1.jpg'
import img2 from '../assets/Images/car2.jpg'
import img3 from '../assets/Images/car3.jpg'
import img4 from '../assets/Images/car4.jpg'
import img5 from '../assets/Images/car5.jpg'
import img6 from '../assets/Images/car6.jpg'
import img7 from '../assets/Images/car7.jpg'
import img8 from '../assets/Images/car8.jpg'
import img9 from '../assets/Images/car9.jpg'
import img10 from '../assets/Images/car10.jpg'
import img11 from '../assets/Images/car11.jpg'
import img12 from '../assets/Images/car12.jpg'
import img13 from '../assets/Images/car13.jpg'
import img14 from '../assets/Images/car14.jpg'
import video from '../assets/videos/video-gallery.mp4'
import video2 from '../assets/videos/video-gallery2.mp4'


const Galeria = () => {



    const images = [
        {
            id: 1,
            image: img1
        },
        {
            id: 2,
            image: img2
        },
        {
            id: 3,
            image: img3
        },
        {
            id: 4,
            image: img4
        },
        {
            id: 5,
            image: img5
        },
        {
            id: 6,
            image: img6
        },
        {
            id: 7,
            image: img7
        },
        {
            id: 8,
            image: img8
        },
        {
            id: 9,
            image: img9
        },
        {
            id: 10,
            image: img10
        },
        {
            id: 11,
            image: img11
        },
        {
            id: 12,
            image: img12
        },
        {
            id: 13,
            image: img13
        },
        {
            id: 14,
            image: img14
        }
    ]

    const videos = [
        {
            id: 1,
            video: video
        },
        {
            id: 2,
            video: video2
        }
    ]

    const [value, setValue] = useState(0)
    const [valueOne, setValueOne] = useState(0)

    const prevImage = () => {
        setValue((value - 1 + images.length) % images.length)
    }

    const nextImage = () => {
        setValue((value + 1) % images.length)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue((value + 1) % images.length)
        }, 5000)
        return () => {
            clearTimeout(timer)
        }
    }, [value, images.length])



    const prevVideo = () => {
        setValueOne((valueOne - 1 + videos.length) % videos.length)
    }

    const nextVideo = () => {
        setValueOne((valueOne + 1) % videos.length)

    }



    return (
        <section className='galeria-section'>

            <div>
                <Header />
            </div>


            <div className='carousel'>
                <div className='title-galeria'>
                    <h3>Galeria</h3>
                </div>
                <div className="carousel-container">

                    <div>
                        <button className='left' onClick={prevImage}><i className='bx bx-left-arrow'></i></button>
                    </div>

                    <img src={images[value].image} alt="" />

                    <div>
                        <button className='rigth' onClick={nextImage}><i className='bx bx-right-arrow'></i></button>
                    </div>
                </div>
                <div className='circles'>
                    {
                        images.map((image, index) => (
                            <div onClick={() => setValue(index)} className={index === value ? "active" : "point"} key={image.id}>
                            </div>
                        ))
                    }
                </div>

                <div className='videos-container'>

                    {
                        videos.map((videos, index) => (
                            <video key={index} className='video-galeria' controls width="500" height="290" controlsList="nodownload">
                                <source src={videos.video} type="video/mp4" />
                            </video>
                        ))
                    }



                </div>



                {/*<div className='youtube-contenido'>
                    <i className='bx bxl-youtube'></i>
                </div>*/}

            </div>



            <div className='footer-galeria'>
                <Footer />
            </div>


        </section>
    )
}

export default Galeria