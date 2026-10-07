import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Globe, 
  CheckCircle2, 
  Quote, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Compass, 
  ArrowRight, 
  Award,
  Phone,
  Mail,
  Building2,
  FileText
} from 'lucide-react';
import { companyData } from '../data/jvsData';

export default function AboutPage({ onNavigateToContact, onOpenBrochure, onBackToHome }) {
  const [selectedPillar, setSelectedPillar] = useState('innovation');

  const pillarsDetail = {
    innovation: {
      title: "Technology & Innovation",
      desc: "At JVS, innovation is not just a catchphrase—it is the engineering heartbeat across every initiative. From progressive web frameworks and enterprise software to intelligent digital automation, we leverage state-of-the-art tools to transform traditional industries into scalable modern ecosystems.",
      metrics: ["Modern Architecture", "AI & Digital Ready", "Continuous Upgradation"],
      quote: "Turning breakthrough concepts into robust operational reality."
    },
    vision: {
      title: "Visionary Growth",
      desc: "Rooted in purposeful creation, our vision extends far beyond short-term milestones. Led by Jyoshna Yellapu, our leadership architects sustainable business models that anticipate market evolutions and generate multi-generational value for our stakeholders, students, and partners.",
      metrics: ["Future-Proof Roadmaps", "Long-Term Value Creation", "Sustainable Expansion"],
      quote: "Building a vision that grows beyond today."
    },
    versatility: {
      title: "Versatile Stability",
      desc: "Our unique competitive strength lies in multi-disciplinary versatility. We deliver consistent excellence across seemingly distinct domains—from Edu-Tech and career mentorship to high-profile event production, startup registrations, and premium hospitality—under one unified standard of stability.",
      metrics: ["Cross-Sector Agility", "6 Integrated Verticals", "Unified Quality Standards"],
      quote: "Delivering unwavering excellence across diverse enterprise landscapes."
    }
  };

  const coreSectors = [
    { title: "Event Management", desc: "Corporate conferences, celebrations, audio-visual stage production via Jyoora Events." },
    { title: "Career Placements", desc: "Talent training, mock interviews, resume architecture, and corporate hiring connections." },
    { title: "Startup Entrepreneurship", desc: "Incubating disruptive ideas into scalable businesses with end-to-end guidance." },
    { title: "Technology Innovation", desc: "Enterprise software, modern web apps, cloud systems, and digital product engineering." },
    { title: "Company Registrations", desc: "Complete corporate incorporation, regulatory compliance, and business advisory via VexoBiz." },
    { title: "Hospitality", desc: "Curated luxury stays, corporate accommodations, and hospitality retreats via Signature Stays." }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#030712] min-h-screen text-slate-100">
      
      {/* Breadcrumb & Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <button onClick={onBackToHome} className="hover:text-cyan-400 transition-colors">Home</button>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">About Us (Official Brochure Profile)</span>
        </div>
      </div>

      {/* Hero Banner for About Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl bg-gradient-to-br from-blue-950/80 via-[#070f26] to-slate-900 border border-cyan-500/30 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Authentic Corporate Identity</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">JVS</span>
            </h1>

            <p className="text-xl sm:text-2xl text-cyan-200 font-medium">
              Jyoshna's Versatile Stability
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              “JVS (Jyoshna’s Versatile Stability) is a growing business group driven by <strong className="text-cyan-400 font-semibold">innovation</strong>, <strong className="text-cyan-400 font-semibold">vision</strong>, and <strong className="text-cyan-400 font-semibold">versatility</strong>. We create and develop ventures designed to bring value, opportunity, and lasting growth.”
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onOpenBrochure}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-500/20 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Verify with Official Brochure PDF</span>
              </button>

              <button
                onClick={onNavigateToContact}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold border border-slate-700 transition-all"
              >
                <span>Contact Leadership Desk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Core Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Our Purpose</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Transforming Ideas Into Meaningful Realities
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Based in the port city of <strong className="text-white font-semibold">Visakhapatnam (PIN 530022)</strong>, JVS acts as a unified catalyst bridging student careers, technological solutions, experiential events, startup incubation, and luxury hospitality.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Our mission is grounded in sustainable execution: empowering founders through <strong className="text-cyan-300">VexoBiz</strong>, students through <strong className="text-cyan-300">Versatile Academy</strong>, enterprises through <strong className="text-cyan-300">JVS Tech</strong>, audiences through <strong className="text-cyan-300">Jyoora Events</strong>, and travelers through <strong className="text-cyan-300">Signature Stays</strong>.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-2xl font-black text-cyan-400">6+</div>
                <div className="text-xs text-slate-400 mt-1">Multi-Disciplinary Sectors</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-2xl font-black text-blue-400">8+</div>
                <div className="text-xs text-slate-400 mt-1">End-to-End Service Streams</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#070e24] border border-cyan-500/20 rounded-3xl p-8 space-y-6 shadow-xl">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3">
              Official Headquarters
            </h3>
            
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Visakhapatnam, 530022</strong>
                  <span className="text-slate-400">Andhra Pradesh, India</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <strong className="text-white block">+91 91600 30342</strong>
                  <span className="text-slate-400">Helpline & Support</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <strong className="text-white block">jvsacademyofficial@gmail.com</strong>
                  <span className="text-slate-400">Official Inquiries</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <strong className="text-white block">www.jvsacademy.com</strong>
                  <span className="text-slate-400">Main Portal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 3 Core Pillars */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">The Three Foundations of JVS</h2>
            <p className="text-sm text-slate-400">Innovation • Vision • Versatility</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyData.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                  <p className="text-xs font-semibold text-cyan-400">{pillar.subtitle}</p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{pillar.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] text-slate-400 italic">Core JVS Principle</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Perspectives on About Page */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Executive Perspectives</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Leadership Quotes from the Brochure</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyData.leaders.map((leader, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0c142c] to-slate-950 border border-cyan-500/30 space-y-6 shadow-2xl relative"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase">
                    {leader.badge}
                  </span>
                  <Quote className="w-8 h-8 text-cyan-500/20" />
                </div>

                <p className="text-base sm:text-lg italic text-slate-200 leading-relaxed font-light font-serif">
                  “{leader.quote}”
                </p>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">{leader.name}</h3>
                    <p className="text-xs text-cyan-400 font-semibold">{leader.role}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
                    {leader.name[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Sectors (From Brochure Page 2) */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Core Business Verticals</h2>
            <p className="text-sm text-slate-400">Directly mapped from the official brochure</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSectors.map((sector, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {sector.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
