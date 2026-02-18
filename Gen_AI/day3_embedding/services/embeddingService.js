import { pipeline } from "@xenova/transformers"

let extractor
let noteEmbedding = []      //store embeddings of notes

// Load model

export const loadModel = async()=>{
    extractor = await pipeline(
        "feature-extraction",
        "Xenova/all-MiniLM-L6-v2"
    )

    console.log("Model Loaded ✅");
}