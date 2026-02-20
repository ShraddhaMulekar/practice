import express from "express";
import { chatController } from "../controller/chatController.js";

export const chatRoutes = express.Router();

chatRoutes.post("/", chatController)