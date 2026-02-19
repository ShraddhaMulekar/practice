import { pipeline } from "@xenova/transformers"

let extractor

//create load model
export const loadModel = async()=>{
    extractor = await pipeline(
        "feature-extraction",
        "Xenova/all-MiniLM-L6-v2"
    )
}

//create embedding
export const createEmbedding = async(text)=>{
    const output = await extractor(text, {
        pooling: "mean",
        normalize: true
    })
}