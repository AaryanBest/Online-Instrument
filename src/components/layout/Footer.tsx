import React from 'react';
import { officesData, OfficeRegion } from '../../content/offices';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const regions: OfficeRegion[] = ["India", "Middle East", "Rest of Asia", "USA"];

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#10201F] text-[#F6F8F7] border-t border-[#10201F]">
      {/* Upper footer: Offices Directory */}
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-12">
        <div className="border-b border-[#54625F]/40 pb-12">
          <h2 className="text-xl font-semibold text-[#F6F8F7] mb-2 tracking-tight">
            18 offices across India, Asia, the Middle East and the USA
          </h2>
          <p className="text-sm text-[#D5DDDB] max-w-2xl mb-10">
            Headquartered in Bengaluru with regional staging, engineering, and support operations in key corporate and industrial corridors.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region) => {
              const officesInRegion = officesData.filter((o) => o.region === region);
              return (
                <div key={region} className="space-y-3">
                  <h3 className="text-xs font-semibold text-[#2CCFC0] tracking-wider uppercase border-b border-[#54625F]/30 pb-2">
                    {region}
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {officesInRegion.map((office) => (
                      <li key={office.city} className="flex flex-col">
                        <span className="text-[#F6F8F7] font-medium flex items-center gap-1.5">
                          {office.city}
                          {office.hq && (
                            <span className="text-[10px] text-[#2CCFC0] font-normal tracking-wide">
                              (Headquarters)
                            </span>
                          )}
                        </span>
                        {office.addressNote && (
                          <span className="text-xs text-[#54625F] leading-tight">
                            {office.addressNote}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Middle Footer: Standards, D-U-N-S, and Site Navigation */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#54625F]/40 text-xs">
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-[#F6F8F7] font-medium text-sm">Standards and accreditation</h4>
            <p className="text-[#D5DDDB] leading-relaxed">
              ISO 9001:2015 certified by Bureau Veritas.<br />
              D&amp;B D-U-N-S Registered: 65-008-6072.<br />
              Member of the PSNI Global Alliance.<br />
              <span className="text-[#54625F]">ISO 27001, ISO 45001, and ISO 14001 certification in progress.</span>
            </p>
          </div>

          <div className="md:col-span-4 space-y-2">
            <h4 className="text-[#F6F8F7] font-medium text-sm">Navigation</h4>
            <div className="grid grid-cols-2 gap-y-1.5 text-[#D5DDDB]">
              <a href="/about" onClick={(e) => handleLink(e, '/about')} className="hover:text-[#2CCFC0] underline-offset-4 hover:underline">About</a>
              <a href="/services" onClick={(e) => handleLink(e, '/services')} className="hover:text-[#2CCFC0] underline-offset-4 hover:underline">Services</a>
              <a href="/solutions" onClick={(e) => handleLink(e, '/solutions')} className="hover:text-[#2CCFC0] underline-offset-4 hover:underline">Solutions</a>
              <a href="/projects" onClick={(e) => handleLink(e, '/projects')} className="hover:text-[#2CCFC0] underline-offset-4 hover:underline">Projects</a>
              <a href="/how-we-work" onClick={(e) => handleLink(e, '/how-we-work')} className="hover:text-[#2CCFC0] underline-offset-4 hover:underline">How we work</a>
              <a href="/contact" onClick={(e) => handleLink(e, '/contact')} className="hover:text-[#2CCFC0] underline-offset-4 hover:underline">Contact</a>
            </div>
          </div>

          <div className="md:col-span-4 space-y-2">
            <h4 className="text-[#F6F8F7] font-medium text-sm">Direct engagement</h4>
            <p className="text-[#D5DDDB] leading-relaxed">
              For new enterprise tenders, facility expansions, or PMC inquiries, contact our project desk directly.
            </p>
            <div className="pt-1">
              <button
                onClick={(e) => handleLink(e, '/contact')}
                className="rounded-[4px] px-4 py-2 text-xs font-medium bg-[#007A75] text-[#F6F8F7] hover:bg-[#2CCFC0] hover:text-[#10201F] transition-colors"
              >
                Send project brief
              </button>
            </div>
          </div>
        </div>

        {/* Bottom sign-off: Center aligned per blueprint rule */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#54625F] gap-4">
          <p className="text-center sm:text-left">
            © 2006–{new Date().getFullYear()} Online Instruments (India) Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/legal/privacy"
              onClick={(e) => handleLink(e, '/legal/privacy')}
              className="text-[#D5DDDB] hover:text-[#2CCFC0] underline underline-offset-4"
            >
              Privacy policy
            </a>
            <span className="text-[#54625F]">·</span>
            <span>Bengaluru HQ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
