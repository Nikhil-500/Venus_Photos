import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { useNavigate } from "react-router-dom";

// 🖼️ Local assets (replace with real file paths if needed)
import ted2 from "../assets/ted2.jpg";
import fa from "../assets/fa.jpg";
import fa1 from "../assets/fa1.jpg";
import fa2 from "../assets/fa2.jpg";
import fa3 from "../assets/fa3.jpg";
import ed from "../assets/ed.jpg";
import ed1 from "../assets/ed1.jpg";
import ed2 from "../assets/ed2.jpg";
import ed3 from "../assets/ed3.jpg";
import ru from "../assets/ru.jpg";
import ru1 from "../assets/ru1.jpg";
import ru2 from "../assets/ru2.jpg";
import ru3 from "../assets/ru3.jpg";
import out from "../assets/out.jpg";
import out1 from "../assets/out1.jpg";
import out2 from "../assets/out2.jpg";
import out3 from "../assets/out3.jpg";

export default function ModelFashion() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Define slider and category images properly
  const sliderImages = [fa1, ed1, ru1, out1];

  const categories = {
    "Fashion Shoots": [fa, fa1, fa2, fa3],
    "Editorial": [ed, ed1, ed2, ed3],
    "Runway Shows": [ru, ru1, ru2, ru3],
    "Outdoor Shoots": [out, out1, out2, out3],
  };

  const allImages = Object.values(categories).flat();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  // ✅ Smooth navigation to Book Now
  const handleBookNow = () => {
    navigate("/booknow");
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  // ✅ Image filtering
  const displayedImages =
    selectedCategory === "Show All" ? allImages : categories[selectedCategory];

  // ✅ Scroll progress
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
      {/* 🔝 Scroll progress bar */}
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
            alt="Fashion Slide"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-purple-400 mb-4"
          >
            Model & Fashion Photography
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-300 max-w-2xl text-lg leading-relaxed"
          >
            Stylish. Bold. Timeless. Capturing individuality and creative
            expression.
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
                    alt={`Fashion ${i}`}
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
            src={ted2}
            alt="Fashion Portrait"
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
            whileHover={{ scale: 1.03 }}
          />
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-accent">
              Fashion That Speaks
            </h3>
            <p className="text-textMut mb-4 leading-relaxed">
              We turn fashion into art — every pose, every frame tells a unique
              story.
            </p>
            <p className="text-textMut mb-6 leading-relaxed">
              From studio elegance to street spontaneity, we make your style
              iconic.
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
