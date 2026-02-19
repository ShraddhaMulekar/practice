export const uploadController = async(req, res)=>{
    try {
        const {text} = req.body || {}

        if(!text) {
            return res.status(400).json({
                success:false,
                msg:("text is required!")
            })
        }

        
        
    } catch (error) {
        console.log({error})
        res.status(500).json({
            success : false,
            msg : "server error"
        })
    }
}