import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  RiSparklingFill,
  RiFlashlightFill,
  RiGraduationCapLine,
  RiFolderSharedLine,
  RiBriefcase4Line,
  RiCodeSSlashLine,
  RiMegaphoneLine,
  RiBuilding3Line,
  RiLineChartLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiArrowLeftLine,
  RiSearch2Line,
  RiCloseLine,
  RiCheckDoubleLine,
  RiShieldCheckLine,
  RiFilePaperLine,
  RiCompass3Line,
  RiStackLine,
  RiWhatsappFill,
  RiUserStarLine,
  RiFocus2Line,
  RiTimeLine,
  RiAwardLine,
  RiSendPlaneFill
} from 'react-icons/ri';
import { companyData } from '../data/jvsData';
import { brochureContent } from '../data/jvsContent';

// Service metadata mapping tying companyData and brochureContent
const serviceRegistry = [
  {
    id: "education-training",
    number: "01",
    title: "EDUCATION & TRAINING",
    badge: "Versatile Academy Vertical",
    category: "Training & Careers",
    icon: RiGraduationCapLine,
    accent: "#22d3ee",
    tagBg: "rgba(34,211,238,0.12)",
    border: "rgba(34,211,238,0.35)",
    shortDesc: "Comprehensive industry-aligned training programs designed to impart practical skills and accelerate career trajectories.",
    tags: ["Training", "Skills", "Careers"],
    deliverables: [
      "Industry-Aligned Curriculum & Study Repositories",
      "Live Instructor Classes & Lab Sprints",
      "Recognized Course Completion Credentials",
      "Lifelong Alumni Network Access"
    ]
  },
  {
    id: "internships-projects",
    number: "02",
    title: "INTERNSHIPS & PROJECTS",
    badge: "Versatile Academy Vertical",
    category: "Training & Careers",
    icon: RiFolderSharedLine,
    accent: "#60a5fa",
    tagBg: "rgba(96,165,250,0.12)",
    border: "rgba(96,165,250,0.35)",
    shortDesc: "Hands-on real-world internships and capstone projects that turn theoretical knowledge into tangible, employer-ready portfolios.",
    tags: ["Internships", "Projects", "Portfolio"],
    deliverables: [
      "Production-Ready GitHub Project Repository",
      "Official Verified Experience Credential",
      "Senior Architect Code Review Audit",
      "Recruiter-Ready Live Demo Showcase"
    ]
  },
  {
    id: "career-development",
    number: "03",
    title: "CAREER DEVELOPMENT",
    badge: "JVS Placement Hub",
    category: "Training & Careers",
    icon: RiBriefcase4Line,
    accent: "#34d399",
    tagBg: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.35)",
    shortDesc: "Dedicated career acceleration ecosystem ensuring candidates are confident, job-ready, and connected to top employers.",
    tags: ["Placements", "Careers", "Interviews"],
    deliverables: [
      "ATS-Optimized Resume & LinkedIn Profile",
      "Mock Technical & HR Evaluation Scorecards",
      "Direct Corporate Hiring Partner Referrals",
      "Executive Salary Negotiation Playbook"
    ]
  },
  {
    id: "technology-innovation",
    number: "04",
    title: "TECHNOLOGY & INNOVATION",
    badge: "JVS Tech Division",
    category: "Technology & Engineering",
    icon: RiCodeSSlashLine,
    accent: "#818cf8",
    tagBg: "rgba(129,140,248,0.12)",
    border: "rgba(129,140,248,0.35)",
    shortDesc: "End-to-end digital product design, web applications, mobile platforms, and enterprise software engineering.",
    tags: ["Web", "Apps", "Software"],
    deliverables: [
      "Production-Grade Scalable Codebase",
      "Cloud Infrastructure & CI/CD Pipeline",
      "Modern Responsive Design System (Figma)",
      "Comprehensive REST/GraphQL API Docs"
    ]
  },
  {
    id: "digital-solutions",
    number: "05",
    title: "DIGITAL SOLUTIONS",
    badge: "JVS Digital Engine",
    category: "Technology & Engineering",
    icon: RiMegaphoneLine,
    accent: "#f59e0b",
    tagBg: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.35)",
    shortDesc: "Data-driven digital marketing, search engine optimization, and cohesive brand design to scale your digital presence.",
    tags: ["Marketing", "SEO", "Branding"],
    deliverables: [
      "Real-Time Ad Performance & ROAS Dashboard",
      "Technical SEO Keyword Ranking Report",
      "Complete Brand Visual Style Guide & Assets",
      "Omnichannel Conversion Funnel Blueprint"
    ]
  },
  {
    id: "business-consulting",
    number: "06",
    title: "BUSINESS & CONSULTING",
    badge: "VexoBiz Vertical",
    category: "Startup & Consulting",
    icon: RiBuilding3Line,
    accent: "#c084fc",
    tagBg: "rgba(192,132,252,0.12)",
    border: "rgba(192,132,252,0.35)",
    shortDesc: "End-to-end business advisory, corporate structuring, legal compliance, and incubation for ambitious founders.",
    tags: ["Startups", "Registration", "Consulting"],
    deliverables: [
      "Official Corporate Incorporation Certificate",
      "GST, MSME & Trademark Filings",
      "Investor-Ready Pitch Deck & Financial Model",
      "12-Month Statutory Compliance Roadmap"
    ]
  },
  {
    id: "events-experiences",
    number: "07",
    title: "EVENTS & EXPERIENCES",
    badge: "Jyoora Events Division",
    category: "Events & Hospitality",
    icon: RiSparklingFill,
    accent: "#fb923c",
    tagBg: "rgba(251,146,60,0.12)",
    border: "rgba(251,146,60,0.35)",
    shortDesc: "Spectacular corporate summits, cultural festivals, product releases, and celebratory events managed flawlessly.",
    tags: ["Corporate", "Celebrations", "Experiences"],
    deliverables: [
      "Stage, A/V Lighting & Production Blueprint",
      "Minute-by-Minute Operational Master Run-Sheet",
      "Cinematic 4K Video Coverage & Photography",
      "VIP Hospitality, Protocol & Security Logistics"
    ]
  },
  {
    id: "growth-opportunities",
    number: "08",
    title: "GROWTH & OPPORTUNITIES",
    badge: "Strategic Expansion & Stays",
    category: "Startup & Consulting",
    icon: RiLineChartLine,
    accent: "#38bdf8",
    tagBg: "rgba(56,189,248,0.12)",
    border: "rgba(56,189,248,0.35)",
    shortDesc: "Strategic partnership matchmaking, market expansion strategies, and collaborative venture growth programs.",
    tags: ["Business", "Development", "Growth"],
    deliverables: [
      "Market Entry & Regional Scaling Blueprint",
      "B2B Commercial Partnership Agreements",
      "Executive Living & Retreat Frameworks",
      "Cross-Sector Venture ROI Reports"
    ]
  }
];

