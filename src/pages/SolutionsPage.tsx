import React from 'react';
import { solutionsData } from '../content/solutions';
import { SolutionRow } from '../components/sections/SolutionRow';
import { ContactBand } from '../components/sections/ContactBand';

interface SolutionsPageProps {
  onNavigate: (path: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
  const totalDeployed = solutionsData.reduce((acc, s) => acc + s.spacesDeployed2024, 0);

  return (
    <div className="space-y-0">
      {/* Intro Header */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-[#F6F8F7]">
        <div className="max-w-[1200px] mx-auto px-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#10201F] leading-[1.15]">
              Six architectural space archetypes
            </h1>
            <span className="text-sm font-semibold text-[#007A75] tabular-nums whitespace-nowrap">
              {totalDeployed.toLocaleString()} spaces deployed (2024–25)
            </span>
          </div>
          <p className="text-lg sm:text-xl text-[#54625F] leading-relaxed max-w-[64ch]">
            Every corporate space presents distinct acoustic, line-of-sight, and compute challenges. We engineer standardised, reproducible templates tailored to the room volume, seating geometry, and collaboration platform.
          </p>

          {/* Quick jump navigation */}
          <div className="flex flex-wrap gap-2 pt-2">
            {solutionsData.map((s) => (
              <a
                key={s.id}
                href={`#${s.slug}`}
                className="text-xs px-3 py-1.5 bg-white border border-[#D5DDDB] text-[#54625F] hover:text-[#007A75] hover:border-[#007A75] font-medium"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Detailed Rows */}
      <section className="py-8 border-b border-[#D5DDDB] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          {solutionsData.map((space) => (
            <SolutionRow key={space.id} space={space} />
          ))}
        </div>
      </section>

      {/* Spaces Deployed Ledger Distribution */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-[#F6F8F7]">
        <div className="max-w-[1200px] mx-auto px-6 space-y-8">
          <div className="border-b border-[#D5DDDB] pb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
              Annual deployment breakdown (2024–25)
            </h2>
            <p className="text-sm text-[#54625F] pt-1">
              Distribution of 2,518 completed spaces across our enterprise client base.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionsData.map((space) => {
              const percent = ((space.spacesDeployed2024 / totalDeployed) * 100).toFixed(1);
              return (
                <div key={space.id} className="p-5 bg-white border border-[#D5DDDB] space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-mono text-[#007A75]">{space.roomCode.split('·')[0]}</span>
                    <span className="text-xs text-[#54625F] tabular-nums">{percent}% of annual total</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#10201F]">
                    {space.name}
                  </h3>
                  <div className="text-2xl font-semibold text-[#007A75] tabular-nums">
                    {space.spacesDeployed2024.toLocaleString()} <span className="text-xs text-[#54625F] font-normal">rooms</span>
                  </div>
                  <p className="text-xs text-[#54625F] leading-snug border-t border-[#D5DDDB]/50 pt-2">
                    Typical capacity: {space.capacity}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Band */}
      <ContactBand
        title="Planning a new workplace build or refresh?"
        description="Share your architectural floor plans or room schedules. We will prepare single-line drawings and acoustic specifications."
        buttonLabel="Send room brief"
        onNavigate={onNavigate}
      />
    </div>
  );
};
