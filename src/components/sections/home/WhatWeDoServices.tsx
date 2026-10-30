import React, { useState } from 'react';

interface ServiceRowData {
  id: string;
  name: string;
  description: string;
  photoUrl: string;
}

export const WhatWeDoServices: React.FC = () => {
  const [activeRow, setActiveRow] = useState<string | null>(null);

  const services: ServiceRowData[] = [
    {
      id: 'consultancy',
      name: 'CONSULTANCY',
      description: 'Vendor-agnostic workplace technology audits, acoustic modeling, user journey mapping, and budget formulation for multi-site enterprise rollouts.',
      photoUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'design',
      name: 'DESIGN',
      description: 'Detailed schematic engineering, single-line AV schematics, heat dissipation calcs, conduit elevations, and rack layout elevation blueprints.',
      photoUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'supply',
      name: 'SUPPLY',
      description: 'Direct procurement partnerships with tier-1 global manufacturers, guaranteed OEM warranties, bonded warehousing, and staging logistics.',
      photoUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'implementation',
      name: 'IMPLEMENTATION',
      description: 'Offsite 40-rack staging, pre-commissioning, calibrated cable looms, and clean on-site installation overseen by AVIXA CTS certified engineers.',
      photoUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'support',
      name: 'SUPPORT AND SERVICE',
      description: 'Dedicated onsite resident engineers, 24/7 remote telemetry monitoring, guaranteed SLA response times, and preventative maintenance schedules.',
      photoUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="section-pad bg-[#FFFFFF] text-[#071A1A] border-b-2 border-[#071A1A]">
      <div className="home-container space-y-12">
        {/* Section Headline */}
        <div>
          <h2 className="font-display text-[56px] sm:text-[80px] lg:text-[104px] text-[#071A1A] leading-[0.92] tracking-[0.01em] uppercase">
            FIVE SERVICES. ONE TEAM.
          </h2>
        </div>

        {/* Five Full-Width Rows */}
        <div className="border-t-2 border-[#071A1A]">
          {services.map((service) => {
            const isHovered = activeRow === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveRow(service.id)}
                onMouseLeave={() => setActiveRow(null)}
                onClick={() => setActiveRow(isHovered ? null : service.id)}
                className="relative border-b-2 border-[#071A1A] py-8 sm:py-10 transition-colors duration-250 cursor-pointer overflow-hidden group"
              >
                {/* Hover Teal Fill Sweeping from Left (250ms) */}
                <div
                  className={`absolute inset-0 bg-[#00A99D] transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] z-0 ${
                    isHovered ? 'translate-x-0' : '-translate-x-full'
                  }`}
                  aria-hidden="true"
                />

                <div className="relative z-10 grid grid-cols-12 gap-6 items-center">
                  {/* Left: Huge Bebas Service Name */}
                  <div className="col-span-12 md:col-span-6 lg:col-span-5">
                    <h3 className="font-display text-[44px] sm:text-[60px] lg:text-[76px] text-[#071A1A] leading-[0.92] tracking-[0.01em] uppercase select-none">
                      {service.name}
                    </h3>
                  </div>

                  {/* Middle / Right: One DM Sans line (max 20 words) */}
                  <div className="col-span-12 md:col-span-6 lg:col-span-5">
                    <p className="text-base sm:text-lg text-[#071A1A] font-medium leading-relaxed max-w-[48ch]">
                      {service.description}
                    </p>
                  </div>

                  {/* Right Edge: Small Photo appearing on hover */}
                  <div className="hidden lg:flex col-span-2 justify-end">
                    <div
                      className={`w-36 h-24 overflow-hidden border border-[#071A1A] transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    >
                      <img
                        src={service.photoUrl}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
