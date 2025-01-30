import React, { useState } from "react";
import "./PaymentModal.css";

const PaymentModal = ({ car, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [upiId, setUpiId] = useState("");
  const [upiPin, setUpiPin] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [bankPassword, setBankPassword] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    if (paymentMethod === "google-pay" && upiId.trim() === "") {
      alert("Please enter your Google Pay UPI ID.");
      return;
    }
    if (paymentMethod === "net-banking" && (bankName.trim() === "" || accountNumber.trim() === "" || ifscCode.trim() === "" || bankPassword.trim() === "")) {
      alert("Please complete all Net Banking details.");
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    }, 2000);
  };

  return (
    <div className="modal-overlay">
      <div className="payment-modal">
        <h2>Complete Payment for {car.name}</h2>
        <p>Price: {car.price}</p>

        <label>Select Payment Method:</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="credit-card">Credit Card</option>
          <option value="upi">UPI</option>
          <option value="google-pay">Google Pay</option>
          <option value="net-banking">Net Banking</option>
          <option value="cod">Cash on Delivery</option>
        </select>

        {/* Google Pay UPI ID */}
        {paymentMethod === "google-pay" && (
          <div>
            <label>Enter Google Pay UPI ID:</label>
            <input
              type="text"
              placeholder="example@okhdfcbank"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
            <label>Enter UPI PIN:</label>
            <input
              type="password"
              placeholder="UPI PIN"
              value={upiPin}
              onChange={(e) => setUpiPin(e.target.value)}
            />
          </div>
        )}

        {paymentMethod === "net-banking" && (
          <div>
            <label>Bank Name:</label>
            <input
              type="text"
              placeholder="HDFC, ICICI, etc."
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />
            <label>Account Number:</label>
            <input
              type="text"
              placeholder="Account Number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
            <label>IFSC Code:</label>
            <input
              type="text"
              placeholder="IFSC Code"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
            />
            <label>Bank Password/PIN:</label>
            <input
              type="password"
              placeholder="Enter Bank Password"
              value={bankPassword}
              onChange={(e) => setBankPassword(e.target.value)}
            />
          </div>
        )}

        {isProcessing ? (
          <p>Processing payment...</p>
        ) : success ? (
          <p className="success-message">
            {paymentMethod === "cod"
              ? "Order Confirmed! Pay on delivery 🚚"
              : "Payment Successful! 🎉"}
          </p>
        ) : (
          <button className="pay-btn" onClick={handlePayment}>
            {paymentMethod === "cod" ? "Confirm Order" : "Pay Now"}
          </button>
        )}

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
