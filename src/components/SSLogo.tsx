import React from 'react';

interface SSLogoProps {
  variant?: 'navbar' | 'hero' | 'tag' | 'stamp' | 'footer';
  className?: string;
  theme?: 'dark' | 'light' | 'mono';
}

export const SSLogo: React.FC<SSLogoProps> = ({
  variant = 'navbar',
  className = '',
  theme = 'dark',
}) => {
  const isLight = theme === 'light';
  const textColor = isLight ? 'text-white' : 'text-[#111111]';
  const subColor = isLight ? 'text-white/80' : 'text-[#2B2B2B]';
  const strokeColor = isLight ? '#FFFFFF' : '#111111';

  // Clothing tag label variant (woven neck tag appearance)
  if (variant === 'tag') {
    return (
      <div
        className={`inline-flex flex-col items-center justify-center p-4 bg-white/80 text-[#111111] border border-white/40 shadow-sm rounded-none tracking-widest ${className}`}
        style={{ minWidth: '120px' }}
      >
        <div className="w-full flex items-center justify-between border-b border-stone-200 pb-1.5 mb-2 text-[9px] font-mono text-[#2B2B2B] uppercase">
          <span>ATELIER</span>
          <span>N° 01</span>
        </div>

        {/* Minimal geometric S.S glyph */}
        <div className="relative my-1">
          <svg
            width="38"
            height="38"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 hover:scale-105"
          >
            {/* Architectural interlaced S.S glyph */}
            <path
              d="M32 26 H62 C70 26 76 32 76 40 C76 48 70 54 62 54 H42"
              stroke="#111111"
              strokeWidth="10"
              strokeLinecap="square"
            />
            <path
              d="M68 74 H38 C30 74 24 68 24 60 C24 52 30 46 38 46 H58"
              stroke="#111111"
              strokeWidth="10"
              strokeLinecap="square"
            />
            <circle cx="50" cy="50" r="3.5" fill="#111111" />
          </svg>
        </div>

        <div className="text-center mt-1">
          <div className="font-display font-medium text-base tracking-[0.25em] text-[#111111] leading-none">
            S.S
          </div>
          <div className="text-[8px] font-mono tracking-[0.3em] uppercase text-[#2B2B2B] mt-1">
            MODERN ESSENTIALS
          </div>
        </div>

        <div className="w-full flex items-center justify-between border-t border-stone-200 pt-1.5 mt-2 text-[8px] font-mono text-[#2B2B2B]">
          <span>100% COTTON</span>
          <span>SIZE M</span>
        </div>
      </div>
    );
  }

  // Stamp / Monogram badge variant
  if (variant === 'stamp') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <div className="w-10 h-10 rounded-full border border-white/30 bg-white/80 flex items-center justify-center shadow-xs">
          <svg
            width="22"
            height="22"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 26 H62 C70 26 76 32 76 40 C76 48 70 54 62 54 H42"
              stroke={strokeColor}
              strokeWidth="10"
              strokeLinecap="square"
            />
            <path
              d="M68 74 H38 C30 74 24 68 24 60 C24 52 30 46 38 46 H58"
              stroke={strokeColor}
              strokeWidth="10"
              strokeLinecap="square"
            />
            <circle cx="50" cy="50" r="3.5" fill={strokeColor} />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className={`font-display font-medium text-sm tracking-[0.2em] ${textColor}`}>
            S.S
          </span>
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#2B2B2B] font-medium">
            ESSENTIALS
          </span>
        </div>
      </div>
    );
  }

  // Large Hero variant
  if (variant === 'hero') {
    return (
      <div className={`flex flex-col items-start ${className}`}>
        <div className="flex items-center gap-4 mb-2">
          {/* Custom vector monogram */}
          <div className="w-12 h-12 flex items-center justify-center bg-[#111111] text-white rounded-lg shadow-sm">
            <svg
              width="28"
              height="28"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 26 H62 C70 26 76 32 76 40 C76 48 70 54 62 54 H42"
                stroke="#FFFFFF"
                strokeWidth="11"
                strokeLinecap="square"
              />
              <path
                d="M68 74 H38 C30 74 24 68 24 60 C24 52 30 46 38 46 H58"
                stroke="#FFFFFF"
                strokeWidth="11"
                strokeLinecap="square"
              />
              <circle cx="50" cy="50" r="4" fill="#FFFFFF" />
            </svg>
          </div>
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#111111] bg-white/70 px-2.5 py-1 rounded">
            EST. 2026 · ATELIER EDITION
          </span>
        </div>

        <div className="flex items-baseline">
          <span className="font-display font-medium text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#111111]">
            S.S
          </span>
          <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-[#111111] rounded-full ml-1 mb-2 sm:mb-3" />
        </div>
      </div>
    );
  }

  // Default navbar / compact variant
  return (
    <div className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}>
      {/* Bespoke Geometric Icon */}
      <div className="w-8 h-8 rounded-md bg-stone-900 text-white flex items-center justify-center transition-transform group-hover:scale-95 duration-200">
        <svg
          width="18"
          height="18"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 26 H62 C70 26 76 32 76 40 C76 48 70 54 62 54 H42"
            stroke="#FFFFFF"
            strokeWidth="12"
            strokeLinecap="square"
          />
          <path
            d="M68 74 H38 C30 74 24 68 24 60 C24 52 30 46 38 46 H58"
            stroke="#FFFFFF"
            strokeWidth="12"
            strokeLinecap="square"
          />
          <circle cx="50" cy="50" r="4.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Wordmark with refined kerning */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline">
          <span className={`font-display font-black text-xl tracking-[0.18em] ${textColor} transition-colors`}>
            S.S
          </span>
        </div>
        <span className={`text-[8.5px] font-sans font-medium tracking-[0.25em] uppercase ${subColor} mt-0.5`}>
          MODERN ESSENTIALS
        </span>
      </div>
    </div>
  );
};
