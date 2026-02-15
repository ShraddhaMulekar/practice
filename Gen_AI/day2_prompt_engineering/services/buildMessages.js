import { promptTemplates } from "../prompts/promptTemplates.js"
import { systemPrompts } from "../prompts/systemPrompts.js"

export const buildMessages = (mode=teacher, question)=>{
    const systemMessage = {
        role : "system",
        content : systemPrompts[mode]
    }

    const userMessage = {
        role : "user",
        content : promptTemplates[mode](question)
    }

    return (systemMessage, userMessage)
}