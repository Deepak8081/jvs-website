import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  RiPhoneLine, 
  RiMailLine, 
  RiGlobalLine, 
  RiMapPinLine, 
  RiSendPlaneFill, 
  RiWhatsappFill, 
  RiSparklingFill, 
  RiCheckboxCircleFill,
  RiArrowRightUpLine
} from 'react-icons/ri';
import { brochureContent } from '../data/jvsContent';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Education & Training',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello JVS Team, my name is ${formData.name || 'Visitor'}. I am inquiring about ${formData.serviceInterest}. Message: ${formData.message || 'I would like more information.'}`
    );
    window.open(`https://wa.me/919160030342?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-14 sm:py-16 md:py-20 overflow-hidden" style={{ background: '#030611' }}>
      
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 right-1/4 w-[450px] h-[450px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-10 left-10 w-[450px] h-[450px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)' }}
      />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3.5 mb-10 sm:mb-12">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{ background: 'rgba(5,15,40,0.9)', border: '1px solid rgba(56,189,248,0.3)', color: '#7dd3fc' }}
          >
            <RiSparklingFill className="w-3.5 h-3.5 text-cyan-400" />
            <span>Connect with JVS</span>
          </div>

          <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
            Let's Create What{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, #38bdf8, #7dd3fc 50%, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Comes Next.
            </span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
            Reach out to our leadership and corporate administration for strategic collaborations, career training, digital services, and event management.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Official Contact Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div 
              className="rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 flex-1"
              style={{
                background: 'linear-gradient(145deg, rgba(8,16,42,0.97) 0%, rgba(5,10,26,0.98) 60%, rgba(2,5,15,0.99) 100%)',
                border: '1px solid rgba(56,189,248,0.2)',
                boxShadow: '0 20px 45px -15px rgba(0,0,0,0.8)'
              }}
            >
              
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Headquarters Desk</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Verified
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading">
                  Jyoshna's Versatile Stability
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Driving Success Through Education, Events & Innovation.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-3 text-xs sm:text-sm">
                
                {/* Phone */}
                <a 
                  href={`tel:${brochureContent.contact.phone}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl transition-all duration-300 group"
                  style={{
                    background: 'rgba(3,6,18,0.8)',
                    border: '1px solid rgba(30,58,95,0.6)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(34,211,238,0.45)';
                    e.currentTarget.style.transform = 'translateX(3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(30,58,95,0.6)';
                    e.currentTarget.style.transform = '';
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                    style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.25)', color: '#22d3ee' }}
                  >
                    <RiPhoneLine className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] block font-medium text-slate-400">Direct Helpline & WhatsApp</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {brochureContent.contact.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${brochureContent.contact.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl transition-all duration-300 group"
                  style={{
                    background: 'rgba(3,6,18,0.8)',
                    border: '1px solid rgba(30,58,95,0.6)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(96,165,250,0.45)';
                    e.currentTarget.style.transform = 'translateX(3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(30,58,95,0.6)';
                    e.currentTarget.style.transform = '';
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                    style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.25)', color: '#60a5fa' }}
                  >
                    <RiMailLine className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] block font-medium text-slate-400">Official Inquiry Email</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate block">
                      {brochureContent.contact.email}
                    </span>
                  </div>
                </a>

                {/* Website */}
                <a 
                  href={`https://${brochureContent.contact.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl transition-all duration-300 group"
                  style={{
                    background: 'rgba(3,6,18,0.8)',
                    border: '1px solid rgba(30,58,95,0.6)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(129,140,248,0.45)';
                    e.currentTarget.style.transform = 'translateX(3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(30,58,95,0.6)';
                    e.currentTarget.style.transform = '';
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                    style={{ background: 'rgba(129,140,248,0.1)', border: '1px solid rgba(129,140,248,0.25)', color: '#818cf8' }}
                  >
                    <RiGlobalLine className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] block font-medium text-slate-400">Official Website</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {brochureContent.contact.website}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div 
                  className="flex items-center gap-3.5 p-3.5 rounded-xl"
                  style={{
                    background: 'rgba(3,6,18,0.8)',
                    border: '1px solid rgba(30,58,95,0.6)'
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', color: '#34d399' }}
                  >
                    <RiMapPinLine className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] block font-medium text-slate-400">Location & State</span>
                    <span className="text-sm font-semibold text-white">{brochureContent.contact.location}</span>
                  </div>
                </div>

              </div>

              {/* Instant WhatsApp Connect */}
              <div className="pt-1">
                <a
                  href={brochureContent.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="shine-hover w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 transition-all transform hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                    boxShadow: '0 8px 25px -8px rgba(16,185,129,0.5)'
                  }}
                >
                  <RiWhatsappFill className="w-5 h-5 text-slate-950" />
                  <span>Connect on Official WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Clean Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div 
              className="rounded-2xl p-6 sm:p-10 relative h-full flex flex-col justify-center"
              style={{
                background: 'linear-gradient(145deg, rgba(8,16,42,0.97) 0%, rgba(5,10,26,0.98) 60%, rgba(2,5,15,0.99) 100%)',
                border: '1px solid rgba(56,189,248,0.2)',
                boxShadow: '0 20px 45px -15px rgba(0,0,0,0.8)'
              }}
            >
              
              {submitted ? (
                <div className="text-center py-10 space-y-5">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
                    style={{
                      background: 'rgba(16,185,129,0.12)',
                      border: '1px solid rgba(16,185,129,0.35)',
                      color: '#34d399'
                    }}
                  >
                    <RiCheckboxCircleFill className="w-9 h-9" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">Inquiry Transmitted</h3>
                    <p className="text-sm text-slate-200 max-w-md mx-auto font-normal leading-relaxed">
                      Thank you for contacting JVS. Our team will review your inquiry regarding <strong className="text-cyan-300 font-semibold">{formData.serviceInterest}</strong> and get back to you promptly.
                    </p>
                  </div>

                  <div className="pt-3 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 flex items-center gap-2 shadow-lg transition-all hover:scale-105 cursor-pointer"
                      style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}
                    >
                      <RiWhatsappFill className="w-4 h-4 text-slate-950" />
                      <span>Continue to WhatsApp</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-xl text-slate-300 font-medium text-xs sm:text-sm transition-colors hover:text-white cursor-pointer"
                      style={{ background: 'rgba(30,41,59,0.7)', border: '1px solid rgba(71,85,105,0.7)' }}
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white font-heading">Send an Inquiry</h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-normal">
                      Please specify your requirement below for a prompt response from the JVS desk.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all"
                        style={{
                          background: 'rgba(3,6,18,0.9)',
                          border: '1px solid rgba(30,58,95,0.7)'
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(34,211,238,0.6)'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(30,58,95,0.7)'}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all"
                        style={{
                          background: 'rgba(3,6,18,0.9)',
                          border: '1px solid rgba(30,58,95,0.7)'
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(34,211,238,0.6)'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(30,58,95,0.7)'}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Phone / WhatsApp
                      </label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91..."
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all"
                        style={{
                          background: 'rgba(3,6,18,0.9)',
                          border: '1px solid rgba(30,58,95,0.7)'
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(34,211,238,0.6)'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(30,58,95,0.7)'}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Service of Interest *
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({...formData, serviceInterest: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-white outline-none transition-all cursor-pointer"
                        style={{
                          background: 'rgba(3,6,18,0.9)',
                          border: '1px solid rgba(30,58,95,0.7)'
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(34,211,238,0.6)'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(30,58,95,0.7)'}
                      >
                        {brochureContent.services.map((s) => (
                          <option key={s.number} value={s.title} className="bg-slate-900 text-white">
                            {s.number}. {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Requirement Details
                    </label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Share details about your requirement, timeline, or preferred engagement model..."
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all resize-none"
                      style={{
                        background: 'rgba(3,6,18,0.9)',
                        border: '1px solid rgba(30,58,95,0.7)'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(34,211,238,0.6)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(30,58,95,0.7)'}
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="shine-hover w-full sm:flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)',
                        boxShadow: '0 8px 25px -8px rgba(37,99,235,0.5)'
                      }}
                    >
                      <RiSendPlaneFill className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppRedirect}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-emerald-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      style={{
                        background: 'rgba(16,185,129,0.1)',
                        border: '1px solid rgba(16,185,129,0.3)'
                      }}
                    >
                      <RiWhatsappFill className="w-4 h-4" />
                      <span>WhatsApp Direct</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
