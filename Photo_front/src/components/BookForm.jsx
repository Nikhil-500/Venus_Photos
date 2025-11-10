import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BookForm({ selectedPackage = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    venue: "",
    date: "", // ✅ added date field
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

  // ✅ WhatsApp message generator (for fallback/manual open)
  const generateWhatsAppMessage = () => {
    const whatsappNumber = "+91XXXXXXXXXX"; // ← Replace with your number
    const message = `📸 *New Booking Request!*\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n📞 Phone: ${formData.phone}\n🏛️ Event Place: ${formData.venue}\n📅 Date: ${formData.date}\n🧾 Service: ${formData.service}\n💎 Package: ${formData.package}\n💬 Message: ${formData.message || "N/A"}`;
    return `https://api.whatsapp.com/send?phone=${whatsappNumber.replace("+", "")}&text=${encodeURIComponent(message)}`;
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      // Step 1️⃣: Send to backend contact route (email, database, etc.)
      const res = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/booking`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Contact submission failed");
      }

      // Step 2️⃣: Send to backend WhatsApp route (automated WhatsApp send)
      await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/whatsapp/send`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            venue: formData.venue,
            date: formData.date,
            service: formData.service,
            packageType: formData.package,
            message: formData.message,
          }),
        }
      );

      // Step 3️⃣: Optional – Open WhatsApp manually (for user confirmation)
      window.open(generateWhatsAppMessage(), "_blank");

      // Step 4️⃣: Reset form & show success
      setFormData({
        name: "",
        email: "",
        phone: "",
        venue: "",
        date: "",
        service: "",
        package: "",
        message: "",
      });
      setStatus({
        loading: false,
        success: "✅ Your booking was sent successfully! We’ll contact you shortly.",
        error: null,
      });
    } catch (err) {
      console.error("❌ Error:", err);
      setStatus({
        loading: false,
        success: null,
        error: "❌ Failed to send your booking. Please try again or message us directly on WhatsApp.",
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
          required
          className="p-3 rounded-md bg-zinc-800 text-white w-full focus:ring-2 focus:ring-orange-500 outline-none"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="p-3 rounded-md bg-zinc-800 text-white w-full focus:ring-2 focus:ring-orange-500 outline-none"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="p-3 rounded-md bg-zinc-800 text-white w-full focus:ring-2 focus:ring-orange-500 outline-none"
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-zinc-800 text-white w-full focus:ring-2 focus:ring-orange-500 outline-none"
        >
          <option value="">-- Select Service --</option>
          <option>Architecture Photography</option>
          <option>Wedding Photography</option>
          <option>Political Promotions</option>
          <option>Government Projects</option>
          <option>Corporate Promotions</option>
          <option>Traditional Events</option>
          <option>Fashion Photography</option>
          <option>School Promotions</option>
          <option>Newborn and Toddler</option>
        </select>

        {/* ✅ Venue + Date Picker side by side */}
        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            placeholder="Event Place"
            required
            className="p-3 rounded-md bg-zinc-800 text-white w-full focus:ring-2 focus:ring-orange-500 outline-none"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-zinc-800 text-white w-full focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

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

      <button
        type="submit"
        disabled={status.loading}
        className={`${
          status.loading ? "bg-gray-500 cursor-not-allowed" : "bg-orange-600 hover:bg-orange-700"
        } text-white px-6 py-3 rounded-lg font-semibold transition w-full`}
      >
        {status.loading ? "Sending..." : "Submit Request"}
      </button>

      {status.success && (
        <p className="text-green-400 text-center font-medium mt-2">{status.success}</p>
      )}
      {status.error && (
        <p className="text-red-400 text-center font-medium mt-2">{status.error}</p>
      )}
    </motion.form>
  );
}
