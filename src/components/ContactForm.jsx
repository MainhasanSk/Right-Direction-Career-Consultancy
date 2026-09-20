import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, Phone, Mail, ArrowRight } from "lucide-react";
import { siteContent } from "../data/content";

export default function ContactForm({ defaultInterest = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: defaultInterest || "SARATHI",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [method, setMethod] = useState("whatsapp"); // 'whatsapp' | 'submitted'

  const interestOptions = [
    "SARATHI",
    "Career Guidance",
    "Career Counselling",
    "SARATHI Career Club",
    "HATE HAT DHORI",
    "General Enquiry",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare WhatsApp message
    const waText = encodeURIComponent(
      `Hello RDCC Team,\n\nI would like to enquire about your services.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || "Not provided"}\n*Interested In:* ${formData.interest}\n*Message:* ${formData.message || "I am seeking guidance."}\n\nThank you.`
    );

    const waUrl = `https://wa.me/${siteContent.contact.whatsapp.replace('+', '')}?text=${waText}`;

    // Open WhatsApp in new tab
    window.open(waUrl, "_blank");

    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-card border border-slate-200/90 relative overflow-hidden">
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rdcc-navy via-rdcc-blue to-rdcc-cyan" />

      {submitted ? (
        <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-rdcc-navy">
            Enquiry Prepared Successfully!
          </h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            Thank you, <span className="font-semibold text-rdcc-navy">{formData.name}</span>. Your enquiry regarding <span className="font-semibold text-rdcc-blue">{formData.interest}</span> has been dispatched to WhatsApp.
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left max-w-md mx-auto text-xs space-y-1.5 text-slate-700">
            <p><span className="font-semibold">Phone:</span> {formData.phone}</p>
            {formData.email && <p><span className="font-semibold">Email:</span> {formData.email}</p>}
            <p><span className="font-semibold">Interested In:</span> {formData.interest}</p>
            {formData.message && <p><span className="font-semibold">Message:</span> {formData.message}</p>}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  phone: "",
                  email: "",
                  interest: "SARATHI",
                  message: "",
                });
              }}
              className="text-sm font-medium text-rdcc-blue hover:underline"
            >
              Send Another Enquiry
            </button>
            <span className="hidden sm:inline text-slate-300">•</span>
            <a
              href={`tel:${siteContent.contact.phones[0]}`}
              className="text-sm font-semibold text-rdcc-navy hover:text-rdcc-blue flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us Directly: {siteContent.contact.phones[0]}</span>
            </a>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6">
            <span className="text-xs font-bold tracking-wider uppercase text-rdcc-blue">
              Connect With RDCC
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-rdcc-navy mt-1">
              Request Guidance or Consultation
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Fill out the details below to connect directly with our advisory team.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
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
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rdcc-blue/40 focus:border-rdcc-blue text-sm transition-all"
              />
            </div>

            {/* Phone & Email Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rdcc-blue/40 focus:border-rdcc-blue text-sm transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rdcc-blue/40 focus:border-rdcc-blue text-sm transition-all"
                />
              </div>
            </div>

            {/* Interested In */}
            <div>
              <label htmlFor="interest" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                Interested In <span className="text-rose-500">*</span>
              </label>
              <select
                id="interest"
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-rdcc-blue/40 focus:border-rdcc-blue text-sm transition-all"
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
                Message or Query
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your student class, specific questions, or requirements..."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rdcc-blue/40 focus:border-rdcc-blue text-sm transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-rdcc-blue hover:bg-rdcc-blue-hover text-white font-semibold text-sm sm:text-base shadow-lg shadow-rdcc-blue/20 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Send Enquiry via WhatsApp</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-[11px] text-center text-slate-500 pt-1">
              Your message will open directly in WhatsApp for instant response from our counsellor.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
