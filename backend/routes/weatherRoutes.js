/**
 * Purpose: Weather routes to fetch live weather data for tracking.
 */
const express = require("express");
const { fetchWeather } = require("../controllers/weatherController");

const router = express.Router();

router.get("/", fetchWeather);

module.exports = router;
