const express = require("express");
const router = express.Router();
const data = require("../data");

router.get("/", (req, res) => {
  res.json(data.wishListTrips || []);
});

router.patch("/:id/like", (req, res) => {
  const id = Number(req.params.id);
  const trip = (data.wishListTrips || []).find((item) => item.id === id);

  if (!trip) {
    return res.status(404).json({ message: "Wish list trip not found" });
  }

  trip.liked = !trip.liked;

  return res.json({
    message: "Wish list like toggled successfully",
    data: trip
  });
});

module.exports = router;