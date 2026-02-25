import express from 'express';
import multer from 'multer';
import { uploadController } from '../controllers/uploadController.js';

export const uploadRoutes = express.Router();

const storage = multer.diskStorage({
  destination: "./docs",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

uploadRoutes.post("/upload", upload.single("file"), uploadController)