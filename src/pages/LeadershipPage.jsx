import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  RiSparklingFill,
  RiDoubleQuotesL,
  RiShieldCheckLine,
  RiCheckDoubleLine,
  RiCompass3Line,
  RiCpuLine,
  RiStackLine,
  RiArrowRightLine,
  RiArrowLeftLine,
  RiFocus2Line,
  RiRocketLine,
  RiBuilding4Line,
  RiGraduationCapLine,
  RiTeamLine,
  RiAwardLine,
  RiGlobalLine,
  RiTimeLine,
  RiPhoneLine,
  RiMailLine
} from 'react-icons/ri';
import { companyData } from '../data/jvsData';
import { brochureContent } from '../data/jvsContent';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function LeadershipPage({ onOpenBrochure }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const jyoshnaData = companyData.leaders[0];
  const vahidData = companyData.leaders[1];

  const governancePrinciples = [
    {
      id: 'transparency',
      title: 'Radical Transparency',
      subtitle: 'Clear Operational Accountability',
      description:
        'Uncompromising openness across student outcomes, client milestones, commercial agreements, and business partnerships.',
      badge: 'Ethical Core',
      icon: RiShieldCheckLine,
      color: '#38bdf8',
      practices: [
        'Open curriculum standards & placement verification',
        'Transparent fee structures with zero hidden charges',
        'Direct executive access for corporate stakeholders'
      ]
    },
    {
      id: 'ethical-scaling',
      title: 'Ethical Scaling',
      subtitle: 'Growth With Structural Integrity',
      description:
        'Growing our footprint across Andhra Pradesh and pan-India without ever sacrificing education quality, code elegance, or regulatory rigor.',
      badge: 'Sustainable Metric',
      icon: RiAwardLine,
      color: '#34d399',
      practices: [
        'Strict statutory compliance for all incubated companies',
        'Quality-vetted engineering workflows and security audits',
        'Controlled student-to-mentor ratios in Versatile Academy'
      ]
    },
    {
      id: 'youth-empowerment',
      title: 'Youth-First Empowerment',
      subtitle: 'Democratizing High-Value Opportunities',
      description:
        'Bridging the critical gap between academic theory and practical enterprise readiness for aspiring engineers, designers, and entrepreneurs.',
      badge: 'Social Impact',
      icon: RiGraduationCapLine,
      color: '#818cf8',
      practices: [
        'Merit-based project sponsorships and mentorship tracks',
        'Direct placement corridors with leading technology firms',
        'Startup incubation grants and company incorporation support'
      ]
    },
    {
      id: 'sustainable-growth',
      title: 'Sustainable Multi-Discipline Growth',
      subtitle: 'Anti-Fragile Ecosystem Design',
      description:
        'Leveraging cross-sector synergies between technology, education, events, and hospitality to build a resilient, long-term business powerhouse.',
      badge: 'Corporate Strategy',
      icon: RiBuilding4Line,
      color: '#f472b6',
      practices: [
        'Cross-vertical knowledge exchange and resource sharing',
        'Diversified revenue engines across 6 business divisions',
        'Reinvestment into regional skill clusters and tech labs'
      ]
    }
  ];

  const pillarsDeepDive = [
    {
      id: 'innovation',
      title: 'Technology & Innovation',
      subtitle: 'Engineering Modern Horizons',
      icon: RiCpuLine,
      accent: '#38bdf8',
      gradient: 'from-blue-600 to-cyan-500',
      description:
        'Innovation is not an afterthought at JVS—it is our primary operating engine. We pioneer progressive web platforms, mobile ecosystems, enterprise software, and AI-enabled toolsets that solve tangible challenges for modern businesses.',
      points: [
        'High-performance full-stack architectures & cloud deployments',
        'Custom enterprise digital engineering for regional and global clients',
        'Hands-on technical curricula continuously updated with industry tech stacks'
      ]
    },
    {
      id: 'vision',
      title: 'Forward-Thinking Vision',
      subtitle: 'Building Beyond Today',
      icon: RiCompass3Line,
      accent: '#34d399',
      gradient: 'from-emerald-500 to-cyan-500',
      description:
        'True leadership anticipates transformations rather than reacting to them. We design sustainable business roadmaps that generate compounding value, creating opportunities that flourish over decades.',
      points: [
        'Long-term ecosystem thinking linking students to global corporate careers',
        'Incubating resilient startups through VexoBiz with robust legal and growth frameworks',
        'Strategic expansion into boutique corporate hospitality with Signature Stays'
      ]
    },
    {
      id: 'versatility',
      title: 'Versatile Stability',
      subtitle: 'Multi-Disciplinary Strength',
      icon: RiStackLine,
      accent: '#a78bfa',
      gradient: 'from-purple-500 to-indigo-500',
      description:
        'The name JVS embodies Versatile Stability: the rare organizational ability to execute flawlessly across disparate domains—from grand event production with Jyoora Events to deep software engineering and educational mentorship.',
      points: [
        '6 synchronized business units operating with unified corporate benchmarks',
        'Anti-fragile portfolio that withstands cyclical market contractions',
        'Shared operational excellence and leadership stewardship across all divisions'
      ]
    }
  ];

  const strategicRoadmap = [
    {
      period: '2026 Q1 - Q2',
      tag: 'Ecosystem Foundation',
      title: 'Digital Platform Scalability & Academic Acceleration',
      milestones: [
        'Rollout of Versatile Academy Next-Gen Student Portal with live project repositories',
        'Automated company registration and compliance pipeline through VexoBiz',
        'Expansion of JVS Tech digital engineering lab in Visakhapatnam'
      ]
    },
    {
      period: '2026 Q3 - Q4',
      tag: 'Regional Expansion',
      title: 'Andhra Pradesh Skill Corridors & Tech Summits',
      milestones: [
        'Inauguration of regional career mentorship hubs in Vijayawada & Vizag IT corridor',
        'Execution of the Annual AP Tech & Innovation Summit powered by Jyoora Events',
        'Placement partnerships signed with 50+ tier-1 and tier-2 IT companies'
      ]
    },
    {
      period: '2027',
      tag: 'Pan-India Footprint',
      title: 'National Enterprise Solutions & Incubation Expansion',
      milestones: [
        'Pan-India recruitment drives placing 2,500+ candidates in emerging technology roles',
        'Scaling VexoBiz to mentor and incubate 100+ high-growth startup ventures',
        'Deployment of proprietary enterprise SaaS products developed by JVS Tech'
      ]
    },
    {
      period: '2028',
      tag: 'Autonomous Venture Studio',
      title: 'Ecosystem Maturity & Signature Stays Pan-India Network',
      milestones: [
        'Launch of JVS Seed Fund for incubated startups graduating from VexoBiz',
        'Expansion of Signature Stays corporate retreat and boutique living spaces across South India',
        'Established as a benchmark multi-disciplinary corporate group originating from coastal AP'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#020509] text-slate-100 relative">
      
      {/* ─── Hero Banner ─── */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
        {/* Ambient Glows */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] pointer-events-none rounded-full blur-[140px] opacity-35"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(34,211,238,0.2) 60%, transparent 80%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <RiArrowLeftLine className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-4"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
                <RiSparklingFill className="w-3.5 h-3.5 text-cyan-400" />
                <span>Executive Stewardship</span>
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight"
            >
              Executive Leadership &{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #7dd3fc 45%, #818cf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Governance
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
            >
              The driving minds behind Jyoshna's Versatile Stability (JVS). Guided by purposeful vision, ethical scaling, and entrepreneurial passion, our executive leadership architects opportunities that empower youth, catalyze startups, and build sustainable enterprises.
            </motion.p>
          </motion.div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-900">
            {[
              { label: 'Executive Directors', value: '2 Visionaries', sub: 'Unified Governance' },
              { label: 'Core Verticals Led', value: '6 Ecosystem Units', sub: 'Cross-Sector Agility' },
              { label: 'Students & Careers', value: '2500+ Mentored', sub: 'Versatile Academy' },
              { label: 'Headquarters Base', value: 'Visakhapatnam', sub: 'Andhra Pradesh 530022' }
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-sm"
              >
                <span className="text-[11px] text-slate-400 block uppercase tracking-wider">{stat.label}</span>
                <span className="text-base sm:text-lg font-bold text-white font-heading mt-0.5 block">{stat.value}</span>
                <span className="text-[11px] text-cyan-400 font-medium">{stat.sub}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Executive Profiles Section ─── */}
      <section className="relative py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-12">
            
            {/* 1. Jyoshna Yellapu Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-6 sm:p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(8,16,42,0.98) 0%, rgba(3,7,22,0.99) 100%)',
                border: '1px solid rgba(56,189,248,0.25)',
                boxShadow: '0 25px 60px -20px rgba(0,0,0,0.85)'
              }}
            >
              {/* Corner Glow */}
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none blur-3xl opacity-20"
                style={{ background: '#38bdf8' }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Avatar / Portrait Column (4 Cols) */}
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
                  <div className="relative group">
                    {/* Glowing border ring */}
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-60 blur-sm group-hover:opacity-90 transition-opacity" />
                    
                    <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden border border-cyan-400/40 bg-slate-900 shadow-2xl">
                      <img
                        src={jyoshnaData.image}
                        alt="Jyoshna Yellapu"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020509] via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute bottom-3 left-3 right-3 text-left">
                        <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                          FOUNDER & MD
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-extrabold text-white font-heading">
                      {jyoshnaData.name}
                    </h2>
                    <p className="text-cyan-400 font-medium text-sm">
                      {jyoshnaData.role}
                    </p>
                    <span className="inline-block mt-1 text-[11px] text-slate-400 bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-slate-800">
                      {jyoshnaData.badge}
                    </span>
                  </div>
                </div>

                {/* Details & Quote Column (8 Cols) */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* Executive Vision Quote */}
                  <div
                    className="p-5 sm:p-6 rounded-2xl relative border"
                    style={{
                      background: 'rgba(6,18,48,0.8)',
                      borderColor: 'rgba(56,189,248,0.3)',
                      boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                    }}
                  >
                    <RiDoubleQuotesL className="w-8 h-8 text-cyan-400/50 mb-2" />
                    <blockquote className="text-base sm:text-lg font-medium text-slate-100 italic leading-relaxed">
                      "{jyoshnaData.quote}"
                    </blockquote>
                    <p className="mt-3 text-xs text-cyan-300 font-semibold tracking-wide">
                      — Jyoshna Yellapu, Managing Director of JVS
                    </p>
                  </div>

                  {/* Comprehensive Bio */}
                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      As the Managing Director of JVS (Jyoshna's Versatile Stability), Jyoshna Yellapu spearheads cross-sector initiatives spanning education, technological engineering, experiential events, and creative venture scaling with a steadfast commitment to high standards and sustainable growth.
                    </p>
                    <p>
                      Under her leadership, JVS has established itself as an integrated growth platform rooted in coastal Andhra Pradesh with pan-India ambitions. She believes in instilling practical confidence in students through Versatile Academy, enabling tech founders, and orchestrating cultural summits that leave a lasting imprint.
                    </p>
                  </div>

                  {/* Governance Focus Areas */}
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <RiFocus2Line className="w-4 h-4 text-cyan-400" />
                      <span>Key Governance Focus Areas</span>
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {jyoshnaData.focusAreas.map((area, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 text-center"
                        >
                          <RiCheckDoubleLine className="w-3.5 h-3.5 text-cyan-400 mx-auto mb-1" />
                          <span className="text-xs font-semibold text-slate-200 block">
                            {area}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Executive Action CTA */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Link
                      to="/contact"
                      className="shine-hover px-4 py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 shadow-md"
                      style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
                    >
                      <span>Connect with MD Office</span>
                      <RiArrowRightLine className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      type="button"
                      onClick={onOpenBrochure}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 transition-colors"
                    >
                      View Executive Pamphlet
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>

            {/* 2. Vahid Shaik Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-6 sm:p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(8,16,42,0.98) 0%, rgba(3,7,22,0.99) 100%)',
                border: '1px solid rgba(52,211,153,0.25)',
                boxShadow: '0 25px 60px -20px rgba(0,0,0,0.85)'
              }}
            >
              {/* Corner Glow */}
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none blur-3xl opacity-20"
                style={{ background: '#34d399' }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Avatar / Portrait Column (4 Cols) */}
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
                  <div className="relative group">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-60 blur-sm group-hover:opacity-90 transition-opacity" />
                    
                    <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden border border-emerald-400/40 bg-slate-900 shadow-2xl">
                      <img
                        src={vahidData.image}
                        alt="Vahid Shaik"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020509] via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute bottom-3 left-3 right-3 text-left">
                        <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                          MD • VEXOBIZ
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-extrabold text-white font-heading">
                      {vahidData.name}
                    </h2>
                    <p className="text-emerald-400 font-medium text-sm">
                      {vahidData.role}
                    </p>
                    <span className="inline-block mt-1 text-[11px] text-slate-400 bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-slate-800">
                      {vahidData.badge}
                    </span>
                  </div>
                </div>

                {/* Details & Quote Column (8 Cols) */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* Executive Vision Quote */}
                  <div
                    className="p-5 sm:p-6 rounded-2xl relative border"
                    style={{
                      background: 'rgba(5,24,35,0.8)',
                      borderColor: 'rgba(52,211,153,0.3)',
                      boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                    }}
                  >
                    <RiDoubleQuotesL className="w-8 h-8 text-emerald-400/50 mb-2" />
                    <blockquote className="text-base sm:text-lg font-medium text-slate-100 italic leading-relaxed">
                      "{vahidData.quote}"
                    </blockquote>
                    <p className="mt-3 text-xs text-emerald-300 font-semibold tracking-wide">
                      — Vahid Shaik, Managing Director of VexoBiz
                    </p>
                  </div>

                  {/* Comprehensive Bio */}
                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      Leading VexoBiz under the JVS umbrella, Vahid Shaik champions entrepreneurial acceleration, transforming nascent concepts into sustainable, high-impact enterprises through strategic advisory, legal structuring, and commercial scale.
                    </p>
                    <p>
                      With extensive expertise across company incorporations (Pvt Ltd, LLP, MSME), compliance roadmaps, financial structuring, and product-market fit, Vahid guides aspiring and seasoned founders past operational pitfalls so they can scale with confidence and credibility.
                    </p>
                  </div>

                  {/* Governance Focus Areas */}
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <RiFocus2Line className="w-4 h-4 text-emerald-400" />
                      <span>Incubation & Scale Focus Areas</span>
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {vahidData.focusAreas.map((area, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 text-center"
                        >
                          <RiCheckDoubleLine className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
                          <span className="text-xs font-semibold text-slate-200 block">
                            {area}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Executive Action CTA */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Link
                      to="/contact"
                      className="shine-hover px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 flex items-center gap-1.5 shadow-md"
                      style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}
                    >
                      <span>Consult with VexoBiz</span>
                      <RiArrowRightLine className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={brochureContent.contact.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 transition-colors"
                    >
                      Fast-Track Startup Intake
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── Corporate Governance Principles (4 Core Pillars) ─── */}
      <section className="relative py-14 sm:py-20 bg-[#030613] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
              <RiShieldCheckLine className="w-3.5 h-3.5 text-cyan-400" />
              <span>Institutional Rigor</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading">
              Corporate Governance Principles
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              JVS is built upon rigorous operating standards ensuring ethics, trust, and quality remain inviolable as our ventures scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {governancePrinciples.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl p-6 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, rgba(8,16,42,0.9) 0%, rgba(3,8,24,0.95) 100%)',
                    border: '1px solid rgba(56,189,248,0.18)',
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.6)'
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}40`,
                        color: item.color
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                      style={{
                        background: `${item.color}15`,
                        color: item.color,
                        border: `1px solid ${item.color}35`
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading">{item.title}</h3>
                  <p className="text-xs text-cyan-300 font-medium mb-2">{item.subtitle}</p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Enforced Operational Safeguards:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {item.practices.map((practice, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          <span>{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── The 3 Pillars Deep Dive ─── */}
      <section className="relative py-14 sm:py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
              <RiStackLine className="w-3.5 h-3.5 text-cyan-400" />
              <span>Foundation of JVS</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading">
              The Three Strategic Pillars
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every vertical under Jyoshna's Versatile Stability is anchored in these three core philosophies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillarsDeepDive.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between"
                  style={{
                    background: 'linear-gradient(145deg, rgba(8,16,42,0.95) 0%, rgba(3,7,22,0.98) 100%)',
                    border: '1px solid rgba(56,189,248,0.2)',
                    boxShadow: '0 15px 35px -15px rgba(0,0,0,0.7)'
                  }}
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{
                        background: `${pillar.accent}15`,
                        border: `1px solid ${pillar.accent}40`,
                        color: pillar.accent
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-white font-heading">{pillar.title}</h3>
                    <p className="text-xs text-cyan-300 font-medium mb-3">{pillar.subtitle}</p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Implementation Anchors:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {pillar.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── Strategic Roadmap 2026 - 2028 ─── */}
      <section className="relative py-14 sm:py-20 bg-[#02050f] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
              <RiTimeLine className="w-3.5 h-3.5 text-cyan-400" />
              <span>Forward Horizon</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading">
              Strategic Roadmap 2026 – 2028
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our targeted milestones across technology innovation, academic centers, and geographic presence across Andhra Pradesh and pan-India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {strategicRoadmap.map((stage, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(145deg, rgba(7,15,38,0.95) 0%, rgba(2,6,18,0.98) 100%)',
                  border: '1px solid rgba(56,189,248,0.2)',
                  boxShadow: '0 12px 30px -12px rgba(0,0,0,0.7)'
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-500/30">
                      {stage.period}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-emerald-400 block mb-1">
                    {stage.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white font-heading mb-4">
                    {stage.title}
                  </h3>

                  <ul className="space-y-2 text-xs text-slate-300">
                    {stage.milestones.map((m, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] text-cyan-300 font-medium">
                  Verified Executive Target
                </div>
              </div>
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div
            className="mt-14 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
              background: 'linear-gradient(135deg, rgba(8,18,48,0.9) 0%, rgba(2,5,16,0.95) 100%)',
              border: '1px solid rgba(56,189,248,0.3)',
              boxShadow: '0 20px 50px -15px rgba(0,0,0,0.8)'
            }}
          >
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                Schedule a Consultation with JVS Leadership
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Interested in strategic enterprise collaborations, institutional memorandums of understanding (MoUs), or founder incubation? Connect directly with the Managing Director's office.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="shine-hover px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center gap-2 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
              >
                <span>Initiate Executive Consultation</span>
                <RiArrowRightLine className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
