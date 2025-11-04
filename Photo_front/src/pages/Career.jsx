import { motion } from "framer-motion";

export default function Career() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16 text-gray-200"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-accent mb-6">Career Opportunities</h1>
      <p className="text-gray-400 leading-relaxed mb-6">
        Join our creative team of passionate photographers, editors, and designers.
        We’re always looking for talented individuals who love visual storytelling.
      </p>
      <p className="text-gray-400">
        Send your updated resume and portfolio to{" "}
        <a href="mailto:muruliraj5@gmail.com" className="text-accent underline">
          muruliraj5@gmail.com
        </a>
        {" "}and we’ll get back to you if you’re a fit.
      </p>
    </motion.div>
  );
}
