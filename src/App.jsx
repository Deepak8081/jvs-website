import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BrochureModal from './components/BrochureModal';
import ParticleCanvas from './components/ParticleCanvas';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import BusinessPage from './pages/BusinessPage';
import VentureDetailPage from './pages/VentureDetailPage';
import LeadershipPage from './pages/LeadershipPage';
import PathwaysPage from './pages/PathwaysPage';
import ContactPage from './pages/ContactPage';
import BrochurePage from './pages/BrochurePage';

import { RiWhatsappFill, RiFilePaperLine } from 'react-icons/ri';
import { brochureContent } from './data/jvsContent';

export default function App() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* Scroll restoration helper */}
      <ScrollToTop />

      <div className="min-h-screen bg-[#020509] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200 relative">
        
        {/* 1. Interactive Cyber Particle Canvas */}
        <ParticleCanvas />

        {/* 2. Sticky Glass Navigation Bar */}
        <Navbar onOpenBrochure={() => setIsBrochureOpen(true)} />

        {/* 3. Comprehensive Multi-Page Corporate Ecosystem Routes */}
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage onOpenBrochure={() => setIsBrochureOpen(true)} />} 
            />
            <Route 
              path="/about" 
              element={<AboutPage onOpenBrochure={() => setIsBrochureOpen(true)} />} 
            />
            <Route 
              path="/services" 
              element={<ServicesPage onOpenBrochure={() => setIsBrochureOpen(true)} />} 
            />
            <Route 
              path="/services/:id" 
              element={<ServiceDetailPage onOpenBrochure={() => setIsBrochureOpen(true)} />} 
            />
            <Route 
              path="/business" 
              element={<BusinessPage onOpenBrochure={() => setIsBrochureOpen(true)} />} 
            />
            <Route 
              path="/business/:id" 
              element={<VentureDetailPage onOpenBrochure={() => setIsBrochureOpen(true)} />} 
            />
            <Route 
              path="/leadership" 
              element={<LeadershipPage onOpenBrochure={() => setIsBrochureOpen(true)} />} 
            />
            <Route 
              path="/pathways" 
              element={<PathwaysPage onOpenBrochure={() => setIsBrochureOpen(true)} />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage onOpenBrochure={() => setIsBrochureOpen(true)} />} 
            />
            <Route 
              path="/brochure" 
              element={<BrochurePage onOpenBrochure={() => setIsBrochureOpen(true)} />} 
            />

            {/* Fallback route */}
            <Route 
              path="*" 
              element={<HomePage onOpenBrochure={() => setIsBrochureOpen(true)} />} 
            />
          </Routes>
        </div>

        {/* 4. Premium Corporate Footer */}
        <Footer onOpenBrochure={() => setIsBrochureOpen(true)} />

        {/* 5. Official Brochure PDF Viewer Modal */}
        <BrochureModal
          isOpen={isBrochureOpen}
          onClose={() => setIsBrochureOpen(false)}
        />

        {/* 6. Floating Quick Actions */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
          {/* Quick Brochure Trigger */}
          <button
            onClick={() => setIsBrochureOpen(true)}
            className="shine-hover flex items-center gap-2 px-4 py-2.5 rounded-full text-cyan-300 border backdrop-blur-md text-xs font-bold transition-all hover:scale-105 cursor-pointer"
            style={{
              background: 'rgba(8,16,40,0.92)',
              borderColor: 'rgba(56,189,248,0.4)',
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.8)'
            }}
            title="Open Brochure PDF"
          >
            <RiFilePaperLine className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">Brochure PDF</span>
          </button>

          {/* Direct WhatsApp Quick Chat */}
          <a
            href={brochureContent.contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-13 h-13 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 group"
            style={{
              background: 'linear-gradient(135deg, #10b981, #34d399)',
              boxShadow: '0 10px 30px -5px rgba(16,185,129,0.5)'
            }}
            title="Chat directly on WhatsApp"
          >
            <RiWhatsappFill className="w-6 h-6 text-slate-950 group-hover:scale-110 transition-transform" />
          </a>
        </div>

      </div>
    </BrowserRouter>
  );
}
