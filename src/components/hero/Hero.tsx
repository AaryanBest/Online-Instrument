import React, { useState, useEffect } from 'react';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [showPhoto, setShowPhoto] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setShowPhoto(true);
      return;
    }

    // Step 2 & 3: Floor plan draws 0-1400ms, then cross-fades to photo at 1450ms
    const timer = setTimeout(() => {
      setShowPhoto(true);
    }, 1450);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F6F8F7] border-b border-[#D5DDDB] min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Brand motif: faint teal wave lines behind text column only (10-14 lines, ~15-20% opacity) */}
      <div
        className="absolute left-0 top-0 w-full lg:w-1/2 h-full pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full opacity-18 text-[#007A75]"
          viewBox="0 0 600 600"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {Array.from({ length: 12 }).map((_, i) => {
            const yOffset = 180 + i * 22;
            const ctrl1Y = yOffset - 40 + i * 4;
            const ctrl2Y = yOffset + 40 - i * 3;
            return (
              <path
                key={i}
                d={`M -50 ${yOffset} C 180 ${ctrl1Y}, 380 ${ctrl2Y}, 650 ${yOffset - 15}`}
                opacity={0.3 + (i % 3) * 0.25}
              />
            );
          })}
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 w-full py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 5 of 12 columns, vertically centred, left-aligned */}
          <div className="lg:col-span-5 z-10 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-semibold tracking-tight text-[#10201F] leading-[1.12]">
              We design, supply, install and support the AV in your workplaces.
            </h1>

            <p className="text-base sm:text-lg text-[#54625F] leading-relaxed max-w-[54ch]">
              Online Instruments has been building meeting rooms, training rooms, command centres and auditoriums since 2006, for Amazon, Google, Micron, Siemens and Deloitte among others.
            </p>

            {/* Actions: Primary button + secondary text link (no decorative arrows) */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                onClick={() => onNavigate('/projects')}
                className="rounded-[4px] px-6 py-3 text-sm font-medium bg-[#007A75] text-[#F6F8F7] hover:bg-[#006965] active:bg-[#005a56] transition-colors focus-visible:outline-[#007A75] focus-visible:outline-offset-2"
              >
                See our projects
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="text-sm font-medium text-[#007A75] underline underline-offset-4 hover:text-[#10201F] transition-colors focus-visible:outline-[#007A75]"
              >
                Talk to our team
              </button>
            </div>

            {/* Small plain sentence under buttons */}
            <div className="pt-2">
              <p className="text-xs sm:text-sm text-[#54625F] leading-normal">
                Based in Bengaluru, with 18 offices across India, Asia, the Middle East and the USA.
              </p>
            </div>
          </div>

          {/* Right Column: Starts at column 6 and bleeds off edge on desktop */}
          <div className="lg:col-span-7 relative w-full h-[360px] sm:h-[420px] lg:h-[500px] border border-[#D5DDDB] bg-white overflow-hidden shadow-xs">
            {/* The Floor Plan Drawing (Stroke-draws 0-1400ms) */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                showPhoto ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <svg
                viewBox="0 0 800 520"
                className="w-full h-full bg-[#FBFDFD]"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Architectural Grid */}
                <defs>
                  <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D5DDDB" strokeWidth="0.5" strokeOpacity="0.4" />
                  </pattern>
                </defs>
                <rect width="800" height="520" fill="url(#archGrid)" />

                {/* Primary Exterior and Corridor Walls */}
                <path
                  className="plan-stroke-wall"
                  d="M 40 40 L 760 40 L 760 480 L 40 480 Z"
                  stroke="#10201F"
                  strokeWidth="3.5"
                />

                {/* Interior Partition Walls */}
                <path
                  className="plan-stroke-wall"
                  d="M 40 180 L 320 180 L 320 40"
                  stroke="#10201F"
                  strokeWidth="2.5"
                />
                <path
                  className="plan-stroke-wall"
                  d="M 320 280 L 40 280"
                  stroke="#10201F"
                  strokeWidth="2.5"
                />
                <path
                  className="plan-stroke-wall"
                  d="M 320 40 L 320 480"
                  stroke="#10201F"
                  strokeWidth="2.5"
                />
                <path
                  className="plan-stroke-wall"
                  d="M 540 40 L 540 260 L 760 260"
                  stroke="#10201F"
                  strokeWidth="2.5"
                />

                {/* AV Zone: CONF-LG-98 · 04.213 (Main Boardroom - Tinted Teal) */}
                <rect
                  x="330"
                  y="50"
                  width="200"
                  height="200"
                  fill="#007A75"
                  className="plan-zone"
                  stroke="#007A75"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />

                {/* Conference Table and AV Microphones */}
                <ellipse
                  cx="430"
                  cy="150"
                  rx="68"
                  ry="40"
                  className="plan-stroke-wall"
                  stroke="#007A75"
                  strokeWidth="1.8"
                  fill="#FFFFFF"
                />
                {/* Ceiling Beamforming Mic Array (Shure MXA920) */}
                <rect
                  x="410"
                  y="130"
                  width="40"
                  height="40"
                  fill="#2CCFC0"
                  fillOpacity="0.3"
                  stroke="#007A75"
                  strokeWidth="1.5"
                />
                <circle cx="430" cy="150" r="4" fill="#007A75" />

                {/* Dual 85" Displays Wall Mounting */}
                <rect x="525" y="110" width="8" height="80" fill="#10201F" />
                <line x1="520" y1="90" x2="520" y2="210" stroke="#007A75" strokeWidth="2" strokeDasharray="3 3" />

                {/* Room Chairs */}
                {[-50, -25, 0, 25, 50].map((offset, i) => (
                  <React.Fragment key={i}>
                    <circle cx={430 + offset} cy={95} r="6" stroke="#54625F" strokeWidth="1" />
                    <circle cx={430 + offset} cy={205} r="6" stroke="#54625F" strokeWidth="1" />
                  </React.Fragment>
                ))}

                {/* Equipment Rack Room (RACK-04) */}
                <rect x="50" y="50" width="120" height="120" fill="#EAEFEF" stroke="#10201F" strokeWidth="1.5" />
                <rect x="60" y="60" width="30" height="24" fill="#007A75" opacity="0.8" />
                <rect x="60" y="90" width="30" height="24" fill="#007A75" opacity="0.8" />
                <rect x="60" y="120" width="30" height="24" fill="#007A75" opacity="0.8" />

                {/* Room Labels & Technical Notes */}
                <text x="340" y="75" fill="#007A75" fontSize="13" fontWeight="600">
                  CONF-LG-98 · 04.213
                </text>
                <text x="340" y="92" fill="#54625F" fontSize="10">
                  24-Seat Executive Boardroom · Dual 4K MTR
                </text>
                <text x="60" y="160" fill="#10201F" fontSize="10" fontWeight="600">
                  AV RACK 04 (STAGED)
                </text>
                <text x="60" y="320" fill="#54625F" fontSize="11" fontWeight="500">
                  HUDDLE-04.214 · ZOOM ROOM
                </text>
                <text x="560" y="75" fill="#54625F" fontSize="11" fontWeight="500">
                  TRN-DIV-02 · DIVISIBLE HALL
                </text>

                {/* Dimension Markings */}
                <line x1="330" y1="256" x2="530" y2="256" stroke="#54625F" strokeWidth="1" />
                <text x="408" y="270" fill="#54625F" fontSize="9" textAnchor="middle" className="tabular-nums">
                  9,400 mm
                </text>
              </svg>
            </div>

            {/* The Finished Room View (Cross-fades in at 1450ms) */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                showPhoto ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* High-fidelity room representation of CONF-LG-98 */}
              <div className="relative w-full h-full bg-[#10201F]">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
                  alt="Finished executive boardroom CONF-LG-98 with integrated video conferencing displays and acoustic ceiling"
                  className="w-full h-full object-cover brightness-[0.92] contrast-[1.04]"
                  loading="eager"
                />
                {/* Subtle vignette for crisp caption legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10201F]/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Permanent Caption Overlay (Blueprint rule: stays as small caption on photo) */}
            <div className="absolute bottom-4 left-4 z-20 bg-[#10201F]/90 backdrop-blur-xs text-[#F6F8F7] px-3.5 py-2 border-l-2 border-[#007A75] text-xs shadow-sm">
              <span className="font-semibold tracking-wide text-[#2CCFC0]">CONF-LG-98 · 04.213</span>
              <span className="text-[#D5DDDB] ml-2 hidden sm:inline">24-seat executive boardroom · Commissioned to AQ-AV CQT standard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
