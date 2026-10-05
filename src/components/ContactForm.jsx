import React, { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, ArrowRight, RotateCcw } from "lucide-react";
import { siteContent } from "../data/content";

export function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

export default function ContactForm({ 
  defaultInterest = "",
  title = "Request Guidance or Consultation",
  subtitle = "Fill out the details below to connect directly with our advisory team.",
  badge = "Connect With RDCC",
  className = ""
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: defaultInterest || "SARATHI - Class 8 to 12 Guidance",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastSubmittedUrl, setLastSubmittedUrl] = useState("");

  const interestOptions = [
    "SARATHI - Class 8 to 12 Guidance",
    "Career Guidance & Counselling",
    "SARATHI Career Club",
    "HATE HAT DHORI - Women Mentoring",
    "Parent & Guardian Consultation",
    "Institutional / School Workshop",
    "General Career Enquiry",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare WhatsApp message
    const waText = encodeURIComponent(
      `*NEW WEBSITE ENQUIRY - RDCC*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${formData.name.trim()}\n` +
      `📞 *Phone:* ${formData.phone.trim()}\n` +
      `📧 *Email:* ${formData.email.trim() ? formData.email.trim() : "Not provided"}\n` +
      `🎯 *Interested In:* ${formData.interest}\n` +
      `💬 *Message:* ${formData.message.trim() ? formData.message.trim() : "I am seeking guidance."}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `_Sent via The Right Direction Career Consultancy Website_`
    );

    const waPhone = siteContent.contact.whatsapp.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${waPhone}?text=${waText}`;

    // Open WhatsApp in new tab
    window.open(waUrl, "_blank");

    setLastSubmittedUrl(waUrl);
    setSubmitted(true);
  };

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200/90 relative overflow-hidden ${className}`}>
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rdcc-navy via-rdcc-blue to-emerald-500" />

      {submitted ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-rdcc-navy">
            Enquiry Dispatched to WhatsApp!
          </h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            Thank you, <span className="font-semibold text-rdcc-navy">{formData.name}</span>. Your enquiry details have been forwarded to our WhatsApp (<span className="font-semibold text-emerald-600">{siteContent.contact.whatsapp}</span>).
          </p>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left max-w-md mx-auto text-xs space-y-1.5 text-slate-700">
            <p><span className="font-semibold text-slate-900">Name:</span> {formData.name}</p>
            <p><span className="font-semibold text-slate-900">Phone:</span> {formData.phone}</p>
            {formData.email && <p><span className="font-semibold text-slate-900">Email:</span> {formData.email}</p>}
            <p><span className="font-semibold text-slate-900">Interested In:</span> {formData.interest}</p>
            {formData.message && <p><span className="font-semibold text-slate-900">Message:</span> {formData.message}</p>}
          </div>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            {lastSubmittedUrl && (
              <a
                href={lastSubmittedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Re-open WhatsApp Chat</span>
              </a>
            )}

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  phone: "",
                  email: "",
                  interest: defaultInterest || "SARATHI - Class 8 to 12 Guidance",
                  message: "",
                });
              }}
              className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Send Another Enquiry</span>
            </button>
          </div>

          <div className="pt-2">
            <a
              href={`tel:${siteContent.contact.phones[0].replace(/\s+/g, '')}`}
              className="text-xs font-semibold text-rdcc-navy hover:text-rdcc-blue inline-flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Need immediate assistance? Call {siteContent.contact.phones[0]}</span>
            </a>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{badge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-rdcc-navy">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
              {subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 text-sm transition-all bg-white"
              />
            </div>

            {/* Phone & Email Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                  Phone / WhatsApp Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 text-sm transition-all bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                  Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 text-sm transition-all bg-white"
                />
              </div>
            </div>

            {/* Interested In */}
            <div>
              <label htmlFor="interest" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                Guidance Program / Topic <span className="text-rose-500">*</span>
              </label>
              <select
                id="interest"
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 text-sm transition-all"
              >
                {interestOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                Your Message or Query <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your student class, preferred stream, or guidance questions..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 text-sm transition-all bg-white resize-y"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/25 transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
              <span>Send Message to WhatsApp</span>
              <Send className="w-4 h-4 ml-1 opacity-80 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-slate-500 text-center">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Submitting will open WhatsApp directly with your message to our counsellor.</span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
