import express from "express";
import registerPage from "../pages/registerPage.js";
import loginPage from "../pages/loginPage.js";

const userRouter = express.Router();

userRouter.post("/register", registerPage);

userRouter.post("/login", loginPage)


export default userRouter;
