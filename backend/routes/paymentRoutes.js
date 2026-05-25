const express = require("express");
const router = express.Router();
const { checkoutData } = require("../data");

// GET /api/payment/preview
router.get("/preview", (req, res) => {
  try {
    res.json(checkoutData);
  } catch (error) {
    console.error("Error fetching checkout data:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/payment/process
router.post("/process", (req, res) => {
  try {
    const { cardNumber, cardName, expDate, cvv } = req.body;
    
    if (!cardNumber || !cardName) {
      return res.status(400).json({ message: "Invalid payment information" });
    }

    // In a real app, integrate with Stripe, PayPal, etc.
    res.json({ message: "Payment processed successfully!" });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
