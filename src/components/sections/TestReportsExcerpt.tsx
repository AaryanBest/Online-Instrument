import React, { useState } from 'react';
import { testReportsSample } from '../../content/process';

export const TestReportsExcerpt: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'video' | 'audio' | 'cable'>('video');
  const { videoReport, audioReport, cableReport } = testReportsSample;

  const currentReport =
    activeTab === 'video'
      ? { title: "Video CQT Verification Report", data: videoReport }
      : activeTab === 'audio'
      ? { title: "Acoustics & Audio CQT Report", data: audioReport }
      : { title: "Fluke DSX-5000 Permanent Link Cable Certification", data: cableReport };

  return (
    <div className="space-y-6">
      <div className="border-b border-[#D5DDDB] pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-[#10201F] tracking-tight">
            Commissioning and testing (AQ-AV CQT)
          </h3>
          <p className="text-xs text-[#54625F] pt-0.5">
            Calibrated instrument testing logged room by room prior to client handover.
          </p>
        </div>

        {/* Tab switcher: interactive buttons */}
        <div className="flex border border-[#D5DDDB] bg-white">
          {(['video', 'audio', 'cable'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
                activeTab === tab
                  ? 'bg-[#007A75] text-[#F6F8F7]'
                  : 'text-[#54625F] hover:text-[#10201F] hover:bg-[#F6F8F7]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Report Header metadata */}
      <div className="bg-white border border-[#D5DDDB] p-4 flex flex-col sm:flex-row justify-between gap-2 text-xs">
        <div>
          <span className="font-semibold text-[#10201F] block text-sm">
            {currentReport.title}
          </span>
          <span className="text-[#54625F]">
            Location: <span className="font-medium text-[#10201F]">{currentReport.data.room}</span>
          </span>
        </div>
        <div className="text-right sm:text-right">
          <span className="text-[#54625F] block">Calibrated Instrument</span>
          <span className="font-semibold text-[#007A75]">{currentReport.data.instrument}</span>
        </div>
      </div>

      {/* Real HTML Table (No screenshot, crisp & searchable) */}
      <div className="overflow-x-auto border border-[#D5DDDB] bg-white">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-[#F6F8F7] border-b border-[#D5DDDB] text-xs uppercase tracking-wider text-[#54625F]">
              <th className="py-3 px-4 font-semibold">Test Parameter</th>
              <th className="py-3 px-4 font-semibold">Standard / Target</th>
              <th className="py-3 px-4 font-semibold">Measured Result</th>
              <th className="py-3 px-4 font-semibold text-right">Verification</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#D5DDDB]">
            {currentReport.data.tests.map((row, i) => (
              <tr key={i} className="hover:bg-[#F6F8F7]/50">
                <td className="py-3 px-4 font-medium text-[#10201F]">
                  {row.parameter}
                </td>
                <td className="py-3 px-4 text-[#54625F]">
                  {row.target}
                </td>
                <td className="py-3 px-4 font-mono text-xs text-[#10201F]">
                  {row.measured}
                </td>
                <td className="py-3 px-4 text-right">
                  {/* Status chip: pill only for status chips in test reports, marked by colour AND text */}
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#2E8B57]/15 text-[#2E8B57] border border-[#2E8B57]/30">
                    PASS
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Calibrated Tools Strip */}
      <div className="p-3.5 bg-[#F6F8F7] border border-[#D5DDDB] text-xs text-[#54625F] flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="font-semibold text-[#10201F]">Calibrated field instruments:</span>
        <span>Fluke 62 MAX (thermal)</span>
        <span>·</span>
        <span>NTi XL2 with M4260 (SPL &amp; RT60)</span>
        <span>·</span>
        <span>Klein Tools CL700 (load)</span>
        <span>·</span>
        <span>Murideo Fox &amp; Hound (4K video)</span>
        <span>·</span>
        <span>Fluke DSX-5000 (Cat6A cable)</span>
      </div>
    </div>
  );
};
