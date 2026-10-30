import React, { useState } from 'react';

interface SpacesWeBuildCollageProps {
  onNavigate: (path: string) => void;
}

export const SpacesWeBuildCollage: React.FC<SpacesWeBuildCollageProps> = ({ onNavigate }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const spaces = [
    {
      id: 'meeting-rooms',
      name: 'MEETING ROOMS',
      cols: 'col-span-12 lg:col-span-7 h-[360px] sm:h-[440px]',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'command-centres',
      name: 'COMMAND CENTRES',
      cols: 'col-span-12 lg:col-span-5 h-[360px] sm:h-[440px]',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'training-rooms',
      name: 'TRAINING ROOMS',
      cols: 'col-span-12 lg:col-span-4 h-[320px] sm:h-[380px]',
      img: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'auditoriums',
      name: 'AUDITORIUMS',
      cols: 'col-span-12 lg:col-span-8 h-[320px] sm:h-[380px]',
      img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'experience-centres',
      name: 'CUSTOMER EXPERIENCE CENTRES',
      cols: 'col-span-12 lg:col-span-6 h-[320px] sm:h-[380px]',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'digital-signage',
      name: 'DIGITAL SIGNAGE',
      cols: 'col-span-12 lg:col-span-6 h-[320px] sm:h-[380px]',
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <section className="section-pad bg-[#00A99D] text-[#071A1A] border-b-2 border-[#071A1A]">
      <div className="home-container space-y-12">
        {/* Section Headline */}
        <div>
          <h2 className="font-display text-[56px] sm:text-[80px] lg:text-[104px] text-[#071A1A] leading-[0.92] tracking-[0.01em] uppercase">
            SIX KINDS OF SPACE.
          </h2>
          <p className="text-[#071A1A] font-medium text-lg sm:text-xl mt-3 max-w-[54ch]">
            Every environment engineered from acoustic analysis and heat loads to display geometry and zero-touch operation.
          </p>
        </div>

        {/* Asymmetric Photo Collage on 12-Column Grid */}
        <div className="grid grid-cols-12 gap-6">
          {spaces.map((space) => {
            const isHovered = hoveredCard === space.id;

            return (
              <div
                key={space.id}
                onMouseEnter={() => setHoveredCard(space.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onNavigate('/solutions')}
                className={`${space.cols} relative overflow-hidden cursor-pointer select-none`}
              >
                {/* Background Photo with 400ms Zoom */}
                <img
                  src={space.img}
                  alt={space.name}
                  className={`w-full h-full object-cover transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isHovered ? 'scale-100' : 'scale-105'
                  }`}
                  loading="lazy"
                />

                {/* Flat 30% Ink Overlay, lightens slightly on hover */}
                <div
                  className={`absolute inset-0 bg-[#071A1A] transition-opacity duration-400 ${
                    isHovered ? 'opacity-20' : 'opacity-30'
                  }`}
                  aria-hidden="true"
                />

                {/* Space Name (Bebas, white, bottom-left) + "See solutions" Link on hover */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end">
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-[0.92] tracking-[0.01em] uppercase drop-shadow-sm">
                    {space.name}
                  </h3>

                  <div
                    className={`pt-2 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                  >
                    <span className="text-white text-sm font-bold font-sans tracking-wide underline underline-offset-4 decoration-[#00A99D]">
                      See solutions →
                    </span>
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
