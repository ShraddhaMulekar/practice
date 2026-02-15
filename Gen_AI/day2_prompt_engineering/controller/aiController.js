export const aiController = async(req, res)=>{
    try {
        const {mode, question} = req.body

        if(!question) {
            return res.status(400).json({
                success : false,
                message : "question required!"
            })
        }

        const reply = await askAI(mode, question)

        res.status.json({
            success:true,
            message : "your response created successful!",
            reply
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message:"something went wrong!",
            error : error
        })
    }    
}