import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RiSparklingFill, 
  RiMapPin2Line, 
  RiCalendarEventLine, 
  RiGraduationCapLine, 
  RiRocketLine, 
  RiCpuLine, 
  RiBuilding4Line, 
  RiHotelLine,
  RiCompass3Line,
  RiStackLine,
  RiCheckDoubleLine,
  RiArrowRightLine,
  RiFilePaperLine,
  RiDoubleQuotesL,
  RiShieldCheckLine,
  RiPhoneLine,
  RiMailLine,
  RiGlobalLine,
  RiArrowLeftLine
} from 'react-icons/ri';
import { brochureContent } from '../data/jvsContent';

const sectorIcons = {
  "event-management": RiCalendarEventLine,
  "career-placements": RiGraduationCapLine,
  "startup-entrepreneurship": RiRocketLine,
  "technology-innovation": RiCpuLine,
  "company-registrations": RiBuilding4Line,
  "hospitality": RiHotelLine
};

const sectorColors = {
  "event-management": { accent: '#f59e0b', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.35)' },
  "career-placements": { accent: '#22d3ee', bg: 'rgba(34,211,238,0.12)', border: 'rgba(34,211,238,0.35)' },
  "startup-entrepreneurship": { accent: '#34d399', bg: 'rgba(52,211,153,0.12)', border: 'rgba(52,211,153,0.35)' },
  "technology-innovation": { accent: '#60a5fa', bg: 'rgba(96,165,250,0.12)', border: 'rgba(96,165,250,0.35)' },
  "company-registrations": { accent: '#818cf8', bg: 'rgba(129,140,248,0.12)', border: 'rgba(129,140,248,0.35)' },
  "hospitality": { accent: '#c084fc', bg: 'rgba(192,132,252,0.12)', border: 'rgba(192,132,252,0.35)' }
};

const pillars = [
  {
    title: "Technology & Innovation",
    subtitle: "Pioneering Modern Solutions",
    icon: RiCpuLine,
    accent: '#60a5fa',
    description: "At JVS, innovation powers every initiative. From progressive digital architectures and software systems to interactive learning methods, we turn possibilities into scalable reality.",
    points: ["Modern Tech Stack Development", "Continuous Digital Upgradation", "Scalable Enterprise Architecture"]
  },
  {
    title: "Forward-Looking Vision",
    subtitle: "Building Beyond Today",
    icon: RiCompass3Line,
    accent: '#22d3ee',
    description: "Rooted in purposeful creation, our leadership builds sustainable business models designed to anticipate market transformations and generate lasting value for stakeholders.",
    points: ["Sustainable Business Roadmaps", "Long-term Value Creation", "Future-Ready Venture Frameworks"]
  },
  {
    title: "Versatile Stability",
    subtitle: "Multi-Disciplinary Strength",
    icon: RiStackLine,
    accent: '#a78bfa',
    description: "Our competitive advantage is versatile stability—seamlessly delivering excellence across disparate domains from Edu-Tech and Event Production to Startup Incubation and Hospitality.",
    points: ["6 Integrated Operational Verticals", "Cross-Sector Agility & Synergies", "Unified Corporate Quality Benchmarks"]
  }
];

// Staggered Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  }
};

const cardHover = {
  whileHover: { y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }
};

