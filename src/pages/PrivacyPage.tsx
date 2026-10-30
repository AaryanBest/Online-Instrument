import React from 'react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="space-y-0">
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-[#F6F8F7]">
        <div className="max-w-[1200px] mx-auto px-6 space-y-4">
          <span className="text-xs uppercase tracking-wider text-[#007A75] font-semibold block">
            Legal &amp; Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#10201F]">
            Privacy policy &amp; enterprise data protection
          </h1>
          <p className="text-base text-[#54625F] max-w-[64ch]">
            Last updated: October 2026. Online Instruments (India) Private Limited.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6 space-y-10 text-base text-[#10201F] leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#10201F] tracking-tight">
              1. Enterprise Commitment to Confidentiality
            </h2>
            <p className="text-[#54625F]">
              Online Instruments operates as an audio-visual system integration partner to Fortune 500 enterprises, government organizations, financial institutions, and healthcare providers. We handle architectural CAD drawings, network IP addressing schemes, security floor plans, and corporate procurement data under strict non-disclosure obligations.
            </p>
          </div>

          <div className="space-y-3 border-t border-[#D5DDDB]/60 pt-8">
            <h2 className="text-2xl font-semibold text-[#10201F] tracking-tight">
              2. Information We Collect
            </h2>
            <p className="text-[#54625F]">
              When interacting with our website or engaging our engineering team, we may collect:
            </p>
            <ul className="space-y-2 text-[#54625F] pl-4 list-disc">
              <li>Contact details (name, corporate email, phone number, company name, office location).</li>
              <li>Project briefs (estimated room counts, space types, timelines, technical specifications).</li>
              <li>Technical site documents provided for RFP tenders, single-line diagrams, and equipment schedules.</li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-[#D5DDDB]/60 pt-8">
            <h2 className="text-2xl font-semibold text-[#10201F] tracking-tight">
              3. Protection of Architectural and Network Data
            </h2>
            <p className="text-[#54625F]">
              All client architectural blueprints, VLAN configurations, DSP presets, and device credentials are stored within isolated encrypted repositories accessible only by vetted engineers assigned to your specific project. We never disclose client floor plans or internal room identities publicly.
            </p>
          </div>

          <div className="space-y-3 border-t border-[#D5DDDB]/60 pt-8">
            <h2 className="text-2xl font-semibold text-[#10201F] tracking-tight">
              4. Third-Party Sharing and OEM Partners
            </h2>
            <p className="text-[#54625F]">
              We share equipment serial numbers and site addresses exclusively with authorized OEM manufacturers (e.g., Crestron, Q-SYS, Shure, Sony) solely for the purpose of warranty registration and expedited RMA fulfillment. We do not sell or monetize client data under any circumstances.
            </p>
          </div>

          <div className="space-y-3 border-t border-[#D5DDDB]/60 pt-8">
            <h2 className="text-2xl font-semibold text-[#10201F] tracking-tight">
              5. Security and Information Standards
            </h2>
            <p className="text-[#54625F]">
              Online Instruments is ISO 9001:2015 certified by Bureau Veritas. Certification for ISO 27001 (Information Security Management) is currently in progress.
            </p>
          </div>

          <div className="space-y-3 border-t border-[#D5DDDB]/60 pt-8">
            <h2 className="text-2xl font-semibold text-[#10201F] tracking-tight">
              6. Contact for Privacy and Compliance
            </h2>
            <p className="text-[#54625F]">
              For questions regarding our enterprise privacy framework or to execute a reciprocal NDA, please contact our Legal and Compliance Office at our Bengaluru Headquarters.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
