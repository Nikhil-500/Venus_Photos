import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dr from "../assets/dr.jpg";
import tr from "../assets/tr.jpg";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setForm({ name: "", email: "", phone: "", message: "" });
        setStatus({
          loading: false,
          success:
            "✅ Message sent successfully! We'll contact you soon via Email or WhatsApp.",
          error: null,
        });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("❌ Send failed:", error);
      setStatus({
        loading: false,
        success: null,
        error:
          "❌ Failed to send message. Please check your internet or try again later.",
      });
    }
  };

  // ✅ Parallax Effect
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section className="relative text-white overflow-hidden">
      {/* ✅ Hero Section */}
      <div ref={ref} className="relative w-full h-[90vh] md:h-screen overflow-hidden">
        <motion.img
          src={tr}
          alt="Contact Header"
          style={{ y }}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-purple-400 mb-4"
          >
            Contact Information
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-300 text-lg max-w-2xl"
          >
            We’d love to hear from you — reach out for bookings, inquiries, or collaborations.
          </motion.p>
        </div>
      </div>

      {/* ✅ Main Section */}
      <div
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${dr})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-start">
          {/* --- Left: Form --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between bg-white/10 border border-purple-500/30 p-8 rounded-2xl shadow-2xl backdrop-blur-md hover:shadow-purple-400/30 transition-all duration-500 h-full"
          >
            <div>
              <h2 className="text-4xl font-bold text-purple-400 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8">
                Have questions or want to book a session? Fill out the form below,
                and we’ll reach out to you via Email or WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="grid gap-4">
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="p-3 rounded-lg bg-black/40 border border-gray-600 text-white focus:border-purple-400 focus:outline-none transition"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="p-3 rounded-lg bg-black/40 border border-gray-600 text-white focus:border-purple-400 focus:outline-none transition"
                />
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone (+91...)"
                  className="p-3 rounded-lg bg-black/40 border border-gray-600 text-white focus:border-purple-400 focus:outline-none transition"
                />
                <textarea
                  required
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="p-3 rounded-lg bg-black/40 border border-gray-600 text-white focus:border-purple-400 focus:outline-none transition resize-none"
                />

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.95 }}
                  disabled={status.loading}
                  className={`py-3 px-6 rounded-lg font-semibold transition duration-300 ${status.loading
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-purple-500 hover:bg-purple-400 text-black"
                    }`}
                >
                  {status.loading ? "Sending..." : "Send Message"}
                </motion.button>

                {status.success && (
                  <p className="text-green-400 mt-2 text-center">
                    {status.success}
                  </p>
                )}
                {status.error && (
                  <p className="text-rose-400 mt-2 text-center">{status.error}</p>
                )}
              </form>
            </div>
          </motion.div>

          {/* --- Right: Map + Address --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col bg-black/50 border border-purple-400/20 rounded-2xl shadow-lg backdrop-blur-md overflow-hidden h-full"
          >
            <div className="w-full h-[500px] overflow-hidden border-b border-purple-600/30 rounded-t-2xl flex-shrink-0">
              <iframe
                title="Muruli Raj Photography Location"
                src="https://www.google.com/maps?q=Muruliraj+Photography&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="grayscale hover:grayscale-0 transition duration-700"
              ></iframe>
            </div>

            {/* ✅ Updated Contact Info Below Map */}
            <div className="p-6 md:p-8 text-right bg-black/70 border-t border-purple-400/20 rounded-b-2xl flex flex-col justify-center min-h-[180px]">
              <h3 className="text-2xl font-semibold text-purple-300 mb-3">
                Muruli Raj Photography
              </h3>
              <p className="text-gray-300 mb-2 leading-relaxed">
                📍 Venkateshwara Badavane, Harangi Rd, Kushalnagar, Karnataka
                571234
              </p>
              <p className="text-gray-400 flex justify-end items-center gap-2 flex-wrap">
                <a
                  href="tel:+919480661565"
                  className="block text-sm text-purple-400 hover:text-purple-300"
                >
                  📞 +91 9480661565
                </a>
                <span className="hidden md:inline">|</span>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=info@murulirajclicks.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-purple-400 hover:text-purple-300"
                >
                  info@murulirajclicks.com
                </a>
              </p>
              <p className="text-gray-500 text-sm mt-1">Mon – Sat, 9 AM – 6 PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
