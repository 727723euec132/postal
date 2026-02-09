/**
 * Purpose: Prediction log schema to audit ML predictions and inputs.
 */
const mongoose = require("mongoose");

const predictionLogSchema = new mongoose.Schema(
  {
    parcelId: { type: mongoose.Schema.Types.ObjectId, ref: "Parcel" },
    features: {
      weather: String,
      distance: Number,
      route: String,
      weekday: String,
      historicalDelays: Number
    },
    result: {
      delayProbability: Number,
      estimatedHours: Number
    },
    timestamp: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model("PredictionLog", predictionLogSchema);
