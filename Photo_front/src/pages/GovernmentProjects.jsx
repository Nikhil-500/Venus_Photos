import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Pagex from "../components/Pagex";

// ✅ Local assets
import govHero from "../assets/govHero.jpg";
import infra1 from "../assets/infra1.jpg";
import infra2 from "../assets/infra2.jpg";
import infra3 from "../assets/infra3.jpg";
import infra4 from "../assets/infra4.jpg";
import cult1 from "../assets/cult1.jpg";
import cult2 from "../assets/cult2.jpg";
import cult3 from "../assets/cult3.jpg";
import camp1 from "../assets/camp1.jpg";
import camp2 from "../assets/camp2.jpg";
import camp3 from "../assets/camp3.jpg";
import comm1 from "../assets/comm1.jpg";
import comm2 from "../assets/comm2.jpg";
import comm3 from "../assets/comm3.jpg";

export default function GovernmentProjects() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Hero Slider
  const sliderImages = [govHero, infra1, cult1, camp1, comm1];

  // ✅ Categories
  const categories = {
    "Infrastructure Development": [infra1, infra2, infra3, infra4],
    "Cultural Heritage Projects": [cult1, cult2, cult3],
    "Public Awareness Campaigns": [camp1, camp2, camp3],
    "Community Outreach Programs": [comm1, comm2, comm3],
  };

  const allImages = Object.values(categories).flat();

  // ✅ Auto-slider logic
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
    setSelectedImage(
      displayedImages[(currentIndex + 1) % displayedImages.length]
    );
  };

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* --- Scroll Progress Bar --- */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-[999]"
      />

      {/* --- Hero Slider --- */}
      <div className="relative w-screen h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={sliderImages[index]}
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-purple-400 mb-4">
            Government & Development Projects
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Documenting national progress — from infrastructure to community programs —
            with creative precision and purpose.
          </p>
        </div>
      </div>

      {/* --- Info & Book Now Section (Moved Before Gallery) --- */}
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10 items-center py-20 max-w-6xl mx-auto px-6">
          <motion.img
            src={govHero}
            alt="Government Project"
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          />
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-purple-400">
              Documenting Progress & Purpose
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              From rural development programs to national campaigns, our lens captures
              every impactful story of progress and transformation. Each project
              highlights innovation, unity, and the power of collective change.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We believe that every government initiative deserves to be showcased
              with clarity, pride, and professionalism — reflecting the nation’s
              progress through compelling visuals.
            </p>
            <button
              onClick={handleBookNow}
              className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* --- Gallery & Category Section (Moved to End) --- */}
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
          </motion.div>
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
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-8 text-white text-3xl font-bold hover:text-purple-400 transition"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
