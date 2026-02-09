// Entry point for the Smart Postal Tracking & Delay Portal backend server.
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { authRouter } from "./src/routes/auth.js";
import { officeRouter } from "./src/routes/offices.js";
import { parcelRouter } from "./src/routes/parcels.js";
import { predictionRouter } from "./src/routes/predictions.js";
import { userRouter } from "./src/routes/users.js";
import { weatherRouter } from "./src/routes/weather.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "postal-tracking" });
});

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/offices", officeRouter);
app.use("/api/parcels", parcelRouter);
app.use("/api/predictions", predictionRouter);
app.use("/api/weather", weatherRouter);

const { MONGODB_URI = "mongodb://127.0.0.1:27017/postal" } = process.env;
const { PORT = 5000 } = process.env;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Mongo connection failed:", error.message);
    process.exit(1);
  });
