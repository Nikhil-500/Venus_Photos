// src/index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import contactRoutes from "./routes/contact.js";
import bookingRoutes from "./routes/booking.js"; // ✅ new
import whatsappRoutes from "./routes/whatsapp.js";
import path from "path";
import { fileURLToPath } from "url";

// Resolve file paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, "../.env") });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/contact", contactRoutes);
app.use("/api/booking", bookingRoutes); // ✅ new
app.use("/api/whatsapp", whatsappRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Muruli Photo Backend API is running successfully...");
});

// Debug environment variables
console.log("🌱 Environment Variables Check:");
[
  "EMAIL_USER",
  "EMAIL_PASS",
  "TWILIO_ACCOUNT_SID",
  "TWILIO_AUTH_TOKEN",
  "TWILIO_WHATSAPP_NUMBER",
  "ADMIN_EMAIL",
  "ADMIN_PHONE",
].forEach((key) =>
  console.log(`${key}:`, process.env[key] ? "Loaded" : "Missing")
);

// Global error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
