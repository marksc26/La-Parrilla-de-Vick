import React, { useEffect, useState } from 'react'
import './styles/Packs.css'
import { packs } from '../../public/data.json'
import { useNavigate } from 'react-router-dom'

const Packs = ({ packsSectionRef }) => {

    const [pack, setPack] = useState([])

    useEffect(() => {
        setPack(packs)
    }, [])

    const navigate = useNavigate()

    const handleCard = (cardId) => {
        navigate(`/buffet/${cardId}`)
    }

    return (
        <section className='packs-section' ref={packsSectionRef}>

            <div className='title-pack' >
                <div className='title-pack-container'>
                    <h3>Paquetes</h3>
                </div>

            </div>

            <div className='packs-container'>
                {
                    pack.map(pack => (

                        <div className='card' key={pack.id}>
                            <div className='card-container' >
                                <img className='imgCard' src={pack.image} alt="" />
                            </div>
                            <div className='info-container'>
                                <h3>{pack.title}</h3>
                                <div className='buttonPack' onClick={() => handleCard(pack.id)}>
                                    <h4>Saber más </h4>
                                    <div className='icon'>
                                        <i className='bx bxs-chevrons-right'></i>
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default Packs