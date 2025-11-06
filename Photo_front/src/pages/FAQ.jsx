import { useState } from "react";
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
    {
      q: "What is the turnaround time for receiving edited photos?",
      a: "Typically, edited photos are delivered within 5–7 business days after the shoot.",
    },
    {
      q: "Do you offer same-day delivery for urgent shoots?",
      a: "Yes, express delivery is available at an additional cost. Please mention it while booking.",
    },
    {
      q: "Can I choose the location for the shoot?",
      a: "Yes, we offer both studio and outdoor shoots. You can suggest a location or choose from our list.",
    },
    {
      q: "Are outfit changes allowed during the session?",
      a: "Yes, most packages include 2–3 outfit changes. Additional changes may incur extra charges.",
    },
    {
      q: "Do you provide props or backdrops?",
      a: "We offer a variety of props and themed backdrops. Custom setups can be arranged on request.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept UPI, bank transfers, cash, and major credit/debit cards.",
    },
    {
      q: "Is a deposit required to confirm the booking?",
      a: "Yes, a 30% deposit is required to secure your session date and time.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16 text-gray-200"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-accent mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="bg-bgPrimary/70 p-5 rounded-xl border border-zinc-700 cursor-pointer"
            onClick={() => toggleFAQ(i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{item.q}</h3>
              <span className="text-2xl text-accent font-bold">
                {openIndex === i ? "−" : "+"}
              </span>
            </div>
            {openIndex === i && (
              <motion.p
                className="text-gray-400 mt-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {item.a}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
