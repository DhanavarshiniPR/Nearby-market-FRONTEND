import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Product.css";  // Customize the CSS file as needed

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const allProducts = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("product_")) {
        const product = JSON.parse(localStorage.getItem(key));
        allProducts.push({ ...product, id: key.replace("product_", "") });
      }
    }
    setProducts(allProducts);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="product-list">
      <h1>Product Listings</h1>
      {products.length === 0 ? (
        <p>No products found!</p>
      ) : (
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.images.length ? product.images[0] : 'https://via.placeholder.com/150'}
                alt={product.title}
                className="product-image"
              />
              <div className="product-info">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <Link to={`/product/${product.id}`} className="view-detail-btn">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
