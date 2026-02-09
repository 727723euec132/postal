// Routes for ML prediction requests and analytics logs.
import express from "express";
import { body } from "express-validator";
import { listPredictionLogs, predictDelay } from "../controllers/predictionController.js";
import { authenticate } from "../middleware/auth.js";
import { authorizeRoles } from "../middleware/role.js";
import { validateRequest } from "../middleware/validate.js";

export const predictionRouter = express.Router();

predictionRouter.post(
  "/",
  authenticate,
  authorizeRoles("officer", "admin", "post_officer"),
  [body("parcelId").notEmpty(), body("features").notEmpty()],
  validateRequest,
  predictDelay
);

predictionRouter.get("/logs", authenticate, authorizeRoles("admin"), listPredictionLogs);
