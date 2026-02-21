import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

// This function takes an array of messages and returns the response from the LLM.
export const generateLLM = async (messages) => {
  const response = await client.chat.completions.create({
    model: "openai/gpt-oss-20b",
    messages: messages,
    temperature: 0.7,
    max_tokens: 800,
  });

  return response.choices[0].message.content;
};
