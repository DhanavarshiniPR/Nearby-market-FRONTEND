import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css"; // Customize as needed

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the product using the ID from localStorage
    const storedProduct = localStorage.getItem(`product_${id}`);
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail">
        <img
          src={product.images.length ? product.images[0] : 'https://via.placeholder.com/300'}
          alt={product.title}
          className="product-image"
        />
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Condition:</strong> {product.condition}</p>
          <p><strong>Location:</strong> {product.location}</p>
          <p><strong>Contact Info:</strong> {product.contact}</p>
          <p><strong>Delivery Options:</strong> {product.delivery}</p>
        </div>
      </div>

      <button onClick={() => navigate("/products")}>Back to Products</button>
    </div>
  );
};

export default ProductDetail;
