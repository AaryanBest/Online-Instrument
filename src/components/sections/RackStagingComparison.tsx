import React from 'react';

export const RackStagingComparison: React.FC = () => {
  const comparisons = [
    { metric: "Onsite man-hours required", traditional: 100, staged: 50, advantage: "50% fewer onsite hours", note: "Pre-wired off-site" },
    { metric: "Simulation to implementation match", traditional: 60, staged: 100, advantage: "100% match", note: "Pre-tested under full thermal load" },
    { metric: "RMA turnaround speed", traditional: 30, staged: 100, advantage: "70% faster resolution", note: "DOA caught prior to dispatch" },
    { metric: "Handover and commissioning timeline", traditional: 100, staged: 70, advantage: "30% shorter timeline", note: "Plug-and-play site tie-in" },
    { metric: "Long-term cable reliability & airflow", traditional: 65, staged: 95, advantage: "20% better quality", note: "Standardised wire lacing" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D5DDDB] pb-3">
        <div>
          <h3 className="text-xl font-semibold text-[#10201F] tracking-tight">
            Off-site rack staging efficiency
          </h3>
          <p className="text-xs text-[#54625F] pt-0.5">
            Measured against conventional on-site field assembly across 2,500+ spaces.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-5 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-[#D5DDDB] inline-block" />
            <span className="text-[#54625F]">Traditional on-site</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-[#007A75] inline-block" />
            <span className="text-[#10201F] font-medium">OI off-site staging</span>
          </div>
        </div>
      </div>

      {/* SVG Paired Comparative Bar Chart with Direct Labels */}
      <div className="space-y-4">
        {comparisons.map((item, idx) => (
          <div key={idx} className="bg-white p-4 border border-[#D5DDDB] space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm">
              <span className="font-semibold text-[#10201F]">{item.metric}</span>
              <span className="text-xs font-semibold text-[#007A75]">{item.advantage}</span>
            </div>

            {/* Paired Bar SVG */}
            <div className="w-full">
              <svg viewBox="0 0 500 36" className="w-full h-9" preserveAspectRatio="none">
                {/* Traditional Bar */}
                <rect x="0" y="4" width={(item.traditional / 100) * 500} height="11" fill="#D5DDDB" rx="0" />
                {/* Staged Bar */}
                <rect x="0" y="19" width={(item.staged / 100) * 500} height="11" fill="#007A75" rx="0" />
              </svg>
            </div>

            <div className="flex justify-between items-center text-xs text-[#54625F] pt-1">
              <span>{item.note}</span>
              <span className="tabular-nums">
                Conventional: {item.traditional} pts · Staged: {item.staged} pts
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
