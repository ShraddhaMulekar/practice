import { pipeline } from "@xenova/transformers"

let extractor

export const embeddingService = async (text)=>{
    if(!extractor){
        extractor = await pipeline(
            "feature-extraction",
            "Xenova/all-MiniLM-L6-v2"
        )
    }

    const result = await extractor(text, {
        pooling : "mean",
        normalize : true
    })

    return Array.from(result.data)
}