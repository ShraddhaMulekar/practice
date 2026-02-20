import fs from "fs"
import { chunkText } from "./utils/chunkText"
import { embeddingService } from "./services/embeddingService"
import { addVectorsToCollection } from "./services/vectorService"

const text = fs.readFileSync("./data/documents.txt", "utf-8")

const chunks = chunkText(text)

for(let i=0; i<chunks.length; i++){
    const embedding = await embeddingService(chunks[i])
    await addVectorsToCollection(`doc-${i}`, chunks[i], embedding)
}

console.log("Documents indexed!");