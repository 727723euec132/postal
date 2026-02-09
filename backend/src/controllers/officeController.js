// Controllers for managing postal office data and connections.
import { Office } from "../models/Office.js";

export const listOffices = async (_req, res) => {
  const offices = await Office.find().populate("connectedOffices").sort({ createdAt: -1 });
  return res.json(offices);
};

export const createOffice = async (req, res) => {
  const office = await Office.create(req.body);
  return res.status(201).json(office);
};

export const updateOfficeConnections = async (req, res) => {
  const { id } = req.params;
  const office = await Office.findByIdAndUpdate(id, req.body, { new: true });
  return res.json(office);
};
