import { FanProfile } from "../models/FanProfile.model.js";

export const getFanProfiles = async (req, res) => {
  try {
    const fanProfiles = await FanProfile.find();
    res.status(200).json(fanProfiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFanProfileById = async (req, res) => {
  try {
    const fanProfile = await FanProfile.findById(req.params.id);
    if (!fanProfile) {
      return res.status(404).json({ message: "Fan profile not found" });
    }
    res.status(200).json(fanProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createFanProfile = async (req, res) => {
  const fanProfile = new FanProfile(req.body);
  try {
    const newFanProfile = await fanProfile.save();
    res.status(201).json(newFanProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateFanProfile = async (req, res) => {
  try {
    const updatedFanProfile = await FanProfile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedFanProfile) {
      return res.status(404).json({ message: "Fan profile not found" });
    }
    res.status(200).json(updatedFanProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteFanProfile = async (req, res) => {
  try {
    const deletedFanProfile = await FanProfile.findByIdAndDelete(req.params.id);
    if (!deletedFanProfile) {
      return res.status(404).json({ message: "Fan profile not found" });
    }
    res.status(200).json({ message: "Fan profile deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
