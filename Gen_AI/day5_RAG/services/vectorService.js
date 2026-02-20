import { ChromaClient } from "chromadb";

const client = new ChromaClient();

export const vectorServiceCollection = await client.getOrCreateCollection({
  name: "knowledge",
});

export const addVectorsToCollection = async (id, text, embeddings) => {
    try {
        await vectorServiceCollection.add({
            ids : [id],
            documents : [text],
            embeddings : [embeddings]
        })
    } catch (error) {
        console.error("Error adding vectors to collection:", error);
    }
}