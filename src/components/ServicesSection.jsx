import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RiFlashlightFill, 
  RiArrowRightUpLine, 
  RiArrowRightLine,
  RiSearch2Line, 
  RiGraduationCapLine,
  RiFolderSharedLine,
  RiBriefcase4Line,
  RiCodeSSlashLine,
  RiMegaphoneLine,
  RiBuilding3Line,
  RiSparklingFill,
  RiLineChartLine,
  RiCloseLine
} from 'react-icons/ri';
import { brochureContent } from '../data/jvsContent';

const serviceConfig = {
  "01": { icon: RiGraduationCapLine, accent: '#22d3ee', tagBg: 'rgba(34,211,238,0.12)', border: 'rgba(34,211,238,0.35)' },
  "02": { icon: RiFolderSharedLine, accent: '#60a5fa', tagBg: 'rgba(96,165,250,0.12)', border: 'rgba(96,165,250,0.35)' },
  "03": { icon: RiBriefcase4Line, accent: '#34d399', tagBg: 'rgba(52,211,153,0.12)', border: 'rgba(52,211,153,0.35)' },
  "04": { icon: RiCodeSSlashLine, accent: '#818cf8', tagBg: 'rgba(129,140,248,0.12)', border: 'rgba(129,140,248,0.35)' },
  "05": { icon: RiMegaphoneLine, accent: '#f59e0b', tagBg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.35)' },
  "06": { icon: RiBuilding3Line, accent: '#c084fc', tagBg: 'rgba(192,132,252,0.12)', border: 'rgba(192,132,252,0.35)' },
  "07": { icon: RiSparklingFill, accent: '#fb923c', tagBg: 'rgba(251,146,60,0.12)', border: 'rgba(251,146,60,0.35)' },
  "08": { icon: RiLineChartLine, accent: '#38bdf8', tagBg: 'rgba(56,189,248,0.12)', border: 'rgba(56,189,248,0.35)' },
};

const slugMap = {
  "01": "education-training",
  "02": "internships-projects",
  "03": "career-development",
  "04": "technology-innovation",
  "05": "digital-solutions",
  "06": "business-consulting",
  "07": "events-experiences",
  "08": "growth-opportunities",
};

const FILTERS = ['All', 'Training & Careers', 'Technology', 'Business & Growth', 'Events'];

const filterMap = {
  'Training & Careers': ['01', '02', '03'],
  'Technology': ['04', '05'],
  'Business & Growth': ['06', '08'],
  'Events': ['07'],
};

