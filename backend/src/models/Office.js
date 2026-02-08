import mongoose from "mongoose";

const officeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    contactEmail: { type: String, required: true },
  },
  { timestamps: true }
);

export const Office = mongoose.model("Office", officeSchema);
