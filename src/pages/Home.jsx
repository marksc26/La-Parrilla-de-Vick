import React, { useEffect, useRef, useState } from 'react'
import './styles/Home.css'
import Header from '../layout/Header'
import About from './About'
import Packs from './Packs'
import Footer from '../layout/Footer'
import ButtonWS from '../components/ButtonWS'
import Form from './Form'
import { useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Modal from '../components/Modal'
import logo from '../assets/LOGO_BN-min.png'
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
import img31 from '../assets/Images/car24.jpg'
import img32 from '../assets/Images/car25.jpg'
import img33 from '../assets/Images/car26.jpg'
import img34 from '../assets/Images/car27.jpg'
import img35 from '../assets/Images/car28.jpg'
import img36 from '../assets/Images/car29.jpg'
import img37 from '../assets/Images/car30.jpg'
import img38 from '../assets/Images/car31.jpg'
import img39 from '../assets/Images/car32.jpg'
import Slider from 'react-slick'


const Home = () => {

    const homeSectionRef = useRef(null)

    const [scroll, setScroll] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [showMenu, setShowMenu] = useState(false)



    useEffect(() => {

        function buttonws() {
            setScroll(window.scrollY)
        }

        window.addEventListener("scroll", buttonws)

        return () => {
            window.removeEventListener('scroll', buttonws)
        }


    }, [])

    const scrollToTop = () => {
        homeSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }


    const packsRef = useRef(null)
    const contactRef = useRef(null)
    const aboutRef = useRef(null)
    const location = useLocation()

    useEffect(() => {
        setTimeout(() => {
            if (location.hash === "#packs") {
                packsRef.current.scrollIntoView({ behavior: 'smooth' })

            }
            if (location.hash === "#contact") {
                contactRef.current.scrollIntoView({ behavior: 'smooth' })
            }
            if (location.hash === "#about") {
                aboutRef.current.scrollIntoView({ behavior: "smooth" })
            }
        }, 100)

        if (location.hash) {
            window.history.replaceState(null, '', location.pathname + location.search);
        }
    }, [location])



    useEffect(() => {
        AOS.init({
            duration: 1100,
            delay: 500,
            disableMutationObserver: true,
            offset: 150
        })
    }, [])


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
        { id: 31, image: img31 },
        { id: 32, image: img32 },
        { id: 33, image: img33 },
        { id: 34, image: img34 },
        { id: 35, image: img35 },
        { id: 36, image: img36 },
        { id: 37, image: img37 },
        { id: 38, image: img38 },
        { id: 39, image: img39 },

    ]


    const [value, setValue] = useState(0)


    const PrevArrow = ({ onClick }) => {
        return (
            <div>
                <button className='left-home' onClick={onClick}>
                    <i className='bx bx-left-arrow'></i>
                </button>
            </div>
        )
    }

    const NextArrow = ({ onClick }) => {
        return (
            <div>
                <button className='right-home' onClick={onClick}>
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
        beforeChange: (current, next) => setValue(next),
    };


    useEffect(() => {
        const timer = setTimeout(() => {
            setValue((prevValue) => (prevValue + 1) % images.length);
        }, 6000);

        return () => clearTimeout(timer);
    }, [value, images.length]);


    return (
        <main>
            <Header
                setShowMenu={setShowMenu}
                showMenu={showMenu}

            />
            <section className="mainImage" ref={homeSectionRef}>
                <div className='titlePage' data-aos='fade-up'>
                    <img className='logoMain' src={logo} alt="" />
                    <h3>PARRILLADA DE</h3>
                    <h3>CORTES FINOS, MAR Y TIERRA</h3>
                    <p>EVENTOS</p>
                    <h4>Guadalajara Jalisco y zona metropolitana</h4>
                </div>

            </section>
            <div className='about-packs'>
                <div ref={aboutRef}>
                    <About />
                </div>
                <div className='carousel-home'>
                    <div className="carousel-container-home">
                        <Slider {...settings}>
                            {
                                images.map((image, index) => (
                                    <div className='image-home' key={index}>
                                        <img src={image.image} alt="" />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                    {/*
                    <div className='circles-home'>
                        {
                            images.map((image, index) => (
                                <div className={index === value ? "active-home" : "point-home"} key={image.id}>
                                </div>
                            ))
                        }
                    </div>
                   */}
                </div>


                <div ref={packsRef}>
                    <Packs />
                </div>



            </div>
            <div ref={contactRef}>
                <Form
                    setShowModal={setShowModal}
                />
            </div>


            {
                showModal && (<Modal setShowModal={setShowModal} />)
            }

            {
                scroll > 150 && (<ButtonWS scrollToTop={scrollToTop} />)
            }


            <Footer />

        </main>
    )
}

export default Home