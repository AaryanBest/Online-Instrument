import React, { useState, useEffect, useRef } from 'react';

export const RackStagingProof: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
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
      className="section-pad bg-[#FFFFFF] text-[#071A1A] border-b-2 border-[#071A1A]"
      aria-label="Pre-commissioning and staging engineering metrics"
    >
      <div className="home-container space-y-16">
        {/* Section Headline */}
        <div>
          <h2 className="font-display text-[56px] sm:text-[80px] lg:text-[104px] text-[#071A1A] leading-[0.92] tracking-[0.01em] uppercase">
            RACKS BUILT AND TESTED BEFORE THEY REACH SITE.
          </h2>
          <p className="text-[#071A1A] font-medium text-lg sm:text-xl mt-3 max-w-[54ch]">
            Our 40-rack staging floor in Bengaluru eliminates chaotic field wiring. Every equipment rack is assembled, laser-labeled, and burned-in for 48 hours prior to dispatch.
          </p>
        </div>

        {/* Top Half: Giant Figure in Teal + Grid-snapped Square Rack Photo */}
        <div className="grid grid-cols-12 gap-6 items-stretch border-b-2 border-[#071A1A] pb-16">
          {/* Left: Giant 50% in Teal with descriptive line */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
            <span className="font-display text-[120px] sm:text-[180px] lg:text-[230px] text-[#00A99D] leading-[0.85] tabular-nums select-none">
              50%
            </span>
            <span className="font-sans font-bold text-2xl sm:text-3xl text-[#071A1A] mt-2">
              fewer onsite man hours
            </span>
            <p className="font-sans text-base text-[#071A1A]/70 mt-3 max-w-[42ch]">
              Complete factory pre-assembly and cable harness dressing shifts high-risk troubleshooting from the client construction site into our calibrated laboratory.
            </p>
          </div>

          {/* Right: Clean Square Rack Photo (Grid-snapped, square corners, no frames) */}
          <div className="col-span-12 lg:col-span-6 h-[340px] sm:h-[460px] overflow-hidden border-2 border-[#071A1A]">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
              alt="40-Rack staging and cabling pre-assembly in Bengaluru facility"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom Half: Four Smaller Figures in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Metric 1 */}
          <div className="space-y-2 border-l-2 border-[#071A1A] pl-5">
            <div className="font-display text-5xl sm:text-6xl text-[#071A1A] tabular-nums">
              100%
            </div>
            <p className="font-sans text-sm sm:text-base font-medium text-[#071A1A] leading-snug">
              accuracy between simulation and installation
            </p>
          </div>

          {/* Metric 2 */}
          <div className="space-y-2 border-l-2 border-[#071A1A] pl-5">
            <div className="font-display text-5xl sm:text-6xl text-[#071A1A] tabular-nums">
              70%
            </div>
            <p className="font-sans text-sm sm:text-base font-medium text-[#071A1A] leading-snug">
              faster RMA turnaround
            </p>
          </div>

          {/* Metric 3 */}
          <div className="space-y-2 border-l-2 border-[#071A1A] pl-5">
            <div className="font-display text-5xl sm:text-6xl text-[#071A1A] tabular-nums">
              20%
            </div>
            <p className="font-sans text-sm sm:text-base font-medium text-[#071A1A] leading-snug">
              better deployment quality
            </p>
          </div>

          {/* Metric 4 */}
          <div className="space-y-2 border-l-2 border-[#071A1A] pl-5">
            <div className="font-display text-5xl sm:text-6xl text-[#071A1A] tabular-nums">
              30%
            </div>
            <p className="font-sans text-sm sm:text-base font-medium text-[#071A1A] leading-snug">
              shorter delivery and handover
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
