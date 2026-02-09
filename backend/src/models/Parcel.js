// Mongoose model for tracking parcel lifecycle, prediction, and weather metadata.
import mongoose from "mongoose";

const parcelSchema = new mongoose.Schema(
  {
    trackingId: { type: String, required: true, unique: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    currentLocation: { type: String, required: true },
    status: {
      type: String,
      enum: ["registered", "in_transit", "at_office", "out_for_delivery", "delivered"],
      default: "registered",
    },
    assignedOfficer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    history: [
      {
        location: String,
        timestamp: Date,
        note: String,
      },
    ],
    prediction: {
      delayProbability: { type: Number, default: 0 },
      estimatedHours: { type: Number, default: 0 },
      reason: { type: String },
    },
    weatherData: {
      summary: String,
      temperature: Number,
      impact: String,
    },
  },
  { timestamps: true }
);

export const Parcel = mongoose.model("Parcel", parcelSchema);
