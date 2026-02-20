import { askRag } from "../services/ragService.js";

export const chatController = async (req, res) => {
  try {
    const { question } = req.body;

    // if (!question) {
    //   return res.status(400).json({ error: "Question is required" });
    // }

    const answer = await askRag(question);

    res
      .status(200)
      .json({
        message: "Question received successfully",
        receivedAnswer: answer,
      });
  } catch (error) {
    console.error("Error handling chat message:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the chat message" });
  }
};
