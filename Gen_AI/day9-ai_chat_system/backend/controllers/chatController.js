import { searchDoc } from "../services/docSearch.js";
import { askGroq } from "../services/groqService.js";

let history = [];

export const chatController = async (req, res) => {
  try {
    const { message } = req.body;

    const context = searchDoc(message);

    const reply = await askGroq(message, context);

    history.push({ user: message, ai: reply });

    res.json({ reply, history });

  } catch (error) {
    console.error("Error in chatController:", error);
    res.status(500).json({ error: error.message });
  }
};