const CATEGORIES = [
  "All",
  "Training & Careers",
  "Technology & Engineering",
  "Startup & Consulting",
  "Events & Hospitality"
];

// 4-Step Methodology items
const methodologySteps = [
  {
    step: "01",
    title: "Discovery & Needs Assessment",
    subtitle: "In-Depth Scoping & Audit",
    accent: "#22d3ee",
    desc: "We begin with deep stakeholder engagement, operational bottleneck auditing, and clear KPI alignment to understand exact requirements.",
    points: ["Requirements gathering & skill audits", "Feasibility & technology stack analysis", "Quantifiable success metric definitions"]
  },
  {
    step: "02",
    title: "Custom Strategy & Architecture",
    subtitle: "Bespoke Solution Engineering",
    accent: "#818cf8",
    desc: "Our cross-disciplinary teams construct tailor-made program curricula, software architectural blueprints, or event production master plans.",
    points: ["Curriculum & sprint roadmap creation", "Full-stack system architecture designs", "Legal, compliance or event schedule frameworks"]
  },
  {
    step: "03",
    title: "Flawless Execution",
    subtitle: "Agile Sprints & Hands-On Delivery",
    accent: "#34d399",
    desc: "We deploy disciplined agile sprints, hands-on mentorship, code reviews, and live production staging with complete milestone transparency.",
    points: ["Weekly sprint reviews & progress milestones", "Senior mentor & architect oversight", "Rigorous quality assurance & testing rounds"]
  },
  {
    step: "04",
    title: "Continuous Growth & Support",
    subtitle: "Long-Term Impact & Scale",
    accent: "#fb923c",
    desc: "Our engagement extends beyond initial delivery to post-launch governance, placement tracking, maintenance, and ongoing ecosystem synergy.",
    points: ["Post-handoff performance monitoring", "Direct recruitment & partner matchmaking", "Continuous ecosystem community access"]
  }
];

