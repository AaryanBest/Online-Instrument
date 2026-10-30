import React, { useRef, useState } from 'react';

interface CoralContactBandProps {
  onNavigate: (path: string) => void;
}

export const CoralContactBand: React.FC<CoralContactBandProps> = ({ onNavigate }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

  // Magnetic button effect on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.25;
    const deltaY = (e.clientY - centerY) * 0.25;
    setBtnOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setBtnOffset({ x: 0, y: 0 });
  };

  return (
    <section className="relative bg-[#FF5A36] text-white py-24 sm:py-32 overflow-hidden border-t border-[#FF5A36]">
      {/* Wave lines running through the band in white at low opacity (~15%) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full text-white"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {Array.from({ length: 14 }).map((_, i) => (
            <path
              key={i}
              d={`M -40 ${80 + i * 20} C 250 ${40 + i * 15}, 650 ${120 + i * 25}, 1040 ${70 + i * 18}`}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Planning a project?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-[56ch] leading-relaxed">
              Tell us about the spaces, locations and timeline. A systems engineer will review your brief and return with single-line schematics or preliminary design guidance.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            {/* Magnetic White Action Button */}
            <button
              ref={buttonRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => onNavigate('/contact')}
              style={{
                transform: `translate(${btnOffset.x}px, ${btnOffset.y}px)`,
                transition: 'transform 120ms ease-out',
              }}
              className="px-9 py-5 rounded-md bg-white text-[#FF5A36] font-display text-lg font-bold hover:bg-[#062B2B] hover:text-white transition-colors duration-200 shadow-2xl cursor-pointer focus-visible:outline-white focus-visible:outline-offset-4"
            >
              Talk to our team →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
