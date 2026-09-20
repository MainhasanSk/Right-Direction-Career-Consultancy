import React from "react";
import { Link } from "react-router-dom";
import { 
  Compass, 
  Target, 
  HeartHandshake, 
  Sparkles, 
  GraduationCap, 
  ArrowRight, 
  ArrowUpRight, 
  Award, 
  Users, 
  CheckCircle2,
  Calendar,
  Layers,
  Shield,
  BookOpen,
  School,
  Briefcase,
  Quote,
  Clock,
  Laptop
} from "lucide-react";
import { siteContent } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import { UpwardArrows, DirectionBadge } from "../components/ArrowMotif";
import { useConsultationModal } from "../context/ConsultationModalContext";

export default function Home() {
  const { openConsultationModal } = useConsultationModal();
  const missionIcons = [
    <Compass className="w-6 h-6 text-rdcc-blue" />,
    <Target className="w-6 h-6 text-rdcc-blue" />,
    <Sparkles className="w-6 h-6 text-amber-500" />,
    <HeartHandshake className="w-6 h-6 text-rdcc-cyan" />,
  ];

  return (
    <div className="overflow-hidden bg-[#FAFCFF]">
      {/* ========================================================================= */}
      {/* HERO SECTION WITH RDCC OFFICIAL BRANDING                                 */}
      {/* ========================================================================= */}
      <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden border-b border-slate-200/80 bg-directional-pattern">
        {/* Dynamic Luminous Background Glow Orbs */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-rdcc-cyan/25 via-rdcc-blue/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="absolute -bottom-10 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-rdcc-blue/20 via-indigo-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Floating Pill Tag with Glowing Dot */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-rdcc-cyan-light shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rdcc-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rdcc-blue"></span>
                </span>
                <span className="text-xs font-bold text-rdcc-navy tracking-wide">
                  The Right Direction Career Consultancy
                </span>
                <span className="w-1 h-3.5 bg-slate-200"></span>
                <span className="text-[11px] font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
                  {siteContent.home.hero.estd}
                </span>
              </div>

              {/* Main Heading with Gradient Accent */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-heading font-extrabold text-rdcc-navy leading-[1.14] tracking-tight">
                We Guide You For A{" "}
                <span className="bg-gradient-to-r from-rdcc-blue via-rdcc-sky to-rdcc-navy bg-clip-text text-transparent">
                  Better Future
                </span>
              </h1>

              {/* EXACT SUPPORTING CONTENT */}
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                {siteContent.home.hero.subheading}
              </p>

              {/* CTAs with Shimmer and Elevation */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={() => openConsultationModal()}
                  className="btn-shimmer w-full sm:w-auto px-8 py-4 rounded-xl bg-rdcc-blue hover:bg-rdcc-blue-hover text-white font-bold text-base shadow-xl shadow-rdcc-blue/30 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2.5 group transform hover:-translate-y-1"
                >
                  <span>{siteContent.home.hero.ctaPrimary}</span>
                  <ArrowUpRight className="w-5 h-5 text-rdcc-cyan-light group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <Link
                  to="/services"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-rdcc-navy font-bold text-base border-2 border-slate-200 hover:border-rdcc-blue/50 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  <span>{siteContent.home.hero.ctaSecondary}</span>
                  <ArrowRight className="w-4 h-4 text-rdcc-blue" />
                </Link>
              </div>

              {/* Quick Pillars Feature Bar with CUSTOM SARATHI & HATE HAT DHORI IMAGES */}
              <div className="pt-6 border-t border-slate-200/90 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {/* SARATHI Feature Card */}
                <Link
                  to="/services#sarathi"
                  className="group flex items-center gap-3.5 p-3 rounded-2xl bg-white hover:bg-rdcc-cyan-soft border border-slate-200/90 hover:border-rdcc-blue/40 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-rdcc-cyan-light shadow-sm flex-shrink-0 bg-white p-0.5 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src="/images/sarathi-hero-icon.jpg"
                      alt="SARATHI Guidance Chariot Emblem"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-heading font-extrabold text-rdcc-navy group-hover:text-rdcc-blue transition-colors">
                        SARATHI
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rdcc-cyan-ice text-rdcc-blue border border-rdcc-cyan/40">
                        Class 8–12
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 font-medium truncate mt-0.5">
                      Academic Guidance & Mentoring
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-rdcc-blue group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>

                {/* HATE HAT DHORI Feature Card */}
                <Link
                  to="/services#hate-hat-dhori"
                  className="group flex items-center gap-3.5 p-3 rounded-2xl bg-white hover:bg-amber-50/50 border border-slate-200/90 hover:border-amber-400/50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-amber-200 shadow-sm flex-shrink-0 bg-white p-0.5 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src="/images/hatehatdhori-hero-icon.jpg"
                      alt="HATE HAT DHORI Women Mentoring Emblem"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-heading font-extrabold text-rdcc-navy group-hover:text-amber-800 transition-colors">
                        HATE HAT DHORI
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300/60">
                        Women
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 font-medium truncate mt-0.5">
                      Guidance & Mentoring for Women
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              </div>
            </div>

            {/* Right Visual Showcase Column */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-md">
                {/* Floating Top Chip with SARATHI Chariot Image */}
                <Link
                  to="/services#sarathi"
                  className="absolute -top-6 -left-4 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-rdcc-cyan-light shadow-xl text-xs font-bold text-rdcc-navy hover:scale-105 transition-transform"
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-rdcc-blue/40 shadow-sm">
                    <img
                      src="/images/sarathi-hero-icon.jpg"
                      alt="SARATHI Mini Icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-extrabold text-rdcc-blue">SARATHI</div>
                    <div className="text-[9px] text-slate-500">Classes 8–12 Guidance</div>
                  </div>
                </Link>

                {/* Floating Bottom Chip with HATE HAT DHORI Women Image */}
                <Link
                  to="/services#hate-hat-dhori"
                  className="absolute -bottom-6 -right-4 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-300 shadow-xl text-xs font-bold text-amber-950 hover:scale-105 transition-transform"
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-amber-400 shadow-sm">
                    <img
                      src="/images/hatehatdhori-hero-icon.jpg"
                      alt="Hate Hat Dhori Mini Icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-extrabold text-amber-800">HATE HAT DHORI</div>
                    <div className="text-[9px] text-slate-500">Women Mentoring</div>
                  </div>
                </Link>

                {/* Main Showcase Card */}
                <div className="relative bg-white/95 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl border-2 border-rdcc-cyan-light/80 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rdcc-navy via-rdcc-blue to-rdcc-cyan" />
                  <div className="absolute -top-16 -right-16 w-52 h-52 bg-gradient-to-bl from-rdcc-cyan/20 to-transparent rounded-full blur-2xl pointer-events-none" />

                  {/* Header Row inside card */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                        Official RDCC Portal
                      </span>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-rdcc-cyan-ice text-rdcc-navy border border-rdcc-cyan/40">
                      Guwahati-24
                    </span>
                  </div>

                  {/* Official Logo Showcase (UNCROPPED, NO ROUND SHAPE) */}
                  <div className="py-6 flex flex-col items-center text-center relative">
                    <div className="relative mb-6 flex items-center justify-center">
                      <div className="p-3 bg-white rounded-2xl border border-slate-200/90 shadow-lg hover:shadow-xl transition-all duration-300">
                        <img
                          src={siteContent.brand.logo}
                          alt="The Right Direction Official Logo"
                          className="w-36 h-36 sm:w-40 sm:h-40 object-contain"
                        />
                      </div>
                      <div className="absolute -bottom-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-md px-3 py-1 text-xs font-black shadow-md border border-white">
                        ESTD. 2020
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-rdcc-navy tracking-tight">
                      {siteContent.brand.name}
                    </h2>
                    <p className="text-xs font-bold uppercase tracking-widest text-rdcc-blue mt-1">
                      {siteContent.brand.tagline}
                    </p>
                    
                    <div className="mt-4 p-3 rounded-2xl bg-gradient-to-r from-rdcc-cyan-soft to-slate-50 border border-rdcc-cyan-light text-slate-700 text-xs font-semibold italic shadow-inner">
                      "{siteContent.brand.motto}"
                    </div>
                  </div>

                  {/* Card Action Hint */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-rdcc-navy">Assam & Northeast India</span>
                    <Link to="/about" className="text-rdcc-blue font-bold flex items-center gap-1 hover:underline">
                      <span>Learn More</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-8 -z-10 opacity-80 pointer-events-none">
                  <UpwardArrows className="w-40 h-40 text-rdcc-cyan/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* OUR VISION SECTION (Luminous Illuminated Centerpiece)                     */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50/80 border-b border-slate-200/70 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-rdcc-navy via-rdcc-navy-light to-rdcc-navy text-white rounded-[32px] p-8 sm:p-14 shadow-2xl overflow-hidden border border-rdcc-cyan/30 text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rdcc-cyan/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rdcc-blue/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-6 right-8 opacity-25">
              <UpwardArrows className="w-20 h-20 text-white" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-rdcc-gold text-xs font-bold uppercase tracking-widest border border-rdcc-gold/30">
                <Target className="w-4 h-4 text-rdcc-gold" />
                <span>{siteContent.home.vision.heading}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white">
                {siteContent.home.vision.heading}
              </h2>

              <blockquote className="text-lg sm:text-2xl md:text-3xl text-slate-100 font-heading font-semibold leading-relaxed max-w-3xl mx-auto tracking-normal">
                "{siteContent.home.vision.content}"
              </blockquote>

              <div className="pt-2 flex items-center justify-center gap-2 text-xs text-rdcc-cyan-light font-medium">
                <span className="w-8 h-px bg-rdcc-cyan/40"></span>
                <span>The Right Direction Career Consultancy • Estd. 2020</span>
                <span className="w-8 h-px bg-rdcc-cyan/40"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* OUR MISSION SECTION (Glowing 4-Pillar Grid)                               */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Guiding Principles"
            title={siteContent.home.mission.heading}
            subtitle="The foundational commitments that direct our counselling, training, and community initiatives."
            centered={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {siteContent.home.mission.items.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-7 shadow-card hover:shadow-card-hover border border-slate-200/90 hover:border-rdcc-blue/50 transition-all duration-300 relative flex flex-col justify-between card-glow-hover"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rdcc-cyan-ice to-white text-rdcc-blue flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 border border-rdcc-cyan-light/60">
                    {missionIcons[index]}
                  </div>
                  <span className="text-xs font-black text-slate-300 group-hover:text-rdcc-blue transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-rdcc-blue">
                    Mission Pillar 0{index + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-rdcc-navy leading-snug">
                    {item}
                  </h3>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium">Core Commitment</span>
                  <span className="text-rdcc-blue font-bold">↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ABOUT RDCC STORY (AUTHENTIC BROCHURE EXPANSION)                           */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50/70 to-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Founder Image & Credential Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative max-w-md mx-auto">
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/images/founder.jpeg"
                    alt="Mrs. Rashmi Rekha Kakoty - Founder RDCC"
                    className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                  />
                  <div className="p-6 bg-gradient-to-t from-rdcc-navy via-rdcc-navy to-rdcc-navy-light text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-rdcc-gold">
                      Founder & Academic Counsellor
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold mt-0.5">
                      Mrs. Rashmi Rekha Kakoty
                    </h3>
                    <p className="text-xs text-rdcc-cyan-light mt-1">
                      Over 15 years of experience in the education sector
                    </p>
                  </div>
                </div>

                {/* Floating Award Badge */}
                <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white rounded-2xl p-4 shadow-xl border border-amber-200 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-rdcc-navy">
                      Women’s Achiever Award 2025
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      Global Talk Education Foundation
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Us Content Preview (EXACT BROCHURE TEXT) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <SectionHeading
                badge="About RDCC"
                title="The Right Direction Story"
                subtitle="From high school career guidance to empowering individuals across different stages of life."
              />

              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                {siteContent.home.aboutPreview.paragraphs.map((para, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white shadow-xs border border-slate-200/90 relative">
                    <div className={`w-1.5 h-6 rounded-full absolute -left-0.5 top-6 ${idx % 2 === 0 ? 'bg-rdcc-blue' : 'bg-rdcc-cyan'}`} />
                    <p>{para}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="px-7 py-3.5 rounded-xl bg-rdcc-navy hover:bg-rdcc-blue text-white font-bold text-sm shadow-md transition-all duration-200 flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                  <span>{siteContent.home.aboutPreview.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/about#founder"
                  className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-rdcc-navy font-bold text-sm border border-slate-200 transition-all duration-200 flex items-center gap-2"
                >
                  <span>Founder Credentials & Philosophy</span>
                  <ArrowUpRight className="w-4 h-4 text-rdcc-blue" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FLAGSHIP PROGRAMMES PREVIEW (SARATHI & HATE HAT DHORI)                     */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Programmes & Initiatives"
            title="Our Core Guidance Programmes"
            subtitle="Tailored mentoring ecosystems designed specifically for high school students and women."
            centered={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* COLORFUL SARATHI CARD */}
            <div className="group relative bg-gradient-to-br from-white via-sky-50/70 to-blue-100/50 rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl border-2 border-rdcc-blue/40 hover:border-rdcc-blue transition-all duration-300 flex flex-col justify-between card-glow-hover">
              <div className="h-2 w-full bg-gradient-to-r from-rdcc-navy via-rdcc-blue to-rdcc-cyan" />

              <div>
                {/* Authentic Artwork Showcase Frame */}
                <div className="p-4 sm:p-6 pb-2">
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-white shadow-md border border-sky-200/90 flex items-center justify-center p-3 sm:p-4 group-hover:scale-[1.01] transition-transform duration-500">
                    <img
                      src="/images/sarathi-banner.jpg"
                      alt="SARATHI Career Guidance & Mentoring Programme"
                      className="w-full h-full object-contain drop-shadow-sm"
                    />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-full text-[11px] font-black bg-white/95 backdrop-blur-md text-rdcc-navy border border-rdcc-cyan-light shadow-sm">
                        {siteContent.services.sarathi.badge}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-rdcc-navy/90 backdrop-blur-md text-rdcc-cyan-light border border-white/20">
                        Academic Mentoring
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 right-2.5 flex items-center gap-2 px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-rdcc-blue/30 shadow-md">
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

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 pt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-rdcc-blue bg-rdcc-cyan-ice px-2.5 py-0.5 rounded-md border border-rdcc-cyan/40">
                      Guidance Initiative
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-rdcc-navy group-hover:text-rdcc-blue transition-colors">
                    {siteContent.services.sarathi.name}
                  </h3>
                  <p className="text-sm font-bold text-rdcc-blue leading-snug">
                    {siteContent.services.sarathi.subheading}
                  </p>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-1">
                    {siteContent.services.sarathi.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 sm:p-8 pt-0">
                <div className="pt-4 border-t border-sky-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs font-bold text-slate-600">
                    10 Structured Student Guidance Offerings
                  </span>
                  <Link
                    to="/services#sarathi"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-rdcc-blue hover:bg-rdcc-blue-hover text-white text-xs sm:text-sm font-bold shadow-md shadow-rdcc-blue/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Explore All 10 Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* COLORFUL HATE HAT DHORI CARD */}
            <div className="group relative bg-gradient-to-br from-white via-amber-50/80 to-orange-100/50 rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl border-2 border-amber-300/80 hover:border-amber-500 transition-all duration-300 flex flex-col justify-between card-glow-hover">
              <div className="h-2 w-full bg-gradient-to-r from-amber-500 via-amber-600 to-rdcc-navy" />

              <div>
                {/* Authentic Artwork Showcase Frame */}
                <div className="p-4 sm:p-6 pb-2">
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-white shadow-md border border-amber-200/90 flex items-center justify-center p-3 sm:p-4 group-hover:scale-[1.01] transition-transform duration-500">
                    <img
                      src="/images/hatehatdhori-banner.jpg"
                      alt="HATE HAT DHORI Women Mentoring Programme"
                      className="w-full h-full object-contain drop-shadow-sm"
                    />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-full text-[11px] font-black bg-white/95 backdrop-blur-md text-amber-950 border border-amber-300 shadow-sm">
                        Empowering Women of Assam
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-950/90 backdrop-blur-md text-amber-200 border border-amber-400/30">
                        হাতে হাত ধৰি
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 right-2.5 flex items-center gap-2 px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-amber-400/50 shadow-md">
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

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 pt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/90 px-2.5 py-0.5 rounded-md border border-amber-300/60">
                      Women Empowerment
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-rdcc-navy group-hover:text-amber-800 transition-colors">
                    {siteContent.services.hateHatDhori.name}
                  </h3>
                  <p className="text-sm font-bold text-amber-800 leading-snug">
                    {siteContent.services.hateHatDhori.subheading}
                  </p>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-1">
                    {siteContent.services.hateHatDhori.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 sm:p-8 pt-0">
                <div className="pt-4 border-t border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs font-bold text-slate-600">
                    5 Focused Guidance Modules
                  </span>
                  <Link
                    to="/services#hate-hat-dhori"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-amber-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Explore Programme</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: HOW DO WE PROVIDE OUR SERVICES? (PAGE 9 OF BROCHURE VERBATIM)    */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50/70 to-white border-b border-slate-200/70">
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
                className="bg-white rounded-3xl p-7 shadow-card hover:shadow-card-hover border border-slate-200/90 hover:border-rdcc-blue/40 transition-all duration-300 flex flex-col justify-between"
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

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Structured Approach</span>
                  <CheckCircle2 className="w-4 h-4 text-rdcc-blue" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 rounded-2xl bg-sky-50/80 border border-sky-200/70 text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-rdcc-navy">
              "{siteContent.services.serviceDelivery.conclusion}"
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: WHO MAY TAKE OUR SERVICES? (PAGE 8 OF BROCHURE VERBATIM)         */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Target Beneficiaries"
            title={siteContent.services.targetAudience.heading}
            subtitle={siteContent.services.targetAudience.subtitle}
            centered={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {siteContent.services.targetAudience.categories.map((cat, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 border-2 ${
                  cat.color === 'blue' 
                    ? 'bg-gradient-to-br from-white via-sky-50/40 to-blue-50/60 border-rdcc-blue/40 shadow-lg' 
                    : cat.color === 'sky'
                    ? 'bg-gradient-to-br from-white via-cyan-50/40 to-sky-50/60 border-sky-400/40 shadow-lg'
                    : 'bg-gradient-to-br from-white via-amber-50/40 to-orange-50/60 border-amber-400/50 shadow-lg'
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

                <div className="mt-8 pt-5 border-t border-slate-200/80">
                  <Link
                    to={`/contact?service=${encodeURIComponent(cat.title)}`}
                    className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm ${
                      cat.color === 'amber'
                        ? 'bg-amber-600 hover:bg-amber-700 text-white'
                        : 'bg-rdcc-blue hover:bg-rdcc-blue-hover text-white'
                    }`}
                  >
                    <span>Enquire For This Programme</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ANNUAL EVENTS & COMMUNITY PREVIEW (PAGE 10 & 11 OF BROCHURE)              */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-navy-mesh text-white relative overflow-hidden border-b border-slate-200/70">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rdcc-cyan/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-rdcc-gold text-xs font-bold uppercase tracking-wider border border-white/20 mb-3">
              <Calendar className="w-3.5 h-3.5 text-rdcc-gold" />
              <span>{siteContent.events.pageTitle}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-white">
              Annual Events, Social Help & Publications
            </h2>
            <p className="text-slate-200 text-base sm:text-lg mt-3 font-normal leading-relaxed">
              {siteContent.events.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Event 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-7 sm:p-8 border border-white/20 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-black bg-white/95 text-rdcc-navy inline-block">
                  {siteContent.events.event1.badge}
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-white">
                  {siteContent.events.event1.title}
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {siteContent.events.event1.description[0]} {siteContent.events.event1.description[1]}
                </p>
                <div className="space-y-2 pt-2">
                  {siteContent.events.event1.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-rdcc-cyan-light font-medium">
                      <CheckCircle2 className="w-4 h-4 text-rdcc-cyan" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/15">
                <Link
                  to="/events"
                  className="text-xs font-bold text-white hover:text-rdcc-cyan-light flex items-center gap-1 transition-colors"
                >
                  <span>Explore Event Details & Gallery</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-7 sm:p-8 border border-white/20 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-black bg-rdcc-gold text-rdcc-navy inline-block">
                  {siteContent.events.event2.badge}
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-white">
                  {siteContent.events.event2.title}
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {siteContent.events.event2.description[0]} {siteContent.events.event2.description[1]}
                </p>
                <div className="space-y-2 pt-2">
                  {siteContent.events.event2.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-rdcc-cyan-light font-medium">
                      <CheckCircle2 className="w-4 h-4 text-rdcc-cyan" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/15">
                <Link
                  to="/events"
                  className="text-xs font-bold text-white hover:text-rdcc-cyan-light flex items-center gap-1 transition-colors"
                >
                  <span>Read Competition Guidelines</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BOTTOM CONSULTATION PROMPT                                                */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-br from-rdcc-cyan-ice to-white text-rdcc-blue mx-auto shadow-md border border-rdcc-cyan-light">
            <Compass className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-rdcc-navy">
            Take the Right Direction for Your Career & Education
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            At The Right Direction Career Consultancy, we believe the right guidance at the right time can transform lives. Connect with us for personal or group counselling sessions.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openConsultationModal()}
              className="btn-shimmer w-full sm:w-auto px-9 py-4 rounded-xl bg-rdcc-blue hover:bg-rdcc-blue-hover text-white font-bold text-base shadow-xl shadow-rdcc-blue/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Book a Consultation
            </button>

            <a
              href={`tel:${siteContent.contact.phones[0].replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-base transition-all duration-300"
            >
              Call {siteContent.contact.phones[0]}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
