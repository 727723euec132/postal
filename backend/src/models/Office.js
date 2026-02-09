// Mongoose model for postal offices and their network connections.
import mongoose from "mongoose";

const officeSchema = new mongoose.Schema(
  {
    officeName: { type: String, required: true },
    location: { type: String, required: true },
    connectedOffices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Office" }],
  },
  { timestamps: true }
);

export const Office = mongoose.model("Office", officeSchema);
