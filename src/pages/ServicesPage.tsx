import React, { useState, useEffect } from 'react';
import { servicesData, valueAddedServices } from '../content/services';
import { ServiceRow } from '../components/sections/ServiceRow';
import { RackStagingComparison } from '../components/sections/RackStagingComparison';
import { TestReportsExcerpt } from '../components/sections/TestReportsExcerpt';
import { supportIncidentSteps, escalationMatrix } from '../content/process';
import { solutionsData } from '../content/solutions';
import { ContactBand } from '../components/sections/ContactBand';
import { Logo } from '../components/ui/Logo';
import { brandToLogoMap } from '../content/logos';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [activeStop, setActiveStop] = useState<string>('consultancy');

  const lifecycleStops = [
    { id: 'consultancy', name: 'Consultancy' },
    { id: 'design', name: 'Design' },
    { id: 'supply', name: 'Supply' },
    { id: 'implementation', name: 'Implementation' },
    { id: 'support-and-service', name: 'Support and service' },
  ];

  const handleStopClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveStop(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (const stop of lifecycleStops) {
        const el = document.getElementById(stop.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveStop(stop.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="space-y-0">
      {/* 7.1 Intro Header */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-[#F6F8F7]">
        <div className="max-w-[1200px] mx-auto px-6 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#10201F] leading-[1.15]">
            One team from first conversation to ongoing support
          </h1>
          <p className="text-lg sm:text-xl text-[#54625F] leading-relaxed max-w-[64ch]">
            We take responsibility for the whole life of an AV system. You can hire us for one stage, but most of our clients give us all five.
          </p>
        </div>
      </section>

      {/* Sticky Five-Stop Lifecycle Line */}
      <nav
        aria-label="Lifecycle service stages"
        className="sticky top-20 z-40 bg-[#F6F8F7]/95 backdrop-blur-xs border-b border-[#D5DDDB] py-3.5"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between relative overflow-x-auto no-scrollbar gap-4">
            {/* Background connecting rule */}
            <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-0.5 bg-[#D5DDDB] hidden sm:block pointer-events-none" />

            {lifecycleStops.map((stop) => {
              const isActive = activeStop === stop.id;
              return (
                <a
                  key={stop.id}
                  href={`#${stop.id}`}
                  onClick={(e) => handleStopClick(e, stop.id)}
                  className={`relative z-10 px-3 py-1.5 text-xs sm:text-sm font-medium transition-all shrink-0 border ${
                    isActive
                      ? 'bg-[#007A75] text-[#F6F8F7] border-[#007A75]'
                      : 'bg-[#F6F8F7] text-[#54625F] border-[#D5DDDB] hover:text-[#10201F] hover:border-[#10201F]'
                  }`}
                >
                  {stop.name}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 7.2 The Five Services (Ruled Rows) */}
      <section className="py-8 border-b border-[#D5DDDB] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          {servicesData.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* 7.3 Value-Added Services */}
      <section className="py-16 sm:py-24 border-b border-[#D5DDDB] bg-[#F6F8F7]">
        <div className="max-w-[1200px] mx-auto px-6 space-y-16">
          <div className="border-b border-[#D5DDDB] pb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
              What we do beyond the standard scope
            </h2>
            <p className="text-sm text-[#54625F] pt-1">
              Three operational practices that protect project timelines and long-term uptime.
            </p>
          </div>

          {/* 1. Rack Staging */}
          <div className="space-y-6">
            <div className="max-w-[68ch] space-y-2">
              <h3 className="text-2xl font-semibold text-[#10201F] tracking-tight">
                {valueAddedServices.rackStaging.title}
              </h3>
              <p className="text-base text-[#54625F] leading-relaxed">
                {valueAddedServices.rackStaging.summary} Racks are pre-wired, labeled, and subjected to a 48-hour continuous burn-in test before dispatch, eliminating chaotic field wiring and delays on active construction sites.
              </p>
            </div>
            <RackStagingComparison />
          </div>

          {/* 2. Commissioning and Testing (AQ-AV CQT) */}
          <div className="space-y-6 pt-6 border-t border-[#D5DDDB]">
            <div className="max-w-[68ch] space-y-2">
              <h3 className="text-2xl font-semibold text-[#10201F] tracking-tight">
                {valueAddedServices.cqtTesting.title}
              </h3>
              <p className="text-base text-[#54625F] leading-relaxed">
                {valueAddedServices.cqtTesting.summary} We produce verifiable reports covering video luminance, EDID timings, STIPA acoustics, and permanent link cable margins.
              </p>
            </div>
            <TestReportsExcerpt />
          </div>

          {/* 3. Managed Services */}
          <div className="space-y-6 pt-6 border-t border-[#D5DDDB]">
            <div className="max-w-[68ch] space-y-2">
              <h3 className="text-2xl font-semibold text-[#10201F] tracking-tight">
                {valueAddedServices.managedServices.title}
              </h3>
              <p className="text-base text-[#54625F] leading-relaxed">
                {valueAddedServices.managedServices.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {valueAddedServices.managedServices.examples.map((item, i) => {
                const logoId = brandToLogoMap[item.client] || item.client.toLowerCase();
                return (
                  <div key={i} className="p-5 bg-white border border-[#D5DDDB] space-y-3">
                    <span className="text-xs font-semibold text-[#007A75] uppercase tracking-wider block">
                      Overseas Managed SLA
                    </span>
                    <div className="h-8 flex items-center">
                      <Logo id={logoId} tone="light" className="h-7 max-w-[130px]" />
                    </div>
                    <div className="text-xs text-[#54625F] pt-1 border-t border-[#D5DDDB]/60">
                      Regions: {item.geography}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7.4 Support Model & Escalation */}
      <section className="py-16 sm:py-24 border-b border-[#D5DDDB] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 space-y-12">
          <div className="border-b border-[#D5DDDB] pb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
              How a support request is handled
            </h2>
            <p className="text-sm text-[#54625F] pt-1">
              A structured SLA resolution procedure from initial notification through root-cause reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Numbered Flow: 5 Steps (Columns 1-7) */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-lg font-semibold text-[#10201F]">
                Standard SLA lifecycle
              </h3>
              <div className="space-y-4">
                {supportIncidentSteps.map((step) => (
                  <div key={step.step} className="p-4 bg-[#F6F8F7] border border-[#D5DDDB] flex items-start gap-4">
                    <span className="font-semibold text-lg text-[#007A75] tabular-nums shrink-0 pt-0.5">
                      0{step.step}
                    </span>
                    <div className="space-y-1 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <span className="font-semibold text-sm text-[#10201F]">{step.title}</span>
                        <span className="text-xs text-[#007A75] font-medium">{step.timeline}</span>
                      </div>
                      <p className="text-xs text-[#54625F] leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Escalation Matrix: (Columns 8-12) */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-lg font-semibold text-[#10201F]">
                Technical escalation path
              </h3>
              <div className="space-y-3">
                {escalationMatrix.map((esc) => (
                  <div key={esc.level} className="p-4 bg-[#F6F8F7] border-l-4 border-l-[#007A75] border border-[#D5DDDB] space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-[#007A75]">{esc.level} Tier</span>
                      <span className="text-[#10201F]">{esc.role}</span>
                    </div>
                    <p className="text-xs text-[#54625F] leading-snug">
                      {esc.responsibility}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#10201F] text-[#F6F8F7] text-xs space-y-2">
                <span className="font-semibold text-[#2CCFC0] block">
                  OEM Warranty RMA Acceleration
                </span>
                <p className="text-[#D5DDDB] leading-relaxed">
                  As certified tier-1 partners with Crestron, Q-SYS, Shure, and Sony, our service desk possesses direct factory replacement lines, bypassing third-party repair queues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.5 Spaces We Build Strip */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-[#F6F8F7]">
        <div className="max-w-[1200px] mx-auto px-6 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#D5DDDB] pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
                Spaces we build
              </h2>
              <p className="text-sm text-[#54625F] pt-1">
                Explore architectural layouts, capacity ranges, and equipment schedules.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/solutions')}
              className="text-sm font-medium text-[#007A75] underline underline-offset-4 hover:text-[#10201F]"
            >
              View detailed solutions
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {solutionsData.map((s) => (
              <div
                key={s.id}
                onClick={() => onNavigate(`/solutions#${s.slug}`)}
                className="p-4 bg-white border border-[#D5DDDB] hover:border-[#007A75] cursor-pointer space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#007A75] block truncate">
                    {s.roomCode.split('·')[0]}
                  </span>
                  <div className="text-sm font-semibold text-[#10201F] leading-tight pt-1">
                    {s.name}
                  </div>
                </div>
                <div className="text-[11px] text-[#54625F] tabular-nums border-t border-[#D5DDDB]/60 pt-2">
                  {s.spacesDeployed2024} rooms
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7.6 Closing Band */}
      <ContactBand
        title="Not sure which stage you need?"
        description="Tell us where your project is. We can start at any point in the lifecycle."
        buttonLabel="Talk to our team"
        onNavigate={onNavigate}
      />
    </div>
  );
};
