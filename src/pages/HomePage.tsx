import React from 'react';
import { SignalHero } from '../components/hero/SignalHero';
import { EditorialStatement } from '../components/sections/home/EditorialStatement';
import { SectorTreemap } from '../components/sections/home/SectorTreemap';
import { LifecyclePinned } from '../components/sections/home/LifecyclePinned';
import { SpacesExpandingStrip } from '../components/sections/home/SpacesExpandingStrip';
import { ProjectsPosterRail } from '../components/sections/home/ProjectsPosterRail';
import { RackStagingProof } from '../components/sections/home/RackStagingProof';
import { PartnerDriftRows } from '../components/sections/home/PartnerDriftRows';
import { CredentialsTrophyFan } from '../components/sections/home/CredentialsTrophyFan';
import { CoralContactBand } from '../components/sections/home/CoralContactBand';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onSelectProject: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  return (
    <div className="theme-home space-y-0 selection:bg-[#2CE0C8] selection:text-[#062B2B]">
      {/* Hero: "The wave turns into the room" + 60s logo drift row */}
      <SignalHero onNavigate={onNavigate} onSelectProject={onSelectProject} />

      {/* Section 1: One standard (Editorial statement with inline photos on --mist) */}
      <EditorialStatement />

      {/* Section 2: Scale (Full-bleed --teal interactive treemap of 2,518 spaces) */}
      <SectorTreemap />

      {/* Section 3: How a project runs (5-stage sequential lifecycle with color shifts & scenes) */}
      <LifecyclePinned />

      {/* Section 4: Spaces we build (Six expanding image strips) */}
      <SpacesExpandingStrip onNavigate={onNavigate} />

      {/* Section 5: Projects (Horizontal scrolling rail of posters with logos & big figures) */}
      <ProjectsPosterRail onSelectProject={onSelectProject} onNavigate={onNavigate} />

      {/* Section 6: Built before it arrives (Dark rack staging proof with animated comparison bars) */}
      <RackStagingProof />

      {/* Section 7: Works with the best (Manufacturer drift rows + distributor row) */}
      <PartnerDriftRows />

      {/* Section 9: Credentials and recognition (--mist light section with cert logos & trophy fan) */}
      <CredentialsTrophyFan />

      {/* Section 10: Contact band (Full-bleed --coral with magnetic button) */}
      <CoralContactBand onNavigate={onNavigate} />
    </div>
  );
};
