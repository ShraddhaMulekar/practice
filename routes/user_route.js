import express from "express"
import UserModel from "../models/user_model.js"

const userRouter = express.Router()

userRouter.get("/", (req, res)=>{
    try {
        const {name, email, password} = req.body

        const matchEmail = UserModel.findOne({email})

        if(matchEmail){
            res.json({success: false, message:"You are already registered. Please log in now!"})
        }


    } catch (error) {
        res.json({"Error":error})
        console.log(error)
    }
})

export default userRouter