import express from "express";
import registerPage from "../pages/registerPage.js";

const userRouter = express.Router();

userRouter.post("/register", registerPage);


export default userRouter;
