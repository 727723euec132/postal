// Mongoose model for storing ML prediction inputs and results for audits.
import mongoose from "mongoose";

const predictionLogSchema = new mongoose.Schema(
  {
    parcelId: { type: mongoose.Schema.Types.ObjectId, ref: "Parcel", required: true },
    features: { type: Object, required: true },
    result: { type: Object, required: true },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const PredictionLog = mongoose.model("PredictionLog", predictionLogSchema);
