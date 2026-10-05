import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  Share2, 
  ExternalLink,
  Calendar,
  Sparkles
} from "lucide-react";
import { siteContent } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import { UpwardArrows, DirectionBadge } from "../components/ArrowMotif";
import ContactForm from "../components/ContactForm";
import { useConsultationModal } from "../context/ConsultationModalContext";

export default function Contact() {
  const { openConsultationModal } = useConsultationModal();
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get("service") || "";

  return (
    <div className="bg-white">
      {/* ========================================================================= */}
      {/* PAGE HEADER BANNER                                                        */}
      {/* ========================================================================= */}
      <section className="relative bg-navy-gradient text-white py-16 sm:py-24 overflow-hidden border-b-4 border-rdcc-blue">
        <div className="absolute inset-0 bg-navy-mesh opacity-80 pointer-events-none" />
        <div className="absolute top-1/2 -right-12 -translate-y-1/2 opacity-20 pointer-events-none">
          <UpwardArrows className="w-80 h-80 text-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <DirectionBadge text="Get in Touch" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mt-4 tracking-tight">
              CONTACT US
            </h1>
            <p className="text-rdcc-cyan-light text-base sm:text-lg mt-3 font-medium">
              Connect with The Right Direction Career Consultancy for personalized counselling, student mentoring, and institutional workshops.
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs text-slate-300">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-semibold">Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CONTACT DETAILS & ENQUIRY FORM GRID                                       */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-brochure-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Official Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-rdcc-blue">
                  Official Communication
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-rdcc-navy">
                  {siteContent.contact.organization}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We welcome inquiries from students, parents, women entrepreneurs, schools, and academic institutions across Assam and Northeast India.
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={`tel:${siteContent.contact.phones[0].replace(/\s+/g, '')}`}
                  className="p-3.5 rounded-xl bg-rdcc-navy hover:bg-rdcc-blue text-white text-center text-xs font-semibold shadow-sm transition-all duration-200 flex flex-col items-center justify-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-rdcc-cyan-light" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${siteContent.contact.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-center text-xs font-semibold shadow-sm transition-all duration-200 flex flex-col items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="p-3.5 rounded-xl bg-rdcc-blue hover:bg-rdcc-blue-hover text-white text-center text-xs font-semibold shadow-sm transition-all duration-200 flex flex-col items-center justify-center gap-1.5"
                >
                  <Mail className="w-4 h-4 text-rdcc-cyan-light" />
                  <span>Email Us</span>
                </a>
              </div>

              {/* Exact Contact Details Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-200 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rdcc-cyan-ice text-rdcc-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Location / Address
                    </h4>
                    <p className="text-slate-800 font-semibold text-base mt-0.5">
                      {siteContent.contact.address}
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rdcc-cyan-ice text-rdcc-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Contact Numbers
                    </h4>
                    <div className="flex flex-col mt-0.5">
                      {siteContent.contact.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s+/g, '')}`}
                          className="text-slate-800 hover:text-rdcc-blue font-semibold text-base transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rdcc-cyan-ice text-rdcc-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Official Email
                    </h4>
                    <a
                      href={`mailto:${siteContent.contact.email}`}
                      className="text-slate-800 hover:text-rdcc-blue font-semibold text-base mt-0.5 block break-all transition-colors"
                    >
                      {siteContent.contact.email}
                    </a>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Social Media Channels
                  </h4>
                  <div className="flex items-center gap-3">
                    <a
                      href={siteContent.contact.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-rdcc-blue hover:text-white text-slate-700 text-xs font-semibold flex items-center gap-2 transition-all duration-200"
                    >
                      <span>Facebook</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={siteContent.contact.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-gradient-to-r hover:from-amber-500 hover:to-pink-600 hover:text-white text-slate-700 text-xs font-semibold flex items-center gap-2 transition-all duration-200"
                    >
                      <span>Instagram</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Enquiry Form & Slot Booking */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rdcc-cyan-ice/80 via-white to-rdcc-cyan-ice/50 border border-rdcc-cyan-light flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-md bg-rdcc-blue text-white">
                      <Sparkles className="w-3.5 h-3.5" />
                    </span>
                    <h4 className="text-sm font-bold text-rdcc-navy">
                      Need a 1-on-1 Consultation Slot?
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Book your preferred consultation topic & time slot directly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openConsultationModal()}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-rdcc-navy hover:bg-rdcc-blue text-white text-xs font-bold shadow-sm whitespace-nowrap transition-all flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-rdcc-cyan-light" />
                  <span>Book Consultation Form</span>
                </button>
              </div>

              <ContactForm defaultInterest={requestedService} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
