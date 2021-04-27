import React, { useEffect, useState } from 'react'
import './css/favorites.css'
import Card from '../utils/Card'

const Favorites = () => {

    const [favoritesItems, setFavoritesItems] = useState([])

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || []
        setFavoritesItems(favorites)
    }, [])

    const deleteItem = () => {
        console.log('deleting.....');
    }

    return (
        <div className="favorites-page">
            <div className="favorites-container">
                {favoritesItems.length ?
                    favoritesItems.map((item) => {
                        return (
                            <div>
                                <Card item={item} />
                                <i onClick={deleteItem} class="far fa-trash-alt fa-2x"></i>
                            </div>
                        )
                    })
                    :
                    <div>
                        <h1>No favorites</h1>
                    </div>
                }
            </div>
        </div>
    )
}

export default Favorites