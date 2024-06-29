import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByUsername
} from "../controllers/user.controller.js";

const router = express.Router();

// Define routes in a way that resolves ambiguity with parameters
router.get("/username/:username", getUserByUsername); // Route for getting user by username
router.get("/:id", getUserById); // Route for getting user by ID
router.post("/", createUser); // Route for creating a new user
router.put("/:id", updateUser); // Route for updating a user by ID
router.delete("/:id", deleteUser); // Route for deleting a user by ID
router.get("/", getUsers); // Route for getting all users

export default router;
