import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'; // Assurez-vous d'importer votre fichier CSS

const ProductItem = ({ imageUrl, productId, productName, price }) => {
  return (
    <div className="product-item">
      <Link to={`/vetement/${productId}`}>
        <img src={imageUrl} alt={productName} />
      </Link>
      <h3>{productName}</h3>
      <p>${price}</p>
    </div>
  );
};

const Products = () => {
  const productList = [
    {
      id: 1,
      imageUrl: 'path/to/image1.jpg',
      name: 'Embroided Soorsucker Shirt',
      price: 99,
    },
    {
      id: 2,
      imageUrl: 'path/to/image2.jpg',
      name: 'Basic Slim Fit T-Shirt',
      price: 99,
    },
    {
      id: 3,
      imageUrl: 'path/to/image3.jpg',
      name: 'Blurred Print T-Shirt',
      price: 99,
    },
  ];

  return (
    <div className="products-container">
      <h2>NEW THIS WEEK (50)</h2>
      <div className="products">
        {productList.map((product) => (
          <ProductItem
            key={product.id}
            imageUrl={product.imageUrl}
            productId={product.id}
            productName={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;