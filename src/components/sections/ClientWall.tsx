import React from 'react';
import { clientRelationships, pmcConsultancies } from '../../content/partners';

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

      {/* Ruled rows of client scale */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {clientRelationships.map((client) => (
          <div
            key={client.name}
            className="p-5 bg-white border border-[#D5DDDB] flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="text-2xl font-semibold text-[#007A75] tabular-nums tracking-tight">
                {client.rooms}
              </div>
              <div className="text-base font-semibold text-[#10201F] tracking-tight pt-1">
                {client.name}
              </div>
            </div>
            <div className="text-xs text-[#54625F] border-t border-[#D5DDDB]/60 pt-2 leading-relaxed">
              {client.focus}
            </div>
          </div>
        ))}
      </div>

      {/* Consultancies strip */}
      <div className="bg-[#10201F]/5 p-4 border border-[#D5DDDB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#54625F]">
        <span className="font-semibold text-[#10201F]">
          Project management consultancies we partner with on site:
        </span>
        <div className="flex flex-wrap gap-x-4 gap-y-1 font-medium text-[#10201F]">
          {pmcConsultancies.map((pmc, i) => (
            <span key={pmc}>
              {pmc}{i < pmcConsultancies.length - 1 ? ' ·' : ''}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
