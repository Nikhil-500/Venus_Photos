import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";

// ✅ Local assets
import architectureImg from "../assets/architecture.jpg";
import res from "../assets/res.jpg";
import res1 from "../assets/res1.jpg";
import res2 from "../assets/res2.jpg";
import res3 from "../assets/res3.jpg";
import ten from "../assets/ten.jpg";
import ten1 from "../assets/ten1.jpg";
import ten2 from "../assets/ten2.jpg";
import ten3 from "../assets/ten3.jpg";
import in1 from "../assets/in1.jpg";
import in2 from "../assets/in2.jpg";
import in3 from "../assets/in3.jpg";
import in4 from "../assets/in4.jpg";
import ex from "../assets/ex.jpg";
import ex1 from "../assets/ex1.jpg";
import ex2 from "../assets/ex2.jpg";
import ex3 from "../assets/ex3.jpg";

export default function Architecture() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Hero slider images
  const sliderImages = [architectureImg,res1, com2, in3, ex3];

  // ✅ Categories
  const categories = {
    "Residential": [res, res1, res2, res3],
    "Commercial": [lpt, lpt1, lpt2, lpt3],
    "Interiors": [in1, in2, in3, in4],
    "Exteriors": [ex, ex1, ex2, ex3],
  };

  // Combine all images for "Show All"
  const allImages = Object.values(categories).flat();

  // ✅ Auto slider
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
      {/* 🔝 Scroll Progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-[999]"
      />

      {/* --- Hero Section with Background Slider --- */}
      <div className="relative w-screen h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={sliderImages[index]}
            alt={`Architecture Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-purple-400 mb-4 drop-shadow-lg"
          >
            Architectural Photography
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-300 max-w-2xl text-lg leading-relaxed drop-shadow-md"
          >
            Where structure meets art — capturing the essence of design, geometry, and light.
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

      {/* --- Info Section --- */}
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10 items-center py-20 max-w-6xl mx-auto px-6">
          <motion.img
            src={architectureImg}
            alt="Architecture Photography"
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-accent">
              Framing Design & Light
            </h3>
            <p className="text-textMut mb-4 leading-relaxed">
              We highlight the beauty of structures through geometry, perspective, and the magic of light. 
              From historic landmarks to modern buildings — every detail is captured with purpose.
            </p>
            <p className="text-textMut mb-6 leading-relaxed">
              Our goal is to make each photograph tell a story of architectural excellence — elegant, powerful, and timeless.
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

      {/* --- 🖼️ Lightbox Modal --- */}
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

            {/* Prev / Next */}
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

            {/* Close */}
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
