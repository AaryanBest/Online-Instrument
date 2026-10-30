import React from 'react';
import { Project } from '../../content/projects';
import { Logo } from '../ui/Logo';
import { brandToLogoMap } from '../../content/logos';

interface ProjectRowProps {
  project: Project;
  onSelectProject?: (slug: string) => void;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ project, onSelectProject }) => {
  const logoId = brandToLogoMap[project.client] || project.client.toLowerCase().replace(/[^a-z0-9]/g, '');

  return (
    <article className="py-10 border-b border-[#D5DDDB]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        {/* Left Column: 1-4: Client Logo, Sector, Room count, Countries */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-[#54625F] font-medium">
              {project.sector}
            </span>
          </div>

          {/* Client Brand Logo */}
          <div className="py-1 h-12 flex items-center">
            <Logo id={logoId} tone="light" className="h-8 max-w-[150px]" />
          </div>

          <div className="text-xl font-semibold text-[#007A75] tabular-nums">
            {project.rooms} rooms
          </div>

          <div className="text-xs text-[#54625F] pt-1">
            <span className="font-medium text-[#10201F]">Geography: </span>
            {project.countries.join(", ")}
          </div>

          {project.completionPeriod && (
            <div className="text-xs text-[#54625F]">
              <span className="font-medium text-[#10201F]">Timeline: </span>
              {project.completionPeriod}
            </div>
          )}
        </div>

        {/* Right Column: 5-12: Summary, Scope, Services delivered */}
        <div className="lg:col-span-8 space-y-5">
          <p className="text-base text-[#10201F] leading-relaxed max-w-[68ch]">
            {project.summary}
          </p>

          {/* Scope list */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#54625F] mb-2">
              Delivered scope
            </h4>
            <ul className="space-y-1.5 text-sm text-[#10201F]">
              {project.scope.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#007A75] select-none">—</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services tags & View details trigger */}
          <div className="pt-3 border-t border-[#D5DDDB]/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#54625F]">
              <span className="font-semibold text-[#10201F]">Services:</span>
              {project.services.map((srv, i) => (
                <span key={srv} className="text-[#10201F]">
                  {srv}{i < project.services.length - 1 ? ' ·' : ''}
                </span>
              ))}
            </div>

            {onSelectProject && (
              <button
                onClick={() => onSelectProject(project.slug)}
                className="text-xs font-medium text-[#007A75] underline underline-offset-4 hover:text-[#10201F] focus-visible:outline-[#007A75]"
              >
                Read full case study
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
