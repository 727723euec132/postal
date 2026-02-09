import mongoose from "mongoose";

const parcelSchema = new mongoose.Schema(
  {
    trackingNumber: { type: String, required: true, unique: true },
    office: { type: mongoose.Schema.Types.ObjectId, ref: "Office", required: true },
    status: {
      type: String,
      enum: ["at_office", "out_for_delivery", "delivered"],
      default: "at_office",
    },
    customer: {
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
    estimatedDeliveryDate: { type: Date, required: true },
    delayDays: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Parcel = mongoose.model("Parcel", parcelSchema);
