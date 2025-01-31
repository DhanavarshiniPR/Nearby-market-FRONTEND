import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API requests
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState(""); // Changed from username to email
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://nearby-market-backend-1.onrender.com/login", {
        email, // Send email instead of username
        password,
      });

      // If login is successful, store token and navigate
      localStorage.setItem("token", response.data.token); // Store JWT token in localStorage
      alert("Login Successful");
      navigate("/"); // Redirect to home or any authenticated route
    } catch (err) {
      // Handle errors from backend (invalid credentials, etc.)
      setError("Invalid credentials. Please try again.");
    }
  };

  const handleSignUpRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="container">
      <nav className="navbar purple-background">
        <div className="logo">LocalCommunityMarketPlace</div>
       
        <div className="auth-buttons">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="sell-btn" onClick={() => navigate("/sell")}>Sell</button>

        </div>
      </nav>

      
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
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
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="signup-prompt">
          <p>
            Don't have an account?{" "}
            <span onClick={handleSignUpRedirect}>Sign Up</span>
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Login;
