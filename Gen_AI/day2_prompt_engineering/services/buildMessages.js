import { promptTemplates } from "../prompts/promptTemplates.js"
import { systemPrompts } from "../prompts/systemPrompts.js"

export const buildMessages = (mode="teacher", question)=>{

    const selectedMode = systemPrompts[mode]
    ? mode
    : "teacher";

    const systemMessage = {
        role : "system",
        content : systemPrompts[selectedMode]
    }

    const userMessage = {
        role : "user",
        content : promptTemplates[selectedMode](question)
    }

    return [systemMessage, userMessage]
}