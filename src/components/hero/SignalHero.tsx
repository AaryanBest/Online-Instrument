import React, { useEffect, useRef, useState } from 'react';
import { Logo } from '../ui/Logo';

interface SignalHeroProps {
  onNavigate: (path: string) => void;
  onSelectProject?: (slug: string) => void;
}

export const SignalHero: React.FC<SignalHeroProps> = ({ onNavigate, onSelectProject }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  const [stepVisible, setStepVisible] = useState({
    headline: false,
    photo: false,
    supporting: false,
    logos: false,
  });

  // Client logos for slow drift row
  const heroClientLogos = [
    { id: 'amazon', slug: 'amazon' },
    { id: 'google', slug: 'google' },
    { id: 'microsoft', slug: 'deloitte-usi' },
    { id: 'deloitte', slug: 'deloitte-usi' },
    { id: 'siemens', slug: 'siemens' },
    { id: 'micron', slug: 'micron-technologies' },
    { id: 'tcs', slug: 'tata-consultancy-services' },
    { id: 'cisco', slug: 'google' },
    { id: 'amdocs', slug: 'amdocs' },
  ];

  // Choreographed 1.8s load sequence
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setStepVisible({
        headline: true,
        photo: true,
        supporting: true,
        logos: true,
      });
      return;
    }

    const t1 = setTimeout(() => setStepVisible((s) => ({ ...s, headline: true })), 200);
    const t2 = setTimeout(() => setStepVisible((s) => ({ ...s, photo: true })), 700);
    const t3 = setTimeout(() => setStepVisible((s) => ({ ...s, supporting: true })), 1100);
    const t4 = setTimeout(() => setStepVisible((s) => ({ ...s, logos: true })), 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  // Canvas 2D: 28 brand gradient wave lines reacting to cursor with 60fps efficiency
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let time = 0;

    // Visibility observer to pause canvas off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.parentElement?.clientWidth ? canvas.parentElement.clientWidth * dpr : 1440 * dpr;
      canvas.height = canvas.parentElement?.clientHeight ? canvas.parentElement.clientHeight * dpr : 700 * dpr;
      ctx.scale(dpr, dpr);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Color gradient stops: #00F07A -> #2CE0C8 -> #00A8FF
    const draw = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      time += 0.016;

      // Lerp mouse
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, width, height);

      const numLines = 28;
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, '#00F07A');
      gradient.addColorStop(0.5, '#2CE0C8');
      gradient.addColorStop(1, '#00A8FF');

      for (let i = 0; i < numLines; i++) {
        ctx.beginPath();
        const baseHeight = height * 0.28 + (i * (height * 0.55)) / numLines;
        const lineOffset = i * 0.12;

        ctx.strokeStyle = gradient;
        // Fade opacity toward edges and with line index
        const alpha = Math.sin((i / numLines) * Math.PI) * 0.32 + 0.08;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = 1.2;

        const points = 36;
        for (let p = 0; p <= points; p++) {
          const x = (p / points) * width;
          // Multi-sine wave
          const wave1 = Math.sin(p * 0.28 + time * 0.9 + lineOffset) * 16;
          const wave2 = Math.cos(p * 0.14 - time * 0.6 + i * 0.05) * 12;

          // Mouse falloff
          const dx = x - mouseRef.current.x;
          const dy = baseHeight - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseDeflect = Math.max(0, 1 - dist / 320) * 28 * Math.sin(time * 2 + p * 0.2);

          const y = baseHeight + wave1 + wave2 + mouseDeflect;

          if (p === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#062B2B] text-[#FFFFFF] overflow-hidden pt-12 pb-8 border-b border-[#062B2B]"
      aria-label="Online Instruments Signal Hero"
    >
      {/* 28-Line Brand Gradient Wave Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 pt-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[520px]">
          {/* Left Text Column: 6 cols */}
          <div className="lg:col-span-6 space-y-6">
            {/* Headline with mask slide-up per line */}
            <div className="overflow-hidden">
              <h1
                className={`font-display text-5xl sm:text-6xl lg:text-7xl font-normal tracking-wide text-[#FFFFFF] leading-[1.0] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  stepVisible.headline
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-12 opacity-0'
                }`}
              >
                The same great room, in every office you have.
              </h1>
            </div>

            {/* Supporting paragraph (max 2 lines) */}
            <div className="overflow-hidden">
              <p
                className={`text-lg sm:text-xl text-[#2CE0C8]/90 font-normal leading-relaxed max-w-[54ch] transition-all duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  stepVisible.supporting
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
              >
                Online Instruments designs, builds and supports meeting rooms, training rooms, command centres and auditoriums for the world's biggest companies.
              </p>
            </div>

            {/* Primary button (coral) & secondary link */}
            <div
              className={`flex flex-wrap items-center gap-6 pt-3 transition-all duration-700 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                stepVisible.supporting
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              }`}
            >
              <button
                onClick={() => onNavigate('/projects')}
                className="btn-coral px-7 py-3.5 text-base tracking-wide flex items-center gap-2 cursor-pointer focus-visible:outline-[#2CE0C8]"
              >
                <span>See our projects</span>
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="link-draw text-[#FFFFFF] font-medium text-base hover:text-[#2CE0C8] transition-colors focus-visible:outline-[#2CE0C8]"
              >
                Talk to our team
              </button>
            </div>
          </div>

          {/* Right Column: Room Photo Masked by Wave Curve (Emerging from signal) */}
          <div className="lg:col-span-6 relative">
            <div
              className={`relative w-full h-[360px] sm:h-[420px] lg:h-[460px] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                stepVisible.photo
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
            >
              {/* S-curve wave mask container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#2CE0C8]/30 shadow-[0_8px_32px_rgba(0,133,126,0.25)]">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
                  alt="Enterprise board room deployed with seamless collaboration displays and acoustic ceiling"
                  className="w-full h-full object-cover brightness-[0.94] contrast-[1.06]"
                  loading="eager"
                />
                {/* Wave highlight overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#062B2B]/70 via-transparent to-[#2CE0C8]/10 pointer-events-none" />

                {/* Overlaid signal room caption */}
                <div className="absolute bottom-4 left-4 bg-[#062B2B]/90 backdrop-blur-xs px-3.5 py-2 border-l-2 border-[#2CE0C8] text-xs text-[#FFFFFF]">
                  <span className="font-semibold text-[#2CE0C8] tracking-wide">CONF-LG-98 · 04.213</span>
                  <span className="text-white/80 ml-2 hidden sm:inline">1,000+ unified room rollout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Under Hero: Single row of white client logos only (60s loop drift, pause on hover, true colors on hover) */}
      <div
        className={`border-t border-[#FFFFFF]/10 bg-[#062B2B]/80 backdrop-blur-xs py-5 overflow-hidden pause-on-hover transition-opacity duration-700 ${
          stepVisible.logos ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="animate-drift-slow flex items-center gap-14 sm:gap-20">
          {[...heroClientLogos, ...heroClientLogos].map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              onClick={() => onSelectProject && onSelectProject(client.slug)}
              className="cursor-pointer shrink-0 opacity-80 hover:opacity-100 transition-opacity"
            >
              <Logo id={client.id} tone="dark" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
