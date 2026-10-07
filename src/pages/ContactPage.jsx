import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  RiPhoneLine,
  RiMailLine,
  RiGlobalLine,
  RiMapPinLine,
  RiWhatsappFill,
  RiSparklingFill,
  RiTimeLine,
  RiSendPlaneFill,
  RiCheckDoubleLine,
  RiArrowRightLine,
  RiArrowLeftLine,
  RiBuilding4Line,
  RiCompass3Line,
  RiFileCopyLine,
  RiQuestionLine,
  RiArrowDownSLine,
  RiShieldCheckLine,
  RiCalendarEventLine,
  RiGraduationCapLine,
  RiRocketLine,
  RiCpuLine,
  RiHotelLine,
  RiExternalLinkLine
} from 'react-icons/ri';
import { companyData } from '../data/jvsData';
import { brochureContent } from '../data/jvsContent';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function ContactPage({ onOpenBrochure }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    vertical: 'Education & Academy',
    timeline: 'Immediate (< 1 Month)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const verticalsList = [
    { label: 'Education & Academy (Versatile Academy)', value: 'Education & Academy' },
    { label: 'Tech & Digital Solutions (JVS Tech)', value: 'Tech Solutions' },
    { label: 'Event Production & Management (Jyoora Events)', value: 'Event Production' },
    { label: 'Startup Incubation & Consulting (VexoBiz)', value: 'Startup Incubation' },
    { label: 'Career Placements & Mentorship', value: 'Placements' },
    { label: 'Hospitality & Executive Retreats (Signature Stays)', value: 'Hospitality' },
    { label: 'General Corporate Inquiries & Alliances', value: 'General' }
  ];

  const timelineOptions = [
    'Immediate (< 1 Month)',
    '1 - 3 Months',
    '3 - 6 Months',
    'Exploratory / Long-Term'
  ];

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Work email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid work email address';
        return '';
      case 'phone':
        if (!value.trim()) return 'Contact phone number is required';
        if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(value.replace(/\s+/g, ''))) {
          return 'Please enter a valid phone number (at least 10 digits)';
        }
        return '';
      case 'message':
        if (!value.trim()) return 'Please provide brief details about your inquiry';
        if (value.trim().length < 10) return 'Inquiry details should be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      message: true
    });

    const hasErrors = Object.values(newErrors).some((err) => err !== '');
    if (hasErrors) return;

    setIsSubmitting(true);
    // Simulate real asynchronous submission to corporate desk
    setTimeout(() => {
      const refNumber = `JVS-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedData({
        ...formData,
        referenceId: refNumber,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      });
      setIsSubmitting(false);
    }, 1200);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      vertical: 'Education & Academy',
      timeline: 'Immediate (< 1 Month)',
      message: ''
    });
    setErrors({});
    setTouched({});
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('JVS Corporate Headquarters, Visakhapatnam, PIN 530022, Andhra Pradesh, India');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const quickReachCards = [
    {
      id: 'whatsapp',
      title: 'Direct WhatsApp',
      subtitle: 'Instant response desk',
      value: '+91 91600 30342',
      actionText: 'Start Direct Chat',
      actionUrl: brochureContent.contact.whatsappUrl,
      icon: RiWhatsappFill,
      accent: '#10b981',
      bgGlow: 'rgba(16,185,129,0.15)',
      isLive: true
    },
    {
      id: 'hotline',
      title: 'Phone Hotline',
      subtitle: 'Direct telephone line',
      value: brochureContent.contact.phone,
      actionText: 'Call Headquarters',
      actionUrl: `tel:${brochureContent.contact.phone}`,
      icon: RiPhoneLine,
      accent: '#38bdf8',
      bgGlow: 'rgba(56,189,248,0.15)',
      isLive: false
    },
    {
      id: 'email',
      title: 'Email Desk',
      subtitle: 'Official corporate inbox',
      value: brochureContent.contact.email,
      actionText: 'Send Email',
      actionUrl: `mailto:${brochureContent.contact.email}`,
      icon: RiMailLine,
      accent: '#818cf8',
      bgGlow: 'rgba(129,140,248,0.15)',
      isLive: false
    },
    {
      id: 'hours',
      title: 'Office Hours',
      subtitle: 'Visakhapatnam IST timezone',
      value: 'Mon - Sat: 9:00 AM - 7:00 PM',
      actionText: 'Sunday by Appointment',
      actionUrl: '#location-details',
      icon: RiTimeLine,
      accent: '#c084fc',
      bgGlow: 'rgba(192,132,252,0.15)',
      isLive: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#020509] text-slate-100 relative">
      
      {/* ─── Hero Banner ─── */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
        {/* Ambient Glows */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[680px] h-[380px] pointer-events-none rounded-full blur-[140px] opacity-35"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(34,211,238,0.2) 60%, transparent 80%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb back */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <RiArrowLeftLine className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-4"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
                <RiSparklingFill className="w-3.5 h-3.5 text-cyan-400" />
                <span>Connect with JVS</span>
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight"
            >
              Official Corporate Headquarters &{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #7dd3fc 45%, #818cf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Consultation Desk
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
            >
              Headquartered in Visakhapatnam, Andhra Pradesh, JVS (Jyoshna's Versatile Stability) brings together skill training, digital technology solutions, corporate event management, startup incubation, and premium hospitality. Reach out directly for corporate partnerships, student admissions, or founder advisory.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Direct Quick Reach Cards ─── */}
      <section className="relative py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {quickReachCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between"
                  style={{
                    background: 'linear-gradient(145deg, rgba(8,16,42,0.95) 0%, rgba(3,8,24,0.98) 100%)',
                    border: '1px solid rgba(56,189,248,0.18)',
                    boxShadow: '0 10px 25px -10px rgba(0,0,0,0.6)'
                  }}
                >
                  {/* Subtle corner glow */}
                  <div
                    className="absolute -top-10 -right-10 w-24 h-24 rounded-full pointer-events-none blur-2xl"
                    style={{ background: card.bgGlow }}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: card.bgGlow,
                          border: `1px solid ${card.accent}40`,
                          color: card.accent
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      {card.isLive && (
                        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Online</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-white font-heading">{card.title}</h3>
                    <p className="text-[11px] text-slate-400 mb-2">{card.subtitle}</p>
                    <p className="text-xs sm:text-sm font-semibold text-cyan-200 tracking-wide break-all">
                      {card.value}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80">
                    {card.actionUrl.startsWith('http') || card.actionUrl.startsWith('tel') || card.actionUrl.startsWith('mailto') ? (
                      <a
                        href={card.actionUrl}
                        target={card.actionUrl.startsWith('http') ? '_blank' : '_self'}
                        rel="noreferrer"
                        className="shine-hover inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>{card.actionText}</span>
                        <RiExternalLinkLine className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400 font-medium">{card.actionText}</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Main Content Grid: Interactive Form & Location Desk ─── */}
      <section className="relative py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Corporate Inquiry Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div
                className="rounded-3xl p-6 sm:p-8 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(8,16,42,0.98) 0%, rgba(3,7,22,0.99) 100%)',
                  border: '1px solid rgba(56,189,248,0.22)',
                  boxShadow: '0 25px 60px -20px rgba(0,0,0,0.8)'
                }}
              >
                {/* Glow accent */}
                <div
                  className="absolute top-0 right-0 w-60 h-60 rounded-full pointer-events-none blur-3xl opacity-20"
                  style={{ background: '#38bdf8' }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/80">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
                        Corporate Inquiry Form
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                        Direct routing to JVS Executive Leadership & Vertical Heads
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 bg-cyan-950/50 border border-cyan-500/25 px-2.5 py-1 rounded-full">
                      <RiShieldCheckLine className="w-3.5 h-3.5" />
                      <span>Verified Desk</span>
                    </span>
                  </div>

                  {submittedData ? (
                    /* Success Confirmation Card */
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="rounded-2xl p-6 sm:p-8 text-center space-y-6"
                      style={{
                        background: 'rgba(6,18,48,0.85)',
                        border: '1px solid rgba(52,211,153,0.3)'
                      }}
                    >
                      <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 shadow-lg shadow-emerald-500/10">
                        <RiCheckDoubleLine className="w-8 h-8" />
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                          Inquiry Dispatched Successfully
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                          Thank You, {submittedData.fullName}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                          Your request has been logged in the JVS Corporate Portal. Our consultation lead for <span className="text-cyan-300 font-semibold">{submittedData.vertical}</span> will review your requirements and reach out within 24 business hours.
                        </p>
                      </div>

                      {/* Reference metadata badge */}
                      <div className="inline-block bg-slate-900/90 border border-cyan-500/30 rounded-xl px-5 py-3 text-left max-w-md w-full">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-slate-400 block text-[10px] uppercase">Reference ID</span>
                            <span className="font-mono text-cyan-300 font-bold">{submittedData.referenceId}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[10px] uppercase">Timeline</span>
                            <span className="text-slate-200 font-medium">{submittedData.timeline}</span>
                          </div>
                          <div className="col-span-2 pt-1 border-t border-slate-800">
                            <span className="text-slate-400 block text-[10px] uppercase">Email & Phone</span>
                            <span className="text-slate-300">{submittedData.email} • {submittedData.phone}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                        <a
                          href={`https://wa.me/919160030342?text=${encodeURIComponent(
                            `Hello JVS Team, I submitted an inquiry with Ref ID: ${submittedData.referenceId} regarding ${submittedData.vertical}. Full Name: ${submittedData.fullName}`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 transition-all hover:scale-105"
                          style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}
                        >
                          <RiWhatsappFill className="w-4 h-4" />
                          <span>Direct Notify via WhatsApp</span>
                        </a>

                        <button
                          type="button"
                          onClick={handleReset}
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all"
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    /* The Corporate Inquiry Form */
                    <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                      
                      {/* Name & Work Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="block text-xs font-medium text-slate-300">
                            Full Name <span className="text-cyan-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="e.g. Rahul Sharma"
                            className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 text-slate-100 placeholder-slate-500 border transition-all focus:outline-none ${
                              errors.fullName && touched.fullName
                                ? 'border-red-500/70 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                                : 'border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30'
                            }`}
                          />
                          {errors.fullName && touched.fullName && (
                            <p className="text-[11px] text-red-400 font-medium">{errors.fullName}</p>
                          )}
                        </div>

                        <div className="space-y-1">
                          <label className="block text-xs font-medium text-slate-300">
                            Work Email <span className="text-cyan-400">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="e.g. rahul@organization.com"
                            className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 text-slate-100 placeholder-slate-500 border transition-all focus:outline-none ${
                              errors.email && touched.email
                                ? 'border-red-500/70 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                                : 'border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30'
                            }`}
                          />
                          {errors.email && touched.email && (
                            <p className="text-[11px] text-red-400 font-medium">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      {/* Phone Number & Organization */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="block text-xs font-medium text-slate-300">
                            Phone Number <span className="text-cyan-400">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="e.g. +91 98765 43210"
                            className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 text-slate-100 placeholder-slate-500 border transition-all focus:outline-none ${
                              errors.phone && touched.phone
                                ? 'border-red-500/70 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                                : 'border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30'
                            }`}
                          />
                          {errors.phone && touched.phone && (
                            <p className="text-[11px] text-red-400 font-medium">{errors.phone}</p>
                          )}
                        </div>

                        <div className="space-y-1">
                          <label className="block text-xs font-medium text-slate-300">
                            Organization / College <span className="text-slate-500 font-normal">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            placeholder="e.g. ABC Tech / Andhra University"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 text-slate-100 placeholder-slate-500 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Vertical of Interest & Project Timeline */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="block text-xs font-medium text-slate-300">
                            Vertical of Interest <span className="text-cyan-400">*</span>
                          </label>
                          <select
                            name="vertical"
                            value={formData.vertical}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 text-slate-100 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all focus:outline-none cursor-pointer"
                          >
                            {verticalsList.map((item) => (
                              <option key={item.value} value={item.value} className="bg-slate-900 text-slate-100">
                                {item.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="block text-xs font-medium text-slate-300">
                            Project / Engagement Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 text-slate-100 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all focus:outline-none cursor-pointer"
                          >
                            {timelineOptions.map((item) => (
                              <option key={item} value={item} className="bg-slate-900 text-slate-100">
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-1">
                        <label className="block text-xs font-medium text-slate-300">
                          Inquiry Details & Requirements <span className="text-cyan-400">*</span>
                        </label>
                        <textarea
                          rows={4}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Briefly describe what you are looking to achieve, candidate count, tech stack, event scale, or startup stage..."
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 text-slate-100 placeholder-slate-500 border transition-all focus:outline-none resize-none ${
                            errors.message && touched.message
                              ? 'border-red-500/70 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                              : 'border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30'
                          }`}
                        />
                        {errors.message && touched.message && (
                          <p className="text-[11px] text-red-400 font-medium">{errors.message}</p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full shine-hover py-3 rounded-xl font-bold text-xs sm:text-sm text-white flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none"
                          style={{
                            background: 'linear-gradient(135deg, #1d4ed8, #0891b2)',
                            boxShadow: '0 10px 25px -5px rgba(14,165,233,0.35)'
                          }}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                              </svg>
                              <span>Encrypting & Dispatching to Corporate Desk...</span>
                            </>
                          ) : (
                            <>
                              <RiSendPlaneFill className="w-4 h-4 text-cyan-300" />
                              <span>Submit Corporate Inquiry</span>
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-[11px] text-slate-500 text-center pt-1">
                        All inquiries are treated with strict confidentiality under JVS Governance protocols.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Visakhapatnam Headquarters Location Card (5 Cols) */}
            <div className="lg:col-span-5 space-y-6" id="location-details">
              
              {/* Stylized Cyber Location / Map Card */}
              <div
                className="rounded-3xl p-6 sm:p-7 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(8,16,42,0.98) 0%, rgba(3,7,22,0.99) 100%)',
                  border: '1px solid rgba(56,189,248,0.22)',
                  boxShadow: '0 25px 60px -20px rgba(0,0,0,0.8)'
                }}
              >
                {/* Visual stylized radar map representation */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-[#030713] border border-cyan-500/25 flex items-center justify-center">
                  
                  {/* Cyber grid lines */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
                      backgroundSize: '16px 16px'
                    }}
                  />

                  {/* Concentric radar rings */}
                  <div className="absolute w-28 h-28 rounded-full border border-cyan-500/30 animate-ping opacity-25" />
                  <div className="absolute w-44 h-44 rounded-full border border-cyan-500/20" />
                  <div className="absolute w-64 h-64 rounded-full border border-blue-500/15" />

                  {/* Pulsating Map Pin for Visakhapatnam */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 shadow-lg shadow-cyan-500/40 animate-bounce">
                      <RiMapPinLine className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div className="mt-1 px-2.5 py-0.5 rounded-full bg-slate-950/90 border border-cyan-500/40 text-[10px] font-mono font-bold text-cyan-300">
                      17.6868° N, 83.2185° E
                    </div>
                  </div>

                  {/* Geographic Coastal Tag */}
                  <div className="absolute bottom-2 left-3 text-[10px] font-mono text-slate-400 bg-slate-950/70 px-2 py-0.5 rounded border border-slate-800">
                    Vizag Bay Corridor • AP Hub
                  </div>
                  <div className="absolute top-2 right-3 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>HQ ACTIVE</span>
                  </div>
                </div>

                {/* Headquarters Details */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                      Registered Corporate Base
                    </span>
                    <h3 className="text-lg font-bold text-white font-heading">
                      Visakhapatnam Corporate Center
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      Visakhapatnam, PIN 530022<br />
                      Andhra Pradesh, India
                    </p>
                  </div>

                  {/* Transit & Strategic Connectivity */}
                  <div className="rounded-xl p-3.5 bg-slate-900/70 border border-slate-800/80 space-y-2 text-xs">
                    <span className="text-[11px] font-semibold text-cyan-300 flex items-center gap-1.5">
                      <RiCompass3Line className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Transit & Strategic Connectivity</span>
                    </span>
                    <ul className="space-y-1 text-slate-300 text-[11px]">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>Connected to NH16 Coastal Corridor & Tech IT Hub</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>Visakhapatnam International Airport (VTZ): ~25 mins</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>Visakhapatnam Railway Junction: ~20 mins</span>
                      </li>
                    </ul>
                  </div>

                  {/* Actions: Copy & Open Maps */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                    >
                      <RiFileCopyLine className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{copiedAddress ? 'Address Copied!' : 'Copy Address'}</span>
                    </button>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Visakhapatnam+530022+Andhra+Pradesh"
                      target="_blank"
                      rel="noreferrer"
                      className="shine-hover flex-1 py-2.5 px-3 rounded-xl text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                      style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
                    >
                      <span>Open Maps</span>
                      <RiExternalLinkLine className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Group Verification Card */}
              <div
                className="rounded-2xl p-5 border border-slate-800/80 space-y-3"
                style={{ background: 'rgba(5,11,30,0.85)' }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                    <RiBuilding4Line className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Verified JVS Group Entity
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {brochureContent.brand.fullName}
                    </p>
                  </div>
                </div>

                <div className="text-xs text-slate-300 space-y-1.5 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Official Website</span>
                    <a
                      href={`https://${brochureContent.contact.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:underline font-mono"
                    >
                      {brochureContent.contact.website}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Official Email</span>
                    <a
                      href={`mailto:${brochureContent.contact.email}`}
                      className="text-cyan-400 hover:underline font-mono"
                    >
                      {brochureContent.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Brochure Verification</span>
                    <button
                      onClick={onOpenBrochure}
                      className="text-cyan-400 hover:underline cursor-pointer"
                    >
                      View Pamphlet Source
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ Accordion Section ─── */}
      <section className="relative py-14 sm:py-20 border-t border-slate-900 bg-[#030713]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center space-y-3 mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
              <RiQuestionLine className="w-3.5 h-3.5 text-cyan-400" />
              <span>Inquiry Knowledge Base</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Answers regarding admissions, corporate partnerships, VexoBiz incubation, and consulting services.
            </p>
          </div>

          <div className="space-y-3">
            {companyData.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/80 overflow-hidden transition-all duration-200"
                  style={{
                    background: isOpen ? 'rgba(8,16,42,0.95)' : 'rgba(5,10,26,0.7)'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-cyan-500/20 text-cyan-300'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <RiArrowDownSLine className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Prompt to contact if not found */}
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400">
              Have a tailored question?{' '}
              <a
                href={brochureContent.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 font-semibold hover:underline"
              >
                Chat directly with our Visakhapatnam Help Desk on WhatsApp &rarr;
              </a>
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
