import React from 'react'
import './styles/Form.css'

const Form = ({ formSectionRef }) => {
    return (
        <section className='form-section' ref={formSectionRef}>
            <div className='form-container' >
                <div className='title-container'>
                    <div className='title-form'>
                        <h3>Contáctanos</h3>
                    </div>

                </div>
                <form action="">
                    <div className='inputs'>
                        <input className='input1' type="text" placeholder='Nombre' />
                        <input className='input1' type="text" placeholder='Teléfono' />
                    </div>

                    <div className='text-area'>
                        <textarea name="" id="" cols="30" rows="4" placeholder='Cuentanos sobre tu evento'></textarea>
                    </div>

                    <div className='button'>
                        <button>Solicitar cotización</button>
                    </div>

                </form>

            </div>
        </section>
    )
}

export default Form