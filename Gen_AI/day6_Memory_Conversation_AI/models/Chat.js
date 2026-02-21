import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    userId: String,
    sessionId: String,
    role: String,
    message: String,
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const ChatModel = mongoose.model("Chat", ChatSchema);