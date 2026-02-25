export const uploadController = (req, res) => {
    try {
        res.status(200).json({ message: "File uploaded successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}