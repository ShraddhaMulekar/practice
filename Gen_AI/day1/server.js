import express from "express"
import cors from "cors"
import OpenAI from "openai"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3000

// Create OpenAI client
const client = new OpenAI({
    apiKey:process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
})

console.log("client", client)
// test route
app.get("/", (req,res)=>{
    res.json({msg:"test get route!"})
})

//post (chat) route
app.post("/chat", async(req, res)=>{
    try {
        const {message} = req.body

        if(!message){
            return res.status(400).json({msg:"messages required!"})
        }

        const response = await client.chat.completions.create({     //connection with LLM
            model:"openai/gpt-oss-20b",
            messages:[
                {role:"system", content:"You are a helpful coding teacher."},
                {role:"user", content:message}
            ],
            temperature:0.7
        })

        console.log("response", response)

        // send AI reply back
        res.json({
            msg:"chat created successfully!",
            reply:response.choices[0].message.content,      //return response reply
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})