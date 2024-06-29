const mongoose = require("mongoose");

const MusicianProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bio: {
    type: String,
  },
  musicUploads: [
    {
      type: String, // URL or path to the music file
    },
  ],
  scheduledEvents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to users (fans) who follow this musician
    },
  ],
});

export const MusicianProfile = mongoose.model(
  "MusicianProfile",
  MusicianProfileSchema
);
