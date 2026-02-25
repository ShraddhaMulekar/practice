import express from 'express';
import { chatController } from '../controllers/chatController.js';

export const ChatRoutes = express.Router();

ChatRoutes.post("/chat", chatController)