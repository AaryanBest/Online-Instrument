import React, { useState, useEffect, useRef } from 'react';

interface SectorSegment {
  name: string;
  count: number;
  ratio: number;
  color: string;
  label: string;
}

export const ScaleSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [animated, setAnimated] = useState(false);
  const [displayTotal, setDisplayTotal] = useState(0);
  const [hoveredSegment, setHoveredSegment] = useState<SectorSegment | null>(null);

  // Exact data from brief: 2,518 total spaces
  // Segments alternate teal (#00A99D) and white (#FFFFFF); coral (#FF5A36) for Airport sliver
  const segments: SectorSegment[] = [
    { name: 'Corporate', count: 1600, ratio: 63.5, color: '#00A99D', label: 'Corporate 1,600' },
    { name: 'Banking', count: 250, ratio: 9.9, color: '#FFFFFF', label: 'Banking 250' },
    { name: 'Education', count: 220, ratio: 8.7, color: '#00A99D', label: 'Education 220' },
    { name: 'Healthcare', count: 180, ratio: 7.1, color: '#FFFFFF', label: 'Healthcare 180' },
    { name: 'Retail', count: 120, ratio: 4.8, color: '#00A99D', label: 'Retail 120' },
    { name: 'Government', count: 85, ratio: 3.4, color: '#FFFFFF', label: 'Gov 85' },
    { name: 'Broadcasting', count: 60, ratio: 2.4, color: '#00A99D', label: 'Broadcast 60' },
    { name: 'Airport', count: 3, ratio: 0.2, color: '#FF5A36', label: 'Airport 3' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          const target = 2518;
          const duration = 1200;
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
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
  }, [animated]);

  return (
    <section
      ref={containerRef}
      className="section-pad bg-[#071A1A] text-white border-b border-white/10"
      aria-label="Annual scale breakdown"
    >
      <div className="home-container space-y-12">
        {/* Giant Figure and Headline side-by-side */}
        <div className="grid grid-cols-12 gap-6 items-baseline">
          <div className="col-span-12 lg:col-span-6 flex items-baseline gap-4">
            <span className="font-display text-[96px] sm:text-[140px] lg:text-[180px] xl:text-[210px] text-[#00A99D] leading-[0.88] tabular-nums select-none">
              {displayTotal.toLocaleString()}
            </span>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <h2 className="font-display text-[48px] sm:text-[64px] lg:text-[80px] text-white leading-[0.92] tracking-[0.01em] uppercase">
              SPACES DEPLOYED IN 2024–25
            </h2>
            <p className="text-white/70 font-sans text-lg mt-3 max-w-[54ch]">
              Enterprise meeting rooms, training facilities, and operations centers delivered across 8 industries. Proportional volume mapped directly from verified project records.
            </p>
          </div>
        </div>

        {/* Proportional Horizontal Capacity Bar */}
        <div className="space-y-4 pt-4 relative">
          {/* Hover Tooltip */}
          {hoveredSegment && (
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#00A99D] text-[#071A1A] px-4 py-1.5 text-sm font-bold shadow-md z-20 pointer-events-none flex items-center gap-2 whitespace-nowrap">
              <span>{hoveredSegment.name}:</span>
              <span className="font-mono tabular-nums">{hoveredSegment.count.toLocaleString()} rooms ({hoveredSegment.ratio}%)</span>
            </div>
          )}

          {/* Single Horizontal Bar */}
          <div className="w-full h-12 bg-white/5 flex items-stretch overflow-hidden select-none">
            {segments.map((seg) => (
              <div
                key={seg.name}
                onMouseEnter={() => setHoveredSegment(seg)}
                onMouseLeave={() => setHoveredSegment(null)}
                className="h-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:brightness-125 cursor-pointer relative"
                style={{
                  width: animated ? `${Math.max(seg.ratio, 0.4)}%` : '0%',
                  backgroundColor: seg.color,
                }}
                title={`${seg.name}: ${seg.count} rooms (${seg.ratio}%)`}
              />
            ))}
          </div>

          {/* Labels directly under each segment */}
          <div className="flex items-start justify-between text-xs sm:text-sm font-medium text-white/70 overflow-x-auto gap-4 pt-1">
            {segments.map((seg) => (
              <div
                key={seg.name}
                onMouseEnter={() => setHoveredSegment(seg)}
                onMouseLeave={() => setHoveredSegment(null)}
                className="cursor-pointer hover:text-[#00A99D] transition-colors whitespace-nowrap"
              >
                <span className="block font-bold text-white text-sm sm:text-base tabular-nums">
                  {seg.count.toLocaleString()}
                </span>
                <span className="text-xs text-white/60">{seg.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
