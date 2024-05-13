import React from 'react';
import axios from 'axios';

const Card = ({ cardData }) => {
  if (!cardData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <h2>{cardData.name}</h2>
      <img src={cardData.image_uris.normal} alt={cardData.name} />
      <p>{cardData.mana_cost}</p>
      <p>{cardData.type_line}</p>
      {/* Add more properties as needed */}
    </div>
  );
};

export default Card;