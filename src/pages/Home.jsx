import React, { useEffect, useState } from 'react'
import './styles/Home.css'
import Header from '../layout/Header'
import About from './About'
import Packs from './Packs'
import Footer from '../layout/Footer'
import ButtonWS from '../components/ButtonWS'
import Form from './Form'

const Home = () => {


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


    return (
        <main>
            <Header />
            <section className='mainImage'></section>
            <About />
            <Packs />
            <Form />

            {
                scroll > 800 && (<ButtonWS />)
            }
            <Footer />

        </main>
    )
}

export default Home