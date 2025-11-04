// src/pages/Services.jsx
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Pagex from "../components/Pagex";
import AnimatedSection from "../components/AnimatedSection";
import ClientsSection from "../components/ClientsSection";

// ✅ Showcase images
import ted from "../assets/ted.jpg";
import ted1 from "../assets/ted1.jpg";
import ted2 from "../assets/ted2.jpg";
import ted3 from "../assets/ted3.jpg";
import ted5 from "../assets/ted5.jpg";
import ad from "../assets/ad.jpg";
import ad1 from "../assets/ad1.jpg";
import ad2 from "../assets/ad2.jpg";
import ted9 from "../assets/ted9.jpg";

// ✅ Service images
import ws4 from "../assets/ws4.jpg";
import re from "../assets/re.jpg";
import pp1 from "../assets/pp1.jpg";
import comm1 from "../assets/comm1.jpg";
import ru2 from "../assets/ru2.jpg";
import con1 from "../assets/con1.jpg";
import lpt2 from "../assets/lpt2.jpg";
import anu2 from "../assets/anu2.jpg";
import mat from "../assets/mat.jpg";

// ✅ Showcase images (8 total)
const showcaseImages = [ted, ted1, ted2, ted3, ted5, ad, ad1, ad2];

// ✅ Updated Services List (9 total)
const services = [
  {
    title: "Architectural Photography",
    desc: "Capturing the design essence and structural beauty through creative perspectives.",
    link: "/services/architecture",
    Image: lpt2,
  },
  {
    title: "Bridal / Wedding / Pre-Wedding Photography",
    desc: "Cinematic storytelling that captures emotions, traditions, and timeless love stories.",
    link: "/services/wedding",
    Image: ws4,
  },
  {
    title: "Political Promotions",
    desc: "Professional photography for campaigns, rallies, and public events.",
    link: "/services/political-promotions",
    Image: pp1,
  },
  {
    title: "Government Projects",
    desc: "Documenting major government initiatives with impactful and aesthetic visuals.",
    link: "/services/government-projects",
    Image: comm1,
  },
  {
    title: "Corporate Promotion",
    desc: "Highlighting business identity through modern, professional photography.",
    link: "/services/corporate-promotion",
    Image: con1,
  },
  {
    title: "Traditional Events",
    desc: "Capturing cultural festivals and heritage celebrations with vibrance.",
    link: "/services/traditional-events",
    Image: re,
  },
  {
    title: "Model & Fashion Photography",
    desc: "Stylized portraiture and creative visuals for models, influencers, and brands.",
    link: "/services/model-fashion",
    Image: ru2,
  },
  {
    title: "School Promotion",
    desc: "Capturing the spirit of school life — performances, proud moments, and joyful interactions through dynamic, story-driven visuals.",
    link: "/services/school-promotion",
    Image: anu2,
  },
  {
    title: "Maternity, Newborn & Toddler",
    desc: "Heartwarming and creative captures celebrating life’s most precious beginnings.",
    link: "/services/maternity-newborn",
    Image: mat,
  },
];

export default function Services() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* 🎥 Cinematic Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${ted9})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

      {/* --- Page Content --- */}
      <div className="relative z-10">
        {/* --- 🎞️ Visual Showcase --- */}
        <Pagex title="Our Work" subtitle="Visual Showcase">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-purple-400 mb-3">
                Visual Showcase
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                A glimpse into the artistry behind our lens — where every frame
                captures emotion, elegance, and timeless beauty.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {showcaseImages.map((img, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl group shadow-lg hover:shadow-purple-600/40 transition-all duration-300"
                >
                  <img
                    src={img}
                    alt={`Showcase ${i + 1}`}
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <span className="text-white text-lg font-medium">
                      View Shot
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Pagex>

        {/* --- 📸 Services Section --- */}
<Pagex title="Services" subtitle="What I Offer">
  <AnimatedSection>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((s) => (
        <Link
          to={s.link}
          key={s.title}
          className="group relative bg-white/10 border border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-400 hover:scale-[1.03] transition-all duration-300 backdrop-blur-sm shadow-lg"
        >
          {/* Image (shorter height) */}
          <div className="relative w-full h-[220px] overflow-hidden">
            <img
              src={s.Image}
              alt={s.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>
          </div>

          {/* Text Content (always visible) */}
          <div className="p-6 text-left">
            <h4 className="text-2xl font-semibold mb-2 text-purple-400">
              {s.title}
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              {s.desc}
            </p>
            <span className="text-purple-400 font-medium underline hover:text-white">
              Learn More →
            </span>
          </div>
        </Link>
      ))}
    </div>
  </AnimatedSection>
</Pagex>
      </div>

      {/* --- 🖼️ Image Modal --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <button
              className="absolute top-6 right-8 text-white text-3xl font-bold hover:text-purple-400 transition"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Clients Section --- */}
      <ClientsSection />
    </div>
  );
}
