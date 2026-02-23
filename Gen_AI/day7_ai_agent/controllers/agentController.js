import { runAgent } from "../agent/agent.js"

export const agentController = async(req, res)=>{
    try {
        const {question} = req.body

        if(!question){
            return res.status(400).json({message: "Question is required"})
        }

        const answer = await runAgent(question)

        res.status(200).json({message: "Agent response..", answer})
    } catch (error) {
        console.log({error})
        res.status(500).json({message: "Error in agent controller", error: error.message})
    }
}