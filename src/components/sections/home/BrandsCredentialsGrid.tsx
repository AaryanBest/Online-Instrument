import React from 'react';
import { Logo } from '../../ui/Logo';

export const BrandsCredentialsGrid: React.FC = () => {
  // Manufacturer partners per registry
  const manufacturers = [
    'crestron', 'qsys', 'shure', 'sony', 'samsung', 'biamp', 'extron', 'zoom',
    'logitech', 'lg', 'panasonic', 'bose', 'harman', 'kramer', 'poly',
    'sennheiser', 'jabra', 'neat', 'epson', 'meyersound', 'audiotechnica',
    'blackmagic', 'belden', 'panduit', 'chief',
  ];

  // Authorized enterprise distributors
  const distributors = [
    'wesco', 'ingrammicro', 'redington', 'brightstar', 'cdw', 'tdsynnex',
  ];

  // Achieved industry certifications per v3 brief
  // Rule: ISO 27001, 45001 and 14001 are "in progress" and omitted per prompt
  const certifications = [
    'iso9001', 'greatplacetowork', 'psni', 'avixacts', 'aqavcqt', 'dante',
  ];

  return (
    <section className="section-pad bg-[#FFFFFF] text-[#071A1A] border-b-2 border-[#071A1A]" aria-label="Brands and verified certifications">
      <div className="home-container space-y-16">
        {/* Section Headline */}
        <div>
          <h2 className="font-display text-[56px] sm:text-[80px] lg:text-[104px] text-[#071A1A] leading-[0.92] tracking-[0.01em] uppercase">
            THE BRANDS WE INSTALL.
          </h2>
          <p className="text-[#071A1A] font-medium text-lg sm:text-xl mt-3 max-w-[54ch]">
            Direct engineering partnerships, tier-1 distributor allocation, and audited quality credentials.
          </p>
        </div>

        {/* Group 1: Hardware Manufacturers (Tidy static grid, ink by default, true color on hover) */}
        <div className="space-y-4">
          <div className="border-b-2 border-[#071A1A] pb-2 flex items-center justify-between">
            <span className="font-sans font-bold text-sm tracking-wider uppercase text-[#071A1A]">
              Certified Technology Partners
            </span>
            <span className="font-mono text-xs text-[#071A1A]/60">25 GLOBAL OEMS</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-[#071A1A] border-2 border-[#071A1A]">
            {manufacturers.map((id) => (
              <div
                key={id}
                className="bg-white p-6 sm:p-8 flex items-center justify-center transition-colors duration-200 hover:bg-[#F6F8F7]"
              >
                <Logo
                  id={id}
                  tone="light"
                  className="h-7 w-auto max-w-[130px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Group 2: Authorized Distributors */}
        <div className="space-y-4">
          <div className="border-b-2 border-[#071A1A] pb-2 flex items-center justify-between">
            <span className="font-sans font-bold text-sm tracking-wider uppercase text-[#071A1A]">
              Authorized Global Distributors
            </span>
            <span className="font-mono text-xs text-[#071A1A]/60">LOGISTICS BACKBONE</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-[#071A1A] border-2 border-[#071A1A]">
            {distributors.map((id) => (
              <div
                key={id}
                className="bg-white p-6 sm:p-8 flex items-center justify-center transition-colors duration-200 hover:bg-[#F6F8F7]"
              >
                <Logo
                  id={id}
                  tone="light"
                  className="h-7 w-auto max-w-[130px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Group 3: Calibrated Quality & Organization Certifications */}
        <div className="space-y-4">
          <div className="border-b-2 border-[#071A1A] pb-2 flex items-center justify-between">
            <span className="font-sans font-bold text-sm tracking-wider uppercase text-[#071A1A]">
              Audited Standards &amp; Certifications
            </span>
            <span className="font-mono text-xs text-[#071A1A]/60">QUALITY ASSURANCE</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-[#071A1A] border-2 border-[#071A1A]">
            {certifications.map((id) => (
              <div
                key={id}
                className="bg-white p-6 sm:p-8 flex items-center justify-center transition-colors duration-200 hover:bg-[#F6F8F7]"
              >
                <Logo
                  id={id}
                  tone="light"
                  className="h-8 w-auto max-w-[130px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
