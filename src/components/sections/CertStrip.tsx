import React from 'react';
import { certificationsData } from '../../content/certifications';
import { Logo } from '../ui/Logo';
import { brandToLogoMap } from '../../content/logos';

export const CertStrip: React.FC = () => {
  const getCertLogoId = (body: string, name: string): string | null => {
    if (name.includes("AVIXA")) return "avixacts";
    if (name.includes("AQ-AV")) return "aqavcqt";
    if (name.includes("PSNI")) return "psni";
    if (name.includes("Dante")) return "dante";
    if (name.includes("Crestron")) return "crestron";
    if (name.includes("Q-SYS") || body.includes("QSC")) return "qsys";
    if (body.includes("Harman") || name.includes("BSS")) return "harman";
    if (body.includes("Cisco") || name.includes("Cisco")) return "cisco";
    if (body.includes("Extron") || name.includes("Extron")) return "extron";
    if (body.includes("Kramer") || name.includes("Kramer")) return "kramer";
    if (body.includes("Shure") || name.includes("Shure")) return "shure";
    if (name.includes("ISO 9001")) return "iso9001";
    if (name.includes("Great Place to Work")) return "greatplacetowork";
    return brandToLogoMap[body] || null;
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-[#D5DDDB] pb-3">
        <h3 className="text-xl font-semibold text-[#10201F] tracking-tight">
          What our engineers are certified in
        </h3>
        <p className="text-xs text-[#54625F] pt-0.5">
          Standardised credentials held across our 527 engineering, design, and deployment personnel.
        </p>
      </div>

      {/* Two-column grid with authentic issuing logos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificationsData.map((cert) => {
          const logoId = getCertLogoId(cert.body, cert.name);
          return (
            <div
              key={cert.name}
              className="p-4 bg-[#F6F8F7] border border-[#D5DDDB] flex items-center justify-between gap-4 hover:border-[#007A75] transition-colors"
            >
              <div className="space-y-1 flex-1">
                <div className="text-sm font-semibold text-[#10201F] leading-snug">
                  {cert.name}
                </div>
                <div className="text-xs text-[#54625F]">
                  {cert.body}
                </div>
              </div>
              {logoId && (
                <div className="shrink-0 h-8 flex items-center">
                  <Logo id={logoId} tone="light" className="h-6 max-w-[90px]" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
