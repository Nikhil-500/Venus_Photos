import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();

  const packages = [
    {
      name: "Basic",
      price: "₹8,999",
      features: ["2 Hours", "10 Edited Photos", "Online Delivery"],
    },
    {
      name: "Standard",
      price: "₹15,999",
      features: ["5 Hours", "25 Edited Photos", "Photo Prints"],
    },
    {
      name: "Premium",
      price: "₹29,999",
      features: ["Full Day", "Unlimited Shots", "Photo Album"],
    },
  ];

  return (
    <motion.div
      className="max-w-5xl mx-auto px-6 py-16 text-gray-200"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-accent mb-10">Our Pricing</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((p) => (
          <motion.div
            key={p.name}
            whileHover={{ scale: 1.05 }}
            className="bg-bgPrimary/80 border border-zinc-700 rounded-xl p-6 text-center"
          >
            <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
            <p className="text-accent text-3xl font-bold mb-4">{p.price}</p>
            <ul className="text-gray-400 space-y-1 mb-4">
              {p.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            <button
              onClick={() => navigate("/booknow")}
              className="px-5 py-2 bg-accent text-bgPrimary font-semibold rounded-lg hover:opacity-90 transition"
            >
              Book Now
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
