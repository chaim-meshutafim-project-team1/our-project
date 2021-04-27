import React from 'react'
import './css/textInput.css'

function TextInput({type,onChange,placeholder,value}) {
  return(
    <input className="input" type={type} placeholder={placeholder} onChange={onChange} value={value}></input>
    )
}

export default TextInput


