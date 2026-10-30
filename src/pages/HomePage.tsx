import React from 'react';
import { SignalHero } from '../components/hero/SignalHero';
import { ScaleSection } from '../components/sections/home/ScaleSection';
import { WhatWeDoServices } from '../components/sections/home/WhatWeDoServices';
import { SpacesWeBuildCollage } from '../components/sections/home/SpacesWeBuildCollage';
import { ProjectsLedger } from '../components/sections/home/ProjectsLedger';
import { RackStagingProof } from '../components/sections/home/RackStagingProof';
import { WhereWeWorkMap } from '../components/sections/home/WhereWeWorkMap';
import { BrandsCredentialsGrid } from '../components/sections/home/BrandsCredentialsGrid';
import { CoralContactBand } from '../components/sections/home/CoralContactBand';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onSelectProject: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  return (
    <div className="space-y-0 selection:bg-[#00A99D] selection:text-[#071A1A]">
      {/* Hero: Full-bleed teal, giant two-line Bebas headline, wave lines, tall photo, ink logo band */}
      <SignalHero onNavigate={onNavigate} onSelectProject={onSelectProject} />

      {/* Section 1: Scale (Ink #071A1A section with giant teal 2,518 and single proportional bar) */}
      <ScaleSection />

      {/* Section 2: What we do (White #FFFFFF section with 5 full-width service rows and teal hover fill) */}
      <WhatWeDoServices />

      {/* Section 3: Spaces we build (Teal #00A99D section with asymmetric photo collage on 12-col grid) */}
      <SpacesWeBuildCollage onNavigate={onNavigate} />

      {/* Section 4: Projects (Ink #071A1A section with bold ledger of logos, huge Bebas counts, country codes) */}
      <ProjectsLedger onNavigate={onNavigate} onSelectProject={onSelectProject} />

      {/* Section 5: Built before it arrives (White #FFFFFF section with giant 50% teal figure and rack photo) */}
      <RackStagingProof />

      {/* Section 6: Where we work (Ink #071A1A section with 18 offices and SVG dot-matrix map with coral HQ) */}
      <WhereWeWorkMap />

      {/* Section 7: Brands and credentials (White #FFFFFF section with static clean grids, logos only) */}
      <BrandsCredentialsGrid />

      {/* Section 8: Contact band (Full-bleed Teal #00A99D band with centered Bebas ink headline & coral button) */}
      <CoralContactBand onNavigate={onNavigate} />
    </div>
  );
};
