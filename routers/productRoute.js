import express from "express";



import productUploader from "../middleware/productMiddleware.js";
import { createproduct, deleteproductById, getproduct, getproductByid } from "../controllers/productController.js";


const router = express.Router();

// POST route for creating a new flashProduct
router.post('/', productUploader.single('image'), createproduct )
router.get('/',  getproduct)
router.get('/:id',  getproductByid)
router.delete('/:id',  deleteproductById)

export default router;
