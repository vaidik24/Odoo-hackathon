import mongoose from 'mongoose';

const fanProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  followedArtists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MusicianProfile",
    },
  ],
  preferences: {
    genres: [String],
  },
});

export const FanProfile = mongoose.model("FanProfile", fanProfileSchema);
