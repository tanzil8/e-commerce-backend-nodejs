import express from "express";

const router = express.Router()

import { loginUser } from "../controllers/loginController.js";  // Corrected import

// Example usage in some route
router.post('/', loginUser);  // Assuming you're using Express


export default router
