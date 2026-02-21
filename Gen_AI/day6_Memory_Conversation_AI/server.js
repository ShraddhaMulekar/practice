import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { chatRoutes } from './routes/chatRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/ai", chatRoutes )

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})