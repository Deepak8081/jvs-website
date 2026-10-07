import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RiSparklingFill, 
  RiArrowRightLine, 
  RiArrowLeftLine,
  RiArrowRightUpLine, 
  RiGraduationCapLine, 
  RiCpuLine, 
  RiCalendarEventLine, 
  RiRocketLine, 
  RiBuilding4Line, 
  RiHotelLine,
  RiFilePaperLine,
  RiShieldCheckLine,
  RiCheckDoubleLine,
  RiDoubleQuotesL,
  RiExchangeLine,
  RiTeamLine,
  RiBarChartBoxLine,
  RiCompass3Line,
  RiStackLine,
  RiFilter3Line
} from 'react-icons/ri';
import { companyData } from '../data/jvsData';
import { brochureContent } from '../data/jvsContent';

// Venture visual configuration mapping
const ventureVisuals = {
  'versatile-academy': {
    icon: RiGraduationCapLine,
    filterCategory: 'Education',
    accentColor: '#22d3ee',
    accentBg: 'rgba(34,211,238,0.12)',
    accentBorder: 'rgba(34,211,238,0.35)',
    metrics: [
      { label: 'Talents Mentored', value: '2500+' },
      { label: 'Placement Rate', value: '94%' },
      { label: 'Tech Curriculums', value: '15+' }
    ]
  },
  'jvs-tech': {
    icon: RiCpuLine,
    filterCategory: 'Technology',
    accentColor: '#60a5fa',
    accentBg: 'rgba(96,165,250,0.12)',
    accentBorder: 'rgba(96,165,250,0.35)',
    metrics: [
      { label: 'Platforms Deployed', value: '45+' },
      { label: 'Cloud Uptime SLA', value: '99.9%' },
      { label: 'Tech Stacks', value: '12+' }
    ]
  },
  'jyoora-events': {
    icon: RiCalendarEventLine,
    filterCategory: 'Events & Media',
    accentColor: '#f59e0b',
    accentBg: 'rgba(245,158,11,0.12)',
    accentBorder: 'rgba(245,158,11,0.35)',
    metrics: [
      { label: 'Summits & Events', value: '100+' },
      { label: 'Audience Impact', value: '50k+' },
      { label: 'A/V Production', value: 'Turnkey' }
    ]
  },
  'vexobiz': {
    icon: RiRocketLine,
    filterCategory: 'Business Incubation',
    accentColor: '#34d399',
    accentBg: 'rgba(52,211,153,0.12)',
    accentBorder: 'rgba(52,211,153,0.35)',
    metrics: [
      { label: 'Ventures Incubated', value: '50+' },
      { label: 'Corporate Filings', value: '200+' },
      { label: 'Compliance Audit', value: '100%' }
    ]
  },
  'career-placements': {
    icon: RiBuilding4Line,
    filterCategory: 'Education',
    accentColor: '#818cf8',
    accentBg: 'rgba(129,140,248,0.12)',
    accentBorder: 'rgba(129,140,248,0.35)',
    metrics: [
      { label: 'Corporate Ties', value: '150+' },
      { label: 'Interview Clearance', value: '92%' },
      { label: 'Average CTC Uplift', value: '3.2x' }
    ]
  },
  'signature-stays': {
    icon: RiHotelLine,
    filterCategory: 'Hospitality',
    accentColor: '#c084fc',
    accentBg: 'rgba(192,132,252,0.12)',
    accentBorder: 'rgba(192,132,252,0.35)',
    metrics: [
      { label: 'Curated Suites', value: '25+' },
      { label: 'Guest Rating', value: '4.9/5' },
      { label: 'Repeat Stays', value: '98%' }
    ]
  }
};

const filterTabs = [
  { id: 'all', label: 'All Verticals' },
  { id: 'Education', label: 'Education' },
  { id: 'Technology', label: 'Technology' },
  { id: 'Events & Media', label: 'Events & Media' },
  { id: 'Business Incubation', label: 'Business Incubation' },
  { id: 'Hospitality', label: 'Hospitality' }
];

