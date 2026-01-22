import express from "express"
import { checkController } from "../controllers/checkController.js"
import { signupController } from "../controllers/signupController.js"
import { loginController } from "../controllers/loginController.js"

export const userRouter = express.Router()

userRouter.get("/check", checkController)
userRouter.post("/signup", signupController )
userRouter.post("/login", loginController )