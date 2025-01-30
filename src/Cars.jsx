import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Cars.css";

const carData = [
  { id: 1, name: "Tesla Model S", price: "$80,000", image: "https://media.autoexpress.co.uk/image/private/s--_4ro-Cun--/f_auto,t_primary-image-desktop@1/v1689934611/autoexpress/2023/07/Tesla%20Model%20S%20Plaid%20001_yujihf.jpg" },
  { id: 2, name: "BMW X5", price: "$70,000", image: "https://images.moneycontrol.com/static-mcnews/2024/03/Holding-image-1-770x433.jpg?impolicy=website&width=770&height=431" },
  { id: 3, name: "Mercedes-Benz C-Class", price: "$65,000", image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/C-Class/10858/Mercedes-Benz-C-Class-C-200/1720160050225/front-left-side-47.jpg?tr=w-664" },
  { id: 4, name: "Audi A6", price: "$60,000", image: "https://upload.wikimedia.org/wikipedia/commons/8/82/2018_Audi_A6_Sport_40_TDi_S-A_2.0.jpg" },
];

const Cars = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [cars, setCars] = useState(carData); // Use carData initially
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://nearby-market-backend.onrender.com/products");
        const carProducts = response.data.filter((product) => product.category === "Cars");
        setCars(carProducts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching cars:", err);
        setError("Failed to load cars. Please try again.");
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="car-container">
      {/* Toggle Button for Navigation */}
      <button className="nav-toggle-btn" onClick={() => setNavOpen(!isNavOpen)}>
        ☰ Menu
      </button>

      {/* Modal Navigation */}
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

      {/* Cars Display Section */}
      <div className="car-content">
        <h1>Available Cars for Sale 🚗</h1>

        {loading && <p>Loading cars...</p>}
        {error && <p className="error-message">{error}</p>}

        <div className="car-grid">
          {cars.length > 0 ? (
            cars.map((car) => (
              <div key={car.id} className="car-card">
                <img src={car.image} alt={car.name} />
                <h3>{car.name}</h3>
                <p>{car.price}</p>
                <button className="buy-btn">Buy Now</button>
              </div>
            ))
          ) : (
            !loading && <p>No cars available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cars;
