import React from 'react'
import Input from './UI/Input'

const Modal = ({isOpen, modalChange}) => {
  return (
    <div className={isOpen ? 'modal_wrap active' : 'modal_wrap'} onClick={modalChange} >
        <div className='modal_content' onClick={(e) => e.stopPropagation()}>
        <button className='modal_close' onClick={modalChange} >Close</button>
            <div className="modal_title">Get your marketing plan for FREE</div>
            <p className='modal_par'>All information about further actions will be sent to you by email</p>
            <Input subAlert={'Check Your E-Mail'} modalChange={modalChange}/>
          
        </div>
    </div>
  )
}

export default Modal