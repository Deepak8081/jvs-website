import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  RiArrowRightLine
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
    id: "innovation",
    title: "Technology & Innovation",
    subtitle: "Pioneering Modern Solutions",
    icon: RiCpuLine,
    accent: '#60a5fa',
    description: "At JVS, innovation powers every initiative. From progressive digital architectures and software systems to interactive learning methods, we turn possibilities into scalable reality.",
    deliverables: ["Modern Tech Stack", "Continuous Upgradation", "Digital Architecture"]
  },
  {
    id: "vision",
    title: "Forward-Looking Vision",
    subtitle: "Building Beyond Today",
    icon: RiCompass3Line,
    accent: '#22d3ee',
    description: "Rooted in purposeful creation, our leadership builds sustainable business models designed to anticipate market transformations and generate lasting value for stakeholders.",
    deliverables: ["Sustainable Roadmaps", "Long-term Value", "Future-Ready Ventures"]
  },
  {
    id: "versatility",
    title: "Versatile Stability",
    subtitle: "Multi-Disciplinary Strength",
    icon: RiStackLine,
    accent: '#a78bfa',
    description: "Our competitive advantage is versatile stability—seamlessly delivering excellence across disparate domains from Edu-Tech and Event Production to Startup Incubation and Hospitality.",
    deliverables: ["6 Integrated Verticals", "Cross-Sector Agility", "Unified Quality Standards"]
  }
];

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
      style={{ background: 'rgba(5,15,40,0.9)', border: '1px solid rgba(56,189,248,0.3)', color: '#7dd3fc' }}>
      <RiSparklingFill className="w-3.5 h-3.5 text-cyan-400" />
      {children}
    </div>
  );
}

