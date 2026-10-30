import React from 'react';
import { Logo } from '../../ui/Logo';

export const PartnerDriftRows: React.FC = () => {
  // Row 1 Manufacturers drifting left
  const row1Manufacturers = [
    'crestron',
    'qsys',
    'shure',
    'sony',
    'samsung',
    'biamp',
    'extron',
    'zoom',
    'logitech',
    'panasonic',
    'bose',
    'jabra'
  ];

  // Row 2 Manufacturers drifting right
  const row2Manufacturers = [
    'cisco',
    'sony',
    'shure',
    'crestron',
    'samsung',
    'biamp',
    'qsys',
    'zoom',
    'extron',
    'lg',
    'harman',
    'poly'
  ];

  // Distributors static row with authentic logos
  const distributors = [
    { id: 'wesco', label: 'Wesco Anixter', role: 'Enterprise Logistics' },
    { id: 'ingrammicro', label: 'Ingram Micro', role: 'Global Distribution' },
    { id: 'redington', label: 'Redington', role: 'Regional Warehousing' },
    { id: 'brightstar', label: 'Brightstar', role: 'Commercial Supply' },
    { id: 'cdw', label: 'CDW', role: 'Corporate Procurement' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#062B2B] text-white overflow-hidden border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 space-y-12">
        <div className="border-b border-white/20 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2CE0C8] block mb-2">
              Technology Ecosystem
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              The brands we install.
            </h2>
          </div>
          <span className="text-sm text-white/80">
            Direct tier-1 OEM relationships with factory warranty escalation
          </span>
        </div>
      </div>

      {/* Row 1: Drift Left (pause on hover, true colors on hover) */}
      <div className="py-4 pause-on-hover overflow-hidden">
        <div className="animate-drift-left flex items-center gap-12 sm:gap-16">
          {[...row1Manufacturers, ...row1Manufacturers].map((id, i) => (
            <div
              key={`${id}-${i}`}
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#2CE0C8] transition-colors shrink-0 flex items-center justify-center min-w-[140px] h-18"
            >
              <Logo id={id} tone="dark" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Drift Right (pause on hover, true colors on hover) */}
      <div className="py-4 pause-on-hover overflow-hidden">
        <div className="animate-drift-right flex items-center gap-12 sm:gap-16">
          {[...row2Manufacturers, ...row2Manufacturers].map((id, i) => (
            <div
              key={`${id}-${i}`}
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#2CE0C8] transition-colors shrink-0 flex items-center justify-center min-w-[140px] h-18"
            >
              <Logo id={id} tone="dark" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 3: Distributor Brand Logos Row */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
        <div className="border-t border-white/10 pt-6">
          <span className="text-xs uppercase tracking-wider text-white/60 font-semibold block mb-4">
            Authorized Distribution &amp; Supply Chain Partners
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {distributors.map((dist) => (
              <div
                key={dist.id}
                className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between hover:border-white/30 transition-colors h-24"
              >
                <div className="h-10 flex items-center">
                  <Logo id={dist.id} tone="dark" className="h-6 max-w-[110px]" />
                </div>
                <span className="text-xs text-[#2CE0C8] pt-1">
                  {dist.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
