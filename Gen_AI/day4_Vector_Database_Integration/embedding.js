import { pipeline } from "@xenova/transformers"

let extractor

//create load model
export const loadModel = async()=>{
    extractor = await pipeline(
        "feature-extraction",
        "Xenova/all-MiniLM-L6-v2"
    )
}