const groupStats = [
  { value: '6 Verticals', label: 'Diversified Pillars', desc: 'Integrated Cross-Industry Group' },
  { value: '2500+', label: 'Talents Mentored', desc: 'Practical Tech & Career Pipelines' },
  { value: '50+', label: 'Ventures Incubated', desc: 'From Concept to Market Scale' },
  { value: '100+', label: 'Events Produced', desc: 'Corporate Summits & Experiences' }
];

const synergyPillars = [
  {
    title: 'Talent & Engineering Pipeline',
    source: 'Versatile Academy',
    connector: 'powers with vetted developers',
    target: 'JVS Tech & Innovation',
    color: '#22d3ee',
    description: 'Versatile Academy trains and mentors top-tier engineering talent who immediately feed into live software products, client applications, and SaaS engineering sprints at JVS Tech.'
  },
  {
    title: 'Incubation & Software Acceleration',
    source: 'VexoBiz',
    connector: 'provisions software stacks via',
    target: 'JVS Tech & Innovation',
    color: '#34d399',
    description: 'When founders incubate through VexoBiz for corporate registration and strategy, JVS Tech provides end-to-end MVP development, cloud systems, and mobile architectures under one roof.'
  },
  {
    title: 'Experiential & Enterprise Showcase',
    source: 'Jyoora Events',
    connector: 'amplifies brand releases for',
    target: 'VexoBiz & JVS Ecosystem',
    color: '#f59e0b',
    description: 'Jyoora Events orchestrates grand product launches, tech hackathons, demo days, and investor conferences for enterprises built and incubated across the JVS network.'
  },
  {
    title: 'Executive Living & Retreat Spaces',
    source: 'Signature Stays',
    connector: 'hosts corporate guests & retreats for',
    target: 'Group Partners & Founders',
    color: '#c084fc',
    description: 'Signature Stays provides premium coastal accommodations and executive offsite infrastructure for visiting enterprise partners, leadership summits, and remote founding teams.'
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

export default function BusinessPage({ onOpenBrochure }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Filter ventures
  const filteredVentures = companyData.ventures.filter((venture) => {
    if (selectedFilter === 'all') return true;
    const visual = ventureVisuals[venture.id];
    return visual?.filterCategory === selectedFilter;
  });

  return (
    <div className="min-h-screen bg-[#020509] text-slate-100 relative">

      {/* ─── Ambient Glows ─── */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] pointer-events-none rounded-full blur-[150px] opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(34,211,238,0.25) 50%, transparent 80%)' }}
      />

      {/* ─── 1. Hero Banner ─── */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl space-y-4"
          >
            {/* Breadcrumbs */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-xs font-medium">
              <Link to="/" className="text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors">
                <RiArrowLeftLine className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-cyan-300 font-semibold">Our Business</span>
            </motion.div>

            {/* Pill Badge */}
            <motion.div variants={itemVariants}>
              <div 
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                style={{ background: 'rgba(5,15,40,0.9)', border: '1px solid rgba(56,189,248,0.3)', color: '#7dd3fc' }}
              >
                <RiSparklingFill className="w-3.5 h-3.5 text-cyan-400" />
                <span>Multi-Sector Portfolio</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="font-heading font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', letterSpacing: '-0.025em' }}
            >
              JVS Business Group{' '}
              <span 
                style={{
                  background: 'linear-gradient(135deg, #38bdf8, #7dd3fc 45%, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Ecosystem
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-2xl font-semibold text-cyan-300/90 font-heading"
            >
              6 Diversified Pillars of Versatile Stability
            </motion.p>

            {/* Narrative description */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed text-slate-300 font-normal max-w-3xl"
            >
              From technical talent mastery and custom software engineering to experiential stage production, startup incubation, career acceleration, and luxury living spaces — JVS unites interconnected entities designed for enduring scale and real-world value creation.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBrochure}
                className="shine-hover flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-white shadow-lg transition-all cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
              >
                <RiFilePaperLine className="w-4 h-4 text-cyan-300" />
                <span>View Official Brochure PDF</span>
              </motion.button>

              <a
                href="#synergies"
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
                <span>Explore Group Synergies</span>
                <RiExchangeLine className="w-4 h-4 text-cyan-400" />
              </a>
            </motion.div>
          </motion.div>

          {/* Group Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800/80"
          >
            {groupStats.map((stat, idx) => (
              <div 
                key={idx}
                className="rounded-2xl p-5 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(10,18,45,0.9) 0%, rgba(5,10,26,0.95) 100%)',
                  border: '1px solid rgba(56,189,248,0.2)',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.7)'
                }}
              >
                <div 
                  className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff, #7dd3fc)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-cyan-400 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {stat.desc}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ─── 2. Interactive Vertical Filter & Venture Showcase ─── */}
      <section className="py-14 sm:py-16 relative overflow-hidden" style={{ background: '#030611' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading & Filter Navigation */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <RiFilter3Line className="w-4 h-4" />
                <span>Portfolio Navigation</span>
              </span>
              <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl lg:text-4xl">
                Explore the 6 Core Business Ventures
              </h2>
              <p className="text-sm text-slate-300">
                Click any venture card to dive deep into dedicated capabilities, metrics, leadership insights, and collaboration channels.
              </p>
            </div>

            {/* Filter Tabs */}
            <div 
              className="flex items-center flex-wrap gap-1.5 p-1.5 rounded-2xl self-start lg:self-auto"
              style={{
                background: 'rgba(5,12,30,0.9)',
                border: '1px solid rgba(56,189,248,0.25)',
                backdropFilter: 'blur(12px)'
              }}
            >
              {filterTabs.map((tab) => {
                const isActive = selectedFilter === tab.id;
                const count = tab.id === 'all' 
                  ? companyData.ventures.length 
                  : companyData.ventures.filter(v => ventureVisuals[v.id]?.filterCategory === tab.id).length;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedFilter(tab.id)}
                    className="relative px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                    style={{ color: isActive ? '#ffffff' : '#94a3b8' }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeBusinessFilter"
                        className="absolute inset-0 rounded-xl -z-10"
                        style={{
                          background: 'linear-gradient(135deg, #1d4ed8, #0891b2)',
                          boxShadow: '0 0 20px -3px rgba(37,99,235,0.6)'
                        }}
                        transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      />
                    )}
                    <span>{tab.label}</span>
                    <span 
                      className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Ventures Grid */}
          <motion.div 
            layout
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredVentures.map((venture) => {
                const visual = ventureVisuals[venture.id] || ventureVisuals['versatile-academy'];
                const VentureIcon = visual.icon;

                return (
                  <motion.div
                    layout
                    key={venture.id}
                    variants={itemVariants}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group relative rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2"
                    style={{
                      background: 'linear-gradient(145deg, rgba(8,16,40,0.96) 0%, rgba(4,9,24,0.98) 100%)',
                      border: '1px solid rgba(56,189,248,0.22)',
                      boxShadow: '0 20px 45px -15px rgba(0,0,0,0.85)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${visual.accentColor}70`;
                      e.currentTarget.style.boxShadow = `0 25px 50px -15px rgba(0,0,0,0.9), 0 0 35px -10px ${visual.accentColor}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(56,189,248,0.22)';
                      e.currentTarget.style.boxShadow = '0 20px 45px -15px rgba(0,0,0,0.85)';
                    }}
                  >
                    {/* Top Cover Image with Dark Overlay */}
                    <div className="relative h-52 overflow-hidden">
                      <img 
                        src={venture.image} 
                        alt={venture.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 brightness-90 group-hover:brightness-100"
                        loading="lazy"
                      />
                      <div 
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(to bottom, rgba(2,5,16,0.2) 0%, rgba(2,5,16,0.65) 60%, rgba(4,9,24,1) 100%)'
                        }}
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                        <span 
                          className="px-3 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md"
                          style={{
                            background: 'rgba(2,5,16,0.9)',
                            border: `1px solid ${visual.accentColor}55`,
                            color: '#ffffff'
                          }}
                        >
                          <span style={{ color: visual.accentColor }} className="mr-1.5">●</span>
                          {venture.category}
                        </span>

                        <span 
                          className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md"
                          style={{
                            background: `${visual.accentColor}25`,
                            border: `1px solid ${visual.accentColor}60`,
                            color: visual.accentColor
                          }}
                        >
                          {venture.badge}
                        </span>
                      </div>

                      {/* Floating Venture Icon */}
                      <div 
                        className="absolute bottom-3 right-4 w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: visual.accentBg,
                          border: `1px solid ${visual.accentBorder}`,
                          color: visual.accentColor
                        }}
                      >
                        <VentureIcon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Main Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      
                      <div className="space-y-2">
                        <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                          {venture.name}
                        </h3>
                        <p className="text-xs font-semibold" style={{ color: visual.accentColor }}>
                          {venture.subTitle}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1">
                          {venture.description}
                        </p>
                      </div>

                      {/* Highlight tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {venture.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-md text-slate-300"
                            style={{
                              background: 'rgba(255,255,255,0.05)',
                              border: '1px solid rgba(255,255,255,0.08)'
                            }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Key Metrics Mini-Bar */}
                      <div 
                        className="grid grid-cols-3 gap-2 p-3 rounded-2xl border"
                        style={{
                          background: 'rgba(5,12,30,0.7)',
                          borderColor: 'rgba(56,189,248,0.15)'
                        }}
                      >
                        {visual.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="text-center">
                            <div className="font-heading font-bold text-sm text-white" style={{ color: visual.accentColor }}>
                              {m.value}
                            </div>
                            <div className="text-[10px] text-slate-400 truncate">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Card Action Link to Profile */}
                      <div className="pt-2 border-t border-slate-800/80">
                        <Link
                          to={`/business/${venture.id}`}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all duration-300 group/btn"
                          style={{
                            background: visual.accentBg,
                            border: `1px solid ${visual.accentBorder}`,
                            color: '#ffffff'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = visual.accentColor;
                            e.currentTarget.style.color = '#020509';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = visual.accentBg;
                            e.currentTarget.style.color = '#ffffff';
                          }}
                        >
                          <span>Explore Venture Profile</span>
                          <RiArrowRightLine className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ─── 3. Group Synergies Matrix ─── */}
      <section id="synergies" className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#020509' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-2 mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.3)', color: '#22d3ee' }}>
              <RiExchangeLine className="w-3.5 h-3.5" />
              <span>Interconnected Value Chain</span>
            </div>
            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl lg:text-4xl">
              Group Synergies Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal">
              How the 6 business verticals reinforce each other in a closed-loop ecosystem of talent, engineering, events, and venture acceleration.
            </p>
          </motion.div>

          {/* Interactive Synergy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {synergyPillars.map((syn, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between space-y-4"
                style={{
                  background: 'linear-gradient(145deg, rgba(8,16,42,0.96) 0%, rgba(3,7,20,0.98) 100%)',
                  border: `1px solid ${syn.color}35`,
                  boxShadow: '0 20px 45px -15px rgba(0,0,0,0.8)'
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                    <span 
                      className="text-xs font-bold font-heading uppercase tracking-wider"
                      style={{ color: syn.color }}
                    >
                      Synergy Loop 0{idx + 1}
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full font-semibold"
                      style={{ background: `${syn.color}18`, color: syn.color, border: `1px solid ${syn.color}40` }}>
                      Active Group Pipeline
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                    {syn.title}
                  </h3>

                  {/* Flow Badge Nodes */}
                  <div 
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 rounded-2xl"
                    style={{ background: 'rgba(4,9,25,0.85)', border: '1px solid rgba(56,189,248,0.18)' }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ background: syn.color }} />
                      <span className="text-xs font-bold text-white font-heading">{syn.source}</span>
                    </div>

                    <div className="text-[11px] font-medium text-slate-400 italic px-2">
                      ➔ {syn.connector} ➔
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-cyan-300 font-heading">{syn.target}</span>
                      <RiCheckDoubleLine className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                    {syn.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Collaborative Advantage:</span>
                  <span className="font-semibold text-white">Zero Vendor Friction</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 4. Leadership Alignment Section ─── */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#030612' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-2 mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.3)', color: '#60a5fa' }}>
              <RiTeamLine className="w-3.5 h-3.5" />
              <span>Executive Visionaries</span>
            </div>
            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl lg:text-4xl">
              Leadership Driving the Ecosystem
            </h2>
            <p className="text-sm text-slate-300 font-normal">
              Direct guidance and operational steering by the group's executive leadership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {companyData.leaders.map((leader, idx) => {
              const isJVS = idx === 0;
              const accentColor = isJVS ? '#22d3ee' : '#34d399';

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.15 }}
                  className="rounded-3xl p-7 sm:p-10 relative overflow-hidden flex flex-col justify-between space-y-6"
                  style={{
                    background: 'linear-gradient(145deg, rgba(8,16,42,0.96) 0%, rgba(4,9,24,0.98) 100%)',
                    border: `1px solid ${accentColor}35`,
                    boxShadow: '0 25px 50px -15px rgba(0,0,0,0.85)'
                  }}
                >
                  <div className="space-y-6">
                    {/* Header with Avatar & Details */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                      <div className="relative shrink-0">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover"
                          style={{ border: `2px solid ${accentColor}60` }}
                        />
                        <div 
                          className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md text-[10px] font-bold text-white"
                          style={{ background: accentColor }}
                        >
                          {isJVS ? 'JVS' : 'VexoBiz'}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span 
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                          style={{ background: `${accentColor}18`, color: accentColor, border: `1px solid ${accentColor}40` }}
                        >
                          {leader.badge}
                        </span>
                        <h3 className="font-heading font-bold text-2xl text-white">
                          {leader.name}
                        </h3>
                        <p className="text-sm font-semibold" style={{ color: accentColor }}>
                          {leader.role}
                        </p>
                      </div>
                    </div>

                    {/* Official Quote */}
                    <blockquote 
                      className="p-4 rounded-2xl italic text-slate-200 text-sm leading-relaxed border relative"
                      style={{
                        background: 'rgba(5,12,30,0.7)',
                        borderColor: `${accentColor}25`
                      }}
                    >
                      <RiDoubleQuotesL className="w-5 h-5 mb-1 opacity-50" style={{ color: accentColor }} />
                      “{leader.quote}”
                    </blockquote>

                    {/* Bio */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {leader.bio}
                    </p>

                    {/* Focus Areas */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Strategic Focus Pillars:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {leader.focusAreas.map((area, fIdx) => (
                          <span 
                            key={fIdx}
                            className="text-xs px-2.5 py-1 rounded-lg text-slate-200 font-medium"
                            style={{
                              background: `${accentColor}12`,
                              border: `1px solid ${accentColor}30`
                            }}
                          >
                            ✓ {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connect link */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Headquartered:</span>
                    <span className="font-semibold text-white">Visakhapatnam, AP</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── 5. Bottom CTA Banner ─── */}
      <section className="py-14 sm:py-18 relative overflow-hidden" style={{ background: '#020509' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 sm:p-12 text-center space-y-5 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(10,22,55,0.96) 0%, rgba(4,10,28,0.98) 100%)',
              border: '1px solid rgba(56,189,248,0.3)',
              boxShadow: '0 25px 60px -15px rgba(37,99,235,0.3)'
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-300"
              style={{ background: 'rgba(34,211,238,0.12)', border: '1px solid rgba(34,211,238,0.3)' }}>
              <RiSparklingFill className="w-3.5 h-3.5" />
              <span>Join Forces with JVS</span>
            </div>

            <h3 className="font-heading font-bold text-white text-2xl sm:text-4xl max-w-2xl mx-auto leading-tight">
              Ready to Accelerate Your Enterprise with JVS Group?
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
              Whether you are an aspiring professional seeking tech mastery, a founder launching through VexoBiz, or an enterprise planning high-impact conferences, our multi-sector infrastructure is built to deliver.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                to="/#contact"
                className="shine-hover flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-xl transition-all cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
              >
                <span>Initiate Group Partnership</span>
                <RiArrowRightLine className="w-4 h-4" />
              </Link>

              <button
                onClick={onOpenBrochure}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-cyan-300 transition-all cursor-pointer"
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
                <RiFilePaperLine className="w-4 h-4 text-cyan-400" />
                <span>Download Brochure (PDF)</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
