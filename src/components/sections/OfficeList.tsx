import React from 'react';
import { officesData, OfficeRegion } from '../../content/offices';

export const OfficeList: React.FC = () => {
  const regions: OfficeRegion[] = ["India", "Middle East", "Rest of Asia", "USA"];

  return (
    <div className="space-y-8">
      {regions.map((region) => {
        const officesInRegion = officesData.filter((o) => o.region === region);
        return (
          <div key={region} className="border-b border-[#D5DDDB] pb-6">
            <h3 className="text-sm font-semibold text-[#007A75] uppercase tracking-wider mb-4">
              {region} ({officesInRegion.length} {officesInRegion.length === 1 ? 'Office' : 'Offices'})
            </h3>

            {/* Ruled Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#D5DDDB] text-xs uppercase tracking-wider text-[#54625F]">
                    <th className="py-2.5 pr-6 font-semibold w-1/4">City / Location</th>
                    <th className="py-2.5 pr-6 font-semibold w-1/4">Country</th>
                    <th className="py-2.5 pr-6 font-semibold w-2/4">Operational Role &amp; Facilities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D5DDDB]/60">
                  {officesInRegion.map((office) => (
                    <tr key={office.city} className="hover:bg-white/50">
                      <td className="py-3 pr-6 font-semibold text-[#10201F]">
                        {office.city}
                        {office.hq && (
                          <span className="ml-2 text-xs font-normal text-[#007A75] bg-[#007A75]/10 px-1.5 py-0.5 border border-[#007A75]/20">
                            HQ
                          </span>
                        )}
                      </td>
                      <td className="py-3 pr-6 text-[#54625F]">
                        {office.country}
                      </td>
                      <td className="py-3 pr-6 text-xs text-[#10201F]">
                        {office.addressNote || "Regional Operations"}
                        {office.facilities && (
                          <span className="block text-[#54625F] pt-0.5">{office.facilities}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
};
