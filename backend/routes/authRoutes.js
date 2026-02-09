/**
 * Purpose: Authentication routes for login and registration.
 */
const express = require("express");
const { body } = require("express-validator");
const { registerUser, login } = require("../controllers/authController");
const validate = require("../middleware/validate");

const router = express.Router();

router.post(
  "/register",
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 })
  ],
  validate,
  registerUser
);

router.post(
  "/login",
  [body("email").isEmail(), body("password").notEmpty()],
  validate,
  login
);

module.exports = router;
