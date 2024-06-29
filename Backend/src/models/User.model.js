import mongoose from 'mongoose';
import { FanProfile } from './FanProfile.model.js';
import { MusicianProfile } from './MusicianProfile.model.js';

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["fan", "musician"],
      required: true,
    },
    tickets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    if (this.role === "fan") {
      const fanProfile = new FanProfile({ userId: this._id });
      await fanProfile.save();
    } else if (this.role === "musician") {
      const musicianProfile = new MusicianProfile({ userId: this._id });
      await musicianProfile.save();
    }
    next();
  } catch (err) {
    console.log("Error in UserModel :", err);
    next(err);
  }
});

export const User = mongoose.model("User", userSchema);
