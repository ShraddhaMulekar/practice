export const askQuestion = (req, res)=>{
    const {question} = req.body
    res.send({answer: `You asked: ${question}`})
}