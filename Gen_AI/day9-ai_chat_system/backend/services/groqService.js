import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const askGroq = async (question, context) => {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Answer based only on provided context.",
        },
        {
          role: "user",
          content: `Context: ${context}\nQuestion: ${question}`,
        },
      ],
      model: "llama3-70b-8192",
    });
    return response.choices[0].message.content;
    
  } catch (error) {
    console.error("Error communicating with Groq API:", error);
    return "Sorry, I'm having trouble connecting to the Groq API right now.";
  }
};
