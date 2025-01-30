import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sell.css";

const Sell = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    condition: "New",
    location: "",
    contact: "",
    delivery: "Pickup",
    images: [],
  });
  const [imagePreviews, setImagePreviews] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));

    setProduct({ ...product, images: [...product.images, ...files] });
    setImagePreviews([...imagePreviews, ...fileURLs]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productId = new Date().getTime(); // Unique ID based on timestamp
    localStorage.setItem(`product_${productId}`, JSON.stringify(product));
    setSubmitted(true); 
  };

  return (
    <div className="sell-container">
      <h1>Sell Your Product</h1>
      <p>List your item in just a few easy steps!</p>

      {submitted ? (
        <div className="success-message">
          <h2>🎉 Product Submitted Successfully!</h2>
          <p>Your product has been listed successfully. Thank you!</p>
          <button className="back-btn" onClick={() => navigate("/")}>Back to Home</button>
        </div>
      ) : (
        <form className="sell-form" onSubmit={handleSubmit}>
          <label>Product Title:</label>
          <input type="text" name="title" value={product.title} onChange={handleInputChange} required />

          <label>Category:</label>
          <select name="category" value={product.category} onChange={handleInputChange} required>
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home & Garden">Home & Garden</option>
            <option value="Sports">Sports</option>
          </select>

          <label>Price:</label>
          <input type="number" name="price" value={product.price} onChange={handleInputChange} required />

          <label>Condition:</label>
          <select name="condition" value={product.condition} onChange={handleInputChange}>
            <option value="New">New</option>
            <option value="Used">Used</option>
            <option value="Refurbished">Refurbished</option>
          </select>

          <label>Product Description:</label>
          <textarea name="description" value={product.description} onChange={handleInputChange} required></textarea>

          <label>Upload Images:</label>
          <input type="file" multiple accept="image/*" onChange={handleImageUpload} />

          <div className="image-preview">
            {imagePreviews.map((image, index) => (
              <img key={index} src={image} alt="Preview" />
            ))}
          </div>

          <label>Location:</label>
          <input type="text" name="location" value={product.location} onChange={handleInputChange} required />

          <label>Contact Info:</label>
          <input type="text" name="contact" value={product.contact} onChange={handleInputChange} required />

          <label>Delivery Options:</label>
          <select name="delivery" value={product.delivery} onChange={handleInputChange}>
            <option value="Pickup">Pickup</option>
            <option value="Shipping">Shipping</option>
            <option value="Both">Both</option>
          </select>

          <button type="submit" className="submit-btn">
            List Product
          </button>
        </form>
      )}
    </div>
  );
};

export default Sell;
