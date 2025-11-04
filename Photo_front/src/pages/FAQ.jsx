import { motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "How do I book a photoshoot?",
      a: "You can book directly through our website’s contact form or via WhatsApp for quick responses.",
    },
    {
      q: "Do you provide raw images?",
      a: "Yes, upon request. However, edited photos are included in all packages.",
    },
    {
      q: "Can I reschedule my session?",
      a: "Absolutely — just inform us 48 hours prior to your scheduled session.",
    },
  ];

  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16 text-gray-200"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-accent mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((item, i) => (
          <div key={i} className="bg-bgPrimary/70 p-5 rounded-xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-2">{item.q}</h3>
            <p className="text-gray-400">{item.a}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
