// src/routes/auth.routes.js
import express from "express";
import { signup, login } from "../controllers/auth.controller.js";
import { check } from "express-validator";

const router = express.Router();

// @route    POST api/auth/signup
// @desc     Register user
// @access   Public
router.post(
  "/signup",
  [
    check("fullName", "Full Name is required").not().isEmpty(),
    check("username", "Username is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").isLength({ min: 6 }),
    check("role", "Role is required").not().isEmpty(),
  ],
  signup
);

// @route    POST api/auth/login
// @desc     Authenticate user and get token
// @access   Public
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  login
);

export default router;
