import React, { useState, useEffect, useRef } from 'react';
import { Logo } from '../../ui/Logo';

interface RoomArchetype {
  name: string;
  count: number;
  share: string;
}

interface SectorProfile {
  id: string;
  name: string;
  count: number;
  ratio: number;
  color: string;
  accentColor: string;
  subtitle: string;
  description: string;
  archetypes: RoomArchetype[];
  topology: {
    videoStandard: string;
    audioDSP: string;
    controlSystem: string;
    networkRedundancy: string;
  };
  clientLogos: string[]; // IDs for <Logo id="..." />
  metrics: {
    avgLeadTimeWeeks: number;
    uptimeSLA: string;
    primaryAcousticRating: string;
  };
}

export const SectorTreemap: React.FC = () => {
  const [activeSectorId, setActiveSectorId] = useState<string>('corporate');
  const [activeTab, setActiveTab] = useState<'archetypes' | 'topology' | 'clients'>('archetypes');
  const [displayTotal, setDisplayTotal] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Exact dataset: 2,518 total spaces across 8 industries
  const sectors: SectorProfile[] = [
    {
      id: 'corporate',
      name: 'Corporate & Global HQs',
      count: 1600,
      ratio: 63.5,
      color: '#062B2B',
      accentColor: '#2CE0C8',
      subtitle: 'Global Campus Rollouts & Enterprise Workplaces',
      description: 'Standardized workplace AV architectures deployed identically across thousands of conference rooms, executive boardrooms, and all-hands town halls worldwide.',
      archetypes: [
        { name: 'Standardized Hybrid Teams & Zoom Suites', count: 520, share: '32.5%' },
        { name: 'Collaborative Strategy & War Rooms', count: 460, share: '28.8%' },
        { name: 'Executive Boardrooms & Telepresence', count: 380, share: '23.7%' },
        { name: 'Modular All-Hands Town Halls & Auditoriums', count: 240, share: '15.0%' },
      ],
      topology: {
        videoStandard: '4K60 4:4:4 uncompressed AVoIP (SMPTE ST 2110 / Dante AV)',
        audioDSP: 'Dual-redundant Q-SYS Core DSPs with beamforming ceiling mic arrays',
        controlSystem: 'Crestron XiO Cloud centralized room management with PoE touch controllers',
        networkRedundancy: 'Dual 10GbE fiber uplinks with automated sub-second port failover',
      },
      clientLogos: ['amazon', 'google', 'microsoft', 'deloitte', 'siemens', 'tcs', 'cisco', 'persistent', 'accenture'],
      metrics: {
        avgLeadTimeWeeks: 4.2,
        uptimeSLA: '99.98%',
        primaryAcousticRating: 'STC-50 / NC-25',
      },
    },
    {
      id: 'banking',
      name: 'Banking & Financial Hubs',
      count: 250,
      ratio: 9.9,
      color: '#062B2B',
      accentColor: '#2F7BFF',
      subtitle: 'High-Frequency Trading Floors & Executive SOCs',
      description: 'Ultra-low-latency financial operations facilities, sovereign regulatory compliance briefing suites, and multi-display market data video walls.',
      archetypes: [
        { name: 'Mission-Critical NOC / SOC Video Walls', count: 85, share: '34.0%' },
        { name: 'Trading Floor Audio & KVM Distribution', count: 65, share: '26.0%' },
        { name: 'Secure Air-Gapped Financial Boardrooms', count: 60, share: '24.0%' },
        { name: 'Regulatory Compliance Briefing Rooms', count: 40, share: '16.0%' },
      ],
      topology: {
        videoStandard: 'Zero-latency KVM matrix with pixel-mapped ultra-narrow bezel videowalls',
        audioDSP: 'AES-256 encrypted broadcast audio streaming with sovereign isolation',
        controlSystem: 'Extron IP Link Pro hardened control with tactile operator presets',
        networkRedundancy: 'Triple power supply failover with isolated out-of-band management',
      },
      clientLogos: ['citi', 'hsbc', 'sbi', 'deloitte'],
      metrics: {
        avgLeadTimeWeeks: 3.5,
        uptimeSLA: '99.999%',
        primaryAcousticRating: 'STC-55 / NC-20',
      },
    },
    {
      id: 'education',
      name: 'Education & Academies',
      count: 220,
      ratio: 8.7,
      color: '#062B2B',
      accentColor: '#7F52A0',
      subtitle: 'Tiered Lecture Theaters & Hybrid Classrooms',
      description: 'Intuitive, high-intelligibility learning environments with AI voice-tracking cameras, auto-framing, and multi-zone distributed voice lift.',
      archetypes: [
        { name: 'Multi-Cam Hybrid Collaborative Classrooms', count: 95, share: '43.2%' },
        { name: 'Tiered Amphitheater Lecture Theaters', count: 45, share: '20.5%' },
        { name: 'Digital Simulation & Assessment Labs', count: 45, share: '20.5%' },
        { name: 'Executive Leadership Training Theaters', count: 35, share: '15.8%' },
      ],
      topology: {
        videoStandard: 'AI vector auto-tracking PTZ cameras with multi-presenter follow',
        audioDSP: 'Shure Microflex Advance ceiling array microphones with Dante steerable lobes',
        controlSystem: 'Custom HTML5 touch panel UI with 1-button session recording start',
        networkRedundancy: '1GbE PoE+ campus-wide topology with automated QoS priority',
      },
      clientLogos: ['siemens', 'tcs', 'persistent', 'cognizant'],
      metrics: {
        avgLeadTimeWeeks: 2.8,
        uptimeSLA: '99.95%',
        primaryAcousticRating: 'STI > 0.72 / NC-30',
      },
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Surgical Telemetry',
      count: 180,
      ratio: 7.1,
      color: '#062B2B',
      accentColor: '#00F07A',
      subtitle: 'Surgical Operating Theaters & Tele-ICUs',
      description: 'Medical-grade 4K optical distribution, zero-compression endoscopic video feeds, and sub-10ms telemedicine telemetry links.',
      archetypes: [
        { name: 'Remote Diagnostic & Specialist Consultation Pods', count: 60, share: '33.3%' },
        { name: 'Tele-ICU Central Command Observation Consoles', count: 50, share: '27.8%' },
        { name: 'Integrated Surgical Operating Theaters', count: 40, share: '22.2%' },
        { name: 'Clinical Grand Rounds Tele-Auditoriums', count: 30, share: '16.7%' },
      ],
      topology: {
        videoStandard: 'DICOM Part 14 calibrated 4K clinical video over uncompressed glass fiber',
        audioDSP: 'Biamp Tesira acoustic echo cancellation with sterile hands-free paging',
        controlSystem: 'Antimicrobial IP65 sealed touch controllers with physical foot switches',
        networkRedundancy: 'IEC 60601-1-2 medical grade isolated dual-bus power and fiber paths',
      },
      clientLogos: ['carelon', 'siemens', 'persistent'],
      metrics: {
        avgLeadTimeWeeks: 5.0,
        uptimeSLA: '99.99%',
        primaryAcousticRating: 'STC-52 / Class 1000',
      },
    },
    {
      id: 'retail',
      name: 'Retail & Experience Centers',
      count: 120,
      ratio: 4.8,
      color: '#062B2B',
      accentColor: '#FF5A36',
      subtitle: 'Flagship Stores & Direct-View LED Canopies',
      description: 'High-impact ambient visual storytelling, synchronized audio spatialization, and centralized cloud CMS distribution.',
      archetypes: [
        { name: 'Interactive Transparent OLED & Sensor Vitrines', count: 35, share: '29.2%' },
        { name: 'High-Brightness MicroLED Architectural Canopies', count: 30, share: '25.0%' },
        { name: 'Centralized Enterprise Digital Signage Networks', count: 30, share: '25.0%' },
        { name: 'Multi-Zone Immersive Spatial Audio Zones', count: 25, share: '20.8%' },
      ],
      topology: {
        videoStandard: 'Sub-1.2mm fine pitch direct-view MicroLED with HDR10+ color calibration',
        audioDSP: 'Multi-zone distributed audio with concealed architectural subwoofers',
        controlSystem: 'Enterprise cloud CMS with automated scheduled daylight luminance curve',
        networkRedundancy: 'Cellular 5G auto-fallback gateway with remote power reboot telemetry',
      },
      clientLogos: ['amazon', 'samsung', 'sony', 'lg'],
      metrics: {
        avgLeadTimeWeeks: 2.5,
        uptimeSLA: '99.90%',
        primaryAcousticRating: '92dB SPL Max / EQ calibrated',
      },
    },
    {
      id: 'government',
      name: 'Government & Defense',
      count: 85,
      ratio: 3.4,
      color: '#062B2B',
      accentColor: '#FFC845',
      subtitle: 'Emergency Operations & Situation Rooms',
      description: 'Hardened command infrastructure, multi-domain classification switching, and secure video teleconferencing.',
      archetypes: [
        { name: 'Multi-Classification Secure VTC Briefing Rooms', count: 25, share: '29.4%' },
        { name: 'State Emergency Operations (EOC) Command Walls', count: 20, share: '23.5%' },
        { name: 'Civil Defense Dispatch & Emergency Coordination', count: 20, share: '23.5%' },
        { name: 'Legislative Assembly Chambers & Press Centers', count: 20, share: '23.5%' },
      ],
      topology: {
        videoStandard: 'TEMPEST-shielded conduits with physical galvanic optical data diodes',
        audioDSP: 'NSA-spec encrypted DSP processors with hardware mute verification relays',
        controlSystem: 'Physical push-button secure/unsecure mode switching console',
        networkRedundancy: 'Biometric shielded server racks with dual independent feeds',
      },
      clientLogos: ['tcs', 'persistent', 'siemens'],
      metrics: {
        avgLeadTimeWeeks: 6.2,
        uptimeSLA: '99.999%',
        primaryAcousticRating: 'SCIF STC-55 Certified',
      },
    },
    {
      id: 'broadcasting',
      name: 'Broadcasting & Media Studios',
      count: 60,
      ratio: 2.4,
      color: '#062B2B',
      accentColor: '#00F07A',
      subtitle: 'Virtual Production XR Stages & Production Control',
      description: 'Broadcast-spec SMPTE ST 2110 IP video production, acoustic mastering control rooms, and executive podcast suites.',
      archetypes: [
        { name: 'Corporate Broadcast Production Control (PCR)', count: 18, share: '30.0%' },
        { name: 'Virtual Production XR Stages & Volume Walls', count: 15, share: '25.0%' },
        { name: 'Multi-Host 4K Video Podcast & Live Stream Hubs', count: 15, share: '25.0%' },
        { name: 'Post-Production Audio Mastering & Foley Suites', count: 12, share: '20.0%' },
      ],
      topology: {
        videoStandard: '12G-SDI & SMPTE ST 2110 uncompressed studio IP routing',
        audioDSP: 'Dante / AES67 network with sub-millisecond audio frame sync',
        controlSystem: 'Integrated broadcast tally matrix with Clear-Com digital intercoms',
        networkRedundancy: 'PTP IEEE 1588 precision time protocol grandmaster clocking',
      },
      clientLogos: ['sony', 'blackmagic', 'shure', 'sennheiser'],
      metrics: {
        avgLeadTimeWeeks: 4.0,
        uptimeSLA: '99.99%',
        primaryAcousticRating: 'NC-20 / Floating Studio Floor',
      },
    },
    {
      id: 'airport',
      name: 'Aviation & Airport Command',
      count: 3,
      ratio: 0.2,
      color: '#062B2B',
      accentColor: '#2CE0C8',
      subtitle: 'Airport Operations Command Centers (AOCC)',
      description: 'Massive scale terminal operations displays, air traffic control simulation environments, and passenger flight information systems.',
      archetypes: [
        { name: 'Terminal AOCC Master Videowall (Mega-Canvas)', count: 1, share: '33.3%' },
        { name: 'Emergency Incident Coordination Command Hub', count: 1, share: '33.3%' },
        { name: 'Airside Ramp Control & Operations Dispatch Suite', count: 1, share: '33.3%' },
      ],
      topology: {
        videoStandard: '100+ megapixel bezel-less LED canvas with multi-source windowing',
        audioDSP: 'Multi-channel paging matrix with acoustic zone balancing',
        controlSystem: 'Industrial server grade dual controller matrix with zero downtime',
        networkRedundancy: 'Redundant ring fiber topology spanning multiple passenger terminals',
      },
      clientLogos: ['siemens', 'cisco', 'crestron'],
      metrics: {
        avgLeadTimeWeeks: 8.5,
        uptimeSLA: '99.999%',
        primaryAcousticRating: '24/7/365 Continuous Duty',
      },
    },
  ];

  const activeSector = sectors.find((s) => s.id === activeSectorId) || sectors[0];

  // Number roll animation for 2,518 total spaces
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const target = 2518;
          const duration = 1400;
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
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
      { threshold: 0.15 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-28 bg-[#041D1D] text-white relative overflow-hidden selection:bg-[#2CE0C8] selection:text-[#062B2B]"
      aria-label="Annual deployment scale breakdown and industry telemetry"
    >
      {/* Subtle Engineering Grid Backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(44, 224, 200, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(44, 224, 200, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Subtle Ambient Radial Glow */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#00857E]/20 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2CE0C8]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 space-y-10">
        {/* Section Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-[#2CE0C8] tracking-widest uppercase">
              <span>Verified Deployment Registry</span>
              <span aria-hidden="true" className="text-white/30">/</span>
              <span>Audit Period: FY 2024–25</span>
              <span aria-hidden="true" className="text-white/30">/</span>
              <span className="text-white/70">8 Industry Verticals</span>
            </div>
            <div className="text-xs text-white/50 font-mono">
              SOP Ref: QA-AV-2518-DEPLOY
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none">
                <span className="text-[#2CE0C8] tabular-nums">
                  {displayTotal.toLocaleString()}
                </span>{' '}
                SPACES DEPLOYED IN 2024–25
              </h2>
            </div>
            <p className="text-sm sm:text-base text-white/80 max-w-[48ch] leading-relaxed">
              Every room deployed identically, calibrated to STC-50 and AQ-AV CQT standards, backed by a 40-rack staging floor and direct manufacturer certifications.
            </p>
          </div>

          {/* Quick-Stats Telemetry Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="p-3 bg-white/[0.03] rounded border border-white/10">
              <div className="text-[11px] text-white/60 uppercase tracking-wider">Total Certified Spaces</div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 tabular-nums">
                2,518 <span className="text-xs text-[#2CE0C8] font-sans font-normal">Rooms</span>
              </div>
            </div>

            <div className="p-3 bg-white/[0.03] rounded border border-white/10">
              <div className="text-[11px] text-white/60 uppercase tracking-wider">Weekly Velocity</div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 tabular-nums">
                ~48.4 <span className="text-xs text-[#2CE0C8] font-sans font-normal">Rooms / Wk</span>
              </div>
            </div>

            <div className="p-3 bg-white/[0.03] rounded border border-white/10">
              <div className="text-[11px] text-white/60 uppercase tracking-wider">Day-1 Acceptance SLA</div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 tabular-nums">
                99.98% <span className="text-xs text-[#2CE0C8] font-sans font-normal">Pass Rate</span>
              </div>
            </div>

            <div className="p-3 bg-white/[0.03] rounded border border-white/10">
              <div className="text-[11px] text-white/60 uppercase tracking-wider">Staging Verification</div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 tabular-nums">
                100% <span className="text-xs text-[#2CE0C8] font-sans font-normal">Pre-Staged</span>
              </div>
            </div>
          </div>
        </div>

        {/* Proportional Capacity Signal Ribbon */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-white/60">
            <span className="font-medium text-white/80">Proportional Volume Allocation</span>
            <span className="text-[11px] text-[#2CE0C8]">Select segment or card to inspect detailed sector specs</span>
          </div>

          <div
            className="w-full h-8 bg-black/40 rounded-lg p-1 flex items-stretch gap-1 border border-white/10 overflow-hidden"
            role="tablist"
            aria-label="Sector distribution proportional ribbon"
          >
            {sectors.map((sector) => {
              const isSelected = sector.id === activeSectorId;
              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveSectorId(sector.id)}
                  title={`${sector.name}: ${sector.count} rooms (${sector.ratio}%)`}
                  className={`h-full rounded transition-all duration-200 relative group focus-visible:outline-[#2CE0C8] focus-visible:outline-offset-1 ${
                    isSelected
                      ? 'brightness-125 ring-2 ring-[#2CE0C8] z-10'
                      : 'hover:brightness-125 opacity-80 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: sector.accentColor,
                    width: `${Math.max(sector.ratio, 1.8)}%`,
                  }}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`sector-panel-${sector.id}`}
                >
                  <span className="sr-only">
                    {sector.name}: {sector.count} rooms ({sector.ratio}%)
                  </span>
                </button>
              );
            })}
          </div>

          {/* Ribbon Legend */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 pt-1 text-xs text-white/70">
            {sectors.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSectorId(s.id)}
                className={`inline-flex items-center gap-2 transition-colors cursor-pointer ${
                  s.id === activeSectorId ? 'text-[#2CE0C8] font-medium' : 'text-white/60 hover:text-white'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-sm inline-block shrink-0"
                  style={{ backgroundColor: s.accentColor }}
                />
                <span>
                  {s.name.split(' ')[0]} ({s.ratio}%)
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Split Telemetry Console: Sector Matrix (Left) + Detailed Inspector (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Sector Matrix (Left: 7 of 12 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs text-white/60 px-1">
              <span>Industry Vertical Matrix</span>
              <span className="font-mono">8 of 8 Active</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Corporate: Spans full width of left grid as anchor */}
              {(() => {
                const corp = sectors[0];
                const isSelected = corp.id === activeSectorId;
                return (
                  <button
                    key={corp.id}
                    onClick={() => setActiveSectorId(corp.id)}
                    className={`col-span-1 sm:col-span-2 text-left p-5 rounded-lg border transition-all duration-200 cursor-pointer relative overflow-hidden group focus-visible:outline-[#2CE0C8] ${
                      isSelected
                        ? 'bg-[#0A3D3D] border-[#2CE0C8] shadow-[0_0_24px_rgba(44,224,200,0.15)] ring-1 ring-[#2CE0C8]'
                        : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full inline-block"
                            style={{ backgroundColor: corp.accentColor }}
                          />
                          <span className="text-xs uppercase tracking-wider text-[#2CE0C8] font-medium">
                            Dominant Enterprise Footprint
                          </span>
                        </div>
                        <h3 className="font-display text-3xl font-bold text-white mt-1 group-hover:text-[#2CE0C8] transition-colors">
                          {corp.name}
                        </h3>
                        <p className="text-xs text-white/70 mt-1 max-w-[48ch] line-clamp-2">
                          {corp.subtitle}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="font-display text-4xl sm:text-5xl font-bold text-white tabular-nums">
                          {corp.count.toLocaleString()}
                        </div>
                        <div className="text-xs text-[#2CE0C8] font-mono font-medium">
                          {corp.ratio}% of total
                        </div>
                      </div>
                    </div>

                    {/* Proportional Archetype Bar Preview */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                      <span>4 Key Space Archetypes: Teams Rooms, War Rooms, Town Halls, Boardrooms</span>
                      <span className="text-[#2CE0C8] text-[11px] font-medium group-hover:translate-x-0.5 transition-transform">
                        Inspect Details →
                      </span>
                    </div>
                  </button>
                );
              })()}

              {/* Remaining 7 Sectors */}
              {sectors.slice(1).map((sector) => {
                const isSelected = sector.id === activeSectorId;
                return (
                  <button
                    key={sector.id}
                    onClick={() => setActiveSectorId(sector.id)}
                    className={`text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer relative group focus-visible:outline-[#2CE0C8] flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#0A3D3D] border-[#2CE0C8] shadow-[0_0_20px_rgba(44,224,200,0.12)] ring-1 ring-[#2CE0C8]'
                        : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className="w-2 h-2 rounded-full inline-block shrink-0"
                          style={{ backgroundColor: sector.accentColor }}
                        />
                        <span className="text-[11px] font-mono text-white/50">
                          {sector.ratio}%
                        </span>
                      </div>
                      <h4 className="font-display text-2xl font-bold text-white mt-1 group-hover:text-[#2CE0C8] transition-colors leading-tight">
                        {sector.name}
                      </h4>
                      <p className="text-[11px] text-white/65 mt-0.5 line-clamp-1">
                        {sector.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-baseline justify-between">
                      <span className="font-display text-3xl font-bold text-white tabular-nums">
                        {sector.count.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-[#2CE0C8] group-hover:translate-x-0.5 transition-transform">
                        Specs →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Deep-Dive Inspection Bay (Right: 5 of 12 cols, Sticky) */}
          <div
            id={`sector-panel-${activeSector.id}`}
            className="lg:col-span-5 bg-[#082E2E] rounded-xl border border-white/15 p-6 shadow-xl relative overflow-hidden lg:sticky lg:top-24 space-y-6"
          >
            {/* Ambient Corner Accent */}
            <div
              className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-[40px] pointer-events-none opacity-20"
              style={{ backgroundColor: activeSector.accentColor }}
              aria-hidden="true"
            />

            {/* Inspector Header */}
            <div className="space-y-2 border-b border-white/10 pb-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-[#2CE0C8] uppercase tracking-wider">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: activeSector.accentColor }}
                  />
                  Sector Deep Dive
                </span>
                <span className="text-xs font-mono text-white/50">
                  {activeSector.count} Verified Spaces ({activeSector.ratio}%)
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                {activeSector.name}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {activeSector.description}
              </p>
            </div>

            {/* Interactive Inspector Tabs */}
            <div className="space-y-4">
              <div
                className="grid grid-cols-3 gap-1 bg-black/40 p-1 rounded-lg border border-white/10 text-xs font-medium"
                role="tablist"
                aria-label="Inspector views"
              >
                <button
                  onClick={() => setActiveTab('archetypes')}
                  className={`py-2 px-2.5 rounded transition-colors text-center whitespace-nowrap cursor-pointer ${
                    activeTab === 'archetypes'
                      ? 'bg-[#2CE0C8] text-[#062B2B] font-semibold shadow-sm'
                      : 'text-white/70 hover:text-white'
                  }`}
                  role="tab"
                  aria-selected={activeTab === 'archetypes'}
                >
                  Archetypes
                </button>
                <button
                  onClick={() => setActiveTab('topology')}
                  className={`py-2 px-2.5 rounded transition-colors text-center whitespace-nowrap cursor-pointer ${
                    activeTab === 'topology'
                      ? 'bg-[#2CE0C8] text-[#062B2B] font-semibold shadow-sm'
                      : 'text-white/70 hover:text-white'
                  }`}
                  role="tab"
                  aria-selected={activeTab === 'topology'}
                >
                  AV Topology
                </button>
                <button
                  onClick={() => setActiveTab('clients')}
                  className={`py-2 px-2.5 rounded transition-colors text-center whitespace-nowrap cursor-pointer ${
                    activeTab === 'clients'
                      ? 'bg-[#2CE0C8] text-[#062B2B] font-semibold shadow-sm'
                      : 'text-white/70 hover:text-white'
                  }`}
                  role="tab"
                  aria-selected={activeTab === 'clients'}
                >
                  Verified Clients
                </button>
              </div>

              {/* Tab 1: Room Archetypes */}
              {activeTab === 'archetypes' && (
                <div className="space-y-3.5 pt-1 animate-fadeIn">
                  <div className="text-[11px] text-white/60 font-medium uppercase tracking-wider">
                    Standardized Room Configurations
                  </div>

                  {activeSector.archetypes.map((arch) => (
                    <div
                      key={arch.name}
                      className="p-3 bg-white/[0.04] rounded border border-white/10 space-y-1.5"
                    >
                      <div className="flex items-baseline justify-between gap-2 text-xs">
                        <span className="font-medium text-white">{arch.name}</span>
                        <span className="text-[#2CE0C8] font-mono font-bold shrink-0 tabular-nums">
                          {arch.count} <span className="text-white/40 font-normal">({arch.share})</span>
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: arch.share,
                            backgroundColor: activeSector.accentColor,
                          }}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Archetype Quick-Summary Box */}
                  <div className="p-3 bg-white/[0.02] rounded border border-white/5 grid grid-cols-2 gap-3 text-xs text-white/70">
                    <div>
                      <span className="text-white/40 block text-[10px] uppercase">Avg Rollout SLA</span>
                      <span className="font-semibold text-white">{activeSector.metrics.avgLeadTimeWeeks} Weeks</span>
                    </div>
                    <div>
                      <span className="text-white/40 block text-[10px] uppercase">Acoustic Spec</span>
                      <span className="font-semibold text-[#2CE0C8]">{activeSector.metrics.primaryAcousticRating}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: AV Signal & Hardware Topology */}
              {activeTab === 'topology' && (
                <div className="space-y-3 pt-1 animate-fadeIn">
                  <div className="text-[11px] text-white/60 font-medium uppercase tracking-wider">
                    Engineering Architecture & Standards
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="p-3 bg-white/[0.04] rounded border border-white/10">
                      <span className="text-[10px] uppercase tracking-wider text-[#2CE0C8] font-medium block mb-1">
                        Video Transport Architecture
                      </span>
                      <span className="text-white/90 leading-relaxed block">
                        {activeSector.topology.videoStandard}
                      </span>
                    </div>

                    <div className="p-3 bg-white/[0.04] rounded border border-white/10">
                      <span className="text-[10px] uppercase tracking-wider text-[#2CE0C8] font-medium block mb-1">
                        Audio Processing & DSP Core
                      </span>
                      <span className="text-white/90 leading-relaxed block">
                        {activeSector.topology.audioDSP}
                      </span>
                    </div>

                    <div className="p-3 bg-white/[0.04] rounded border border-white/10">
                      <span className="text-[10px] uppercase tracking-wider text-[#2CE0C8] font-medium block mb-1">
                        Room Control & Monitoring
                      </span>
                      <span className="text-white/90 leading-relaxed block">
                        {activeSector.topology.controlSystem}
                      </span>
                    </div>

                    <div className="p-3 bg-white/[0.04] rounded border border-white/10">
                      <span className="text-[10px] uppercase tracking-wider text-[#2CE0C8] font-medium block mb-1">
                        Mission-Critical Redundancy
                      </span>
                      <span className="text-white/90 leading-relaxed block">
                        {activeSector.topology.networkRedundancy}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Verified Client Badges */}
              {activeTab === 'clients' && (
                <div className="space-y-3 pt-1 animate-fadeIn">
                  <div className="text-[11px] text-white/60 font-medium uppercase tracking-wider">
                    Verified Multi-Site Deployments
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed">
                    Client organizations with standardized multi-room or campus-wide systems deployed by Online Instruments in this sector:
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                    {activeSector.clientLogos.map((logoId) => (
                      <div
                        key={logoId}
                        className="h-16 bg-white/[0.04] hover:bg-white/[0.08] rounded border border-white/10 p-2 flex items-center justify-center transition-all group"
                        title={logoId.toUpperCase()}
                      >
                        <Logo id={logoId} tone="dark" className="opacity-80 group-hover:opacity-100" />
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-white/[0.02] rounded border border-white/5 text-[11px] text-white/60 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F07A]" />
                    <span>All client deployments validated under enterprise NDA and calibrated handover SOPs.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Inspector Footer Action */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-white/50">Need sector engineering drawings?</span>
              <a
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[#2CE0C8] font-semibold hover:underline"
              >
                <span>Request Case Study & Specs</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
