import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ChatRoutes } from './routes/chatRoutes.js';
import { uploadRoutes } from './routes/uploadRoutes.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors(
  {origin: process.env.FRONTEND_URL || 'http://localhost:5173'}
))

app.use("/api", ChatRoutes)
app.use("/api", uploadRoutes)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});