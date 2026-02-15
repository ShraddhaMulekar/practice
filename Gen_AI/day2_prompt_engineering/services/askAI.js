import { buildMessages } from "./buildMessages.js"

export const askAI = async(mode, question)=>{
    const messages = buildMessages(mode, question)
    console.log({messages})

    const response = await client.chat.completions.create({
        model:"openai/gpt-oss-20b",
        base_url:"https://api.groq.com/openai/v1",
        messages,
        temperature:0.7
    })

    return response.choices[0].messages.content
}