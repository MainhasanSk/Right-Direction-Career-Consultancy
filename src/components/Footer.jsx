import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight, ArrowUpRight, Facebook, Instagram } from "lucide-react";
import { siteContent } from "../data/content";
import { WhatsAppIcon } from "./ContactForm";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-rdcc-navy text-slate-300 relative overflow-hidden border-t-4 border-rdcc-blue">
      {/* Decorative background glow & subtle upward lines */}
      <div className="absolute inset-0 bg-navy-mesh opacity-90 pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-rdcc-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-rdcc-cyan/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner with Motto */}
      <div className="relative border-b border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="h-14 w-auto flex-shrink-0 bg-white p-1.5 rounded-xl shadow-sm flex items-center justify-center border border-white/20">
              <img
                src={siteContent.brand.logo}
                alt="RDCC Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-white text-lg sm:text-xl font-heading font-bold tracking-tight">
                {siteContent.brand.name}
              </h3>
              <p className="text-rdcc-cyan-light font-medium text-sm">
                "{siteContent.brand.motto}"
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-rdcc-blue hover:bg-rdcc-blue-light text-white text-sm font-semibold shadow-md transition-all duration-200"
            >
              <span>Connect With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Organization Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-rdcc-gold text-xs font-semibold uppercase tracking-wider border border-rdcc-gold/30">
              {siteContent.brand.established} • Guwahati, Assam
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              At The Right Direction Career Consultancy, we believe the right guidance at the right time can transform lives. Through guidance, mentoring and training, we help individuals discover their potential, make informed decisions and move forward with clarity and confidence.
            </p>
            <div className="pt-2">
              <span className="text-xs text-slate-400 block mb-3 font-medium tracking-wide uppercase">
                Connect on Social Media
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={siteContent.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm border border-white/10 hover:border-transparent group"
                  aria-label="RDCC Facebook"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={siteContent.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm border border-white/10 hover:border-transparent group"
                  aria-label="RDCC Instagram"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={`https://wa.me/${siteContent.contact.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm border border-white/10 hover:border-transparent group"
                  aria-label="WhatsApp Chat"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-heading font-bold border-l-2 border-rdcc-cyan pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-rdcc-cyan flex items-center gap-1.5 transition-colors group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-rdcc-cyan/60 group-hover:translate-x-1 transition-transform" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-rdcc-cyan flex items-center gap-1.5 transition-colors group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-rdcc-cyan/60 group-hover:translate-x-1 transition-transform" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-rdcc-cyan flex items-center gap-1.5 transition-colors group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-rdcc-cyan/60 group-hover:translate-x-1 transition-transform" />
                  <span>Our Services (SARATHI & HATE HAT DHORI)</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-rdcc-cyan flex items-center gap-1.5 transition-colors group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-rdcc-cyan/60 group-hover:translate-x-1 transition-transform" />
                  <span>Annual Events & Community</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-rdcc-cyan flex items-center gap-1.5 transition-colors group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-rdcc-cyan/60 group-hover:translate-x-1 transition-transform" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Flagship Programmes */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-base font-heading font-bold border-l-2 border-rdcc-gold pl-3">
              Programmes
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/services" className="hover:text-white transition-colors block">
                  <span className="font-semibold text-rdcc-cyan-light">SARATHI</span>
                  <span className="block text-xs text-slate-400">Classes 8–12 Guidance</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors block">
                  <span className="font-semibold text-rdcc-cyan-light">SARATHI CAREER CLUB</span>
                  <span className="block text-xs text-slate-400">For Schools & Youth</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors block">
                  <span className="font-semibold text-rdcc-gold-light">HATE HAT DHORI</span>
                  <span className="block text-xs text-slate-400">Mentoring for Women</span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white transition-colors block">
                  <span className="font-semibold text-slate-200">Annual Talent Initiative</span>
                  <span className="block text-xs text-slate-400">Since 2020</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-heading font-bold border-l-2 border-rdcc-cyan pl-3">
              Official Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rdcc-cyan flex-shrink-0 mt-1" />
                <span>{siteContent.contact.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-rdcc-cyan flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  {siteContent.contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="hover:text-white transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-rdcc-cyan flex-shrink-0" />
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {siteContent.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer with Copyright */}
      <div className="relative border-t border-white/10 py-5 px-4 text-center text-xs text-slate-400 bg-rdcc-navy-dark/70">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {currentYear} {siteContent.brand.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Guwahati, Assam</span>
            <span>•</span>
            <span className="text-rdcc-gold">{siteContent.brand.established}</span>
            <span>•</span>
            <span className="text-rdcc-cyan-light font-medium">{siteContent.brand.motto}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
