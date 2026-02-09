// Routes for weather lookups and impact reporting.
import express from "express";
import { getWeatherImpact } from "../controllers/weatherController.js";

export const weatherRouter = express.Router();

weatherRouter.get("/", getWeatherImpact);
