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
    <footer className="bg-[#071A1A] text-white border-t border-white/10" aria-label="Site footer">
      {/* Upper footer: Offices Directory */}
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 pt-16 pb-12">
        <div className="border-b border-white/15 pb-12">
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-2 tracking-[0.01em] uppercase">
            18 OFFICES ACROSS INDIA, ASIA, THE MIDDLE EAST AND THE USA
          </h2>
          <p className="text-base text-white/70 max-w-2xl mb-10 font-sans">
            Headquartered in Bengaluru with regional staging, engineering, and support operations in key corporate and industrial corridors.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region) => {
              const officesInRegion = officesData.filter((o) => o.region === region);
              return (
                <div key={region} className="space-y-3">
                  <h3 className="text-xs font-bold text-[#00A99D] tracking-wider uppercase border-b border-white/10 pb-2">
                    {region}
                  </h3>
                  <ul className="space-y-2 text-sm font-sans">
                    {officesInRegion.map((office) => (
                      <li key={office.city} className="flex flex-col">
                        <span className="text-white font-medium flex items-center gap-1.5">
                          {office.city}
                          {office.hq && (
                            <span className="text-[10px] text-[#FF5A36] font-bold tracking-wide uppercase">
                              (Global HQ)
                            </span>
                          )}
                        </span>
                        {office.addressNote && (
                          <span className="text-xs text-white/50 leading-tight">
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
        <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-white/15 text-xs font-sans">
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-white font-bold text-sm">Standards and Accreditation</h4>
            <p className="text-white/70 leading-relaxed">
              ISO 9001:2015 certified by Bureau Veritas.<br />
              D&amp;B D-U-N-S Registered: 65-008-6072.<br />
              Member of the PSNI Global Alliance.<br />
              <span className="text-white/40">ISO 27001, ISO 45001, and ISO 14001 certification in progress.</span>
            </p>
          </div>

          <div className="md:col-span-4 space-y-2">
            <h4 className="text-white font-bold text-sm">Navigation</h4>
            <div className="grid grid-cols-2 gap-y-1.5 text-white/80">
              <a href="/about" onClick={(e) => handleLink(e, '/about')} className="hover:text-[#00A99D] underline-offset-4 hover:underline">About</a>
              <a href="/services" onClick={(e) => handleLink(e, '/services')} className="hover:text-[#00A99D] underline-offset-4 hover:underline">Services</a>
              <a href="/solutions" onClick={(e) => handleLink(e, '/solutions')} className="hover:text-[#00A99D] underline-offset-4 hover:underline">Solutions</a>
              <a href="/projects" onClick={(e) => handleLink(e, '/projects')} className="hover:text-[#00A99D] underline-offset-4 hover:underline">Projects</a>
              <a href="/how-we-work" onClick={(e) => handleLink(e, '/how-we-work')} className="hover:text-[#00A99D] underline-offset-4 hover:underline">How we work</a>
              <a href="/contact" onClick={(e) => handleLink(e, '/contact')} className="hover:text-[#00A99D] underline-offset-4 hover:underline">Contact</a>
            </div>
          </div>

          <div className="md:col-span-4 space-y-2">
            <h4 className="text-white font-bold text-sm">Direct Engagement</h4>
            <p className="text-white/70 leading-relaxed">
              For new enterprise tenders, facility expansions, or PMC inquiries, contact our engineering desk directly.
            </p>
            <div className="pt-2">
              <button
                onClick={(e) => handleLink(e, '/contact')}
                className="btn-coral-pill !px-5 !py-2 !text-xs cursor-pointer"
              >
                Send project brief
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-sans">
          <div>
            &copy; {new Date().getFullYear()} Online Instruments (India) Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="/legal/privacy"
              onClick={(e) => handleLink(e, '/legal/privacy')}
              className="hover:text-white underline-offset-4 hover:underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
