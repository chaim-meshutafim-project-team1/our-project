import React, { useState } from 'react'
import './css/translation.css'
import Card from '../utils/Card'
import axios from 'axios'
import Search from '../utils/Search'

const Translation = () => {

    const [card, setCard] = useState([])//TODO: back to null


    const sendURL = async ({url,language}) => {
        console.log(url,language);
        console.log('sending...')
        const result = await axios.post('/api/translate', {url,language});
        console.log(result);
        const helper = card
        helper.push(result.data)
        setCard(helper)
     
    }

    const addToFav = () => {
        const userProducts = JSON.parse(localStorage.getItem('products')) || []
        let helper = userProducts
        helper.push(card)
        helper = JSON.stringify(helper)
        localStorage.setItem('favorites', helper)

        setFavorite(true);
    }

    return (
        <div className="translation-page">
            <Search sendURL={sendURL} />
            <div className="cards-container">
                {card ?
                    <div className="card-container">
                        <i className="heartIcon" onClick={addToFav} className={favorit ? "fas fa-heart fa-2x" : "far fa-heart fa-2x"}></i>
                        <Card item={card} />
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
