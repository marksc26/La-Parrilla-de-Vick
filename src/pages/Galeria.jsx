import React, { useEffect, useRef, useState } from 'react'
import Header from '../layout/Header'
import './styles/Galeria.css'
import Slider from 'react-slick'
import Footer from '../layout/Footer'
import img1 from '../assets/Images/carousel8.jpg'
import img2 from '../assets/Images/carousel1.jpg'
import img3 from '../assets/Images/car3.jpg'
import img4 from '../assets/Images/carousel5.jpg'
import img5 from '../assets/Images/carousel4.jpg'
import img6 from '../assets/Images/car6.jpg'
import img7 from '../assets/Images/carousel2.jpg'
import img8 from '../assets/Images/carousel3.jpg'
import img9 from '../assets/Images/car9.jpg'
import img10 from '../assets/Images/car10.jpg'
import img11 from '../assets/Images/car11.jpg'
import img12 from '../assets/Images/car12.jpg'
import img13 from '../assets/Images/car13.jpg'
import img14 from '../assets/Images/car14.jpg'
import img15 from '../assets/Images/car1.jpg'
import img16 from '../assets/Images/car2.jpg'
import img17 from '../assets/Images/car4.jpg'
import img18 from '../assets/Images/carousel7.jpg'
import img19 from '../assets/Images/car7.jpg'
import img20 from '../assets/Images/car8.jpg'
import img21 from '../assets/Images/car5.jpg'
import img22 from '../assets/Images/car15.jpg'
import img23 from '../assets/Images/car16.jpg'
import img24 from '../assets/Images/car17.jpg'
import img25 from '../assets/Images/car18.jpg'
import img26 from '../assets/Images/car19.jpg'
import img27 from '../assets/Images/car20.jpg'
import img28 from '../assets/Images/car21.jpg'
import img29 from '../assets/Images/car22.jpg'
import img30 from '../assets/Images/car23.jpg'
import video2 from '../assets/videos/video-gallery2.mp4'
import video3 from '../assets/videos/video-gallery3.mp4'
import video4 from '../assets/videos/video-gallery4.mp4'
import video5 from '../assets/videos/video-gallery5.mp4'


const Galeria = () => {


    const [value, setValue] = useState(0)
    const images = [
        { id: 1, image: img1 },
        { id: 2, image: img2 },
        { id: 3, image: img3 },
        { id: 4, image: img4 },
        { id: 5, image: img5 },
        { id: 6, image: img6 },
        { id: 7, image: img7 },
        { id: 8, image: img8 },
        { id: 9, image: img9 },
        { id: 10, image: img10 },
        { id: 11, image: img11 },
        { id: 12, image: img12 },
        { id: 13, image: img13 },
        { id: 14, image: img14 },
        { id: 15, image: img15 },
        { id: 16, image: img16 },
        { id: 17, image: img17 },
        { id: 18, image: img18 },
        { id: 19, image: img19 },
        { id: 20, image: img20 },
        { id: 21, image: img21 },
        { id: 22, image: img22 },
        { id: 23, image: img23 },
        { id: 24, image: img24 },
        { id: 25, image: img25 },
        { id: 26, image: img26 },
        { id: 27, image: img27 },
        { id: 28, image: img28 },
        { id: 29, image: img29 },
        { id: 30, image: img30 },

    ]

    const videos = [
        { id: 2, video: video2 },
        { id: 3, video: video3 },
        { id: 4, video: video4 },
        { id: 5, video: video5 }
    ]

    const PrevArrow = ({ onClick }) => {
        return (
            <div>
                <button className='left' onClick={onClick}>
                    <i className='bx bx-left-arrow'></i>
                </button>
            </div>
        )
    }

    const NextArrow = ({ onClick }) => {
        return (
            <div>
                <button className='right' onClick={onClick}>
                    <i className='bx bx-right-arrow'></i>
                </button>
            </div>
        )
    }

    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: "linear",
        pauseOnHover: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setValue(next)
    };


    useEffect(() => {
        const timer = setTimeout(() => {
            setValue((prevValue) => (prevValue + 1) % images.length);
        }, 6000);

        return () => clearTimeout(timer);
    }, [value, images.length]);


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
                    <Slider {...settings}>
                        {
                            images.map((image, index) => (
                                <div className='image' key={index}>
                                    <img src={image.image} alt="" />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <div className='circles'>
                    {
                        images.map((image, index) => (
                            <div className={index === value ? "active" : "point"} key={image.id}>
                            </div>
                        ))
                    }
                </div>

                <div className='videos-container'>

                    {
                        videos.map((videos, index) => (
                            <video key={index} className='video-galeria' controls controlsList="nodownload">
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