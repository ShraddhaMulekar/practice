import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema(
  {
    _id: String,
    userId: String,
    title: String,
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const SessionModel = mongoose.model("Session", SessionSchema);