import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  Laptop,
  Download,
  Phone,
  MapPin,
  MessageSquare
} from "lucide-react";
import { siteContent } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import { UpwardArrows, DirectionBadge } from "../components/ArrowMotif";
import { useConsultationModal } from "../context/ConsultationModalContext";
import ContactForm, { WhatsAppIcon } from "../components/ContactForm";

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
      {/* HERO SECTION WITH RESPONSIVE ARTWORK BACKGROUND                           */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden border-b border-slate-200/80">
        {/* Background Layer - Mobile View (Portrait Artwork) */}
        <div 
          className="absolute inset-0 bg-cover bg-top sm:bg-center md:hidden pointer-events-none"
          style={{ backgroundImage: "url('/images/hero-mobile.jpg')" }}
        />
        {/* Background Layer - Tablet & Desktop (Panoramic Artwork) */}
        <div 
          className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] hidden md:block pointer-events-none"
          style={{ backgroundImage: "url('/images/hero-illustration.png')" }}
        />
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20 relative z-10">
          {/* Right Corner Badge - Government Registration */}
          <div className="absolute top-3.5 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#0A2540]/15 shadow-sm hover:shadow transition-shadow">
              <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-200 flex-shrink-0 animate-pulse" />
              <span className="text-[11px] sm:text-xs md:text-sm font-bold text-[#0A2540] tracking-wide">
                Registered MSME <span className="text-slate-300 font-normal mx-0.5 sm:mx-1">|</span> Government of India
              </span>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl lg:max-w-xl xl:max-w-2xl space-y-4 sm:space-y-5 text-left"
          >
            {/* Tagline / Kicker */}
            <div className="text-xs sm:text-sm font-bold tracking-[0.22em] text-slate-700 uppercase">
              WE GUIDE YOU
            </div>
            
            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[70px] font-extrabold font-heading leading-[1.02] tracking-tight">
                <span className="text-[#0A2540] block">FOR A BETTER</span>
                <span className="text-[#2583E8] block mt-1">FUTURE</span>
              </h1>
              {/* Gold Accent Underline */}
              <div className="w-40 sm:w-56 h-[3.5px] bg-[#E8A025] rounded-full mt-3 mb-2"></div>
            </div>
            
            {/* Paragraph */}
            <p className="text-sm sm:text-base md:text-[17px] text-slate-700 leading-relaxed max-w-xl font-medium">
              We provide guidance, mentoring and training to help individuals discover their potential, make informed decisions and move forward with clarity and confidence.
            </p>
            
            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/services"
                className="px-7 py-3.5 rounded-full bg-[#0A2540] hover:bg-[#143B66] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="/The Right Direction Career Consultancy Brochure (4).pdf (2).pdf"
                download="The Right Direction Career Consultancy Brochure (4).pdf (2).pdf"
                className="px-7 py-3.5 rounded-full bg-white/95 hover:bg-white text-[#0A2540] font-bold text-xs sm:text-sm border-2 border-[#0A2540] shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#0A2540] group-hover:scale-110 transition-transform" />
                <span>Download Brochure</span>
              </a>
            </div>

            {/* Bottom Guidance Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl xl:max-w-2xl">
              {/* SARATHI Card */}
              <Link
                to="/services#sarathi"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#EBF4FE]/95 backdrop-blur-md hover:bg-[#E1EDFC] border border-[#D5E6F9] transition-all group shadow-sm hover:shadow"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-[#D6E8FB] flex items-center justify-center flex-shrink-0 text-[#0A2540] border border-blue-200">
                    <GraduationCap className="w-5 h-5 text-[#0A2540]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-extrabold text-[#0A2540] leading-none mb-1">
                      SARATHI
                    </div>
                    <div className="text-[10.5px] text-slate-600 font-medium leading-tight">
                      Academic Guidance, Career Counselling & Mentoring for Students (Class 8 to 12)
                    </div>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#0A2540] flex items-center justify-center flex-shrink-0 ml-2 group-hover:scale-105 transition-transform shadow-xs">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </Link>
              
              {/* HATE HAT DHORI Card */}
              <Link
                to="/services#hate-hat-dhori"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FDF0F4]/95 backdrop-blur-md hover:bg-[#FBE4EB] border border-[#F6D8E1] transition-all group shadow-sm hover:shadow"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-[#F9DCE4] flex items-center justify-center flex-shrink-0 text-[#C03A62] border border-pink-200">
                    <Users className="w-5 h-5 text-[#C03A62]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-extrabold text-[#C03A62] leading-none mb-1">
                      HATE HAT DHORI
                    </div>
                    <div className="text-[10.5px] text-slate-600 font-medium leading-tight">
                      Guidance & Mentoring for Women Entrepreneurs
                    </div>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#C03A62] flex items-center justify-center flex-shrink-0 ml-2 group-hover:scale-105 transition-transform shadow-xs">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* OUR VISION SECTION (Luminous Illuminated Centerpiece)                     */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50/80 border-b border-slate-200/70 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-rdcc-navy via-rdcc-navy-light to-rdcc-navy text-white rounded-[32px] p-8 sm:p-14 shadow-2xl overflow-hidden border border-rdcc-cyan/30 text-center"
          >
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
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* OUR MISSION SECTION (HIGH-AESTHETIC 4-PILLAR SHOWCASE)                   */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/70 relative overflow-hidden">
        {/* Ambient background glow orbs */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Guiding Principles"
            title="Our Mission & Foundational Commitments"
            subtitle="The core values that guide our student counselling, women's mentoring, and community outreach."
            centered={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 mt-12">
            {[
              {
                num: "01",
                tag: "Integrity & Trust",
                title: "Ethical & Empathetic Guidance",
                quote: "To provide ethical and empathetic guidance.",
                desc: "Delivering honest, unbiased counsel rooted in deep listening and authentic empathy for each individual's journey.",
                icon: <Compass className="w-6 h-6 text-blue-600" />,
                badge: "bg-blue-50 text-blue-700 border-blue-200/80",
                iconBox: "bg-blue-50/80 border-blue-200 text-blue-600",
                accentBar: "bg-gradient-to-r from-blue-500 to-indigo-600",
                hoverBorder: "hover:border-blue-300 hover:shadow-blue-500/10",
              },
              {
                num: "02",
                tag: "Student Empowerment",
                title: "Informed Career Choices",
                quote: "To empower students to make informed career choices.",
                desc: "Equipping young minds in Classes 8–12 with scientific stream selection, aptitude clarity, and clear future roadmaps.",
                icon: <Target className="w-6 h-6 text-sky-600" />,
                badge: "bg-sky-50 text-sky-700 border-sky-200/80",
                iconBox: "bg-sky-50/80 border-sky-200 text-sky-600",
                accentBar: "bg-gradient-to-r from-sky-400 to-blue-500",
                hoverBorder: "hover:border-sky-300 hover:shadow-sky-500/10",
              },
              {
                num: "03",
                tag: "Hate Hat Dhori",
                title: "Women's Independence",
                quote: "To support women in building confidence and independence.",
                desc: "Nurturing women entrepreneurs with practical mentorship, confidence building, and the direction to build sustainable ventures.",
                icon: <Sparkles className="w-6 h-6 text-amber-600" />,
                badge: "bg-amber-50 text-amber-800 border-amber-200/80",
                iconBox: "bg-amber-50/80 border-amber-200 text-amber-600",
                accentBar: "bg-gradient-to-r from-amber-400 to-rose-500",
                hoverBorder: "hover:border-amber-300 hover:shadow-amber-500/10",
              },
              {
                num: "04",
                tag: "Compassionate Ecosystem",
                title: "Compassion Meets Guidance",
                quote: "To create a supportive ecosystem where guidance meets compassion.",
                desc: "Building an accessible community platform where students, parents, and educators collaborate so no one walks alone.",
                icon: <HeartHandshake className="w-6 h-6 text-emerald-600" />,
                badge: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
                iconBox: "bg-emerald-50/80 border-emerald-200 text-emerald-600",
                accentBar: "bg-gradient-to-r from-emerald-400 to-teal-500",
                hoverBorder: "hover:border-emerald-300 hover:shadow-emerald-500/10",
              },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-xl border border-slate-200/80 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-2 relative ${pillar.hoverBorder}`}
              >
                {/* Top Glowing Accent Color Bar */}
                <div className={`h-1.5 w-full ${pillar.accentBar} transition-all duration-300 group-hover:h-2.5`} />

                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Card Header: Icon & Big Watermark Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs group-hover:scale-110 transition-transform duration-300 ${pillar.iconBox}`}>
                        {pillar.icon}
                      </div>
                      <span className="text-3xl font-black font-heading text-slate-200 group-hover:text-slate-300 transition-colors">
                        {pillar.num}
                      </span>
                    </div>

                    {/* Pillar Category Badge */}
                    <div className="mb-3">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-extrabold uppercase tracking-wide border ${pillar.badge}`}>
                        {pillar.tag}
                      </span>
                    </div>

                    {/* Main Title & Verbatim Quote */}
                    <div className="space-y-1.5 mb-3">
                      <h3 className="text-lg font-heading font-extrabold text-[#0A2540] group-hover:text-rdcc-blue transition-colors leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-semibold italic text-slate-500 leading-snug">
                        "{pillar.quote}"
                      </p>
                    </div>
                  </div>

                  {/* Engaging Short Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Commitment Assurance Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0A2540] via-[#0E355F] to-[#0A2540] text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-1.5 text-center md:text-left z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8A025] inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E8A025]" />
                Our Core Philosophy
              </span>
              <h4 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                "Direction Before Speed, Empathy Before Advice."
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Every counselling session, student workshop, and women's mentoring cohort is structured around these 4 pillars to deliver measurable, life-changing guidance.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openConsultationModal()}
              className="z-10 flex-shrink-0 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0A2540] font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Book A Guidance Session</span>
              <ArrowRight className="w-4 h-4 text-[#0A2540]" />
            </button>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9 mt-12 sm:mt-16">
            {siteContent.services.serviceDelivery.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Visual Image Header with Floating Badges & Hover Zoom */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-500" />
                  
                  {/* Floating Pillar Badge */}
                  <span className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/95 backdrop-blur-md text-rdcc-blue shadow-md border border-white/60">
                    {pillar.badge}
                  </span>

                  {/* Number Badge */}
                  <span className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-slate-900/60 backdrop-blur-md text-white font-black text-xs flex items-center justify-center border border-white/20 shadow-md">
                    0{idx + 1}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3 className="text-xl sm:text-[22px] font-heading font-extrabold text-rdcc-navy group-hover:text-rdcc-blue transition-colors duration-300 leading-snug mb-3">
                      {pillar.title}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {pillar.content}
                    </p>
                  </div>

                  {/* Interactive Card Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Structured Approach</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-sky-50 text-rdcc-blue group-hover:bg-rdcc-blue group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shadow-xs">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Bottom Border Glow on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rdcc-blue via-rdcc-cyan to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
                  {cat.image && (
                    <div className="w-full h-40 sm:h-48 mb-6 rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm relative group">
                      <img 
                        src={cat.image} 
                        alt={cat.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  )}
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
      {/* OPEN CONTACT FORM & WHATSAPP GUIDANCE (ABOVE FOOTER)                      */}
      {/* ========================================================================= */}
      <section id="contact-form" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAFCFF] via-white to-slate-50 border-t border-slate-200/80 relative overflow-hidden">
        {/* Decorative background glow accents */}
        <div className="absolute -top-32 right-0 w-96 h-96 bg-rdcc-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Direct WhatsApp Guidance & Contact</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-rdcc-navy tracking-tight">
              Get in Touch with <span className="text-gradient">Our Mentors</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Have questions regarding student academic streams, career choices, or women mentoring programs? Fill out the open form below and we will receive your enquiry directly on our WhatsApp for immediate assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Guidance Promise & Direct Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Highlight Card */}
              <div className="bg-gradient-to-br from-rdcc-navy via-[#0c2f55] to-rdcc-navy text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-white/10">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-44 h-44 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-rdcc-gold text-xs font-bold uppercase tracking-wider border border-white/15">
                      Personalized Counselling
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-snug">
                    Take the Right Step Toward Your Future Today
                  </h3>

                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                    At The Right Direction Career Consultancy, we listen first, understand each individual journey, and guide with patience and empathy.
                  </p>

                  <div className="space-y-3 pt-1">
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span><strong>Fast Response on WhatsApp:</strong> Instant acknowledgement from our advisory team.</span>
                    </div>

                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span><strong>Confidential & Empathetic:</strong> A comfortable space to discuss aspirations and doubts.</span>
                    </div>

                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span><strong>Certified Guidance:</strong> Led by Mrs. Rashmi Rekha Kakoty (Global Career Counsellor).</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${siteContent.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello RDCC Team, I would like to enquire about your guidance services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>WhatsApp Direct</span>
                </a>

                <a
                  href={`tel:${siteContent.contact.phones[0].replace(/\s+/g, '')}`}
                  className="py-3 px-4 rounded-2xl bg-rdcc-navy hover:bg-rdcc-blue text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-rdcc-cyan-light" />
                  <span>Call Us Now</span>
                </a>
              </div>

              {/* Contact Information & Centre Details */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-3">
                <div className="flex items-start gap-3 text-xs text-slate-600">
                  <MapPin className="w-4 h-4 text-rdcc-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Consultancy Office:</span>
                    <span>{siteContent.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-rdcc-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Office Hours:</span>
                    <span>Monday - Saturday: 10:00 AM - 6:00 PM</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Need a structured 1-on-1 session?</span>
                  <button
                    type="button"
                    onClick={() => openConsultationModal()}
                    className="text-xs font-bold text-rdcc-blue hover:underline cursor-pointer"
                  >
                    Book Full Session →
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Open Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm 
                title="Send Us a Message on WhatsApp"
                subtitle="Fill out this form and tap send. We will immediately receive your request on our WhatsApp."
                badge="Open Contact Form"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
