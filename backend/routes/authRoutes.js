const express = require("express");
const router = express.Router();
const admin = require("../firebaseAdmin");

router.post("/firebase", async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({
      message: "Token is required",
    });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);

    const user = {
      uid: decodedToken.uid,
      email: decodedToken.email,
      name: decodedToken.name || "",
      picture: decodedToken.picture || "",
    };

    return res.json({
      message: "Firebase login success",
      user,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
});

module.exports = router;