import React, { useState } from 'react';

interface Stage {
  id: string;
  step: string;
  name: string;
  bgColor: string;
  textColor: string;
  description: string;
  sceneImage: string;
  sceneCaption: string;
  deliverable: string;
}

export const LifecyclePinned: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const stages: Stage[] = [
    {
      id: "consultancy",
      step: "01",
      name: "Consultancy",
      bgColor: "#062B2B",
      textColor: "#FFFFFF",
      description: "We understand the real problem, analyze current usage patterns, and craft standardized AV briefs designed to scale across all enterprise facilities.",
      sceneImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
      sceneCaption: "Acoustic line simulation and space brief creation",
      deliverable: "Unified room brief & repeat campus strategy"
    },
    {
      id: "design",
      step: "02",
      name: "Design",
      bgColor: "#2F7BFF",
      textColor: "#FFFFFF",
      description: "Acoustic simulations, equipment line schematics, BTU thermal calculations, and rack elevations drawn before anything is procured.",
      sceneImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      sceneCaption: "Engineering CAD schematics & thermal load audit",
      deliverable: "Single-line schematics & BTU calculations"
    },
    {
      id: "supply",
      step: "03",
      name: "Supply",
      bgColor: "#7F52A0",
      textColor: "#FFFFFF",
      description: "Direct OEM manufacturer procurement, line-by-line shipment tracking, DOA screening, and custom patch panel manufacturing.",
      sceneImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      sceneCaption: "Central staging warehouse & custom fabrication",
      deliverable: "Live hardware tracking ledger & ETA reports"
    },
    {
      id: "implementation",
      step: "04",
      name: "Implementation",
      bgColor: "#00857E",
      textColor: "#FFFFFF",
      description: "12-step SOP deployment, off-site rack staging, DSP tuning, and rigorous AQ-AV CQT calibrated commissioning.",
      sceneImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      sceneCaption: "Onsite installation, DSP matrix tuning & CQT audit",
      deliverable: "Calibrated test certificates & user training"
    },
    {
      id: "support",
      step: "05",
      name: "Support and service",
      bgColor: "#FF5A36",
      textColor: "#FFFFFF",
      description: "Dedicated helpdesk SLA, L1/L2 engineering, expedited factory RMA handling, and remote DSP managed services worldwide.",
      sceneImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      sceneCaption: "24/7 helpdesk ticketing, SLA logging & RMA dispatch",
      deliverable: "Monthly uptime audit & escalation hierarchy"
    }
  ];

  const currentStage = stages[activeStageIndex];

  return (
    <section
      className="transition-colors duration-500 ease-in-out py-20 sm:py-28 relative overflow-hidden"
      style={{ backgroundColor: currentStage.bgColor, color: currentStage.textColor }}
    >
      <div className="max-w-[1200px] mx-auto px-6 space-y-12">
        {/* Section title & sequence header */}
        <div className="border-b border-white/20 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2CE0C8] block mb-2">
              Sequential delivery model
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              How a project runs
            </h2>
          </div>
          <span className="text-sm font-medium text-white/80">
            5 integrated lifecycle stages
          </span>
        </div>

        {/* 5-Stage Step Navigation Line with Real Progress */}
        <div className="grid grid-cols-5 gap-2 sm:gap-4 relative border-b border-white/10 pb-6">
          {stages.map((stg, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stg.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`text-left p-2 sm:p-3 transition-all duration-200 cursor-pointer border-t-2 ${
                  isActive
                    ? 'border-[#2CE0C8] opacity-100'
                    : 'border-white/20 opacity-50 hover:opacity-80'
                }`}
              >
                <span className="font-mono text-xs block text-[#2CE0C8] font-bold">
                  {stg.step}
                </span>
                <span className="font-display text-xs sm:text-sm lg:text-base font-bold text-white block truncate pt-1">
                  {stg.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Stage Content & Dynamic Scene Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Stage description & deliverables */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-2xl font-bold text-[#2CE0C8]">
                {currentStage.step}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white">
                {currentStage.name}
              </h3>
            </div>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-[48ch]">
              {currentStage.description}
            </p>

            <div className="p-4 bg-black/20 rounded-lg border border-white/10 space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#2CE0C8] font-semibold block">
                Stage Deliverable
              </span>
              <span className="text-sm text-white font-medium">
                {currentStage.deliverable}
              </span>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
                className="px-4 py-2 text-xs font-semibold bg-white/10 hover:bg-white/20 rounded text-white transition-colors"
              >
                ← Previous Stage
              </button>
              <button
                onClick={() => setActiveStageIndex((prev) => (prev < stages.length - 1 ? prev + 1 : 0))}
                className="px-4 py-2 text-xs font-semibold bg-[#2CE0C8] text-[#062B2B] hover:bg-white rounded transition-colors"
              >
                Next Stage →
              </button>
            </div>
          </div>

          {/* Right: Swapping scene photograph with smooth transition */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-[320px] sm:h-[380px] rounded-xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                key={currentStage.id}
                src={currentStage.sceneImage}
                alt={currentStage.sceneCaption}
                className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white bg-black/60 backdrop-blur-xs p-3 rounded border border-white/10">
                <span className="text-[#2CE0C8] font-semibold block">{currentStage.name} Execution</span>
                <span className="text-white/80">{currentStage.sceneCaption}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
