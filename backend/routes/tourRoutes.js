const express = require("express");
const router = express.Router();

const data = require("../data");
const Tour = require("../models/tourModel");

router.get("/", (req, res) => {
  res.json(data.tours);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const tour = data.tours.find((item) => item.id === id);

  if (!tour) {
    return res.status(404).json({ message: "Tour not found" });
  }

  res.json(tour);
});

router.post("/", (req, res) => {
  const { image, title, date, days, price, liked, saved, likes } = req.body;

  if (!image || !title || !date || !days || price == null) {
    return res.status(400).json({
      message: "image, title, date, days, price are required"
    });
  }

  const newTour = new Tour({
    id: data.tours.length > 0 ? data.tours[data.tours.length - 1].id + 1 : 1,
    image,
    title,
    date,
    days,
    price,
    liked,
    saved,
    likes
  });

  data.tours.push(newTour);

  res.status(201).json({
    message: "Tour created successfully",
    data: newTour
  });
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = data.tours.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Tour not found" });
  }

  data.tours[index] = {
    ...data.tours[index],
    ...req.body,
    id
  };

  res.json({
    message: "Tour updated successfully",
    data: data.tours[index]
  });
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = data.tours.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Tour not found" });
  }

  const deletedTour = data.tours[index];
  data.tours.splice(index, 1);

  res.json({
    message: "Tour deleted successfully",
    data: deletedTour
  });
});

router.patch("/:id/like", (req, res) => {
  const id = Number(req.params.id);
  const tour = data.tours.find((item) => item.id === id);

  if (!tour) {
    return res.status(404).json({ message: "Tour not found" });
  }

  tour.liked = !tour.liked;
  res.json({
    message: "Tour like toggled successfully",
    data: tour
  });
});

router.patch("/:id/save", (req, res) => {
  const id = Number(req.params.id);
  const tour = data.tours.find((item) => item.id === id);

  if (!tour) {
    return res.status(404).json({ message: "Tour not found" });
  }

  tour.saved = !tour.saved;
  res.json({
    message: "Tour save toggled successfully",
    data: tour
  });
});

module.exports = router;