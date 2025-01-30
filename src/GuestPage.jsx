import React from "react";
import { useNavigate } from "react-router-dom";
import "./GuestPage.css";

const GuestPage = () => {
  const navigate = useNavigate();

  return (
    <div className="guest-page">
      <header>
        <h1>Exclusive Guest-Only Offers</h1>
        <p>Unlock amazing deals and discounts by signing up today!</p>
      </header>

      {/* Exclusive Deals Section */}
      <section className="exclusive-deals">
        <h2>Limited Time Offers</h2>
        <div className="deals-container">
          <div className="offer-card">
            <img src="https://apisap.fabindia.com/medias/hp-sec1-mob-27jan25-06.webp?context=bWFzdGVyfGltYWdlc3wzNDMzOHxpbWFnZS93ZWJwfGFHSXpMMmczWmk4NE1UZzBOVEkyTlRVMk16WTNPQzlvY0MxelpXTXhMVzF2WWkweU4ycGhiakkxTFRBMkxuZGxZbkF8ZTNkNGY1OGVmZjIxMWFjMTQ2YWRhYWUyMjY0NzY3MGJkZmM2NjMxMmE4OGY0NDRhODBhYzA4YzVjNGVlZTE5Nw" />
            <p>Save 50% on Home Essentials</p>
          </div>
          <div className="offer-card">
            <img src="https://img.freepik.com/premium-vector/big-sale-special-offer-banner-big-sale-online-shopping-vector-illustration_113494-65.jpg?w=740" alt="Fashion Accessories Offer" />
            <p>Get 20% off Fashion Accessories</p>
          </div>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="trending-categories">
        <h2>Trending Categories</h2>
        <div className="categories-container">
          <div className="category-card" style={{ backgroundImage: "url(https://cdn.shopify.com/s/files/1/0070/7032/articles/trending-products_7ed711c4-206c-4b41-a321-711785f3a917.png?v=1729280622&originalWidth=1848&originalHeight=782&width=1400)" }}>Electronics</div>
          <div className="category-card" style={{ backgroundImage: "url(https://www.cbd.int/sites/default/files/2021-06/clothes_1.jpg)" }}>Fashion</div>
          <div className="category-card" style={{ backgroundImage: "url(https://media.istockphoto.com/id/539823792/photo/market-for-sale-plants-many-plants-in-pots.jpg?s=612x612&w=0&k=20&c=PxHWUOLuw6JhatfoxptHRA8EFj0SmlpBlisRYJX5So8=)" }}>Home & Garden</div>
        </div>
      </section>

      {/* Popular Products Carousel */}
      <section className="popular-products">
        <h2>Popular Products</h2>
        <div className="product-carousel">
          <img src="https://www.cbd.int/sites/default/files/2021-06/clothes_1.jpg" alt="Popular Product 1" />
          <img src="https://techresearchonline.com/wp-content/uploads/2022/06/Innovative-and-Futuristic-Tech-gadgets-that-will-make-you-Speech-less_blog-banner-1.webp" alt="Popular Product 2" />
          <img src="https://images.ctfassets.net/vrhb2fq65ak2/1JFqQBxT8dut8Keph2A3dT/eb6752187cbdeab707a3b92dc6b99f79/copertina_homepage_ruotedasogno_1920x1014_29-01-2024.jpg?q=80" alt="Popular Product 3" />
        </div>
      </section>

      {/* Signup Call-to-Action */}
      <section className="signup-cta">
        <h3>Sign up for more exclusive deals!</h3>
        <button onClick={() => navigate("/signup")}>Sign Up Now</button>
      </section>
    </div>
  );
};

export default GuestPage;
