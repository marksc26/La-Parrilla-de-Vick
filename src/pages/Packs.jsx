import React, { useEffect, useState } from 'react'
import './styles/Packs.css'
import { packs } from '../../public/utils/data.json'

const Packs = () => {

    const [pack, setPack] = useState([])

    useEffect(() => {
        setPack(packs)
    }, [])

    return (
        <section className='packs-section'>

            <div className='title-pack'>
                <div className='title-pack-container'>
                    <h3>Paquetes</h3>
                </div>

            </div>

            <div className='packs-container'>
                {
                    pack.map(pack => (
                        <div className='card' key={pack.id}>
                            <div className='card-container'>
                                <img className='imgCard' src={pack.image} alt="" />
                            </div>
                            <div className='info-container'>
                                <h3>{pack.title}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default Packs