import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { useNavigate } from "react-router-dom";

// Local assets
import weddingImg from "../assets/wedding.jpg";
import ws from "../assets/ws.jpg";
import ws1 from "../assets/ws1.jpg";
import ws2 from "../assets/ws2.jpg";
import ws3 from "../assets/ws3.jpg";
import ws4 from "../assets/ws4.jpg";
import ws5 from "../assets/ws5.jpg";
import ws6 from "../assets/ws6.jpg";
import hi from "../assets/hi.jpg";
import hi1 from "../assets/hi1.jpg";
import hi2 from "../assets/hi2.jpg";
import hi3 from "../assets/hi3.jpg";
import ch from "../assets/ch.jpg";
import ch1 from "../assets/ch1.jpg";
import ch2 from "../assets/ch2.jpg";
import ch3 from "../assets/ch3.jpg";
import br4 from "../assets/br4.jpg";
import br5 from "../assets/br5.jpg";
import br6 from "../assets/br6.jpg";
import br8 from "../assets/br8.jpg";
import mi from "../assets/mi.jpg";
import mi2 from "../assets/mi2.jpg";
import mi4 from "../assets/mi4.jpg";
import mi5 from "../assets/mi5.jpg";

export default function Wedding() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Hero Slider Images
  const sliderImages = [ws, ws1, ws2, ws3, ws4, ws5, ws6];

  // ✅ Image Categories
  const categories = {
    "Hindu Wedding": [hi, hi1, hi2, hi3],
    "Christian Wedding": [ch, ch1, ch2, ch3],
    "Muslim Wedding": [br4, br5, br6, br8],
    "Marvadi Wedding": [mi, mi2, mi4, mi5],
  };

  // ✅ Combine all images for "Show All"
  const allImages = Object.values(categories).flat();

  // ✅ Auto Slide for Hero
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // ✅ Navigation to Book Now
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

  // ✅ Lightbox Navigation
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

      {/* --- Fullscreen Background Slider --- */}
      <div className="relative w-screen h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={sliderImages[index]}
            alt={`Wedding Slide ${index + 1}`}
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
            Bridal / Pre-Wedding / Wedding Photography
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-300 max-w-2xl text-lg leading-relaxed drop-shadow-md"
          >
            Capturing timeless love stories filled with emotion, elegance, and
            unforgettable beauty.
          </motion.p>
        </div>
      </div>

      {/* --- Wedding Info Section (before gallery) --- */}
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10 items-center py-20 max-w-6xl mx-auto px-6">
          <motion.img
            src={weddingImg}
            alt="Wedding Photography"
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-accent">
              Celebrate Every Emotion
            </h3>
            <p className="text-textMut mb-4 leading-relaxed">
              From the nervous laughter before the vows to the tears of joy
              during the ceremony, our photography captures every genuine
              emotion in cinematic detail.
            </p>
            <p className="text-textMut mb-6 leading-relaxed">
              Our goal is to make you relive your special day each time you look
              at your photos — elegant, timeless, and truly personal.
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

      {/* --- Wedding Gallery Section (moved below) --- */}
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

      {/* --- 🖼️ Lightbox Modal (with next/prev) --- */}
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
