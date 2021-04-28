import React, { useState } from 'react'
import './css/translation.css'
import Card from '../utils/Card'
import axios from 'axios'
import Search from '../utils/Search'

const Translation = () => {

    const [card, setCard] = useState(null)//TODO: back to null
    const [favorite, setFavorite] = useState(false);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);


    const sendURL = async ({ url, language }) => {
        try {
            setLoading(true);
            const result = await axios.post('/api/translate', { url, language });
            console.log(result);
            const helper = card
            helper.push(result.data)
            setCard(helper)
            setLoading(false);
        } catch (error) {
            setErr('Error, please try again.');
            setLoading(false);
        }
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
            <Search sendURL={sendURL} loading={loading} />
            <div className="cards-container">
                {loading ? <div>Loading...</div> :
                    card ?
                        <div className="card-container">
                            <i className="heartIcon" onClick={addToFav} className={favorite ? "fas fa-heart fa-2x" : "far fa-heart fa-2x"}></i>
                            <Card item={card} />
                        </div>
                        :
                        err ?
                            <div>{err}</div> :
                            <div>
                                <h1>Insert URL</h1>
                            </div>
                }

            </div>
        </div>
    )
}

export default Translation
