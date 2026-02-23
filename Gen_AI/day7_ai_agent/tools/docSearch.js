import fs from 'fs';

export const docSearch = (query)=>{
    try {
        const data = fs.readFileSync("./docs/company.txt", "utf-8")

        if(data.toLowerCase().includes(query.toLowerCase())){
            return `Found the following information in the company docs: ${data}`
        }

        return "No relevant information found in the company docs."
        
    } catch (error) {
        console.log({error})
        return (`Error: Error in docSearch tool ${error.message}`)
    }
}