// src/routes/contact.js
// src/routes/contact.js
import express from "express";
import { handleContact } from "../controllers/contactController.js";

const router = express.Router();

// ✅ POST route to handle booking form submissions
router.post("/", handleContact);

export default router;
