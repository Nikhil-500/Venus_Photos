import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { useNavigate } from "react-router-dom";

// Local assets
import ad1 from "../assets/ad1.jpg";
import pp from "../assets/pp.jpg";
import pp1 from "../assets/pp1.jpg";
import pp2 from "../assets/pp2.jpg";
import pp3 from "../assets/pp3.jpg";
import pre from "../assets/pre.jpg";
import pre1 from "../assets/pre1.jpg";
import pre2 from "../assets/pre2.jpg";
import pre3 from "../assets/pre3.jpg";
import pu from "../assets/pu.jpg";
import pu1 from "../assets/pu1.jpg";
import pu2 from "../assets/pu2.jpg";
import pu3 from "../assets/pu3.jpg";
import bh from "../assets/bh.jpg";
import bh1 from "../assets/bh1.jpg";
import bh2 from "../assets/bh2.jpg";
import bh3 from "../assets/bh3.jpg";

export default function PoliticalPromotions() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Hero Slider Images
  const sliderImages = [pp, pre, pu, bh];

  // ✅ Categories
  const categories = {
    "Campaign Rallies": [pp, pp1, pp2, pp3],
    "Press Meets": [pre, pre1, pre2, pre3],
    "Public Gatherings": [pu, pu1, pu2, pu3],
    "Behind The Scenes": [bh, bh1, bh2, bh3],
  };

  const allImages = Object.values(categories).flat();

  // ✅ Auto Slide for Hero
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // ✅ Navigate to Book Now
  const handleBookNow = () => {
    navigate("/booknow");
    setTimeout(() => window.scrollTo(0, 0), 200);
  };

  // ✅ Filter Logic
  const displayedImages =
    selectedCategory === "Show All"
      ? allImages
      : categories[selectedCategory] || [];

  // ✅ Scroll progress bar
  const { scrollYProgress } = useScroll();

  // ✅ Lightbox navigation
  const currentIndex = displayedImages.indexOf(selectedImage);
  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedImage(
      displayedImages[
        (currentIndex - 1 + displayedImages.length) % displayedImages.length
      ]
    );
  };
  const showNext = (e) => {
    e.stopPropagation();
    setSelectedImage(
      displayedImages[(currentIndex + 1) % displayedImages.length]
    );
  };

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* 🔝 Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-[999]"
      />

      {/* --- Fullscreen Background Slider --- */}
      <div className="relative w-screen h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={sliderImages[index]}
            alt={`Political Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

        {/* Centered Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-purple-400 mb-4 drop-shadow-lg"
          >
            Political Promotions & Campaign Photography
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-300 max-w-2xl text-lg leading-relaxed drop-shadow-md"
          >
            Dynamic visual storytelling for campaigns, rallies, and leadership
            moments that inspire public trust.
          </motion.p>
        </div>
      </div>

      {/* --- Gallery Section --- */}
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 border-b border-gray-700 pb-4">
            {["Show All", ...Object.keys(categories)].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-purple-600 text-white"
                    : "bg-transparent text-gray-400 hover:text-white hover:bg-purple-500/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {displayedImages.map((img, i) => (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl group shadow-lg hover:shadow-purple-600/40 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="text-white font-medium">View Image</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* --- Info Section (with Book Now) --- */}
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10 items-center py-20 max-w-6xl mx-auto px-6">
          <motion.img
            src={ad1}
            alt="Political Promotion"
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-accent">
              Powerful Imagery for Powerful Leaders
            </h3>
            <p className="text-textMut mb-4 leading-relaxed">
              From campaign rallies to press meets, we focus on crafting visuals
              that represent your leadership and inspire public confidence.
            </p>
            <p className="text-textMut mb-6 leading-relaxed">
              Every frame is designed to capture emotion, energy, and essence —
              turning moments into movements.
            </p>
            <button
              onClick={handleBookNow}
              className="px-6 py-3 bg-accent text-white rounded-full font-semibold hover:bg-purple-700 transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* --- Lightbox Modal --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            {/* Prev / Next Buttons */}
            <button
              onClick={showPrev}
              className="absolute left-6 text-white text-4xl font-bold hover:text-purple-400"
            >
              ‹
            </button>
            <button
              onClick={showNext}
              className="absolute right-6 text-white text-4xl font-bold hover:text-purple-400"
            >
              ›
            </button>
            <button
              className="absolute top-6 right-8 text-white text-3xl font-bold hover:text-purple-400 transition"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
