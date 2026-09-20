import React from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Users, 
  School, 
  Briefcase, 
  Clock, 
  Laptop, 
  Award,
  Layers,
  Presentation,
  Compass,
  CheckCircle,
  HelpCircle,
  Building2
} from "lucide-react";
import { siteContent } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import { UpwardArrows, DirectionBadge } from "../components/ArrowMotif";
import { useConsultationModal } from "../context/ConsultationModalContext";

export default function Services() {
  const { openConsultationModal } = useConsultationModal();
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
            <DirectionBadge text="Academic & Entrepreneurial Guidance" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mt-4 tracking-tight">
              {siteContent.services.pageTitle}
            </h1>
            <p className="text-rdcc-cyan-light text-base sm:text-lg mt-3 font-medium">
              {siteContent.services.intro}
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs text-slate-300">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-semibold">Our Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SARATHI SECTION (DETAILED BROCHURE EXPANSION)                              */}
      {/* ========================================================================= */}
      <section id="sarathi" className="py-16 sm:py-24 bg-white border-b border-slate-200/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Header and Artwork Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rdcc-cyan-ice text-rdcc-blue text-xs font-extrabold uppercase tracking-wider border border-rdcc-cyan/40">
                <GraduationCap className="w-4 h-4" />
                <span>{siteContent.services.sarathi.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-rdcc-navy">
                {siteContent.services.sarathi.name}
              </h2>

              <p className="text-base sm:text-lg font-semibold text-rdcc-blue">
                {siteContent.services.sarathi.subheading}
              </p>

              {/* EXACT DESCRIPTION FROM BROCHURE */}
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                {siteContent.services.sarathi.description}
              </p>

              {/* Vibrant Colorful Program Visual Banner (UNCROPPED) */}
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-100/60 border-2 border-rdcc-blue/40 shadow-xl relative group">
                <div className="p-3 sm:p-4 pb-2 bg-gradient-to-b from-sky-100/60 to-white">
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-white shadow-sm border border-sky-200/90 flex items-center justify-center p-3">
                    <img
                      src="/images/sarathi-banner.jpg"
                      alt="SARATHI Career Guidance & Mentoring Programme"
                      className="w-full h-full object-contain drop-shadow-sm group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    
                    {/* Overlapping Emblem Logo */}
                    <div className="absolute bottom-2 right-2 flex items-center gap-2 px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-rdcc-blue/30 shadow-md">
                      <div className="w-7 h-7 rounded-lg overflow-hidden border border-rdcc-blue/30">
                        <img
                          src="/images/sarathi-hero-icon.jpg"
                          alt="SARATHI Chariot Logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-[11px] font-extrabold text-rdcc-navy">SARATHI Logo</span>
                    </div>
                  </div>
                </div>
                <div className="p-3.5 sm:p-4 bg-white/95 backdrop-blur-sm border-t border-sky-100 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold text-rdcc-navy">Academic Guidance & Mentoring</span>
                  <span className="text-rdcc-blue font-bold">10 Key Offerings</span>
                </div>
              </div>

              {/* Who is SARATHI for? Mini Card */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
                <h4 className="text-sm font-heading font-bold text-rdcc-navy flex items-center gap-2">
                  <Users className="w-4 h-4 text-rdcc-blue" />
                  <span>Who is SARATHI For?</span>
                </h4>
                <div className="space-y-2">
                  {siteContent.services.targetAudience.categories[0].for.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-rdcc-blue mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact?service=SARATHI"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-rdcc-blue hover:bg-rdcc-blue-hover text-white font-semibold text-sm shadow-md transition-all duration-200"
                >
                  <span>Enquire About SARATHI</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right List of 10 Exact Services */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
                <h3 className="text-xl font-heading font-bold text-rdcc-navy mb-6 flex items-center gap-2">
                  <span>Structured Guidance Offerings</span>
                  <span className="text-xs font-normal text-slate-500">
                    (Classes 8–12 & Parents)
                  </span>
                </h3>

                <div className="space-y-3 sm:space-y-3.5">
                  {siteContent.services.sarathi.list.map((service, index) => (
                    <div
                      key={index}
                      className="group p-4 sm:p-4.5 rounded-2xl bg-white hover:bg-rdcc-cyan-ice/30 border border-slate-200/80 hover:border-rdcc-blue/40 shadow-xs hover:shadow-sm transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-start sm:items-center gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-rdcc-cyan-ice text-rdcc-blue font-heading font-bold text-xs flex items-center justify-center flex-shrink-0 group-hover:bg-rdcc-blue group-hover:text-white transition-colors">
                          {service.num}
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-sm sm:text-base">
                            {service.title}
                          </h4>
                          <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                            {service.desc}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-rdcc-blue group-hover:translate-x-1 transition-all self-end sm:self-center flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HATE HAT DHORI SECTION (DETAILED BROCHURE EXPANSION)                       */}
      {/* ========================================================================= */}
      <section id="hate-hat-dhori" className="py-16 sm:py-24 bg-gradient-to-b from-white to-amber-50/20 border-b border-slate-200/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Header and Artwork Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider border border-amber-300/60">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>{siteContent.services.hateHatDhori.badge}</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-rdcc-navy">
                  {siteContent.services.hateHatDhori.name}
                </h2>
                <div className="text-lg font-heading font-bold text-amber-800 mt-1">
                  {siteContent.services.hateHatDhori.assameseName} • {siteContent.services.hateHatDhori.tagline}
                </div>
              </div>

              <p className="text-base sm:text-lg font-semibold text-amber-800">
                {siteContent.services.hateHatDhori.subheading}
              </p>

              {/* EXACT DESCRIPTION FROM BROCHURE */}
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                {siteContent.services.hateHatDhori.description}
              </p>

              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950 text-sm font-medium">
                "{siteContent.services.hateHatDhori.goal}"
              </div>

              {/* Vibrant Colorful Program Visual Banner (UNCROPPED) */}
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-white via-amber-50 to-orange-100/60 border-2 border-amber-300 shadow-xl relative group">
                <div className="p-3 sm:p-4 pb-2 bg-gradient-to-b from-amber-100/60 to-white">
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-white shadow-sm border border-amber-200/90 flex items-center justify-center p-3">
                    <img
                      src="/images/hatehatdhori-banner.jpg"
                      alt="Hate Hat Dhori Women Mentoring Program Banner"
                      className="w-full h-full object-contain drop-shadow-sm group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    
                    {/* Overlapping Emblem Logo */}
                    <div className="absolute bottom-2 right-2 flex items-center gap-2 px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-amber-400/40 shadow-md">
                      <div className="w-7 h-7 rounded-lg overflow-hidden border border-amber-400/40">
                        <img
                          src="/images/hatehatdhori-hero-icon.jpg"
                          alt="HATE HAT DHORI Women Logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-[11px] font-extrabold text-amber-950">Hate Hat Dhori Logo</span>
                    </div>
                  </div>
                </div>
                <div className="p-3.5 sm:p-4 bg-white/95 backdrop-blur-sm border-t border-amber-100 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold text-rdcc-navy">Guidance & Mentoring for Women</span>
                  <span className="text-amber-800 font-bold">5 Focus Modules</span>
                </div>
              </div>

              {/* Who is HATE HAT DHORI for? Mini Card */}
              <div className="p-6 rounded-3xl bg-white border border-amber-200/90 space-y-3 shadow-xs">
                <h4 className="text-sm font-heading font-bold text-amber-950 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-amber-600" />
                  <span>Who is HATE HAT DHORI For?</span>
                </h4>
                <div className="space-y-2">
                  {siteContent.services.targetAudience.categories[2].for.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact?service=HATE%20HAT%20DHORI"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-md transition-all duration-200"
                >
                  <span>Enquire About HATE HAT DHORI</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right List of 5 Exact Services */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-card">
                <h3 className="text-xl font-heading font-bold text-rdcc-navy mb-6 flex items-center gap-2">
                  <span>Mentoring & Entrepreneurship Modules</span>
                </h3>

                <div className="space-y-4">
                  {siteContent.services.hateHatDhori.list.map((service, index) => (
                    <div
                      key={index}
                      className="group p-5 rounded-2xl bg-amber-50/40 hover:bg-amber-100/50 border border-amber-200/60 hover:border-amber-400 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-start sm:items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-200/70 text-amber-900 font-heading font-bold text-sm flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                          {service.num}
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-base sm:text-lg">
                            {service.title}
                          </h4>
                          <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                            {service.desc}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-amber-600/50 group-hover:text-amber-700 group-hover:translate-x-1 transition-all self-end sm:self-center flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SARATHI CAREER CLUB DEDICATED INSTITUTIONAL SECTION (BROCHURE HIGHLIGHT) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-rdcc-navy via-rdcc-navy-light to-rdcc-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rdcc-cyan/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-rdcc-cyan-light text-xs font-bold uppercase tracking-wider border border-white/20 inline-block">
                Institutional Partnership
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white">
                SARATHI Career Club for Schools & Educational Institutions
              </h3>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
                An initiative to create a community of young minds, build career awareness and shape brighter futures. RDCC partners with schools to conduct regular career talks, workshops, and continuous guidance activities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {siteContent.services.targetAudience.categories[1].for.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-rdcc-cyan flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                to="/contact?service=SARATHI%20Career%20Club"
                className="btn-shimmer px-8 py-4 rounded-xl bg-white hover:bg-rdcc-cyan-ice text-rdcc-navy font-bold text-sm sm:text-base shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <span>Partner With RDCC</span>
                <ArrowRight className="w-4 h-4 text-rdcc-blue" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHO MAY TAKE OUR SERVICES? SECTION (PAGE 8 OF BROCHURE VERBATIM)          */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Audience & Eligibility"
            title={siteContent.services.targetAudience.heading}
            subtitle={siteContent.services.targetAudience.subtitle}
            centered={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {siteContent.services.targetAudience.categories.map((cat, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-8 shadow-card border-2 transition-all duration-300 flex flex-col justify-between ${
                  cat.color === 'amber' ? 'border-amber-300 hover:border-amber-500' : 'border-slate-200 hover:border-rdcc-blue'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      cat.color === 'amber' ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-rdcc-cyan-ice text-rdcc-blue border border-rdcc-cyan/40'
                    }`}>
                      {cat.badge}
                    </span>
                    {cat.color === 'blue' ? (
                      <GraduationCap className="w-6 h-6 text-rdcc-blue" />
                    ) : cat.color === 'sky' ? (
                      <School className="w-6 h-6 text-sky-600" />
                    ) : (
                      <Briefcase className="w-6 h-6 text-amber-600" />
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-rdcc-navy">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1 mb-6">
                    {cat.subtitle}
                  </p>

                  <div className="space-y-3">
                    {cat.for.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-4 h-4 mt-1 flex-shrink-0 ${
                          cat.color === 'amber' ? 'text-amber-600' : 'text-rdcc-blue'
                        }`} />
                        <span className="text-slate-700 text-sm leading-relaxed">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100">
                  <Link
                    to={`/contact?service=${encodeURIComponent(cat.title)}`}
                    className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                      cat.color === 'amber'
                        ? 'bg-amber-600 hover:bg-amber-700 text-white'
                        : 'bg-rdcc-blue hover:bg-rdcc-blue-hover text-white'
                    }`}
                  >
                    <span>Connect For Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HOW DO WE PROVIDE OUR SERVICES? SECTION (PAGE 9 OF BROCHURE VERBATIM)     */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Delivery Methodology"
            title={siteContent.services.serviceDelivery.heading}
            subtitle={siteContent.services.serviceDelivery.subtitle}
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
            {siteContent.services.serviceDelivery.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200 hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-rdcc-cyan-ice text-rdcc-blue border border-rdcc-cyan/40">
                      {pillar.badge}
                    </span>
                    <span className="text-xs font-black text-slate-300">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-heading font-extrabold text-rdcc-navy mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {pillar.content}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Standard Delivery Protocol</span>
                  <CheckCircle2 className="w-4 h-4 text-rdcc-blue" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openConsultationModal()}
              className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-rdcc-blue hover:bg-rdcc-blue-hover text-white font-bold text-base shadow-xl shadow-rdcc-blue/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-5 h-5 text-rdcc-cyan-light" />
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-rdcc-navy border-2 border-slate-200 hover:border-rdcc-blue/40 font-semibold text-base shadow-sm transition-all duration-200"
            >
              <span>Discuss a Custom Session or Programme</span>
              <ArrowRight className="w-4 h-4 text-rdcc-blue" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
