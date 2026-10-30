import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = currentPath === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 16);

      // Hide header on scroll down, show on scroll up
      if (currentScrollY > 120 && currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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

  const headerBg = isHome
    ? 'bg-[#062B2B]/95 text-white border-white/10'
    : 'bg-[#F6F8F7]/95 text-[#10201F] border-[#D5DDDB]';

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${headerBg} ${
        isScrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.18)]' : ''
      } ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="flex items-center gap-3 group focus-visible:outline-[#2CE0C8] focus-visible:outline-offset-4"
          aria-label="Online Instruments - Home"
        >
          {/* Subtle architectural wave logo icon */}
          <div
            className={`w-9 h-9 rounded-sm border flex items-center justify-center font-semibold text-xs tracking-tighter transition-colors ${
              isHome
                ? 'border-[#2CE0C8] bg-[#00857E]/30 text-[#2CE0C8]'
                : 'border-[#007A75] bg-[#007A75]/5 text-[#007A75]'
            }`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12c3-4 6-4 9 0s6 4 9 0" strokeLinecap="round" />
              <path d="M3 16c3-4 6-4 9 0s6 4 9 0" strokeLinecap="round" strokeOpacity="0.5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span
              className={`font-semibold text-base tracking-tight leading-tight ${
                isHome ? 'text-white' : 'text-[#10201F]'
              }`}
            >
              Online Instruments
            </span>
            <span
              className={`text-xs tracking-normal ${
                isHome ? 'text-white/60' : 'text-[#54625F]'
              }`}
            >
              Audio-visual system integration · Est. 2006
            </span>
          </div>
        </a>

        {/* Desktop Navigation with drawn underlines */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`text-[15px] transition-colors py-1 relative link-draw ${
                  isActive
                    ? isHome ? 'text-[#2CE0C8] font-semibold' : 'text-[#007A75] font-semibold'
                    : isHome ? 'text-white/80 hover:text-white' : 'text-[#54625F] hover:text-[#10201F]'
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
            className={`rounded-[4px] px-5 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer ${
              isHome
                ? 'bg-[#FF5A36] text-white hover:bg-[#E24724] active:scale-95'
                : 'bg-[#007A75] text-[#F6F8F7] hover:bg-[#006965]'
            }`}
          >
            Contact us
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 ${isHome ? 'text-white' : 'text-[#10201F]'}`}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-t px-6 py-6 space-y-4 ${
            isHome ? 'bg-[#062B2B] border-white/10 text-white' : 'bg-[#F6F8F7] border-[#D5DDDB] text-[#10201F]'
          }`}
        >
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`text-base py-2 border-b ${
                    isHome ? 'border-white/10' : 'border-[#D5DDDB]/50'
                  } ${
                    isActive
                      ? isHome ? 'text-[#2CE0C8] font-semibold' : 'text-[#007A75] font-semibold'
                      : isHome ? 'text-white' : 'text-[#10201F]'
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
              className={`w-full rounded-[4px] py-3 text-center text-sm font-semibold ${
                isHome ? 'bg-[#FF5A36] text-white' : 'bg-[#007A75] text-[#F6F8F7]'
              }`}
            >
              Contact us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
