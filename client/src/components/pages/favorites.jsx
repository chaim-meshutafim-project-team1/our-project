import React, { useEffect, useState } from 'react'
import './css/favorites.css'
import Card from '../utils/Card'

const Favorites = () => {

    const [favoritesItems, setFavoritesItems] = useState([])

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || []
        setFavoritesItems(favorites)
    }, [])

    const deleteItem = (e) => {
          // target the item and remove it from favorites array with array.filter or splice
          console.log(e);
        console.log('deleting.....');
    }

    return (
        <div className="favorites-page">
            <div className="favorites-container">
                {favoritesItems.length ?
                    favoritesItems.map((item) => {
                        return (
                            <>
                                <Card item={item} />
                                <i onClick={deleteItem} className="far fa-trash-alt fa-2x"></i>
                            </>
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