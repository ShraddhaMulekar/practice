import OpenAI from "openai";
import { embeddingService } from "./embeddingService.js";
import { searchVectorsDB } from "./vectorService.js";
import dotenv from "dotenv";
dotenv.config();

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
    const contextText =
      context && context.length > 0 ? context.join("\n") : "No context found";

    // 3. Send to LLM
    const response = await openai.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
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

    console.log("Question:", question);
    console.log("Embedding length:", queryEmbedding?.length);
    console.log("Context:", context);

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error in askRag:", error);
    return "Sorry, something went wrong.";
  }
};
