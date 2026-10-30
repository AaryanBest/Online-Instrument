import React, { useState } from 'react';
import { Logo } from '../../ui/Logo';

interface ProjectsLedgerProps {
  onSelectProject?: (slug: string) => void;
  onNavigate: (path: string) => void;
}

interface ProjectLedgerRow {
  logoId: string;
  slug: string;
  roomsCount: string;
  countryCodes: string;
}

export const ProjectsLedger: React.FC<ProjectsLedgerProps> = ({ onSelectProject, onNavigate }) => {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  // Exact data from v3 brief:
  // Siemens 2,000, Amazon 1,500+, Micron 1,500+, Deloitte 1,000+, TCS 1,000+, Google 1,000+
  const projects: ProjectLedgerRow[] = [
    { logoId: 'siemens', slug: 'siemens', roomsCount: '2,000', countryCodes: 'DE / IN / US' },
    { logoId: 'amazon', slug: 'amazon', roomsCount: '1,500+', countryCodes: 'IN / US' },
    { logoId: 'micron', slug: 'micron-technologies', roomsCount: '1,500+', countryCodes: 'IN / SG / US' },
    { logoId: 'deloitte', slug: 'deloitte-usi', roomsCount: '1,000+', countryCodes: 'IN / UK / US' },
    { logoId: 'tcs', slug: 'tata-consultancy-services', roomsCount: '1,000+', countryCodes: 'IN / APAC' },
    { logoId: 'google', slug: 'google', roomsCount: '1,000+', countryCodes: 'IN / US' },
  ];

  return (
    <section className="section-pad bg-[#071A1A] text-white border-b border-white/10" aria-label="Enterprise projects ledger">
      <div className="home-container space-y-12">
        {/* Section Headline */}
        <div>
          <h2 className="font-display text-[56px] sm:text-[80px] lg:text-[104px] text-white leading-[0.92] tracking-[0.01em] uppercase">
            ROOMS WE HAVE BUILT.
          </h2>
          <p className="text-white/70 font-sans text-lg mt-3 max-w-[54ch]">
            Standardized multi-site rollouts across global HQs, manufacturing complexes, and regional offices.
          </p>
        </div>

        {/* Ledger Rows */}
        <div className="border-t border-white/20">
          {projects.map((item) => {
            const isHovered = hoveredRow === item.logoId;

            return (
              <div
                key={item.logoId}
                onMouseEnter={() => setHoveredRow(item.logoId)}
                onMouseLeave={() => setHoveredRow(null)}
                onClick={() => {
                  if (onSelectProject) {
                    onSelectProject(item.slug);
                  } else {
                    onNavigate(`/projects/${item.slug}`);
                  }
                }}
                className="relative border-b border-white/20 py-8 sm:py-10 transition-colors duration-200 cursor-pointer overflow-hidden group select-none"
              >
                {/* Hover Teal Fill (200ms) */}
                <div
                  className={`absolute inset-0 bg-[#00A99D] transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] z-0 ${
                    isHovered ? 'translate-x-0' : '-translate-x-full'
                  }`}
                  aria-hidden="true"
                />

                <div className="relative z-10 grid grid-cols-12 gap-6 items-center">
                  {/* Left: Client Logo (White on ink, switches to ink/true color on hover) */}
                  <div className="col-span-12 sm:col-span-4 lg:col-span-3 flex items-center">
                    <Logo
                      id={item.logoId}
                      tone={isHovered ? 'light' : 'dark'}
                      className="h-9 sm:h-11 w-auto max-w-[160px]"
                    />
                  </div>

                  {/* Middle: Room Count in Huge Bebas (nudges right 12px on hover) */}
                  <div className="col-span-8 sm:col-span-5 lg:col-span-6">
                    <div
                      className={`font-display text-[54px] sm:text-[72px] lg:text-[96px] leading-none tracking-[0.01em] tabular-nums transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isHovered ? 'text-[#071A1A] translate-x-3' : 'text-white translate-x-0'
                      }`}
                    >
                      {item.roomsCount}{' '}
                      <span className="font-sans text-sm sm:text-base font-bold uppercase tracking-wider opacity-75">
                        Rooms
                      </span>
                    </div>
                  </div>

                  {/* Right: Country Codes in DM Sans */}
                  <div className="col-span-4 sm:col-span-3 lg:col-span-3 text-right">
                    <span
                      className={`font-mono text-sm sm:text-base font-bold tracking-widest uppercase transition-colors duration-200 ${
                        isHovered ? 'text-[#071A1A]' : 'text-white/60'
                      }`}
                    >
                      {item.countryCodes}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Last Row: All Projects Link */}
          <div
            onClick={() => onNavigate('/projects')}
            className="border-b border-white/20 py-8 flex items-center justify-between text-white hover:text-[#00A99D] transition-colors cursor-pointer group"
          >
            <span className="font-display text-4xl sm:text-5xl uppercase tracking-[0.01em]">
              ALL PROJECTS
            </span>
            <span className="font-sans text-lg font-bold group-hover:translate-x-2 transition-transform">
              View complete archive →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
