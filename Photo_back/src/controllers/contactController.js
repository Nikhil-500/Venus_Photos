// src/controllers/contactController.js
import { sendEmail } from "../utils/mailer.js";
import { sendWhatsAppMessage } from "../utils/whatsapp.js";

// ✅ Handle booking/contact form
export const handleContact = async (req, res) => {
  const { name, email, phone, service, venue, package: packageType, message } = req.body;

  // ✅ Validate required fields
  if (!name || !email || !phone || !service || !venue) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields: name, email, phone, service, and venue.",
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
    // ✅ Message template (used for both Email + WhatsApp)
    const msgText = `
📸 *New Booking Request!*

👤 *Name:* ${name}
📧 *Email:* ${email}
📞 *Phone:* ${phone}
🏷️ *Service:* ${service}
📍 *Venue:* ${venue}
🎁 *Package:* ${packageType || "N/A"}
💬 *Message:* ${message || "N/A"}
`;

    // ✅ Send Email to Admin
    await sendEmail("niks500500@gmail.com", "📸 New Booking Request", msgText);

    // ✅ Send WhatsApp message to Admin (optional)
    await sendWhatsAppMessage("+917904972933", msgText);

    // ✅ Success response
    res.status(200).json({
      success: true,
      message: "✅ Booking request sent successfully via Email and WhatsApp!",
    });
  } catch (error) {
    console.error("❌ Booking form error:", error);
    res.status(500).json({
      success: false,
      message: "Server error — please try again later.",
    });
  }
};
