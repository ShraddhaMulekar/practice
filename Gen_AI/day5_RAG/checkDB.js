import fs from "fs"
import { chunkText } from "./utils/chunkText.js"
import { embeddingService } from "./services/embeddingService.js"
import { addVectorsToCollection } from "./services/vectorService.js"

const text = fs.readFileSync("./data/documents.txt", "utf-8")

const chunks = chunkText(text)

for(let i=0; i<chunks.length; i++){
    const embedding = await embeddingService(chunks[i])
    await addVectorsToCollection(`doc-${i}`, chunks[i], embedding)
}

console.log("Documents indexed!");