// src/index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import contactRoutes from "./routes/contact.js";
import whatsappRoutes from "./routes/whatsapp.js";
import path from "path";
import { fileURLToPath } from "url";
import chatRoutes from "./routes/chat.js";

// Resolve file paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from root .env
dotenv.config({ path: path.join(__dirname, "../.env") });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/whatsapp", whatsappRoutes);
app.use("/api/chat", chatRoutes);


// Root route (for quick server check)
app.get("/", (req, res) => {
  res.send("Muruli Photo Backend API is running successfully...");
});

// Debug environment variable status
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

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
