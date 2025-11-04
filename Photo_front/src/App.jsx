// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppChat from "./components/WhatsAppChat";
import ChatBox from "./components/ChatBox";

// ✅ Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import BookNow from "./pages/BookNow";

// ✅ Service Subpages
import Wedding from "./pages/Wedding";
import Architecture from "./pages/Architecture";
import PoliticalPromotions from "./pages/PoliticalPromotions";
import GovernmentProjects from "./pages/GovernmentProjects.jsx";
import CorporatePromotion from "./pages/CorporatePromotion";
import TraditionalEvents from "./pages/TraditionalEvents";
import ModelFashion from "./pages/ModelFashion";
import SchoolPromotion from "./pages/SchoolPromotion";
import MaternityNewborn from "./pages/MaternityNewborn";

// ✅ Package Subpages
import WeddingPackage from "./pages/WeddingPackage";
import DronePackage from "./pages/DronePackage";
import ModelFashionPackage from "./pages/ModelFashionPackage.jsx";
import TraditionalEventsPackage from "./pages/TraditionalEventsPackage.jsx";
import SchoolPromotionPackage from "./pages/SchoolPromotionPackage.jsx";
import MaternityNewbornPackage from "./pages/MaternityNewbornPackage.jsx";


// ✅ Other Pages
import Career from "./pages/Career";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PaymentCancellation from "./pages/PaymentCancellation";
import Pricing from "./pages/Pricing";
//Insta and whatsapp
import InstagramIcon from "./components/InstagramIcon";
import FacebookIcon from "./components/FacebookIcon";


export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main className="pt-20 min-h-screen bg-bgPrimary text-white transition-all duration-300">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Routes location={location} key={location.pathname}>
              {/* --- Main Pages --- */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booknow" element={<BookNow />} />

              {/* --- Services Subpages --- */}
              <Route path="/services/wedding" element={<Wedding />} />
              <Route path="/services/architecture" element={<Architecture />} />
              <Route path="/services/political-promotions" element={<PoliticalPromotions />} />
              <Route path="/services/government-projects" element={<GovernmentProjects />} />
              <Route path="/services/corporate-promotion" element={<CorporatePromotion />} />
              <Route path="/services/traditional-events" element={<TraditionalEvents />} />
              <Route path="/services/model-fashion" element={<ModelFashion />} />
              <Route path="/services/school-promotion" element={<SchoolPromotion />} />
              <Route path="/services/maternity-newborn" element={<MaternityNewborn />} />

              {/* --- Packages Subpages --- */}
              <Route path="/packages/wedding" element={<WeddingPackage />} />
              <Route path="/packages/drone" element={<DronePackage />} />
              <Route path="/packages/model-fashion" element={<ModelFashionPackage />} />
              <Route path="/packages/traditional-events" element={<TraditionalEventsPackage />} />
              <Route path="/packages/school-promotion" element={<SchoolPromotionPackage />} />
              <Route path="/packages/maternity-newborn" element={<MaternityNewbornPackage />} />
              

              {/* --- Other Pages --- */}
              <Route path="/career" element={<Career />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route
                path="/payment-cancellation"
                element={<PaymentCancellation />}
              />
              <Route path="/pricing" element={<Pricing />} />

              {/* --- 404 Fallback --- */}
              <Route
                path="*"
                element={
                  <div className="flex items-center justify-center h-[60vh] text-gray-300 text-lg">
                    Page Not Found
                  </div>
                }
              />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <FacebookIcon />
      <InstagramIcon />
      <WhatsAppChat />
      <ChatBox />
    </>
  );
}
