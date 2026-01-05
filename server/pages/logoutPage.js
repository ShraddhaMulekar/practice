import LogOutModel from "../models/logOut_model.js"

const logoutPage = async(req, res)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1]
        
        if(!token){
            return res.json({success:false, message:"You are not log in!"})
        }

        await LogOutModel.create({token})
        console.log({token})
        return res.json({success:true, message:"Log out successful!"})
    } catch (error) {
        console.log({error})
        return res.error({success:false, message:"Server Error"})
    }
}

export default logoutPage