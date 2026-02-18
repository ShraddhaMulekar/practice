import { pipeline } from "@xenova/transformers";
import { notes } from "../data/notes.js";
import { cosineSimilarity } from "../utils/similarity.js";

let extractor;
let noteEmbedding = []; //store embeddings of notes

// Load model

export const loadModel = async () => {
  extractor = await pipeline(
    "feature-extraction", 
    "Xenova/all-MiniLM-L6-v2"
);

  console.log("Model Loaded ✅");

  /* convert all notes → embeddings */

  for (let note of notes) {
    const embedding = await extractor(note, {
      pooling: "mean",
      normalize: true,
    });

    noteEmbedding.push(embedding.data);
  }

  console.log("All notes embedded ✅");
};

/* ---------------- SEARCH ---------------- */

export const findSimilarNote = async (query) => {
  // convert user text → embedding
  const queryEmbedding = await extractor(query, {
    pooling: "mean",
    normalize: true,
  });

  const queryVector = queryEmbedding.data;

  let bestScore = -1;
  let bestIndex = -1;

  // compare with every note

  noteEmbedding.forEach((noteVector, index) => {
    const score = cosineSimilarity(queryVector, noteVector);

    if (score > bestScore) {
      bestScore = score;
      bestIndex = index;
    }
  });

  return {
    note: notes[bestIndex],
    similarity: bestScore,
  };
};
