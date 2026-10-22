import React, { useState } from 'react';
import { Heart, Eye, Plus, Check } from 'lucide-react';
import { Product, ClothingSize } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product, size: ClothingSize, color: string, quantity?: number, selectedImage?: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onViewDetails,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [selectedSize, setSelectedSize] = useState<ClothingSize>(product.sizes[2] || product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || product.color);
  const [isAdded, setIsAdded] = useState(false);

  // Dynamically resolve image to match currently selected color
  const matchedColor = product.colors?.find(
    (c) => c.name.toLowerCase() === selectedColor.toLowerCase()
  );
  const displayedImage = matchedColor?.image || product.image;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedSize, selectedColor, 1, displayedImage);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  const handleCardClick = () => {
    onViewDetails(product);
  };

  return (
    <div
      onClick={handleCardClick}
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
      className="group relative flex flex-col justify-between backdrop-blur-md rounded-2xl border border-white/25 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
    >
      {/* Visual Image Section - blends seamlessly with card surface */}
      <div className="relative w-full aspect-[4/3] bg-transparent overflow-hidden flex items-center justify-center p-3">
        <img
          key={displayedImage}
          src={displayedImage}
          alt={`${product.name} in ${selectedColor}`}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain object-center transition-all duration-300 group-hover:scale-105 filter drop-shadow-sm mix-blend-multiply"
        />

        {/* Minimal Unboxed Editorial Tag */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-[#111111] bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-white/40 shadow-2xs">
          {product.isNew ? (
            <span>NEW DROP</span>
          ) : product.isBestSeller ? (
            <span>ESSENTIAL</span>
          ) : (
            <span>{product.weightGsm || 380} GSM</span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-2xs ${
            isWishlisted
              ? 'bg-[#111111] text-white'
              : 'bg-white/80 hover:bg-white text-[#111111] border border-white/40'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-white' : ''}`} />
        </button>

        {/* Quick View Button on Image Hover */}
        <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 py-2 px-3 bg-[#111111]/90 hover:bg-[#111111] text-white text-xs font-medium rounded-lg backdrop-blur-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Content & Details (Black typography on translucent card) */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Category & Weight Metadata */}
          <div className="flex items-center justify-between text-xs font-mono tracking-wider text-[#2B2B2B] uppercase mb-1">
            <span className="capitalize">{product.category.replace('-', ' ')}</span>
            <span>{product.weightGsm || 380} GSM</span>
          </div>

          {/* Product Name */}
          <h3 className="font-display font-medium text-[#111111] text-lg sm:text-xl leading-snug group-hover:text-black transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-baseline gap-2 mt-1">
            <span className="font-display font-medium text-lg sm:text-xl text-[#111111] tabular-nums">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#2B2B2B]/70 line-through tabular-nums font-mono">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Available Colors with Interactive Swatches */}
          <div className="mt-3" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between text-[11px] font-mono text-[#2B2B2B] mb-1">
              <span>Color: <strong className="text-[#111111] font-medium">{selectedColor}</strong></span>
              <span className="text-[#2B2B2B]/70">{product.colors.length} shades</span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  title={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  className={`w-4.5 h-4.5 rounded-full border transition-transform ${
                    selectedColor === c.name
                      ? 'ring-2 ring-[#111111] ring-offset-1 scale-110'
                      : 'border-white/50 hover:scale-105'
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Available Sizes (XS, S, M, L, XL, XXL) */}
          <div className="mt-3" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between text-[11px] font-mono text-[#2B2B2B] mb-1">
              <span>Size</span>
              <span className="text-[#2B2B2B]/70">Selected: {selectedSize}</span>
            </div>
            <div className="grid grid-cols-6 gap-1">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => setSelectedSize(sz)}
                  className={`py-1 text-[11px] font-mono font-medium rounded border transition-colors ${
                    selectedSize === sz
                      ? 'bg-[#111111] text-white border-[#111111] font-semibold'
                      : 'bg-white/40 text-[#111111] border-white/30 hover:border-[#111111]'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dual Actions: View Product & Add to Cart */}
        <div className="mt-4 pt-3 border-t border-white/20 grid grid-cols-2 gap-2" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={() => onViewDetails(product)}
            className="py-2.5 px-3 rounded-xl text-xs font-mono font-medium uppercase tracking-wider text-[#111111] bg-white/40 hover:bg-white/70 border border-white/30 flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Product</span>
          </button>
          
          <button
            type="button"
            onClick={handleAdd}
            className={`py-2.5 px-3 rounded-xl text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-xs ${
              isAdded
                ? 'bg-[#2B2B2B] text-white'
                : 'bg-[#111111] hover:bg-black text-white'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
