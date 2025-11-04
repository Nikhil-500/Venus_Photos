// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// export default function BookYourDate() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);

//   // Replace with your WhatsApp number (no "+" sign)
//   const ownerNumber = "919999888777";

//   const handleChange = (e) =>
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const templateParams = {
//       from_name: form.name,
//       from_email: form.email,
//       phone: form.phone,
//       service: form.service || "Not specified",
//       message: form.message || "No message",
//     };

//     // Send email via EmailJS
//     emailjs
//       .send(
//         "service_920s4ze", // your EmailJS service ID
//         "template_w0j9qxf", // your EmailJS template ID
//         templateParams,
//         "rVUZLZTCxCsLz3vFA" // your EmailJS public key
//       )
//       .then(() => {
//         const whatsappMsg = encodeURIComponent(
//           `📸 *New Booking Request:*\n\n` +
//             `👤 Name: ${templateParams.from_name}\n` +
//             `📧 Email: ${templateParams.from_email}\n` +
//             `📞 Phone: ${templateParams.phone}\n` +
//             `💼 Service: ${templateParams.service}\n` +
//             `💬 Message: ${templateParams.message}`
//         );

//         // Auto-open WhatsApp with message
//         window.open(`https://wa.me/${ownerNumber}?text=${whatsappMsg}`, "_blank");

//         alert("✅ Booking request sent successfully!");
//         setForm({ name: "", email: "", phone: "", service: "", message: "" });
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("EmailJS send failed:", error);
//         alert("❌ Failed to send booking request. Please try again.");
//         setLoading(false);
//       });
//   };

//   return (
//     <section
//       id="book-your-date"
//       className="py-20 px-6 md:px-20 bg-gradient-to-b from-black via-gray-900 to-purple-950"
//     >
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         {/* Left: Form */}
//         <div>
//           <h2 className="text-4xl font-extrabold text-purple-400 mb-4">
//             Book Your Date
//           </h2>
//           <p className="text-gray-300 mb-8 leading-relaxed">
//             Ready to make your special day unforgettable?  
//             Fill in your details below and we’ll contact you soon!
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               required
//               className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500"
//             />
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Email"
//               required
//               className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500"
//             />
//             <input
//               type="text"
//               name="phone"
//               value={form.phone}
//               onChange={handleChange}
//               placeholder="Phone Number"
//               required
//               className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500"
//             />
//             <select
//               name="service"
//               value={form.service}
//               onChange={handleChange}
//               className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500"
//             >
//               <option value="">Select Service</option>
//               <option value="Wedding">Wedding</option>
//               <option value="Architecture">Architecture</option>
//               <option value="Portrait">Portrait</option>
//             </select>
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="Message"
//               rows="4"
//               className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500"
//             ></textarea>
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-black font-semibold rounded-md transition-all"
//             >
//               {loading ? "Sending..." : "Send Request"}
//             </button>
//           </form>
//         </div>

//         {/* Right: Image */}
//         <div className="hidden md:block rounded-xl overflow-hidden shadow-2xl">
//           <img
//             src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?auto=format&fit=crop&w=800&q=80"
//             alt="Photography booking"
//             className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
