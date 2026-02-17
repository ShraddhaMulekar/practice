import express from "express"
import { embeddingController } from "../controllers/embeddingController.js"

export const embeddingRoute = express.Router()

embeddingRoute.post("/", embeddingController)