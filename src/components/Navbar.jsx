import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { 
  RiMenu4Line, 
  RiCloseLine, 
  RiFilePaperLine, 
  RiArrowRightUpLine
} from 'react-icons/ri';
import { brochureContent } from '../data/jvsContent';

export default function Navbar({ onOpenBrochure }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isSubPage = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'business', label: 'Our Business', path: '/business' },
    { id: 'leadership', label: 'Leadership', path: '/leadership' },
    { id: 'pathways', label: 'Pathways', path: '/pathways' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  const isLinkActive = (link) => {
    if (link.path === '/') return location.pathname === '/';
    return location.pathname.startsWith(link.path);
  };

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    navigate(link.path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled || isSubPage
          ? 'rgba(2,5,14,0.92)'
          : 'transparent',
        backdropFilter: isScrolled || isSubPage ? 'blur(20px) saturate(1.6)' : 'none',
        WebkitBackdropFilter: isScrolled || isSubPage ? 'blur(20px) saturate(1.6)' : 'none',
        borderBottom: isScrolled || isSubPage ? '1px solid rgba(37,99,235,0.14)' : 'none',
        boxShadow: isScrolled || isSubPage ? '0 4px 40px -10px rgba(0,0,0,0.7)' : 'none',
        padding: isScrolled ? '8px 0' : '12px 0'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(37,99,235,0.25), rgba(8,145,178,0.25))',
                border: '1px solid rgba(56,189,248,0.35)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)'
              }}
            >
              <span
                className="font-black font-heading text-base"
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
            <div className="flex flex-col text-left">
              <span className="font-black font-heading text-sm text-white transition-colors group-hover:text-sky-300 leading-tight">
                JVS
              </span>
              <span className="text-[10px] font-medium leading-tight hidden sm:block" style={{ color: '#64748b' }}>
                Jyoshna's Versatile Stability
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden xl:flex items-center gap-1 rounded-full p-1.5"
            style={{
              background: 'rgba(5,10,24,0.85)',
              border: '1px solid rgba(30,58,95,0.5)',
              backdropFilter: 'blur(12px)'
            }}
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className="relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer"
                  style={{ color: active ? '#ffffff' : '#94a3b8' }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#f1f5f9'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#94a3b8'; }}
                >
                  {active && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{
                        background: 'linear-gradient(135deg, #1d4ed8, #0891b2)',
                        boxShadow: '0 0 20px -5px rgba(37,99,235,0.6)'
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenBrochure}
              className="shine-hover flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer"
              style={{
                background: 'rgba(5,12,30,0.8)',
                border: '1px solid rgba(56,189,248,0.25)',
                color: '#7dd3fc'
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.5)'; e.currentTarget.style.color = '#a5f3fc'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.25)'; e.currentTarget.style.color = '#7dd3fc'; }}
            >
              <RiFilePaperLine className="w-3.5 h-3.5 text-cyan-400" />
              <span>Brochure</span>
            </button>

            <button
              onClick={() => {
                navigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="shine-hover flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #1d4ed8, #0891b2)',
                boxShadow: '0 4px 20px -6px rgba(37,99,235,0.5)'
              }}
            >
              <span>Get in Touch</span>
              <RiArrowRightUpLine className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenBrochure}
              className="p-2 rounded-lg text-cyan-400 transition-colors cursor-pointer"
              style={{ background: 'rgba(5,12,30,0.8)', border: '1px solid rgba(56,189,248,0.25)' }}
            >
              <RiFilePaperLine className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg transition-colors cursor-pointer"
              style={{ background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(30,41,59,0.8)', color: '#94a3b8' }}
            >
              {mobileMenuOpen
                ? <RiCloseLine className="w-5 h-5 text-cyan-400" />
                : <RiMenu4Line className="w-5 h-5" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden overflow-hidden"
            style={{ background: 'rgba(2,5,14,0.98)', borderTop: '1px solid rgba(30,58,95,0.4)' }}
          >
            <div className="px-4 py-5 space-y-1.5 max-h-[85vh] overflow-y-auto">
              {navLinks.map((link) => {
                const active = isLinkActive(link);
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-left transition-all duration-200 cursor-pointer"
                    style={{
                      background: active ? 'rgba(37,99,235,0.18)' : 'transparent',
                      border: active ? '1px solid rgba(37,99,235,0.35)' : '1px solid transparent',
                      color: active ? '#7dd3fc' : '#94a3b8'
                    }}
                  >
                    <span>{link.label}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </button>
                );
              })}

              <div className="pt-4 space-y-2.5 border-t" style={{ borderColor: 'rgba(30,41,59,0.5)' }}>
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenBrochure(); }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold cursor-pointer"
                  style={{ background: 'rgba(5,15,40,0.8)', border: '1px solid rgba(56,189,248,0.3)', color: '#7dd3fc' }}
                >
                  <RiFilePaperLine className="w-4 h-4" />
                  View Official Brochure
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)', boxShadow: '0 4px 20px -6px rgba(37,99,235,0.4)' }}
                >
                  Contact JVS Headquarters
                  <RiArrowRightUpLine className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
