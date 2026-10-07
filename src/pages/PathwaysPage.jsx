import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  RiUserStarLine,
  RiRocketLine,
  RiBuilding4Line,
  RiHotelLine,
  RiSparklingFill,
  RiCheckDoubleLine,
  RiArrowRightLine,
  RiArrowLeftLine,
  RiCompass3Line,
  RiFolderSharedLine,
  RiGraduationCapLine,
  RiBriefcaseLine,
  RiCpuLine,
  RiTimeLine,
  RiShieldCheckLine,
  RiExternalLinkLine,
  RiWhatsappFill,
  RiCheckboxCircleFill
} from 'react-icons/ri';
import { companyData } from '../data/jvsData';
import { brochureContent } from '../data/jvsContent';

const personaIcons = {
  0: RiGraduationCapLine,
  1: RiRocketLine,
  2: RiBuilding4Line,
  3: RiHotelLine
};

const personaAccents = [
  { color: '#38bdf8', glow: 'rgba(56,189,248,0.2)', border: 'rgba(56,189,248,0.35)' },
  { color: '#34d399', glow: 'rgba(52,211,153,0.2)', border: 'rgba(52,211,153,0.35)' },
  { color: '#818cf8', glow: 'rgba(129,140,248,0.2)', border: 'rgba(129,140,248,0.35)' },
  { color: '#f472b6', glow: 'rgba(244,114,182,0.2)', border: 'rgba(244,114,182,0.35)' }
];

