export const chatController = (req, res) => {
    try {
        res.status(200).json({ message: "Chat endpoint is working!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}