import mongoose from "mongoose";

const dbConnected = async()=>{
    await mongoose.connect(process.env.MONGODB_KEY)
    console.log("Mongo db connected!")
}

export default dbConnected


