// src/pages/Packages.jsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Pagex from "../components/Pagex";
import ClientsSection from "../components/ClientsSection";

// ✅ Local assets
import st from "../assets/st.jpg";
import st1 from "../assets/st1.jpg";
import st3 from "../assets/st3.jpg";
import std from "../assets/std.jpg";
import std1 from "../assets/std1.jpg";
import std2 from "../assets/std2.jpg";
import prr from "../assets/prr.jpg";
import prr1 from "../assets/prr1.jpg";
import prr2 from "../assets/prr2.jpg";
import prr3 from "../assets/prr3.jpg";
import st4 from "../assets/st4.jpg";
import pr from "../assets/pr.jpg";
import pr1 from "../assets/pr1.jpg";
import pr2 from "../assets/pr2.jpg";

// ✅ Service images for added 6 packages
import ws4 from "../assets/ws4.jpg"; // Wedding
import pp1 from "../assets/pp1.jpg"; // Drone
import ru2 from "../assets/ru2.jpg"; // Model & Fashion
import re from "../assets/re.jpg"; // Traditional Events
import anu2 from "../assets/anu2.jpg"; // School Promotion
import mat from "../assets/mat.jpg"; // Maternity & Newborn

// ✅ Slider images (unchanged)
const sliderImages = [
  { img: st, label: "Starter Shoot" },
  { img: st1, label: "Starter Shoot" },
  { img: st3, label: "Starter Shoot" },
  { img: std, label: "Standard Shoot" },
  { img: std1, label: "Standard Shoot" },
  { img: std2, label: "Standard Shoot" },
  { img: prr, label: "Premium Shoot" },
  { img: prr1, label: "Premium Shoot" },
  { img: prr2, label: "Premium Shoot" },
  { img: prr3, label: "Premium Shoot" },
];

// ✅ First 3 default packages (unchanged)
const packages = [
  {
    title: "Starter Shoot",
    price: "₹8,999",
    features: ["2 Hours Session", "10 Edited Photos", "Online Gallery"],
    image: pr1,
  },
  {
    title: "Standard Shoot",
    price: "₹15,999",
    features: ["5 Hours Session", "25 Edited Photos", "Print-Ready Files"],
    image: pr,
  },
  {
    title: "Premium Shoot",
    price: "₹29,999",
    features: ["Full Day Coverage", "Unlimited Photos", "Photo Album Included"],
    image: pr2,
  },
];

// ✅ Newly added 6 real packages (below the above)
const morePackages = [
  {
    title: "Wedding Package",
    price: "₹49,999",
    features: [
      "Full-Day Cinematic Coverage",
      "Drone Shoot Included",
      "Pre-Wedding + Wedding Highlights",
    ],
    image: ws4,
  },
  {
    title: "Drone Package",
    price: "₹19,999",
    features: [
      "4K Aerial Footage",
      "Certified Drone Pilot",
      "Event/Property/Outdoor Shoots",
    ],
    image: pp1,
  },
  {
    title: "Model & Fashion Package",
    price: "₹24,999",
    features: [
      "Studio & Outdoor Shoots",
      "Professional Retouching",
      "Unlimited Outfit Changes",
    ],
    image: ru2,
  },
  {
    title: "Traditional Events Package",
    price: "₹17,999",
    features: [
      "Cultural & Festival Coverage",
      "Vibrant Color Correction",
      "Full-Event Photo Set",
    ],
    image: re,
  },
  {
    title: "School Promotion Package",
    price: "₹13,999",
    features: [
      "Annual Day & Event Shoot",
      "Drone & Crowd Coverage",
      "Highlight Video Included",
    ],
    image: anu2,
  },
  {
    title: "Maternity & Newborn Package",
    price: "₹14,999",
    features: [
      "2 Hour Shoot",
      "Props & Concept Setup",
      "10 Retouched Photos",
    ],
    image: mat,
  },
];

export default function Packages() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ✅ Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleBookNow = (pkgTitle) => {
    navigate("/booknow", { state: { package: pkgTitle } });
  };

  return (
    <>
      {/* --- 🌅 Full-Screen Auto-Sliding Hero --- */}
      <section className="relative w-screen h-screen overflow-hidden m-0 p-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={sliderImages[index].img}
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>

        {/* Centered Label */}
        <motion.div
          key={sliderImages[index].label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-6xl md:text-7xl text-purple-400 font-[Great_Vibes,cursive] tracking-wider drop-shadow-2xl text-center"
          style={{
            fontFamily: "'Great Vibes', cursive",
            letterSpacing: "2px",
          }}
        >
          {sliderImages[index].label}
        </motion.div>
      </section>

      {/* --- 📦 Packages Section --- */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative py-24"
        style={{
          backgroundImage: `url(${st4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Background overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"
        ></motion.div>

        <div className="relative z-10">
          <Pagex
            title="Our Packages"
            subtitle="Choose the perfect package for your special occasion."
          >
            {/* --- 3 Default Packages --- */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="grid md:grid-cols-3 gap-8 mb-16"
            >
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group backdrop-blur-lg bg-white/10 border border-purple-400/30 rounded-2xl overflow-hidden hover:shadow-purple-400/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="overflow-hidden h-52">
                    <motion.img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold mb-2 text-white">
                      {pkg.title}
                    </h3>
                    <p className="text-purple-400 text-3xl font-bold mb-4">
                      {pkg.price}
                    </p>
                    <ul className="text-gray-300 space-y-1 mb-6">
                      {pkg.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center justify-center gap-2"
                        >
                          <span className="text-purple-400">✔</span> {f}
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleBookNow(pkg.title)}
                      className="mt-2 px-6 py-2 bg-purple-500 text-black font-semibold rounded-lg hover:bg-purple-400 transition duration-300"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* --- 6 More Real Packages --- */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {morePackages.map((pkg, index) => (
                <motion.div
                  key={pkg.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group backdrop-blur-lg bg-white/10 border border-purple-400/30 rounded-2xl overflow-hidden hover:shadow-purple-400/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="overflow-hidden h-52">
                    <motion.img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold mb-2 text-white">
                      {pkg.title}
                    </h3>
                    <p className="text-purple-400 text-3xl font-bold mb-4">
                      {pkg.price}
                    </p>
                    <ul className="text-gray-300 space-y-1 mb-6">
                      {pkg.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center justify-center gap-2"
                        >
                          <span className="text-purple-400">✔</span> {f}
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleBookNow(pkg.title)}
                      className="mt-2 px-6 py-2 bg-purple-500 text-black font-semibold rounded-lg hover:bg-purple-400 transition duration-300"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Pagex>
        </div>
      </motion.section>

      {/* --- Clients Section --- */}
      <ClientsSection />
    </>
  );
}
