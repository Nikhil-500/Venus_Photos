// src/controllers/contactController.js
import { sendEmail } from "../utils/mailer.js";
import { sendWhatsAppMessage } from "../utils/whatsapp.js";

// ✅ Handle simple contact form
export const handleContact = async (req, res) => {
  const { name, email, phone, message } = req.body;

  // ✅ Validate required fields
  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields (name, email, phone, message) are required.",
    });
  }

  // ✅ Basic phone validation
  if (!/^\+?\d{10,15}$/.test(phone)) {
    return res.status(400).json({
      success: false,
      message: "Invalid phone number format. Include country code (e.g. +91...).",
    });
  }

  try {
    const msgText = `
📩 *New Contact Message!*

👤 *Name:* ${name}
📧 *Email:* ${email}
📞 *Phone:* ${phone}
💬 *Message:* ${message}
`;

    await sendEmail("niks500500@gmail.com", "📩 New Contact Message", msgText);
    await sendWhatsAppMessage("+917904972933", msgText);

    res.status(200).json({
      success: true,
      message: "✅ Message sent successfully via Email and WhatsApp!",
    });
  } catch (error) {
    console.error("❌ Contact form error:", error);
    res.status(500).json({
      success: false,
      message: "Server error — please try again later.",
    });
  }
};
