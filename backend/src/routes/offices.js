// Routes for postal office management.
import express from "express";
import { body } from "express-validator";
import { createOffice, listOffices, updateOfficeConnections } from "../controllers/officeController.js";
import { authenticate } from "../middleware/auth.js";
import { authorizeRoles } from "../middleware/role.js";
import { validateRequest } from "../middleware/validate.js";

export const officeRouter = express.Router();

officeRouter.get("/", listOffices);

officeRouter.post(
  "/",
  authenticate,
  authorizeRoles("admin"),
  [body("officeName").notEmpty(), body("location").notEmpty()],
  validateRequest,
  createOffice
);

officeRouter.patch(
  "/:id/connections",
  authenticate,
  authorizeRoles("admin"),
  updateOfficeConnections
);
