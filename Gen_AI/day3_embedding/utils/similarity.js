export const cosineSimilarity = (vecA, vecB)=>{
    let dot = 0
    let magA = 0
    let magB = 0

    for(let i=0; i<vecA.length; i++){
        dot += vecA[i] * vecB[i]
        magA += vecA[i] * vecB[i]
        magB += vecA[i] * vecB[i]
    }

    magA = Math.sqrt(magA)
    magB = Math.sqrt(magB)

    return dot / (magA * magB)
}