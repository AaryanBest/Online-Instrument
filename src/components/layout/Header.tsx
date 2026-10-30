import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Solutions", path: "/solutions" },
    { label: "Projects", path: "/projects" },
    { label: "How we work", path: "/how-we-work" },
  ];

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-200 bg-[#F6F8F7]/95 backdrop-blur-xs border-b border-[#D5DDDB] ${
        isScrolled ? 'shadow-[0_2px_12px_rgba(16,32,31,0.06)]' : ''
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="flex items-center gap-3 group focus-visible:outline-[#007A75] focus-visible:outline-offset-4"
          aria-label="Online Instruments - Home"
        >
          {/* Subtle architectural wave logo icon */}
          <div className="w-8 h-8 rounded-none border border-[#007A75] flex items-center justify-center bg-[#007A75]/5 text-[#007A75] font-semibold text-xs tracking-tighter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12c3-4 6-4 9 0s6 4 9 0" strokeLinecap="round" />
              <path d="M3 16c3-4 6-4 9 0s6 4 9 0" strokeLinecap="round" strokeOpacity="0.5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base text-[#10201F] tracking-tight leading-tight">
              Online Instruments
            </span>
            <span className="text-xs text-[#54625F] tracking-normal">
              Audio-visual system integration · Est. 2006
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`text-[15px] transition-colors py-1 focus-visible:outline-[#007A75] focus-visible:outline-offset-4 ${
                  isActive
                    ? 'text-[#007A75] font-medium border-b-2 border-[#007A75]'
                    : 'text-[#54625F] hover:text-[#10201F]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={(e) => handleNavClick(e, '/contact')}
            className="rounded-[4px] px-5 py-2.5 text-sm font-medium bg-[#007A75] text-[#F6F8F7] hover:bg-[#006965] active:bg-[#005a56] transition-colors focus-visible:outline-[#007A75] focus-visible:outline-offset-2"
          >
            Contact us
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#10201F] hover:text-[#007A75] focus-visible:outline-[#007A75]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#D5DDDB] bg-[#F6F8F7] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`text-base py-2 border-b border-[#D5DDDB]/50 ${
                    isActive ? 'text-[#007A75] font-medium' : 'text-[#10201F]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-2">
            <button
              onClick={(e) => handleNavClick(e, '/contact')}
              className="w-full rounded-[4px] py-3 text-center text-sm font-medium bg-[#007A75] text-[#F6F8F7]"
            >
              Contact us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
