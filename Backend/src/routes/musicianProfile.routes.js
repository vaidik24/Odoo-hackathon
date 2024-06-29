import express from "express";
import {
  getMusicianProfiles,
  getMusicianProfileById,
  createMusicianProfile,
  updateMusicianProfile,
  deleteMusicianProfile,
} from "../controllers/musicianProfile.controller.js";

const router = express.Router();

router.get("/", getMusicianProfiles);
router.get("/:id", getMusicianProfileById);
router.post("/", createMusicianProfile);
router.put("/:id", updateMusicianProfile);
router.delete("/:id", deleteMusicianProfile);

export default router;
