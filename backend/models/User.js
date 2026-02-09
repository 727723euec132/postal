/**
 * Purpose: User schema for authentication and role-based access.
 */
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "officer", "delivery", "postofficer", "admin"],
      default: "user"
    },
    officeId: { type: mongoose.Schema.Types.ObjectId, ref: "Office" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
