export const calculator = (expression)=>{
    try {
        const result = eval(expression)
        // format decimal numbers
        const formatted =
            typeof result === "number"
                ? Number(result.toFixed(2))
                : result;
                
        return (`Result: ${formatted}`)
    } catch (error) {
        console.log({error})
        return (`Error: Error in calculator tool ${error.message}`)        
    }
}