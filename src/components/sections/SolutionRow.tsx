import React from 'react';
import { SolutionSpace } from '../../content/solutions';

interface SolutionRowProps {
  space: SolutionSpace;
}

export const SolutionRow: React.FC<SolutionRowProps> = ({ space }) => {
  return (
    <article
      id={space.slug}
      className="py-12 border-b border-[#D5DDDB] scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: Columns 1-4: Room name, code, capacity */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[#007A75] bg-[#007A75]/10 px-2 py-0.5 border border-[#007A75]/20">
              {space.roomCode}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
            {space.name}
          </h2>
          <p className="text-xs text-[#54625F] font-medium uppercase tracking-wider">
            Capacity: {space.capacity}
          </p>
          <div className="text-xs text-[#54625F] pt-2 border-t border-[#D5DDDB]/60">
            <span className="font-medium text-[#10201F] tabular-nums">{space.spacesDeployed2024.toLocaleString()}</span> spaces deployed in 2024–25
          </div>
        </div>

        {/* Right: Columns 5-12: Description, Equipment stack, Acoustics */}
        <div className="lg:col-span-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-[#10201F] leading-snug">
              {space.headline}
            </h3>
            <p className="text-base text-[#54625F] leading-relaxed max-w-[68ch]">
              {space.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#D5DDDB]/60">
            {/* Equipment stack */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#54625F] mb-3">
                Key equipment specification
              </h4>
              <ul className="space-y-2 text-sm text-[#10201F]">
                {space.keyComponents.map((comp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#007A75] select-none">—</span>
                    <span className="leading-snug">{comp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Acoustic / Environmental standard */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#54625F] mb-2">
                  Acoustic standard
                </h4>
                <p className="text-sm text-[#10201F] bg-white p-3 border border-[#D5DDDB] leading-relaxed">
                  {space.acousticConsideration}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#54625F] mb-2">
                  Frequent sectors
                </h4>
                <div className="flex flex-wrap gap-2 text-xs text-[#54625F]">
                  {space.typicalSectors.map((s, i) => (
                    <span key={i} className="text-[#10201F]">
                      {s}{i < space.typicalSectors.length - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