// Why JVS Assurance Pillars
const assurancePillars = [
  {
    icon: RiStackLine,
    accent: "#22d3ee",
    title: "Versatile Stability",
    desc: "A singular corporate umbrella seamlessly harmonizing software engineering, professional training, events, and venture incubation."
  },
  {
    icon: RiCompass3Line,
    accent: "#818cf8",
    title: "Executive Governance",
    desc: "Direct strategic oversight by Managing Directors Jyoshna Yellapu and Vahid Shaik, guaranteeing uncompromising quality standards."
  },
  {
    icon: RiAwardLine,
    accent: "#34d399",
    title: "Industry-Proven Track Record",
    desc: "2500+ professionals trained, 50+ startup ventures accelerated, and tier-1 corporate events flawlessly executed."
  },
  {
    icon: RiShieldCheckLine,
    accent: "#fb923c",
    title: "End-to-End Compliance",
    desc: "Verified certifications, government-compliant entity registrations, and transparent corporate delivery benchmarks."
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function ServicesPage({ onOpenBrochure }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Filtered Services List
  const filteredServices = useMemo(() => {
    return serviceRegistry.filter((s) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.shortDesc.toLowerCase().includes(q) ||
        s.badge.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q)) ||
        s.deliverables.some((d) => d.toLowerCase().includes(q));

      const matchesCat =
        selectedCategory === "All" ||
        s.category === selectedCategory ||
        (selectedCategory === "Events & Hospitality" &&
          (s.category === "Events & Hospitality" || s.id === "growth-opportunities"));

      return matchesSearch && matchesCat;
    });
  }, [selectedCategory, searchQuery]);

  // Quick navigation to contact with service context
  const handleInquire = (service) => {
    navigate(`/#contact?service=${service.id}`);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#020509] text-slate-100 relative">
      
      {/* ─── Hero Banner Section ─── */}
      <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-18 overflow-hidden">
        {/* Ambient Glows */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] pointer-events-none rounded-full blur-[140px] opacity-35"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.4) 0%, rgba(34,211,238,0.2) 60%, transparent 80%)' }}
        />
        <div 
          className="absolute top-1/3 right-0 w-[400px] h-[400px] pointer-events-none rounded-full blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.3) 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl space-y-4"
          >
            {/* Breadcrumb Navigation */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-xs font-medium">
              <Link to="/" className="text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors">
                <RiArrowLeftLine className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-cyan-300 font-semibold">Services</span>
            </motion.div>

            {/* Status Pill Badge */}
            <motion.div variants={itemVariants}>
              <div 
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                style={{ background: 'rgba(5,15,40,0.9)', border: '1px solid rgba(56,189,248,0.3)', color: '#7dd3fc' }}
              >
                <RiFlashlightFill className="w-3.5 h-3.5 text-cyan-400" />
                <span>8 Specialized Service Streams • 100% Industry Aligned</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12]"
            >
              End-to-End Capabilities Built for{' '}
              <span 
                style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #7dd3fc 45%, #818cf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Modern Impact.
              </span>
            </motion.h1>

            {/* Narrative Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed font-normal text-slate-300 max-w-3xl"
            >
              From certified technical education and corporate placements to scalable software engineering, 
              event production, and startup incubation—JVS delivers multi-disciplinary excellence engineered to move individuals and enterprises forward.
            </motion.p>

            {/* Hero Quick Action Buttons */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#service-grid"
                className="shine-hover flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-xl transition-all cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
              >
                <span>Explore All 8 Streams</span>
                <RiArrowRightLine className="w-4 h-4 text-cyan-200" />
              </a>

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
                <span>View Official Brochure</span>
              </button>
            </motion.div>
          </motion.div>

          {/* ─── Hero Key Statistics Strip ─── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t"
            style={{ borderColor: 'rgba(56,189,248,0.15)' }}
          >
            <div className="p-4 sm:p-5 rounded-2xl bg-[#050b1e]/90 border border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-heading font-black text-white flex items-baseline gap-1">
                <span>8</span>
                <span className="text-cyan-400 text-lg font-bold">Streams</span>
              </div>
              <p className="text-xs font-semibold text-cyan-300 mt-1">Multi-Disciplinary Coverage</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Education, Tech, Events & Ventures</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#050b1e]/90 border border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-heading font-black text-white flex items-baseline gap-1">
                <span>100%</span>
                <span className="text-emerald-400 text-lg font-bold">Aligned</span>
              </div>
              <p className="text-xs font-semibold text-emerald-300 mt-1">Industry Benchmarks</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Practical, real-world execution</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#050b1e]/90 border border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-heading font-black text-white flex items-baseline gap-1">
                <span>End-to-End</span>
              </div>
              <p className="text-xs font-semibold text-sky-300 mt-1">Enterprise Support</p>
              <p className="text-[11px] text-slate-400 mt-0.5">From consultation to scaled ops</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#050b1e]/90 border border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-heading font-black text-white flex items-baseline gap-1">
                <span>2,500+</span>
                <span className="text-indigo-400 text-lg font-bold">Placed</span>
              </div>
              <p className="text-xs font-semibold text-indigo-300 mt-1">Candidates & Alumni</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Active industry placement tie-ups</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── Interactive Filter & Search Bar ─── */}
      <section id="service-grid" className="py-8 relative z-20" style={{ background: '#030714' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                const count = serviceRegistry.filter((s) => {
                  if (cat === "All") return true;
                  if (cat === "Events & Hospitality") return s.category === "Events & Hospitality" || s.id === "growth-opportunities";
                  return s.category === cat;
                }).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer"
                    style={{
                      background: isActive
                        ? 'linear-gradient(135deg, #1d4ed8, #0891b2)'
                        : 'rgba(8,16,40,0.85)',
                      border: isActive
                        ? '1px solid rgba(56,189,248,0.5)'
                        : '1px solid rgba(56,189,248,0.2)',
                      color: isActive ? '#ffffff' : '#94a3b8',
                      boxShadow: isActive ? '0 4px 15px -5px rgba(37,99,235,0.5)' : 'none',
                      transform: isActive ? 'scale(1.02)' : 'scale(1)'
                    }}
                  >
                    <span>{cat}</span>
                    <span 
                      className="px-1.5 py-0.5 rounded-full text-[10px] font-bold"
                      style={{
                        background: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(30,58,95,0.5)',
                        color: isActive ? '#ffffff' : '#64748b'
                      }}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Real-time Search Input */}
            <div className="relative min-w-[280px] sm:min-w-[320px]">
              <RiSearch2Line className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search streams, deliverables, tech..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all"
                style={{
                  background: 'rgba(8,16,40,0.95)',
                  border: '1px solid rgba(56,189,248,0.3)'
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#38bdf8')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)')}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  title="Clear search"
                >
                  <RiCloseLine className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Results Summary Counter */}
          <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
            <span>
              Showing <strong className="text-white">{filteredServices.length}</strong> of 8 specialized service streams
            </span>
            {searchQuery && (
              <span className="text-cyan-300">
                Filtered by keyword "{searchQuery}"
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ─── Comprehensive 8 Services Grid ─── */}
      <section className="py-10 sm:py-14 relative overflow-hidden" style={{ background: '#020509' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-20 bg-[#050a1c]/60 rounded-3xl border border-slate-800">
              <RiSearch2Line className="w-12 h-12 mx-auto mb-3 text-cyan-400 opacity-40" />
              <h3 className="text-lg font-bold text-white font-heading">No matching service streams found</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Try adjusting your search query or reset the category filters to browse all 8 streams.
              </p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <AnimatePresence>
                {filteredServices.map((service) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      layout
                      key={service.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35 }}
                      className="group relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
                      style={{
                        background: 'linear-gradient(145deg, rgba(8,16,42,0.96) 0%, rgba(5,11,30,0.98) 60%, rgba(2,6,18,0.99) 100%)',
                        border: '1px solid rgba(56,189,248,0.22)',
                        boxShadow: '0 15px 35px -15px rgba(0,0,0,0.85)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${service.accent}70`;
                        e.currentTarget.style.boxShadow = `0 20px 45px -15px rgba(0,0,0,0.9), 0 0 25px -10px ${service.accent}30`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(56,189,248,0.22)';
                        e.currentTarget.style.boxShadow = '0 15px 35px -15px rgba(0,0,0,0.85)';
                      }}
                    >
                      {/* Top Accent Strip */}
                      <div 
                        className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-60 transition-opacity group-hover:opacity-100"
                        style={{ background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)` }}
                      />

                      <div className="space-y-4">
                        {/* Header: Number Badge + Icon */}
                        <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: 'rgba(56,189,248,0.15)' }}>
                          <span
                            className="text-2xl font-black font-heading tracking-tight"
                            style={{
                              color: service.accent,
                              textShadow: `0 0 15px ${service.accent}30`
                            }}
                          >
                            {service.number}
                          </span>
                          
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                            style={{
                              background: service.tagBg,
                              border: `1px solid ${service.border}`,
                              color: service.accent
                            }}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Division Badge & Title */}
                        <div>
                          <span 
                            className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2"
                            style={{
                              background: service.tagBg,
                              border: `1px solid ${service.border}`,
                              color: service.accent
                            }}
                          >
                            {service.badge}
                          </span>

                          <h3 className="font-heading font-bold text-base sm:text-lg text-white leading-snug tracking-wide group-hover:text-cyan-300 transition-colors">
                            {service.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                          {service.shortDesc}
                        </p>

                        {/* Deliverables Checklist */}
                        <div className="space-y-2 pt-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                            Key Deliverables:
                          </span>
                          <div className="space-y-1.5">
                            {service.deliverables.slice(0, 3).map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                                <RiCheckDoubleLine 
                                  className="w-3.5 h-3.5 shrink-0 mt-0.5" 
                                  style={{ color: service.accent }} 
                                />
                                <span className="line-clamp-1">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {service.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-900/90 text-slate-300 border border-slate-800"
                            >
                              • {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Action Buttons: Learn More & Inquire */}
                      <div 
                        className="pt-4 mt-5 border-t grid grid-cols-2 gap-2" 
                        style={{ borderColor: 'rgba(56,189,248,0.15)' }}
                      >
                        <Link
                          to={`/services/${service.id}`}
                          className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-white transition-all cursor-pointer group-hover:shadow-md"
                          style={{
                            background: 'linear-gradient(135deg, rgba(37,99,235,0.85), rgba(8,145,178,0.85))',
                            border: '1px solid rgba(56,189,248,0.3)'
                          }}
                        >
                          <span>Learn More</span>
                          <RiArrowRightLine className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>

                        <button
                          onClick={() => handleInquire(service)}
                          className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                          style={{
                            background: `${service.accent}15`,
                            border: `1px solid ${service.accent}40`,
                            color: service.accent
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = service.accent;
                            e.currentTarget.style.color = '#02050e';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = `${service.accent}15`;
                            e.currentTarget.style.color = service.accent;
                          }}
                        >
                          <span>Inquire</span>
                          <RiArrowRightUpLine className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}

        </div>
      </section>

      {/* ─── 4-Step Engagement Methodology Section ─── */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#030612' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl space-y-3 mb-14 text-center sm:text-left">
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{ background: 'rgba(5,15,40,0.9)', border: '1px solid rgba(56,189,248,0.3)', color: '#7dd3fc' }}
            >
              <RiFocus2Line className="w-3.5 h-3.5 text-cyan-400" />
              <span>Structured Execution Framework</span>
            </div>

            <h2 
              className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight"
            >
              Our 4-Step{' '}
              <span 
                style={{
                  background: 'linear-gradient(135deg, #38bdf8, #7dd3fc 45%, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Engagement Methodology
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Every client engagement follows a disciplined, transparent pipeline designed to minimize friction and deliver quantifiable value.
            </p>
          </div>

          {/* Methodology Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {methodologySteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl p-6 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(145deg, rgba(8,16,38,0.95) 0%, rgba(4,9,24,0.98) 100%)',
                  border: '1px solid rgba(56,189,248,0.2)',
                  boxShadow: '0 15px 35px -15px rgba(0,0,0,0.7)'
                }}
              >
                <div className="space-y-3.5">
                  {/* Step Badge */}
                  <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: 'rgba(56,189,248,0.15)' }}>
                    <span 
                      className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
                      style={{ background: `${item.accent}15`, border: `1px solid ${item.accent}40`, color: item.accent }}
                    >
                      Phase {item.step}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{item.subtitle}</span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 pt-2">
                    {item.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <span style={{ color: item.accent }}>•</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t text-[11px] font-semibold text-slate-400 flex items-center justify-between" style={{ borderColor: 'rgba(56,189,248,0.1)' }}>
                  <span>Milestone Verified</span>
                  <RiCheckDoubleLine className="w-4 h-4" style={{ color: item.accent }} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Client Assurance / Why JVS Section ─── */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#020509' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="rounded-3xl p-8 sm:p-12 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(8,18,46,0.95) 0%, rgba(4,9,25,0.98) 100%)',
              border: '1px solid rgba(56,189,248,0.22)',
              boxShadow: '0 25px 60px -20px rgba(0,0,0,0.85)'
            }}
          >
            {/* Header */}
            <div className="max-w-2xl space-y-3 mb-10">
              <span 
                className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md inline-block"
                style={{ background: 'rgba(34,211,238,0.12)', border: '1px solid rgba(34,211,238,0.3)', color: '#22d3ee' }}
              >
                Why Choose JVS
              </span>

              <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl leading-snug">
                Client Assurance & Uncompromising Stability
              </h2>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                Whether you are an aspiring software engineer, an early-stage startup founder, or an enterprise scaling its technical infrastructure, JVS guarantees high-caliber execution backed by corporate accountability.
              </p>
            </div>

            {/* 4 Assurance Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {assurancePillars.map((p, idx) => {
                const PillarIcon = p.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-[#030717]/80 border border-slate-800/90 space-y-3 hover:border-cyan-500/40 transition-colors"
                  >
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${p.accent}15`, border: `1px solid ${p.accent}40`, color: p.accent }}
                    >
                      <PillarIcon className="w-5 h-5" />
                    </div>

                    <h4 className="font-heading font-bold text-sm text-white">
                      {p.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quote Strip */}
            <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400" style={{ borderColor: 'rgba(56,189,248,0.15)' }}>
              <div className="flex items-center gap-2">
                <RiUserStarLine className="w-4 h-4 text-cyan-400" />
                <span>Executive Direction: <strong>Jyoshna Yellapu</strong> (MD, JVS) &amp; <strong>Vahid Shaik</strong> (MD, VexoBiz)</span>
              </div>
              <div className="text-cyan-300 font-semibold">
                Visakhapatnam, Andhra Pradesh • PIN 530022
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── Bottom CTA Banner ─── */}
      <section className="py-14 sm:py-18 relative overflow-hidden" style={{ background: '#030714' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            className="rounded-3xl p-8 sm:p-12 text-center space-y-5 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(10,22,55,0.95) 0%, rgba(4,10,26,0.98) 100%)',
              border: '1px solid rgba(56,189,248,0.25)',
              boxShadow: '0 20px 50px -15px rgba(37,99,235,0.25)'
            }}
          >
            <span 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 mx-auto"
            >
              <RiSparklingFill className="w-3.5 h-3.5 text-cyan-400" />
              <span>Let's Discuss Your Custom Requirements</span>
            </span>

            <h3 className="font-heading font-bold text-white text-2xl sm:text-4xl max-w-2xl mx-auto leading-tight">
              Ready to Accelerate Your Career or Scale Your Enterprise?
            </h3>

            <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto font-normal leading-relaxed">
              Connect directly with our Visakhapatnam consultation desk to discuss cohort enrollments, bespoke software engineering, event productions, or startup advisory.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-3">
              <Link
                to="/#contact"
                className="shine-hover flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-xl transition-all cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
              >
                <RiSendPlaneFill className="w-4 h-4" />
                <span>Contact Consultation Desk</span>
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
                <span>View Brochure PDF</span>
              </button>

              <a
                href={brochureContent.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-emerald-300 transition-all cursor-pointer"
                style={{
                  background: 'rgba(6,30,20,0.85)',
                  border: '1px solid rgba(16,185,129,0.3)'
                }}
              >
                <RiWhatsappFill className="w-4 h-4 text-emerald-400" />
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
