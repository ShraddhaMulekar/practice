export const agentController = (req, res)=>{
    try {
        res.status(200).json({message: "Agent controller is working"
        })
    } catch (error) {
        res.status(500).json({message: "Error in agent controller"})
    }
}