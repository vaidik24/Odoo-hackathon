import mongoose from "mongoose";
import { Ticket } from "./Ticket.model.js";

const eventSchema = new mongoose.Schema({
  musicianId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MusicianProfile",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  genre: {
    type: String,
  },
  ticketPrice: {
    type: Number,
  },
  ticketsSold: {
    type: Number,
    default: 0,
  },
  liveStreamUrl: {
    type: String,
  },
});

eventSchema.methods.generateTicket = async function () {
  const ticket = new Ticket({
    event: this._id,
    price: this.ticketPrice,
  });
  await ticket.save();
  return ticket;
};

export const Event = mongoose.model("Event", eventSchema);
