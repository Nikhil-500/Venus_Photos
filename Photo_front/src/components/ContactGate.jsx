// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// export default function ContactGate({ onUnlock }) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     package: "Starter Plan",
//     referral: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const ownerNumber = "919999888777"; // Replace with your WhatsApp number

//   const handleChange = (e) =>
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const templateParams = {
//       from_name: form.name,
//       from_email: form.email,
//       phone: form.phone,
//       date: form.date || "Not selected",
//       package: form.package,
//       referral: form.referral || "N/A",
//       message: form.message,
//     };

//     emailjs
//       .send(
//         "service_920s4ze", // EmailJS Service ID
//         "template_w0j9qxf", // EmailJS Template ID
//         templateParams,
//         "rVUZLZTCxCsLz3vFA" // EmailJS Public Key
//       )
//       .then(() => {
//         const whatsappMsg = encodeURIComponent(
//           `📸 *New Registration Details:*\n\n` +
//             `👤 Name: ${templateParams.from_name}\n` +
//             `📧 Email: ${templateParams.from_email}\n` +
//             `📞 Phone: ${templateParams.phone}\n` +
//             `📅 Date: ${templateParams.date}\n` +
//             `💼 Package: ${templateParams.package}\n` +
//             `🔗 Referral: ${templateParams.referral}\n` +
//             `💬 Message: ${templateParams.message}`
//         );

//         window.open(`https://wa.me/${ownerNumber}?text=${whatsappMsg}`, "_blank");
//         setLoading(false);
//         alert("✅ Registration successful — thank you!");
//         onUnlock && onUnlock();
//       })
//       .catch((err) => {
//         console.error("EmailJS send error:", err);
//         setLoading(false);
//         alert("Failed to submit. Please try again.");
//       });
//   };

//   return (
//     <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 0.4, ease: "easeOut" }}
//         className="bg-gray-900 p-8 rounded-2xl w-full max-w-md shadow-2xl border border-purple-600/30"
//       >
//         <h2 className="text-2xl font-bold text-purple-400 mb-2 text-center">
//           Contact Us
//         </h2>
//         <p className="text-gray-400 mb-6 text-center">
//           Please register below to continue exploring Muruli Photography.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             name="name"
//             required
//             placeholder="Your Name"
//             onChange={handleChange}
//             className="w-full p-3 bg-gray-800 rounded-md focus:ring-2 focus:ring-purple-500"
//           />
//           <input
//             name="email"
//             type="email"
//             required
//             placeholder="Your Email"
//             onChange={handleChange}
//             className="w-full p-3 bg-gray-800 rounded-md focus:ring-2 focus:ring-purple-500"
//           />
//           <input
//             name="phone"
//             placeholder="Phone Number"
//             onChange={handleChange}
//             className="w-full p-3 bg-gray-800 rounded-md focus:ring-2 focus:ring-purple-500"
//           />
//           <input
//             name="date"
//             type="date"
//             onChange={handleChange}
//             className="w-full p-3 bg-gray-800 rounded-md focus:ring-2 focus:ring-purple-500"
//           />
//           <select
//             name="package"
//             onChange={handleChange}
//             className="w-full p-3 bg-gray-800 rounded-md focus:ring-2 focus:ring-purple-500"
//           >
//             <option>Starter Plan</option>
//             <option>Medium Plan</option>
//             <option>Top-Tier Plan</option>
//           </select>
//           <input
//             name="referral"
//             placeholder="How did you find us?"
//             onChange={handleChange}
//             className="w-full p-3 bg-gray-800 rounded-md focus:ring-2 focus:ring-purple-500"
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             onChange={handleChange}
//             className="w-full p-3 bg-gray-800 rounded-md h-24 focus:ring-2 focus:ring-purple-500"
//           />
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-purple-500 text-black font-semibold px-6 py-2 rounded-lg hover:bg-purple-600 transition-all"
//             >
//               {loading ? "Sending..." : "Send"}
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// }
