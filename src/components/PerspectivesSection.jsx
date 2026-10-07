import React from 'react';
import { motion } from 'framer-motion';
import { 
  RiDoubleQuotesL, 
  RiShieldCheckLine, 
  RiBuilding4Line,
  RiRocketLine
} from 'react-icons/ri';
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function PerspectivesSection() {
  return (
    <section id="perspective" className="relative py-14 sm:py-16 md:py-20 overflow-hidden" style={{ background: '#020509' }}>
      
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-x-1/2 w-[450px] h-[450px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[450px] h-[450px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)' }}
      />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-3xl space-y-3.5 mb-10 sm:mb-12"
        >
          <motion.div variants={itemVariants}>
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{ background: 'rgba(5,15,40,0.9)', border: '1px solid rgba(56,189,248,0.3)', color: '#7dd3fc' }}
            >
              <RiDoubleQuotesL className="w-3.5 h-3.5 text-cyan-400" />
              <span>Executive Insights</span>
            </div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight"
          >
            Our{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, #38bdf8, #7dd3fc 50%, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Perspective
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
            Guiding leadership principles and perspectives directly from the official JVS brochure.
          </motion.p>
        </motion.div>

        {/* 2 Leadership Quote Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
        >
          {brochureContent.perspectives.map((persp, idx) => {
            const isFirst = idx === 0;
            const accentColor = isFirst ? '#22d3ee' : '#34d399';
            const OrgIcon = isFirst ? RiBuilding4Line : RiRocketLine;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative rounded-2xl p-7 sm:p-10 flex flex-col justify-between overflow-hidden transition-all duration-400 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(145deg, rgba(8,16,40,0.96) 0%, rgba(5,10,26,0.98) 60%, rgba(2,5,15,0.99) 100%)',
                  border: '1px solid rgba(56,189,248,0.2)',
                  boxShadow: '0 20px 45px -15px rgba(0,0,0,0.85)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${accentColor}50`;
                  e.currentTarget.style.boxShadow = `0 25px 60px -15px rgba(0,0,0,0.9), 0 0 35px -10px ${accentColor}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(56,189,248,0.2)';
                  e.currentTarget.style.boxShadow = '0 20px 45px -15px rgba(0,0,0,0.85)';
                }}
              >
                {/* Background ambient quotation watermark */}
                <div 
                  className="absolute top-5 right-5 transition-all duration-400 pointer-events-none opacity-10 group-hover:opacity-15"
                  style={{ color: accentColor }}
                >
                  <RiDoubleQuotesL className="w-24 h-24" />
                </div>

                {/* Top Accents */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
                      style={{
                        background: `${accentColor}12`,
                        border: `1px solid ${accentColor}35`,
                        color: accentColor
                      }}
                    >
                      <OrgIcon className="w-3.5 h-3.5" />
                      <span>{isFirst ? 'JVS Leadership' : 'VexoBiz Leadership'}</span>
                    </span>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <RiShieldCheckLine className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-[11px] text-slate-400 font-medium">Brochure Quote</span>
                    </div>
                  </div>

                  {/* Editorial Quote */}
                  <blockquote className="text-lg sm:text-xl lg:text-2xl font-normal text-slate-100 leading-relaxed italic font-heading pt-1">
                    “{persp.quote}”
                  </blockquote>
                </div>

                {/* Attribution Bar */}
                <div 
                  className="pt-6 mt-6 border-t flex items-center justify-between relative z-10"
                  style={{ borderColor: 'rgba(56,189,248,0.15)' }}
                >
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-heading tracking-wide">
                      {persp.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium mt-0.5" style={{ color: accentColor }}>
                      {persp.designation}
                    </p>
                  </div>

                  {/* Monogram Badge */}
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-xs font-heading"
                    style={{
                      background: `linear-gradient(135deg, ${accentColor}25, rgba(37,99,235,0.25))`,
                      border: `1px solid ${accentColor}40`,
                      color: accentColor
                    }}
                  >
                    {persp.initials}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
