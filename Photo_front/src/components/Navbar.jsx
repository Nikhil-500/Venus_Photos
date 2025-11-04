import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // ✅ Navbar Items (Cinematography Package removed)
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
        { name: "ModelFashion Package", to: "/packages/model-fashion" },
        { name: "TraditionalEvents Package", to: "/packages/traditional-events" },
        { name: "SchoolPromotion Package", to: "/packages/school-promotion" },
        { name: "MaternityNewborn Package", to: "/packages/maternity-newborn" },
       

      ],
    },
    { name: "Contact", to: "/contact" },
    { name: "Book Now", to: "/booknow" },
  ];

  // ✅ Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bgPrimary/95 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* --- Logo + Title --- */}
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl md:text-3xl font-heading text-accent tracking-wider group relative"
        >
          <motion.img
            src={logo}
            alt="Muruliraj Photography Logo"
            className="w-10 h-10 rounded-full object-cover border border-accent/30 group-hover:scale-105 transition-transform duration-300"
          />
          <span>
            Muruliraj<span className="text-white"> Photography</span>
          </span>
          <motion.span
            layoutId="underline"
            className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"
          />
        </Link>

        {/* --- Desktop Menu --- */}
        <div className="hidden md:flex space-x-8 text-[15px] font-medium relative">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.to || "#"}
                className={`flex items-center gap-1 transition duration-300 ${
                  location.pathname === item.to ||
                  location.pathname.startsWith(item.to + "/")
                    ? "text-accent"
                    : "text-gray-300 hover:text-accent"
                }`}
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* --- Dropdown (only for Packages now) --- */}
              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 bg-bgPrimary/95 backdrop-blur-lg border border-gray-700 rounded-xl shadow-xl py-3 px-4 space-y-2 w-52 z-[999]"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.to}
                          className="block text-gray-300 hover:text-accent transition duration-300"
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

        {/* --- Mobile Menu Button --- */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-accent transition hover:rotate-90 duration-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-bgPrimary/95 backdrop-blur-md text-center py-6 space-y-3 shadow-inner border-t border-gray-800"
          >
            {navItems.map((item) => (
              <div key={item.name} className="space-y-2">
                <Link
                  to={item.to || "#"}
                  onClick={() => setOpen(false)}
                  className={`block text-lg transition duration-300 ${
                    location.pathname === item.to ||
                    location.pathname.startsWith(item.to + "/")
                      ? "text-accent font-semibold"
                      : "text-gray-200 hover:text-accent"
                  }`}
                >
                  {item.name}
                </Link>

                {/* --- Mobile dropdowns (only Packages) --- */}
                {item.dropdown && (
                  <div className="space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.to}
                        onClick={() => setOpen(false)}
                        className="block text-sm text-gray-400 hover:text-accent transition"
                      >
                        └ {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
