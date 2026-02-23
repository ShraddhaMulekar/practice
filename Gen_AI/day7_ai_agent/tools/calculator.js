export const calculator = (expression)=>{
    try {
        const result = eval(expression)
        return (`Result: ${result}`)
    } catch (error) {
        console.log({error})
        return (`Error: Error in calculator tool ${error.message}`)        
    }
}