/**
 * Purpose: Entry point for the Smart Postal Tracking & Delay Portal backend API.
 */
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const parcelRoutes = require("./routes/parcelRoutes");
const officeRoutes = require("./routes/officeRoutes");
const adminRoutes = require("./routes/adminRoutes");
const weatherRoutes = require("./routes/weatherRoutes");

dotenv.config();
connectDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    message: "Smart Postal Tracking & Delay Portal API is running."
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/parcels", parcelRoutes);
app.use("/api/offices", officeRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/weather", weatherRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
