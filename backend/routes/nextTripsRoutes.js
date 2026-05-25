const express = require("express");
const router = express.Router();
const data = require("../data");

router.get("/", (req, res) => {
  res.json(data.nextTrips);
});

router.get("/detail/:id", (req, res) => {
  const id = Number(req.params.id);

  const trip = data.nextTripDetails.find((t) => t.id === id);

  if (!trip) {
    return res.status(404).json({ message: "Not found" });
  }

  res.json(trip);
});

module.exports = router;