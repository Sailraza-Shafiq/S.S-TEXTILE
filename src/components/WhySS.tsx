import React from 'react';
import { Layers, Shield, Sparkles, Feather } from 'lucide-react';
import { SSLogo } from './SSLogo';

export const WhySS: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      title: 'Bespoke 420–500 GSM Milling',
      description:
        'We do not buy off-the-shelf blanks. Every textile is milled to our precise thread gauge in Portugal and Japan, utilizing 100% organic long-staple combed cotton with zero synthetic polyester fillers.',
    },
    {
      icon: Feather,
      title: 'Architectural Proportions',
      description:
        'Patterned with intentional drop shoulders, high structured collars, and fluid drape. Engineered to create a commanding silhouette that holds its geometric posture regardless of posture.',
    },
    {
      icon: Shield,
      title: 'Permanent Pre-Shrunk Fit',
      description:
        'Garments are subjected to high-temperature silicone laundering and volcanic stone washing prior to assembly, guaranteeing zero shrinkage, zero twisting, and lasting density.',
    },
    {
      icon: Sparkles,
      title: 'The Anti-Trend Uniform',
      description:
        'S.S does not observe artificial fashion weeks or discount flash cycles. We produce numbered, limited editions engineered to serve as lifetime foundational pieces in your wardrobe.',
    },
  ];

  return (
    <section id="why-ss" className="py-20 sm:py-28 relative border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#2B2B2B] uppercase mb-3">
            <span>THE MANIFESTO</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>STANDARDS & ORIGINS</span>
          </div>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#111111] tracking-tight">
            Why S.S
          </h2>
          <p className="mt-4 text-[#2B2B2B] text-base sm:text-lg font-sans leading-relaxed">
            In an industry dominated by disposable speed and polyester compromises, S.S was founded on an unapologetic refusal to take shortcuts.
          </p>
        </div>

        {/* 4 Pillars Grid: rgba(255, 255, 255, 0.15) on Cafe au Lait */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-7 rounded-2xl border border-white/25 shadow-sm flex flex-col justify-between hover:bg-[rgba(255,255,255,0.22)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#111111]/60">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-medium text-lg text-[#111111] mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#2B2B2B] leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-[11px] font-mono text-[#2B2B2B] uppercase">
                  <span>SPECIFICATION</span>
                  <span className="font-medium text-[#111111]">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Label Showcase Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-2xl border border-white/25 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <SSLogo variant="stamp" />
            <div>
              <div className="font-display font-medium text-[#111111] text-base sm:text-lg">
                Serial Numbered Garment Certificates
              </div>
              <p className="text-xs text-[#2B2B2B] mt-0.5 font-sans">
                Every hoodie and trouser ships with an individually numbered cotton certification label.
              </p>
            </div>
          </div>

          <div className="text-right font-mono text-xs text-[#111111] tracking-wider shrink-0">
            <span>SUSTAINABILITY RATING: A+</span>
            <span className="block text-[10px] text-[#2B2B2B]">OEKO-TEX 100 CERTIFIED</span>
          </div>
        </div>

      </div>
    </section>
  );
};
