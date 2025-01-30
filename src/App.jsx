import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marketing from "./Marketing";
import Login from "./Login";
import SignUp from "./SignUp";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Offers from "./Offers";
import Sell from "./Sell";
import Cars from "./Cars";
import Bike from "./Bike"
import Gadgets from "./Gadgets";
import WomensFashion from "./WomensFashion";
import House from "./House";
import GuestPage from './GuestPage';
import Product from "./Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Marketing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/bikes" element={<Bike/>} />
        <Route path="/gadgets" element={<Gadgets/>} />
        <Route path="/womensfashion" element={<WomensFashion/>} />
        <Route path="/house" element={<House/>} />
        <Route path="/guestpage" element={<GuestPage/>} />
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </Router>
  );
}

export default App;
