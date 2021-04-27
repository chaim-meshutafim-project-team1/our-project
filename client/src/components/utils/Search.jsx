import React,{useState} from 'react'
import TextInput from './TextInput'
import DropDown from './DropDown'
import Button from './Button'
import './css/search.css'

function Search({sendURL}) {

  const [inputValue, setInputValue] = useState('')
  const [language,setLanguage] = useState('');

  const inputHandler=(event)=>{
    setInputValue(event.currentTarget.value);
  }

  const handleOnClick = ()=>{//TODO: validate url
    if(inputValue!=='' && language!==''){
      console.log("send:",inputValue);
      sendURL({url:inputValue,language:language});
    }
  }

  const onSelectLang = (event)=>{
    console.log(event.currentTarget.value);
    setLanguage(event.currentTarget.value);
  }

  return (
    <div id="search" className="container">
      <TextInput type="text" value={inputValue} onChange={inputHandler} placeholder='Insert "Yad2" URL here' />
      <DropDown onChange={onSelectLang}/>
      <Button className="translateBtn" onClick={handleOnClick} text="Translate" />
    </div>
  )
}

export default Search
