import mongoose from "mongoose";

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
      const FanProfile = mongoose.model("FanProfile");
      const fanProfile = new FanProfile({ userId: this._id });
      await fanProfile.save();
    } else if (this.role === "musician") {
      const MusicianProfile = mongoose.model("MusicianProfile");
      const musicianProfile = new MusicianProfile({ userId: this._id });
      await musicianProfile.save();
    }
    next();
  } catch (err) {
    console.log("Error in UserModel :", err);
  }
});

export const User = mongoose.model("User", userSchema);
