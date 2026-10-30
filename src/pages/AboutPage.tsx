import React from 'react';
import { companyData } from '../content/company';
import { WorkforceBar } from '../components/sections/WorkforceBar';
import { CertStrip } from '../components/sections/CertStrip';
import { OfficeList } from '../components/sections/OfficeList';
import { AwardList } from '../components/sections/AwardList';
import { PartnerWall } from '../components/sections/PartnerWall';
import { ContactBand } from '../components/sections/ContactBand';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { businesses, approach3Rs, isoCertifications, dunsNumber } = companyData;

  return (
    <div className="space-y-0">
      {/* Section A: Opening */}
      <section className="py-16 sm:py-24 border-b border-[#D5DDDB] bg-[#F6F8F7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#10201F] leading-[1.15]">
                Twenty years of building rooms that people use every day.
              </h1>
              <div className="space-y-4 text-base sm:text-lg text-[#54625F] leading-relaxed max-w-[62ch]">
                <p>
                  Online Instruments was established in 2006 and is headquartered in Bengaluru. We are an audio-visual system integrator: we work out what a space needs, design it, supply the equipment, install it, test it, and look after it afterwards.
                </p>
                <p>
                  Over the years we have worked with some of the largest companies in banking, technology, healthcare and manufacturing. In 2024–25 alone we deployed more than 2,500 spaces.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 border border-[#D5DDDB] overflow-hidden bg-white shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="Online Instruments engineering and project delivery team"
                className="w-full h-[360px] object-cover grayscale contrast-[1.05]"
              />
              <div className="p-3 bg-[#10201F] text-[#F6F8F7] text-xs flex justify-between items-center">
                <span>Headquarters &amp; Staging Facility</span>
                <span className="text-[#2CCFC0]">Bengaluru, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Three businesses */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 space-y-10">
          <div className="border-b border-[#D5DDDB] pb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
              One company, three businesses
            </h2>
            <p className="text-sm text-[#54625F] pt-1">
              Integrated capabilities spanning turnkey integration, proprietary display hardware, and precision manufacturing.
            </p>
          </div>

          {/* Three tall vertical panels side-by-side with teal, blue, purple */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businesses.map((biz) => {
              const borderTopColor =
                biz.slug === 'av-system-integration'
                  ? 'border-[#007A75]'
                  : biz.slug === 'logic'
                  ? 'border-[#4F81BD]'
                  : 'border-[#7F52A0]';

              const titleColor =
                biz.slug === 'av-system-integration'
                  ? 'text-[#007A75]'
                  : biz.slug === 'logic'
                  ? 'text-[#4F81BD]'
                  : 'text-[#7F52A0]';

              return (
                <div
                  key={biz.slug}
                  className={`p-6 sm:p-8 bg-[#F6F8F7] border border-[#D5DDDB] border-t-4 ${borderTopColor} flex flex-col justify-between space-y-6 min-h-[280px]`}
                >
                  <div className="space-y-3">
                    {biz.badge && (
                      <span className="text-[11px] uppercase tracking-wider text-[#54625F] font-semibold block">
                        {biz.badge}
                      </span>
                    )}
                    <h3 className={`text-2xl font-semibold tracking-tight ${titleColor}`}>
                      {biz.name}
                    </h3>
                    <p className="text-sm text-[#54625F] leading-relaxed pt-1">
                      {biz.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#D5DDDB]/60 text-xs text-[#54625F]">
                    {biz.slug === 'av-system-integration' && "Core business · Turnkey integration & SLA"}
                    {biz.slug === 'logic' && "Commercial displays & interactive surfaces"}
                    {biz.slug === 'manufacturing' && "Custom architectural plates & rack brackets"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section C: How we approach every project (3Rs) */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-[#F6F8F7]">
        <div className="max-w-[1200px] mx-auto px-6 space-y-8">
          <div className="border-b border-[#D5DDDB] pb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
              How we approach every project
            </h2>
            <p className="text-sm text-[#54625F] pt-1">
              The 3Rs principle guiding our engineering and delivery teams.
            </p>
          </div>

          <div className="divide-y divide-[#D5DDDB]">
            {approach3Rs.map((item) => (
              <div key={item.title} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-semibold text-[#10201F] tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-base sm:text-lg text-[#54625F] leading-relaxed max-w-[66ch]">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section D: People & Certifications */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 space-y-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight mb-2">
              527 people in four teams
            </h2>
            <p className="text-sm text-[#54625F] mb-8">
              A permanent full-time technical workforce with zero reliance on outsourced third-party commissioning.
            </p>
            <WorkforceBar />
          </div>

          <div>
            <CertStrip />
          </div>
        </div>
      </section>

      {/* Section E: Where we are (Offices) */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-[#F6F8F7]">
        <div className="max-w-[1200px] mx-auto px-6 space-y-8">
          <div className="border-b border-[#D5DDDB] pb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
              Offices
            </h2>
            <p className="text-sm text-[#54625F] pt-1">
              Direct physical operations across 18 metropolitan hubs.
            </p>
          </div>
          <OfficeList />
        </div>
      </section>

      {/* Section F: Standards and credentials */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 space-y-8">
          <div className="border-b border-[#D5DDDB] pb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
              Standards we hold
            </h2>
            <p className="text-sm text-[#54625F] pt-1">
              Corporate quality frameworks and verified organizational accreditation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isoCertifications.map((item, idx) => (
              <div key={idx} className="p-5 border border-[#D5DDDB] bg-[#F6F8F7] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-base text-[#10201F]">
                    {item.standard}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-none font-medium border ${
                      item.status === 'Certified'
                        ? 'bg-[#2E8B57]/10 text-[#2E8B57] border-[#2E8B57]/30'
                        : 'bg-[#E8A317]/10 text-[#E8A317] border-[#E8A317]/30'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                {item.certifier && (
                  <p className="text-xs text-[#54625F]">Certifying authority: {item.certifier}</p>
                )}
              </div>
            ))}

            <div className="p-5 border border-[#D5DDDB] bg-[#F6F8F7] space-y-2">
              <span className="font-semibold text-base text-[#10201F] block">
                D&amp;B D-U-N-S Registered
              </span>
              <p className="text-xs text-[#54625F]">Global identifier: <span className="font-mono text-[#10201F] font-semibold">{dunsNumber}</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Section G: Awards & Recognition */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-[#F6F8F7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <AwardList />
        </div>
      </section>

      {/* Section H: Technology Partners */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <PartnerWall />
        </div>
      </section>

      {/* Section I: Closing Band */}
      <ContactBand onNavigate={onNavigate} />
    </div>
  );
};
