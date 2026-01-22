import OpenAI from "openai";
import leavePolicy from "./data/leavePolicy.js"
import PolicyModel from "./models/Policy.js"

const openai = new OpenAI({
    apiKey: process.env.OpenAI_API_KEY
})

const seedData = async()=>{
    for(let text of leavePolicy){
        const embedding = await openai.embeddings.create({
            model:"text-embedding-3-small",
            input:text
        })

        await PolicyModel.create({
            text,
            embedding:embedding.data[0].embedding
        })
    }
    console.log("Data Seeded Successfully")
}

seedData()