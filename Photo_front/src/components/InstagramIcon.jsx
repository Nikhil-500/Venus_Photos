import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

export default function InstagramIcon() {
  const instagramLink = "https://www.instagram.com/muruliraj_photography";

  return (
    <motion.a
      href={instagramLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-6 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white p-4 rounded-full shadow-xl flex items-center justify-center z-40"
    >
      <FaInstagram className="text-2xl" />
    </motion.a>
  );
}
