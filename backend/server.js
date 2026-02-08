import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { delayRouter } from "./src/routes/delays.js";
import { officeRouter } from "./src/routes/offices.js";
import { parcelRouter } from "./src/routes/parcels.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/offices", officeRouter);
app.use("/api/parcels", parcelRouter);
app.use("/api/delays", delayRouter);

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
