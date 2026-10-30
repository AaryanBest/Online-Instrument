import React, { useState, useEffect, useRef } from 'react';

interface SectorTile {
  sector: string;
  count: number;
  color: string;
  hoverColor: string;
  ratio: number;
}

export const SectorTreemap: React.FC = () => {
  const [hoveredTile, setHoveredTile] = useState<SectorTile | null>(null);
  const [displayTotal, setDisplayTotal] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Exact data from slide 6: 2,518 total spaces
  const sectors: SectorTile[] = [
    { sector: "Corporate", count: 1600, color: "#062B2B", hoverColor: "#0A4040", ratio: 63.5 },
    { sector: "Banking", count: 250, color: "#2F7BFF", hoverColor: "#4B90FF", ratio: 9.9 },
    { sector: "Education", count: 220, color: "#7F52A0", hoverColor: "#9B6FBC", ratio: 8.7 },
    { sector: "Healthcare", count: 180, color: "#2CE0C8", hoverColor: "#5EF0DE", ratio: 7.1 },
    { sector: "Retail", count: 120, color: "#FF5A36", hoverColor: "#FF785B", ratio: 4.8 },
    { sector: "Government", count: 85, color: "#FFC845", hoverColor: "#FFD773", ratio: 3.4 },
    { sector: "Broadcasting", count: 60, color: "#00F07A", hoverColor: "#33F394", ratio: 2.4 },
    { sector: "Airport", count: 3, color: "#E6F6F3", hoverColor: "#FFFFFF", ratio: 0.2 },
  ];

  // Number roll animation for 2,518 total spaces
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const target = 2518;
          const duration = 1200;
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setDisplayTotal(Math.floor(easeOut * target));

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setDisplayTotal(target);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-28 bg-[#00857E] text-[#FFFFFF] relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 space-y-10">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 border-b border-white/20 pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2CE0C8] block mb-2">
              Annual scale breakdown
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#FFFFFF]">
              <span className="tabular-nums">{displayTotal.toLocaleString()}</span> spaces deployed in 2024–25
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/80 max-w-[44ch] leading-relaxed">
            Enterprise rooms delivered across 8 industries. Proportional volume mapped directly from verified project records.
          </p>
        </div>

        {/* Interactive Treemap Container */}
        <div className="relative">
          {/* Tooltip */}
          {hoveredTile && (
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#062B2B] text-white px-4 py-2 text-xs rounded shadow-lg z-20 pointer-events-none flex items-center gap-3 border border-[#2CE0C8]">
              <span className="font-semibold">{hoveredTile.sector}:</span>
              <span className="text-[#2CE0C8] font-mono font-bold tabular-nums">
                {hoveredTile.count.toLocaleString()} rooms ({hoveredTile.ratio}%)
              </span>
            </div>
          )}

          {/* Proportional Treemap Grid */}
          <div className="grid grid-cols-12 gap-3 min-h-[420px] select-none">
            {/* Corporate: 1,600 (Massive anchor block - 7 of 12 cols, full height) */}
            <div
              onMouseEnter={() => setHoveredTile(sectors[0])}
              onMouseLeave={() => setHoveredTile(null)}
              className="col-span-12 md:col-span-7 bg-[#062B2B] p-6 rounded-lg border border-white/10 hover:border-[#2CE0C8] transition-all duration-200 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs uppercase tracking-wider text-[#2CE0C8] font-semibold">
                  Largest Sector
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
                  Corporate
                </h3>
                <p className="text-sm text-white/70 pt-1">
                  Global HQs, multinational software war rooms, huddles &amp; boardrooms.
                </p>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-baseline justify-between">
                <span className="font-display text-4xl sm:text-5xl font-bold text-[#2CE0C8] tabular-nums">
                  1,600
                </span>
                <span className="text-xs text-white/60">63.5% of total</span>
              </div>
            </div>

            {/* Right Cluster: 5 of 12 cols */}
            <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-3">
              {/* Banking: 250 */}
              <div
                onMouseEnter={() => setHoveredTile(sectors[1])}
                onMouseLeave={() => setHoveredTile(null)}
                className="bg-[#2F7BFF] p-4 rounded-lg hover:brightness-110 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs text-white/80 font-medium">Banking</span>
                  <div className="font-display text-2xl font-bold text-white mt-1 tabular-nums">
                    250
                  </div>
                </div>
                <span className="text-[11px] text-white/80">Trading &amp; SOCs</span>
              </div>

              {/* Education: 220 */}
              <div
                onMouseEnter={() => setHoveredTile(sectors[2])}
                onMouseLeave={() => setHoveredTile(null)}
                className="bg-[#7F52A0] p-4 rounded-lg hover:brightness-110 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs text-white/80 font-medium">Education</span>
                  <div className="font-display text-2xl font-bold text-white mt-1 tabular-nums">
                    220
                  </div>
                </div>
                <span className="text-[11px] text-white/80">Academies</span>
              </div>

              {/* Healthcare: 180 */}
              <div
                onMouseEnter={() => setHoveredTile(sectors[3])}
                onMouseLeave={() => setHoveredTile(null)}
                className="bg-[#2CE0C8] text-[#062B2B] p-4 rounded-lg hover:brightness-105 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-semibold opacity-80">Healthcare</span>
                  <div className="font-display text-2xl font-bold mt-1 tabular-nums">
                    180
                  </div>
                </div>
                <span className="text-[11px] font-medium opacity-80">Surgical Telemetry</span>
              </div>

              {/* Retail: 120 */}
              <div
                onMouseEnter={() => setHoveredTile(sectors[4])}
                onMouseLeave={() => setHoveredTile(null)}
                className="bg-[#FF5A36] p-4 rounded-lg hover:brightness-110 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs text-white/80 font-medium">Retail</span>
                  <div className="font-display text-2xl font-bold text-white mt-1 tabular-nums">
                    120
                  </div>
                </div>
                <span className="text-[11px] text-white/80">Digital Signage</span>
              </div>

              {/* Government: 85 & Broadcasting: 60 (Split row) */}
              <div
                onMouseEnter={() => setHoveredTile(sectors[5])}
                onMouseLeave={() => setHoveredTile(null)}
                className="col-span-1 bg-[#FFC845] text-[#062B2B] p-3 rounded-lg hover:brightness-105 transition-all cursor-pointer"
              >
                <span className="text-[11px] font-semibold block">Gov</span>
                <span className="font-display text-lg font-bold tabular-nums">85</span>
              </div>

              <div
                onMouseEnter={() => setHoveredTile(sectors[6])}
                onMouseLeave={() => setHoveredTile(null)}
                className="col-span-1 bg-[#00F07A] text-[#062B2B] p-3 rounded-lg hover:brightness-105 transition-all cursor-pointer"
              >
                <span className="text-[11px] font-semibold block">Broadcast</span>
                <span className="font-display text-lg font-bold tabular-nums">60</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
