import express from "express"
import { uploadController } from "../controllers/uploadController.js"

export const uploadRouter = express.Router()

uploadRouter.post("/", uploadController)