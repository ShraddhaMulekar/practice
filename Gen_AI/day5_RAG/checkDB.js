import fs from "fs";
import { chunkText } from "./utils/chunkText.js";
import { embeddingService } from "./services/embeddingService.js";
import { addVectorsToCollection, vectorServiceCollection } from "./services/vectorService.js";

const text = fs.readFileSync("./data/documents.txt", "utf-8");

// ✅ check file content
console.log("Loaded text:\n", text);

const chunks = chunkText(text);

// ✅ check chunks created
console.log("Total chunks:", chunks.length);

for (let i = 0; i < chunks.length; i++) {
  console.log(`Processing chunk ${i}`);

  const embedding = await embeddingService(chunks[i]);

  console.log("Embedding length:", embedding.length);

  await addVectorsToCollection(`doc-${i}`, chunks[i], embedding);
}

// ✅ verify DB storage
const count = await vectorServiceCollection.count();
console.log("Total documents in DB:", count);

console.log("Documents indexed!");