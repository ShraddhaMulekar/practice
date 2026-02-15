export const buildMessages = (mode=teacher, question)=>{
    const systemMessage = {
        role : "system",
        content : systemPrompt[mode]
    }

    const userMessage = {
        role : "user",
        content : promptTemplates[mode](question)
    }

    return (systemMessage, userMessage)
}