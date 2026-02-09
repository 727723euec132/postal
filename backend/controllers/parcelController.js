/**
 * Purpose: Parcel controller to manage tracking, updates, and ML prediction.
 */
const axios = require("axios");
const Parcel = require("../models/Parcel");
const PredictionLog = require("../models/PredictionLog");

const createParcel = async (req, res) => {
  const parcel = await Parcel.create(req.body);
  return res.status(201).json(parcel);
};

const updateParcel = async (req, res) => {
  const parcel = await Parcel.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  return res.json(parcel);
};

const assignParcel = async (req, res) => {
  const { officerId } = req.body;
  const parcel = await Parcel.findByIdAndUpdate(
    req.params.id,
    { assignedOfficer: officerId },
    { new: true }
  );
  return res.json(parcel);
};

const trackParcel = async (req, res) => {
  const parcel = await Parcel.findOne({ trackingId: req.params.trackingId });
  if (!parcel) {
    return res.status(404).json({ message: "Parcel not found" });
  }

  return res.json(parcel);
};

const predictDelay = async (req, res) => {
  const parcel = await Parcel.findOne({ trackingId: req.params.trackingId });
  if (!parcel) {
    return res.status(404).json({ message: "Parcel not found" });
  }

  const payload = req.body;
  const mlResponse = await axios.post(
    `${process.env.ML_SERVICE_URL}/predict`,
    payload
  );

  const prediction = mlResponse.data;
  parcel.prediction = prediction;
  await parcel.save();

  await PredictionLog.create({
    parcelId: parcel._id,
    features: payload,
    result: prediction,
    timestamp: new Date()
  });

  return res.json({
    parcel,
    prediction
  });
};

const updateWeatherImpact = async (req, res) => {
  const { trackingId } = req.params;
  const parcel = await Parcel.findOne({ trackingId });
  if (!parcel) {
    return res.status(404).json({ message: "Parcel not found" });
  }

  const { location } = req.body;
  const weatherResponse = await axios.get(
    `${process.env.WEATHER_API_URL}?q=${location}&appid=${process.env.WEATHER_API_KEY}&units=metric`
  );

  const weather = weatherResponse.data;
  const description = weather.weather?.[0]?.description || "clear";
  const impact = description.includes("rain") || description.includes("storm")
    ? "High delay risk"
    : "Normal operations";

  parcel.weatherData = {
    location,
    description,
    temperature: weather.main?.temp,
    impact
  };
  await parcel.save();

  return res.json(parcel);
};

module.exports = {
  createParcel,
  updateParcel,
  assignParcel,
  trackParcel,
  predictDelay,
  updateWeatherImpact
};
