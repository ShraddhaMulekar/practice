import { ChromaClient } from "chromadb";
import { createEmbedding } from "./embeddingService.js";

const client = new ChromaClient()

// Function to create a collection for storing story memories
export const createCollection = async () => {
    return client.getOrCreateCollection({
        name: "memory",
    })
}

// Function to add a story to the memory collection
export const StoryMemory = async (id, text)=>{
    const collection = await createCollection()
    const embedding = await createEmbedding(text)

    await collection.add({
        ids: [id],
        documents: [text],
        embeddings: [embedding]
    })
}

// Function to search the memory collection for relevant stories based on a query
export const searchMemory = async (query)=>{
    const collection = await createCollection()
    const embedding = await createEmbedding(query)

    const result = await collection.query({
        queryEmbeddings: [embedding],
        nResults: 3,
    })

    return result.documents[0] || []
}