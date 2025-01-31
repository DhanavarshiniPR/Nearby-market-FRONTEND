import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Password validation
    if (password.length <= 6) {
      setError("Password must be more than 6 characters.");
      return;
    }

    try {
      const response = await axios.post("https://nearby-market-backend-1.onrender.com/signup", {
        username,
        email,
        password,
      });

      // Handle success
      alert("Sign Up Successful");
      navigate("/login");  // Navigate to login page after successful signup
    } catch (err) {
      // Handle error
      setError("Error: " + (err.response ? err.response.data.message : "Signup failed"));
    }
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">LocalCommunityMarketPlace</div>
        <div className="auth-buttons">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="sell-btn" onClick={() => navigate("/sell")}>
            Sell
          </button>
        </div>
      </nav>

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
    </div>
  );
};

export default SignUp;
