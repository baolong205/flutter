const express = require("express");
const cors = require("cors");
const exploreRoutes = require("./routes/exploreRoutes");
const tourRoutes = require("./routes/tourRoutes");
const tourMoreRoutes = require("./routes/tourMoreRoutes");
const myTripsRoutes = require("./routes/myTripsRoutes");
const nextTripsRoutes = require("./routes/nextTripsRoutes");
const pastTripsRoutes = require("./routes/pastTripsRoutes");
const wishListRoutes = require("./routes/wishListRoutes");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Travel backend is running" });
});

app.use("/api/explore", exploreRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/tourMore", tourMoreRoutes);
app.use("/api/my-trips", myTripsRoutes);
app.use("/api/next-trips", nextTripsRoutes);
app.use("/api/past-trips", pastTripsRoutes);
app.use("/api/wish-list", wishListRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/payment", paymentRoutes);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});