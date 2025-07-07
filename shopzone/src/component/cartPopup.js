// src/components/CartPopup.js
import React from 'react';

const CartPopup = ({ cartItems, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Articles dans votre panier</h2>
        {cartItems.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        )}
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default CartPopup;