import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RiArrowRightLine, 
  RiArrowRightUpLine, 
  RiFilePaperLine, 
  RiGraduationCapLine, 
  RiCpuLine, 
  RiCalendarEventLine, 
  RiRocketLine, 
  RiBuilding4Line, 
  RiHotelLine,
  RiMapPin2Line,
  RiPhoneLine,
  RiStarFill,
  RiShieldCheckFill,
  RiFlashlightFill,
  RiSparklingFill,
  RiCheckboxCircleFill
} from 'react-icons/ri';
import { brochureContent } from '../data/jvsContent';

// Animation variants
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

export default function Hero({ onOpenBrochure }) {
  const [activeNode, setActiveNode] = useState(0);
  const [typedText, setTypedText] = useState('');
  
  const taglines = [
    'Education & Training', 
    'Technology & Innovation', 
    'Events & Experiences', 
    'Business & Consulting', 
    'Career Development', 
    'Growth & Opportunities'
  ];
  
  const taglineRef = useRef(0);
  const charRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const type = () => {
      const current = taglines[taglineRef.current];
      if (charRef.current <= current.length) {
        setTypedText(current.slice(0, charRef.current));
        charRef.current++;
        timerRef.current = setTimeout(type, 55);
      } else {
        timerRef.current = setTimeout(() => {
          charRef.current = 0;
          taglineRef.current = (taglineRef.current + 1) % taglines.length;
          type();
        }, 2000);
      }
    };
    type();
    return () => clearTimeout(timerRef.current);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const nodes = [
    { title: 'Versatile Academy', sub: 'Education & Skills', icon: RiGraduationCapLine, accent: '#22d3ee', tag: 'Edu-Tech' },
    { title: 'JVS Tech', sub: 'Software & Web Apps', icon: RiCpuLine, accent: '#60a5fa', tag: 'Engineering' },
    { title: 'Jyoora Events', sub: 'Conferences & Stage', icon: RiCalendarEventLine, accent: '#f59e0b', tag: 'Production' },
    { title: 'VexoBiz', sub: 'Startup Incubation', icon: RiRocketLine, accent: '#34d399', tag: 'Incubation' },
    { title: 'Company Reg.', sub: 'Legal & Consulting', icon: RiBuilding4Line, accent: '#818cf8', tag: 'Corporate' },
    { title: 'Signature Stays', sub: 'Hospitality & Stays', icon: RiHotelLine, accent: '#c084fc', tag: 'Hospitality' },
  ];

  const activeVenture = brochureContent.businessVentures[activeNode];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-28 lg:pb-20"
      style={{ background: '#020509' }}
    >
      {/* ─── Layered Ambient Lighting (Clean & Non-distracting) ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[450px] rounded-full blur-[140px] opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.4) 0%, rgba(34,211,238,0.2) 60%, transparent 80%)' }}
        />
        <div
          className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full blur-[160px] opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.3) 0%, rgba(99,102,241,0.2) 70%, transparent 80%)' }}
        />
      </div>

      {/* Subtle modern cyber mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.04) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 70%, transparent 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ─── LEFT: Editorial Corporate Hero (7 Cols) ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* 1. Status Radar Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center justify-center lg:justify-start">
              <div
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-xs font-bold tracking-wide backdrop-blur-xl shadow-lg transition-transform hover:scale-105"
                style={{
                  background: 'rgba(8,16,40,0.92)',
                  borderColor: 'rgba(56,189,248,0.35)',
                  boxShadow: '0 4px 20px -5px rgba(34,211,238,0.3)'
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="text-white font-extrabold uppercase tracking-widest text-[11px]">JVS Corporate</span>
                <span className="text-slate-500">•</span>
                <RiMapPin2Line className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-cyan-300 font-semibold">Visakhapatnam, PIN 530022</span>
              </div>
            </motion.div>

            {/* 2. Main Impact Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="font-heading font-bold text-white leading-[1.08] tracking-tight">
                <span className="block text-4xl sm:text-5xl lg:text-[58px]">
                  Driving Success
                </span>
                <span 
                  className="block text-4xl sm:text-5xl lg:text-[58px]"
                  style={{
                    background: 'linear-gradient(90deg, #38bdf8 0%, #7dd3fc 35%, #818cf8 70%, #38bdf8 100%)',
                    backgroundSize: '250% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradient-x 6s ease infinite'
                  }}
                >
                  Through Innovation,
                </span>
              </h1>

              {/* Dynamic Typewriter Line */}
              <div className="h-11 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-2xl sm:text-3xl lg:text-[34px] font-heading font-bold text-white flex items-center">
                  <span className="text-slate-400 mr-2 font-normal">Focus on</span>
                  <span 
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #a5f3fc 60%, #38bdf8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {typedText}
                  </span>
                  <span 
                    className="ml-1 inline-block w-0.5 h-6 bg-cyan-400 animate-pulse"
                  />
                </span>
              </div>
            </motion.div>

            {/* 3. Official Brand Label */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                Official Entity
              </span>
              <p className="text-sm sm:text-base font-semibold text-white tracking-wide">
                JVS — <span className="text-slate-300 font-normal">Jyoshna's Versatile Stability</span>
              </p>
            </motion.div>

            {/* 4. Brochure Description */}
            <motion.p 
              variants={itemVariants} 
              className="text-base sm:text-lg leading-relaxed text-slate-200 font-normal max-w-2xl mx-auto lg:mx-0"
            >
              A growing business group driven by <strong className="text-white font-semibold">innovation</strong>, <strong className="text-white font-semibold">vision</strong>, and <strong className="text-white font-semibold">versatility</strong>. We create and develop ventures designed to bring value, opportunity, and lasting growth across multiple sectors.
            </motion.p>

            {/* 5. CTAs */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('services')}
                className="shine-hover group flex items-center gap-2.5 px-8 py-4 rounded-2xl text-xs sm:text-sm font-bold text-white shadow-xl transition-all"
                style={{
                  background: 'linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)',
                  boxShadow: '0 8px 32px -8px rgba(37,99,235,0.6)'
                }}
              >
                <RiFlashlightFill className="w-4 h-4 text-cyan-300" />
                <span>Explore Our Services</span>
                <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold text-white transition-all"
                style={{
                  background: 'rgba(8,16,40,0.85)',
                  border: '1px solid rgba(56,189,248,0.3)',
                  boxShadow: '0 4px 20px -5px rgba(0,0,0,0.6)'
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
                <span>Get in Touch</span>
                <RiArrowRightUpLine className="w-4 h-4 text-cyan-400" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBrochure}
                className="flex items-center gap-2 px-5 py-4 rounded-2xl text-xs font-bold text-cyan-300 transition-all"
                style={{
                  background: 'rgba(8,20,50,0.7)',
                  border: '1px solid rgba(34,211,238,0.3)'
                }}
              >
                <RiFilePaperLine className="w-4 h-4 text-cyan-400" />
                <span>Brochure</span>
              </motion.button>
            </motion.div>

            {/* 6. Proof Strip */}
            <motion.div 
              variants={itemVariants} 
              className="pt-6 border-t flex flex-wrap items-center justify-center lg:justify-start gap-6"
              style={{ borderColor: 'rgba(56,189,248,0.18)' }}
            >
              <div className="flex items-center gap-2">
                <RiCheckboxCircleFill className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">6 Business Verticals</span>
              </div>
              <div className="flex items-center gap-2">
                <RiShieldCheckFill className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">8 Integrated Streams</span>
              </div>
              <div className="flex items-center gap-2">
                <RiStarFill className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">100% Brochure Verified</span>
              </div>
            </motion.div>

          </motion.div>

          {/* ─── RIGHT: Figma-Grade Interactive Bento Ecosystem Terminal (5 Cols) ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing Backdrop Aura */}
            <div 
              className="absolute -inset-2 rounded-3xl pointer-events-none opacity-40 blur-xl animate-pulse-glow"
              style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.4), rgba(34,211,238,0.3))' }}
            />

            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(145deg, rgba(10,20,50,0.96) 0%, rgba(5,12,32,0.98) 60%, rgba(3,7,20,0.99) 100%)',
                border: '1px solid rgba(56,189,248,0.3)',
                boxShadow: '0 30px 70px -20px rgba(0,0,0,0.9), 0 0 50px -10px rgba(34,211,238,0.15)'
              }}
            >
              {/* Terminal Title Bar */}
              <div 
                className="flex items-center justify-between px-6 py-4 border-b"
                style={{ borderColor: 'rgba(56,189,248,0.18)', background: 'rgba(5,12,30,0.9)' }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-black font-heading text-sm text-cyan-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(37,99,235,0.25), rgba(34,211,238,0.25))',
                      border: '1px solid rgba(56,189,248,0.4)'
                    }}
                  >
                    JVS
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-heading">Ecosystem Matrix</h3>
                    <p className="text-[11px] text-cyan-400 font-medium">Jyoshna's Versatile Stability</p>
                  </div>
                </div>

                <div 
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold"
                  style={{
                    background: 'rgba(16,185,129,0.15)',
                    border: '1px solid rgba(16,185,129,0.4)',
                    color: '#34d399'
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>6 Live Units</span>
                </div>
              </div>

              {/* 6 Interactive Unit Buttons */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                    Integrated Verticals
                  </span>
                  <span className="text-[11px] text-slate-300 font-semibold">Click to inspect</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {nodes.map((node, idx) => {
                    const NodeIcon = node.icon;
                    const isSelected = activeNode === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveNode(idx)}
                        className="p-3 rounded-2xl border text-left transition-all duration-300 group cursor-pointer"
                        style={{
                          background: isSelected
                            ? 'linear-gradient(135deg, rgba(12,28,70,0.98), rgba(6,16,42,0.98))'
                            : 'rgba(8,16,40,0.8)',
                          borderColor: isSelected ? node.accent : 'rgba(56,189,248,0.18)',
                          boxShadow: isSelected ? `0 0 20px -5px ${node.accent}40` : 'none',
                          transform: isSelected ? 'scale(1.02)' : 'scale(1)'
                        }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <NodeIcon className="w-4 h-4" style={{ color: node.accent }} />
                          <span 
                            className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                            style={{ background: 'rgba(0,0,0,0.6)', color: isSelected ? node.accent : '#94a3b8' }}
                          >
                            0{idx + 1}
                          </span>
                        </div>
                        <p className="text-xs font-bold text-white font-heading truncate">
                          {node.title}
                        </p>
                        <p className="text-[10px] font-semibold truncate mt-0.5" style={{ color: node.accent }}>
                          {node.sub}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Active Node Live Inspector */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNode}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="p-4 rounded-2xl space-y-2 border"
                    style={{
                      background: 'rgba(6,14,34,0.92)',
                      borderColor: 'rgba(56,189,248,0.3)'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white font-heading flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ background: nodes[activeNode].accent }}></span>
                        <span>{nodes[activeNode].title}</span>
                      </span>
                      <span 
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: `${nodes[activeNode].accent}20`,
                          border: `1px solid ${nodes[activeNode].accent}40`,
                          color: nodes[activeNode].accent
                        }}
                      >
                        {nodes[activeNode].tag}
                      </span>
                    </div>

                    <p className="text-xs leading-relaxed text-slate-200 font-normal">
                      {activeVenture?.description || "Integrated corporate vertical powering forward-looking business solutions."}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Terminal Quick Footer */}
                <div 
                  className="pt-3 border-t flex items-center justify-between text-xs" 
                  style={{ borderColor: 'rgba(56,189,248,0.18)' }}
                >
                  <div className="flex items-center gap-2">
                    <RiPhoneLine className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-xs font-bold text-white">{brochureContent.contact.phone}</span>
                  </div>
                  <button
                    onClick={() => scrollTo('business')}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>View All Units</span>
                    <RiArrowRightLine className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
