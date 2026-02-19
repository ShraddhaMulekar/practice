import { chunkText } from "../chunks/chunk.js"
import { createEmbedding } from "../embedding.js"
import { collection } from "../vectorDB.js"

export const uploadController = async(req, res)=>{
    try {
        const {text} = req.body || {}

        if(!text) {
            return res.status(400).json({
                success:false,
                msg:("text is required!")
            })
        }

        const chunks = chunkText(text)

        for(let i=0; i<chunks.length; i++){
            const embedding = await createEmbedding(chunks[i])

            await collection.add({
                ids: [`doc_${Date.now()}_${i}`],
                documents: [chunks[i]],
                embeddings: [embedding]
            })
        }

        return res.status(200).json({
            success:true,
            msg:"Document uploaded successfully"
        })
        
    } catch (error) {
        console.log({error})
        res.status(500).json({
            success : false,
            msg : "server error"
        })
    }
}