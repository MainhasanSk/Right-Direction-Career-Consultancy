import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ConsultationModal from "./components/ConsultationModal";
import { ConsultationModalProvider } from "./context/ConsultationModalContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <ConsultationModalProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FAFCFF] text-slate-800 font-sans selection:bg-rdcc-cyan-ice selection:text-rdcc-navy">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <ConsultationModal />
        </div>
      </ConsultationModalProvider>
    </Router>
  );
}
