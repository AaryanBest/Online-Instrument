import React, { useState, useEffect, useRef } from 'react';

export const RackStagingProof: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [animated, setAnimated] = useState(false);

  const proofBars = [
    { label: "Onsite man-hours required", value: 50, stat: "50% fewer", note: "Eliminates chaotic field wiring & delays" },
    { label: "Simulation to install match", value: 100, stat: "100% match", note: "Tested under full thermal and power load" },
    { label: "RMA turnaround speed", value: 70, stat: "70% faster", note: "Dead-on-arrival detected prior to dispatch" },
    { label: "Deployment quality & airflow", value: 80, stat: "20% better", note: "Laser-labeled velcro harness dressing" },
    { label: "Delivery and handover timeline", value: 70, stat: "30% shorter", note: "Plug-and-play tie-in on site" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-28 bg-[#062B2B] text-white border-b border-white/10"
    >
      <div className="max-w-[1200px] mx-auto px-6 space-y-12">
        <div className="border-b border-white/20 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5A36] block mb-2">
              Pre-commissioned engineering
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Built before it arrives
            </h2>
          </div>
          <p className="text-sm text-white/80 max-w-[44ch] leading-relaxed">
            40-rack staging floor in Bengaluru. Every equipment rack is assembled, wired, labeled, and burned-in for 48 hours before shipping.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Authentic Rack Staging Visual with Clip-path wipe */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80"
              alt="40-Rack staging and cabling pre-assembly in Bengaluru facility"
              className="w-full h-[420px] object-cover contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-xs p-3 rounded border border-white/20 text-xs">
              <span className="font-mono font-semibold text-[#2CE0C8] block">BENGALURU STAGING FACILITY</span>
              <span className="text-white/80">48-Hour continuous hardware burn-in &amp; harness dressing</span>
            </div>
          </div>

          {/* Right: 5 Comparison Bars Animating on Scroll */}
          <div className="lg:col-span-7 space-y-6">
            {proofBars.map((bar, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {bar.label}
                  </span>
                  <span className="font-display text-lg font-bold text-[#2CE0C8] tabular-nums">
                    {bar.stat}
                  </span>
                </div>

                {/* Animated bar track */}
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#00F07A] via-[#2CE0C8] to-[#00A8FF] rounded-full transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: animated ? `${bar.value}%` : '0%',
                      transitionDelay: `${i * 120}ms`,
                    }}
                  />
                </div>

                <div className="flex justify-between text-xs text-white/60">
                  <span>{bar.note}</span>
                  <span className="text-[#2CE0C8]/80 font-medium">Standardized rack SLA</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
