import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { useNavigate } from "react-router-dom";

// ✅ Local assets
import tem from "../assets/tem.jpg";
import tem1 from "../assets/tem1.jpg";
import tem2 from "../assets/tem2.jpg";
import tem3 from "../assets/tem3.jpg";
import cu from "../assets/cu.jpg";
import cu1 from "../assets/cu1.jpg";
import cu2 from "../assets/cu2.jpg";
import cu3 from "../assets/cu3.jpg";
import re from "../assets/re.jpg";
import re1 from "../assets/re1.jpg";
import re2 from "../assets/re2.jpg";
import re3 from "../assets/re3.jpg";
import re4 from "../assets/re4.jpg";
import ted3 from "../assets/ted3.jpg"; // ✅ FIXED missing import

export default function TraditionalEvents() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Hero images
  const sliderImages = [tem, cu, re, re4];

  // ✅ Categories
  const categories = {
    "Temple Festivals": [tem, tem1, tem2, tem3],
    "Cultural Dances": [cu, cu1, cu2, cu3],
    "Religious Events": [re, re1, re2, re3, re4], // ✅ Fixed stray comma
  };

  const allImages = Object.values(categories).flat();

  // ✅ Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleBookNow = () => {
    navigate("/booknow");
    setTimeout(() => window.scrollTo(0, 0), 200);
  };

  const displayedImages =
    selectedCategory === "Show All" ? allImages : categories[selectedCategory];

  const { scrollYProgress } = useScroll();

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
    setSelectedImage(displayedImages[(currentIndex + 1) % displayedImages.length]);
  };

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* 🔝 Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-[999]"
      />

      {/* --- Hero Section --- */}
      <div className="relative w-screen h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={sliderImages[index]}
            alt="Traditional Event"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-purple-400 mb-4"
          >
            Traditional & Cultural Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-300 max-w-2xl text-lg leading-relaxed"
          >
            Capturing traditions, emotions, and colors that define our rich heritage.
          </motion.p>
        </div>
      </div>

      {/* --- Category Section --- */}
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

          {/* Gallery Grid */}
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
                  className="relative overflow-hidden rounded-xl group shadow-lg hover:shadow-purple-600/40 cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Event ${i}`}
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

      {/* --- Info Section --- */}
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10 items-center py-20 max-w-6xl mx-auto px-6">
          <motion.img
            src={ted3}
            alt="Tradition"
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-accent">
              Every Culture Tells a Story
            </h3>
            <p className="text-textMut mb-4 leading-relaxed">
              From festive celebrations to family rituals, we preserve every detail
              through timeless imagery.
            </p>
            <p className="text-textMut mb-6 leading-relaxed">
              Our mission is to bring the warmth and meaning of your traditions to
              life — frame by frame.
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

      {/* --- Lightbox --- */}
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
