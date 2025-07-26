import React from 'react';

function Card({ name, brand, price, image, rating ,onClick}) {
  return (
    <div className='card' onClick={onClick}>
      <img src={image} alt={name} className="image"  />
      <div >
        <h2 >{name}</h2>
        <p>{brand}</p>
        <p  className='prix'>{price}</p>
        <div className="rating">
          <span className="rating">★</span> {rating} / 5
        </div>
        
      </div>
    </div>
  );
}

export default Card;