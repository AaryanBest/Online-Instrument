import React from 'react';
import { ServiceItem } from '../../content/services';
import { Logo } from '../ui/Logo';
import { brandToLogoMap } from '../../content/logos';

interface ServiceRowProps {
  service: ServiceItem;
  index: number;
}

export const ServiceRow: React.FC<ServiceRowProps> = ({ service, index }) => {
  return (
    <article
      id={service.slug}
      className="py-12 border-b border-[#D5DDDB] scroll-mt-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: Columns 1-4: Service Name and One-liner */}
        <div className="lg:col-span-4 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
            {service.name}
          </h2>
          <p className="text-sm sm:text-base text-[#54625F] leading-snug">
            {service.oneLine}
          </p>
        </div>

        {/* Right: Columns 5-12: Description, You get, and Real Example */}
        <div className="lg:col-span-8 space-y-6">
          <p className="text-base sm:text-lg text-[#10201F] leading-relaxed max-w-[68ch]">
            {service.whatWeDo}
          </p>

          {/* You Get Checklist */}
          <div className="pt-2 border-t border-[#D5DDDB]/60">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#54625F] mb-3">
              You get
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-[#10201F]">
              {service.youGet.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#007A75] font-bold select-none leading-none mt-1">—</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Real Proof / Case study example */}
          <div className="p-4 bg-white border border-[#D5DDDB] rounded-none">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#007A75]">
                Real project reference
              </span>
              {brandToLogoMap[service.proofExample.client] ? (
                <Logo id={brandToLogoMap[service.proofExample.client]} tone="light" className="h-6 max-w-[110px]" />
              ) : (
                <span className="text-xs text-[#54625F] font-medium">
                  {service.proofExample.client}
                </span>
              )}
            </div>
            <p className="text-sm text-[#10201F] leading-relaxed">
              {service.proofExample.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
