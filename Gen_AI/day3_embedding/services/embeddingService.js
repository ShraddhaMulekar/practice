import { pipeline } from "@xenova/transformers";
import notes from "../data/notes";

let extractor;
let noteEmbedding = []; //store embeddings of notes

// Load model

export const loadModel = async () => {
  extractor = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");

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