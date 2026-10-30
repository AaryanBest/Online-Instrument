import React, { useState } from 'react';
import { projectsData, ProjectSector, Project } from '../content/projects';
import { ProjectRow } from '../components/sections/ProjectRow';
import { ContactBand } from '../components/sections/ContactBand';
import { Logo } from '../components/ui/Logo';
import { brandToLogoMap } from '../content/logos';
import { X } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
  selectedProjectSlug?: string | null;
  onClearSelectedProject?: () => void;
  onSelectProject: (slug: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  selectedProjectSlug,
  onClearSelectedProject,
  onSelectProject,
}) => {
  const [activeSector, setActiveSector] = useState<string>('All');
  const [activeModalSlug, setActiveModalSlug] = useState<string | null>(selectedProjectSlug || null);

  const sectors = ['All', 'Corporate', 'Banking', 'Healthcare', 'Manufacturing'];

  const filteredProjects = projectsData.filter((p) => {
    if (activeSector === 'All') return true;
    return p.sector === activeSector;
  });

  const activeProject = projectsData.find((p) => p.slug === (activeModalSlug || selectedProjectSlug));

  const handleOpenDetail = (slug: string) => {
    setActiveModalSlug(slug);
    onSelectProject(slug);
  };

  const handleCloseDetail = () => {
    setActiveModalSlug(null);
    if (onClearSelectedProject) onClearSelectedProject();
  };

  return (
    <div className="space-y-0">
      {/* Intro Header */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-[#F6F8F7]">
        <div className="max-w-[1200px] mx-auto px-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#10201F] leading-[1.15]">
              Project case studies
            </h1>
            <span className="text-sm font-semibold text-[#007A75] tabular-nums">
              10 enterprise references
            </span>
          </div>
          <p className="text-lg sm:text-xl text-[#54625F] leading-relaxed max-w-[64ch]">
            Verifiable deployments across multinational corporate technology headquarters, high-density manufacturing campuses, Tier-1 banking institutes, and healthcare networks.
          </p>

          {/* Functional Sector Filter Buttons (Segmented Controls) */}
          <div className="flex flex-wrap items-center gap-2 pt-2" aria-label="Sector filter">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`px-4 py-2 text-xs font-medium transition-colors border ${
                  activeSector === sector
                    ? 'bg-[#007A75] text-[#F6F8F7] border-[#007A75]'
                    : 'bg-white text-[#54625F] border-[#D5DDDB] hover:text-[#10201F] hover:border-[#10201F]'
                }`}
              >
                {sector} {sector !== 'All' ? `(${projectsData.filter(p => p.sector === sector).length})` : `(${projectsData.length})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List (Ruled Rows) */}
      <section className="py-8 border-b border-[#D5DDDB] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          {filteredProjects.map((project) => (
            <ProjectRow
              key={project.slug}
              project={project}
              onSelectProject={handleOpenDetail}
            />
          ))}
        </div>
      </section>

      {/* Detail Modal / Slide-over Drawer for Complete Case Study */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#10201F]/60 backdrop-blur-xs p-4 sm:p-6"
        >
          <div className="bg-[#F6F8F7] border border-[#D5DDDB] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#F6F8F7] border-b border-[#D5DDDB] px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#007A75] font-semibold block mb-1">
                  {activeProject.sector} Case Study
                </span>
                <div className="flex items-center gap-3 pt-1">
                  <Logo
                    id={brandToLogoMap[activeProject.client] || activeProject.client.toLowerCase().replace(/[^a-z0-9]/g, '')}
                    tone="light"
                    className="h-8 max-w-[150px]"
                  />
                  <span className="text-xs text-[#54625F] hidden sm:inline">({activeProject.client})</span>
                </div>
              </div>
              <button
                onClick={handleCloseDetail}
                className="p-2 text-[#54625F] hover:text-[#10201F] hover:bg-white border border-transparent hover:border-[#D5DDDB]"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Stat overview */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white border border-[#D5DDDB]">
                <div>
                  <span className="text-xs text-[#54625F] block">Rooms Deployed</span>
                  <span className="text-xl font-semibold text-[#007A75] tabular-nums">{activeProject.rooms}</span>
                </div>
                <div>
                  <span className="text-xs text-[#54625F] block">Geographies</span>
                  <span className="text-sm font-semibold text-[#10201F]">{activeProject.countries.join(', ')}</span>
                </div>
                <div>
                  <span className="text-xs text-[#54625F] block">Sector</span>
                  <span className="text-sm font-semibold text-[#10201F]">{activeProject.sector}</span>
                </div>
                <div>
                  <span className="text-xs text-[#54625F] block">Timeline</span>
                  <span className="text-sm font-semibold text-[#10201F]">{activeProject.completionPeriod || 'Ongoing'}</span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#54625F]">
                  Executive summary
                </h3>
                <p className="text-base text-[#10201F] leading-relaxed">
                  {activeProject.summary}
                </p>
              </div>

              {/* Full Scope */}
              <div className="space-y-2 pt-2 border-t border-[#D5DDDB]/60">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#54625F]">
                  Delivered engineering scope
                </h3>
                <ul className="space-y-2 text-sm text-[#10201F]">
                  {activeProject.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#007A75] select-none">—</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Highlights */}
              {activeProject.technicalHighlights && (
                <div className="space-y-2 pt-2 border-t border-[#D5DDDB]/60">
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#54625F]">
                    Technical &amp; compliance milestones
                  </h3>
                  <ul className="space-y-1.5 text-sm text-[#54625F]">
                    {activeProject.technicalHighlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#2E8B57] font-semibold">✓</span>
                        <span className="text-[#10201F]">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Services Provided */}
              <div className="pt-2 border-t border-[#D5DDDB]/60 flex items-center justify-between text-xs text-[#54625F]">
                <div>
                  <span className="font-semibold text-[#10201F]">Services provided: </span>
                  {activeProject.services.join(' · ')}
                </div>
                <button
                  onClick={() => {
                    handleCloseDetail();
                    onNavigate('/contact');
                  }}
                  className="rounded-[4px] px-4 py-2 bg-[#007A75] text-[#F6F8F7] hover:bg-[#006965] font-medium transition-colors"
                >
                  Discuss similar deployment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Closing Band */}
      <ContactBand
        title="Need an RFP response or reference architecture?"
        description="We share detailed single-line schematics, equipment lists, and heat load schedules under NDA."
        buttonLabel="Request project consultation"
        onNavigate={onNavigate}
      />
    </div>
  );
};
