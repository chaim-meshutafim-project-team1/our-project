import React, { useState } from 'react'
import './css/translation.css'
import Card from '../utils/Card'
import axios from 'axios'
import Search from '../utils/Search'

const Translation = () => {

    const [card, setCard] = useState('')//TODO: back to null

    const sendURL = async ({ url, language }) => {
        console.log(url, language);
        // const result = await axios.get('/api/translate', { url, language });
        // console.log(result);
        const card = {
            image: 'https://www.komo.co.il/api/pictures/showPic.api.asp?picSize=b&picNum=7366822&luachNum=3',
            title: 'Product Title',
            price: '$5000',
            description: 'Product Description',
        }
        setCard(card);
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
                    <div className="card-container">
                        <i className="heartIcon" onClick={addToFav} className="far fa-heart fa-2x"></i>
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
