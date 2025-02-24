import express from "express";

import { createFlashProduct,       deleteFlashProductById,       getFlashProduct, getFlashProductByid } from "../controllers/flashControllers.js";
import cloudinaryFileUploader from "../middleware/flashMiddleware.js";

const router = express.Router();

// POST route for creating a new flashProduct
router.post('/', cloudinaryFileUploader.single('image'),  createFlashProduct)
router.get('/',  getFlashProduct)
router.get('/:id',  getFlashProductByid)
router.delete('/:id',  deleteFlashProductById)

export default router;
