import express from "express";
import registerPage from "../pages/registerPage.js";
import loginPage from "../pages/loginPage.js";
import logoutPage from "../pages/logoutPage.js";
import checkUsersPage from "../pages/checkUsersPage.js";

const userRouter = express.Router();

userRouter.post("/register", registerPage);

userRouter.post("/login", loginPage)

userRouter.post("/logout", logoutPage)

userRouter.get("/", checkUsersPage)


export default userRouter;
