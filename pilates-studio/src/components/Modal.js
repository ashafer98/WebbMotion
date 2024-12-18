// In Modal.js
import React from 'react';

function Modal({ onClose, content }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>X</button>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
        <button className="modal-buy-button">Buy Now</button>
      </div>
    </div>
  );
}

export default Modal;
