// Routes for admin user management.
import express from "express";
import { body } from "express-validator";
import { createUser, listUsers } from "../controllers/userController.js";
import { authenticate } from "../middleware/auth.js";
import { authorizeRoles } from "../middleware/role.js";
import { validateRequest } from "../middleware/validate.js";

export const userRouter = express.Router();

userRouter.get("/", authenticate, authorizeRoles("admin"), listUsers);

userRouter.post(
  "/",
  authenticate,
  authorizeRoles("admin"),
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
    body("role").isIn(["delivery", "officer", "admin", "post_officer"]),
  ],
  validateRequest,
  createUser
);
