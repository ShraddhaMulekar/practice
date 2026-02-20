export const chatController = (req, res) => {
    try {
        const { message } = req.body;
        console.log("Received message:", message);
        res.status(200).json({ message: "Message received successfully", receivedMessage: message });
    } catch (error) {
        console.error("Error handling chat message:", error);
        res.status(500).json({ error: "An error occurred while processing the chat message" });
    }
}