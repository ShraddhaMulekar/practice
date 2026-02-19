import { pipeline, env } from "@xenova/transformers";

// ✅ Disable native ONNX runtime
env.allowLocalModels = false;
env.backends.onnx.wasm.numThreads = 1;
env.backends.onnx.wasm.simd = true;
env.backends.onnx.wasm.proxy = false;
env.backends.onnx.useBrowserCache = false;

let extractor;

//create load model
export const loadModel = async () => {
extractor = await pipeline(
    "feature-extraction",
    "Xenova/all-MiniLM-L6-v2",
    {
      device: "wasm" 
    }
  )
   console.log("✅ Model Loaded")
};

//create embedding
export const createEmbedding = async (text) => {
  const output = await extractor(text, {
    pooling: "mean",
    normalize: true,
  });

  return Array.from(output.data);
};