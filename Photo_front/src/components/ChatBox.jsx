import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function ChatBox() {
  const whatsappNumber = "+919480661565";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber.replace("+", "")}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center z-50"
    >
      <FaWhatsapp className="text-[22px]" />
    </motion.a>
  );
}

