import express from "express"
import { chatRouterController } from "../controllers/chatRouterController.js"

export const chatRouter = express.Router()

chatRouter.post("/chat", chatRouterController)