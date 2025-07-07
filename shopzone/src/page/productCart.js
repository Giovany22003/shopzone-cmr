import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const ProductCart = ({ product, AjoutAuPanier, AjoutFavorites }) => {
  const [Survoler, setSurvoler] = useState(false);
    const navigate = useNavigate(); // Hook pour la navigation
    const handleAddToCart = () => {
    AjoutAuPanier(product); // Ajoute le produit au panier
    navigate('/panier'); // Redirige vers la page panier
  };


  return ( 
 
    <div
      className=" product-card"
      onMouseEnter={() => setSurvoler(true)}
      onMouseLeave={() => setSurvoler(false)}
        style={{ position: 'relative', margin: '20px' }}
    >
      <img className=""
        src={product.image} alt='#'/>
      <h3>{product.name}</h3>
      <p>{product.price} XFA</p>
      {Survoler && (
        <div className="hover-info" >
          <p>Taille: {product.sizes.join(', ')}</p>
          <button  onClick={handleAddToCart}>Panier</button>

          <button onClick={() => AjoutFavorites(product)}>💖</button>
       
        </div>
      )}
    </div>
  
  );
};

export default ProductCart;