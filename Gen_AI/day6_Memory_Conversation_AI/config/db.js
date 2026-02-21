import mongoose from "mongoose";

export const db = ()=>{
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected successfully!");
    } catch (error) {
        console.log("Database connection error:", error);
    }
}