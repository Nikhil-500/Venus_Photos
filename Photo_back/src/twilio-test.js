// twilio-test.js
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

async function sendTestMessage() {
  try {
    const message = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,   // ✅ Must start with "whatsapp:+1..."
      to: `whatsapp:${process.env.ADMIN_PHONE}`,  // ✅ Add "whatsapp:" here
      body: "🚀 Twilio WhatsApp test successful from Muruli Photo backend!",
    });

    console.log("✅ Message sent successfully! SID:", message.sid);
  } catch (error) {
    console.error("❌ Error sending WhatsApp message:", error.message);
  }
}

sendTestMessage();
