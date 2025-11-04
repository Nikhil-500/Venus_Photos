import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

// 🖼 Dummy logos (replace with your real client logos)
import logo1 from "../assets/client1.jpg";
import logo2 from "../assets/client2.jpg";
import logo3 from "../assets/client3.jpg";
import logo4 from "../assets/client4.jpg";
import logo5 from "../assets/client5.jpg";

const logos = [logo1, logo2, logo3, logo4, logo5];

export default function ClientsSection() {
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  // 📱 Detect screen size for responsive speed & spacing
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🎞 Smooth continuous animation
  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        ease: "linear",
        duration: isMobile ? 50 : 30, // slower on mobile
        repeat: Infinity,
      },
    });
  }, [controls, isMobile]);

  return (
    <section className="py-20 bg-gradient-to-b from-black via-zinc-900 to-black text-center relative overflow-hidden border-t border-purple-800/20">
      {/* --- Heading --- */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-purple-400 mb-12"
      >
        Our Esteemed Clients
      </motion.h2>

      {/* --- Logo Slider --- */}
      <div
        className="relative overflow-hidden w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex items-center"
          animate={paused ? {} : controls}
          style={{
            gap: isMobile ? "2.5rem" : "4rem", // tighter gap for mobile
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <motion.div
              key={i}
              className={`flex-shrink-0 ${
                isMobile ? "w-20 h-20" : "w-28 h-28 md:w-36 md:h-36"
              } relative`}
              whileHover={{ scale: 1.1 }}
            >
              <motion.img
                src={logo}
                alt={`Client ${i + 1}`}
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 border-2 border-purple-500/30 hover:border-purple-400 bg-white/10 shadow-md p-2"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- Subtext --- */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-10 text-gray-400 text-sm md:text-base px-6"
      >
        Trusted by top brands, studios, and couples who believe in timeless storytelling.
      </motion.p>
    </section>
  );
}
