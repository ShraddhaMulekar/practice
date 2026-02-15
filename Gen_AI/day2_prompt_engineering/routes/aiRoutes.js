import express from 'express'
import { aiController } from '../controller/aiController.js'

export const aiRoutes = express.Router()

aiRoutes.post("/askai", aiController)