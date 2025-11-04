import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16 text-gray-200"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-accent mb-6">Privacy Policy</h1>
      <p className="text-gray-400 leading-relaxed mb-4">
        We value your privacy. Any information collected through this website
        — such as contact details or submitted forms — will be kept strictly confidential
        and used only for communication regarding our services.
      </p>
      <p className="text-gray-400">
        We never share your personal information with third parties.
        For any privacy concerns, contact us at{" "}
        <a href="mailto:muruliraj5@gmail.com" className="text-accent underline">
          muruliraj5@gmail.com
        </a>.
      </p>
    </motion.div>
  );
}
