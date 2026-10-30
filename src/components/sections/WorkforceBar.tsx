import React from 'react';
import { companyData } from '../../content/company';
import { Logo } from '../ui/Logo';

export const WorkforceBar: React.FC = () => {
  const { workforceTeams, totalPeople, gptwRecognition } = companyData;

  // Shades of teal for direct labeling
  const barColors = [
    '#007A75', // Projects (74.8%)
    '#1B9E98', // Supply (15.2%)
    '#4CB7B1', // Solutions Eng (6.1%)
    '#8AD1CC', // Programming (4.0%)
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#D5DDDB] pb-3">
        <h3 className="text-xl font-semibold text-[#10201F] tracking-tight">
          Workforce distribution
        </h3>
        <span className="text-sm font-semibold text-[#007A75] tabular-nums">
          {totalPeople} permanent full-time specialists
        </span>
      </div>

      {/* Proportional Segmented Horizontal Bar (No donut chart per blueprint rule) */}
      <div className="w-full h-10 flex overflow-hidden border border-[#D5DDDB]">
        {workforceTeams.map((team, idx) => (
          <div
            key={team.team}
            style={{
              width: `${team.sharePercent}%`,
              backgroundColor: barColors[idx],
            }}
            title={`${team.team}: ${team.headcount} people (${team.sharePercent}%)`}
            className="h-full relative group transition-opacity hover:opacity-90 flex items-center justify-center"
          >
            {team.sharePercent > 10 && (
              <span className="text-xs font-semibold text-white tracking-wider truncate px-2 select-none">
                {team.headcount}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Direct labels beneath bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
        {workforceTeams.map((team, idx) => (
          <div key={team.team} className="border-l-2 pl-3 space-y-0.5" style={{ borderColor: barColors[idx] }}>
            <div className="text-xs text-[#54625F] leading-tight font-medium">
              {team.team}
            </div>
            <div className="text-lg font-semibold text-[#10201F] tabular-nums">
              {team.headcount} <span className="text-xs font-normal text-[#54625F]">({team.sharePercent}%)</span>
            </div>
          </div>
        ))}
      </div>

      {/* Great Place to Work note with authentic logo */}
      <div className="p-4 bg-white border border-[#D5DDDB] flex flex-col sm:flex-row sm:items-center gap-4 text-xs sm:text-sm text-[#10201F]">
        <div className="h-10 shrink-0 flex items-center">
          <Logo id="greatplacetowork" tone="light" className="h-8 max-w-[110px]" />
        </div>
        <p className="leading-relaxed">
          {gptwRecognition}
        </p>
      </div>
    </div>
  );
};
