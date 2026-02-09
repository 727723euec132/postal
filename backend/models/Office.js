/**
 * Purpose: Office schema for post office locations and connectivity.
 */
const mongoose = require("mongoose");

const officeSchema = new mongoose.Schema(
  {
    officeName: { type: String, required: true },
    location: {
      address: String,
      latitude: Number,
      longitude: Number
    },
    connectedOffices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Office" }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Office", officeSchema);
