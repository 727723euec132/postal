/**
 * Purpose: Admin routes for system management features.
 */
const express = require("express");
const { body } = require("express-validator");
const {
  createUser,
  getOfficeNetwork,
  getDelayAnalytics
} = require("../controllers/adminController");
const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");
const validate = require("../middleware/validate");

const router = express.Router();

router.post(
  "/users",
  authMiddleware,
  roleMiddleware("admin"),
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
    body("role").notEmpty()
  ],
  validate,
  createUser
);

router.get(
  "/offices/network",
  authMiddleware,
  roleMiddleware("admin"),
  getOfficeNetwork
);

router.get(
  "/analytics/delays",
  authMiddleware,
  roleMiddleware("admin"),
  getDelayAnalytics
);

module.exports = router;
