import React from 'react';
import './PriceCard.css';

type PriceCard = {
  imageSrc: string;
  rating: number;
  reviews: number;
  location: string | 'ONLINE';
  description: string;
  price: number;
  openSpots: number;
};

export default ({ item }: { item: PriceCard }) => {
  let labelText = 'SOLD OUT';
  const { imageSrc, rating, reviews, location, description, price, openSpots } =
    item;
  let showLabel = false;
  if (openSpots < 1) {
    showLabel = true;
  } else if (location === 'ONLINE') {
    showLabel = true;
    labelText = 'ONLINE';
  }

  return (
    <div className="priceCard_container">
      {/* actual image */}
      <div className="picture_container">
        <img className="main_picture" src={imageSrc} />
        {showLabel && <div className="offer_state_label">{labelText}</div>}
      </div>
      {/* rating image */}
      <div>
        <svg height="25" width="23" className="star" data-rating="1">
          <polygon
            points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
            style={{
              fillRule: 'nonzero',
            }}
          />
        </svg>
        {rating}
        <span className="details">
          ({reviews}) • {location}
        </span>
      </div>
      {description} <br />
      <strong> From ${price}</strong> / person
    </div>
  );
};
