import React, { useEffect, useState } from 'react'
import './styles/Buffet.css'
import { packs } from '../../public/data.json'
import { useParams } from 'react-router-dom'
import logo from '../assets/LOGO_BN-min.png'

const Buffet = () => {



    const [info, setinfo] = useState([{}])
    const { id } = useParams()

    const fetchCard = (id) => {
        setinfo(packs.filter(pack => pack.id === Number(id)))

    }
    useEffect(() => {
        fetchCard(id)
    }, [id])


    console.log(info)
    return (
        <section className='section-buffet'>
            <img className='img-buffet' src={info[0].backdrop} alt="sea" />

            <div className='logo-packs'>
                <img src={logo} alt="" />
            </div>

            <div className='infoCard-container'>

                <div className='title-buffet'>
                    <div className='title-buffet-container'>
                        <h3 >{info[0].title}</h3>
                    </div>

                </div>

                <div className='requirements'>
                    <h2><span>${info[0].price}</span> POR PERSONA</h2>
                    <h3>SERVICIO MÍNIMO DE 30 PERSONAS</h3>
                </div>

                <div className='includes'>
                    <h3>INCLUYE</h3>

                    {
                        info[0].includes?.map(item => (
                            <div key={item.id}>
                                <p>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
                {
                    info[0].cuts && (
                        <div className='container'>
                            {info[0].cuts && <div className='title-container-info'><h3>CORTES</h3></div>
                            }
                            <div className='list-container'>
                                {

                                    info[0].cuts ? (
                                        info[0].cuts.map(cut => (
                                            <div>
                                                <p key={cut.id}>{cut.name}</p>
                                            </div>
                                        ))
                                    ) : ""


                                }
                            </div>

                        </div>
                    )
                }
                <div>

                    <div className='container'>
                        <div className='title-container-info'>
                            <h3>COMPLEMENTOS</h3>
                        </div>
                        <div className='list-container'>
                            {
                                info[0].accompaniments && (
                                    info[0].accompaniments.map(item => (
                                        <div>
                                            <p key={item.id}>{item.name}</p>
                                        </div>
                                    ))
                                )
                            }
                        </div>


                    </div>
                    <div className='container'>
                        <div className='title-container-info'>
                            <h3>VEGETALES</h3>
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

                </div>

            </div>



            <div className='buttons-buffet'>
                <div className='button-buffet'>
                    <button>REGRESAR</button>
                </div>
                <div className='button-buffet'>
                    <button>COTIZAR</button>
                </div>
            </div>

        </section>
    )
}

export default Buffet