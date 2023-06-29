import React, { useEffect, useRef, useState } from 'react'
import './styles/Home.css'
import Header from '../layout/Header'
import About from './About'
import Packs from './Packs'
import Footer from '../layout/Footer'
import ButtonWS from '../components/ButtonWS'
import Form from './Form'
import { useLocation } from 'react-router-dom'

const Home = () => {

    const aboutSectionRef = useRef(null)
    const packsSectionRef = useRef(null)
    const formSectionRef = useRef(null)

    const [scroll, setScroll] = useState(0)

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


    return (
        <main>
            <Header
                scrollToAbout={scrollToAbout}
                scrollToPacks={scrollToPacks}
                scrollToForm={scrollToForm}

            />
            <section className='mainImage'></section>
            <div className='about-packs'>
                <About aboutSectionRef={aboutSectionRef} />
                <div ref={packsRef}>
                    <Packs packsSectionRef={packsSectionRef} />

                </div>

            </div>

            <Form formSectionRef={formSectionRef} />

            {
                scroll > 800 && (<ButtonWS />)
            }
            <Footer />

        </main>
    )
}

export default Home