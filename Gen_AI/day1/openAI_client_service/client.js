import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

// Create OpenAI client
export const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export const askLLM = async (systemPrompt, userMessage) => {
  const response = await client.chat.completions.create({
    //connection with LLM
    model: "openai/gpt-oss-20b",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ],
    temperature: 0.7,
  });

  return response.choices[0].message.content
};
