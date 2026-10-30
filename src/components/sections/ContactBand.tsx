import React from 'react';

interface ContactBandProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  onNavigate: (path: string) => void;
}

export const ContactBand: React.FC<ContactBandProps> = ({
  title = "Planning a project?",
  description = "Tell us about the spaces, the locations and the timeline. We will come back with questions and a proposed approach.",
  buttonLabel = "Talk to our team",
  onNavigate,
}) => {
  return (
    <section className="bg-[#10201F] text-[#F6F8F7] py-16 sm:py-20 border-t border-[#10201F]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#F6F8F7]">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-[#D5DDDB] max-w-[62ch] leading-relaxed">
              {description}
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={() => onNavigate('/contact')}
              className="rounded-[4px] px-7 py-3.5 text-sm font-medium bg-[#007A75] text-[#F6F8F7] hover:bg-[#2CCFC0] hover:text-[#10201F] active:bg-[#1B9E98] transition-colors focus-visible:outline-[#2CCFC0] focus-visible:outline-offset-2"
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
