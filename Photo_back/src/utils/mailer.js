// src/utils/mailer.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// ✅ Create transporter using Brevo SMTP
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com", // Brevo SMTP host
  port: 587, // Use port 587 for TLS
  auth: {
    user: process.env.BREVO_EMAIL,     // your verified sender email (e.g. yourname@gmail.com)
    pass: process.env.BREVO_SMTP_KEY,  // your Brevo SMTP key
  },
});

export async function sendEmail(to, subject, text) {
  try {
    const mailOptions = {
      from: `"Orion Neststay" <${process.env.BREVO_EMAIL}>`, // 👈 looks professional
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("❌ Email send failed:", error.message);
    throw new Error("Email send failed");
  }
}
