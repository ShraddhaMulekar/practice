import { askAI } from "../services/askAI.js"

export const aiController = async(req, res)=>{
    try {
        const {mode, question} = req.body || {}
        //mode: teacher, interviewer, debugger

        if(!question) {
            return res.status(400).json({
                success : false,
                message : "Question is required!"
            })
        }

        const reply = await askAI(mode, question)

        res.status(200).json({
            success: true,
            message : "your response created successful!",
            reply
        })

    } catch (error) {
        console.log({error})
        res.status(500).json({
            success : false,
            message:"something went wrong!",
            error : error
        })
    }    
}