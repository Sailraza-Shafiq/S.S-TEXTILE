import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Product, ClothingSize } from '../types';
import { ProductCard } from './ProductCard';
import { SSLogo } from './SSLogo';

interface FeaturedCollectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: ClothingSize, color: string, quantity?: number, selectedImage?: string) => void;
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onViewFullShop: (category?: string) => void;
}

const MEN_VARIETY_TABS = [
  { id: 'all', label: 'All Varieties' },
  { id: 'hoodies', label: 'Hoodies' },
  { id: 't-shirts', label: 'T-Shirts' },
  { id: 'shirts', label: 'Shirts' },
  { id: 'pants', label: 'Pants' },
  { id: 'jeans', label: 'Jeans' },
  { id: 'jackets', label: 'Jackets' },
  { id: 'coats', label: 'Coats' },
  { id: 'sweatshirts', label: 'Sweatshirts' },
  { id: 'polo-shirts', label: 'Polo Shirts' },
  { id: 'overshirts', label: 'Overshirts' },
];

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  products,
  onSelectProduct,
  onQuickView,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  onViewFullShop,
}) => {
  const [activeTab, setActiveTab] = useState('all');

  // Filter products based on selected tab
  const displayedProducts = React.useMemo(() => {
    if (activeTab === 'all') {
      // Pick a diverse mix across all men's varieties
      const varietyCategories = [
        'hoodies',
        't-shirts',
        'shirts',
        'pants',
        'jeans',
        'jackets',
        'coats',
        'sweatshirts',
        'polo-shirts',
        'overshirts',
      ];
      const mix: Product[] = [];
      varietyCategories.forEach((cat) => {
        const matching = products.filter((p) => p.category === cat);
        if (matching.length > 0) {
          mix.push(matching[0]);
          if (matching[1]) mix.push(matching[1]);
        }
      });
      return mix.slice(0, 12);
    }
    return products.filter((p) => p.category === activeTab).slice(0, 9);
  }, [products, activeTab]);

  return (
    <section id="featured" className="py-16 sm:py-24 relative border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with S.S logo emblem on the side (NO large S.S text heading) */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <SSLogo variant="stamp" />
              <div className="h-3.5 w-px bg-[#111111]/30" />
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#2B2B2B] uppercase">
                MENSWEAR ATELIER SELECTIONS
              </span>
            </div>
            
            <h2 className="font-display font-normal text-3xl sm:text-5xl text-[#111111] tracking-tight">
              Curated Men's Silhouettes
            </h2>
            <p className="text-sm sm:text-base text-[#2B2B2B] mt-2 max-w-2xl font-sans leading-relaxed">
              Explore our core masculine wardrobe across heavyweight hoodies, tailored trousers, selvedge denim, wool overcoats, box tees, and structured overshirts.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onViewFullShop(activeTab !== 'all' ? activeTab : undefined)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[rgba(255,255,255,0.15)] hover:bg-white/25 border border-white/25 text-xs font-mono tracking-widest uppercase font-medium text-[#111111] transition-colors shadow-2xs self-start md:self-end"
          >
            <span>View Full Shop ({products.length} Items)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Variety Category Navigation Tabs */}
        <div className="mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2 min-w-max">
            {MEN_VARIETY_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#111111] text-white font-medium shadow-xs scale-100'
                    : 'bg-[rgba(255,255,255,0.15)] hover:bg-white/25 text-[#111111] border border-white/20'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid: Every card sits on rgba(255,255,255,0.15) with NO solid white rectangle */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onViewDetails={onSelectProduct}
              onAddToCart={onAddToCart}
              isWishlisted={wishlistIds.has(product.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => onViewFullShop(activeTab !== 'all' ? activeTab : undefined)}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#111111] hover:bg-black text-white text-xs font-medium tracking-widest uppercase rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <span>Explore All {activeTab !== 'all' ? activeTab.replace('-', ' ') : 'Men\'s Categories'} in Atelier Store</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
