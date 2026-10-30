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
      setIsScrolled(currentScrollY > 80);

      // Hide header on scroll down, return on scroll up
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

  // Header appearance rules per v3 brief:
  // On home: transparent on teal when at top; solid ink (#071A1A) when scrolled past 80px.
  // On other pages: solid white/paper background with ink text.
  let headerClasses = '';
  if (isHome) {
    if (isScrolled) {
      headerClasses = 'bg-[#071A1A] text-white border-b border-white/10 shadow-md';
    } else {
      headerClasses = 'bg-transparent text-[#071A1A] border-b border-transparent';
    }
  } else {
    headerClasses = 'bg-[#FFFFFF] text-[#071A1A] border-b border-[#071A1A]/10 shadow-xs';
  }

  const isHeaderDark = isHome ? isScrolled : false;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${headerClasses} ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">
        {/* Brand mark */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="flex items-center gap-3 group focus-visible:outline-[#FF5A36] focus-visible:outline-offset-4"
          aria-label="Online Instruments - Home"
        >
          {/* Wave SVG Logo Mark */}
          <div
            className={`w-9 h-9 flex items-center justify-center font-bold text-xs transition-colors ${
              isHeaderDark
                ? 'bg-white/10 text-[#00A99D]'
                : 'bg-[#071A1A]/10 text-[#071A1A]'
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M2 12c3-4 6-4 9 0s6 4 9 0" strokeLinecap="round" />
              <path d="M2 16c3-4 6-4 9 0s6 4 9 0" strokeLinecap="round" strokeOpacity="0.5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span
              className={`font-bold text-lg tracking-tight leading-tight ${
                isHeaderDark ? 'text-white' : 'text-[#071A1A]'
              }`}
            >
              Online Instruments
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`text-base font-bold transition-colors relative py-1 focus-visible:outline-[#FF5A36] focus-visible:outline-offset-2 ${
                  isHeaderDark
                    ? isActive
                      ? 'text-[#00A99D]'
                      : 'text-white/80 hover:text-white'
                    : isActive
                      ? 'text-[#071A1A]'
                      : 'text-[#071A1A]/80 hover:text-[#071A1A]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] ${
                      isHeaderDark ? 'bg-[#00A99D]' : 'bg-[#071A1A]'
                    }`}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Primary Action Button (Coral pill) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onNavigate('/contact')}
            className="btn-coral-pill !px-6 !py-2.5 !text-sm cursor-pointer"
          >
            Talk to our team
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => onNavigate('/contact')}
            className="btn-coral-pill !px-4 !py-1.5 !text-xs cursor-pointer"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 transition-colors ${
              isHeaderDark ? 'text-white hover:text-[#00A99D]' : 'text-[#071A1A] hover:text-[#00A99D]'
            }`}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071A1A] text-white border-t border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="text-lg font-bold text-white/90 hover:text-[#00A99D] py-1 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                onNavigate('/contact');
                setMobileMenuOpen(false);
              }}
              className="w-full btn-coral-pill cursor-pointer"
            >
              Talk to our team
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
