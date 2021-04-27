import React from 'react'
import TextInput from './TextInput'
import DropDown from './DropDown'
import Button from './Button'
import './css/search.css'

function Search({inputValue,onChange,sendURL}) {
  return (
    <div id="search" className="container">
      <TextInput type="text" value={inputValue} onChange={onChange} placeholder='Insert "Yad2" URL here' />
      <DropDown/>
      <Button className="translateBtn" onClick={sendURL} text="Translate" />
    </div>
  )
}

export default Search
