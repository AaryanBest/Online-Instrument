import React, { useState } from 'react';
import { solutionsData } from '../../../content/solutions';

interface SpacesExpandingStripProps {
  onNavigate: (path: string) => void;
}

export const SpacesExpandingStrip: React.FC<SpacesExpandingStripProps> = ({ onNavigate }) => {
  const [activeStripId, setActiveStripId] = useState<string>(solutionsData[0].id);

  // Tint palette for each of the six strips
  const stripTints: Record<string, { tint: string; bgClass: string; img: string }> = {
    'meeting-rooms': {
      tint: '#00857E',
      bgClass: 'bg-[#00857E]',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    },
    'training-rooms': {
      tint: '#2F7BFF',
      bgClass: 'bg-[#2F7BFF]',
      img: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1000&q=80',
    },
    'command-centres': {
      tint: '#062B2B',
      bgClass: 'bg-[#062B2B]',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80',
    },
    'customer-experience-centres': {
      tint: '#7F52A0',
      bgClass: 'bg-[#7F52A0]',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    },
    'digital-signage': {
      tint: '#FF5A36',
      bgClass: 'bg-[#FF5A36]',
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    },
    'auditoriums': {
      tint: '#2CE0C8',
      bgClass: 'bg-[#2CE0C8]',
      img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80',
    },
  };

  return (
    <section className="py-20 sm:py-28 bg-[#062B2B] text-white border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-white/20 pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2CE0C8] block mb-2">
              Architectural archetypes
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Spaces we build
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/solutions')}
            className="link-draw text-sm font-medium text-[#2CE0C8] hover:text-white"
          >
            Explore technical room schedules →
          </button>
        </div>

        {/* Six Vertical Strips Side by Side (Desktop) / Accordion (Mobile) */}
        <div className="hidden lg:flex w-full h-[520px] gap-2 overflow-hidden select-none">
          {solutionsData.map((space) => {
            const isActive = activeStripId === space.id;
            const theme = stripTints[space.id] || { tint: '#00857E', img: '' };

            return (
              <div
                key={space.id}
                onMouseEnter={() => setActiveStripId(space.id)}
                onClick={() => onNavigate(`/solutions#${space.slug}`)}
                className={`relative h-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-lg overflow-hidden cursor-pointer ${
                  isActive ? 'flex-[3.2]' : 'flex-1 hover:flex-[1.2]'
                }`}
                style={{ borderColor: theme.tint }}
              >
                {/* Background Room Photo with zoom on active */}
                <img
                  src={theme.img}
                  alt={space.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
                    isActive ? 'scale-100' : 'scale-115 grayscale contrast-125'
                  }`}
                />

                {/* Tint Overlay (lifts when active) */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive ? 'bg-gradient-to-t from-black/90 via-black/40 to-black/10' : 'bg-black/75'
                  }`}
                  style={{
                    backgroundColor: !isActive ? `${theme.tint}88` : undefined,
                  }}
                />

                {/* Inactive Vertical Title State */}
                {!isActive && (
                  <div className="absolute inset-0 p-6 flex flex-col justify-end items-center">
                    <span className="font-display text-lg font-bold text-white tracking-wider [writing-mode:vertical-rl] rotate-180 uppercase">
                      {space.name}
                    </span>
                    <span className="font-mono text-xs text-[#2CE0C8] mt-4">
                      {space.roomCode.split('·')[0]}
                    </span>
                  </div>
                )}

                {/* Active Expanded State */}
                {isActive && (
                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold px-2 py-1 bg-black/60 rounded text-[#2CE0C8] border border-[#2CE0C8]/40">
                        {space.roomCode}
                      </span>
                      <span className="text-xs text-white/80 tabular-nums font-semibold">
                        {space.spacesDeployed2024} rooms deployed
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-display text-3xl font-bold text-white">
                        {space.name}
                      </h3>
                      <p className="text-sm text-white/90 max-w-[40ch] leading-relaxed line-clamp-3">
                        {space.headline}
                      </p>
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2CE0C8] hover:underline">
                          View room engineering specification →
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Stacked Accordion */}
        <div className="lg:hidden space-y-3">
          {solutionsData.map((space) => {
            const isActive = activeStripId === space.id;
            const theme = stripTints[space.id] || { tint: '#00857E', img: '' };

            return (
              <div
                key={space.id}
                onClick={() => setActiveStripId(space.id)}
                className="rounded-lg overflow-hidden border border-white/20 bg-black/40"
              >
                <div className="p-4 flex items-center justify-between cursor-pointer">
                  <span className="font-display text-xl font-bold text-white">
                    {space.name}
                  </span>
                  <span className="text-xs text-[#2CE0C8] font-mono">
                    {space.spacesDeployed2024} rooms
                  </span>
                </div>

                {isActive && (
                  <div className="p-4 pt-0 space-y-3">
                    <p className="text-xs text-white/80 leading-relaxed">
                      {space.headline}
                    </p>
                    <button
                      onClick={() => onNavigate(`/solutions#${space.slug}`)}
                      className="text-xs font-semibold text-[#2CE0C8] underline"
                    >
                      View room specifications
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
