import React, { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { Product, ClothingSize } from '../types';
import { ProductCard } from './ProductCard';
import { CATEGORIES } from '../data/products';

interface ShopPageProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product, size: ClothingSize, color: string, quantity?: number, selectedImage?: string) => void;
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  initialCategory?: string;
}

const PAGE_SIZE = 24;

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  onQuickView,
  onViewDetails,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  initialCategory = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'gsm-desc'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);

  // Synchronize category filter if passed from external navigation
  React.useEffect(() => {
    setSelectedCategory(initialCategory);
    setVisibleCount(PAGE_SIZE);
  }, [initialCategory]);

  // Reset visible count when category or search changes
  React.useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [selectedCategory, selectedSizeFilter, searchQuery, sortBy]);

  // Compute category counts for navigation badges
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: products.length };
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
      if (p.isNew) {
        counts['new-arrivals'] = (counts['new-arrivals'] || 0) + 1;
      }
    });
    return counts;
  }, [products]);

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'new-arrivals') {
        list = list.filter((p) => p.isNew || p.category === 'new-arrivals');
      } else {
        list = list.filter((p) => p.category === selectedCategory);
      }
    }

    // Keyword search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.colors.some((c) => c.name.toLowerCase().includes(q))
      );
    }

    // Size filter
    if (selectedSizeFilter !== 'all') {
      list = list.filter((p) => p.sizes.includes(selectedSizeFilter as ClothingSize));
    }

    // Sort
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'gsm-desc') {
      list.sort((a, b) => b.weightGsm - a.weightGsm);
    }

    return list;
  }, [products, selectedCategory, selectedSizeFilter, searchQuery, sortBy]);

  const displayedProducts = useMemo(() => {
    // If filtered down to a specific category, show all directly or up to visibleCount
    if (selectedCategory !== 'all') {
      return filteredProducts;
    }
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount, selectedCategory]);

  const sizes: ClothingSize[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="py-10 sm:py-16 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Shop Page Banner */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/20">
          <div>
            <div className="text-xs font-mono tracking-[0.25em] text-[#2B2B2B] uppercase mb-2">
              ATELIER ARCHIVE · READY TO DISPATCH
            </div>
            <h1 className="font-display font-medium text-3xl sm:text-5xl text-[#111111] tracking-tight">
              The S.S Collection
            </h1>
            <p className="text-sm sm:text-base text-[#2B2B2B] mt-2 font-sans max-w-xl">
              Heavyweight organic cotton, precision tailored wool blends, and architectural silhouettes engineered for longevity.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#111111] bg-[rgba(255,255,255,0.15)] backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/25 shadow-2xs">
              Showing <strong>{filteredProducts.length}</strong> Silhouettes
            </span>
          </div>
        </div>

        {/* Category Navigation System */}
        <div className="mb-8 space-y-4">
          
          {/* Category Chips Bar with Item Counts */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-[#2B2B2B] font-medium tracking-wider">
                Select Garment Category:
              </span>
              <span className="text-[11px] font-mono text-[#2B2B2B]/70">
                16 Atelier Categories
              </span>
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const count = categoryCounts[cat.id] || 0;
                
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-medium uppercase tracking-wider transition-all whitespace-nowrap shrink-0 shadow-2xs flex items-center gap-2 ${
                      isSelected
                        ? 'bg-[#111111] text-white shadow-xs'
                        : 'bg-[rgba(255,255,255,0.15)] text-[#111111] hover:bg-white/25 border border-white/25'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-[#111111]/10 text-[#111111]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sub-Filters: Search, Size, and Sort Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-2xl border border-white/25 shadow-xs">
            
            {/* Quick Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2B2B2B]/60" />
              <input
                type="text"
                placeholder="Search collection by fabric, GSM, or color..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-white/40 border border-white/30 rounded-xl text-xs font-sans text-[#111111] placeholder:text-[#2B2B2B]/60 focus:outline-hidden focus:bg-white/80 focus:border-[#111111] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#2B2B2B]/60 hover:text-[#111111]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {/* Filter by Size */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono uppercase text-[#2B2B2B] font-medium mr-1">
                  Size:
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedSizeFilter('all')}
                  className={`px-2.5 py-1 text-xs font-mono rounded-lg transition-colors ${
                    selectedSizeFilter === 'all'
                      ? 'bg-[#111111] text-white font-medium'
                      : 'bg-white/40 text-[#111111] hover:bg-white/60'
                  }`}
                >
                  All
                </button>
                {sizes.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSizeFilter(sz)}
                    className={`px-2 py-1 text-xs font-mono rounded-lg transition-colors ${
                      selectedSizeFilter === sz
                        ? 'bg-[#111111] text-white font-medium'
                        : 'bg-white/40 text-[#111111] hover:bg-white/60'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>

              {/* Sort Select */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-[#2B2B2B] font-medium">
                  Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-white/90 border border-white/30 rounded-xl px-3 py-1.5 text-xs font-mono text-[#111111] focus:outline-hidden focus:ring-1 focus:ring-[#111111] cursor-pointer"
                >
                  <option value="featured">Featured Atelier Order</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="gsm-desc">Fabric Density: Heavyweight First</option>
                </select>
              </div>
            </div>

          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="p-16 text-center bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-3xl border border-white/25 max-w-md mx-auto my-12 shadow-sm">
            <h3 className="font-display font-medium text-xl text-[#111111] mb-1">
              No matching silhouettes
            </h3>
            <p className="text-xs text-[#2B2B2B] mb-6 font-sans">
              Try resetting your category or search filters to view our available inventory.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSizeFilter('all');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-[#111111] text-white rounded-xl text-xs font-medium tracking-wider uppercase hover:bg-black transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {displayedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={onQuickView}
                  onViewDetails={onViewDetails}
                  onAddToCart={(p, sz, col, qty, img) => onAddToCart(p, sz, col, qty, img)}
                  isWishlisted={wishlistIds.has(product.id)}
                  onToggleWishlist={onToggleWishlist}
                />
              ))}
            </div>

            {/* Load More Button if on All Items and more items remain */}
            {selectedCategory === 'all' && visibleCount < filteredProducts.length && (
              <div className="mt-12 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                  className="px-8 py-3.5 bg-[#111111] hover:bg-black text-white text-xs font-mono font-medium uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Load More Silhouettes ({displayedProducts.length} of {filteredProducts.length})
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};
