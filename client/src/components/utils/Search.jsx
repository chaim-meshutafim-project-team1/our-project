import React, { useState } from 'react'
import TextInput from './TextInput'
import DropDown from './DropDown'
import Button from './Button'
import './css/search.css'

function Search({ sendURL }) {

  const [inputValue, setInputValue] = useState('')
  const [language, setLanguage] = useState('');
  const [err, setErr] = useState(null);

  const inputHandler = (event) => {
    setErr(null);
    setInputValue(event.currentTarget.value);
  }

  const handleOnClick = () => {
    if (inputValue !== '' && language !== '') {
      if (inputValue.startsWith("https://www.komo.co.il/") && inputValue.includes("modaaNum")) {
        console.log("send:", inputValue);
        sendURL({ url: inputValue, language: language });
        setErr(null);
      }
      else {
        setErr('Invaild URL');
      }
    }
  }

  const onSelectLang = (event) => {
    setLanguage(event.currentTarget.value);
  }

  return (
    <div id="search" className="container">
      <TextInput type="text" value={inputValue} onChange={inputHandler} placeholder='Insert "Yad2" URL here' />
      <DropDown onChange={onSelectLang} />
      <Button className={(inputValue == '' || language == '') ? "disable translateBtn" : "translateBtn"} onClick={handleOnClick} text="Translate" />
    </div>
  )
}

export default Search
