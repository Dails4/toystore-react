import React, { useState } from 'react'

const Input = ({subAlert, modalChange}) => {
    const [submit, setSubmit] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    function alertUser(event) {
        event.preventDefault();
        if(validateEmail(inputValue)) {
            setSubmit(true);
            setInputValue('');
            setIsValid(true);
            setTimeout(() => {
                setSubmit(false);
                if (modalChange) modalChange()
            }, 2000);  
        } else {
            setIsValid(false)
        }
    }
    function changeInput(e) {
        setInputValue(e.target.value)
    }
    function validateEmail(email) {
        const validate = /\S+@\S+\.\S+/;
        return validate.test(email);
      }  
  return (
    <div className="subscribe_form">
                    <input 
                    value={inputValue} 
                    type="text" 
                    onChange={changeInput} 
                    className={isValid ? 'subscribe_input' : 'subscribe_input fail'}
                    />
                    <button className="subscribe_btn" onClick={alertUser}>Submit</button>
                    <div className={submit ? 'subscribe_alert active' : 'subscribe_alert'}>{subAlert}</div>
    </div>
  )
}

export default Input