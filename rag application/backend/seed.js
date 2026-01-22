import dotenv from "dotenv";
import { leavePolicy } from "./data/leavePolicy.js";
import PolicyModel from "./models/Policy.js";
import { connectDb } from "./config/connectDb.js";

dotenv.config();

// OpenAI setup -- key not working now so skipping actual API calls
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY
// });

// Function to generate fake embeddings without OpenAI
const generateFakeEmbedding = () => {
  return Array.from({ length: 1536 }, () => Math.random());
};

// Seed function
const seedData = async () => {
  try {
    await connectDb();

    for (let text of leavePolicy) {
      await PolicyModel.create({
        text,
        embedding: generateFakeEmbedding()
      });
      console.log("Inserted:", text);
    }

    console.log("✅ Data seeded WITHOUT OpenAI");
    process.exit();
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

seedData();