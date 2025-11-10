import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";

export default function FacebookIcon() {
  const facebookLink = "https://www.facebook.com/murulirajclicks/";

  return (
    <motion.a
      href={facebookLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-44 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center z-40"
    >
      <FaFacebookF className="text-[22px]" />
    </motion.a>
  );
}
