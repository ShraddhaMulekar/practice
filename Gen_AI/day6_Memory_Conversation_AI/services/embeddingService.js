import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export const createEmbedding = async (text) => {
  const response = await client.embeddings.create({
    model: "openai/gpt-oss-20b",
    input: text,
  });

  return response.data[0].embedding;
};