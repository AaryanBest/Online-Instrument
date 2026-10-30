import React from 'react';
import { sopStepsData, hardwareTrackingSample, siteProgressSample } from '../content/process';
import { ProcessLine } from '../components/sections/ProcessLine';
import { RackStagingComparison } from '../components/sections/RackStagingComparison';
import { TestReportsExcerpt } from '../components/sections/TestReportsExcerpt';
import { supportIncidentSteps, escalationMatrix } from '../content/process';
import { ContactBand } from '../components/sections/ContactBand';
import { Logo } from '../components/ui/Logo';
import { brandToLogoMap } from '../content/logos';

interface HowWeWorkPageProps {
  onNavigate: (path: string) => void;
}

export const HowWeWorkPage: React.FC<HowWeWorkPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* 1. Header */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-[#F6F8F7]">
        <div className="max-w-[1200px] mx-auto px-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#10201F] leading-[1.15]">
              How we work
            </h1>
            <span className="text-sm font-semibold text-[#007A75] tabular-nums">
              Quality assurance &amp; delivery SOP
            </span>
          </div>
          <p className="text-lg sm:text-xl text-[#54625F] leading-relaxed max-w-[64ch]">
            The formal engineering protocols, tracking sheets, off-site staging methods, and instrumented commissioning tests behind every enterprise room deployment.
          </p>

          {/* Quick jump navigation */}
          <div className="flex flex-wrap gap-2 pt-2">
            <a href="#sop" className="text-xs px-3 py-1.5 bg-white border border-[#D5DDDB] text-[#54625F] hover:text-[#007A75] font-medium">12-Step SOP</a>
            <a href="#hardware-tracking" className="text-xs px-3 py-1.5 bg-white border border-[#D5DDDB] text-[#54625F] hover:text-[#007A75] font-medium">Hardware tracking ledger</a>
            <a href="#site-progress" className="text-xs px-3 py-1.5 bg-white border border-[#D5DDDB] text-[#54625F] hover:text-[#007A75] font-medium">Site coordination status</a>
            <a href="#change-management" className="text-xs px-3 py-1.5 bg-white border border-[#D5DDDB] text-[#54625F] hover:text-[#007A75] font-medium">Change &amp; risk protocol</a>
            <a href="#rack-staging" className="text-xs px-3 py-1.5 bg-white border border-[#D5DDDB] text-[#54625F] hover:text-[#007A75] font-medium">Rack staging</a>
            <a href="#cqt-testing" className="text-xs px-3 py-1.5 bg-white border border-[#D5DDDB] text-[#54625F] hover:text-[#007A75] font-medium">Calibrated CQT testing</a>
            <a href="#support-flow" className="text-xs px-3 py-1.5 bg-white border border-[#D5DDDB] text-[#54625F] hover:text-[#007A75] font-medium">Support &amp; escalation</a>
          </div>
        </div>
      </section>

      {/* 2. Written 12-Step SOP Sequence */}
      <section id="sop" className="py-16 sm:py-24 border-b border-[#D5DDDB] bg-white scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 space-y-10">
          <div className="border-b border-[#D5DDDB] pb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
              12-step standard operating procedure
            </h2>
            <p className="text-sm text-[#54625F] pt-1">
              Executed sequentially for every installation from preliminary site walk to final attic stock handover.
            </p>
          </div>

          <ProcessLine steps={sopStepsData} />
        </div>
      </section>

      {/* 3. Live Hardware Procurement & Tracking Ledger */}
      <section id="hardware-tracking" className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-[#F6F8F7] scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 space-y-8">
          <div className="border-b border-[#D5DDDB] pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
                Live hardware procurement &amp; shipment ledger
              </h2>
              <p className="text-sm text-[#54625F] pt-1">
                Line-by-line tracking shared directly with client project managers, updated at every dispatch milestone.
              </p>
            </div>
            <span className="text-xs font-mono text-[#007A75] bg-[#007A75]/10 px-2 py-1 border border-[#007A75]/20">
              LEDGER REF: OI-TRACK-2026-F4
            </span>
          </div>

          {/* Authentic Ledger Table */}
          <div className="overflow-x-auto border border-[#D5DDDB] bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#F6F8F7] border-b border-[#D5DDDB] text-xs uppercase tracking-wider text-[#54625F]">
                  <th className="py-3 px-4 font-semibold">Ref ID</th>
                  <th className="py-3 px-4 font-semibold">Equipment Description</th>
                  <th className="py-3 px-4 font-semibold">Make &amp; Model</th>
                  <th className="py-3 px-4 font-semibold">Allocation</th>
                  <th className="py-3 px-4 font-semibold text-center">Ordered</th>
                  <th className="py-3 px-4 font-semibold text-center">Delivered</th>
                  <th className="py-3 px-4 font-semibold text-center">Pending</th>
                  <th className="py-3 px-4 font-semibold">Status / Staging</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D5DDDB]">
                {hardwareTrackingSample.map((item) => {
                  const brandKey = Object.keys(brandToLogoMap).find(b => item.makeModel.toLowerCase().includes(b.toLowerCase()));
                  const logoId = brandKey ? brandToLogoMap[brandKey] : null;

                  return (
                    <tr key={item.id} className="hover:bg-[#F6F8F7]/50">
                      <td className="py-3 px-4 font-mono text-xs font-semibold text-[#007A75]">
                        {item.id}
                      </td>
                      <td className="py-3 px-4 font-medium text-[#10201F]">
                        {item.itemDescription}
                      </td>
                      <td className="py-3 px-4 text-[#54625F]">
                        <div className="flex items-center gap-2">
                          {logoId && <Logo id={logoId} tone="light" className="h-4 max-w-[65px] shrink-0" />}
                          <span className="font-medium text-[#10201F]">{item.makeModel}</span>
                        </div>
                      </td>
                    <td className="py-3 px-4 text-xs text-[#54625F]">
                      {item.roomAllocation}
                    </td>
                    <td className="py-3 px-4 text-center tabular-nums text-[#10201F]">
                      {item.qtyOrdered}
                    </td>
                    <td className="py-3 px-4 text-center tabular-nums font-semibold text-[#2E8B57]">
                      {item.qtyDelivered}
                    </td>
                    <td className="py-3 px-4 text-center tabular-nums text-[#54625F]">
                      {item.qtyPending}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium border ${
                        item.status === 'Delivered'
                          ? 'bg-[#2E8B57]/10 text-[#2E8B57] border-[#2E8B57]/20'
                          : 'bg-[#E8A317]/10 text-[#E8A317] border-[#E8A317]/20'
                      }`}>
                        {item.status} ({item.eta})
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Site Coordination and Room Status Updates */}
      <section id="site-progress" className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-white scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 space-y-8">
          <div className="border-b border-[#D5DDDB] pb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
              Room-by-room site coordination progress
            </h2>
            <p className="text-sm text-[#54625F] pt-1">
              Field coordination tracking containment first fix, rack tie-ins, and formal sign-offs.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#D5DDDB] bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#F6F8F7] border-b border-[#D5DDDB] text-xs uppercase tracking-wider text-[#54625F]">
                  <th className="py-3 px-4 font-semibold">Room Code</th>
                  <th className="py-3 px-4 font-semibold">Floor &amp; Zone</th>
                  <th className="py-3 px-4 font-semibold">Space Type</th>
                  <th className="py-3 px-4 font-semibold text-center">First Fix (Cabling)</th>
                  <th className="py-3 px-4 font-semibold text-center">Second Fix (Mounts)</th>
                  <th className="py-3 px-4 font-semibold text-center">Hardware (%)</th>
                  <th className="py-3 px-4 font-semibold text-center">CQT Test</th>
                  <th className="py-3 px-4 font-semibold text-right">Sign-off</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D5DDDB]">
                {siteProgressSample.map((room) => (
                  <tr key={room.roomCode} className="hover:bg-[#F6F8F7]/50">
                    <td className="py-3 px-4 font-mono text-xs font-semibold text-[#007A75]">
                      {room.roomCode}
                    </td>
                    <td className="py-3 px-4 text-[#54625F]">
                      {room.floorZone}
                    </td>
                    <td className="py-3 px-4 font-medium text-[#10201F]">
                      {room.spaceType}
                    </td>
                    <td className="py-3 px-4 text-center tabular-nums text-[#10201F]">
                      {room.firstFixPercent}%
                    </td>
                    <td className="py-3 px-4 text-center tabular-nums text-[#10201F]">
                      {room.secondFixPercent}%
                    </td>
                    <td className="py-3 px-4 text-center tabular-nums font-semibold text-[#10201F]">
                      {room.hardwarePercent}%
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium border ${
                        room.cqtStatus === 'Passed'
                          ? 'bg-[#2E8B57]/15 text-[#2E8B57] border-[#2E8B57]/30'
                          : 'bg-[#E8A317]/15 text-[#E8A317] border-[#E8A317]/30'
                      }`}>
                        {room.cqtStatus}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-[#10201F]">
                      {room.signOff}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Change Management and Risk Management Protocol */}
      <section id="change-management" className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-[#F6F8F7] scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 space-y-10">
          <div className="border-b border-[#D5DDDB] pb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
              Change control &amp; risk mitigation protocol
            </h2>
            <p className="text-sm text-[#54625F] pt-1">
              Zero unauthorized field modifications. All scope, architectural, or timeline adjustments follow a 4-stage engineering review.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stage: "01",
                name: "Change Initiation",
                desc: "Client, architect, or general contractor logs variance request with exact room ID and reason."
              },
              {
                stage: "02",
                name: "Technical & Cost Impact",
                desc: "Engineering team assesses thermal, power, acoustic, single-line schematics, and timeline consequences."
              },
              {
                stage: "03",
                name: "Formal Authorization",
                desc: "Written sign-off issued by project manager and client commercial contact prior to work starting."
              },
              {
                stage: "04",
                name: "As-Built Revision",
                desc: "CAD drawings, cable schedules, and IP allocation sheets updated and red-lined immediately."
              }
            ].map((st) => (
              <div key={st.stage} className="p-6 bg-white border border-[#D5DDDB] space-y-3">
                <span className="text-2xl font-semibold text-[#007A75] tabular-nums block">
                  {st.stage}
                </span>
                <h3 className="text-lg font-semibold text-[#10201F]">
                  {st.name}
                </h3>
                <p className="text-xs text-[#54625F] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Rack Staging Section */}
      <section id="rack-staging" className="py-16 sm:py-24 border-b border-[#D5DDDB] bg-white scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 space-y-10">
          <div className="max-w-[68ch] space-y-2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
              Off-site rack staging facility
            </h2>
            <p className="text-base text-[#54625F] leading-relaxed">
              We operate a 40-rack staging floor in Bengaluru where equipment racks are assembled, laser-labeled, laced with velcro harnesses, and tested for 48 continuous hours before delivery.
            </p>
          </div>

          <RackStagingComparison />
        </div>
      </section>

      {/* 7. Calibrated AQ-AV CQT Commissioning & Testing */}
      <section id="cqt-testing" className="py-16 sm:py-24 border-b border-[#D5DDDB] bg-[#F6F8F7] scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 space-y-10">
          <div className="max-w-[68ch] space-y-2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
              Calibrated instrument commissioning reports
            </h2>
            <p className="text-base text-[#54625F] leading-relaxed">
              We never perform qualitative checks. Every parameter is tested against objective physical metrics using calibrated instruments.
            </p>
          </div>

          <TestReportsExcerpt />
        </div>
      </section>

      {/* 8. Incident & Support Flow */}
      <section id="support-flow" className="py-16 sm:py-24 border-b border-[#D5DDDB] bg-white scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 space-y-12">
          <div className="border-b border-[#D5DDDB] pb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
              Support incident lifecycle and escalation tiers
            </h2>
            <p className="text-sm text-[#54625F] pt-1">
              Structured SLA governance ensuring rapid response and transparent root-cause reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-4">
              {supportIncidentSteps.map((step) => (
                <div key={step.step} className="p-4 bg-[#F6F8F7] border border-[#D5DDDB] flex items-start gap-4">
                  <span className="font-semibold text-lg text-[#007A75] tabular-nums shrink-0 pt-0.5">
                    0{step.step}
                  </span>
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <span className="font-semibold text-sm text-[#10201F]">{step.title}</span>
                      <span className="text-xs text-[#007A75] font-medium">{step.timeline}</span>
                    </div>
                    <p className="text-xs text-[#54625F] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-base font-semibold text-[#10201F]">Escalation hierarchy</h3>
              {escalationMatrix.map((esc) => (
                <div key={esc.level} className="p-4 bg-[#F6F8F7] border border-[#D5DDDB] border-l-4 border-l-[#007A75] space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#007A75]">{esc.level}</span>
                    <span className="text-[#10201F]">{esc.role}</span>
                  </div>
                  <p className="text-xs text-[#54625F]">
                    {esc.responsibility}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Closing Band */}
      <ContactBand
        title="Ready to benchmark your AV standards?"
        description="We can review your existing room schematics, bill of materials, or site tender documents."
        buttonLabel="Consult with engineering"
        onNavigate={onNavigate}
      />
    </div>
  );
};
