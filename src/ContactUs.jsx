import React from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUs.css";

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-container">
      {/* Navbar */}
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

      {/* Contact Section */}
      <div className="contact-content">
        <h1>Get in Touch</h1>
        <p>Have a question? We're here to help!</p>

        {/* Contact Form */}
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Details</h2>
          <p>📍 123 Market Street, City, Country</p>
          <p>📞 +123 456 7890</p>
          <p>📧 support@marketplace.com</p>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <details>
            <summary>How do I sell a product?</summary>
            <p>Simply sign up, go to the 'Sell' page, and list your product.</p>
          </details>
          <details>
            <summary>What payment methods do you accept?</summary>
            <p>We accept credit/debit cards, PayPal, and bank transfers.</p>
          </details>
          <details>
            <summary>Can I return a product?</summary>
            <p>Yes, we have a 7-day return policy for most items.</p>
          </details>
        </div>

        <button className="back-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
