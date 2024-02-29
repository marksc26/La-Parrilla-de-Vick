import React, { useEffect, useState } from 'react'
import './styles/Packs.css'
import { packs } from '../../public/data.json'
import { useNavigate } from 'react-router-dom'

const Packs = () => {

    const [pack, setPack] = useState([])

    useEffect(() => {
        setPack(packs)
    }, [])

    const navigate = useNavigate()

    const handleCard = (cardId) => {
        navigate(`/buffet/${cardId}`)
    }

    return (
        <section className='packs-section'>

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
                                    <div>
                                        <h4>Saber más </h4>
                                    </div>

                                    <div className='icon'>
                                        <i className='bx bxs-chevrons-right'></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='discounts'>
                <p>Eventos mayores a 80 personas, se aplica un 10% de descuento y mayores a 120 personas, se aplica un 15% de descuento.</p>

            </div>

        </section>
    )
}

export default Packs