import OpenAI from "openai";
import dotenv from "dotenv"
dotenv.config()

// Create OpenAI client
export const client = new OpenAI({
    apiKey:process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
})