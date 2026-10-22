import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.fabric.toLowerCase().includes(query.toLowerCase()) ||
          p.tagline.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="flex min-h-full items-start justify-center p-4 sm:p-8 pt-20">
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl transform overflow-hidden rounded-3xl bg-[#A67B5B] p-6 shadow-2xl transition-all border border-white/30 text-[#111111]"
        >
          {/* Search Input Bar */}
          <div className="relative flex items-center mb-6">
            <Search className="absolute left-4 w-5 h-5 text-[#2B2B2B]/60" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by keyword, GSM weight, or silhouette (e.g., Hoodie, 480 GSM, Pleated)..."
              className="w-full pl-12 pr-10 py-3.5 bg-white/90 border border-white/40 rounded-2xl text-[#111111] placeholder:text-[#2B2B2B]/60 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#111111]"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-4 text-[#2B2B2B]/70 hover:text-[#111111]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto space-y-3">
            {query.trim() === '' ? (
              <div className="text-center py-8 text-xs font-mono text-[#2B2B2B]">
                <span>POPULAR QUERIES: </span>
                {['HOODIE', 'PANTS', '480 GSM', '280 GSM', 'WOOL'].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="ml-2 underline hover:text-[#111111]"
                  >
                    {term}
                  </button>
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-8 text-[#2B2B2B] text-sm">
                No matching garments found for "{query}".
              </div>
            ) : (
              filtered.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-4 p-3 bg-[rgba(255,255,255,0.15)] backdrop-blur-md hover:bg-white/25 rounded-2xl border border-white/20 cursor-pointer transition-colors group"
                >
                  <div className="w-14 h-14 bg-white/20 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-1 border border-white/20">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-mono tracking-widest text-[#2B2B2B] uppercase">
                      {product.category} · {product.weightGsm} GSM
                    </div>
                    <div className="font-display font-medium text-xs text-[#111111] group-hover:text-black">
                      {product.name}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-display font-semibold text-xs text-[#111111] tabular-nums">
                      ${product.price}
                    </div>
                    <span className="text-[10px] font-mono text-[#2B2B2B] group-hover:text-[#111111] inline-flex items-center gap-1">
                      View <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-white/20 flex justify-between text-[11px] font-mono text-[#2B2B2B]">
            <span>S.S ATELIER DIRECTORY SEARCH</span>
            <button
              type="button"
              onClick={onClose}
              className="text-[#111111] hover:underline"
            >
              Close [ESC]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
