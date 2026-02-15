export const askAI = async(mode, question)=>{
    const messages = buildMessage(mode, question)
    console.log({messages})

    const response = await client.chat.completions.create({
        model:"openai/gpt-oss-20b",
        base_url:"https://api.groq.com/openai/v1",
        messages,
        temperature:0.7
    })

    return response.choices[0].messages.content
}