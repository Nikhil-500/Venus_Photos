// // src/controllers/contactController.js
// import { sendEmail } from "../utils/mailer.js";
// import { sendWhatsAppMessage } from "../utils/whatsapp.js";

// export const handleContact = async (req, res) => {
//   const { name, email, phone, venue, service, package: selectedPackage, message } = req.body;

//   // ✅ Validate required fields
//   if (!name || !email || !phone || !venue || !service || !selectedPackage) {
//     return res.status(400).json({
//       success: false,
//       message: "All fields (name, email, phone, venue, service, package) are required.",
//     });
//   }

//   // ✅ Optional: Basic phone format validation
//   if (!/^\+?\d{10,15}$/.test(phone)) {
//     return res.status(400).json({
//       success: false,
//       message: "Invalid phone number format. Include country code (e.g. +91...).",
//     });
//   }

//   try {
//     // ✅ Message template (for email + WhatsApp)
//     const msgText = `
// 📸 *New Booking Inquiry Received!*

// 👤 *Name:* ${name}
// 📧 *Email:* ${email}
// 📞 *Phone:* ${phone}
// 🏠 *Venue:* ${venue}
// 🛠️ *Service:* ${service}
// 💼 *Package:* ${selectedPackage}
// 💬 *Message:* ${message || "No additional message provided."}
// `;

//     // ✅ Send Email
//     await sendEmail(process.env.ADMIN_EMAIL, "New Booking Inquiry", msgText);

//     // ✅ Send WhatsApp Message
//     await sendWhatsAppMessage(process.env.ADMIN_PHONE, msgText);

//     // ✅ Response
//     res.status(200).json({
//       success: true,
//       message: "✅ Booking details sent successfully via Email and WhatsApp!",
//     });
//   } catch (error) {
//     console.error("❌ Full error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error — please try again later.",
//     });
//   }
// };
// src/controllers/contactController.js
import { sendEmail } from "../utils/mailer.js";
import { sendWhatsAppMessage } from "../utils/whatsapp.js";

// ✅ Handle basic contact form
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
    // ✅ Message template (for email + WhatsApp)
    const msgText = `
📩 *New Contact Message!*

👤 *Name:* ${name}
📧 *Email:* ${email}
📞 *Phone:* ${phone}
💬 *Message:* ${message}
`;

    // ✅ Send Email to Admin
    await sendEmail("niks500500@gmail.com", "New Contact Message", msgText);

    // ✅ Send WhatsApp message to Admin
    await sendWhatsAppMessage("+917904972933", msgText);

    res.status(200).json({
      success: true,
      message: "✅ Contact message sent successfully via Email and WhatsApp!",
    });
  } catch (error) {
    console.error("❌ Contact form error:", error);
    res.status(500).json({
      success: false,
      message: "Server error — please try again later.",
    });
  }
};

