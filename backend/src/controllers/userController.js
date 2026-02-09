// Controllers for admin-managed user operations.
import bcrypt from "bcryptjs";
import { User } from "../models/User.js";

export const listUsers = async (_req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  return res.json(users);
};

export const createUser = async (req, res) => {
  const { name, email, password, role, officeId } = req.body;
  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ message: "Email already registered." });
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, passwordHash, role, officeId });
  return res.status(201).json(user);
};
