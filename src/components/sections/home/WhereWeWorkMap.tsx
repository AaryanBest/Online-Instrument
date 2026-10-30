import React, { useState } from 'react';

interface CityPoint {
  id: string;
  name: string;
  region: 'India' | 'Middle East' | 'Rest of Asia' | 'USA';
  x: number; // percentage in SVG viewBox
  y: number;
  isHQ?: boolean;
}

export const WhereWeWorkMap: React.FC = () => {
  const [activeCityId, setActiveCityId] = useState<string | null>(null);

  // 18 direct offices across 4 regions
  const cities: CityPoint[] = [
    // India
    { id: 'bengaluru', name: 'Bengaluru', region: 'India', x: 67.5, y: 56.5, isHQ: true },
    { id: 'mumbai', name: 'Mumbai', region: 'India', x: 65.5, y: 53.0 },
    { id: 'delhi', name: 'New Delhi', region: 'India', x: 66.8, y: 46.0 },
    { id: 'chennai', name: 'Chennai', region: 'India', x: 68.2, y: 57.8 },
    { id: 'hyderabad', name: 'Hyderabad', region: 'India', x: 67.2, y: 54.0 },
    { id: 'pune', name: 'Pune', region: 'India', x: 66.0, y: 54.2 },
    { id: 'kolkata', name: 'Kolkata', region: 'India', x: 70.8, y: 50.0 },
    { id: 'ahmedabad', name: 'Ahmedabad', region: 'India', x: 64.8, y: 50.5 },
    { id: 'kochi', name: 'Kochi', region: 'India', x: 66.8, y: 60.0 },

    // Middle East
    { id: 'dubai', name: 'Dubai', region: 'Middle East', x: 59.5, y: 49.0 },
    { id: 'riyadh', name: 'Riyadh', region: 'Middle East', x: 57.0, y: 50.5 },
    { id: 'doha', name: 'Doha', region: 'Middle East', x: 58.8, y: 50.0 },

    // Rest of Asia
    { id: 'singapore', name: 'Singapore', region: 'Rest of Asia', x: 74.8, y: 64.0 },
    { id: 'kualalumpur', name: 'Kuala Lumpur', region: 'Rest of Asia', x: 73.8, y: 62.5 },
    { id: 'bangkok', name: 'Bangkok', region: 'Rest of Asia', x: 72.8, y: 54.5 },

    // USA
    { id: 'sanjose', name: 'San Jose / Silicon Valley', region: 'USA', x: 17.5, y: 41.0 },
    { id: 'austin', name: 'Austin', region: 'USA', x: 23.0, y: 46.5 },
    { id: 'newyork', name: 'New York', region: 'USA', x: 28.5, y: 39.5 },
  ];

  const regions: ('India' | 'Middle East' | 'Rest of Asia' | 'USA')[] = [
    'India',
    'Middle East',
    'Rest of Asia',
    'USA',
  ];

  return (
    <section className="section-pad bg-[#071A1A] text-white border-b border-white/10" aria-label="Global office network and map">
      <div className="home-container space-y-12">
        {/* Section Headline */}
        <div>
          <h2 className="font-display text-[56px] sm:text-[80px] lg:text-[104px] text-white leading-[0.92] tracking-[0.01em] uppercase">
            18 OFFICES. 4 REGIONS.
          </h2>
          <p className="text-white/70 font-sans text-lg mt-3 max-w-[54ch]">
            Direct engineering teams, certified field project managers, and 24/7 technical help desks across India, Middle East, Southeast Asia, and North America.
          </p>
        </div>

        {/* Content Split: Left (Office lists by region) + Right (Dot-matrix SVG World Map) */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Office Directory by Region */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {regions.map((regionName) => {
              const regionCities = cities.filter((c) => c.region === regionName);

              return (
                <div key={regionName} className="space-y-3">
                  <h3 className="font-sans font-bold text-sm tracking-wider uppercase text-[#00A99D] border-b border-white/10 pb-1">
                    {regionName}
                  </h3>
                  <ul className="space-y-1.5 font-sans text-base">
                    {regionCities.map((city) => {
                      const isActive = activeCityId === city.id;

                      return (
                        <li key={city.id}>
                          <button
                            onMouseEnter={() => setActiveCityId(city.id)}
                            onMouseLeave={() => setActiveCityId(null)}
                            className={`inline-flex items-center gap-2 transition-colors cursor-pointer text-left ${
                              isActive ? 'text-[#00A99D] font-bold' : 'text-white/80 hover:text-white'
                            }`}
                          >
                            <span>{city.name}</span>
                            {city.isHQ && (
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5A36]">
                                [Global HQ]
                              </span>
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Right: Dot-Matrix World Map in SVG */}
          <div className="col-span-12 lg:col-span-7 bg-white/[0.02] border border-white/10 p-6 sm:p-8 relative select-none">
            <svg
              viewBox="0 0 100 70"
              className="w-full h-auto aspect-[100/70]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Dot-matrix background dots */}
              <defs>
                <pattern id="dot-grid" x="0" y="0" width="2.5" height="2.5" patternUnits="userSpaceOnUse">
                  <circle cx="1.25" cy="1.25" r="0.3" fill="rgba(255,255,255,0.08)" />
                </pattern>
              </defs>

              <rect width="100" height="70" fill="url(#dot-grid)" />

              {/* Simplified world continent outlines as subtle architectural paths */}
              {/* North America */}
              <path
                d="M 12 25 L 28 20 L 32 35 L 24 45 L 18 42 Z"
                fill="none"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="0.4"
              />
              {/* South America */}
              <path
                d="M 28 46 L 35 48 L 33 64 L 26 56 Z"
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="0.4"
              />
              {/* Europe & Africa */}
              <path
                d="M 46 22 L 56 22 L 55 35 L 48 35 Z M 48 37 L 58 37 L 57 60 L 49 52 Z"
                fill="none"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="0.4"
              />
              {/* Asia & India */}
              <path
                d="M 58 20 L 82 22 L 80 42 L 72 45 L 68 58 L 62 48 L 58 35 Z"
                fill="none"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="0.4"
              />
              {/* Australia */}
              <path
                d="M 78 52 L 88 52 L 86 64 L 76 62 Z"
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="0.4"
              />

              {/* Office Dots */}
              {cities.map((city) => {
                const isActive = activeCityId === city.id;
                const isHQ = city.isHQ;

                return (
                  <g
                    key={city.id}
                    onMouseEnter={() => setActiveCityId(city.id)}
                    onMouseLeave={() => setActiveCityId(null)}
                    className="cursor-pointer"
                  >
                    {/* Active pulse ring */}
                    {isActive && (
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r="3.2"
                        fill="none"
                        stroke={isHQ ? '#FF5A36' : '#00A99D'}
                        strokeWidth="0.6"
                        className="animate-ping"
                      />
                    )}

                    {/* Outer glow ring for HQ or Active */}
                    {(isHQ || isActive) && (
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={isHQ ? '2.0' : '1.8'}
                        fill="none"
                        stroke={isHQ ? '#FF5A36' : '#00A99D'}
                        strokeWidth="0.4"
                      />
                    )}

                    {/* Main Dot: Bengaluru HQ in coral (#FF5A36), rest white (#FFFFFF) */}
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={isHQ ? '1.2' : '0.9'}
                      fill={isHQ ? '#FF5A36' : isActive ? '#00A99D' : '#FFFFFF'}
                    />

                    {/* Label on active hover */}
                    {isActive && (
                      <text
                        x={city.x}
                        y={city.y - 2.5}
                        fill="#FFFFFF"
                        fontSize="2.4"
                        fontWeight="bold"
                        textAnchor="middle"
                        className="pointer-events-none drop-shadow-sm font-sans"
                      >
                        {city.name} {isHQ && '(Global HQ)'}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Map Legend */}
            <div className="flex items-center justify-between text-xs text-white/60 pt-4 border-t border-white/10 mt-2">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A36] inline-block" />
                  <span>Bengaluru (Central Engineering HQ)</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white inline-block" />
                  <span>Regional Delivery Offices</span>
                </span>
              </div>
              <span className="font-mono text-white/40">18 DIRECT HUBS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
