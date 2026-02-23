import OpenAI from "openai";
import { calculator } from "../tools/calculator.js";
import { docSearch } from "../tools/docSearch.js";
import dotenv from "dotenv";
dotenv.config()

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

export const runAgent = async (userInput)=>{
    let thoughts = ""

    try {
        if(/[0-9]+\s*[\+\-\*\/]\s*[0-9]+/.test(userInput)){
            thoughts = calculator(userInput)
        } else if(userInput.toLowerCase().includes("policy")){
            thoughts = docSearch(userInput)
        } else{
            const response = await client.chat.completions.create({
                model: "openai/gpt-oss-20b",
                messages: [{ role: "user", content: userInput }]            
            });

            thoughts = response.choices[0].message.content
        }

        return thoughts
    } catch (error) {
        console.log({error})
        return (`Error: error in run agent ${error.message}`)
    }
}