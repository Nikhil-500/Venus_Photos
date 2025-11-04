import Pagex from "../components/Pagex";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ✅ Local assets
import fa3 from "../assets/fa3.jpg";
import ed1 from "../assets/ed1.jpg";
import ru1 from "../assets/ru1.jpg";
import out3 from "../assets/out3.jpg";

const fashionPackages = [
  {
    title: "Editorial Look",
    price: "₹18,000",
    features: [
      "3 Hours Session",
      "15 Edited Photos",
      "Creative Studio Setup",
      "Makeup & Styling Guidance",
    ],
    image: ed1,
  },
  {
    title: "Runway Shoot",
    price: "₹35,000",
    features: [
      "Full Day Coverage",
      "30 Edited Photos",
      "Behind-the-Scenes Video",
      "Portfolio Compilation",
    ],
    image: ru1,
  },
  {
    title: "Luxury Fashion Shoot",
    price: "₹55,000",
    features: [
      "2 Days Shoot",
      "Unlimited Shots",
      "Concept Styling + Cinematic Film",
      "Professional Team & Location",
    ],
    image: out3,
  },
];

export default function ModelFashionPackage() {
  const navigate = useNavigate();

  const handleBookNow = (pkgTitle) => {
    navigate("/booknow", { state: { package: pkgTitle } });
  };

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* ✅ Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${fa3})` }}
      >
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            className="text-5xl font-bold text-accent mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Fashion Photography Packages
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Elevate your style story with creative and professional fashion shoots.
          </motion.p>
        </div>
      </div>

      {/* ✅ Packages Section */}
      <Pagex>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {fashionPackages.map((pkg) => (
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
