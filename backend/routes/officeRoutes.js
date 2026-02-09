/**
 * Purpose: Office routes for post office operations.
 */
const express = require("express");
const { body } = require("express-validator");
const {
  createOffice,
  listOffices,
  updateOffice,
  markParcelReceived
} = require("../controllers/officeController");
const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");
const validate = require("../middleware/validate");

const router = express.Router();

router.get("/", authMiddleware, listOffices);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  [body("officeName").notEmpty()],
  validate,
  createOffice
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateOffice
);

router.post(
  "/receive",
  authMiddleware,
  roleMiddleware("postofficer", "admin"),
  [body("trackingId").notEmpty(), body("location").notEmpty()],
  validate,
  markParcelReceived
);

module.exports = router;
