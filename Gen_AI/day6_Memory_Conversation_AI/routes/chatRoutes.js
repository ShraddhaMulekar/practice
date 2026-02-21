import express from 'express';
import { chatController } from '../controllers/chatController.js';

export const chatRoutes = express.Router();

chatRoutes.post("/chat", chatController)