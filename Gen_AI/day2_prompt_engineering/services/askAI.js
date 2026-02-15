import { client } from "../config/openai.js"
import { buildMessages } from "./buildMessages.js"

export const askAI = async(mode, question)=>{
    const messages = buildMessages(mode, question)
    console.log({messages})

    const response = await client.chat.completions.create({
        model:"openai/gpt-oss-20b",
        messages,
        temperature:0.7
    })

    return response.choices[0].message.content
}