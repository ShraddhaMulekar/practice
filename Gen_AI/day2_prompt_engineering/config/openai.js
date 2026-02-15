import OpenAI from "openai"
import dotenv from "dotenv"

dotenv.config()

export const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    base_url:"https://api.groq.com/openai/v1",
})