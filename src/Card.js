import React from 'react';

const Card = ({ cardData }) => {
  if (!cardData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <img
        src={cardData.image_uris.normal}
        alt={cardData.name}
        style={{
          width: '100%', // Set width to 100% of the card container
          height: 'auto', // Allow height to adjust based on image aspect ratio
        }}
      />
      {/* Removed the <h2> element for card name */}
      {/* Add more properties as needed for image display */}
    </div>
  );
};

export default Card;