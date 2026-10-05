import React from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Heart, 
  Compass, 
  Users, 
  Sparkles,
  Quote,
  GraduationCap,
  ArrowRight,
  Target,
  FileCheck,
  CheckCircle
} from "lucide-react";
import { siteContent } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import { UpwardArrows, DirectionBadge } from "../components/ArrowMotif";

export default function About() {
  const objectiveIcons = [
    <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    <Sparkles className="w-5 h-5 text-amber-600" />,
    <Heart className="w-5 h-5 text-rose-500" />,
    <Compass className="w-5 h-5 text-rdcc-blue" />,
    <Target className="w-5 h-5 text-rdcc-sky" />,
    <GraduationCap className="w-5 h-5 text-indigo-600" />,
    <Users className="w-5 h-5 text-cyan-600" />,
    <Award className="w-5 h-5 text-amber-700" />,
    <BookOpen className="w-5 h-5 text-blue-600" />,
    <FileCheck className="w-5 h-5 text-emerald-700" />,
    <CheckCircle className="w-5 h-5 text-rdcc-blue" />,
  ];

  return (
    <div className="bg-white">
      {/* ========================================================================= */}
      {/* PAGE HEADER BANNER                                                        */}
      {/* ========================================================================= */}
      <section className="relative bg-navy-gradient text-white py-16 sm:py-24 overflow-hidden border-b-4 border-rdcc-blue">
        <div className="absolute inset-0 bg-navy-mesh opacity-80 pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 opacity-20 pointer-events-none">
          <UpwardArrows className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <DirectionBadge text="About Our Consultancy" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mt-4 tracking-tight">
              {siteContent.about.pageTitle}
            </h1>
            <p className="text-rdcc-cyan-light text-base sm:text-lg mt-3 font-medium">
              {siteContent.brand.name} • {siteContent.brand.established}
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs text-slate-300">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-semibold">About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ABOUT US STORY (ALL 7 PARAGRAPHS FROM BROCHURE VERBATIM)                  */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-brochure-mesh border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Big Hero Image */}
          <div className="mb-12 sm:mb-20 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative group">
            <img 
              src="/images/about-us-hero.jpg" 
              alt="RDCC Career Guidance and Mentoring" 
              className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover transform group-hover:scale-105 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rdcc-navy/90 via-rdcc-navy/20 to-transparent opacity-80" />
            <div className="absolute bottom-8 left-6 sm:bottom-12 sm:left-12 max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-rdcc-gold/90 text-rdcc-navy text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 backdrop-blur-md shadow-sm">
                Empowering Futures
              </span>
              <h3 className="text-white font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl leading-tight drop-shadow-lg">
                Shaping successful career journeys since 2020
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Story Text Column */}
            <div className="lg:col-span-8 space-y-6">
              <SectionHeading
                badge="Our Background & Evolution"
                title="Guidance That Transforms Lives"
                subtitle="Understanding individual journeys and helping people move forward with confidence and purpose."
              />

              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
                {siteContent.about.story.map((paragraph, index) => (
                  <div
                    key={index}
                    className="p-5 sm:p-6 rounded-2xl bg-white shadow-xs border border-slate-200/80 relative"
                  >
                    <div className="w-1.5 h-6 bg-rdcc-blue rounded-full absolute -left-0.5 top-6" />
                    <p>{paragraph}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Callout & Quick Facts Sidebar */}
            <div className="lg:col-span-4 space-y-6 sticky top-28">
              <div className="bg-gradient-to-br from-rdcc-navy via-rdcc-navy-light to-rdcc-navy text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-rdcc-cyan/20 rounded-full blur-2xl pointer-events-none" />
                <div className="relative space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-rdcc-gold">
                    Guiding Ethos
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    More Than Advice
                  </h3>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    At The Right Direction Career Consultancy, guidance is not simply about giving advice—it is about listening with empathy, understanding individual journeys and helping people move forward with confidence and purpose.
                  </p>
                  <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-rdcc-cyan-light">
                    <span>Established 2020</span>
                    <span>Guwahati, Assam</span>
                  </div>
                </div>
              </div>

              {/* Mission Snapshot Box */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Core Mission Pillars
                </h4>
                <div className="space-y-2">
                  {siteContent.about.mission.items.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-rdcc-blue mt-0.5 flex-shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* VISION & MANDATE SECTION (PAGE 3 OF BROCHURE VERBATIM)                    */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50/80 to-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Dual Split Cards: Vision & Mandate */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-rdcc-navy via-rdcc-navy-light to-rdcc-blue text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rdcc-cyan/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-rdcc-gold text-xs font-bold uppercase tracking-wider border border-white/20">
                  <Target className="w-4 h-4 text-rdcc-gold" />
                  <span>{siteContent.about.vision.heading}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                  Empowering Lives Across Every Stage
                </h3>
                <blockquote className="text-lg sm:text-xl text-slate-100 font-medium leading-relaxed italic pt-2">
                  "{siteContent.about.vision.content}"
                </blockquote>
              </div>
              <div className="mt-8 pt-4 border-t border-white/15 text-xs text-rdcc-cyan-light font-medium">
                The Right Direction Vision • Established 2020
              </div>
            </div>

            {/* Mandate Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border-2 border-rdcc-cyan-light relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rdcc-cyan-ice text-rdcc-navy text-xs font-bold uppercase tracking-wider border border-rdcc-cyan/40">
                  <ShieldCheck className="w-4 h-4 text-rdcc-blue" />
                  <span>{siteContent.about.mandate.heading}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-rdcc-navy">
                  Our Comprehensive Institutional Mandate
                </h3>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
                  "{siteContent.about.mandate.content}"
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Official Institutional Charter • RDCC Guwahati, Assam
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ALL 11 OBJECTIVES (PAGE 4 OF BROCHURE VERBATIM)                           */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50/80 relative overflow-hidden border-b border-slate-200/60">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-rdcc-cyan/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-rdcc-blue/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Institutional Goals"
            title={siteContent.about.objectives.heading}
            subtitle="The 11 core objectives that guide our counselling, training, and community engagements."
            centered={true}
          />

          {/* 11 Objectives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16">
            {siteContent.about.objectives.items.map((obj, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 hover:border-rdcc-cyan/30 transition-all duration-500 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
              >
                {/* Decorative background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rdcc-cyan/5 via-white to-rdcc-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Bottom colored border line */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-rdcc-blue to-rdcc-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-white flex items-center justify-center transition-all duration-500 shadow-sm group-hover:shadow-md group-hover:-rotate-3 group-hover:scale-110 border border-slate-100 group-hover:border-rdcc-cyan-light">
                      <div className="transform scale-110 transition-transform duration-500 group-hover:scale-125">
                        {objectiveIcons[index % objectiveIcons.length]}
                      </div>
                    </div>
                    <span className="text-5xl font-heading font-black text-slate-50 group-hover:text-rdcc-cyan/10 transition-colors duration-500 -mt-2 -mr-2 select-none">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>

                  <p className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                    {obj}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 group-hover:border-rdcc-cyan/20 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-rdcc-blue transition-colors duration-300 relative z-10">
                  <span className="uppercase tracking-widest">Objective {index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                  <div className="flex items-center gap-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-[10px] uppercase tracking-wider text-rdcc-cyan">Core</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ABOUT OUR FOUNDER (PAGE 5 OF BROCHURE VERBATIM)                           */}
      {/* ========================================================================= */}
      <section id="founder" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50/80 to-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Founder & Leadership"
            title={siteContent.about.founder.heading}
            subtitle={siteContent.about.founder.title}
            centered={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mt-10">
            {/* Founder Photograph & Badges */}
            <div className="lg:col-span-5">
              <div className="relative max-w-md mx-auto">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src={siteContent.about.founder.image}
                    alt={siteContent.about.founder.name}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-6 bg-rdcc-navy text-white text-center">
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold">
                      {siteContent.about.founder.name}
                    </h3>
                    <p className="text-rdcc-cyan-light text-xs sm:text-sm font-semibold mt-1">
                      {siteContent.about.founder.title}
                    </p>
                  </div>
                </div>

                {/* Award Badge Card */}
                <div className="mt-6 bg-white rounded-2xl p-5 shadow-card border border-amber-200 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7" />
                  </div>
                  <div className="text-sm">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                      Recognition
                    </div>
                    <div className="font-heading font-bold text-slate-800 mt-0.5">
                      Women’s Achiever Award 2025
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Awarded by the Global Talk Education Foundation for contribution to mentoring and career awareness.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Bio Details (ALL 5 PARAGRAPHS FROM BROCHURE VERBATIM) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-slate-200 space-y-5">
                <h3 className="text-2xl font-heading font-extrabold text-rdcc-navy border-b border-slate-100 pb-4">
                  {siteContent.about.founder.name}
                </h3>

                <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                  {siteContent.about.founder.bioParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Credentials summary badges */}
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Professional Certifications & Credentials
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {siteContent.about.founder.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-rdcc-cyan-ice/80 text-rdcc-navy font-semibold border border-rdcc-cyan/40"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* SEPARATE HIGHLIGHTED PHILOSOPHY CARD (EXACT QUOTE) */}
              <div className="bg-gradient-to-br from-rdcc-navy to-rdcc-blue text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute -bottom-6 -right-6 opacity-20">
                  <Quote className="w-32 h-32 text-white" />
                </div>
                <div className="relative space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-rdcc-gold text-xs font-bold uppercase tracking-wider border border-white/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{siteContent.about.founder.philosophyHeading}</span>
                  </div>
                  <blockquote className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-white leading-snug">
                    "{siteContent.about.founder.philosophyQuote}"
                  </blockquote>
                  <p className="text-xs text-rdcc-cyan-light font-medium pt-2">
                    — Rashmi Rekha Kakoty, Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
