import React, { useEffect, useState } from 'react';
import { Logo } from '../ui/Logo';

interface SignalHeroProps {
  onNavigate: (path: string) => void;
  onSelectProject?: (slug: string) => void;
}

export const SignalHero: React.FC<SignalHeroProps> = ({ onNavigate, onSelectProject }) => {
  const [loadStage, setLoadStage] = useState<{
    waves: boolean;
    headline: boolean;
    photo: boolean;
    lead: boolean;
    logos: boolean;
  }>({
    waves: false,
    headline: false,
    photo: false,
    lead: false,
    logos: false,
  });

  const [hoveredLogoId, setHoveredLogoId] = useState<string | null>(null);

  // 8 Hero Client Logos per v3 spec: Amazon, Google, Microsoft, Deloitte, Siemens, Micron, TCS, Cisco
  const heroLogos = [
    { id: 'amazon', slug: 'amazon' },
    { id: 'google', slug: 'google' },
    { id: 'microsoft', slug: 'deloitte-usi' },
    { id: 'deloitte', slug: 'deloitte-usi' },
    { id: 'siemens', slug: 'siemens' },
    { id: 'micron', slug: 'micron-technologies' },
    { id: 'tcs', slug: 'tata-consultancy-services' },
    { id: 'cisco', slug: 'google' },
  ];

  // 1.2s Choreographed Load Sequence per spec
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setLoadStage({
        waves: true,
        headline: true,
        photo: true,
        lead: true,
        logos: true,
      });
      return;
    }

    setLoadStage((s) => ({ ...s, waves: true }));
    const t1 = setTimeout(() => setLoadStage((s) => ({ ...s, headline: true })), 100);
    const t2 = setTimeout(() => setLoadStage((s) => ({ ...s, photo: true })), 400);
    const t3 = setTimeout(() => setLoadStage((s) => ({ ...s, lead: true })), 700);
    const t4 = setTimeout(() => setLoadStage((s) => ({ ...s, logos: true })), 1000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div className="relative bg-[#00A99D] text-[#071A1A] overflow-hidden">
      {/* Hero Body: Min 100svh (or 920px max) */}
      <div className="relative min-h-[min(100svh,920px)] flex flex-col justify-between pt-24 sm:pt-28">
        {/* 20 Thin Wave Lines (Deck cover motif) in ink (#071A1A) at 0.16 opacity */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          preserveAspectRatio="none"
          viewBox="0 0 1440 920"
          style={{ opacity: 0.16 }}
        >
          {Array.from({ length: 20 }).map((_, i) => {
            const yOffset = 80 + i * 36;
            const amp = 40 + (i % 5) * 12;
            const d = `M 0 ${yOffset} C 360 ${yOffset - amp}, 720 ${yOffset + amp}, 1100 ${yOffset - amp / 2} L 1440 ${yOffset}`;
            return (
              <path
                key={i}
                d={d}
                fill="none"
                stroke="#071A1A"
                strokeWidth="1.5"
                className={loadStage.waves ? 'wave-draw-line' : ''}
                style={{
                  animationDelay: `${i * 20}ms`,
                }}
              />
            );
          })}
        </svg>

        {/* 12-Column Grid Container */}
        <div className="home-container w-full relative z-10 flex-1 flex items-center py-12 lg:py-16">
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start w-full">
            {/* Columns 1–8: Headline, Lead, Action Buttons */}
            <div className="col-span-12 lg:col-span-8 flex flex-col justify-start space-y-8 z-10">
              {/* Giant Two-Line Bebas Headline */}
              <div className="overflow-hidden">
                <h1
                  className={`font-display font-normal text-[#071A1A] tracking-[0.01em] uppercase leading-[0.92] select-none text-[76px] sm:text-[110px] md:text-[140px] lg:text-[160px] xl:text-[180px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    loadStage.headline ? 'translate-y-0' : 'translate-y-[110%]'
                  }`}
                >
                  <span className="block">ONE STANDARD.</span>
                  <span className="block">EVERY ROOM.</span>
                </h1>
              </div>

              {/* Lead Paragraph in DM Sans 500, max 62ch */}
              <div className="overflow-hidden">
                <p
                  className={`text-[#071A1A] font-medium text-[19px] sm:text-[22px] leading-[28px] sm:leading-[32px] max-w-[62ch] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    loadStage.lead ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Online Instruments designs, builds and supports meeting rooms, training rooms, command centres and auditoriums for the world's biggest companies.
                </p>
              </div>

              {/* Action Buttons: Primary Coral Pill + Secondary Underlined Text Link */}
              <div
                className={`flex flex-wrap items-center gap-6 sm:gap-8 pt-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  loadStage.lead ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <button
                  onClick={() => onNavigate('/projects')}
                  className="btn-coral-pill"
                >
                  See our projects
                </button>

                <button
                  onClick={() => onNavigate('/contact')}
                  className="link-draw-ink"
                >
                  Talk to our team
                </button>
              </div>
            </div>

            {/* Columns 9–12: High-End Boardroom Photo Card with Rounded Corners elevated vertically */}
            <div className="hidden lg:flex lg:col-span-4 justify-end relative self-start lg:-translate-y-8 xl:-translate-y-12">
              <div
                className={`w-full max-w-[400px] xl:max-w-[420px] h-[480px] lg:h-[500px] rounded-3xl overflow-hidden relative shadow-2xl border-2 border-[#071A1A]/15 bg-[#071A1A] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  loadStage.photo
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 translate-y-6'
                }`}
              >
                {/* Authentic Architectural High-End Boardroom Photography with modern AV tech */}
                <img
                  src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=85"
                  alt="Enterprise boardroom with calibrated acoustic design, integrated displays, and collaboration setup"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Subtle top gloss & bottom gradient protection */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#071A1A]/90 via-[#071A1A]/20 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Corner Pill Tag */}
                <div className="absolute top-4 right-4 bg-[#071A1A]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-[11px] font-mono tracking-wider text-[#2CE0C8] flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F07A] animate-pulse" />
                  STANDARDIZED ROOM SPEC
                </div>

                {/* Architectural Caption Card inside rounded corners */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-white/60 mb-1">
                    DEPLOYMENT BENCHMARK
                  </p>
                  <p className="text-[17px] font-medium leading-snug text-white">
                    Acoustically calibrated 4K executive collaboration suite.
                  </p>
                  <p className="text-[12px] text-white/70 mt-1">
                    Replicated consistently across 1,000+ multinational offices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ink Logo Band (96px Tall) Below Fold Line */}
        <div
          className={`w-full h-24 bg-[#071A1A] border-t border-white/10 flex items-center transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            loadStage.logos ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="home-container w-full">
            <div className="flex items-center justify-between gap-6 overflow-x-auto no-scrollbar py-2">
              {heroLogos.map((client) => {
                const isHovered = hoveredLogoId === client.id;
                const isOtherHovered = hoveredLogoId !== null && !isHovered;

                return (
                  <div
                    key={client.id}
                    onMouseEnter={() => setHoveredLogoId(client.id)}
                    onMouseLeave={() => setHoveredLogoId(null)}
                    onClick={() => onSelectProject?.(client.slug)}
                    className={`shrink-0 transition-opacity duration-200 cursor-pointer ${
                      isOtherHovered ? 'opacity-40' : 'opacity-100'
                    }`}
                  >
                    <Logo
                      id={client.id}
                      tone="dark"
                      className="h-7 w-auto transition-transform duration-200 hover:scale-105"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
