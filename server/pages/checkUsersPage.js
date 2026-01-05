import UserModel from "../models/user_model.js"

const checkUsersPage = async(req, res)=>{
    try {
        const checkUser = await UserModel.find({})
        return res.json({success:true, message:"All users fetched successfully", "User":checkUser})
    } catch (error) {
        return res.json({success:false, message:"Server error"})
    }
}

export default checkUsersPage