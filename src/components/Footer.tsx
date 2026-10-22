import React from 'react';
import { Database } from 'lucide-react';
import { SSLogo } from './SSLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onFilterCategory: (catId: string) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
  onOpenDatabase?: () => void;
  onOpenAdmin?: () => void;
  isSupabaseConnected?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onFilterCategory,
  onOpenAbout,
  onOpenContact,
  onOpenDatabase,
  onOpenAdmin,
  isSupabaseConnected = false,
}) => {
  return (
    <footer className="w-full bg-[#A67B5B] text-[#111111] border-t border-white/20 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/20">
          
          {/* Brand Identity Column (2 cols on lg) */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <SSLogo variant="navbar" />
            </div>
            <p className="text-[#2B2B2B] text-sm max-w-sm leading-relaxed font-sans mb-6">
              S.S is an independent apparel studio. We engineer architectural streetwear and foundational wardrobe essentials utilizing heavyweight organic textiles and bespoke milling.
            </p>
            <div className="text-xs font-mono tracking-widest text-[#111111] uppercase space-y-1">
              <div>STUDIO: TOKYO · PORTO · NEW YORK</div>
              <div className="text-[#2B2B2B]">ATELIER ARCHIVE NO. 2026-SS</div>
            </div>
          </div>

          {/* Directory: Collections */}
          <div>
            <h4 className="font-display font-medium text-xs tracking-[0.2em] uppercase text-[#111111] mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-sm text-[#2B2B2B]">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onFilterCategory('hoodies');
                    onNavigate('shop');
                  }}
                  className="hover:text-[#111111] transition-colors"
                >
                  Heavyweight Hoodies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onFilterCategory('pants');
                    onNavigate('shop');
                  }}
                  className="hover:text-[#111111] transition-colors"
                >
                  Tailored Trousers & Pants
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onFilterCategory('t-shirts');
                    onNavigate('shop');
                  }}
                  className="hover:text-[#111111] transition-colors"
                >
                  280 GSM Boxy Tees
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onFilterCategory('jackets');
                    onNavigate('shop');
                  }}
                  className="hover:text-[#111111] transition-colors"
                >
                  Architectural Jackets
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onFilterCategory('new-arrivals');
                    onNavigate('shop');
                  }}
                  className="hover:text-[#111111] transition-colors"
                >
                  New Arrivals Drop
                </button>
              </li>
            </ul>
          </div>

          {/* Directory: Atelier & Care */}
          <div>
            <h4 className="font-display font-medium text-xs tracking-[0.2em] uppercase text-[#111111] mb-4">
              Atelier & Care
            </h4>
            <ul className="space-y-2.5 text-sm text-[#2B2B2B]">
              <li>
                <button
                  type="button"
                  onClick={onOpenAbout}
                  className="hover:text-[#111111] transition-colors"
                >
                  Brand Ethos & Philosophy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenAbout}
                  className="hover:text-[#111111] transition-colors"
                >
                  Textile Specs (480 GSM)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenAbout}
                  className="hover:text-[#111111] transition-colors"
                >
                  Wash & Garment Care
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenAbout}
                  className="hover:text-[#111111] transition-colors"
                >
                  Sizing & Proportions Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Directory: Concierge */}
          <div>
            <h4 className="font-display font-medium text-xs tracking-[0.2em] uppercase text-[#111111] mb-4">
              Concierge
            </h4>
            <ul className="space-y-2.5 text-sm text-[#2B2B2B]">
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="hover:text-[#111111] transition-colors"
                >
                  Client Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="hover:text-[#111111] transition-colors"
                >
                  Shipping & Customs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="hover:text-[#111111] transition-colors"
                >
                  Returns & Exchanges
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="hover:text-[#111111] transition-colors"
                >
                  Stockist & Showroom Inquiries
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#2B2B2B]">
          <div>
            © {new Date().getFullYear()} S.S ATELIER CLOTHING CO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span>CURRENCY: USD ($)</span>
            <span>SHIPPING: CARBON NEUTRAL</span>
            {onOpenDatabase && (
              <button
                type="button"
                onClick={onOpenDatabase}
                className="hover:text-[#111111] flex items-center gap-1.5 transition-colors underline decoration-dotted underline-offset-4"
              >
                <Database className="w-3.5 h-3.5" />
                <span>
                  {isSupabaseConnected ? 'BACKEND: SUPABASE LIVE' : 'BACKEND: CONFIGURE SUPABASE'}
                </span>
              </button>
            )}
            <span>PRIVACY & TERMS</span>
            {onOpenAdmin && (
              <button
                type="button"
                onClick={onOpenAdmin}
                className="hover:text-[#111111] transition-colors text-[#111111]/40 text-[10px]"
                title="Atelier staff access (/admin)"
              >
                STAFF ACCESS
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
