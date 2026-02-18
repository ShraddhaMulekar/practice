import { findSimilarNote } from "../services/embeddingService.js"

export const embeddingController = async(req,res)=>{
    try {
        const {text} = req.body || []

        if(!text){
            return res.status(400).json({
                success : false,
                message : "Text is required!"
            })
        }

        const result = await findSimilarNote(text)

        res.status(200).json({
            success : true,
            message : "text embedding successful!",
            query : text,
            bestMatch : result.note,
            similarity : result.similarity
        })

    } catch (error) {
        console.log({error})
        res.status(500).json({
            success : false,
            message: "Server error"
        })        
    }
}