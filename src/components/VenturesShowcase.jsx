import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RiSparklingFill, 
  RiArrowRightUpLine,
  RiArrowRightLine, 
  RiGraduationCapLine, 
  RiCpuLine, 
  RiCalendarEventLine, 
  RiRocketLine, 
  RiBuilding4Line, 
  RiHotelLine
} from 'react-icons/ri';
import { brochureContent } from '../data/jvsContent';

const ventureConfig = [
  { icon: RiGraduationCapLine, accent: '#22d3ee', tag: 'Education' },
  { icon: RiCpuLine, accent: '#60a5fa', tag: 'Technology' },
  { icon: RiCalendarEventLine, accent: '#f59e0b', tag: 'Events' },
  { icon: RiRocketLine, accent: '#34d399', tag: 'Startup' },
  { icon: RiBuilding4Line, accent: '#818cf8', tag: 'Consulting' },
  { icon: RiHotelLine, accent: '#c084fc', tag: 'Hospitality' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function VenturesShowcase({ onOpenContact }) {
  return (
    <section id="business" className="relative py-14 sm:py-16 md:py-20 overflow-hidden" style={{ background: '#030610' }}>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 20% 40%, rgba(37,99,235,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(8,145,178,0.06) 0%, transparent 60%)'
      }} />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Header ─── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-3xl space-y-3.5 mb-10 sm:mb-12"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{ background: 'rgba(5,15,40,0.9)', border: '1px solid rgba(56,189,248,0.3)', color: '#7dd3fc' }}>
              <RiSparklingFill className="w-3.5 h-3.5 text-cyan-400" />
              <span>Group Portfolio</span>
            </div>
          </motion.div>
          <motion.h2 variants={itemVariants} className="font-heading font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em' }}>
            Our{' '}
            <span style={{
              background: 'linear-gradient(135deg, #38bdf8, #7dd3fc 50%, #818cf8)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>
              Business
            </span>
          </motion.h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            6 core business verticals delivering excellence across education, technology, events, startup incubation, and hospitality under the JVS umbrella.
          </p>
        </motion.div>

        {/* ─── Grid ─── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {brochureContent.businessVentures.map((venture, idx) => {
            const config = ventureConfig[idx % ventureConfig.length];
            const VentureIcon = config.icon;

            return (
              <motion.div
                key={venture.id}
                variants={itemVariants}
                className="group rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(145deg, rgba(8,16,40,0.95) 0%, rgba(5,10,26,0.98) 100%)',
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
                {/* Image banner */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={venture.image}
                    alt={venture.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(8,16,40,1) 0%, rgba(8,16,40,0.4) 60%, transparent 100%)'
                    }}
                  />

                  {/* Top tag */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span
                      className="px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md"
                      style={{
                        background: 'rgba(2,5,16,0.9)',
                        border: `1px solid ${config.accent}50`,
                        color: '#ffffff'
                      }}
                    >
                      <span style={{ color: config.accent }} className="mr-1">•</span>
                      {config.tag}
                    </span>
                  </div>

                  {/* Bottom-right icon */}
                  <div
                    className="absolute bottom-3.5 right-3.5 w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                    style={{
                      background: `${config.accent}20`,
                      border: `1px solid ${config.accent}40`,
                      color: config.accent
                    }}
                  >
                    <VentureIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 space-y-3">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white transition-colors group-hover:text-cyan-300">
                      {venture.name}
                    </h3>
                    <p className="text-xs font-semibold mt-0.5" style={{ color: config.accent }}>
                      {venture.subtitle}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed flex-1 text-slate-200 font-normal">
                    {venture.description}
                  </p>

                  {/* Footer */}
                  <div className="pt-3.5 border-t flex items-center justify-between text-xs" style={{ borderColor: 'rgba(56,189,248,0.15)' }}>
                    <Link
                      to={`/business/${venture.id}`}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Profile</span>
                      <RiArrowRightLine className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={onOpenContact}
                      className="flex items-center gap-1.5 font-semibold transition-all px-3 py-1 rounded-lg cursor-pointer"
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
                      <span>Connect</span>
                      <RiArrowRightUpLine className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dedicated Business Page Callout Banner */}
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
              <span>Full Group Ecosystem Showcase</span>
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white font-heading">
              Explore All 6 Business Pillars, Synergies & Venture Case Studies
            </h3>
            <p className="text-xs text-slate-300">
              Interactive filters, group growth matrix, leadership alignments, and deep-dive vertical portals.
            </p>
          </div>

          <Link
            to="/business"
            className="shine-hover flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white shrink-0 shadow-md transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
          >
            <span>View All Business Verticals</span>
            <RiArrowRightLine className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
