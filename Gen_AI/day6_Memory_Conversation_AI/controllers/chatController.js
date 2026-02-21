import { SessionModel } from "../models/Session.js";
import { ChatModel } from "../models/Chat.js";
import { generateLLM } from "../services/llmService.js";
import { buildContext } from "../services/memoryService.js";
import { StoryMemory } from "../services/vectorService.js";
import { v4 as uuid } from "uuid";

export const chatController = async (req, res) => {
  try {
    const { userId, sessionId, message } = req.body;

    // create session if it doesn't exist
    let session = await SessionModel.findById(sessionId);

    if (!session) {
      session = await SessionModel.create({
        _id: sessionId,
        userId,
        title: message.slice(0, 30), // first 30 characters of the message as title
      });
    }

    // build context
    const messages = await buildContext(userId, sessionId, message);

    messages.push({
      role: "user",
      content: message,
    });

    // generate response
    const aiResponse = await generateLLM(messages);

    // save chats
    await ChatModel.create({
      userId,
      sessionId,
      role: "user",
      message,
    });

    await ChatModel.create({
      userId,
      sessionId,
      role: "assistant",
      message: aiResponse,
    });

    // store semantic memory
    await StoryMemory(uuid(), message);

    return res.status(200).json({ response: aiResponse });
  } catch (error) {
    console.log({error})
    res
      .status(500)
      .json({ message: "Error in chat controller", error: error.message });
  }
};
