import React from 'react';
import { partnersData } from '../../content/partners';

export const PartnerWall: React.FC = () => {
  return (
    <div className="space-y-10">
      {partnersData.map((group) => (
        <div key={group.groupName} className="space-y-4">
          <div className="border-b border-[#D5DDDB] pb-3">
            <h3 className="text-xl font-semibold text-[#10201F] tracking-tight">
              {group.groupName}
            </h3>
            <p className="text-xs text-[#54625F] pt-0.5">
              {group.description}
            </p>
          </div>

          {/* Single-colour ink logo/typography wall on plain paper background. Generous spacing. No marquee! */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {group.names.map((name) => (
              <div
                key={name}
                className="h-16 px-4 bg-white border border-[#D5DDDB] flex items-center justify-center text-center hover:border-[#007A75] transition-colors select-none"
              >
                <span className="text-xs font-semibold text-[#10201F] tracking-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
