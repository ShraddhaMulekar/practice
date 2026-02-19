import { ChromaClient } from "chromadb";

export const client = new ChromaClient({
  host: "localhost",
  port: 8000
});

export const collection = await client.getOrCreateCollection({
  name: "documents",
  embeddingFunction: null
});