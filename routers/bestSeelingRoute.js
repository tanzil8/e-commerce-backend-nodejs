import express from "express";
import { createBestseelingProduct, deleteBestseelingProductById, getBestseelingProduct, getBestseelingProductById } from "../controllers/bestSeelingController.js";
import bestSeelingImg from "../middleware/bestSeelingMiddleware.js";

const router = express.Router()


router.post("/",bestSeelingImg.single('image'), createBestseelingProduct)
router.get("/", getBestseelingProduct)
router.get("/:id", getBestseelingProductById)
router.delete("/:id", deleteBestseelingProductById)


export default router