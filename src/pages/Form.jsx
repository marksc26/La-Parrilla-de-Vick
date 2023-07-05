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
                        <div className='input'>
                            <label htmlFor="">Nombre</label>
                            <input className='input1' type="text" />
                        </div>

                        <div className='input'>
                            <label htmlFor="">Teléfono</label>
                            <input className='input1' type="text" />
                        </div>

                    </div>

                    <div className='text-area'>
                        <div className='input2'>
                            <label htmlFor="">Correo</label>
                            <input className='correo' type="email" />
                        </div>
                        <div className='input2'>
                            <label>Fecha del Evento</label>
                            <input className='date' type="date" name="" id="" />
                        </div>



                    </div>

                    <div className='persons-buffet'>
                        <div className='input3'>
                            <label htmlFor="">Total de personas</label>
                            <input type="number" />
                        </div>
                        <div className='input3'>
                            <label htmlFor="">Buffet</label>
                            <input type="text" />

                        </div>
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