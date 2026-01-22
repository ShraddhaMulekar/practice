import express from "express"
import { checkController } from "../controllers/checkController.js"

export const userRouter = express.Router()

userRouter.get("/check", checkController)