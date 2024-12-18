import React from 'react';
import '../styles/ClassCard.css';

const ClassCard = ({ title, description, price, image }) => {
  return (
    <div className="class-card">
      <img src={image} alt={title} className="class-image" />
      <div className="class-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="price">{price}</span>
        <div className="card-buttons">
          <button className="buy-button">Buy Now</button>
          <button className="learn-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
