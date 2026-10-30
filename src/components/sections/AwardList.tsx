import React from 'react';
import { awardsData } from '../../content/awards';
import { Logo } from '../ui/Logo';
import { brandToLogoMap } from '../../content/logos';

export const AwardList: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-[#D5DDDB] pb-3">
        <h3 className="text-xl font-semibold text-[#10201F] tracking-tight">
          Industry awards and recognition
        </h3>
        <p className="text-xs text-[#54625F] pt-0.5">
          Recognition for large-scale enterprise execution, customer experience centres, and manufacturer partnerships.
        </p>
      </div>

      {/* Ruled Table of Awards */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-[#D5DDDB] text-xs uppercase tracking-wider text-[#54625F]">
              <th className="py-2.5 pr-6 font-semibold w-24">Year</th>
              <th className="py-2.5 pr-6 font-semibold">Award Title</th>
              <th className="py-2.5 pr-6 font-semibold">Conferring Organization</th>
              <th className="py-2.5 pr-6 font-semibold">Category / Significance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#D5DDDB]/60">
            {awardsData.map((item, index) => (
              <tr key={index} className="hover:bg-white/50">
                <td className="py-3 pr-6 font-semibold text-[#007A75] tabular-nums">
                  {item.year}
                </td>
                <td className="py-3 pr-6 font-semibold text-[#10201F]">
                  {item.award}
                </td>
                <td className="py-3 pr-6 text-[#54625F]">
                  {brandToLogoMap[item.organization] ? (
                    <div className="flex items-center gap-2">
                      <Logo id={brandToLogoMap[item.organization]} tone="light" className="h-5 max-w-[90px]" />
                      <span className="text-xs text-[#54625F]">({item.organization})</span>
                    </div>
                  ) : (
                    item.organization
                  )}
                </td>
                <td className="py-3 pr-6 text-xs text-[#10201F]">
                  {item.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
