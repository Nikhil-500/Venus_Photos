import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function sendContactEmail(payload) {
  try {
    const res = await axios.post(`${API_BASE}/send-email`, payload);
    return res.data;
  } catch (err) {
    console.error("sendContactEmail error:", err);
    return { success: false, error: err?.response?.data || err.message };
  }
}
