// Controllers for parcel tracking, assignment, and status updates.
import { Parcel } from "../models/Parcel.js";

export const listParcels = async (_req, res) => {
  const parcels = await Parcel.find().populate("assignedOfficer").sort({ createdAt: -1 });
  return res.json(parcels);
};

export const createParcel = async (req, res) => {
  const parcel = await Parcel.create(req.body);
  return res.status(201).json(parcel);
};

export const getParcelByTracking = async (req, res) => {
  const { trackingId } = req.params;
  const parcel = await Parcel.findOne({ trackingId }).populate("assignedOfficer");
  if (!parcel) {
    return res.status(404).json({ message: "Parcel not found." });
  }
  return res.json(parcel);
};

export const updateParcel = async (req, res) => {
  const { id } = req.params;
  const parcel = await Parcel.findByIdAndUpdate(id, req.body, { new: true });
  return res.json(parcel);
};

export const updateParcelStatus = async (req, res) => {
  const { id } = req.params;
  const { status, currentLocation } = req.body;
  const parcel = await Parcel.findById(id);
  if (!parcel) {
    return res.status(404).json({ message: "Parcel not found." });
  }
  parcel.status = status || parcel.status;
  parcel.currentLocation = currentLocation || parcel.currentLocation;
  parcel.history.push({
    location: parcel.currentLocation,
    timestamp: new Date(),
    note: `Status updated to ${parcel.status}`,
  });
  await parcel.save();
  return res.json(parcel);
};

export const assignDeliveryOfficer = async (req, res) => {
  const { id } = req.params;
  const { assignedOfficer } = req.body;
  const parcel = await Parcel.findByIdAndUpdate(id, { assignedOfficer }, { new: true });
  return res.json(parcel);
};
