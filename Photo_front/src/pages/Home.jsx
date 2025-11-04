import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";
import ClientsSection from "../components/ClientsSection";
import cdd from "../assets/cdd.mp4";

// ✅ Local images
import a2 from "../assets/a2.jpg";
import k1 from "../assets/k1.jpg";
import k2 from "../assets/k2.jpg";
import cr from "../assets/cr.jpg";
import kkImg from "../assets/kk.jpg";

// ✅ Counter Hook
function useCountAnimation(target, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

export default function Home() {
  const navigate = useNavigate();

  const clientReviews = [
    {
      name: "Aarav Sharma",
      role: "Wedding Client",
      review:
        "The entire experience was seamless and heartwarming. Every photo feels alive — perfectly capturing our wedding emotions.",
      rating: 5,
    },
    {
      name: "Priya Menon",
      role: "Event Organizer",
      review:
        "Professional, punctual, and highly creative. The team delivered outstanding visuals that elevated our brand event beautifully.",
      rating: 5,
    },
    {
      name: "Karthik Reddy",
      role: "Corporate Shoot",
      review:
        "From concept to delivery, they exceeded expectations. Attention to detail and lighting was truly world-class.",
      rating: 4,
    },
    {
      name: "Divya Nair",
      role: "Family Portrait Session",
      review:
        "A truly talented team. The photographs captured our family's joy and personality perfectly. Highly recommend!",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % clientReviews.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + clientReviews.length) % clientReviews.length
    );

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, margin: "-100px" });

  const reviews = useCountAnimation(1300, 2000, isInView);
  const events = useCountAnimation(5000, 2000, isInView);
  const years = useCountAnimation(7, 2000, isInView);
  const projects = useCountAnimation(5000, 2000, isInView);

  const [showFullText, setShowFullText] = useState(false);

  const blogParagraph = `
Every couple has their own rhythm — our lens finds it. From candid laughter to emotional vows, 
discover how we freeze those raw, fleeting moments into timeless frames. 

We focus on real emotions — the spark between two souls. Each photo session blends creativity 
and storytelling, ensuring your love story feels authentic and unforgettable. 

Whether it’s a sunset beach shoot or a cozy indoor setup, our goal is to create magic with light, 
composition, and connection.
`;

  return (
    <>
      {/* --- 🎥 Hero Section --- */}
      <section className="relative w-full h-[90vh] md:h-screen overflow-hidden">
        <video
          src={cdd}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center md:items-end justify-center text-center md:text-right px-6 md:px-20 z-10 space-y-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-heading text-purple-400 mb-2"
          >
            Capturing Life’s Precious Moments
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 max-w-2xl text-lg md:text-right"
          >
            Welcome to{" "}
            <span className="text-white font-semibold">
              Muruliraj Photography
            </span>{" "}
            — capturing timeless love stories, one frame at a time.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            onClick={() => navigate("/services")}
            className="mt-4 px-8 py-3 bg-white text-black text-lg font-semibold rounded-md shadow-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300"
          >
            Explore Services →
          </motion.button>
        </div>
      </section>

      {/* --- 💬 Client Reviews (Fullscreen Box) --- */}
      <section className="relative py-0 bg-black text-center overflow-hidden">
        <div className="relative h-screen flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 p-10 text-white rounded-none"
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-bold text-purple-400 mb-10"
              >
                What Our Clients Say
              </motion.h2>

              <p className="text-xl max-w-3xl mx-auto text-gray-300 italic leading-relaxed mb-8">
                “{clientReviews[currentIndex].review}”
              </p>

              <h3 className="text-2xl font-semibold text-white mb-1">
                {clientReviews[currentIndex].name}
              </h3>
              <p className="text-gray-400 italic mb-3">
                {clientReviews[currentIndex].role}
              </p>
              <div className="text-yellow-400 text-lg">
                {"★".repeat(clientReviews[currentIndex].rating)}{" "}
                {"☆".repeat(5 - clientReviews[currentIndex].rating)}
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-6xl text-purple-400 hover:text-white transition"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-6xl text-purple-400 hover:text-white transition"
          >
            ›
          </button>
        </div>
      </section>

      {/* --- 🌟 Trusted by Thousands --- */}
      <motion.section
        ref={countRef}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-24 bg-gray-950 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-8">
          Trusted by Thousands
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 max-w-5xl mx-auto text-center">
          <div>
            <h3 className="text-3xl font-bold text-white">
              {reviews.toLocaleString()}+
            </h3>
            <p className="text-gray-400 mt-2">Reviews</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">
              {events.toLocaleString()}+
            </h3>
            <p className="text-gray-400 mt-2">Events Covered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">{years}+</h3>
            <p className="text-gray-400 mt-2">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">
              {projects.toLocaleString()}+
            </h3>
            <p className="text-gray-400 mt-2">Projects Delivered</p>
          </div>
        </div>
      </motion.section>

      {/* --- 📅 Book Your Date (Left) + Couple Blog (Right) --- */}
      <section className="relative bg-black py-24 text-white px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Book Form */}
          <div className="bg-white/10 backdrop-blur-lg border border-gray-700 p-8 rounded-2xl shadow-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-purple-400 mb-8 text-left"
            >
              Book Your Date
            </motion.h2>
            <BookForm />
          </div>

          {/* Right: Couple Blog */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.img
              src={kkImg}
              alt="Couple Blog"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full h-[380px] object-cover rounded-2xl shadow-2xl"
            />

            <h3 className="text-3xl font-bold text-purple-400">
              The Art of Capturing Love
            </h3>

            <motion.p
              className="text-gray-300 leading-relaxed whitespace-pre-line"
              style={{
                maxHeight: showFullText ? "1000px" : "160px",
                overflow: "hidden",
                transition: "max-height 0.6s ease",
              }}
            >
              {blogParagraph}
            </motion.p>

            {/* ✅ Styled Button Like Given Image */}
            <div className="flex justify-center">
              <motion.button
                onClick={() => setShowFullText(!showFullText)}
                whileHover={{ scale: 1.05 }}
                className="bg-white text-black font-semibold rounded-full px-10 py-2 transition-all duration-300 hover:bg-purple-500 hover:text-white shadow-md"
              >
                {showFullText ? "Show Less ↑" : "Read More ↓"}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <ClientsSection />
    </>
  );
}
