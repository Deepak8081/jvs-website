import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import VenturesShowcase from '../components/VenturesShowcase';
import PerspectivesSection from '../components/PerspectivesSection';
import ContactSection from '../components/ContactSection';
import { Link } from 'react-router-dom';
import { RiArrowRightLine, RiSparklingFill } from 'react-icons/ri';

export default function HomePage({ onOpenBrochure }) {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex-1 relative z-10">
      {/* 1. Hero Section */}
      <Hero onOpenBrochure={onOpenBrochure} />

      {/* 2. About JVS Overview Section */}
      <AboutSection />

      {/* Dedicated About Page Callout Banner - Tight & Seamless */}
      <div className="bg-[#02050e] pb-10 pt-2 border-b border-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="rounded-2xl p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(8,18,45,0.85) 0%, rgba(3,8,22,0.92) 100%)',
              border: '1px solid rgba(56,189,248,0.2)',
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.6)'
            }}
          >
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center justify-center sm:justify-start gap-1.5">
                <RiSparklingFill className="w-3.5 h-3.5" />
                <span>Dedicated Corporate Profile</span>
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                Explore the complete story & governance of JVS
              </h3>
              <p className="text-xs text-slate-300">
                Detailed profile, the three strategic pillars, and verified brochure references on our dedicated About page.
              </p>
            </div>

            <Link
              to="/about"
              className="shine-hover flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white shrink-0 shadow-md transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
            >
              <span>Read Full About Page</span>
              <RiArrowRightLine className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 3. How We Serve (8 Streams) */}
      <ServicesSection onOpenContact={scrollToContact} />

      {/* 4. Our Business (6 Verticals) */}
      <VenturesShowcase onOpenContact={scrollToContact} />

      {/* 5. Our Perspective (Leadership Quotes) */}
      <PerspectivesSection />

      {/* 6. Contact / CTA Section */}
      <ContactSection />
    </main>
  );
}
