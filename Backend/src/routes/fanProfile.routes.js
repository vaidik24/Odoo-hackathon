import express from "express";
import {
  getFanProfiles,
  getFanProfileById,
  createFanProfile,
  updateFanProfile,
  deleteFanProfile,
} from "../controllers/fanProfile.controller.js";

const router = express.Router();

router.get("/", getFanProfiles);
router.get("/:id", getFanProfileById);
router.post("/", createFanProfile);
router.put("/:id", updateFanProfile);
router.delete("/:id", deleteFanProfile);

export default router;
