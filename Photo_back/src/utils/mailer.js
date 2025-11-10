// src/utils/mailer.js
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export async function sendEmail(to, subject, text) {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: "Muruli Raj Photography", email: process.env.BREVO_EMAIL },
        to: [{ email: to }],
        subject,
        textContent: text,
      },
      {
        headers: {
          "accept": "application/json",
          "api-key": process.env.BREVO_API_KEY, // 🔑 Your Brevo API key (not SMTP key)
          "content-type": "application/json",
        },
      }
    );

    console.log("✅ Email sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Email send failed:", error.response?.data || error.message);
    throw new Error("Email send failed");
  }
}
