import React, { useRef } from 'react'
import './styles/Form.css'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'



const Form = ({ formSectionRef, setShowModal }) => {


    const { handleSubmit, register, reset, formState: { errors } } = useForm()

    const formRef = useRef()

    const submitForm = () => {


        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(res => {
                console.log(res.text)
                reset()
                setShowModal(true)
            })
            .catch(err => console.log(err))


    }

    return (
        <section className='form-section' ref={formSectionRef}>
            <div className='form-container' >
                <div className='title-container'>
                    <div className='title-form'>
                        <h3>Contáctanos</h3>
                    </div>

                </div>
                <form ref={formRef} onSubmit={handleSubmit(submitForm)} action="">
                    <div className='inputs'>
                        <div className='input'>
                            <label htmlFor="">Nombre</label>
                            <input className='input1' type="text" {...register("name", { required: true })} name='name' />

                        </div>

                        <div className='input'>
                            <label htmlFor="">Teléfono</label>
                            <input className='input1' type="text" {...register("phone", { required: true })} name='phone' />
                        </div>

                    </div>

                    <div className='text-area'>
                        <div className='input2'>
                            <label htmlFor="">Correo</label>
                            <input className='correo' type="email" {...register("email", { required: true })} name='email' />
                        </div>
                        <div className='input2'>
                            <label>Fecha del Evento</label>
                            <input className='date' type="date" name="date" id="" {...register("date", { required: true })} />
                        </div>



                    </div>

                    <div className='persons-buffet'>
                        <div className='input3'>
                            <label htmlFor="">Total de personas</label>
                            <input type="text" name='persons' {...register("persons", { required: true, min: 30 })} />
                        </div>
                        <div className='input3'>
                            <label htmlFor="">Buffet</label>
                            <select name="buffet" id="" {...register("buffet", { required: true })}>
                                <option value="Select">Select</option>
                                <option value="Prime">Prime</option>
                                <option value="Mar y tierra">Mar y tierra</option>
                            </select>

                        </div>
                    </div>

                    <div className='button'>
                        {(errors.name || errors.email || errors.phone || errors.date || errors.persons || errors.buffet)
                            && (<span className='errors'>Por favor, complete todos los campos</span>)}
                        <button type='submit'>Solicitar cotización</button>
                    </div>

                </form>

            </div>
        </section>
    )
}

export default Form