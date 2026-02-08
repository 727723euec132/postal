import express from "express";
import { Parcel } from "../models/Parcel.js";

export const parcelRouter = express.Router();

parcelRouter.get("/", async (_req, res) => {
  const parcels = await Parcel.find().populate("office").sort({ createdAt: -1 });
  res.json(parcels);
});

parcelRouter.post("/", async (req, res) => {
  const parcel = await Parcel.create(req.body);
  res.status(201).json(parcel);
});
