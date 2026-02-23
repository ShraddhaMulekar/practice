import express from "express";
import { agentController } from "../controllers/agentController.js";

export const agentRouter = express.Router();

agentRouter.post("/agent", agentController)