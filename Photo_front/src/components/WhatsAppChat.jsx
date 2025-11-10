import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  const whatsappNumber = "+919480661565";
  const baseLink = `https://api.whatsapp.com/send?phone=${whatsappNumber.replace("+", "")}`;

  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setShowGreeting(false);
    setOpen(!open);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-row-reverse items-center gap-3">
      {/* --- Floating WhatsApp Button with Image --- */}
      <motion.button
        onClick={handleOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full shadow-xl overflow-hidden flex items-center justify-center"
      >
        <img
          src="https://i.ibb.co/3z8gWqf/whatsapp-icon.png"
          alt="WhatsApp"
          className="w-full h-full object-cover"
        />
      </motion.button>

      {/* --- Side Greeting Bubble --- */}
      <AnimatePresence>
        {showGreeting && !open && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className="bg-white text-gray-800 text-sm shadow-lg rounded-lg px-4 py-2 max-w-[220px]"
          >
            👋 Hi there! How can we help you today?
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Chat Window --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 bg-white text-gray-900 w-72 rounded-2xl shadow-2xl p-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-2 mb-3">
              <div className="flex items-center gap-2">
                <img
                  src="https://i.ibb.co/3N1Bc9h/profile-pic.jpg"
                  alt="Muruliraj"
                  className="w-10 h-10 rounded-full border"
                />
                <div>
                  <p className="font-semibold">Muruliraj Photography</p>
                  <p className="text-xs text-green-600">Online</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Message Prompt */}
            <a
              href={baseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-100 hover:bg-green-200 text-green-700 px-3 py-2 rounded-lg text-sm font-medium text-center transition"
            >
              Start WhatsApp Chat
            </a>

            <p className="text-[11px] text-gray-500 mt-3 text-center">
              Chat via WhatsApp — response within minutes!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
