import React, { useEffect, useState } from 'react'
import './styles/Buffet.css'
import { packs } from '../../public/data.json'
import { Link, useParams } from 'react-router-dom'
import logo from '../assets/LOGO_BN-min.png'
import Footer from '../layout/Footer'

const Buffet = () => {

    const [info, setinfo] = useState([{}])
    const [showInfo, setShowInfo] = useState(true)
    const { id } = useParams()

    const fetchCard = (id) => {
        setinfo(packs.filter(pack => pack.id === Number(id)))

    }


    useEffect(() => {
        fetchCard(id)
    }, [id])

    const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER
    const message = `!Hola! Quiero cotizar el ${info[0].title} por favor! 
    No. de personas:   Fecha de evento:`
    const encodedText = encodeURIComponent(message)




    useEffect(() => {
        setTimeout(() => {
            setShowInfo(false)
        }, 600)
    }, [])




    return (

        <section className='section-buffet'>
            <img className='img-buffet' src={info[0].backdrop} alt="" />
            <div className='mobile-img'>
                <img className='img-buffet-mobile' src={info[0].backdrop_mobile} alt="" />
                <div className='logo-packs-mobile'>
                    <img src={logo} alt="" />
                </div>
                <div className='overlay'></div>
            </div>



            <div className='logo-packs'>
                <img src={logo} alt="" />
            </div>

            {
                showInfo ? "" : (
                    <div className='infoCard-container'>

                        <div className='title-buffet'>
                            <div className='title-buffet-container'>
                                <h3 >{info[0].title}</h3>
                            </div>

                        </div>

                        <div className='requirements'>
                            <h2><span>${info[0].price}</span> por persona</h2>
                            <h3>SERVICIO MÍNIMO DE 30 PERSONAS</h3>
                        </div>
                        {
                            info[0].includes && (
                                <div className='includes'>
                                    <h3>INCLUYE</h3>
                                    <div className='list-includes'>
                                        {
                                            info[0].includes?.map(item => (
                                                <div key={item.id}>
                                                    <p>{item.name}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                        <section className='grid-container'>
                            {
                                info[0].cuts && (
                                    <div className='container'>
                                        <div className='title-container-info'>
                                            <h3>CORTES</h3>
                                        </div>

                                        <div className='list-container'>
                                            {

                                                info[0].cuts ? (
                                                    info[0].cuts.map(cut => (
                                                        <div key={cut.id}>
                                                            <p >{cut.name}</p>
                                                        </div>
                                                    ))
                                                ) : ""


                                            }
                                        </div>

                                    </div>
                                )
                            }
                            {
                                info[0].accompaniments && (
                                    <div className='container'>
                                        <div className='title-container-info'>
                                            <h3>COMPLEMENTOS</h3>
                                        </div>
                                        <div className='list-container'>
                                            {
                                                info[0].accompaniments && (
                                                    info[0].accompaniments.map(item => (
                                                        <div key={item.id}>
                                                            <p >{item.name}</p>
                                                        </div>
                                                    ))
                                                )
                                            }
                                        </div>


                                    </div>
                                )
                            }
                            {

                                info[0].vegetables && (
                                    <div className='container'>
                                        <div className='title-container-info'>
                                            <h3>GUARNICIONES</h3>
                                        </div>
                                        <div className='list-container'>
                                            {
                                                info[0].vegetables && (
                                                    info[0].vegetables.map(item => (
                                                        <p key={item.id}>{item.name}</p>
                                                    ))
                                                )
                                            }
                                        </div>
                                    </div>
                                )

                            }

                            {
                                info[0].option1 && (
                                    <div className='container'>
                                        <div className='title-container-info'>
                                            <h3>OPCIóN 1</h3>
                                        </div>
                                        <div className='list-container'>
                                            {
                                                info[0].option1 && (
                                                    info[0].option1.map(item => (
                                                        <p key={item.id}>{item.name}</p>
                                                    ))
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            }
                            {
                                info[0].option2 && (
                                    <div className='container'>
                                        <div className='title-container-info'>
                                            <h3>OPCIóN 2</h3>
                                        </div>
                                        <div className='list-container'>
                                            {
                                                info[0].option2 && (
                                                    info[0].option2.map(item => (
                                                        <p key={item.id}>{item.name}</p>
                                                    ))
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </section>

                    </div>)
            }



            <div className='buttons-buffet'>
                <div className='button-buffet'>
                    <Link to={{ pathname: '/', hash: "packs" }}><button>REGRESAR</button></Link>
                </div>
                <div className='button-buffet'>
                    <a href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodedText}`}><button>COTIZAR</button></a>
                </div>
            </div>

            {
                showInfo ? "" : <Footer />
            }



        </section>

    )
}

export default Buffet