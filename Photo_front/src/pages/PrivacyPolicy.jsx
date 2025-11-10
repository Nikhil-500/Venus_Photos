import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function PrivacyPolicy() {
  const dataTypes = [
    "Name and contact information (email, phone number)",
    "Submitted queries or feedback via forms",
    "Booking details and session preferences",
    "Device and browser information for analytics",
  ];

  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16 text-gray-200"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-accent mb-6">Privacy Policy</h1>

      <motion.p
        className="text-gray-400 leading-relaxed mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We value your privacy. Any information collected through this website — such as contact details or submitted forms — will be kept strictly confidential and used only for communication regarding our services.
      </motion.p>

      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-accent mb-3">What We Collect</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          {dataTypes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </motion.div>

      <motion.p
        className="text-gray-400 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        We never share your personal information with third parties. All data is stored securely and used solely to improve your experience with our services.
      </motion.p>

      <motion.p
        className="text-gray-400 mb-6 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <Mail className="w-5 h-5 text-accent" />
        For any privacy concerns, contact us at{" "}
        <a
          href="https://mail.google.com/mail/?view=cm&to=info@murulirajclicks.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline hover:text-accent/80 transition"
        >
          info@murulirajclicks.com
        </a>
      </motion.p>

      <motion.p
        className="text-gray-400 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        Your trust means everything to us — we’re committed to protecting your personal data.
      </motion.p>
    </motion.div>
  );
}
