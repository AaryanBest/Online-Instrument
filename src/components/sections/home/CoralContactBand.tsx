import React from 'react';

interface CoralContactBandProps {
  onNavigate: (path: string) => void;
}

export const CoralContactBand: React.FC<CoralContactBandProps> = ({ onNavigate }) => {
  return (
    <section className="section-pad bg-[#00A99D] text-[#071A1A] text-center border-b-2 border-[#071A1A]">
      <div className="home-container max-w-[960px] mx-auto space-y-8 flex flex-col items-center">
        {/* Bebas Headline Centred in Ink */}
        <h2 className="font-display text-[64px] sm:text-[96px] lg:text-[120px] text-[#071A1A] leading-[0.92] tracking-[0.01em] uppercase">
          PLANNING A PROJECT?
        </h2>

        {/* One Line Beneath in DM Sans */}
        <p className="font-sans font-medium text-lg sm:text-2xl text-[#071A1A] max-w-[48ch] leading-relaxed">
          Discuss specifications, staging timelines, and rollout velocity with our senior engineering team.
        </p>

        {/* One Coral Button */}
        <div className="pt-2">
          <button
            onClick={() => onNavigate('/contact')}
            className="btn-coral-pill !text-lg !px-10 !py-4"
          >
            Talk to our team
          </button>
        </div>
      </div>
    </section>
  );
};
