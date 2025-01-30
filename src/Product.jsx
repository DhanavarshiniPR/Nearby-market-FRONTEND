import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Product.css'; 

const Product = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const productDetails = {
    1: { name: 'Smartphone', description: 'A high-quality smartphone with amazing features.', price: '$499', image: 'https://via.placeholder.com/300' },
    2: { name: 'Laptop', description: 'A powerful laptop for all your needs.', price: '$899', image: 'https://via.placeholder.com/300' },
    3: { name: 'Headphones', description: 'Noise-cancelling headphones with premium sound quality.', price: '$199', image: 'https://via.placeholder.com/300' },
    4: { name: 'Smartwatch', description: 'A sleek smartwatch with fitness tracking features.', price: '$299', image: 'https://via.placeholder.com/300' },
  };

  const product = productDetails[id]; 

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="price">{product.price}</p>
        </div>
      </div>

      <button onClick={() => navigate("/Product")}>Back to Products</button>
    </div>
  );
};

export default Product;
