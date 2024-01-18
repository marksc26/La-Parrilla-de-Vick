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
        { id: 14, image: img14 }
    ]

    const [value, setValue] = useState(0)


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


    return (
        <main className={!showMenu ? "" : "hidden"}>
            <Header
                setShowMenu={setShowMenu}
                showMenu={showMenu}

            />
            <section className="mainImage" ref={homeSectionRef}>
                <div className='titlePage' data-aos='fade-up'>
                    <img className='logoMain' src={logo} alt="" />
                    <h3>PARRILLADA BUFFET</h3>
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

                        <div>
                            <button className='left-home' onClick={prevImage}><i className='bx bx-left-arrow'></i></button>
                        </div>

                        <img src={images[value].image} alt="" />

                        <div>
                            <button className='right-home' onClick={nextImage}><i className='bx bx-right-arrow'></i></button>
                        </div>
                    </div>
                    <div className='circles-home'>
                        {
                            images.map((image, index) => (
                                <div onClick={() => setValue(index)} className={index === value ? "active-home" : "point-home"} key={image.id}>
                                </div>
                            ))
                        }
                    </div>
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