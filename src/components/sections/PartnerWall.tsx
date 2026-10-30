import React from 'react';
import { partnersData } from '../../content/partners';
import { Logo } from '../ui/Logo';
import { brandToLogoMap } from '../../content/logos';

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

          {/* Single-colour ink logo wall on plain paper background with true-colour hover */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {group.names.map((name) => {
              const logoId = brandToLogoMap[name] || name.toLowerCase().replace(/[^a-z0-9]/g, '');
              return (
                <div
                  key={name}
                  className="h-18 px-4 bg-white border border-[#D5DDDB] flex items-center justify-center text-center hover:border-[#007A75] transition-colors select-none group"
                >
                  <Logo id={logoId} tone="light" className="h-7 max-w-[110px]" />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
