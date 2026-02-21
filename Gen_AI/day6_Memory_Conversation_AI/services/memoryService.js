import { ChatModel } from "../models/Chat.js";
import { searchMemory } from "./vectorService.js";

export const buildContext = async (userId, sessionId, message) => {
  //short term memory
  const history = await ChatModel.find({ userId, sessionId })
    .sort({ createdAT: 1 })
    .limit(10);

    const messages = history.map((h)=>({
        role : h.role,
        content : h.message
    }))

    //long term memory
    const memories = await searchMemory(messages)

    if(memories.length){
        message.unshift({
            role : "system",
            content : `Relevant past info: \n${memories.join("\n")}`
        })
    }

    return messages
};