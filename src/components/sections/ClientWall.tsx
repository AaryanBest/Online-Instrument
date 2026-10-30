import React from 'react';
import { clientRelationships, pmcConsultancies } from '../../content/partners';
import { Logo } from '../ui/Logo';
import { brandToLogoMap } from '../../content/logos';

export const ClientWall: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-[#D5DDDB] pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#10201F] tracking-tight">
          Scale with repeat enterprise clients
        </h3>
        <span className="text-xs text-[#54625F]">
          Multi-campus deployments across India and APAC
        </span>
      </div>

      {/* Ruled rows of client scale with brand logos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {clientRelationships.map((client) => {
          const logoId = brandToLogoMap[client.name] || client.name.toLowerCase();
          return (
            <div
              key={client.name}
              className="p-5 bg-white border border-[#D5DDDB] flex flex-col justify-between space-y-4 hover:border-[#007A75] transition-colors group"
            >
              <div>
                <div className="text-2xl font-semibold text-[#007A75] tabular-nums tracking-tight">
                  {client.rooms}
                </div>
                {/* Brand Logo instead of plain company name */}
                <div className="pt-3 h-10 flex items-center">
                  <Logo id={logoId} tone="light" className="h-7 max-w-[130px]" />
                </div>
              </div>
              <div className="text-xs text-[#54625F] border-t border-[#D5DDDB]/60 pt-2 leading-relaxed">
                {client.focus}
              </div>
            </div>
          );
        })}
      </div>

      {/* Consultancies strip with authentic brand logos */}
      <div className="bg-white p-5 border border-[#D5DDDB] space-y-3">
        <div className="text-xs uppercase tracking-wider font-semibold text-[#54625F]">
          Project management consultancies we partner with on site
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-1">
          {pmcConsultancies.map((pmc) => {
            const logoId = brandToLogoMap[pmc] || pmc.toLowerCase().replace(/[^a-z0-9]/g, '');
            return (
              <div
                key={pmc}
                className="h-14 px-3 bg-[#F6F8F7] border border-[#D5DDDB] flex items-center justify-center hover:border-[#007A75] transition-colors"
                title={pmc}
              >
                <Logo id={logoId} tone="light" className="h-6 max-w-[100px]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
