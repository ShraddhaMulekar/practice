import { askRag } from "../services/ragService.js";

export const chatController = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const answer = await askRag(message);

    res
      .status(200)
      .json({
        message: "Message received successfully",
        receivedMessage: answer,
      });
  } catch (error) {
    console.error("Error handling chat message:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the chat message" });
  }
};
