import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">LocalCommunityMarketPlace</div>

        <div className="search-bar">
          <input type="text" placeholder="Search for anything" />
          <select>
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home & Garden</option>
            <option>Sports</option>
          </select>
          <button>Search</button>
        </div>

        <div className="auth-buttons">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="signup-btn" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
          <button className="sell-btn">Sell</button>
        </div>
      </nav>

      {/* About Section */}
      <div className="about-content">
        <h1>Welcome to LocalCommunityMarketPlace</h1>
        <p>
          Our platform connects buyers and sellers, making it easier to trade products
          locally and globally. Whether you're looking to buy electronics, fashion, or
          home essentials, we've got you covered.
        </p>

        <div className="about-sections">
          <div className="about-card">
            <img src="https://cms.nvctrading.com/app/uploads/2017/12/online-shopping.jpg" alt="Buying" />
            <h2>Easy Buying</h2>
            <p>Browse thousands of products and find the best deals.</p>
          </div>

          <div className="about-card">
            <img src="https://www.savethestudent.org/uploads/things-to-sell-happy-woman.jpg" alt="Selling" />
            <h2>Seamless Selling</h2>
            <p>List your products and reach potential buyers effortlessly.</p>
          </div>

          <div className="about-card">
            <img src="https://www.wikihow.com/images/thumb/f/fe/Buy-and-Sell-Safely-Online-Step-12.jpg/v4-460px-Buy-and-Sell-Safely-Online-Step-12.jpg.webp" alt="Secure" />
            <h2>Secure Transactions</h2>
            <p>We ensure safe and secure transactions for all users.</p>
          </div>
        </div>

        <button className="explore-btn" onClick={() => navigate("/")}>
          Explore Marketplace
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
