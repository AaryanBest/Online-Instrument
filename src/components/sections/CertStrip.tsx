import React from 'react';
import { certificationsData } from '../../content/certifications';

export const CertStrip: React.FC = () => {
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

      {/* Two-column ruled list of credentials with certifying body in slate */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {certificationsData.map((cert) => (
          <div key={cert.name} className="py-2.5 border-b border-[#D5DDDB]/50 space-y-0.5">
            <div className="text-sm font-semibold text-[#10201F]">
              {cert.name}
            </div>
            <div className="text-xs text-[#54625F]">
              {cert.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
