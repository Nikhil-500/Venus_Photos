import { useState } from "react";
import { motion } from "framer-motion";
import kk from "../assets/kk.jpg";
import res2 from "../assets/res2.jpg";
import Pagex from "../components/Pagex";
import AnimatedSection from "../components/AnimatedSection";

export default function Blog() {
  const blogs = [
    {
      title: "The Art of Couple Photography",
      image: kk,
      date: "Oct 28, 2025",
      category: "Wedding & Lifestyle",
      desc: "Discover how capturing love through candid frames creates timeless memories. We highlight lighting, emotions, and connection in every couple’s story.",
      more: "In every session, we focus on natural emotions, gentle poses, and real chemistry between couples. Each photograph becomes a narrative of affection, from laughter-filled moments to soft, intimate gazes — reminding us that love doesn’t need direction, just the right frame to tell its story.",
    },
    {
      title: "Architectural Beauty Through the Lens",
      image: res2,
      date: "Nov 02, 2025",
      category: "Architecture",
      desc: "Every line and curve tells a story. Explore how we use creative angles and natural lighting to showcase architectural excellence and modern design.",
      more: "Our approach to architectural photography highlights structural symmetry, texture, and perspective. By combining dynamic lighting with crisp composition, we aim to reveal the personality of each building — whether it’s the elegance of minimalism or the grandeur of tradition.",
    },
  ];

  const [expanded, setExpanded] = useState(Array(blogs.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      <Pagex title="Our Blog" subtitle="Stories Behind the Lens">
        <AnimatedSection>
          <p className="text-gray-300 max-w-3xl mx-auto text-center text-lg mb-10">
            Insights, inspiration, and stories from our creative journey —
            where every photo speaks emotions.
          </p>
        </AnimatedSection>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 pb-16">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:border-purple-500 transition"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-3">
                <p className="text-purple-400 text-sm uppercase tracking-wide">
                  {blog.category} • {blog.date}
                </p>
                <h2 className="text-2xl font-semibold text-white">
                  {blog.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {blog.desc}
                  {expanded[index] && (
                    <span className="block mt-3 text-gray-400">
                      {blog.more}
                    </span>
                  )}
                </p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-3 px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm font-semibold transition"
                >
                  {expanded[index] ? "Show Less ↑" : "Read More →"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Pagex>
    </div>
  );
}
