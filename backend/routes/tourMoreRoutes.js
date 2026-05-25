const express = require("express");
const router = express.Router();
const data = require("../data");

router.get("/", (req, res) => {
  const q = (req.query.q || "").toLowerCase().trim();

  let tours = data.tourMoreTours;

  if (q) {
    tours = tours.filter((tour) => {
      return (
        tour.from.toLowerCase().includes(q) ||
        tour.to.toLowerCase().includes(q)
      );
    });
  }

  res.json({
    banner: data.tourMoreBanner,
    tours
  });
});

router.get("/banner", (req, res) => {
  res.json(data.tourMoreBanner);
});

router.get("/tours", (req, res) => {
  const q = (req.query.q || "").toLowerCase().trim();

  let tours = data.tourMoreTours;

  if (q) {
    tours = tours.filter((tour) => {
      return (
        tour.from.toLowerCase().includes(q) ||
        tour.to.toLowerCase().includes(q)
      );
    });
  }

  res.json(tours);
});

router.get("/tours/:id", (req, res) => {
  const id = Number(req.params.id);
  const tour = data.tourMoreTours.find((item) => item.id === id);

  if (!tour) {
    return res.status(404).json({ message: "Tour not found" });
  }

  res.json(tour);
});

router.patch("/tours/:id/favorite", (req, res) => {
  const id = Number(req.params.id);
  const tour = data.tourMoreTours.find((item) => item.id === id);

  if (!tour) {
    return res.status(404).json({ message: "Tour not found" });
  }

  tour.favorite = !tour.favorite;

  res.json({
    message: "Favorite toggled successfully",
    data: tour
  });
});

module.exports = router;