// Rich personas dataset expanding on companyData.ecosystemPathways
const personasDetailed = [
  {
    index: 0,
    persona: 'Students & Job Seekers',
    roleTag: 'Career Acceleration Pathway',
    title: 'From Academic Theory to High-Earning Tech Careers',
    subtitle: 'Comprehensive training, verified capstone projects, and direct hiring corridors via Versatile Academy.',
    targetAudience: 'Engineering Graduates, MCA/BCA Students, Career Switchers, Self-taught Coders',
    primaryVertical: 'Versatile Academy (JVS Education)',
    icon: RiGraduationCapLine,
    ctaText: 'Enrol in Versatile Academy',
    contactVertical: 'Education & Academy',
    metrics: [
      { label: 'Placement Corridor', value: '2500+ Placed' },
      { label: 'Typical Program Duration', value: '3 - 6 Months' },
      { label: 'Practical Project Sprints', value: '4+ Live Apps' },
      { label: 'Mentor Availability', value: '1-on-1 Weekly' }
    ],
    stepsDetailed: [
      {
        step: 1,
        title: 'Diagnostic Evaluation & Curriculum Enrolment',
        timeline: 'Week 1 - 2',
        description: 'Comprehensive evaluation of coding fundamentals and career aspirations, mapping you to Full Stack (MERN / Python / Java), Data, or Cloud pipelines.',
        outcome: 'Personalized learning syllabus and cohort onboarding with senior industry instructors.'
      },
      {
        step: 2,
        title: 'Real-World Capstone Project Architecture',
        timeline: 'Month 1 - 3',
        description: 'Building production-grade digital software under sprint constraints, utilizing Git workflows, clean code architecture, and automated tests.',
        outcome: 'Live deployed GitHub repositories and verifiable portfolio applications showcasing actual skills.'
      },
      {
        step: 3,
        title: 'ATS Resume Overhaul & Mock Technical Drills',
        timeline: 'Month 4',
        description: 'One-on-one technical whiteboard drill sessions, system design reviews, HR behavioral coaching, and algorithmic mastery.',
        outcome: 'ATS-optimized resume, revamped LinkedIn presence, and confidence in high-stakes interviews.'
      },
      {
        step: 4,
        title: 'Corporate Placement Matching & Onboarding',
        timeline: 'Month 5 - 6',
        description: 'Direct referrals to JVS corporate hiring partners across Visakhapatnam, Hyderabad, Bangalore, and pan-India.',
        outcome: 'Offer letters, compensation negotiation mentorship, and smooth corporate onboarding.'
      }
    ],
    recommendedServiceIds: ['education-training', 'internships-projects', 'career-development'],
    whyJVS: [
      'Learn directly from practitioners who write production enterprise code daily.',
      'Verified experience credentials recognized by hiring managers across tier-1 software companies.',
      'Lifelong alumni ecosystem with continuous career upskilling resources.'
    ]
  },
  {
    index: 1,
    persona: 'Startup Founders & Entrepreneurs',
    roleTag: 'Incubation & Scaling Pathway',
    title: 'Transform Nascent Concepts into Sustainable Enterprises',
    subtitle: 'Fast-track company registrations, bulletproof legal compliance, modern tech stacks, and venture advisory via VexoBiz.',
    targetAudience: 'First-time Founders, Bootstrapped Tech Teams, MSME Business Owners',
    primaryVertical: 'VexoBiz (JVS Startup Incubation)',
    icon: RiRocketLine,
    ctaText: 'Incubate with VexoBiz',
    contactVertical: 'Startup Incubation',
    metrics: [
      { label: 'Ventures Supported', value: '50+ Incubated' },
      { label: 'Incorporation Speed', value: '7 - 14 Days' },
      { label: 'Statutory Compliance', value: '100% Guaranteed' },
      { label: 'Advisory Access', value: 'Direct MD Level' }
    ],
    stepsDetailed: [
      {
        step: 1,
        title: 'Legal Incorporation & Statutory Structuring',
        timeline: 'Week 1 - 2',
        description: 'End-to-end company registration (Pvt Ltd, LLP, OPC, Section 8, MSME), DSC, DIN, PAN, TAN, GST, and bank account setup.',
        outcome: 'Government-issued Certificate of Incorporation and full legal compliance ready to transact.'
      },
      {
        step: 2,
        title: 'Tech Architecture & Rapid MVP Engineering',
        timeline: 'Month 1 - 2',
        description: 'Collaborating with JVS Tech to translate ideas into slick, scalable web and mobile software with secure cloud infrastructure.',
        outcome: 'Production-ready MVP ready for customer beta testing and stakeholder demonstrations.'
      },
      {
        step: 3,
        title: 'Brand Identity, SEO & Go-To-Market Execution',
        timeline: 'Month 3',
        description: 'Designing brand systems, logos, digital presence, organic search footprint, and paid acquisition funnels to acquire initial users.',
        outcome: 'Cohesive brand identity guidelines, marketing website, and active customer pipeline.'
      },
      {
        step: 4,
        title: 'Venture Scaling & Financial Pitch Packaging',
        timeline: 'Month 4 onwards',
        description: 'Financial modeling, cap table structuring, investor pitch decks, and strategic partner matchmaking led by Vahid Shaik.',
        outcome: 'Investor-ready pitch deck, sustainable revenue roadmap, and accelerated commercial traction.'
      }
    ],
    recommendedServiceIds: ['business-consulting', 'technology-innovation', 'digital-solutions'],
    whyJVS: [
      'Eliminate bureaucratic headaches with seamless single-window legal and statutory setup.',
      'Access in-house software engineering from JVS Tech without exorbitant agency markups.',
      'Benefit from strategic mentorship by experienced venture operators who have scaled real businesses.'
    ]
  },
  {
    index: 2,
    persona: 'Enterprises & Corporate Clients',
    roleTag: 'Enterprise Engineering & Events',
    title: 'Modern Digital Platforms & World-Class Corporate Summits',
    subtitle: 'Enterprise software modernization, high-impact conferences with Jyoora Events, and corporate talent upskilling.',
    targetAudience: 'Mid-market Enterprises, Educational Institutions, Corporate HR Heads, Event Organizers',
    primaryVertical: 'JVS Tech & Jyoora Events',
    icon: RiBuilding4Line,
    ctaText: 'Partner with JVS Enterprise Desk',
    contactVertical: 'Tech Solutions',
    metrics: [
      { label: 'Enterprise Uptime', value: '99.9% Reliable' },
      { label: 'Summit Capacity', value: 'Up to 5000+ Guests' },
      { label: 'Corporate Delivery', value: 'Pan-India SLA' },
      { label: 'Tech Stack', value: 'Modern Cloud Native' }
    ],
    stepsDetailed: [
      {
        step: 1,
        title: 'Strategic Discovery & Architecture Audit',
        timeline: 'Phase 1',
        description: 'Deep architectural assessment of existing corporate IT systems, event goals, or talent skill gaps, delivering an actionable scope blueprint.',
        outcome: 'Comprehensive Technical Scope, Event Run-Sheet, or Training Roadmap with clear ROI metrics.'
      },
      {
        step: 2,
        title: 'Custom Engineering & Production Sprints',
        timeline: 'Phase 2',
        description: 'Agile sprints delivering resilient web/mobile platforms, or multi-vendor stage/audio-visual planning managed by Jyoora Events.',
        outcome: 'Production software milestones or complete stage setup, acoustics, lighting, and security frameworks.'
      },
      {
        step: 3,
        title: 'Deployment, Flawless Execution & Training',
        timeline: 'Phase 3',
        description: 'Seamless cloud migration or VIP guest management, interactive stage directing, and executive workforce training workshops.',
        outcome: 'Zero-downtime go-live or memorable corporate conference with high attendee satisfaction.'
      },
      {
        step: 4,
        title: 'Continuous SLA Maintenance & Strategic Expansion',
        timeline: 'Ongoing',
        description: 'Dedicated post-launch engineering support, annual event contracts, and ongoing executive talent acquisition channels.',
        outcome: 'Long-term partnership delivering steady technological resilience and recurring event excellence.'
      }
    ],
    recommendedServiceIds: ['technology-innovation', 'events-experiences', 'growth-opportunities'],
    whyJVS: [
      'Single consolidated corporate vendor for digital software, corporate events, and workforce upskilling.',
      'Decoupled, modern tech architectures that eliminate vendor lock-in and minimize technical debt.',
      'Obsessive attention to production quality and deadline adherence across all corporate engagements.'
    ]
  },
  {
    index: 3,
    persona: 'Guests & Corporate Retreat Stays',
    roleTag: 'Hospitality & Boutique Stays',
    title: 'Curated Corporate Living & Executive Stays',
    subtitle: 'Refined comfort, executive work environments, and boutique living managed by Signature Stays.',
    targetAudience: 'Traveling Executives, Visiting Faculty, Tech Teams on Retreat, Corporate Long-Stays',
    primaryVertical: 'Signature Stays (JVS Hospitality)',
    icon: RiHotelLine,
    ctaText: 'Inquire with Signature Stays',
    contactVertical: 'Hospitality',
    metrics: [
      { label: 'Guest Rating', value: '4.9 / 5.0' },
      { label: 'High-Speed Wi-Fi', value: '300+ Mbps Fiber' },
      { label: 'Concierge Desk', value: '24/7 Dedicated' },
      { label: 'Prime Locations', value: 'Coastal Vizag' }
    ],
    stepsDetailed: [
      {
        step: 1,
        title: 'Curated Suite or Retreat Venue Selection',
        timeline: 'Instant Confirmation',
        description: 'Browse prime accommodations tailored for corporate productivity, privacy, and serene relaxation near coastal Visakhapatnam hubs.',
        outcome: 'Guaranteed reservation with custom amenities, desk setups, and conference room booking.'
      },
      {
        step: 2,
        title: 'Personalized Concierge & Seamless Check-in',
        timeline: 'Day of Arrival',
        description: 'Hassle-free digital check-in, airport transit coordination, and bespoke meal and workspace preferences arranged in advance.',
        outcome: 'Zero waiting time, sanitized executive quarters, and high-speed dedicated workspaces.'
      },
      {
        step: 3,
        title: 'Productive Work & Restful Living Experience',
        timeline: 'Stay Duration',
        description: 'Enjoy high-speed optical fiber, pristine housekeeping, executive dining arrangements, and proximity to scenic coastal attractions.',
        outcome: 'Uninterrupted work productivity combined with refreshing seaside hospitality.'
      },
      {
        step: 4,
        title: 'Corporate Long-Term Accounts & Preferred Rates',
        timeline: 'Post-Stay',
        description: 'Institutional billing agreements, seasonal retreat discounts, and priority reservations for recurring corporate visits.',
        outcome: 'Exclusive corporate tier rates and effortless recurring booking management.'
      }
    ],
    recommendedServiceIds: ['growth-opportunities', 'events-experiences'],
    whyJVS: [
      'Engineered specifically for remote executives and teams needing high-performance Wi-Fi and tranquility.',
      'Prime strategic locations near key transit points and coastal beauty in Visakhapatnam.',
      'Impeccable hygiene benchmarks, personalized hospitality, and corporate invoice compliance.'
    ]
  }
];

