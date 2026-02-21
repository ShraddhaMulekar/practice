import ChatModel from "../models/ChatModel.js";
import { searchMemory } from "./vectorService.js";

exports.buildContext = async (userId, sessionId, message) => {
  //short term memory
  const history = await ChatModel.find({ userId, sessionId })
    .sort({ createdAT: 1 })
    .limit(10);

    const message = history.map((h)=>({
        role : h.role,
        content : h.message
    }))

    //long term memory
    const memories = await searchMemory(message)

    if(memories.length){
        message.unshift({
            role : "system",
            content : `Relevant past info: \n${memories.join("\n")}`
        })
    }

    return message
};