import React from 'react'
import './styles/Modal.css'

const Modal = ({ setShowModal }) => {

  const handleButtonModal = () => {
    setShowModal(false)
  }

  return (
    <section className='sectionModal'>
      <div className='modal-container'>
        <div className='icon-modal'>
          <i className='bx bx-check-circle'></i>
        </div>
        <div className='text-modal'>
          <h3>Agradecemos tu tiempo.</h3>
          <h3>Estaremos en contacto muy pronto.</h3>
        </div>
        <div className='buttonModal'>
          <button onClick={handleButtonModal}>Cerrar</button>
        </div>
      </div>
    </section>
  )
}

export default Modal