export default function AboutPage({ onOpenBrochure }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#020509] text-slate-100 relative">
      
      {/* ─── Hero Banner (Tight Proportional Padding) ─── */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
        {/* Ambient Glows */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[400px] pointer-events-none rounded-full blur-[140px] opacity-35"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.4) 0%, rgba(34,211,238,0.2) 60%, transparent 80%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-4"
          >
            {/* Breadcrumbs */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-xs font-medium">
              <Link to="/" className="text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors">
                <RiArrowLeftLine className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-cyan-300 font-semibold">About Us</span>
            </motion.div>

            {/* Status Pill */}
            <motion.div variants={itemVariants}>
              <div 
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                style={{ background: 'rgba(5,15,40,0.9)', border: '1px solid rgba(56,189,248,0.3)', color: '#7dd3fc' }}
              >
                <RiSparklingFill className="w-3.5 h-3.5 text-cyan-400" />
                <span>Official Corporate Profile</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.12]"
            >
              About{' '}
              <span 
                style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #7dd3fc 45%, #818cf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                JVS
              </span>
              <span className="text-lg sm:text-2xl text-slate-300 font-medium block mt-1 tracking-normal">
                (Jyoshna's Versatile Stability)
              </span>
            </motion.h1>

            {/* Tagline Statement */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-xl leading-relaxed font-normal text-slate-200 italic pt-1"
            >
              “{brochureContent.brand.aboutStatement}”
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBrochure}
                className="shine-hover flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-white shadow-lg transition-all cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
              >
                <RiFilePaperLine className="w-4 h-4 text-cyan-300" />
                <span>Verify Brochure Source (PDF)</span>
              </motion.button>

              <Link
                to="/#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-white transition-all cursor-pointer"
                style={{
                  background: 'rgba(8,16,40,0.85)',
                  border: '1px solid rgba(56,189,248,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(56,189,248,0.6)';
                  e.currentTarget.style.background = 'rgba(12,24,55,0.95)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)';
                  e.currentTarget.style.background = 'rgba(8,16,40,0.85)';
                }}
              >
                <span>Connect With JVS</span>
                <RiArrowRightLine className="w-4 h-4 text-cyan-400" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ─── Master Purpose & Identity Section ─── */}
      <section className="py-14 sm:py-16 relative overflow-hidden" style={{ background: '#030611' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-6 sm:p-10 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(10,18,45,0.95) 0%, rgba(5,10,26,0.98) 100%)',
              border: '1px solid rgba(56,189,248,0.22)',
              boxShadow: '0 20px 50px -15px rgba(0,0,0,0.8)'
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span 
                  className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md inline-block"
                  style={{ background: 'rgba(34,211,238,0.12)', border: '1px solid rgba(34,211,238,0.3)', color: '#22d3ee' }}
                >
                  Core Purpose & Commitment
                </span>

                <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl leading-snug">
                  “{brochureContent.brand.purposeStatement}”
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-normal">
                  Headquartered in the major economic and coastal center of <strong className="text-white font-semibold">Visakhapatnam, Andhra Pradesh (PIN 530022)</strong>, JVS (Jyoshna's Versatile Stability) serves as an integrated ecosystem bridging education, skill acceleration, software engineering, conference and stage event productions, startup incubation, legal corporate registrations, and luxury hospitality accommodations.
                </p>

                <p className="text-sm leading-relaxed text-slate-300 font-normal">
                  Every initiative is crafted to deliver tangible value, transparent governance, and sustained career and enterprise acceleration.
                </p>
              </div>

              <div className="lg:col-span-4 rounded-2xl p-5 sm:p-6 space-y-3.5"
                style={{ background: 'rgba(3,6,18,0.9)', border: '1px solid rgba(30,58,95,0.6)' }}
              >
                <div className="flex items-center justify-between pb-2.5 border-b" style={{ borderColor: 'rgba(30,58,95,0.5)' }}>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Headquarters</span>
                  <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">Verified</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(34,211,238,0.12)', border: '1px solid rgba(34,211,238,0.3)', color: '#22d3ee' }}>
                    <RiMapPin2Line className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white font-heading">Visakhapatnam, PIN 530022</h4>
                    <p className="text-xs text-slate-300 mt-0.5">Andhra Pradesh, India</p>
                  </div>
                </div>

                <div className="pt-2.5 border-t space-y-2 text-xs text-slate-300" style={{ borderColor: 'rgba(30,58,95,0.5)' }}>
                  <div className="flex items-center gap-2">
                    <RiPhoneLine className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{brochureContent.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiMailLine className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{brochureContent.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiGlobalLine className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{brochureContent.contact.website}</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── The Three Pillars ─── */}
      <section className="py-14 sm:py-16 relative overflow-hidden" style={{ background: '#020509' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-2 mb-10"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Strategic Foundation
            </span>
            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl">
              The Three Pillars of JVS
            </h2>
            <p className="text-sm text-slate-300 font-normal">
              How innovation, vision, and versatility shape every business decision across our group.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {pillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  {...cardHover}
                  className="rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(145deg, rgba(8,16,40,0.96) 0%, rgba(4,8,22,0.98) 100%)',
                    border: `1px solid ${pillar.accent}30`,
                    boxShadow: '0 15px 35px -15px rgba(0,0,0,0.8)'
                  }}
                >
                  <div className="space-y-3.5">
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: `${pillar.accent}15`, border: `1px solid ${pillar.accent}35`, color: pillar.accent }}
                    >
                      <PillarIcon className="w-5 h-5" />
                    </div>

                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider block" style={{ color: pillar.accent }}>
                        {pillar.subtitle}
                      </span>
                      <h3 className="font-heading font-bold text-lg text-white mt-0.5">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t space-y-1.5" style={{ borderColor: 'rgba(30,58,95,0.5)' }}>
                    {pillar.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-200">
                        <RiCheckDoubleLine className="w-3.5 h-3.5 shrink-0" style={{ color: pillar.accent }} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ─── 6 Core Business Verticals ─── */}
      <section className="py-14 sm:py-16 relative overflow-hidden" style={{ background: '#030611' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-2 mb-10"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Brochure Scope
            </span>
            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl">
              6 Core Business Sectors
            </h2>
            <p className="text-sm text-slate-300 font-normal">
              Detailed breakdown of our operational areas highlighted in the official brochure.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {brochureContent.coreSectors.map((sector, idx) => {
              const Icon = sectorIcons[sector.id] || RiCpuLine;
              const colors = sectorColors[sector.id] || { accent: '#38bdf8', bg: 'rgba(56,189,248,0.12)', border: 'rgba(56,189,248,0.35)' };

              return (
                <motion.div
                  key={sector.id}
                  variants={itemVariants}
                  {...cardHover}
                  className="rounded-2xl p-6 flex flex-col justify-between space-y-4 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(145deg, rgba(8,16,40,0.95) 0%, rgba(5,10,26,0.98) 100%)',
                    border: '1px solid rgba(56,189,248,0.2)',
                    boxShadow: '0 15px 35px -15px rgba(0,0,0,0.7)'
                  }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b" style={{ borderColor: 'rgba(56,189,248,0.15)' }}>
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: colors.bg, border: `1px solid ${colors.border}`, color: colors.accent }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold font-heading" style={{ color: colors.accent }}>
                        0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: colors.accent }}>
                        {sector.category}
                      </span>
                      <h3 className="font-heading font-bold text-lg text-white mt-0.5">
                        {sector.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed text-slate-200 font-normal">
                      {sector.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t flex items-center justify-between text-xs" style={{ borderColor: 'rgba(30,58,95,0.5)' }}>
                    <span className="text-slate-400">Brochure Entity</span>
                    <span className="font-semibold" style={{ color: colors.accent }}>Verified Sector</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ─── Executive Leadership & Governance ─── */}
      <section className="py-14 sm:py-16 relative overflow-hidden" style={{ background: '#020509' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-2 mb-10"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Executive Governance
            </span>
            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl">
              Leadership Perspectives
            </h2>
            <p className="text-sm text-slate-300 font-normal">
              The visionary outlook driving our organizational strategy and venture acceleration.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {brochureContent.perspectives.map((persp, idx) => {
              const isFirst = idx === 0;
              const accentColor = isFirst ? '#22d3ee' : '#34d399';

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  {...cardHover}
                  className="rounded-2xl p-7 sm:p-10 flex flex-col justify-between space-y-5 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, rgba(8,16,40,0.96) 0%, rgba(5,10,26,0.98) 100%)',
                    border: `1px solid ${accentColor}30`,
                    boxShadow: '0 20px 45px -15px rgba(0,0,0,0.8)'
                  }}
                >
                  <div className="space-y-3.5 relative z-10">
                    <div className="flex items-center justify-between">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                        style={{ background: `${accentColor}12`, border: `1px solid ${accentColor}30`, color: accentColor }}
                      >
                        {isFirst ? 'JVS Leadership' : 'VexoBiz Leadership'}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <RiShieldCheckLine className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Official Quote</span>
                      </div>
                    </div>

                    <blockquote className="text-lg sm:text-xl font-normal text-slate-100 leading-relaxed italic font-heading pt-1">
                      “{persp.quote}”
                    </blockquote>
                  </div>

                  <div className="pt-5 border-t flex items-center justify-between relative z-10" style={{ borderColor: 'rgba(30,58,95,0.5)' }}>
                    <div>
                      <h4 className="text-lg font-bold text-white font-heading">
                        {persp.name}
                      </h4>
                      <p className="text-xs sm:text-sm font-medium mt-0.5" style={{ color: accentColor }}>
                        {persp.designation}
                      </p>
                    </div>

                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold font-heading text-xs"
                      style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}35`, color: accentColor }}
                    >
                      {persp.initials}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA Card */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="mt-14 rounded-3xl p-6 sm:p-10 text-center space-y-4 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(10,22,55,0.95) 0%, rgba(5,12,30,0.98) 100%)',
              border: '1px solid rgba(56,189,248,0.25)',
              boxShadow: '0 20px 50px -15px rgba(37,99,235,0.25)'
            }}
          >
            <h3 className="font-heading font-bold text-white text-xl sm:text-3xl">
              Ready to collaborate with JVS?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-lg mx-auto font-normal">
              Connect with our corporate office in Visakhapatnam to discuss education programs, tech solutions, event partnerships, or startup incubation.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                to="/#contact"
                className="shine-hover flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-xl transition-all cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
              >
                <span>Get in Touch with JVS</span>
                <RiArrowRightLine className="w-4 h-4" />
              </Link>
              <button
                onClick={onOpenBrochure}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-cyan-300 transition-all cursor-pointer"
                style={{
                  background: 'rgba(8,16,40,0.85)',
                  border: '1px solid rgba(56,189,248,0.3)'
                }}
              >
                <RiFilePaperLine className="w-4 h-4 text-cyan-400" />
                <span>View Full Brochure PDF</span>
              </button>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
