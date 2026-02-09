/**
 * Purpose: Office controller to manage post office data and status updates.
 */
const Office = require("../models/Office");
const Parcel = require("../models/Parcel");

const createOffice = async (req, res) => {
  const office = await Office.create(req.body);
  return res.status(201).json(office);
};

const listOffices = async (req, res) => {
  const offices = await Office.find().populate("connectedOffices");
  return res.json(offices);
};

const updateOffice = async (req, res) => {
  const office = await Office.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  return res.json(office);
};

const markParcelReceived = async (req, res) => {
  const { trackingId, location } = req.body;
  const parcel = await Parcel.findOne({ trackingId });
  if (!parcel) {
    return res.status(404).json({ message: "Parcel not found" });
  }

  parcel.currentLocation = location;
  parcel.status = "Received at post office";
  parcel.history.push({
    location,
    status: "Received",
    timestamp: new Date(),
    note: "Marked received by post office"
  });
  await parcel.save();

  return res.json(parcel);
};

module.exports = {
  createOffice,
  listOffices,
  updateOffice,
  markParcelReceived
};
