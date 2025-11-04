// src/routes/chat.js
import express from "express";
import { sendWhatsAppMessage } from "../utils/whatsapp.js";

const router = express.Router();

/**
 * Send a message from the website chatbox → Admin WhatsApp
 */
router.post("/send", async (req, res) => {
  const { name, phone, message } = req.body;

  if (!message) {
    return res.status(400).json({ success: false, message: "Message cannot be empty" });
  }

  try {
    const msgText = `
💬 *New Website Chat Message!*

👤 Name: ${name || "Visitor"}
📞 Phone: ${phone || "Not provided"}
💬 Message: ${message}
`;

    await sendWhatsAppMessage(process.env.ADMIN_PHONE, msgText);

    res.json({ success: true, message: "Message sent via WhatsApp!" });
  } catch (error) {
    console.error("❌ Chat send failed:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

export default router;
