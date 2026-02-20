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

//Find similar chunks
export const searchVectorsDB = async(queryEmbedding)=>{
    try {
        const result = await vectorServiceCollection.query({
            query_embeddings : [queryEmbedding],
            n_results : 3,
        })
        return result.documents[0]
    } catch (error) {
        console.error("Error searching vectors in collection:", error);
    }
}