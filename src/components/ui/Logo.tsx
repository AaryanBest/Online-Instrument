import React, { useState } from 'react';
import { logosRegistry, LogoDefinition } from '../../content/logos';

interface LogoProps {
  id: string;
  className?: string;
  tone?: 'dark' | 'light'; // dark surface = white logo by default; light surface = ink by default
  projectLink?: string;
}

export const Logo: React.FC<LogoProps> = ({ id, className = '', tone = 'dark', projectLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  const logo: LogoDefinition | undefined = logosRegistry[id.toLowerCase()];

  if (!logo) {
    // Missing logo dev placeholder per spec: Never silently fallback to visible text
    return (
      <span
        title={`Missing logo asset: ${id}`}
        className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono border border-dashed border-[#FF5A36] text-[#FF5A36] bg-[#FF5A36]/10"
        aria-label={`Logo: ${id}`}
      >
        [LOGO: {id}]
      </span>
    );
  }

  const baseFill = tone === 'dark' ? '#FFFFFF' : '#10201F';
  const activeColor = isHovered ? logo.brandColor : baseFill;

  const content = (
    <div
      className={`inline-flex items-center justify-center transition-transform duration-200 ${className}`}
      style={{
        transform: isHovered ? 'scale(1.04)' : `scale(${logo.opticalScale || 1})`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="img"
      aria-label={logo.label}
    >
      <svg
        viewBox={logo.svgViewBox}
        className="h-7 w-auto max-w-[130px] transition-colors duration-200 overflow-visible"
        style={{ fill: activeColor }}
      >
        <path d={logo.svgPath} />
      </svg>
    </div>
  );

  if (projectLink) {
    return (
      <a
        href={projectLink}
        className="inline-flex items-center focus-visible:outline-[#2CE0C8] focus-visible:outline-offset-2"
        aria-label={`View ${logo.label} case study`}
      >
        {content}
      </a>
    );
  }

  return content;
};
