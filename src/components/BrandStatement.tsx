import React from 'react';

export const BrandStatement: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative border-y border-white/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Unboxed Chapter Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-[#2B2B2B] uppercase mb-6">
          <span>THE ESSENCE</span>
          <span aria-hidden="true" className="text-white/40">·</span>
          <span>SILENCE & FORM</span>
        </div>

        {/* Large Editorial Quote with Balanced Type */}
        <blockquote className="font-display font-normal italic text-2xl sm:text-4xl lg:text-5xl text-[#111111] leading-tight tracking-tight max-w-4xl mx-auto" style={{ textWrap: 'balance' }}>
          “We do not design for the runway spectacle. We design for the quiet gravity of everyday life—where the weight of the cotton, the precision of a pleat, and the restraint of branding speak with unmistakable authority.”
        </blockquote>

        {/* Attribution & Studio Marker */}
        <div className="mt-8 flex flex-col items-center">
          <div className="w-12 h-0.5 bg-[#111111] mb-4" />
          <cite className="font-display font-medium text-[#111111] text-sm tracking-wider not-italic uppercase">
            S.S Creative Direction
          </cite>
          <span className="text-xs font-mono text-[#2B2B2B] tracking-widest mt-1">
            TOKYO · PORTO · NEW YORK
          </span>
        </div>

      </div>
    </section>
  );
};
