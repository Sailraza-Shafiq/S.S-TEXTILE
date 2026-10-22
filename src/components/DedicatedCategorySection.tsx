import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product, ClothingSize } from '../types';
import { ProductCard } from './ProductCard';

interface DedicatedCategorySectionProps {
  id: string;
  title: string;
  subtitle: string;
  kicker: string;
  products: Product[];
  onQuickView: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product, size: ClothingSize, color: string, quantity?: number, selectedImage?: string) => void;
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onViewAll?: () => void;
}

export const DedicatedCategorySection: React.FC<DedicatedCategorySectionProps> = ({
  id,
  title,
  subtitle,
  kicker,
  products,
  onQuickView,
  onViewDetails,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  onViewAll,
}) => {
  if (products.length === 0) return null;

  return (
    <section id={id} className="py-16 sm:py-20 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono tracking-[0.25em] text-[#2B2B2B] uppercase mb-2">
              {kicker}
            </div>
            <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tight">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-[#2B2B2B] mt-2 max-w-xl font-sans">
              {subtitle}
            </p>
          </div>

          {onViewAll && (
            <button
              type="button"
              onClick={onViewAll}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-medium text-[#111111] hover:text-black group"
            >
              <span>Explore All {title}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onViewDetails={onViewDetails}
              onAddToCart={onAddToCart}
              isWishlisted={wishlistIds.has(product.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
