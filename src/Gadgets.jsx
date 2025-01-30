import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PaymentModal from "./PaymentModal";
import "./Gadgets.css";

const Gadgets = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [gadgets, setGadgets] = useState([]);  // Start with an empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGadget, setSelectedGadget] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGadgets = async () => {
      setLoading(true);
      try {
        // Fixed the double slash in the URL
        const response = await axios.get("https://nearby-market-backend.onrender.com/Gadgets");
        const gadgetProducts = response.data.filter((product) => product.category === "Gadgets");
        setGadgets(gadgetProducts);  // Directly set the fetched products
      } catch (err) {
        console.error("Error fetching gadgets:", err);
        setError("Failed to load gadgets. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchGadgets();
  }, []);

  const handleBuyNow = (gadget) => {
    setSelectedGadget(gadget);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="gadgets-container">
      <button className="nav-toggle-btn" onClick={() => setNavOpen(!isNavOpen)}>☰ Menu</button>

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

      <h1>Available Gadgets for Sale</h1>
      {loading && <p>Loading gadgets...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="gadgets-grid">
        {gadgets.length > 0 ? (
          gadgets.map((gadget) => (
            <div key={gadget._id} className="gadget-card"> {/* Use _id as key */}
              <img src={gadget.image || "default-gadget-image.jpg"} alt={gadget.title} />
              <h3>{gadget.title}</h3>
              <p>{gadget.price}</p>
              <button className="buy-btn" onClick={() => handleBuyNow(gadget)}>Buy Now</button>
            </div>
          ))
        ) : (
          !loading && <p>No gadgets available at the moment.</p>
        )}
      </div>

      {isModalOpen && <PaymentModal gadget={selectedGadget} onClose={handleCloseModal} />}
    </div>
  );
};

export default Gadgets;
