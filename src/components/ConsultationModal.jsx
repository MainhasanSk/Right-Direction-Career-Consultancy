import React, { useState, useEffect } from "react";
import { 
  X, 
  Calendar, 
  Clock, 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  User, 
  Compass, 
  Sparkles, 
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { useConsultationModal } from "../context/ConsultationModalContext";
import { siteContent } from "../data/content";

export default function ConsultationModal() {
  const { isOpen, modalData, closeConsultationModal } = useConsultationModal();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "Career Guidance & Counselling",
    timeSlot: "Morning (10:00 AM - 1:00 PM)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (modalData?.defaultCategory) {
      setFormData((prev) => ({
        ...prev,
        category: modalData.defaultCategory,
      }));
    }
  }, [modalData]);

  if (!isOpen) return null;

  const categories = [
    { label: "Career Guidance & Counselling", desc: "For Class 8-12 & College Students" },
    { label: "SARATHI - Complete Student Ecosystem", desc: "Continuous 360° Academic Guidance" },
    { label: "SARATHI Career Club", desc: "Group Mentoring & Real-world Skills" },
    { label: "HATE HAT DHORI", desc: "Empowerment & Mentorship for Women" },
    { label: "Parent & Guardian Consultation", desc: "Navigating Career Options for Your Child" },
    { label: "Institutional / School Workshop", desc: "School & College Career Seminars" },
  ];

  const timeSlots = [
    "Morning (10:00 AM - 1:00 PM)",
    "Afternoon (1:00 PM - 4:00 PM)",
    "Evening (4:00 PM - 7:00 PM)",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate formatted WhatsApp message
    const waText = encodeURIComponent(
      `*NEW CONSULTATION BOOKING REQUEST*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email || "Not specified"}\n` +
      `🎯 *Focus Area:* ${formData.category}\n` +
      `⏰ *Preferred Slot:* ${formData.timeSlot}\n` +
      `💬 *Query / Notes:* ${formData.message || "Requesting personalized consultation session."}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `_Sent via Right Direction Career Consultancy Web Portal_`
    );

    const waUrl = `https://wa.me/${siteContent.contact.whatsapp.replace('+', '')}?text=${waText}`;

    // Open WhatsApp
    window.open(waUrl, "_blank");

    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    closeConsultationModal();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeConsultationModal();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-auto max-h-[94vh] flex flex-col animate-in zoom-in-95 duration-200"
      >
        {/* Top Header */}
        <div className="relative bg-navy-gradient text-white px-6 sm:px-8 py-5 flex-shrink-0 border-b-2 border-rdcc-blue">
          <div className="absolute top-0 right-0 w-36 h-36 bg-rdcc-cyan/20 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />
          
          <div className="flex items-start justify-between gap-4 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-bold text-rdcc-cyan-light uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Book 1-on-1 Guidance</span>
              </div>
              <h2 id="consultation-modal-title" className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                Book a Consultation
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md">
                Schedule your counselling session with Guwahati's trusted career mentoring team.
              </p>
            </div>

            <button
              onClick={closeConsultationModal}
              type="button"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-rdcc-cyan-light"
              aria-label="Close consultation modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6">
          {submitted ? (
            <div className="text-center py-6 space-y-5 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-rdcc-navy">
                  Booking Request Initiated!
                </h3>
                <p className="text-slate-600 text-sm mt-1 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-rdcc-navy">{formData.name}</span>. Your consultation booking details have been prepared for WhatsApp.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 text-left text-xs sm:text-sm space-y-2 text-slate-700 max-w-md mx-auto">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Contact Number:</span>
                  <span className="font-semibold text-rdcc-navy">{formData.phone}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Focus Area:</span>
                  <span className="font-semibold text-rdcc-blue">{formData.category}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Slot:</span>
                  <span className="font-medium text-slate-800">{formData.timeSlot}</span>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                Our counsellors typically confirm your session slot within a few working hours.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-rdcc-navy hover:bg-rdcc-blue text-white font-semibold text-sm transition-all"
                >
                  Done
                </button>

                <a
                  href={`tel:${siteContent.contact.phones[0].replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-rdcc-blue" />
                  <span>Call {siteContent.contact.phones[0]}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rdcc-blue/40 focus:border-rdcc-blue text-sm transition-all bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rdcc-blue/40 focus:border-rdcc-blue text-sm transition-all bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Email (Optional) */}
              <div>
                <label htmlFor="modal-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address <span className="text-xs font-normal text-slate-400">(Optional)</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rdcc-blue/40 focus:border-rdcc-blue text-sm transition-all bg-slate-50/50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Consultation Category */}
              <div>
                <label htmlFor="modal-category" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Consultation Purpose / Category <span className="text-rose-500">*</span>
                </label>
                <select
                  id="modal-category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rdcc-blue/40 focus:border-rdcc-blue text-sm transition-all font-medium text-slate-800"
                >
                  {categories.map((cat) => (
                    <option key={cat.label} value={cat.label}>
                      {cat.label} — {cat.desc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Time Slot */}
              <div>
                <label htmlFor="modal-timeSlot" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Preferred Time Slot <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    id="modal-timeSlot"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rdcc-blue/40 focus:border-rdcc-blue text-sm transition-all"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message / Question */}
              <div>
                <label htmlFor="modal-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Questions / Academic Goals <span className="text-xs font-normal text-slate-400">(Optional)</span>
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us student's current class, target exams, or specific guidance required..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rdcc-blue/40 focus:border-rdcc-blue text-sm transition-all bg-slate-50/50 focus:bg-white"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-shimmer w-full py-3.5 px-6 rounded-xl bg-rdcc-blue hover:bg-rdcc-blue-hover text-white font-bold text-sm sm:text-base shadow-xl shadow-rdcc-blue/25 transition-all duration-200 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
                >
                  <span>Confirm & Book Consultation via WhatsApp</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-2 text-center text-[11px] text-slate-500 mt-2.5">
                  <span>Centre: Rajgarh Road, Guwahati</span>
                  <span>•</span>
                  <span>Direct Hotline: {siteContent.contact.phones[0]}</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
