/**
 * Purpose: Parcel schema for tracking, prediction, and status history.
 */
const mongoose = require("mongoose");

const parcelSchema = new mongoose.Schema(
  {
    trackingId: { type: String, required: true, unique: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    currentLocation: { type: String, required: true },
    status: { type: String, required: true },
    assignedOfficer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    history: [
      {
        location: String,
        status: String,
        timestamp: Date,
        note: String
      }
    ],
    prediction: {
      delayProbability: Number,
      estimatedHours: Number,
      reason: String
    },
    weatherData: {
      location: String,
      description: String,
      temperature: Number,
      impact: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Parcel", parcelSchema);
