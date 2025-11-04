// src/utils/whatsapp.js
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

/**
 * Send WhatsApp message using Twilio
 * @param {string} to - Recipient phone number (e.g., '+91xxxxxxxxxx')
 * @param {string} message - Message text
 */
export async function sendWhatsAppMessage(to, message) {
  if (!to || !message) {
    throw new Error("Missing required fields: 'to' or 'message'");
  }

  try {
    const msg = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER, // e.g. whatsapp:+14155238886
      to: `whatsapp:${to}`,
      body: message,
    });

    console.log(`✅ WhatsApp message sent to ${to} — SID: ${msg.sid}`);
    return msg;
  } catch (error) {
    console.error("❌ WhatsApp send failed:", error.message);
    throw new Error("WhatsApp send failed");
  }
}
