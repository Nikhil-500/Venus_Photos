// src/routes/whatsapp.js
import express from "express";
import { sendWhatsAppMessage } from "../utils/whatsapp.js";

const router = express.Router();

/**
 * @route POST /api/whatsapp/send
 * @desc Send formatted WhatsApp message from frontend booking/contact form
 * @access Public
 */
router.post("/send", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      venue,
      service,
      packageType,
      message,
    } = req.body;

    // 🧩 Basic validation
    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        error: "Name and phone number are required.",
      });
    }

    // 🧾 Format WhatsApp message nicely
    const msgText = `
📸 *New Booking/Contact Request!*

👤 *Name:* ${name}
📧 *Email:* ${email || "Not provided"}
📞 *Phone:* ${phone}
🏛️ *Venue:* ${venue || "Not specified"}
🧾 *Service:* ${service || "Not specified"}
💎 *Package:* ${packageType || "Not specified"}
💬 *Message:* ${message || "No message provided"}
`;

    // ✅ Send to admin’s WhatsApp
    const adminPhone = process.env.ADMIN_PHONE || "+91XXXXXXXXXX"; // replace if needed
    await sendWhatsAppMessage(adminPhone, msgText);

    res.status(200).json({
      success: true,
      message: "✅ WhatsApp message sent successfully!",
    });
  } catch (error) {
    console.error("❌ WhatsApp route error:", error);
    res.status(500).json({
      success: false,
      error: "Server error while sending WhatsApp message.",
    });
  }
});

export default router;
