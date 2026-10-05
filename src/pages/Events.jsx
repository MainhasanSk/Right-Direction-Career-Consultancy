import React from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Award, 
  PenTool, 
  HeartHandshake, 
  BookOpen, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles,
  FileText,
  Share2,
  CheckCircle
} from "lucide-react";
import { siteContent } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import { UpwardArrows, DirectionBadge } from "../components/ArrowMotif";

export default function Events() {
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
            <DirectionBadge text="Community Engagement & Annual Initiatives" />
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold text-white mt-4 tracking-tight">
              {siteContent.events.pageTitle}
            </h1>
            <p className="text-rdcc-cyan-light text-base sm:text-lg mt-3 font-medium">
              {siteContent.events.subtitle}
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs text-slate-300">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-semibold">Events & Community</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* EVENT 1: MANIFEST YOUR DREAM THROUGH YOUR TALENTS (PAGE 10 OF BROCHURE)  */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50/70 rounded-3xl p-8 sm:p-12 shadow-card border border-slate-200/90 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rdcc-navy via-rdcc-blue to-rdcc-cyan" />

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rdcc-cyan-ice text-rdcc-navy text-xs font-bold uppercase tracking-wider border border-rdcc-cyan-light">
                <Calendar className="w-3.5 h-3.5 text-rdcc-blue" />
                <span>{siteContent.events.event1.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-rdcc-navy">
                {siteContent.events.event1.title}
              </h2>

              {/* EXACT BROCHURE CONTENT PARAGRAPHS */}
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                {siteContent.events.event1.description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Highlights Pill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                {siteContent.events.event1.highlights.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/80 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-rdcc-blue hover:bg-rdcc-blue-hover text-white font-semibold text-sm shadow-md transition-all duration-200"
                >
                  <span>Enquire for Upcoming November Edition</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* EVENT 2: LATE PROF. L. P. KAKOTY MEMORIAL LETTER WRITING (PAGE 10)         */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-slate-200/90 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rdcc-navy via-rdcc-blue to-rdcc-cyan" />

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-800 text-xs font-bold uppercase tracking-wider border border-indigo-200">
                <PenTool className="w-3.5 h-3.5 text-indigo-600" />
                <span>{siteContent.events.event2.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-rdcc-navy">
                {siteContent.events.event2.title}
              </h2>

              {/* EXACT BROCHURE CONTENT PARAGRAPHS */}
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                {siteContent.events.event2.description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Highlights Pill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                {siteContent.events.event2.highlights.map((hl, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{hl}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md transition-all duration-200"
                >
                  <span>Submit an Entry or Learn More</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* COMMUNITY HELP (PAGE 11 OF BROCHURE VERBATIM)                             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Social Responsibility & Awareness"
            title="Community Help"
            subtitle="Extending awareness and guidance initiatives to students, youth, and society across Assam."
            centered={true}
          />

          <div className="max-w-3xl mx-auto mt-10">
            {/* COMMUNITY HELP CARD (PAGE 11 OF BROCHURE VERBATIM) */}
            <div className="bg-gradient-to-br from-white to-sky-50/50 rounded-3xl p-8 sm:p-10 shadow-card border border-slate-200 hover:border-rdcc-blue/40 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-rdcc-cyan-ice text-rdcc-blue flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-rdcc-blue">
                  {siteContent.events.communityHelp.badge}
                </span>

                <h3 className="text-2xl font-heading font-extrabold text-rdcc-navy">
                  {siteContent.events.communityHelp.heading}
                </h3>

                <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
                  {siteContent.events.communityHelp.description.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Free Community-Oriented Activities</span>
                <span className="text-rdcc-blue font-semibold">Assam & Northeast</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
