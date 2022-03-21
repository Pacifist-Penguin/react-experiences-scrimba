import React from 'react';
import './PriceCard.css';

type PriceCard = {
  imageSrc: string;
  rating: number;
  reviews: number;
  country: string;
  description: string;
  price: number;
  offerState: 'Sold Out' | 'Online' | 'Offline';
};

export default ({
  imageSrc,
  rating,
  reviews,
  country,
  description,
  price,
  offerState,
}: PriceCard) => {
  return (
    <div className="priceCard_container">
      {/* actual image */}
      <div className="picture_container">
        <img className="main_picture" src={imageSrc} />
        <div className="offer_state_label">{offerState}</div>
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
          ({reviews}) • {country}
        </span>
      </div>
      {description} <br />
      <strong> From ${price}</strong> / person
    </div>
  );
};
