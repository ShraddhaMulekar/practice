import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema(
  {
    userId: String,
    title: String,
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const SessionModel = model("Session", SessionSchema);