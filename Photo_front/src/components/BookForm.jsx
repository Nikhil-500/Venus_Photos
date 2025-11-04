import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BookForm({ selectedPackage = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    venue: "",
    service: "",
    package: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  // ✅ Prefill package if passed as prop
  useEffect(() => {
    if (selectedPackage) {
      setFormData((prev) => ({ ...prev, package: selectedPackage }));
    }
  }, [selectedPackage]);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ WhatsApp message link generator
  const generateWhatsAppMessage = () => {
    const whatsappNumber = "+919035311565"; // 🔹 Muruli Raj's number
    const message = `📸 *New Booking Request!*\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n📞 Phone: ${formData.phone}\n🏛️ Venue: ${formData.venue}\n🧾 Service: ${formData.service}\n💎 Package: ${formData.package}\n💬 Message: ${formData.message || "N/A"}`;
    return `https://api.whatsapp.com/send?phone=${whatsappNumber.replace("+", "")}&text=${encodeURIComponent(message)}`;
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      // Send booking details to your backend (for email)
      const res = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        // ✅ Open WhatsApp message link automatically
        window.open(generateWhatsAppMessage(), "_blank");

        setFormData({
          name: "",
          email: "",
          phone: "",
          venue: "",
          service: "",
          package: "",
          message: "",
        });
        setStatus({
          loading: false,
          success:
            "✅ Your booking has been sent successfully! We'll contact you shortly via email or WhatsApp.",
          error: null,
        });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error("❌ Error:", err);
      setStatus({
        loading: false,
        success: null,
        error:
          "❌ Failed to send your request. Please try again or contact us via WhatsApp.",
      });
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-zinc-900/80 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto space-y-6 border border-zinc-700 backdrop-blur-sm"
    >
      {/* --- Prefilled Package Display --- */}
      {selectedPackage && (
        <div className="text-center bg-orange-500/10 border border-orange-500/30 text-orange-400 font-medium py-2 rounded-md mb-2">
          Booking for: <span className="font-semibold">{selectedPackage}</span>
        </div>
      )}

      {/* --- Form Inputs --- */}
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-3 rounded-md bg-zinc-800 text-white w-full focus:ring-2 focus:ring-orange-500 outline-none"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-3 rounded-md bg-zinc-800 text-white w-full focus:ring-2 focus:ring-orange-500 outline-none"
          required
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="p-3 rounded-md bg-zinc-800 text-white w-full focus:ring-2 focus:ring-orange-500 outline-none"
          required
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="p-3 rounded-md bg-zinc-800 text-white w-full focus:ring-2 focus:ring-orange-500 outline-none"
          required
        >
          <option value="">-- Select Service --</option>
          <option>Wedding</option>
          <option>Architecture</option>
          <option>Cinematography</option>
          <option>Drone Shoot</option>
        </select>

        {/* ✅ Venue Field */}
        <input
          type="text"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          placeholder="Venue (e.g., Kushalnagar Convention Hall)"
          className="p-3 rounded-md bg-zinc-800 text-white w-full focus:ring-2 focus:ring-orange-500 outline-none md:col-span-2"
          required
        />

        {/* ✅ Package Field */}
        <input
          type="text"
          name="package"
          value={formData.package}
          onChange={handleChange}
          placeholder="Package (e.g., Gold Wedding)"
          disabled={!!selectedPackage}
          className={`p-3 rounded-md bg-zinc-800 text-white w-full focus:ring-2 focus:ring-orange-500 outline-none md:col-span-2 ${
            selectedPackage ? "opacity-70 cursor-not-allowed" : ""
          }`}
        />
      </div>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message (optional)"
        rows="4"
        className="w-full p-3 rounded-md bg-zinc-800 text-white focus:ring-2 focus:ring-orange-500 outline-none"
      />

      {/* --- Submit Button --- */}
      <button
        type="submit"
        disabled={status.loading}
        className={`${
          status.loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-orange-600 hover:bg-orange-700"
        } text-white px-6 py-3 rounded-lg font-semibold transition w-full`}
      >
        {status.loading ? "Sending..." : "Submit Request"}
      </button>

      {/* --- Status Messages --- */}
      {status.success && (
        <p className="text-green-400 text-center font-medium mt-2">
          {status.success}
        </p>
      )}
      {status.error && (
        <p className="text-red-400 text-center font-medium mt-2">
          {status.error}
        </p>
      )}
    </motion.form>
  );
}
