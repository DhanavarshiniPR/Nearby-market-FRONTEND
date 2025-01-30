import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making API requests
import "./SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password.length <= 6) {
      setError("Password must be more than 6 characters.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/signup", {
        username,
        email,
        password,
      });

      alert("Sign Up Successful");
      navigate("/login"); 
    } catch (err) {
     
      setError("Error: " + (err.response ? err.response.data.message : "Signup failed"));
    }
  };

  return (
    <div className="container">
     
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
          <button className="sell-btn">Sell</button>
        </div>
      </nav>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Offers</a>
      </div>

      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>

      <footer className="footer">
        <p>&copy; 2025 LocalCommunityMarketPlace. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
