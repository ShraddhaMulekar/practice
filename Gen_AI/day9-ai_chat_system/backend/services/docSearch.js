import fs from "fs"
export const searchDoc = async (query)=>{
    try {
        const data = fs.readFileSync("./docs/company.txt", "utf-8")

        const words = query.toLowerCase().split(" ")

        const found = words.some(word => data.toLowerCase().includes(word))

        if(found){
            return { success: true, message: "Document found", data: data.slice(0, 500) }
        }

        return { success: false, message: "No relevant company information found." }

    } catch (error) {
        console.log("Error reading document:", error)
        return { success: false, message: "Error reading document." }
    }
}