import React, { useState } from 'react'
import './css/translation.css'
import Button from '../utils/Button'
import TextInput from '../utils/TextInput'
import axios from 'axios'

const Translation = () => {

    const [inputValue, setInputValue] = useState('')
    const [card, setCard] = useState([])

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const sendURL = async () => {
        // const result = await axios.get('/api/translate', {
        //     url: { inputValue }
        // })
        // console.log(result);
        // const temp = card
        // temp.push(result.data)
    }


    return (
        <div className="translation-page">
            <div>Nav bar here</div>
            <div><TextInput type="text" value={inputValue} onChange={(e) => handleChange(e)} placeholder='Insert "Yad2" URL here' /></div>
            <div><Button onClick={sendURL} text="Submit" /></div>
        </div>
    )
}

export default Translation