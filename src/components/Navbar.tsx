import React, { useState } from 'react';
import { ShoppingBag, Search, Heart, Menu, X, Database } from 'lucide-react';
import { SSLogo } from './SSLogo';
import { ActivePage } from '../types';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onNavigatePage: (page: ActivePage) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
  onOpenDatabase?: () => void;
  isSupabaseConnected?: boolean;
  activePage: ActivePage;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onNavigatePage,
  onOpenAbout,
  onOpenContact,
  onOpenDatabase,
  isSupabaseConnected = false,
  activePage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: ActivePage) => {
    onNavigatePage(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#A67B5B]/95 backdrop-blur-md border-b border-white/20 transition-colors">
      {/* Editorial Announcement Bar */}
      <div className="w-full bg-[#8E6445] text-white py-1.5 px-4 text-center border-b border-white/10">
        <p className="text-[11px] font-mono tracking-[0.25em] uppercase">
          MEN'S ATELIER · CASH ON DELIVERY (COD) AVAILABLE NATIONWIDE · COMPLIMENTARY EXPRESS &gt; $200
        </p>
      </div>

      {/* Main Navigation Bar — 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark / Monogram */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#111111] rounded-sm"
            aria-label="S.S Home"
          >
            <SSLogo variant="navbar" />
          </button>
        </div>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className={`relative py-1 text-[#111111] transition-colors hover:text-black font-sans ${
              activePage === 'home'
                ? 'font-semibold'
                : 'font-normal text-[#2B2B2B] hover:text-black'
            }`}
          >
            Home
            {activePage === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#111111] rounded-full" />
            )}
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('shop')}
            className={`relative py-1 text-[#111111] transition-colors hover:text-black font-sans ${
              activePage === 'shop'
                ? 'font-semibold'
                : 'font-normal text-[#2B2B2B] hover:text-black'
            }`}
          >
            Shop
            {activePage === 'shop' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#111111] rounded-full" />
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              handleNavClick('home');
              setTimeout(() => {
                const el = document.getElementById('featured');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="relative py-1 text-[#2B2B2B] hover:text-black font-sans font-normal"
          >
            Collections
          </button>

          <button
            type="button"
            onClick={onOpenAbout}
            className="relative py-1 text-[#2B2B2B] hover:text-black font-sans font-normal"
          >
            About
          </button>

          <button
            type="button"
            onClick={onOpenContact}
            className="relative py-1 text-[#2B2B2B] hover:text-black font-sans font-normal"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Actions (Search, Wishlist, Bag, Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Supabase Database Status / Config */}
          {onOpenDatabase && (
            <button
              type="button"
              onClick={onOpenDatabase}
              aria-label="Supabase backend status and configuration"
              title={isSupabaseConnected ? "Connected to Supabase DB" : "Supabase Database Settings"}
              className="relative w-10 h-10 rounded-full flex items-center justify-center text-[#111111] hover:bg-white/15 transition-colors"
            >
              <Database className="w-4.5 h-4.5 stroke-[1.75]" />
              <span
                className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
                  isSupabaseConnected ? 'bg-emerald-500 ring-2 ring-[#A67B5B]' : 'bg-amber-500 ring-2 ring-[#A67B5B]'
                }`}
              />
            </button>
          )}

          {/* Search Trigger */}
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Search catalog"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#111111] hover:bg-white/15 transition-colors"
          >
            <Search className="w-4.5 h-4.5 stroke-[1.75]" />
          </button>

          {/* Wishlist Trigger */}
          <button
            type="button"
            onClick={onOpenWishlist}
            aria-label="View saved items"
            className="relative w-10 h-10 rounded-full flex items-center justify-center text-[#111111] hover:bg-white/15 transition-colors"
          >
            <Heart className="w-4.5 h-4.5 stroke-[1.75]" />
            {wishlistCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#111111] text-white text-[10px] font-mono flex items-center justify-center font-bold">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Trigger */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Shopping bag with ${cartCount} items`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#111111] text-white hover:bg-black transition-colors shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 stroke-[2]" />
            <span className="text-xs font-mono font-bold tabular-nums tracking-wider">
              {cartCount}
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-[#111111] hover:bg-white/15"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 stroke-[2]" />
            ) : (
              <Menu className="w-5 h-5 stroke-[2]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#A67B5B] border-b border-white/20 px-6 py-6 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`text-left text-lg font-display tracking-wide py-2 border-b border-white/15 ${
                activePage === 'home' ? 'font-semibold text-black' : 'text-[#111111]'
              }`}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('shop')}
              className={`text-left text-lg font-display tracking-wide py-2 border-b border-white/15 ${
                activePage === 'shop' ? 'font-semibold text-black' : 'text-[#111111]'
              }`}
            >
              Shop Full Collection
            </button>
            <button
              type="button"
              onClick={() => {
                handleNavClick('home');
                setTimeout(() => {
                  const el = document.getElementById('featured');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-left text-lg font-display tracking-wide py-2 border-b border-white/15 text-[#111111]"
            >
              Featured Collections
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('cart')}
              className={`text-left text-lg font-display tracking-wide py-2 border-b border-white/15 ${
                activePage === 'cart' ? 'font-semibold text-black' : 'text-[#111111]'
              }`}
            >
              Shopping Cart ({cartCount})
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAbout();
              }}
              className="text-left text-lg font-display tracking-wide py-2 border-b border-white/15 text-[#111111]"
            >
              About Atelier
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="text-left text-lg font-display tracking-wide py-2 border-b border-white/15 text-[#111111]"
            >
              Contact Concierge
            </button>
            {onOpenDatabase && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDatabase();
                }}
                className="text-left text-lg font-display tracking-wide py-2 border-b border-white/15 text-[#111111] flex items-center justify-between"
              >
                <span>Database / Supabase</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  isSupabaseConnected ? 'bg-emerald-900 text-white' : 'bg-black text-white'
                }`}>
                  {isSupabaseConnected ? 'Supabase Live' : 'Atelier Store'}
                </span>
              </button>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-mono text-[#2B2B2B]">
            <span>CURRENCY: USD ($)</span>
            <span>CASH ON DELIVERY (COD)</span>
          </div>
        </div>
      )}
    </header>
  );
};
