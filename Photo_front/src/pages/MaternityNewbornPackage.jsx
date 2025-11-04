import Pagex from "../components/Pagex";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ✅ Local assets
import mat3 from "../assets/mat3.jpg";
import ba1 from "../assets/ba1.jpg";
import ne2 from "../assets/ne2.jpg";

const maternityPackages = [
  {
    title: "Maternity Glow",
    price: "₹15,000",
    features: [
      "2 Hours Indoor Session",
      "20 Edited Photos",
      "Styling Assistance",
      "Online Gallery",
    ],
    image: mat3,
  },
  {
    title: "Toddler",
    price: "₹25,000",
    features: [
      "Half Day Coverage",
      "40 Edited Photos",
      "Family Shots Included",
      "Print-Ready Files",
    ],
    image: ba1,
  },
  {
    title: "New Born",
    price: "₹40,000",
    features: [
      "Full Day Coverage (Maternity + Baby)",
      "Unlimited Photos",
      "Premium Photo Album",
      "Short Cinematic Video",
    ],
    image: ne2,
  },
];

export default function MaternityNewbornPackage() {
  const navigate = useNavigate();
  const handleBookNow = (pkgTitle) => {
    navigate("/booknow", { state: { package: pkgTitle } });
  };

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* ✅ Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${mat3})` }}
      >
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            className="text-5xl font-bold text-accent mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Maternity & Newborn Packages
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Capture the warmth and wonder of new beginnings with love and care.
          </motion.p>
        </div>
      </div>

      {/* ✅ Package Cards */}
      <Pagex>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {maternityPackages.map((pkg) => (
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
