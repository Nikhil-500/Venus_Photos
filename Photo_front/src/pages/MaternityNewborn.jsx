import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Pagex from "../components/Pagex";

// ✅ Assets
import ted5 from "../assets/ted5.jpg";
import mat from "../assets/mat.jpg";
import mat1 from "../assets/mat1.jpg";
import mat2 from "../assets/mat2.jpg";
import mat3 from "../assets/mat3.jpg";
import ne from "../assets/ne.jpg";
import ne1 from "../assets/ne1.jpg";
import ne2 from "../assets/ne2.jpg";
import ne3 from "../assets/ne3.jpg";
import fm from "../assets/fm.jpg";
import fm1 from "../assets/fm1.jpg";
import fm2 from "../assets/fm2.jpg";
import fm3 from "../assets/fm3.jpg";
import ba from "../assets/ba.jpg";
import ba1 from "../assets/ba1.jpg";
import ba2 from "../assets/ba2.jpg";
import ba3 from "../assets/ba3.jpg";

export default function MaternityNewborn() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const [selectedImage, setSelectedImage] = useState(null);

  const sliderImages = [mat1, ne1, fm1, ba1];

  const categories = {
    "Maternity Shoots": [mat, mat1, mat2, mat3],
    "Newborn Sessions": [ne, ne1, ne2, ne3],
    "Family Moments": [fm, fm1, fm2, fm3],
    "Baby Potraits": [ba, ba1, ba2, ba3],
  };

  const allImages = Object.values(categories).flat();

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
            Maternity, Newborn & Family Photography
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Celebrate love, life, and the beautiful bond of family through timeless photography.
          </p>
        </div>
      </div>

      {/* --- Category & Gallery --- */}
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
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

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {displayedImages.map((img, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative overflow-hidden rounded-xl group shadow-lg hover:shadow-purple-600/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* --- Book Now --- */}
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10 items-center py-20 max-w-6xl mx-auto px-6">
          <motion.img
            src={ted5}
            alt="Maternity Shoot"
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-accent">
              Cherish Every Precious Moment
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              From maternity warmth to newborn smiles, we craft emotional
              stories through elegant and heartfelt imagery.
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
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-8 text-white text-3xl font-bold hover:text-purple-400"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