const inView = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function AboutSection() {
  const [activePillar, setActivePillar] = useState('innovation');
  const current = pillars.find(p => p.id === activePillar);
  const Icon = current.icon;

  return (
    <section id="about" className="relative py-14 sm:py-16 md:py-20 overflow-hidden" style={{ background: '#030610' }}>

      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.07) 0%, transparent 70%)' }} />

      {/* Section divider top */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Header ─── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-3xl space-y-3.5 mb-10 sm:mb-12"
        >
          <motion.div variants={inView}><SectionLabel>Corporate Philosophy</SectionLabel></motion.div>
          <motion.h2 variants={inView} className="font-heading font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em' }}>
            About{' '}
            <span style={{
              background: 'linear-gradient(135deg, #38bdf8, #7dd3fc 50%, #818cf8)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>
              JVS
            </span>
          </motion.h2>
          <motion.p variants={inView} className="text-base sm:text-lg leading-relaxed text-slate-200 font-normal">
            “{brochureContent.brand.aboutStatement}”
          </motion.p>
        </motion.div>

        {/* ─── Master Statement Panel ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mb-12 rounded-3xl p-6 sm:p-10 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(10,18,45,0.95) 0%, rgba(5,10,26,0.98) 100%)',
            border: '1px solid rgba(56,189,248,0.22)',
            boxShadow: '0 0 60px -20px rgba(37,99,235,0.18)'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md inline-block"
                style={{ background: 'rgba(34,211,238,0.12)', border: '1px solid rgba(34,211,238,0.3)', color: '#22d3ee' }}>
                Core Purpose & Commitment
              </span>
              <h3 className="font-heading font-bold text-white leading-snug"
                style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)' }}>
                “{brochureContent.brand.purposeStatement}”
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-normal">
                Headquartered in the vibrant coastal hub of{' '}
                <strong className="text-white font-semibold">Visakhapatnam (530022)</strong>, JVS functions as a versatile holding group uniting education, tech innovation, high-profile event production, startup incubation, and luxury living.
              </p>
            </div>

            <div className="lg:col-span-4 rounded-2xl p-5 sm:p-6 space-y-3.5"
              style={{ background: 'rgba(3,6,18,0.9)', border: '1px solid rgba(30,58,95,0.6)' }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Headquarters & Reach</p>
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
              <div className="pt-2.5 border-t" style={{ borderColor: 'rgba(30,41,59,0.5)' }}>
                <p className="text-xs text-slate-400">
                  Website:{' '}
                  <a href="https://www.jvsacademy.com" target="_blank" rel="noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                    www.jvsacademy.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Three Pillars ─── */}
        <div className="mb-14 space-y-6">
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center space-y-1.5"
          >
            <h3 className="font-heading font-bold text-white text-2xl sm:text-3xl">
              The Three Pillars of JVS
            </h3>
            <p className="text-xs sm:text-sm text-cyan-300 font-medium">Innovation • Vision • Versatility</p>
          </motion.div>

          {/* Pillar selector */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {pillars.map((p) => {
              const PillarIcon = p.icon;
              const isActive = activePillar === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(p.id)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg, rgba(37,99,235,0.3), rgba(8,145,178,0.25))`
                      : 'rgba(8,16,40,0.8)',
                    border: isActive
                      ? `1px solid ${p.accent}`
                      : '1px solid rgba(56,189,248,0.2)',
                    color: isActive ? '#ffffff' : '#cbd5e1',
                    boxShadow: isActive ? `0 0 20px -5px ${p.accent}35` : 'none',
                    transform: isActive ? 'scale(1.02)' : 'scale(1)'
                  }}
                >
                  <PillarIcon className="w-4 h-4" style={{ color: isActive ? '#ffffff' : p.accent }} />
                  <span>{p.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active pillar content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-6 sm:p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(8,18,45,0.95) 0%, rgba(5,12,30,0.98) 100%)',
                border: `1px solid ${current.accent}35`,
                boxShadow: `0 0 40px -15px ${current.accent}20`
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: current.accent }}>
                    {current.subtitle}
                  </span>
                  <h4 className="font-heading font-bold text-white flex items-center gap-2.5 text-xl sm:text-2xl">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${current.accent}15`, border: `1px solid ${current.accent}35`, color: current.accent }}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{current.title}</span>
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-normal">
                    {current.description}
                  </p>
                </div>
                <div className="md:col-span-4 rounded-2xl p-5 space-y-2.5"
                  style={{ background: 'rgba(3,6,18,0.9)', border: '1px solid rgba(30,58,95,0.6)' }}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Key Inclusions</p>
                  {current.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <RiCheckDoubleLine className="w-3.5 h-3.5 shrink-0" style={{ color: current.accent }} />
                      <span className="text-xs font-medium text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── Core Sectors Grid ─── */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Integrated Scope</span>
            <h3 className="font-heading font-bold text-white text-2xl sm:text-3xl mt-0.5">
              Core Business Sectors
            </h3>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {brochureContent.coreSectors.map((sector, idx) => {
              const SectorIcon = sectorIcons[sector.id] || RiCpuLine;
              const colors = sectorColors[sector.id] || { accent: '#38bdf8', bg: 'rgba(56,189,248,0.12)', border: 'rgba(56,189,248,0.35)' };

              return (
                <motion.div
                  key={sector.id}
                  variants={inView}
                  className="group relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(145deg, rgba(10,20,50,0.96) 0%, rgba(5,12,32,0.98) 60%, rgba(3,7,20,0.99) 100%)',
                    border: '1px solid rgba(56,189,248,0.2)',
                    boxShadow: '0 15px 35px -15px rgba(0,0,0,0.8)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${colors.accent}60`;
                    e.currentTarget.style.boxShadow = `0 20px 45px -15px rgba(0,0,0,0.9), 0 0 25px -10px ${colors.accent}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(56,189,248,0.2)';
                    e.currentTarget.style.boxShadow = '0 15px 35px -15px rgba(0,0,0,0.8)';
                  }}
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between pb-2.5 border-b" style={{ borderColor: 'rgba(56,189,248,0.15)' }}>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                        style={{ background: colors.bg, border: `1px solid ${colors.border}`, color: colors.accent }}
                      >
                        <SectorIcon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold font-heading" style={{ color: colors.accent }}>
                        0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: colors.accent }}>
                        {sector.category}
                      </span>
                      <h4 className="font-heading font-bold text-lg text-white mt-0.5 group-hover:text-cyan-300 transition-colors">
                        {sector.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed text-slate-200 font-normal">
                      {sector.description}
                    </p>
                  </div>

                  <div className="pt-3.5 mt-3 border-t flex items-center justify-between text-xs" style={{ borderColor: 'rgba(56,189,248,0.15)' }}>
                    <span className="font-medium text-slate-400">Brochure Sector</span>
                    <RiArrowRightLine className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" style={{ color: colors.accent }} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
