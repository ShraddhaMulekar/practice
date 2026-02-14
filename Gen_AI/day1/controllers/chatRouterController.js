import { askLLM, client } from "../openAI_client_service/client.js"

export const chatRouterController = async(req, res)=>{
    try {
        const {message, type} = req.body
        // type = "debug", "explain"

        if(!message){
            return res.status(400).json({msg:"messages required!"})
        }

        let systemPrompt

        if(type === "debug"){
            systemPrompt = "You are a senior developer fixing bugs."
        } else if(type === "explain"){
            systemPrompt = "Explain concepts simply."
        } else{
            systemPrompt = "Helpful assistant."
        }

        // Call LLM
        const reply = await askLLM(systemPrompt, message)

        // send AI reply back
        res.json({
            msg:"response created successfully!",
            reply
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Something went wrong", Error: error });
    }
}