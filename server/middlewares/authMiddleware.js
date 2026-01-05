import jwt from "jsonwebtoken"

const authMiddleware = (req, res, next)=>{
    const token = req.headers.authorization?.split(" ")[1]

    if(!token){
        return res.json({success:false, message:"Access denined!"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY )
        req.userName = decoded
        next()
    } catch (error) {
        console.log({error})
        return res.json({success:false, message:"Server error"})
    }
}
export default authMiddleware