export default function PathwaysPage({ onOpenBrochure }) {
  const [selectedPersonaIndex, setSelectedPersonaIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const currentPersona = personasDetailed[selectedPersonaIndex];
  const accent = personaAccents[selectedPersonaIndex];

  // Match recommended services from companyData.services
  const recommendedServices = companyData.services.filter((svc) =>
    currentPersona.recommendedServiceIds.includes(svc.id)
  );

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
              <RiCompass3Line className="w-3.5 h-3.5 text-cyan-400" />
              <span>Interactive Ecosystem Guide</span>
            </span>

            <h1 className="font-heading font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
              Tailored Growth Pathways for{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #7dd3fc 45%, #818cf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Every Stakeholder
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              JVS operates a synchronized multi-disciplinary ecosystem. Select your profile below to uncover your custom step-by-step roadmap, recommended services, and concrete milestones.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Interactive Persona Switcher Tabs ─── */}
      <section className="relative py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {personasDetailed.map((p, idx) => {
              const Icon = p.icon;
              const isSelected = selectedPersonaIndex === idx;
              const cardAccent = personaAccents[idx];

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedPersonaIndex(idx)}
                  className="rounded-2xl p-4 sm:p-5 text-left relative overflow-hidden transition-all duration-300 cursor-pointer"
                  style={{
                    background: isSelected
                      ? 'linear-gradient(145deg, rgba(8,20,50,0.98) 0%, rgba(3,10,30,0.98) 100%)'
                      : 'rgba(5,10,24,0.7)',
                    border: isSelected
                      ? `1.5px solid ${cardAccent.color}`
                      : '1px solid rgba(30,41,59,0.7)',
                    boxShadow: isSelected
                      ? `0 10px 30px -10px ${cardAccent.glow}, 0 0 20px -5px ${cardAccent.glow}`
                      : 'none'
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                      style={{
                        background: isSelected ? `${cardAccent.color}25` : 'rgba(30,41,59,0.5)',
                        border: `1px solid ${isSelected ? cardAccent.color : 'rgba(56,189,248,0.2)'}`,
                        color: isSelected ? cardAccent.color : '#94a3b8'
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {isSelected && (
                      <span
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: `${cardAccent.color}20`,
                          color: cardAccent.color,
                          border: `1px solid ${cardAccent.color}40`
                        }}
                      >
                        ACTIVE PATH
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] text-slate-400 block font-medium">
                    Persona 0{idx + 1}
                  </span>
                  <h3
                    className={`text-sm sm:text-base font-bold font-heading transition-colors ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {p.persona}
                  </h3>
                  <p className="text-[11px] text-cyan-400 font-medium mt-0.5 line-clamp-1">
                    {p.roleTag}
                  </p>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── Selected Persona Detailed Pathway Breakdown ─── */}
      <section className="relative py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPersonaIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-12"
            >
              
              {/* Persona Overview Header Card */}
              <div
                className="rounded-3xl p-6 sm:p-8 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(8,18,48,0.95) 0%, rgba(2,6,20,0.98) 100%)',
                  border: `1px solid ${accent.color}40`,
                  boxShadow: `0 25px 60px -20px rgba(0,0,0,0.8), 0 0 40px -15px ${accent.glow}`
                }}
              >
                {/* Glow pill */}
                <div
                  className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none blur-3xl opacity-20"
                  style={{ background: accent.color }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                        style={{
                          background: `${accent.color}20`,
                          color: accent.color,
                          border: `1px solid ${accent.color}40`
                        }}
                      >
                        {currentPersona.roleTag}
                      </span>
                      <span className="text-xs text-slate-400 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800">
                        Lead Vertical: <strong className="text-slate-200">{currentPersona.primaryVertical}</strong>
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      {currentPersona.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                      {currentPersona.subtitle}
                    </p>

                    <div className="pt-2 text-xs text-slate-400">
                      Ideal for: <span className="text-cyan-300 font-medium">{currentPersona.targetAudience}</span>
                    </div>
                  </div>

                  {/* Persona Key Metrics Card */}
                  <div className="lg:col-span-4">
                    <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90">
                      {currentPersona.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="space-y-0.5">
                          <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                            {m.label}
                          </span>
                          <span className="text-sm sm:text-base font-bold text-white font-heading block">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4">
                      <Link
                        to={`/contact?vertical=${encodeURIComponent(currentPersona.contactVertical)}`}
                        className="w-full shine-hover py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
                        style={{ background: `linear-gradient(135deg, ${accent.color}, #ffffff)` }}
                      >
                        <span>{currentPersona.ctaText}</span>
                        <RiArrowRightLine className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4-Step Interactive Roadmap Timeline */}
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading flex items-center gap-2">
                      <RiCompass3Line className="w-5 h-5 text-cyan-400" />
                      <span>The 4-Stage Execution Roadmap</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Clear operational milestones from day one to successful completion
                    </p>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-500/30">
                    Step-by-Step
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {currentPersona.stepsDetailed.map((step) => (
                    <div
                      key={step.step}
                      className="rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between"
                      style={{
                        background: 'linear-gradient(145deg, rgba(8,16,42,0.95) 0%, rgba(3,8,24,0.98) 100%)',
                        border: '1px solid rgba(56,189,248,0.18)',
                        boxShadow: '0 10px 25px -10px rgba(0,0,0,0.6)'
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className="w-8 h-8 rounded-xl font-bold font-mono text-xs flex items-center justify-center"
                            style={{
                              background: `${accent.color}20`,
                              border: `1px solid ${accent.color}50`,
                              color: accent.color
                            }}
                          >
                            0{step.step}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                            <RiTimeLine className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{step.timeline}</span>
                          </span>
                        </div>

                        <h4 className="text-sm sm:text-base font-bold text-white font-heading mb-2">
                          {step.title}
                        </h4>

                        <p className="text-xs text-slate-300 leading-relaxed mb-4">
                          {step.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 bg-slate-950/40 -mx-5 -mb-5 p-4 rounded-b-2xl">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                          Key Deliverable / Outcome:
                        </span>
                        <p className="text-xs font-medium text-slate-200">
                          {step.outcome}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Services Grid */}
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading flex items-center gap-2">
                      <RiFolderSharedLine className="w-5 h-5 text-cyan-400" />
                      <span>Recommended Core Services</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Integrated streams directly supporting this persona pathway
                    </p>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    Verified Brochure Streams
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {recommendedServices.map((svc) => (
                    <div
                      key={svc.id}
                      className="rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
                      style={{
                        background: 'linear-gradient(145deg, rgba(8,16,42,0.9) 0%, rgba(3,7,20,0.95) 100%)',
                        border: '1px solid rgba(56,189,248,0.2)'
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/25">
                            {svc.category}
                          </span>
                          <span className="text-[11px] text-slate-400">{svc.badge}</span>
                        </div>

                        <h4 className="text-base font-bold text-white font-heading mb-1">
                          {svc.title}
                        </h4>
                        <p className="text-[11px] text-cyan-300 font-medium mb-3">
                          {svc.subTags}
                        </p>
                        <p className="text-xs text-slate-300 leading-relaxed mb-4">
                          {svc.shortDesc}
                        </p>

                        <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                            Key Deliverables:
                          </span>
                          <ul className="space-y-1 text-xs text-slate-300">
                            {svc.deliverables.map((d, dIdx) => (
                              <li key={dIdx} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-slate-800/80">
                        <Link
                          to={`/contact?vertical=${encodeURIComponent(svc.title)}`}
                          className="shine-hover text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center justify-between"
                        >
                          <span>Inquire About This Stream</span>
                          <RiArrowRightLine className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose JVS for this Persona & WhatsApp Quick Action */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                <div
                  className="lg:col-span-8 rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-4"
                  style={{ background: 'rgba(6,12,32,0.8)' }}
                >
                  <h4 className="text-sm sm:text-base font-bold text-white font-heading flex items-center gap-2">
                    <RiShieldCheckLine className="w-4 h-4 text-cyan-400" />
                    <span>Why Choose JVS for {currentPersona.persona}?</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {currentPersona.whyJVS.map((reason, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <RiCheckboxCircleFill className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="lg:col-span-4 rounded-2xl p-6 flex flex-col justify-between border"
                  style={{
                    background: 'linear-gradient(145deg, rgba(16,185,129,0.1) 0%, rgba(6,18,35,0.95) 100%)',
                    borderColor: 'rgba(52,211,153,0.3)'
                  }}
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                      Direct Messaging
                    </span>
                    <h4 className="text-base font-bold text-white font-heading">
                      Speak with the Pathway Lead
                    </h4>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      Have questions about starting on this pathway? Connect directly with our counseling desk on WhatsApp.
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/919160030342?text=${encodeURIComponent(
                      `Hello JVS Team, I am interested in the ${currentPersona.persona} Pathway (${currentPersona.roleTag}). Could you guide me on next steps?`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 shine-hover py-3 rounded-xl text-xs font-bold text-slate-950 flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}
                  >
                    <RiWhatsappFill className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ─── All-Personas Matrix Summary ─── */}
      <section className="relative py-14 sm:py-20 border-t border-slate-900 bg-[#030713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Complete Ecosystem Matrix at a Glance
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Cross-vertical synergies uniting education, startup incubation, enterprise engineering, and hospitality.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950/90 text-cyan-300 font-mono text-[11px] border-b border-slate-800">
                <tr>
                  <th className="p-4">Persona</th>
                  <th className="p-4">Core Objective</th>
                  <th className="p-4">Primary JVS Vertical</th>
                  <th className="p-4">Estimated Timeline</th>
                  <th className="p-4">Key Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                {personasDetailed.map((p, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-800/30 transition-colors cursor-pointer"
                    onClick={() => {
                      setSelectedPersonaIndex(idx);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                  >
                    <td className="p-4 font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span>{p.persona}</span>
                    </td>
                    <td className="p-4">{p.roleTag}</td>
                    <td className="p-4 font-medium text-cyan-300">{p.primaryVertical}</td>
                    <td className="p-4 font-mono text-slate-400">{p.stepsDetailed[0].timeline} - {p.stepsDetailed[3].timeline}</td>
                    <td className="p-4 text-emerald-300 font-medium">{p.metrics[0].value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

    </div>
  );
}
