// src/pages/BookNow.jsx
import { motion } from "framer-motion";
import BookForm from "../components/BookForm";
import { useNavigate, useLocation } from "react-router-dom";
import aes2Img from "../assets/aes2.jpg";
import phImg from "../assets/ph.jpg";
import ClientsSection from "../components/ClientsSection";

export default function BookNow() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPackage = location.state?.package || "";

  // ✅ Navigate to package pages smoothly
  const handleNavigate = (path, packageName) => {
    navigate(path, { state: { package: packageName } });
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  return (
    <>
      {/* ✅ Booking Section */}
      <section className="relative bg-black text-white pt-24 pb-12 overflow-hidden">
        {/* ✅ Background Image & Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aes2Img})` }}
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* ✅ Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* ✅ Heading Section */}
          <div className="mb-12 text-left">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent mb-3">
              Book Your Date
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Secure your special day with{" "}
              <span className="text-accent font-semibold">
                Muruliraj Photography
              </span>
              . Whether it’s a wedding, drone shoot, or cinematic coverage —
              our expert team ensures every moment is beautifully captured.
            </p>

            {/* ✅ Display Selected Package */}
            {selectedPackage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-4 inline-block bg-accent text-bgPrimary px-4 py-2 rounded-lg font-semibold shadow-md"
              >
                Selected Package: {selectedPackage}
              </motion.div>
            )}
          </div>

          {/* ✅ Main Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* ✅ Left Side: Image + Quick Links */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl shadow-2xl border border-gray-700 bg-white/5"
            >
              <img
                src={phImg}
                alt="Couple Session"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* ✅ Quick Package Navigation */}
              <div className="p-6 border-t border-gray-700 text-center space-y-3">
                <h3 className="text-xl font-semibold text-accent">
                  Explore Our Packages
                </h3>

                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() =>
                      handleNavigate("/packages/wedding", "Wedding Package")
                    }
                    className="px-4 py-2 bg-accent text-bgPrimary font-semibold rounded-lg hover:opacity-90 transition"
                  >
                    Wedding
                  </button>
                  <button
                    onClick={() =>
                      handleNavigate("/packages/drone", "Drone Package")
                    }
                    className="px-4 py-2 bg-accent text-bgPrimary font-semibold rounded-lg hover:opacity-90 transition"
                  >
                    Drone
                  </button>
                  <button
                    onClick={() =>
                      handleNavigate(
                        "/packages/cinematography",
                        "Cinematography Package"
                      )
                    }
                    className="px-4 py-2 bg-accent text-bgPrimary font-semibold rounded-lg hover:opacity-90 transition"
                  >
                    Cinematography
                  </button>
                </div>
              </div>
            </motion.div>

            {/* ✅ Right Side: Booking Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-accent/60 transition-all"
            >
              <BookForm selectedPackage={selectedPackage} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✅ Clients Section (Now sits snugly above footer, no top gap) */}
      <div className="bg-black -mt-8">
        <ClientsSection />
      </div>
    </>
  );
}
