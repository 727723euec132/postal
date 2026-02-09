// Routes for parcel registration and tracking.
import express from "express";
import { body } from "express-validator";
import {
  assignDeliveryOfficer,
  createParcel,
  getParcelByTracking,
  listParcels,
  updateParcel,
  updateParcelStatus,
} from "../controllers/parcelController.js";
import { authenticate } from "../middleware/auth.js";
import { authorizeRoles } from "../middleware/role.js";
import { validateRequest } from "../middleware/validate.js";

export const parcelRouter = express.Router();

parcelRouter.get("/", authenticate, listParcels);

parcelRouter.get("/track/:trackingId", getParcelByTracking);

parcelRouter.post(
  "/",
  authenticate,
  authorizeRoles("officer", "admin", "post_officer"),
  [
    body("trackingId").notEmpty(),
    body("origin").notEmpty(),
    body("destination").notEmpty(),
    body("currentLocation").notEmpty(),
  ],
  validateRequest,
  createParcel
);

parcelRouter.patch("/:id", authenticate, updateParcel);

parcelRouter.patch("/:id/status", authenticate, updateParcelStatus);

parcelRouter.patch(
  "/:id/assign",
  authenticate,
  authorizeRoles("officer", "admin", "post_officer"),
  assignDeliveryOfficer
);
