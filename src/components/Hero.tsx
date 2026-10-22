import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_MODEL_IMAGE } from '../data/products';
import { SSLogo } from './SSLogo';

interface HeroProps {
  onShopClick: () => void;
  onExploreClick: () => void;
  onQuickViewHeroLook?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onShopClick,
  onExploreClick,
}) => {
  return (
    <section id="hero" className="relative w-full overflow-hidden pt-8 sm:pt-12 pb-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE: Brand Emblem, Headline, Tagline, Action Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1">
            {/* Minimal Editorial Brand Mark & Kicker */}
            <div className="flex items-center gap-3 mb-6">
              <SSLogo variant="stamp" />
              <div className="h-4 w-px bg-[#111111]/30" />
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#2B2B2B] uppercase">
                MENSWEAR ATELIER · DROP 01
              </span>
            </div>

            {/* Editorial Headline (NO giant S.S text heading) */}
            <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#111111] leading-[1.1] mb-6">
              Modern Men's Essentials
            </h1>

            {/* Short Premium Fashion Tagline */}
            <p className="font-sans text-[#2B2B2B] text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal">
              Refined masculine silhouettes engineered for understated distinction and enduring form. Heavyweight organic textiles, architectural geometry, and absolute quiet luxury.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onShopClick}
                className="group px-8 py-4 bg-[#111111] hover:bg-black text-white text-xs font-medium tracking-widest uppercase rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Shop Men's Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onExploreClick}
                className="px-8 py-4 bg-[rgba(255,255,255,0.15)] hover:bg-white/25 text-[#111111] border border-white/25 text-xs font-medium tracking-widest uppercase rounded-xl backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 shadow-xs text-center"
              >
                <span>Explore All Varieties</span>
              </button>
            </div>

            {/* Hallmarks */}
            <div className="pt-6 border-t border-white/20 grid grid-cols-3 gap-4">
              <div>
                <div className="font-display font-medium text-[#111111] text-2xl tabular-nums">480 GSM</div>
                <div className="text-[11px] font-mono tracking-wider text-[#2B2B2B] uppercase mt-0.5">Heavyweight Terry</div>
              </div>
              <div>
                <div className="font-display font-medium text-[#111111] text-2xl tabular-nums">100%</div>
                <div className="text-[11px] font-mono tracking-wider text-[#2B2B2B] uppercase mt-0.5">Organic Pre-Shrunk</div>
              </div>
              <div>
                <div className="font-display font-medium text-[#111111] text-2xl">Porto</div>
                <div className="text-[11px] font-mono tracking-wider text-[#2B2B2B] uppercase mt-0.5">European Atelier</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Single Stylish Male Model Wearing Black Hoodie & Pants with Small S.S Chest Logo */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end order-2">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/25 bg-stone-900/10 group">
              <img
                src={HERO_MODEL_IMAGE}
                alt="Stylish adult male fashion model wearing premium black hoodie with small embroidered S.S logo on chest side and dark pants in studio photography"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Natural Small Embroidered S.S Logo Mark on the Side of the Chest (Pectoral Area, NOT on hand) */}
              <div 
                className="absolute top-[27.5%] left-[56%] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 z-10"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
                  <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
                    <path d="M32 26 H62 C70 26 76 32 76 40 C76 48 70 54 62 54 H42" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="square" strokeLinejoin="miter" />
                    <path d="M68 74 H38 C30 74 24 68 24 60 C24 52 30 46 38 46 H58" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="square" strokeLinejoin="miter" />
                    <circle cx="50" cy="50" r="4.5" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>

              {/* Subtle Atelier Spec Badge in Corner */}
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 bg-[#111111]/85 backdrop-blur-xs text-white text-[10px] font-mono tracking-widest uppercase rounded-lg border border-white/20">
                  ATELIER MODEL · PORTO SERIES
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
