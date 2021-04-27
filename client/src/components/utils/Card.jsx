import React from 'react';
import './css/card.css';

function Card({ item }) {
  const { image, title, price, description } = item;
  console.log(item)
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="title">{title}</div>
      <div className="price">{price}</div>
      <div className="description">{description}</div>
    </div>
  )
}

export default Card
