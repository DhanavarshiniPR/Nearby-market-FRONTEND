import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PaymentModal from "./PaymentModal"; 
import "./Offers.css";

const Offers = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(3600); 
  const [isNavOpen, setNavOpen] = useState(false); 
  const [isModalOpen, setModalOpen] = useState(false); 
  const [selectedCar, setSelectedCar] = useState(null); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleBuyNow = (car) => {
    setSelectedCar(car); 
    setModalOpen(true); 
  };

  const handleCloseModal = () => {
    setModalOpen(false); 
    setSelectedCar(null); 
  };

  return (
    <div className="offers-container">
    
      <button className="nav-toggle-btn" onClick={() => setNavOpen(!isNavOpen)}>
        ☰ Menu
      </button>

      {isNavOpen && (
        <div className="modal-nav">
          <div className="modal-links">
            <a onClick={() => navigate("/")}>Home</a>
            <a onClick={() => navigate("/aboutus")}>About Us</a>
            <a onClick={() => navigate("/contactus")}>Contact</a>
            <a onClick={() => navigate("/offers")}>Offers</a>
            <a onClick={() => navigate("/cars")}>Cars</a>
            <a onClick={() => navigate("/bikes")}>Bikes</a>
            <a onClick={() => navigate("/gadgets")}>Gadgets</a>
            <a onClick={() => navigate("/womensfashion")}>Women's Fashion</a>
            <a onClick={() => navigate("/house")}>House</a>
          </div>
        </div>
      )}

      <nav className="navbar">
        <div className="logo">LocalCommunityMarketPlace</div>

      

        <div className="auth-buttons">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="signup-btn" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
          <button className="sell-btn" onClick={() => navigate("/sell")}>Sell</button>

        </div>
      </nav>

      <div className="offer-banner">
        <h1> Limited Time Deals! Up to 70% OFF </h1>
        <p>Hurry! Grab your favorite products before the time runs out.</p>
        <div className="countdown">⏳ {formatTime(timeLeft)}</div>
      </div>

      <div className="featured-products">
        <h2> Best Deals for You</h2>
        <div className="product-grid">
        
          <div className="product-card">
            <img
              src="https://variety.com/wp-content/uploads/2024/12/ATT-Smartwatch-Featured.jpg?w=1000&h=667&crop=1&resize=1000%2C667"
              alt="Product 1"
            />
            <p>Smart Watch - 40% OFF</p>
            <button onClick={() => handleBuyNow({ name: "Smart Watch", price: "$199" })}>Buy Now</button>
          </div>

          <div className="product-card">
            <img
              src="https://i.pcmag.com/imagery/articles/06NG75IcnumKExPhsncVoa4-2.fit_lim.size_1600x900.v1736792994.png"
              alt="Product 2"
            />
            <p>Wireless Earbuds - 50% OFF</p>
            <button onClick={() => handleBuyNow({ name: "Wireless Earbuds", price: "$99" })}>Buy Now</button>
          </div>

          <div className="product-card">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/wh-2-23-hoka-65d8f75979267.png?crop=0.5xw:1xh;center,top&resize=1024:*"
              alt="Product 3"
            />
            <p>Running Shoes - 30% OFF</p>
            <button onClick={() => handleBuyNow({ name: "Running Shoes", price: "$129" })}>Buy Now</button>
          </div>
        </div>
      </div>

      <button className="back-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>

      {isModalOpen && (
        <PaymentModal car={selectedCar} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Offers;
