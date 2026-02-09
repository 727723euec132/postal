/**
 * Purpose: Parcel routes for tracking, updating, and prediction actions.
 */
const express = require("express");
const { body } = require("express-validator");
const {
  createParcel,
  updateParcel,
  assignParcel,
  trackParcel,
  predictDelay,
  updateWeatherImpact
} = require("../controllers/parcelController");
const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");
const validate = require("../middleware/validate");

const router = express.Router();

router.get("/track/:trackingId", trackParcel);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("officer", "postofficer", "admin"),
  [
    body("trackingId").notEmpty(),
    body("origin").notEmpty(),
    body("destination").notEmpty(),
    body("currentLocation").notEmpty(),
    body("status").notEmpty()
  ],
  validate,
  createParcel
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("officer", "postofficer", "admin"),
  updateParcel
);

router.put(
  "/:id/assign",
  authMiddleware,
  roleMiddleware("officer", "postofficer", "admin"),
  [body("officerId").notEmpty()],
  validate,
  assignParcel
);

router.post(
  "/track/:trackingId/predict",
  authMiddleware,
  roleMiddleware("officer", "admin", "postofficer"),
  predictDelay
);

router.post(
  "/track/:trackingId/weather",
  authMiddleware,
  roleMiddleware("officer", "admin", "postofficer"),
  [body("location").notEmpty()],
  validate,
  updateWeatherImpact
);

module.exports = router;
