import { ChromaClient } from "chromadb";
import { createEmbedding } from "./embeddingService.js";

const client = new ChromaClient({
  path: "http://localhost:8000",
});

let collection = null;

// create collection safely
async function getCollection() {
  if (!collection) {
    collection = await client.getOrCreateCollection({
      name: "memory",
      embeddingFunction: null, 
    });
  }
  return collection;
}

// STORE MEMORY
export async function StoryMemory(id, text) {
  if (!text || typeof text !== "string") return;

  const col = await getCollection();
  const embedding = await createEmbedding(text);

  await col.add({
    ids: [id],
    documents: [text],
    embeddings: [embedding],
  });
}

// SEARCH MEMORY
export async function searchMemory(query) {
  if (!query || typeof query !== "string") return [];

  const col = await getCollection();
  const embedding = await createEmbedding(query);

  const result = await col.query({
    queryEmbeddings: [embedding],
    nResults: 3,
  });

  return result.documents?.[0] || [];
}