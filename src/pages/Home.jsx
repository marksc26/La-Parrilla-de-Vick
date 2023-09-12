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


const Home = () => {

    const aboutSectionRef = useRef(null)
    const packsSectionRef = useRef(null)
    const formSectionRef = useRef(null)
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






    const scrollToAbout = () => {
        aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' })

    }

    const scrollToPacks = () => {
        packsSectionRef.current.scrollIntoView({ behavior: 'smooth' })

    }

    const scrollToForm = () => {
        formSectionRef.current.scrollIntoView({ behavior: 'smooth' })

    }

    const scrollToTop = () => {
        homeSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }


    const packsRef = useRef(null)
    const location = useLocation()

    useEffect(() => {
        setTimeout(() => {
            if (location.hash === "#packs") {
                packsRef.current.scrollIntoView({ behavior: 'smooth' })

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

    return (
        <main className={!showMenu ? "" : "hidden"}>
            <Header
                scrollToAbout={scrollToAbout}
                scrollToPacks={scrollToPacks}
                scrollToForm={scrollToForm}
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
                <About
                    aboutSectionRef={aboutSectionRef}
                />
                <div ref={packsRef}>
                    <Packs
                        packsSectionRef={packsSectionRef}
                    />

                </div>

            </div>

            <Form
                formSectionRef={formSectionRef}
                setShowModal={setShowModal}
            />
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