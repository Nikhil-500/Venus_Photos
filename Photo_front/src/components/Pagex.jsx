import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Pagex({
  title,
  subtitle,
  children,
  fullscreen = false,
  overlay = false,
}) {
  // ✅ Add smooth scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.section
      className={`
        relative 
        ${fullscreen ? "w-screen min-h-screen" : "min-h-[80vh] max-w-7xl mx-auto"} 
        py-20 px-6 overflow-hidden
      `}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-0"></div>
      )}

      <div className="relative z-10 text-center">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-purple-400 mb-3"
          >
            {title}
          </motion.h2>
        )}

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}
