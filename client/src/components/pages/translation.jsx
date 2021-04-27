import React, { useState } from 'react'
import './css/translation.css'
import Card from '../utils/Card'
import axios from 'axios'
import Search from '../utils/Search'

const Translation = () => {

    const [card, setCard] = useState('')//TODO: back to null


    const sendURL = async ({url,language}) => {
        console.log(url,language);
        console.log('sending...')
        const result = await axios.post('http://localhost:5000/api/translate', {url,language});
        console.log(result);
        setCard(result.data)
     //TODO:add card to state 
    }

    const addToFav = () => {
       const userProducts = JSON.parse(localStorage.getItem('products')) || []
       const helper = userProducts
       helper.push(card)
       helper = JSON.stringify(helper)
       localStorage.setItem('favorites',helper)
    }

    return (
        <div className="translation-page">
            <Search sendURL={sendURL} />
            <div className="cards-container">
                {card ?
                    <div>
                        <Card item={card} />
                        <i onClick={addToFav} className="far fa-heart fa-2x"></i>
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