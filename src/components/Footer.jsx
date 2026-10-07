import React from 'react';
import { Link } from 'react-router-dom';
import { 
  RiArrowUpLine, 
  RiPhoneLine, 
  RiMailLine, 
  RiGlobalLine, 
  RiMapPinLine,
  RiSparklingFill,
  RiFilePaperLine
} from 'react-icons/ri';
import { brochureContent } from '../data/jvsContent';

export default function Footer({ onOpenBrochure }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden text-slate-400 text-xs" style={{ background: '#010307' }}>
      
      {/* Background glow in footer */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-24 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(37,99,235,0.1) 0%, transparent 70%)' }}
      />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b" style={{ borderColor: 'rgba(30,41,59,0.5)' }}>
          
          {/* Col 1: Brand (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 cursor-pointer group" onClick={scrollToTop}>
              <div 
                className="flex items-center justify-center w-10 h-10 rounded-xl p-[1px] transition-transform group-hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(37,99,235,0.3), rgba(34,211,238,0.3))',
                  boxShadow: '0 0 15px -5px rgba(37,99,235,0.4)'
                }}
              >
                <div className="w-full h-full bg-[#02050e] rounded-[11px] flex items-center justify-center">
                  <span 
                    className="font-bold font-heading text-base"
                    style={{
                      background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    JVS
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold font-heading text-base text-white block leading-tight">JVS</span>
                <span className="text-[11px] text-cyan-400 font-medium">{brochureContent.brand.fullName}</span>
              </div>
            </Link>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm font-normal">
              {brochureContent.brand.aboutStatement}
            </p>

            <div className="pt-0.5">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-cyan-300 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 font-medium">
                <RiSparklingFill className="w-3 h-3 text-cyan-400" />
                <span>{brochureContent.brand.tagline}</span>
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 border border-cyan-500/30 bg-cyan-950/40 hover:bg-cyan-900/50 transition-colors cursor-pointer"
              >
                <RiFilePaperLine className="w-3.5 h-3.5" />
                <span>Official Brochure (PDF)</span>
              </button>
            </div>
          </div>

          {/* Col 2: Corporate Navigation (3 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-heading">
              Corporate
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About JVS' },
                { to: '/services', label: 'Services Hub' },
                { to: '/business', label: 'Our Business' },
                { to: '/leadership', label: 'Leadership' },
                { to: '/pathways', label: 'Pathways Guide' },
                { to: '/contact', label: 'Contact HQ' },
                { to: '/brochure', label: 'Brochure Profile' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.to} 
                    onClick={scrollToTop} 
                    className="hover:text-cyan-400 text-slate-300 transition-colors flex items-center gap-1.5 font-normal"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500/40"></span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Business Verticals (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-heading">
              Ventures & Verticals
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/business/versatile-academy', label: 'Versatile Academy' },
                { to: '/business/jvs-tech', label: 'JVS Tech & Innovation' },
                { to: '/business/jyoora-events', label: 'Jyoora Events' },
                { to: '/business/vexobiz', label: 'VexoBiz Incubation' },
                { to: '/business/career-placements', label: 'Career Placements' },
                { to: '/business/signature-stays', label: 'Signature Stays' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.to} 
                    onClick={scrollToTop} 
                    className="hover:text-cyan-400 text-slate-300 transition-colors flex items-center gap-1.5 font-normal"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky-500/40"></span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Desk (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-heading">
              Official Headquarters
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)', color: '#22d3ee' }}
                >
                  <RiPhoneLine className="w-3.5 h-3.5" />
                </div>
                <a href={`tel:${brochureContent.contact.phone}`} className="hover:text-cyan-300 text-slate-200 transition-colors font-medium">
                  {brochureContent.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(96,165,250,0.08)', border: '1px solid rgba(96,165,250,0.2)', color: '#60a5fa' }}
                >
                  <RiMailLine className="w-3.5 h-3.5" />
                </div>
                <a href={`mailto:${brochureContent.contact.email}`} className="hover:text-cyan-300 text-slate-200 transition-colors truncate font-medium">
                  {brochureContent.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(129,140,248,0.08)', border: '1px solid rgba(129,140,248,0.2)', color: '#818cf8' }}
                >
                  <RiGlobalLine className="w-3.5 h-3.5" />
                </div>
                <a href={`https://${brochureContent.contact.website}`} target="_blank" rel="noreferrer" className="hover:text-cyan-300 text-slate-200 transition-colors font-medium">
                  {brochureContent.contact.website}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)', color: '#34d399' }}
                >
                  <RiMapPinLine className="w-3.5 h-3.5" />
                </div>
                <span className="leading-snug text-slate-200">{brochureContent.contact.location}, Andhra Pradesh</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <p>
            © {new Date().getFullYear()} <strong className="text-slate-300 font-semibold">JVS (Jyoshna's Versatile Stability)</strong>. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="text-slate-500 font-medium hidden sm:inline">Visakhapatnam, Andhra Pradesh, India</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <RiArrowUpLine className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
