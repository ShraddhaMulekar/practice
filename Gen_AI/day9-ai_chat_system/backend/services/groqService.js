import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export const askGroq = async (question, context) => {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `
You are a company AI assistant.
Answer ONLY using the provided context.
If answer exists, respond clearly.
If not, say "Information not available in documents."
`,
        },
        {
          role: "user",
          content: `
Context:
${context}

Question:
${question}
`,
        },
      ],
      model: "openai/gpt-oss-20b",
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error communicating with Groq API:", error);
    return "Sorry, I'm having trouble connecting to the Groq API right now.";
  }
};
