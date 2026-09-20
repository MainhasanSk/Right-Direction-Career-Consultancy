import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowUpRight, MessageSquare } from "lucide-react";
import { siteContent } from "../data/content";
import { useConsultationModal } from "../context/ConsultationModalContext";

export default function Navbar() {
  const { openConsultationModal } = useConsultationModal();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Annual Events & Community", path: "/events" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* Top micro-bar with contact quick links */}
      <div className="bg-rdcc-navy-dark text-slate-200 text-xs border-b border-rdcc-navy-light/40 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="font-medium tracking-wide text-rdcc-cyan-light">
              {siteContent.brand.tagline}
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300 font-medium">Guwahati, Assam</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${siteContent.contact.phones[0]}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rdcc-cyan" />
              <span>{siteContent.contact.phones[0]}</span>
            </a>
            <span className="text-slate-500">•</span>
            <a
              href={`https://wa.me/${siteContent.contact.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white text-emerald-400 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-2.5"
            : "bg-white border-b border-slate-200/80 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Title */}
            <Link
              to="/"
              className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-rdcc-blue rounded-lg"
            >
              <div className="relative h-12 sm:h-14 w-auto flex-shrink-0 flex items-center justify-center">
                <img
                  src={siteContent.brand.logo}
                  alt="The Right Direction Career Consultancy Logo"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-extrabold text-base sm:text-lg leading-tight text-rdcc-navy group-hover:text-rdcc-blue transition-colors">
                    THE RIGHT DIRECTION
                  </span>
                  <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-rdcc-cyan-ice text-rdcc-navy border border-rdcc-cyan/40">
                    {siteContent.brand.established}
                  </span>
                </div>
                <span className="text-xs font-semibold tracking-wider text-rdcc-blue">
                  CAREER CONSULTANCY
                </span>
                <span className="text-[10px] text-slate-500 hidden lg:block tracking-wide">
                  {siteContent.brand.motto}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-rdcc-blue bg-rdcc-cyan-ice font-semibold shadow-xs"
                        : "text-slate-700 hover:text-rdcc-blue hover:bg-slate-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={() => openConsultationModal()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-rdcc-navy hover:bg-rdcc-blue text-white text-sm font-semibold shadow-md shadow-rdcc-navy/10 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-rdcc-cyan-light" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => openConsultationModal()}
                className="inline-flex sm:hidden items-center px-3 py-1.5 rounded-md bg-rdcc-navy text-white text-xs font-medium"
              >
                Consult
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="p-2 rounded-lg text-rdcc-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-rdcc-blue"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5 mb-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                      isActive
                        ? "bg-rdcc-cyan-ice text-rdcc-blue font-semibold border-l-4 border-rdcc-blue"
                        : "text-slate-700 hover:bg-slate-50 hover:text-rdcc-blue"
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-slate-400">→</span>
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  openConsultationModal();
                }}
                className="w-full text-center py-3 rounded-lg bg-rdcc-blue text-white font-semibold shadow-md flex items-center justify-center gap-2"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-4 pt-2 text-xs text-slate-500">
                <span>Estd. 2020</span>
                <span>•</span>
                <span>Guwahati, Assam</span>
                <span>•</span>
                <a
                  href={`tel:${siteContent.contact.phones[0]}`}
                  className="text-rdcc-blue font-medium"
                >
                  Call RDCC
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
