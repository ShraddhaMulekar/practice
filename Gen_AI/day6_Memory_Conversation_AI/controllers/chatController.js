export const chatController = (req, res)=>{
    try {
        res.status(200).json({message: "Chat controller is working"});
    } catch (error) {
        res.status(500).json({message: "Error in chat controller", error: error.message});
    }
}