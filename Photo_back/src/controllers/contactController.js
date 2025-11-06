// src/controllers/contactController.js
import { sendEmail } from "../utils/mailer.js";
import { sendWhatsAppMessage } from "../utils/whatsapp.js";

export const handleContact = async (req, res) => {
  const { name, email, phone, venue, service, package: selectedPackage, message } = req.body;

  // ✅ Validate required fields
  if (!name || !email || !phone || !venue || !service || !selectedPackage) {
    return res.status(400).json({
      success: false,
      message: "All fields (name, email, phone, venue, service, package) are required.",
    });
  }

  // ✅ Optional: Basic phone format validation
  if (!/^\+?\d{10,15}$/.test(phone)) {
    return res.status(400).json({
      success: false,
      message: "Invalid phone number format. Include country code (e.g. +91...).",
    });
  }

  try {
    // ✅ Message template (for email + WhatsApp)
    const msgText = `
📸 *New Booking Inquiry Received!*

👤 *Name:* ${name}
📧 *Email:* ${email}
📞 *Phone:* ${phone}
🏠 *Venue:* ${venue}
🛠️ *Service:* ${service}
💼 *Package:* ${selectedPackage}
💬 *Message:* ${message || "No additional message provided."}
`;

    // ✅ Send Email
    await sendEmail(process.env.ADMIN_EMAIL, "New Booking Inquiry", msgText);

    // ✅ Send WhatsApp Message
    await sendWhatsAppMessage(process.env.ADMIN_PHONE, msgText);

    // ✅ Response
    res.status(200).json({
      success: true,
      message: "✅ Booking details sent successfully via Email and WhatsApp!",
    });
  } catch (error) {
    console.error("❌ Full error:", error);
    res.status(500).json({
      success: false,
      message: "Server error — please try again later.",
    });
  }
};
