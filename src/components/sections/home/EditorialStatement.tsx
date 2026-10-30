import React from 'react';

export const EditorialStatement: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#E6F6F3] text-[#062B2B] border-b border-[#D5DDDB]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Editorial statement with embedded inline photos */}
        <p className="font-display text-3xl sm:text-5xl lg:text-[52px] font-normal leading-[1.2] sm:leading-[1.25] tracking-wide uppercase">
          <span>We build the same </span>

          {/* Inline Photo 1: Meeting Room */}
          <span className="inline-flex align-middle mx-2 my-1 h-9 sm:h-12 w-18 sm:w-24 rounded-full overflow-hidden border-2 border-[#00857E] shadow-sm transform hover:scale-110 transition-transform duration-200">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=300&q=80"
              alt="Meeting room audio visual setup"
              className="w-full h-full object-cover"
            />
          </span>

          <span>standard into every </span>

          {/* Inline Photo 2: Training Room */}
          <span className="inline-flex align-middle mx-2 my-1 h-9 sm:h-12 w-18 sm:w-24 rounded-full overflow-hidden border-2 border-[#2F7BFF] shadow-sm transform hover:scale-110 transition-transform duration-200">
            <img
              src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=300&q=80"
              alt="Training room divisible video wall"
              className="w-full h-full object-cover"
            />
          </span>

          <span>office, so a team in Pune and a team in Singapore sit down to </span>

          {/* Inline Photo 3: Command Centre */}
          <span className="inline-flex align-middle mx-2 my-1 h-9 sm:h-12 w-18 sm:w-24 rounded-full overflow-hidden border-2 border-[#7F52A0] shadow-sm transform hover:scale-110 transition-transform duration-200">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80"
              alt="24/7 mission critical operations command centre"
              className="w-full h-full object-cover"
            />
          </span>

          <span>the same room.</span>
        </p>

        <div className="pt-8 flex items-center gap-6 text-sm text-[#54625F] border-t border-[#00857E]/20 mt-8">
          <span className="font-semibold text-[#00857E]">Consistent User Experience at Enterprise Scale</span>
          <span>·</span>
          <span>Zero room-start friction across 18 metropolitan territories</span>
        </div>
      </div>
    </section>
  );
};
