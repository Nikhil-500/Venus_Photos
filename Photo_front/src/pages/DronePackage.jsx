import Pagex from "../components/Pagex";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import vidVideo from "../assets/vid.mp4";
import ddImg from "../assets/dd.jpg";

const dronePackages = [
  {
    title: "Basic Aerial",
    price: "₹10,000",
    features: [
      "1 Hour Drone Coverage",
      "4K Footage",
      "10 Edited Photos",
      "Basic Color Grading",
    ],
  },
  {
    title: "Advanced Aerial",
    price: "₹18,000",
    features: [
      "3 Hours Drone Coverage",
      "4K & Slow-Motion Shots",
      "25 Edited Photos",
      "2-Min Cinematic Edit",
    ],
  },
  {
    title: "Pro Aerial",
    price: "₹30,000",
    features: [
      "Full Event Coverage",
      "Multiple Drone Angles",
      "Unlimited Raw Footage",
      "Full 4K Video Edit Included",
    ],
  },
];

export default function DronePackage() {
  const navigate = useNavigate();

  const handleBookNow = (pkgTitle) => {
    navigate("/booknow", { state: { package: pkgTitle } });
  };

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* ✅ Hero Section with Video Background */}
      <div className="relative h-[60vh] overflow-hidden">
        {/* 🎥 Background Video */}
        <video
          src={vidVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* 🖤 Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            className="text-5xl font-bold text-accent mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Drone Packages
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Experience breathtaking aerial visuals with our professional drone services.
          </motion.p>
        </div>
      </div>

      {/* ✅ Package Cards */}
      <Pagex>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {dronePackages.map((pkg) => (
            <motion.div
              key={pkg.title}
              className="bg-bgPrimary/80 border border-zinc-700 rounded-xl p-6 text-center hover:border-accent transition shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={ddImg}
                alt="Drone package"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">{pkg.title}</h3>
              <p className="text-accent text-3xl font-bold mb-4">{pkg.price}</p>
              <ul className="text-textMut space-y-1 mb-4">
                {pkg.features.map((f) => (
                  <li key={f}>✔ {f}</li>
                ))}
              </ul>
              <button
                onClick={() => handleBookNow(pkg.title)}
                className="mt-4 px-5 py-2 bg-accent text-bgPrimary font-semibold rounded-lg hover:opacity-90 transition"
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </Pagex>
    </div>
  );
}
