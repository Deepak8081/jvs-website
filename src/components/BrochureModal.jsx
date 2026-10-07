import React, { useState } from 'react';
import { 
  RiCloseLine, 
  RiDownload2Line, 
  RiExternalLinkLine, 
  RiPhoneLine, 
  RiMailLine, 
  RiGlobalLine, 
  RiMapPinLine, 
  RiDoubleQuotesL,
  RiCheckDoubleLine,
  RiFilePaperLine,
  RiBuilding4Line,
  RiSparklingFill
} from 'react-icons/ri';
import { brochureContent } from '../data/jvsContent';

export default function BrochureModal({ isOpen, onClose }) {
  const [activePage, setActivePage] = useState(1);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden text-white rounded-3xl"
        style={{
          background: 'linear-gradient(145deg, rgba(8,16,42,0.98) 0%, rgba(4,8,22,0.99) 100%)',
          border: '1px solid rgba(56,189,248,0.3)',
          boxShadow: '0 40px 100px -20px rgba(0,0,0,0.9), 0 0 60px -10px rgba(34,211,238,0.2)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div 
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: 'rgba(30,58,95,0.6)', background: 'rgba(3,6,18,0.9)' }}
        >
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs"
              style={{ background: 'rgba(34,211,238,0.15)', border: '1px solid rgba(34,211,238,0.35)', color: '#22d3ee' }}
            >
              PDF
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2 font-heading">
                <span>JVS Official Brochure Reference</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  Primary Source
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">Jyoshna's Versatile Stability • Original Pamphlet Content</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/jvs-brochure.pdf"
              download="JVS-Official-Pamphlet.pdf"
              className="shine-hover flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-white text-xs font-semibold shadow-md transition-all"
              style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
              title="Download original brochure PDF"
            >
              <RiDownload2Line className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white transition-colors"
              style={{ background: 'rgba(30,41,59,0.5)' }}
            >
              <RiCloseLine className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Page Selector Tabs */}
        <div 
          className="flex items-center justify-between px-6 py-2.5 border-b text-xs"
          style={{ background: 'rgba(2,4,12,0.95)', borderColor: 'rgba(30,58,95,0.5)' }}
        >
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActivePage(1)}
              className="px-4 py-1.5 rounded-xl font-bold transition-all text-xs"
              style={{
                background: activePage === 1 ? 'linear-gradient(135deg, #22d3ee, #0284c7)' : 'transparent',
                color: activePage === 1 ? '#020617' : '#94a3b8',
                border: activePage === 1 ? '1px solid #38bdf8' : '1px solid transparent'
              }}
            >
              Page 1: Brand & Executive Insights
            </button>
            <button
              onClick={() => setActivePage(2)}
              className="px-4 py-1.5 rounded-xl font-bold transition-all text-xs"
              style={{
                background: activePage === 2 ? 'linear-gradient(135deg, #22d3ee, #0284c7)' : 'transparent',
                color: activePage === 2 ? '#020617' : '#94a3b8',
                border: activePage === 2 ? '1px solid #38bdf8' : '1px solid transparent'
              }}
            >
              Page 2: Business & Service Streams
            </button>
          </div>

          <span className="text-slate-500 text-[11px] hidden sm:inline">
            Viewing Page {activePage} of 2
          </span>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {activePage === 1 ? (
            <div className="space-y-6">
              
              {/* Cover Banner */}
              <div 
                className="rounded-2xl p-6 sm:p-8 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(8,20,55,0.9) 0%, rgba(4,10,30,0.95) 100%)',
                  border: '1px solid rgba(56,189,248,0.25)'
                }}
              >
                <div className="relative z-10 space-y-2">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400">
                    Pamphlet Front Cover
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white font-heading">
                    Jyoshna's Versatile Stability
                  </h2>
                  <p className="text-base text-cyan-300 font-medium">
                    Driving Success Through Education, Events & Innovation
                  </p>
                </div>
              </div>

              {/* Perspective Quotes */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 font-heading">
                  <RiDoubleQuotesL className="w-4 h-4" />
                  <span>Our Perspective (Executive Statements)</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {brochureContent.perspectives.map((p, idx) => (
                    <div 
                      key={idx} 
                      className="p-5 rounded-2xl space-y-3"
                      style={{ background: 'rgba(3,6,18,0.8)', border: '1px solid rgba(30,58,95,0.6)' }}
                    >
                      <p className="text-xs sm:text-sm italic text-slate-200 leading-relaxed font-heading">
                        “{p.quote}”
                      </p>
                      <div className="border-t pt-3" style={{ borderColor: 'rgba(30,58,95,0.5)' }}>
                        <p className="text-xs font-bold text-white font-heading">{p.name}</p>
                        <p className="text-[11px] text-cyan-400">{p.designation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Reference */}
              <div 
                className="p-5 rounded-2xl space-y-3"
                style={{ background: 'rgba(3,6,18,0.7)', border: '1px solid rgba(30,58,95,0.6)' }}
              >
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-heading">
                  Brochure Contact Desk
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div className="flex items-center gap-2.5">
                    <RiPhoneLine className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-slate-300">{brochureContent.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <RiMailLine className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="truncate text-slate-300">{brochureContent.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <RiGlobalLine className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-slate-300">{brochureContent.contact.website}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <RiMapPinLine className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-slate-300">{brochureContent.contact.location}</span>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div className="space-y-6">
              
              {/* About Us in Brochure */}
              <div 
                className="p-6 rounded-2xl space-y-3"
                style={{ background: 'rgba(3,6,18,0.8)', border: '1px solid rgba(30,58,95,0.6)' }}
              >
                <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 font-heading">
                  Section: About Us
                </span>
                <p className="text-sm text-slate-200 leading-relaxed font-medium font-heading">
                  “{brochureContent.brand.aboutStatement} {brochureContent.brand.purposeStatement}”
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-xs text-slate-300">
                  {brochureContent.coreSectors.map((sec, i) => (
                    <span key={i} className="p-2.5 rounded-xl bg-[#02050f] border border-slate-800 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>{sec.title}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Our Business */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-heading">
                  Section: Our Business (6 Entities)
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  {brochureContent.businessVentures.map((v, i) => (
                    <div 
                      key={i} 
                      className="p-3.5 rounded-xl"
                      style={{ background: 'rgba(3,6,18,0.8)', border: '1px solid rgba(56,189,248,0.2)' }}
                    >
                      <strong className="text-white block font-heading text-sm">{v.name}</strong>
                      <span className="text-cyan-400 text-[11px] block mt-0.5">{v.subtitle}</span>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{v.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How We Serve */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-heading">
                  Section: How We Serve (8 Services)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {brochureContent.services.map((s, i) => (
                    <div 
                      key={i} 
                      className="p-3.5 rounded-xl flex items-start gap-3"
                      style={{ background: 'rgba(3,6,18,0.8)', border: '1px solid rgba(30,58,95,0.6)' }}
                    >
                      <span 
                        className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 font-bold text-xs"
                        style={{ background: 'rgba(34,211,238,0.15)', border: '1px solid rgba(34,211,238,0.3)', color: '#22d3ee' }}
                      >
                        {s.number}
                      </span>
                      <div>
                        <span className="text-white font-bold block font-heading text-xs sm:text-sm">{s.title}</span>
                        <span className="text-cyan-400 text-[11px] block">{s.tags.join(' • ')}</span>
                        <p className="text-[11px] text-slate-400 mt-1">{s.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div 
          className="px-6 py-4 border-t flex items-center justify-between text-xs text-slate-400"
          style={{ background: 'rgba(2,4,12,0.98)', borderColor: 'rgba(30,58,95,0.6)' }}
        >
          <button
            onClick={() => setActivePage(activePage === 1 ? 2 : 1)}
            className="text-cyan-400 hover:text-white font-semibold flex items-center gap-1 transition-colors"
          >
            {activePage === 1 ? 'Go to Page 2 (Business & Services) →' : '← Back to Page 1 (Brand & Perspective)'}
          </button>

          <a
            href="/jvs-brochure.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
          >
            <span>Open Raw PDF in Tab</span>
            <RiExternalLinkLine className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

    </div>
  );
}
