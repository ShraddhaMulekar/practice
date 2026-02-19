import { ChromaClient } from "chromadb";

const client = new ChromaClient({
  host: "localhost",
  port: 8000
});

const run = async () => {
  const collection = await client.getCollection({
    name: "documents"
  });

  const data = await collection.get({
    include: ["documents", "embeddings"]
  });

  console.log(data);
};

run();