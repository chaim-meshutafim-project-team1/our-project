import React, { useState } from 'react'
import './css/translation.css'
import Button from '../utils/Button'
import TextInput from '../utils/TextInput'
import Card from '../utils/Card'
import DropDown from '../utils/DropDown'
import axios from 'axios'

const Translation = () => {

    const [inputValue, setInputValue] = useState('')
    const [card, setCard] = useState(null)

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

    const addToFav = () => {
        console.log('adding to fav....');
    }

    return (
        <div className="translation-page">
            <div className="search-container">
                <TextInput type="text" value={inputValue} onChange={(e) => handleChange(e)} placeholder='Insert "Yad2" URL here' />
                <DropDown/>
                <Button onClick={sendURL} text="Submit" />
            </div>
            <div className="cards-container">
                {card ?
                    <div>
                        <Card item={card} />
                        <i onClick={addToFav} class="far fa-heart fa-2x"></i>
                    </div>
                    :
                    <div>
                        <h1>Insert URL</h1>
                    </div>
                }

            </div>
        </div>
    )
}

export default Translation