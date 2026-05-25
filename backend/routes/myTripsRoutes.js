const express = require("express");
const router = express.Router();
const data = require("../data");

router.get("/current", (req, res) => {
  res.json(data.currentTrips);
});

router.get("/detail/:id", (req, res) => {
  const id = Number(req.params.id);
  const trip = data.tripDetails.find((item) => item.id === id);

  if (!trip) {
    return res.status(404).json({ message: "Trip detail not found" });
  }

  res.json(trip);
});

module.exports = router;