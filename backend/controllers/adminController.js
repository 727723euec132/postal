/**
 * Purpose: Admin controller for system-wide user and analytics management.
 */
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Office = require("../models/Office");
const PredictionLog = require("../models/PredictionLog");

const createUser = async (req, res) => {
  const { name, email, password, role, officeId } = req.body;
  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ message: "User already exists" });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    passwordHash,
    role,
    officeId
  });

  return res.status(201).json({
    message: "User created",
    user: { id: user._id, name, email, role }
  });
};

const getOfficeNetwork = async (req, res) => {
  const offices = await Office.find().populate("connectedOffices");
  return res.json(offices);
};

const getDelayAnalytics = async (req, res) => {
  const logs = await PredictionLog.find()
    .populate("parcelId")
    .sort({ createdAt: -1 })
    .limit(50);
  return res.json(logs);
};

module.exports = {
  createUser,
  getOfficeNetwork,
  getDelayAnalytics
};
