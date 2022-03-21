import React from 'react';
import PriceCard from '../PriceCard/PriceCard';
import './MainContent.css';

export default () => {
  return (
    <main>
      <div>Image collage should be here</div>
      <h1>Online Experiences!</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home. Join unique interactive activities led by
        one-of-a-kind hosts—all without leaving home. Join unique interactive
        activities led by one-of-a-kind hosts—all without leaving home.
      </p>
      <PriceCard
        imageSrc={
          'https://www.rd.com/wp-content/uploads/2020/07/00_OPENER-Final.jpg'
        }
        rating={5}
        price={136}
        offerState={'Sold Out'}
        reviews={2}
        country={'UAE'}
        description={'Cats!'}
      />
    </main>
  );
};
