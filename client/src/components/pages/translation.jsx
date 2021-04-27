import React, { useState } from 'react'
import './css/translation.css'
import Card from '../utils/Card'
import axios from 'axios'
import Search from '../utils/Search'

const Translation = () => {

    const [card, setCard] = useState(null)

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const sendURL = async (url) => {
        const result = await axios.get('/api/translate', {url});
        console.log(result);
    }

    const addToFav = () => {
        console.log('adding to fav....');
    }

    return (
        <div className="translation-page">
            <Search sendURL={sendURL} />
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