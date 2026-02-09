// Routes for authentication endpoints.
import express from "express";
import { body } from "express-validator";
import { loginUser, registerUser } from "../controllers/authController.js";
import { validateRequest } from "../middleware/validate.js";

export const authRouter = express.Router();

authRouter.post(
  "/register",
  [body("name").notEmpty(), body("email").isEmail(), body("password").isLength({ min: 6 })],
  validateRequest,
  registerUser
);

authRouter.post(
  "/login",
  [body("email").isEmail(), body("password").notEmpty()],
  validateRequest,
  loginUser
);
