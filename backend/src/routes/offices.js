import express from "express";
import { Office } from "../models/Office.js";

export const officeRouter = express.Router();

officeRouter.get("/", async (_req, res) => {
  const offices = await Office.find().sort({ createdAt: -1 });
  res.json(offices);
});

officeRouter.post("/", async (req, res) => {
  const office = await Office.create(req.body);
  res.status(201).json(office);
});
