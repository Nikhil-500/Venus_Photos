import Pagex from "../components/Pagex";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ✅ Local assets
import tem2 from "../assets/tem2.jpg";
import cu1 from "../assets/cu1.jpg";
import re1 from "../assets/re1.jpg";

const traditionalPackages = [
  {
    title: "Cultural Essence",
    price: "₹20,000",
    features: [
      "Half Day Coverage",
      "40 Edited Photos",
      "Event Highlights Reel",
      "Traditional Portrait Setup",
    ],
    image: tem2,
  },
  {
    title: "Festive Grandeur",
    price: "₹40,000",
    features: [
      "Full Day Coverage",
      "100 Edited Photos",
      "Cinematic Video (5 mins)",
      "Drone Shots Included",
    ],
    image: re1,
  },
  {
    title: "Royal Heritage",
    price: "₹70,000",
    features: [
      "2 Days Event Coverage",
      "Unlimited Photos",
      "Custom Album + Full Video",
      "Pre-Event Shoot Included",
    ],
    image: cu1,
  },
];

export default function TraditionalEventsPackage() {
  const navigate = useNavigate();

  const handleBookNow = (pkgTitle) => {
    navigate("/booknow", { state: { package: pkgTitle } });
  };

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* ✅ Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${tem2})` }}
      >
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            className="text-5xl font-bold text-accent mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Traditional Event Packages
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Celebrate culture, tradition, and emotion — beautifully captured.
          </motion.p>
        </div>
      </div>

      {/* ✅ Packages Section */}
      <Pagex>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {traditionalPackages.map((pkg) => (
            <motion.div
              key={pkg.title}
              className="bg-bgPrimary/80 border border-zinc-700 rounded-xl p-6 text-center hover:border-accent transition shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={pkg.image}
                alt={pkg.title}
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
