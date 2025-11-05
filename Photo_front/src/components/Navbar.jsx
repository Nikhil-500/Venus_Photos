import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    {
      name: "Packages",
      to: "/packages",
      dropdown: [
        { name: "Wedding Package", to: "/packages/wedding" },
        { name: "Drone Package", to: "/packages/drone" },
        { name: "Model Fashion Package", to: "/packages/model-fashion" },
        { name: "Traditional Events Package", to: "/packages/traditional-events" },
        { name: "School Promotion Package", to: "/packages/school-promotion" },
        { name: "Maternity & Newborn Package", to: "/packages/maternity-newborn" },
      ],
    },

    { name: "Contact", to: "/contact" },
    { name: "Book Now", to: "/booknow" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 text-xl md:text-2xl font-heading tracking-wider group">
          <motion.img
            src={logo}
            alt="Muruliraj Photography Logo"
            className="w-10 h-10 rounded-full object-cover border border-purple-400/50 transition-transform duration-300 hover:scale-105"
          />
          <span className="text-purple-400 hover:text-purple-600 transition-colors duration-300">
            Muruliraj Photography
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-[15px] font-medium">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.to || "#"}
                className={`flex items-center gap-1 transition duration-200 ${location.pathname === item.to ||
                    location.pathname.startsWith(item.to + "/")
                    ? "text-purple-400"
                    : "text-gray-200 hover:text-purple-400"
                  }`}
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                  />
                )}
              </Link>

              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 bg-gray-900/90 backdrop-blur-md border border-purple-700/30 rounded-lg shadow-lg py-3 px-4 space-y-2 w-56 z-[999]"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.to}
                          className="block text-gray-200 hover:text-purple-400 transition duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-purple-300 transition hover:text-purple-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* --- Mobile Drawer --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-[80%] h-screen bg-black/90 backdrop-blur-sm border-l border-purple-800/40 z-[999] flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-purple-800/40">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Muruliraj Logo"
                  className="w-9 h-9 rounded-full border border-purple-500/50"
                />
                <h1 className="text-lg font-medium text-purple-300">
                  Muruliraj Photography
                </h1>
              </div>
              <button onClick={() => setOpen(false)} className="text-purple-400 hover:text-purple-600">
                <X size={26} />
              </button>
            </div>

            {/* Links */}
            <div className="overflow-y-auto px-6 py-4 space-y-3 text-left">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() =>
                      item.dropdown
                        ? setActiveDropdown(activeDropdown === item.name ? null : item.name)
                        : setOpen(false)
                    }
                    className={`w-full flex justify-between items-center text-[16px] font-medium py-2 border-b border-purple-800/30 ${location.pathname === item.to
                        ? "text-purple-400"
                        : "text-gray-200 hover:text-purple-400"
                      }`}
                  >
                    <Link to={item.to || "#"} className="flex-1 text-left">
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <ChevronRight
                        size={18}
                        className={`transition-transform ${activeDropdown === item.name
                            ? "rotate-90 text-purple-400"
                            : "text-purple-400/60"
                          }`}
                      />
                    )}
                  </button>

                  {/* Dropdown items */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 mt-2 border-l border-purple-800/40 space-y-2"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.to}
                            onClick={() => setOpen(false)}
                            className="block text-[15px] text-gray-300 hover:text-purple-400 transition"
                          >
                            • {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Footer Buttons */}
            <div className="px-6 py-5 border-t border-purple-800/40 space-y-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-3 rounded-lg border border-purple-600 text-gray-200 hover:bg-purple-800/40 hover:text-white transition"
              >
                Contact
              </Link>
              <Link
                to="/booknow"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
