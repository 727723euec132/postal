import mongoose from "mongoose";

const delayRequestSchema = new mongoose.Schema(
  {
    office: { type: mongoose.Schema.Types.ObjectId, ref: "Office", required: true },
    reason: { type: String, required: true },
    weatherSummary: { type: String, required: true },
    predictedDelayDays: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    approvedAt: { type: Date },
  },
  { timestamps: true }
);

export const DelayRequest = mongoose.model("DelayRequest", delayRequestSchema);
