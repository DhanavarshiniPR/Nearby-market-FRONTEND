import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Marketing.css";

const Marketing = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories"); // State for category
  const navigate = useNavigate();

  const handleSearch = () => {
    if (selectedCategory !== "All Categories") {
      navigate(`/${selectedCategory.toLowerCase()}`);
    } else {
      alert("Please select a category.");
    }
  };

  return (
    <div className="container">
      
      <nav className="navbar">
        <div className="logo">NEARBY-MARKET</div>

        <div className="search-bar">
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option>All Categories</option>
            <option>Cars</option>
            <option>House</option>
            <option>Gadgets</option>
            <option>Bikes</option>
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="auth-buttons">
          <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
          <button className="signup-btn" onClick={() => navigate("/signup")}>Sign Up</button>
          <button className="sell-btn" onClick={() => navigate("/sell")}>Sell</button>
        </div>
      </nav>

      <div className="main-nav-links">
        <a href="#" onClick={() => navigate("/")}>Home</a>
        <a href="#" onClick={() => navigate("/product")}>Product</a>
        <a href="#" onClick={() => navigate("/aboutus")}>About Us</a>
        <a href="#" onClick={() => navigate("/contactus")}>Contact</a>
        <a href="#" onClick={() => navigate("/offers")}>Offers</a>
      </div>

      <div className="nav-links-extra">
        <a href="#" onClick={() => navigate("/cars")}>Car</a>
        <a href="#" onClick={() => navigate("/bikes")}>Bike</a>
        <a href="#" onClick={() => navigate("/gadgets")}>Gadgets</a>
        <a href="#" onClick={() => navigate("/womensfashion")}>Women's Fashion</a>
        <a href="#" onClick={() => navigate("/house")}>House</a>
      </div>

      <div className="hero-section">
        <div className="hero-text">
          <h1>"Explore, Discover, and Buy Your Next Favorite - All in One Place!"</h1>
          <p>Get More for Less, Right at Your Fingertips!</p>
          <p>Buy Smart, Sell Fast – All in One Place!</p>
          <button className="cta-button" onClick={() => navigate("/guestpage")}>Be our guest →</button>
        </div>
      </div>

      
      
    </div>
  );
};

export default Marketing;
 
