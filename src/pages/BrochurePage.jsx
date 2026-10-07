import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  RiFilePaperLine,
  RiDownload2Line,
  RiExternalLinkLine,
  RiPhoneLine,
  RiMailLine,
  RiGlobalLine,
  RiMapPinLine,
  RiDoubleQuotesL,
  RiCheckDoubleLine,
  RiSparklingFill,
  RiBuilding4Line,
  RiArrowLeftLine,
  RiArrowRightLine,
  RiShieldCheckLine,
  RiFileCopyLine,
  RiWhatsappFill,
  RiEyeLine,
  RiCalendarEventLine,
  RiGraduationCapLine,
  RiRocketLine,
  RiCpuLine,
  RiHotelLine,
  RiBookOpenLine
} from 'react-icons/ri';
import { companyData } from '../data/jvsData';
import { brochureContent } from '../data/jvsContent';

const sectorIcons = {
  'event-management': RiCalendarEventLine,
  'career-placements': RiGraduationCapLine,
  'startup-entrepreneurship': RiRocketLine,
  'technology-innovation': RiCpuLine,
  'company-registrations': RiBuilding4Line,
  'hospitality': RiHotelLine
};

export default function BrochurePage({ onOpenBrochure }) {
  const [activePamphletPage, setActivePamphletPage] = useState(1);
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleCopySummary = () => {
    const text = `JVS - Jyoshna's Versatile Stability
Tagline: ${brochureContent.brand.tagline}
Headquarters: ${brochureContent.contact.location}, Andhra Pradesh, India
Phone: ${brochureContent.contact.phone}
Email: ${brochureContent.contact.email}
Website: ${brochureContent.contact.website}
Core Business Verticals: JVS Tech, Jyoora Events, Versatile Academy, VexoBiz, Signature Stays, JVS Corporate Umbrella.`;
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

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

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
              <RiFilePaperLine className="w-3.5 h-3.5 text-cyan-400" />
              <span>Corporate Publication</span>
            </span>

            <h1 className="font-heading font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
              Official Corporate Brochure &{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #7dd3fc 45%, #818cf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Verification Desk
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Explore the verified 2-page pamphlet structure, corporate governance registry, and authenticated service portfolio of Jyoshna's Versatile Stability (JVS).
            </p>

            {/* Direct Action Triggers in Hero */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="/jvs-brochure.pdf"
                download="JVS-Official-Pamphlet.pdf"
                className="shine-hover px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
              >
                <RiDownload2Line className="w-4 h-4 text-cyan-200" />
                <span>Download PDF Brochure (8 MB)</span>
              </a>

              {onOpenBrochure && (
                <button
                  type="button"
                  onClick={onOpenBrochure}
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <RiEyeLine className="w-4 h-4 text-cyan-400" />
                  <span>Open Interactive Reader Modal</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleCopySummary}
                className="px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-950 border border-slate-800 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RiFileCopyLine className="w-4 h-4 text-cyan-400" />
                <span>{copiedSummary ? 'Snapshot Copied!' : 'Copy Summary'}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Corporate Verification Registry Metadata Bar ─── */}
      <section className="relative py-4 border-y border-slate-800 bg-[#030713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Corporate Group</span>
              <span className="font-bold text-white">{brochureContent.brand.fullName}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Official Headquarters</span>
              <span className="font-medium text-cyan-300">{brochureContent.contact.location}, AP, India</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Registry Source</span>
              <span className="font-medium text-emerald-400 flex items-center gap-1">
                <RiShieldCheckLine className="w-3.5 h-3.5" />
                <span>Official 2026 Release</span>
              </span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Group Desk Helpline</span>
              <a href={`tel:${brochureContent.contact.phone}`} className="font-mono text-cyan-400 hover:underline">
                {brochureContent.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Interactive 2-Page Brochure Replica Viewer ─── */}
      <section className="relative py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-500/30">
                2-PAGE REPLICA VIEWER
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-2">
                Official Pamphlet Structure
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Toggle between Page 1 (Identity & Executive Insights) and Page 2 (8 Services & 6 Business Units).
              </p>
            </div>

            {/* Page Flip Switcher */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
              <button
                type="button"
                onClick={() => setActivePamphletPage(1)}
                className="px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
                style={{
                  background: activePamphletPage === 1 ? 'linear-gradient(135deg, #1d4ed8, #0891b2)' : 'transparent',
                  color: activePamphletPage === 1 ? '#ffffff' : '#94a3b8'
                }}
              >
                Page 1: Brand & Executive Insights
              </button>

              <button
                type="button"
                onClick={() => setActivePamphletPage(2)}
                className="px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
                style={{
                  background: activePamphletPage === 2 ? 'linear-gradient(135deg, #1d4ed8, #0891b2)' : 'transparent',
                  color: activePamphletPage === 2 ? '#ffffff' : '#94a3b8'
                }}
              >
                Page 2: Services & Business Verticals
              </button>
            </div>
          </div>

          {/* The Styled Replica Page Container */}
          <div
            className="rounded-3xl p-6 sm:p-10 relative overflow-hidden border"
            style={{
              background: 'linear-gradient(145deg, rgba(8,16,42,0.98) 0%, rgba(3,7,22,0.99) 100%)',
              borderColor: 'rgba(56,189,248,0.25)',
              boxShadow: '0 30px 80px -20px rgba(0,0,0,0.9)'
            }}
          >
            {/* Ambient subtle back glow */}
            <div
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none blur-3xl opacity-20"
              style={{ background: '#38bdf8' }}
            />

            <AnimatePresence mode="wait">
              {activePamphletPage === 1 ? (
                /* PAGE 1 CONTENT */
                <motion.div
                  key="page-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-10"
                >
                  
                  {/* Brand Header */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center font-extrabold text-2xl font-heading shadow-xl"
                        style={{
                          background: 'linear-gradient(135deg, #1d4ed8, #0891b2)',
                          color: '#ffffff'
                        }}
                      >
                        JVS
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-white font-heading">
                          {brochureContent.brand.fullName}
                        </h3>
                        <p className="text-sm font-semibold text-cyan-300">
                          {brochureContent.brand.tagline}
                        </p>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Official Corporate Pamphlet • Page 01
                        </p>
                      </div>
                    </div>

                    <div className="text-left md:text-right space-y-1 text-xs">
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 block md:inline-block">
                        PRIMARY SOURCE OF TRUTH
                      </span>
                      <p className="text-slate-300">{brochureContent.contact.location}, Andhra Pradesh</p>
                    </div>
                  </div>

                  {/* Brand & Purpose Statements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 space-y-2">
                      <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                        About Statement
                      </span>
                      <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                        "{brochureContent.brand.aboutStatement}"
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 space-y-2">
                      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                        Core Purpose
                      </span>
                      <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                        "{brochureContent.brand.purposeStatement}"
                      </p>
                    </div>
                  </div>

                  {/* 6 Core Sectors Grid (Brochure Page 1) */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                        <RiSparklingFill className="w-4 h-4 text-cyan-400" />
                        <span>The 6 Core Sectors (Brochure Page 1)</span>
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Highlighted industry disciplines driving corporate and social impact
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {brochureContent.coreSectors.map((sector) => {
                        const Icon = sectorIcons[sector.id] || RiBuilding4Line;
                        return (
                          <div
                            key={sector.id}
                            className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/90 relative overflow-hidden"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                <Icon className="w-4 h-4" />
                              </div>
                              <span className="text-[10px] font-mono font-medium text-cyan-300 bg-cyan-950/50 px-2 py-0.5 rounded">
                                {sector.category}
                              </span>
                            </div>

                            <h5 className="text-sm font-bold text-white font-heading mb-1.5">
                              {sector.title}
                            </h5>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {sector.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Executive Perspectives Quotes */}
                  <div className="space-y-4 pt-4 border-t border-slate-800">
                    <h4 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                      <RiDoubleQuotesL className="w-5 h-5 text-cyan-400" />
                      <span>Executive Perspectives (Page 1)</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {brochureContent.perspectives.map((persp, idx) => (
                        <div
                          key={idx}
                          className="p-6 rounded-2xl relative border flex flex-col justify-between"
                          style={{
                            background: idx === 0 ? 'rgba(8,20,50,0.85)' : 'rgba(5,24,35,0.85)',
                            borderColor: idx === 0 ? 'rgba(56,189,248,0.3)' : 'rgba(52,211,153,0.3)'
                          }}
                        >
                          <div>
                            <RiDoubleQuotesL className="w-7 h-7 text-cyan-400/40 mb-2" />
                            <p className="text-sm font-medium text-slate-100 italic leading-relaxed">
                              "{persp.quote}"
                            </p>
                          </div>

                          <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-xl font-bold font-heading text-sm flex items-center justify-center"
                              style={{
                                background: idx === 0 ? 'rgba(56,189,248,0.2)' : 'rgba(52,211,153,0.2)',
                                color: idx === 0 ? '#38bdf8' : '#34d399'
                              }}
                            >
                              {persp.initials}
                            </div>
                            <div>
                              <span className="text-sm font-bold text-white block">
                                {persp.name}
                              </span>
                              <span className="text-xs text-cyan-300 font-medium">
                                {persp.designation}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Stamp */}
                  <div className="p-5 rounded-2xl bg-slate-950/90 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                        Official Pamphlet Contact Stamp
                      </span>
                      <p className="text-xs text-slate-300 mt-1">
                        Phone: <strong className="text-white">{brochureContent.contact.phone}</strong> • Email: <strong className="text-white">{brochureContent.contact.email}</strong> • Web: <strong className="text-white">{brochureContent.contact.website}</strong>
                      </p>
                    </div>

                    <Link
                      to="/contact"
                      className="shine-hover px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 shrink-0"
                      style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
                    >
                      <span>Contact Desk</span>
                      <RiArrowRightLine className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </motion.div>
              ) : (
                /* PAGE 2 CONTENT */
                <motion.div
                  key="page-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-10"
                >
                  
                  {/* Page 2 Header */}
                  <div className="pb-6 border-b border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-500/30">
                        BROCHURE PAGE 02: HOW WE SERVE & OUR BUSINESS
                      </span>
                      <span className="text-xs text-slate-400">8 Services • 6 Business Verticals</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-200 font-medium">
                      "{brochureContent.brand.howWeServeIntro}"
                    </p>
                  </div>

                  {/* 8 Services Under "How We Serve" */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                      <RiBookOpenLine className="w-5 h-5 text-cyan-400" />
                      <span>How We Serve — The 8 Service Streams</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {brochureContent.services.map((svc) => (
                        <div
                          key={svc.number}
                          className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center">
                                {svc.number}
                              </span>
                              <div className="flex gap-1 flex-wrap">
                                {svc.tags.slice(0, 2).map((t, ti) => (
                                  <span key={ti} className="text-[10px] text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <h5 className="text-sm font-bold text-white font-heading mb-2">
                              {svc.title}
                            </h5>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {svc.summary}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-800/80">
                            <Link
                              to={`/contact?vertical=${encodeURIComponent(svc.title)}`}
                              className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 flex items-center justify-between"
                            >
                              <span>Consult Service</span>
                              <RiArrowRightLine className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 6 Business Ecosystem Units Under "Our Business" */}
                  <div className="space-y-4 pt-4 border-t border-slate-800">
                    <h4 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                      <RiBuilding4Line className="w-5 h-5 text-cyan-400" />
                      <span>Our Business — The 6 Ecosystem Verticals</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {brochureContent.businessVentures.map((venture) => (
                        <div
                          key={venture.id}
                          className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/80 flex flex-col justify-between"
                        >
                          <div className="h-32 w-full relative overflow-hidden">
                            <img
                              src={venture.image}
                              alt={venture.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020509] via-transparent to-transparent" />
                            <div className="absolute top-2.5 right-2.5">
                              <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950/90 px-2 py-0.5 rounded border border-cyan-500/30">
                                {venture.tagline}
                              </span>
                            </div>
                          </div>

                          <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                            <div>
                              <h5 className="text-base font-bold text-white font-heading">
                                {venture.name}
                              </h5>
                              <p className="text-xs text-cyan-300 font-medium">
                                {venture.subtitle}
                              </p>
                              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                                {venture.description}
                              </p>
                            </div>

                            <div className="pt-2 border-t border-slate-800">
                              <Link
                                to="/pathways"
                                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center justify-between"
                              >
                                <span>Explore Ecosystem Pathway</span>
                                <RiArrowRightLine className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* ─── Download & Direct Connect CTA ─── */}
      <section className="relative py-14 sm:py-20 bg-[#02050f] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div
            className="rounded-3xl p-6 sm:p-10 text-center max-w-3xl mx-auto space-y-6 border"
            style={{
              background: 'linear-gradient(135deg, rgba(8,18,48,0.95) 0%, rgba(2,5,16,0.98) 100%)',
              borderColor: 'rgba(56,189,248,0.3)',
              boxShadow: '0 25px 60px -20px rgba(0,0,0,0.85)'
            }}
          >
            <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 shadow-lg">
              <RiFilePaperLine className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Ready to Collaborate with JVS?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                Download the official corporate brochure PDF for your board, investor presentations, or college institutional review.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="/jvs-brochure.pdf"
                download="JVS-Official-Pamphlet.pdf"
                className="w-full sm:w-auto shine-hover px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-2 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
              >
                <RiDownload2Line className="w-4 h-4" />
                <span>Download PDF Pamphlet</span>
              </a>

              <a
                href={brochureContent.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 flex items-center justify-center gap-2 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}
              >
                <RiWhatsappFill className="w-4 h-4" />
                <span>Instant Chat on WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700 flex items-center justify-center gap-1.5"
              >
                <span>Corporate Contact Desk</span>
                <RiArrowRightLine className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
