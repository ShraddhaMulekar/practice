import userModel from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const loginController = async (req, res)=>{
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({message: "Email and password are required"})
    }

    try {
        const newUser = await userModel.findOne({email})
        if(!newUser){
            return res.status(404).json({message: "User not found"})
        }
        bcrypt.compare(password, newUser.password, async(err, result) => {
            if(err){
                return res.status(500).json({message: "Error comparing passwords"})
            }
            if(!result){
                return res.status(401).json({message: "Invalid credentials"})
            }
            const payroll = {
                userId: newUser._id,
                email: newUser.email
            }
            const token = jwt.sign(payroll, process.env.JWT_SECRET, {expiresIn: '1h'})
            return res.status(200).json({message: "Login successful",newUser:newUser, token:token})
        });
    } catch (error) {
        
    }
}