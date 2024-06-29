import { MusicianProfile } from "../models/MusicianProfile.model.js";

export const getMusicianProfiles = async (req, res) => {
  try {
    const musicianProfiles = await MusicianProfile.find();
    res.status(200).json(musicianProfiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMusicianProfileById = async (req, res) => {
  try {
    const musicianProfile = await MusicianProfile.findById(req.params.id);
    if (!musicianProfile) {
      return res.status(404).json({ message: "Musician profile not found" });
    }
    res.status(200).json(musicianProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMusicianProfile = async (req, res) => {
  const musicianProfile = new MusicianProfile(req.body);
  try {
    const newMusicianProfile = await musicianProfile.save();
    res.status(201).json(newMusicianProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateMusicianProfile = async (req, res) => {
  try {
    const updatedMusicianProfile = await MusicianProfile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMusicianProfile) {
      return res.status(404).json({ message: "Musician profile not found" });
    }
    res.status(200).json(updatedMusicianProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteMusicianProfile = async (req, res) => {
  try {
    const deletedMusicianProfile = await MusicianProfile.findByIdAndDelete(
      req.params.id
    );
    if (!deletedMusicianProfile) {
      return res.status(404).json({ message: "Musician profile not found" });
    }
    res.status(200).json({ message: "Musician profile deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
