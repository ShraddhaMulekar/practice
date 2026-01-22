import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
import { userRouter } from "./route/user.route.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors);

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  limit: 10,    // limit each IP to 10 requests per windowMs
  message: "Too many requests from this IP, please try again after a minute"
});
app.use(limiter)

app.use("/user", userRouter)

app.listen(port, async() => {
    await connectDB()
    console.log(`server started on http://localhost:${port}`);
});
