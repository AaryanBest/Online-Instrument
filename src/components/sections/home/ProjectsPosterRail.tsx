import React, { useRef, useState } from 'react';
import { Logo } from '../../ui/Logo';

interface PosterItem {
  id: string;
  client: string;
  rooms: string;
  countries: string[];
  slug: string;
  bgColor: string;
  logoId: string;
}

interface ProjectsPosterRailProps {
  onSelectProject: (slug: string) => void;
  onNavigate: (path: string) => void;
}

export const ProjectsPosterRail: React.FC<ProjectsPosterRailProps> = ({
  onSelectProject,
  onNavigate,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const posters: PosterItem[] = [
    { id: '1', client: 'Siemens', rooms: '2,000', countries: ['IN'], slug: 'siemens', bgColor: '#062B2B', logoId: 'siemens' },
    { id: '2', client: 'Amazon', rooms: '1,500+', countries: ['IN', 'SG', 'MY'], slug: 'amazon', bgColor: '#00857E', logoId: 'amazon' },
    { id: '3', client: 'Micron', rooms: '1,500+', countries: ['IN', 'SG', 'MY', 'TW'], slug: 'micron-technologies', bgColor: '#2F7BFF', logoId: 'micron' },
    { id: '4', client: 'Deloitte USI', rooms: '1,000+', countries: ['IN'], slug: 'deloitte-usi', bgColor: '#062B2B', logoId: 'deloitte' },
    { id: '5', client: 'TCS', rooms: '1,000+', countries: ['IN', 'Global'], slug: 'tata-consultancy-services', bgColor: '#7F52A0', logoId: 'tcs' },
    { id: '6', client: 'Google', rooms: '1,000+', countries: ['IN', 'SG', 'MY'], slug: 'google', bgColor: '#00857E', logoId: 'google' },
    { id: '7', client: 'Amdocs', rooms: '1,000+', countries: ['IL', 'UK', 'US', 'PH', 'SG', 'IN'], slug: 'amdocs', bgColor: '#FF5A36', logoId: 'amdocs' },
    { id: '8', client: 'Persistent Systems', rooms: '450+', countries: ['US', 'MY', 'IN'], slug: 'persistent-systems', bgColor: '#2F7BFF', logoId: 'persistent' },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#062B2B] text-white overflow-hidden border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-white/20 pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2CE0C8] block mb-2">
              Verifiable proof of scale
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Projects &amp; repeat deployments
            </h2>
          </div>

          {/* Rail controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#062B2B] transition-colors"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#062B2B] transition-colors"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Rail of Posters (mixed widths, logos only) */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-6 sm:px-12 py-4 select-none scroll-smooth"
      >
        {posters.map((poster) => {
          const isHovered = hoveredSlug === poster.slug;
          return (
            <div
              key={poster.id}
              onClick={() => onSelectProject(poster.slug)}
              onMouseEnter={() => setHoveredSlug(poster.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
              className="shrink-0 w-[290px] sm:w-[340px] h-[440px] rounded-2xl p-7 flex flex-col justify-between cursor-pointer border border-white/20 transition-all duration-300 relative group overflow-hidden"
              style={{
                backgroundColor: isHovered ? '#000000' : poster.bgColor,
              }}
            >
              {/* Background gradient hint */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40 pointer-events-none" />

              {/* Client Logo Only */}
              <div className="relative z-10 flex items-center justify-between">
                <Logo id={poster.logoId} tone="dark" className="transform group-hover:scale-105 transition-transform" />
                <span className="font-mono text-xs text-white/60 tracking-wider">
                  {poster.countries.join(' · ')}
                </span>
              </div>

              {/* Room Count in Huge Anybody Figures */}
              <div className="relative z-10 space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#2CE0C8] font-semibold block">
                  Enterprise Volume
                </span>
                <div className="font-display text-5xl sm:text-6xl font-bold text-white tabular-nums tracking-tight">
                  {poster.rooms}
                </div>
                <span className="text-sm text-white/80 block">
                  spaces unified and supported
                </span>
              </div>

              {/* View project cursor-tag / prompt */}
              <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-semibold text-[#2CE0C8]">
                <span>View project case study</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          );
        })}

        {/* Final Panel: "All projects" */}
        <div
          onClick={() => onNavigate('/projects')}
          className="shrink-0 w-[280px] h-[440px] rounded-2xl p-7 bg-[#FF5A36] flex flex-col justify-between cursor-pointer border border-white/20 hover:brightness-110 transition-all text-white group"
        >
          <div className="font-display text-2xl font-bold">
            Explore All 10 Case Studies
          </div>
          <p className="text-sm text-white/90">
            Read comprehensive technical scopes, AQ-AV CQT test metrics, and multi-country deliverables.
          </p>
          <div className="font-display text-3xl font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
            <span>All Projects</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </section>
  );
};
