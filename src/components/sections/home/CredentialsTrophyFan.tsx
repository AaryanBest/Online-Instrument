import React, { useState } from 'react';
import { Logo } from '../../ui/Logo';
import { brandToLogoMap } from '../../../content/logos';

export const CredentialsTrophyFan: React.FC = () => {
  const [isFanStraight, setIsFanStraight] = useState(false);

  // Certifications row
  const certLogos = ['iso9001', 'greatplacetowork', 'psni', 'avixacts', 'aqavcqt', 'dante'];

  // Trophy awards fan (2022 to 2026)
  const trophies = [
    { year: 2026, title: "Connected Meeting Spaces Award", org: "Inavation Awards", rot: -8 },
    { year: 2025, title: "Best Customer Experience Centre Project", org: "Inavate APAC Awards", rot: -4 },
    { year: 2025, title: "Pioneering AV Manufacturer of the Year", org: "AV ICN Expo", rot: 0 },
    { year: 2025, title: "Technology Excellence & Best Sales", org: "Wesco Anixter", rot: 4 },
    { year: 2023, title: "Best Partner Award", org: "Micron Technologies", rot: 8 },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#E6F6F3] text-[#062B2B] border-b border-[#D5DDDB]">
      <div className="max-w-[1200px] mx-auto px-6 space-y-16">
        {/* Upper: Certification Logos in a tidy row */}
        <div className="space-y-6">
          <div className="border-b border-[#00857E]/20 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#00857E] block mb-1">
                Standardized quality
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#062B2B]">
                Credentials &amp; organizational standards
              </h2>
            </div>
            <span className="text-xs text-[#54625F]">
              ISO 9001:2015 Bureau Veritas · PSNI Global Partner · Great Place to Work
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {certLogos.map((cert) => (
              <div
                key={cert}
                className="p-4 bg-white rounded-xl border border-[#D5DDDB] hover:border-[#00857E] transition-colors flex items-center justify-center h-20 shadow-xs"
              >
                <Logo id={cert} tone="light" />
              </div>
            ))}
          </div>

          <p className="text-xs text-[#54625F] pt-1">
            Note: ISO 27001 (InfoSec), ISO 45001 (Health &amp; Safety), and ISO 14001 (Environmental) certifications are currently in progress.
          </p>
        </div>

        {/* Lower: Trophy Photos in an Overlapping Fan that Straightens on Hover */}
        <div className="space-y-6 pt-8 border-t border-[#00857E]/20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#00857E] block mb-1">
                Industry recognition
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#062B2B]">
                Project excellence &amp; manufacturer awards
              </h3>
            </div>
            <span className="text-xs text-[#54625F]">
              Hover cards to straighten the award fan
            </span>
          </div>

          {/* Interactive Trophy Fan Container */}
          <div
            onMouseEnter={() => setIsFanStraight(true)}
            onMouseLeave={() => setIsFanStraight(false)}
            className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-4 py-8 select-none"
          >
            {trophies.map((trophy, idx) => {
              const rotation = isFanStraight ? 0 : trophy.rot;
              return (
                <div
                  key={idx}
                  className="w-[220px] h-[260px] bg-white rounded-2xl p-5 border border-[#D5DDDB] shadow-md flex flex-col justify-between transition-all duration-300 ease-out hover:border-[#00857E] hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-[#00857E] tabular-nums">
                      {trophy.year}
                    </span>
                    <span className="text-xs font-semibold text-[#FF5A36] uppercase tracking-wider">
                      Winner
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-display text-base font-bold text-[#062B2B] leading-tight">
                      {trophy.title}
                    </h4>
                    {brandToLogoMap[trophy.org] ? (
                      <div className="pt-1.5 h-6 flex items-center">
                        <Logo id={brandToLogoMap[trophy.org]} tone="light" className="h-5 max-w-[90px]" />
                      </div>
                    ) : (
                      <p className="text-xs text-[#54625F]">
                        {trophy.org}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 border-t border-[#D5DDDB]/60 text-[11px] text-[#00857E] font-medium">
                    Verified Award
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
