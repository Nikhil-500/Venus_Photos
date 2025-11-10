// import axios from "axios";

// const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

// export async function sendContactEmail(payload) {
//   try {
//     const res = await axios.post(`${API_BASE}/send-email`, payload);
//     return res.data;
//   } catch (err) {
//     console.error("sendContactEmail error:", err);
//     return { success: false, error: err?.response?.data || err.message };
//   }
// }
// src/api.js
import axios from "axios";

// ✅ Load API base URL from frontend .env (or default to local)
const API_BASE =
  import.meta.env.VITE_API_URL?.trim().replace(/\/$/, "") || "http://localhost:5000";

// ✅ Contact form API call
export async function sendContactEmail(payload) {
  try {
    const res = await axios.post(`${API_BASE}/api/contact`, payload, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (err) {
    console.error("❌ sendContactEmail error:", err.response?.data || err.message);
    return {
      success: false,
      error: err?.response?.data?.message || "Failed to send contact email.",
    };
  }
}

// ✅ Booking form API call
export async function sendBooking(payload) {
  try {
    const res = await axios.post(`${API_BASE}/api/booking`, payload, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (err) {
    console.error("❌ sendBooking error:", err.response?.data || err.message);
    return {
      success: false,
      error: err?.response?.data?.message || "Failed to send booking details.",
    };
  }
}
