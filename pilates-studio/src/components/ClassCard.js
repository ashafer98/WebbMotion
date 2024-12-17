import React from 'react';
import '../styles/ClassCard.css'; // Ensure path is correct

function ClassCard({ title, description, price, onBuy, onLearnMore }) {
  return (
    <div className="class-card">
      <h3 className="class-card-title">{title}</h3>
      <p className="class-card-description">{description}</p>
      <div className="class-card-footer">
        <span className="class-card-price">${price}</span>
        <div className="class-card-buttons">
          <button className="class-card-buy-button" onClick={onBuy}>
            Buy Now
          </button>
          <button className="class-card-learn-more-button" onClick={onLearnMore}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClassCard;
