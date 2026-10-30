import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { HowWeWorkPage } from './pages/HowWeWorkPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname;
      return p === '' ? '/' : p;
    }
    return '/';
  });

  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname || '/';
      setCurrentPath(p);
      if (p.startsWith('/projects/')) {
        const slug = p.replace('/projects/', '');
        setSelectedProjectSlug(slug);
      } else {
        setSelectedProjectSlug(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update page title and meta description based on route
  useEffect(() => {
    let title = "Online Instruments — Audio-Visual System Integration";
    let desc = "B2B Audio-Visual system integrator headquartered in Bengaluru since 2006. Enterprise AV consultancy, engineering design, supply, rack staging, commissioning, and support.";

    if (currentPath === '/about') {
      title = "About Online Instruments — Audio-Visual System Integration";
      desc = "Online Instruments is a Bengaluru-headquartered AV system integrator, established 2006, with 18 offices and 527 people across India, Asia, the Middle East and the USA.";
    } else if (currentPath === '/services') {
      title = "Services — Online Instruments";
      desc = "Consultancy, design, supply, implementation and support for audio-visual systems, from a single AV system integrator.";
    } else if (currentPath === '/solutions') {
      title = "Solutions: Spaces We Build — Online Instruments";
      desc = "Architectural meeting rooms, training rooms, command centres, customer experience centres, digital signage, and auditoriums.";
    } else if (currentPath === '/projects' || currentPath.startsWith('/projects/')) {
      title = "Projects & Case Studies — Online Instruments";
      desc = "Enterprise AV deployments for Amazon, Google, Micron, Siemens, Deloitte USI, TCS, Amdocs and Persistent Systems.";
    } else if (currentPath === '/how-we-work') {
      title = "How We Work: Delivery SOP & Calibrated Testing — Online Instruments";
      desc = "Written 12-step SOP, live hardware tracking ledger, 40-rack off-site staging facility, and AQ-AV CQT calibrated test reports.";
    } else if (currentPath === '/contact') {
      title = "Contact Our Engineering Team — Online Instruments";
      desc = "Contact our Bengaluru headquarters or 18 regional offices across India, Asia, Middle East and USA for project tenders.";
    } else if (currentPath === '/legal/privacy') {
      title = "Privacy Policy — Online Instruments";
      desc = "Enterprise privacy policy, NDA compliance, and technical data handling.";
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    }
  }, [currentPath]);

  // Organization JSON-LD injection for structured SEO
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Online Instruments (India) Private Limited",
      "alternateName": "Online Instruments",
      "foundingDate": "2006",
      "description": "Enterprise Audio-Visual System Integrator providing consultancy, design, supply, implementation, and managed support.",
      "url": "https://www.online-instruments.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      },
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 527
      },
      "award": [
        "Connected Meeting Spaces Award (Inavation 2026)",
        "Best Customer Experience Centre Project (Inavate APAC 2025)",
        "Great Place to Work Certified 2024-25 & 2025-26"
      ]
    };

    let scriptTag = document.getElementById('org-jsonld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'org-jsonld';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLd);
  }, []);

  const navigateTo = (path: string) => {
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      if (route && route !== currentPath) {
        window.history.pushState({}, '', path);
        setCurrentPath(route);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    setSelectedProjectSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (slug: string) => {
    setSelectedProjectSlug(slug);
    window.history.pushState({}, '', `/projects/${slug}`);
  };

  const handleClearSelectedProject = () => {
    setSelectedProjectSlug(null);
    window.history.pushState({}, '', '/projects');
  };

  const renderCurrentPage = () => {
    if (currentPath === '/about') {
      return <AboutPage onNavigate={navigateTo} />;
    }
    if (currentPath === '/services') {
      return <ServicesPage onNavigate={navigateTo} />;
    }
    if (currentPath === '/solutions') {
      return <SolutionsPage onNavigate={navigateTo} />;
    }
    if (currentPath === '/projects' || currentPath.startsWith('/projects/')) {
      return (
        <ProjectsPage
          onNavigate={navigateTo}
          selectedProjectSlug={selectedProjectSlug}
          onSelectProject={handleSelectProject}
          onClearSelectedProject={handleClearSelectedProject}
        />
      );
    }
    if (currentPath === '/how-we-work') {
      return <HowWeWorkPage onNavigate={navigateTo} />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }
    if (currentPath === '/legal/privacy') {
      return <PrivacyPage />;
    }

    // Default: Home Page
    return <HomePage onNavigate={navigateTo} onSelectProject={handleSelectProject} />;
  };

  return (
    <div className={`min-h-screen flex flex-col ${currentPath === '/' ? 'bg-[#071A1A] text-[#071A1A]' : 'bg-[#F6F8F7] text-[#10201F]'}`}>
      <Header currentPath={currentPath} onNavigate={navigateTo} />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
