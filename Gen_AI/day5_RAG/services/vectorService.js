import { ChromaClient } from "chromadb";

const client = new ChromaClient({
  path: "http://localhost:8000",
}); // LOCAL MODE

// ✅ RESET COLLECTION (temporary)
// await client.deleteCollection({ name: "knowledge" }).catch(()=>{});

export const vectorServiceCollection =
  await client.getOrCreateCollection({
    name: "knowledge",
    embeddingFunction: null,
  });

//   const peek = await vectorServiceCollection.get();
//     console.log("Stored documents:", peek.documents);

export const addVectorsToCollection = async (id, text, embedding) => {
  await vectorServiceCollection.add({
    ids: [id],
    documents: [text],
    embeddings: [embedding],
  });
};

export const searchVectorsDB = async (queryEmbedding) => {
  const result = await vectorServiceCollection.query({
    queryEmbeddings: [queryEmbedding],
    nResults: 3,
  });


  console.log("RAW QUERY RESULT:", result);

  return result.documents?.[0] || [];
};