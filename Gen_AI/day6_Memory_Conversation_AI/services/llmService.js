import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

module.exports = async (messages) => {
  const response = await client.chat.completions.create({
    model: "openai/gpt-oss-20b",
    messages: messages,
  });

  return response.choices[0].message.content;
};