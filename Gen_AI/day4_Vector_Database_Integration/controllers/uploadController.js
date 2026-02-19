export const uploadController = (req, res)=>{
    try {
        res.send("check controller")
    } catch (error) {
        console.log({error})
        res.status(500).json({
            success : false,
            msg : "server error"
        })
    }
}