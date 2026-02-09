// Controllers for delay prediction requests and analytics logging.
import { Parcel } from "../models/Parcel.js";
import { PredictionLog } from "../models/PredictionLog.js";
import { requestDelayPrediction } from "../services/mlService.js";

export const predictDelay = async (req, res) => {
  const { parcelId, features } = req.body;
  const parcel = await Parcel.findById(parcelId);
  if (!parcel) {
    return res.status(404).json({ message: "Parcel not found." });
  }

  const result = await requestDelayPrediction(features);
  parcel.prediction = {
    delayProbability: result.delay_probability,
    estimatedHours: result.estimated_hours,
    reason: result.reason,
  };
  await parcel.save();
  await PredictionLog.create({ parcelId, features, result });

  return res.json({ parcel, result });
};

export const listPredictionLogs = async (_req, res) => {
  const logs = await PredictionLog.find().populate("parcelId").sort({ createdAt: -1 });
  return res.json(logs);
};
