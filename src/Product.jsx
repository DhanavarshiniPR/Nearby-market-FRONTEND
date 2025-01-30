import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Product.css';

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all the products from localStorage
    const allProducts = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("product_")) {
        const product = JSON.parse(localStorage.getItem(key));
        allProducts.push({ id: key.split('_')[1], ...product });
      }
    }
    setProducts(allProducts);
  }, []);  // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div className="products-container">
      <button className="home-button" onClick={() => navigate("/")}>Home</button>

      <h1>Our Products</h1>
      <div className="products-list">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => navigate(`/product/${product.id}`)}  // Navigate to Product Detail page
            >
             
              <h2>{product.title}</h2>
              <p>{product.category}</p>
              <p className="price">${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Product;
