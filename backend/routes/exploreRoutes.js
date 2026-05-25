const express = require("express");
const router = express.Router();
const data = require("../data");

router.get("/", (req, res) => {
  res.json({
    banners: data.banners,
    journeys: data.journeys,
    guides: data.guides,
    experiences: data.experiences,
    tours: data.tours,
    news: data.news,
  });
});

module.exports = router;