const inView = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function ServicesSection({ onOpenContact }) {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = brochureContent.services.filter(s => {
    const query = searchTerm.toLowerCase();
    const matchesSearch = !query ||
      s.title.toLowerCase().includes(query) ||
      s.summary.toLowerCase().includes(query) ||
      s.tags.some(t => t.toLowerCase().includes(query));
    const matchesFilter = filter === 'All' || filterMap[filter]?.includes(s.number);
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="services" className="relative py-14 sm:py-16 md:py-20 overflow-hidden" style={{ background: '#020509' }}>
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 50% at 80% 30%, rgba(8,145,178,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 20% 80%, rgba(37,99,235,0.08) 0%, transparent 70%)'
      }} />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Header ─── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="space-y-3.5 mb-10"
        >
          <motion.div variants={inView}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{ background: 'rgba(5,15,40,0.9)', border: '1px solid rgba(56,189,248,0.3)', color: '#7dd3fc' }}>
              <RiFlashlightFill className="w-3.5 h-3.5 text-cyan-400" />
              <span>Service Streams</span>
            </div>
          </motion.div>

          <motion.h2 variants={inView} className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
            How We{' '}
            <span style={{
              background: 'linear-gradient(135deg, #38bdf8, #7dd3fc 50%, #818cf8)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>
              Serve
            </span>
          </motion.h2>

          <motion.p variants={inView} className="text-base sm:text-lg max-w-2xl leading-relaxed text-slate-300 font-normal">
            “{brochureContent.brand.howWeServeIntro}”
          </motion.p>

          {/* Search + Filters */}
          <motion.div variants={inView} className="pt-3 flex flex-col md:flex-row items-start md:items-center gap-3">
            <div className="relative">
              <RiSearch2Line className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search services (e.g. Consulting, Tech)..."
                className="pl-10 pr-10 py-2.5 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all w-72"
                style={{
                  background: 'rgba(8,16,40,0.95)',
                  border: '1px solid rgba(56,189,248,0.3)',
                  color: '#ffffff'
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#38bdf8'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)'}
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                  <RiCloseLine className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {FILTERS.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setFilter(opt)}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer"
                  style={{
                    background: filter === opt
                      ? 'linear-gradient(135deg, #1d4ed8, #0891b2)'
                      : 'rgba(8,16,40,0.85)',
                    border: filter === opt
                      ? '1px solid rgba(56,189,248,0.5)'
                      : '1px solid rgba(56,189,248,0.2)',
                    color: filter === opt ? '#ffffff' : '#cbd5e1',
                    boxShadow: filter === opt ? '0 4px 15px -5px rgba(37,99,235,0.5)' : 'none',
                    transform: filter === opt ? 'scale(1.02)' : 'scale(1)'
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ─── Services Grid ─── */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <RiSearch2Line className="w-9 h-9 mx-auto mb-2 opacity-40 text-cyan-400" />
            <p className="text-sm font-medium">No services match your search.</p>
          </div>
        ) : (
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {filtered.map((service) => {
              const config = serviceConfig[service.number] || { 
                icon: RiFlashlightFill, 
                accent: '#38bdf8', 
                tagBg: 'rgba(56,189,248,0.12)', 
                border: 'rgba(56,189,248,0.35)' 
              };
              const ServiceIcon = config.icon;

              return (
                <motion.div
                  key={service.number}
                  variants={inView}
                  className="group relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(145deg, rgba(10,20,50,0.96) 0%, rgba(5,12,32,0.98) 60%, rgba(3,7,20,0.99) 100%)',
                    border: '1px solid rgba(56,189,248,0.2)',
                    boxShadow: '0 15px 35px -15px rgba(0,0,0,0.85)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${config.accent}60`;
                    e.currentTarget.style.boxShadow = `0 20px 45px -15px rgba(0,0,0,0.9), 0 0 25px -10px ${config.accent}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(56,189,248,0.2)';
                    e.currentTarget.style.boxShadow = '0 15px 35px -15px rgba(0,0,0,0.85)';
                  }}
                >
                  <div className="space-y-3.5">
                    {/* Number + Icon */}
                    <div className="flex items-center justify-between pb-2.5 border-b" style={{ borderColor: 'rgba(56,189,248,0.15)' }}>
                      <span
                        className="text-2xl font-bold font-heading tracking-tight"
                        style={{
                          color: config.accent,
                          textShadow: `0 0 15px ${config.accent}30`
                        }}
                      >
                        {service.number}
                      </span>
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                        style={{
                          background: config.tagBg,
                          border: `1px solid ${config.border}`,
                          color: config.accent
                        }}
                      >
                        <ServiceIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-heading font-bold text-base text-white leading-snug tracking-wide group-hover:text-cyan-300 transition-colors"
                    >
                      {service.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {service.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-0.5 rounded-md text-[11px] font-semibold"
                          style={{
                            background: 'rgba(3,8,22,0.9)',
                            border: `1px solid ${config.border}`,
                            color: '#ffffff'
                          }}
                        >
                          <span style={{ color: config.accent }} className="mr-1">•</span>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-200 font-normal pt-1">
                      {service.summary}
                    </p>
                  </div>

                  {/* Footer */}
                  <div 
                    className="pt-4 mt-4 border-t flex items-center justify-between text-xs" 
                    style={{ borderColor: 'rgba(56,189,248,0.15)' }}
                  >
                    <Link
                      to={`/services/${slugMap[service.number] || 'education-training'}`}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Stream</span>
                      <RiArrowRightLine className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={onOpenContact}
                      className="flex items-center gap-1.5 font-semibold text-xs px-2.5 py-1 rounded-lg transition-all cursor-pointer"
                      style={{
                        background: `${config.accent}18`,
                        border: `1px solid ${config.accent}45`,
                        color: config.accent
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = config.accent;
                        e.currentTarget.style.color = '#02050e';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${config.accent}18`;
                        e.currentTarget.style.color = config.accent;
                      }}
                    >
                      <span>Inquire</span>
                      <RiArrowRightUpLine className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Dedicated Services Page Callout Banner */}
        <div className="mt-12 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(8,18,45,0.85) 0%, rgba(3,8,22,0.92) 100%)',
            border: '1px solid rgba(56,189,248,0.2)',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.6)'
          }}
        >
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center justify-center sm:justify-start gap-1.5">
              <RiSparklingFill className="w-3.5 h-3.5" />
              <span>Full Service Directory & Deliverables</span>
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white font-heading">
              Explore All 8 Operational Service Streams & Engagement Methodology
            </h3>
            <p className="text-xs text-slate-300">
              Interactive filter directory, verified curriculum details, corporate deliverables, and proposal requests.
            </p>
          </div>

          <Link
            to="/services"
            className="shine-hover flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white shrink-0 shadow-md transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
          >
            <span>View All 8 Services</span>
            <RiArrowRightLine className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
