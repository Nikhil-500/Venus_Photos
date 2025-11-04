import { motion } from "framer-motion";

export default function PaymentCancellation() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16 text-gray-200"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-accent mb-6">Payment & Cancellation Policy</h1>
      <p className="text-gray-400 leading-relaxed mb-4">
        A 50% advance payment is required to confirm your booking.
        The remaining balance must be paid on the day of the shoot or as agreed.
      </p>
      <p className="text-gray-400">
        Cancellations made at least 48 hours before the scheduled session
        will receive a partial refund. Last-minute cancellations may not be eligible for refunds.
      </p>
    </motion.div>
  );
}
