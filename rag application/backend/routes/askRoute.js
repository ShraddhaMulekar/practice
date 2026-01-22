import express from 'express'
import { askQuestion } from '../controllers/askController.js'

export const askRouter = express.Router()

askRouter.post("/ask", askQuestion)