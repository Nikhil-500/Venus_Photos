import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Career() {
  const roles = [
    "Photographer – Studio & Outdoor",
    "Photo Editor – Lightroom & Photoshop",
    "Graphic Designer – Branding & Social Media",
    "Client Coordinator – Scheduling & Communication",
    "Social Media Manager – Content & Engagement",
  ];

  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16 text-gray-200"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-accent mb-6">Career Opportunities</h1>

      <motion.p
        className="text-gray-400 leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Join our creative team of passionate photographers, editors, and designers.
        We’re always looking for talented individuals who love visual storytelling.
      </motion.p>

      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-accent mb-3">Current Openings</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          {roles.map((role, i) => (
            <li key={i}>{role}</li>
          ))}
        </ul>
      </motion.div>

      <motion.p
        className="text-gray-400 mb-6 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Mail className="w-5 h-5 text-accent" />
        Send your updated resume and portfolio to{" "}
        <a
          href="https://mail.google.com/mail/?view=cm&to=info@murulirajclicks.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline hover:text-accent/80 transition"
        >
          info@murulirajclicks.com
        </a>{" "}
        and we’ll get back to you if you’re a fit.
      </motion.p>

      <motion.p
        className="text-gray-400 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Passion meets purpose here — let your creativity shine with us.
      </motion.p>
    </motion.div>
  );
}
