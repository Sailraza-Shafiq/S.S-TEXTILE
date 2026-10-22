import React from 'react';
import { X, Trash2, ArrowRight, Heart } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#A67B5B] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 border-l border-white/20 text-[#111111]">
          
          {/* Header */}
          <div className="p-6 border-b border-white/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#111111] fill-[#111111]" />
              <span className="font-display font-medium text-xl tracking-tight text-[#111111]">
                Saved Pieces
              </span>
              <span className="text-xs font-mono font-medium px-2 py-0.5 bg-[#111111] text-white rounded-full">
                {wishlistProducts.length}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#2B2B2B] hover:text-[#111111] hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <Heart className="w-12 h-12 text-[#2B2B2B]/40 mb-3" />
                <h3 className="font-display font-medium text-[#111111] text-base mb-1">
                  No pieces saved
                </h3>
                <p className="text-xs text-[#2B2B2B] font-sans max-w-xs mb-6">
                  Save your desired silhouettes to track availability and sizing.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#111111] text-white text-xs font-medium tracking-wider uppercase rounded-xl hover:bg-black transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3 bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-2xl border border-white/25 shadow-xs"
                >
                  <div className="w-20 h-20 bg-white/20 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-1 border border-white/20">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-display font-medium text-xs text-[#111111] line-clamp-1 pr-2">
                          {product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveFromWishlist(product)}
                          className="text-[#2B2B2B]/70 hover:text-red-700 p-0.5 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[11px] font-mono text-[#2B2B2B]">
                        {product.weightGsm} GSM · {product.color}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20">
                      <span className="font-display font-semibold text-xs text-[#111111] tabular-nums">
                        ${product.price}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          onSelectProduct(product);
                          onClose();
                        }}
                        className="text-xs font-medium text-[#111111] hover:underline flex items-center gap-1"
                      >
                        <span>View Piece</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 bg-[rgba(255,255,255,0.15)] backdrop-blur-md border-t border-white/20 text-center">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 bg-[#111111] text-white rounded-xl text-xs font-medium tracking-wider uppercase hover:bg-black transition-colors"
            >
              Continue Browsing
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
