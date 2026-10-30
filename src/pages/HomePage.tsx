import React from 'react';
import { Hero } from '../components/hero/Hero';
import { solutionsData } from '../content/solutions';
import { projectsData } from '../content/projects';
import { ClientWall } from '../components/sections/ClientWall';
import { PartnerWall } from '../components/sections/PartnerWall';
import { AwardList } from '../components/sections/AwardList';
import { ContactBand } from '../components/sections/ContactBand';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onSelectProject: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  // Highlight 3 projects: Siemens (2,000), Micron (1,500+), Google (1,000+)
  const highlightProjects = projectsData.filter((p) =>
    ['siemens', 'micron-technologies', 'google'].includes(p.slug)
  );

  return (
    <div className="space-y-0">
      {/* 1. Hero Section (Floor plan draw -> Finished room photo) */}
      <Hero onNavigate={onNavigate} />

      {/* 2. What we do in one paragraph */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-[#F6F8F7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-wider text-[#007A75] font-semibold block mb-2">
                Audio-visual system integrator
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
                Established 2006. Headquartered in Bengaluru.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <p className="text-lg sm:text-xl text-[#10201F] leading-relaxed max-w-[64ch]">
                We work out what a space needs, design it, supply the equipment, install it, test it, and look after it afterwards. Over the years we have worked with some of the largest companies in technology, manufacturing, banking and healthcare. In 2024–25 alone we deployed more than 2,500 spaces.
              </p>
              <div className="pt-2 flex items-center gap-6 text-sm">
                <button
                  onClick={() => onNavigate('/about')}
                  className="font-medium text-[#007A75] underline underline-offset-4 hover:text-[#10201F]"
                >
                  Read our company story
                </button>
                <span className="text-[#D5DDDB]">|</span>
                <button
                  onClick={() => onNavigate('/how-we-work')}
                  className="font-medium text-[#007A75] underline underline-offset-4 hover:text-[#10201F]"
                >
                  Review our 12-step delivery process
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solutions strip: The six kinds of space */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#D5DDDB] pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
                Spaces we build
              </h2>
              <p className="text-sm text-[#54625F] pt-1">
                Engineered for meeting acoustics, low-latency switching, and 24/7 reliability.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/solutions')}
              className="text-sm font-medium text-[#007A75] underline underline-offset-4 hover:text-[#10201F]"
            >
              View technical specifications for all six spaces
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionsData.map((space) => (
              <div
                key={space.id}
                onClick={() => onNavigate(`/solutions#${space.slug}`)}
                className="p-6 border border-[#D5DDDB] bg-[#F6F8F7] hover:border-[#007A75] transition-colors cursor-pointer flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#007A75] font-semibold block">
                    {space.roomCode}
                  </span>
                  <h3 className="text-xl font-semibold text-[#10201F] tracking-tight">
                    {space.name}
                  </h3>
                  <p className="text-xs text-[#54625F] font-medium uppercase tracking-wider">
                    {space.capacity}
                  </p>
                  <p className="text-sm text-[#54625F] leading-snug line-clamp-2 pt-1">
                    {space.headline}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#D5DDDB]/60 flex items-center justify-between text-xs text-[#54625F]">
                  <span className="tabular-nums font-medium text-[#10201F]">
                    {space.spacesDeployed2024} deployed (2024–25)
                  </span>
                  <span className="text-[#007A75] font-medium underline underline-offset-2">
                    Details
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Three Project Highlights: Siemens, Micron, Google */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-[#F6F8F7]">
        <div className="max-w-[1200px] mx-auto px-6 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#D5DDDB] pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
                Project highlights
              </h2>
              <p className="text-sm text-[#54625F] pt-1">
                Proof of scale across multinational campuses and manufacturing sites.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/projects')}
              className="text-sm font-medium text-[#007A75] underline underline-offset-4 hover:text-[#10201F]"
            >
              See all ten case studies
            </button>
          </div>

          <div className="divide-y divide-[#D5DDDB]">
            {highlightProjects.map((project) => (
              <div key={project.slug} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-4 space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#54625F] font-semibold">
                    {project.sector}
                  </span>
                  <h3 className="text-2xl font-semibold text-[#10201F]">
                    {project.client}
                  </h3>
                  <div className="text-lg font-semibold text-[#007A75] tabular-nums">
                    {project.rooms} rooms
                  </div>
                  <div className="text-xs text-[#54625F]">
                    {project.countries.join(', ')}
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <p className="text-base text-[#10201F] leading-relaxed max-w-[64ch]">
                    {project.summary}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-xs text-[#54625F]">
                      <span className="font-semibold text-[#10201F]">Services: </span>
                      {project.services.join(' · ')}
                    </div>
                    <button
                      onClick={() => onSelectProject(project.slug)}
                      className="text-xs font-medium text-[#007A75] underline underline-offset-4 hover:text-[#10201F]"
                    >
                      Case study details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How we work teaser: SOP, Rack staging, and CQT proof */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#007A75] font-semibold block">
                Engineering rigor
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#10201F] tracking-tight">
                An engineer's site-file made transparent.
              </h2>
              <p className="text-base text-[#54625F] leading-relaxed">
                We believe enterprise facilities teams need verifiable documentation rather than marketing slogans. Every project is executed against our written 12-step SOP, pre-tested in off-site rack staging, and commissioned with calibrated instruments.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/how-we-work')}
                  className="rounded-[4px] px-5 py-2.5 text-sm font-medium bg-[#007A75] text-[#F6F8F7] hover:bg-[#006965] transition-colors"
                >
                  Inspect our delivery SOP and reports
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-5 border border-[#D5DDDB] bg-[#F6F8F7] space-y-2">
                <div className="text-2xl font-semibold text-[#007A75] tabular-nums">12 Steps</div>
                <div className="text-sm font-semibold text-[#10201F]">Written deployment SOP</div>
                <p className="text-xs text-[#54625F] leading-relaxed">
                  From civil containment surveys and schematics to attic stock handover.
                </p>
              </div>

              <div className="p-5 border border-[#D5DDDB] bg-[#F6F8F7] space-y-2">
                <div className="text-2xl font-semibold text-[#007A75] tabular-nums">50% Fewer</div>
                <div className="text-sm font-semibold text-[#10201F]">Onsite man hours</div>
                <p className="text-xs text-[#54625F] leading-relaxed">
                  Off-site rack staging and 48-hour burn-in in our Bengaluru staging facility.
                </p>
              </div>

              <div className="p-5 border border-[#D5DDDB] bg-[#F6F8F7] space-y-2">
                <div className="text-2xl font-semibold text-[#007A75] tabular-nums">AQ-AV CQT</div>
                <div className="text-sm font-semibold text-[#10201F]">Calibrated testing</div>
                <p className="text-xs text-[#54625F] leading-relaxed">
                  Verified with Fluke, NTi, Murideo and Klein tools before handover sign-off.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Client Wall */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-[#F6F8F7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ClientWall />
        </div>
      </section>

      {/* 7. Partner Wall */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <PartnerWall />
        </div>
      </section>

      {/* 8. Awards summary */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-[#F6F8F7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <AwardList />
        </div>
      </section>

      {/* 9. Contact Band */}
      <ContactBand onNavigate={onNavigate} />
    </div>
  );
};
