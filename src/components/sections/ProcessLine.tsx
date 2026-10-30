import React from 'react';
import { SOPStep } from '../../content/process';

interface ProcessLineProps {
  steps: SOPStep[];
}

export const ProcessLine: React.FC<ProcessLineProps> = ({ steps }) => {
  return (
    <div className="space-y-0">
      {steps.map((step) => (
        <div
          key={step.stepNumber}
          className="py-8 border-b border-[#D5DDDB] grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
        >
          {/* Step Number & Phase: Columns 1-3 */}
          <div className="md:col-span-3 flex items-start gap-4">
            <span className="font-semibold text-2xl text-[#007A75] tabular-nums leading-none pt-0.5">
              {String(step.stepNumber).padStart(2, '0')}
            </span>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#54625F] font-semibold block">
                {step.phase}
              </span>
              <span className="text-xs text-[#54625F] block pt-1">
                Team: {step.responsibleTeam}
              </span>
            </div>
          </div>

          {/* Title & Description: Columns 4-8 */}
          <div className="md:col-span-5 space-y-2">
            <h3 className="text-xl font-semibold text-[#10201F] tracking-tight">
              {step.title}
            </h3>
            <p className="text-sm text-[#54625F] leading-relaxed">
              {step.description}
            </p>
          </div>

          {/* Deliverables / Sign-off: Columns 9-12 */}
          <div className="md:col-span-4 bg-white p-3.5 border border-[#D5DDDB] rounded-none">
            <span className="text-[11px] uppercase tracking-wider text-[#007A75] font-semibold block mb-1.5">
              Documented Deliverables
            </span>
            <ul className="space-y-1 text-xs text-[#10201F]">
              {step.deliverables.map((deliv, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-[#007A75] select-none">✓</span>
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
