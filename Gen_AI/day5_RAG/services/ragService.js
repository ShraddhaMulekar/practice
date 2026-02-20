import { OpenAI } from "openai";
import { embeddingService } from "./embeddingService.js";
import { searchVectorsDB } from "./vectorService.js";

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export const askRag = async (question) => {
  try {
    // 1. Embed question
    const queryEmbedding = await embeddingService(question);

    //2. Retrieve context
    const context = await searchVectorsDB(queryEmbedding);
    const contextText = context.join("\n");

    // 3. Send to LLM
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      message: [
        {
          role: "system",
          content:
            "Answer ONLY from provided context. If not found say I don't know.",
        },
        {
          role: "user",
          content: `
            Context:
            ${contextText}

            Question:
            ${question}
            `,
        },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error in askRag:", error);
    return "Sorry, something went wrong.";
  }
};
