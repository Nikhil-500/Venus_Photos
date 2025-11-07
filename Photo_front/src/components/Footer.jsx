import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPinterestP,
  FaBehance,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappNumber = "9480661565";
  const [isVisible, setIsVisible] = useState(false);

  // ✅ Scroll button visibility
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY && currentScrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Scroll smoothly to top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-black text-white border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center md:text-left">
        {/* --- Left Section --- */}
        <div>
          <h3 className="text-purple-400 font-semibold text-lg mb-3 uppercase">
            Muruliraj Photography
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed text-center md:text-left">
            Experience the artistry of wedding photography that reflects
            elegance, precision, and emotional depth with creative excellence.
          </p>

          <div className="mt-3">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-purple-400 font-semibold hover:text-purple-300"
            >
              +91 {whatsappNumber}
            </a>
            <a
              href="mailto:info@murulirajclicks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-purple-400 hover:text-purple-300"
            >
              info@murulirajclicks.com
            </a>
          </div>

          {/* ✅ Social Icons */}
          <div className="flex justify-start gap-5 mt-4 text-lg text-gray-300">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/murulirajclicks/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/murulirajclicks/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://in.pinterest.com/murulirajclicks/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition transform hover:scale-110"
            >
              <FaPinterestP />
            </a>
            <a
              href="https://www.behance.net/murulirajclicks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition transform hover:scale-110"
            >
              <FaBehance />
            </a>
            <a
              href="https://www.youtube.com/@murulirajclicks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition transform hover:scale-110"
            >
              <FaYoutube />
            </a>
            <a
              href="https://share.google/i9Pex0vd5G3sJ5vzs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition transform hover:scale-110"
            >
              <FaGoogle />
            </a>
          </div>
        </div>

        {/* --- Packages --- */}
        <div>
          <h4 className="text-purple-400 font-semibold text-lg mb-3 uppercase">
            Packages
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/packages/wedding" className="hover:text-purple-400">
                Wedding
              </Link>
            </li>
            <li>
              <Link to="/packages/drone" className="hover:text-purple-400">
                Drone
              </Link>
            </li>
            <li>
              <Link
                to="/packages/model-fashion"
                className="hover:text-purple-400"
              >
                Model & Fashion
              </Link>
            </li>
            <li>
              <Link
                to="/packages/traditional-events"
                className="hover:text-purple-400"
              >
                Traditional Events
              </Link>
            </li>
            <li>
              <Link
                to="/packages/school-promotion"
                className="hover:text-purple-400"
              >
                School Promotion
              </Link>
            </li>
            <li>
              <Link
                to="/packages/maternity-newborn"
                className="hover:text-purple-400"
              >
                Maternity & Newborn
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h4 className="text-purple-400 font-semibold text-lg mb-3 uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link
                to="/services/architecture"
                className="hover:text-purple-400"
              >
                Architecture
              </Link>
            </li>
            <li>
              <Link to="/services/wedding" className="hover:text-purple-400">
                Wedding
              </Link>
            </li>
            <li>
              <Link
                to="/services/political-promotions" 
                className="hover:text-purple-400"
              >
                Political Promotions
              </Link>
            </li>
            <li>
              <Link
                to="/services/government-projects"
                className="hover:text-purple-400"
              >
                Government Projects
              </Link>
            </li>
            <li>
              <Link
                to="/services/corporate-promotion"
                className="hover:text-purple-400"
              >
                Corporate Promotions
              </Link>
            </li>
            <li>
              <Link
                to="/services/school-promotion" 
                className="hover:text-purple-400"
              >
                School Promotion
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Map Section --- */}
        <div>
          <h4 className="text-purple-400 font-semibold text-lg mb-3 uppercase">
            Find Us
          </h4>
          <div className="w-full h-[200px] rounded-xl overflow-hidden border border-purple-500/40 shadow-lg">
            <iframe
              title="Muruliraj Photography Location"
              src="https://www.google.com/maps?q=Muruliraj+Photography&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* --- Bottom Links --- */}
      <div className="mt-10 text-center text-purple-400 font-semibold space-x-2 text-sm">
        <Link to="/career" className="hover:text-white">
          Career
        </Link>
        <span>||</span>
        <Link to="/faq" className="hover:text-white">
          FAQ
        </Link>
        <span>||</span>
        <Link to="/privacy-policy" className="hover:text-white">
          Privacy Policy
        </Link>
        <span>||</span>
        <Link to="/blog" className="hover:text-white">
          Blog
        </Link>
      </div>

      {/* --- Copyright --- */}
      <div className="text-center text-gray-400 text-sm mt-3">
        © {year} Muruliraj Photography. All Rights Reserved.
      </div>

      {/* --- Scroll-to-Top Button --- */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-[6rem] z-[9999] bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg border border-purple-400 transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
}
