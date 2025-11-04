// // src/pages/BookNow.jsx
// import { motion } from "framer-motion";
// import BookForm from "../components/BookForm";

// export default function BookNow() {
//   return (
//     <section className="relative bg-black text-white py-24 overflow-hidden">
//       {/* ===== Background Image with Overlay ===== */}
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1529634899537-87df87f8d92d?auto=format&fit=crop&w=1600&q=80')",
//         }}
//       />
//       <div className="absolute inset-0 bg-black/70 z-0" />

//       {/* ===== Main Content ===== */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//         {/* --- Left Content --- */}
//         <motion.div
//           initial={{ x: -50, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent mb-4">
//             Book Your Date
//           </h2>

//           <p className="text-gray-300 mb-6 text-lg leading-relaxed">
//             Secure your special day with{" "}
//             <span className="text-accent font-semibold">
//               Muruliraj Photography
//             </span>
//             . Whether it’s a wedding, couple shoot, or a personal portrait
//             session — we’ll capture your story beautifully.
//           </p>

//           <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-700">
//             <motion.img
//               src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
//               alt="Couple Session"
//               className="w-full h-[350px] md:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
//               initial={{ scale: 0.95, opacity: 0 }}
//               whileInView={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               viewport={{ once: true }}
//             />
//           </div>
//         </motion.div>

//         {/* --- Right Form --- */}
//         <motion.div
//           initial={{ x: 50, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-accent/60 transition-all"
//         >
//           <h3 className="text-2xl font-semibold mb-4 text-accent text-center">
//             Reserve Your Spot
//           </h3>
//           <BookForm />
//         </motion.div>
//       </div>
//     </section>
//   );
// }
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
