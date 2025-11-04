// src/routes/whatsapp.js
import express from "express";
import { sendWhatsAppMessage } from "../utils/whatsapp.js";

const router = express.Router();

/**
 * @route POST /api/whatsapp/send
 * @desc Send WhatsApp message from frontend
 * @access Public
 */
router.post("/send", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ success: false, error: "Message text required" });
    }

    // Send message to admin (you)
    const adminPhone = process.env.ADMIN_PHONE || "+91XXXXXXXXXX";
    await sendWhatsAppMessage(adminPhone, `💬 New website message:\n\n${message}`);

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("WhatsApp route error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
