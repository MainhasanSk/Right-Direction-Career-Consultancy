import React, { useState } from "react";
import { MessageSquare, Phone, X, ArrowUpRight, Calendar } from "lucide-react";
import { siteContent } from "../data/content";
import { useConsultationModal } from "../context/ConsultationModalContext";

export default function FloatingCTA() {
  const { openConsultationModal } = useConsultationModal();
  const [minimized, setMinimized] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {!minimized ? (
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl border border-rdcc-cyan-light/80 max-w-[280px] sm:max-w-xs animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-rdcc-navy">
                Counselling Available
              </span>
            </div>
            <button
              onClick={() => setMinimized(true)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Minimize consultation popup"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[11px] text-slate-600 leading-snug mb-3">
            Have questions about student academic guidance or women mentoring?
          </p>

          <button
            type="button"
            onClick={() => openConsultationModal()}
            className="w-full mb-2 py-2 px-3 rounded-xl bg-rdcc-blue hover:bg-rdcc-blue-hover text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all hover:scale-102 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book a Consultation</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={`https://wa.me/${siteContent.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent("Hello RDCC Team, I would like to enquire about your guidance services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all hover:scale-102"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${siteContent.contact.phones[0].replace(/\s+/g, '')}`}
              className="py-2 px-2.5 rounded-xl bg-rdcc-navy hover:bg-rdcc-blue text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all hover:scale-102"
            >
              <Phone className="w-3.5 h-3.5 text-rdcc-cyan-light" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setMinimized(false)}
          className="w-13 h-13 rounded-full bg-rdcc-blue hover:bg-rdcc-blue-hover text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 border-2 border-white pulse-glow p-3.5"
          aria-label="Open consultation widget"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
