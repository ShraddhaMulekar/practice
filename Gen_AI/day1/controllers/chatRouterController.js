import { client } from "../openAI_client/client.js"

export const chatRouterController = async(req, res)=>{
    try {
        const {message} = req.body

        if(!message){
            return res.status(400).json({msg:"messages required!"})
        }

        const response = await client.chat.completions.create({     //connection with LLM
            model:"openai/gpt-oss-20b",
            messages:[
                {role:"system", content:"You are a helpful coding teacher."},
                {role:"user", content:message}
            ],
            temperature:0.7
        })

        // send AI reply back
        res.json({
            msg:"chat created successfully!",
            reply:response.choices[0].message.content,      //return response reply
        })
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}