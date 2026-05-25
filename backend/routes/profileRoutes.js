const express = require("express");
const router = express.Router();
const { profileData } = require("../data");

router.get("/", (req, res) => {
  try {
    res.json(profileData);
  } catch (error) {
    console.error("Error fetching profile data:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
