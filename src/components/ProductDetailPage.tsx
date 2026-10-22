import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Heart, 
  Plus, 
  Minus, 
  Check, 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  ShoppingBag, 
  Sparkles,
  Share2
} from 'lucide-react';
import { Product, ClothingSize } from '../types';
import { SSLogo } from './SSLogo';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, size: ClothingSize, color: string, quantity: number, selectedImage?: string) => void;
  onBuyNow: (product: Product, size: ClothingSize, color: string, quantity: number, selectedImage?: string) => void;
  onAddToCartMulti?: (product: Product, size: ClothingSize, variants: Array<{ color: string; quantity: number; image?: string }>) => void;
  onBuyNowMulti?: (product: Product, size: ClothingSize, variants: Array<{ color: string; quantity: number; image?: string }>) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onSelectRelatedProduct?: (product: Product) => void;
  relatedProducts?: Product[];
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBack,
  onAddToCart,
  onBuyNow,
  onAddToCartMulti,
  onBuyNowMulti,
  isWishlisted,
  onToggleWishlist,
  onSelectRelatedProduct,
  relatedProducts = [],
}) => {
  const initialColor = product.colors?.[0]?.name || product.color;
  const initialImage = product.colors?.[0]?.image || product.image;

  const [selectedColor, setSelectedColor] = useState<string>(initialColor);
  const [activeImage, setActiveImage] = useState<string>(initialImage);
  const [selectedSize, setSelectedSize] = useState<ClothingSize>(product.sizes[2] || product.sizes[0] || 'M');
  const [isAdded, setIsAdded] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Per-color quantity mapping: e.g. { "Black": 2, "Brown": 1, "Grey": 3 }
  const [colorQuantities, setColorQuantities] = useState<Record<string, number>>({
    [initialColor]: 1,
  });

  // Sync state whenever selected product changes
  useEffect(() => {
    const defaultColor = product.colors?.[0]?.name || product.color;
    const defaultImg = product.colors?.[0]?.image || product.image;
    setSelectedColor(defaultColor);
    setActiveImage(defaultImg);
    setSelectedSize(product.sizes[2] || product.sizes[0] || 'M');
    setColorQuantities({ [defaultColor]: 1 });
  }, [product.id]);

  // Color selection that IMMEDIATELY updates displayed product image
  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName);
    const matched = product.colors.find(
      (c) => c.name.toLowerCase() === colorName.toLowerCase()
    );
    if (matched?.image) {
      setActiveImage(matched.image);
    }
    // If this color is not yet selected, give it 1 quantity
    setColorQuantities((prev) => {
      if (!prev[colorName] || prev[colorName] <= 0) {
        return { ...prev, [colorName]: 1 };
      }
      return prev;
    });
  };

  // Adjust quantity for a specific color variant
  const handleColorQuantityChange = (colorName: string, delta: number) => {
    setColorQuantities((prev) => {
      const current = prev[colorName] || 0;
      const nextVal = Math.max(0, current + delta);

      // If incrementing, immediately preview that color
      if (delta > 0 && colorName.toLowerCase() !== selectedColor.toLowerCase()) {
        setSelectedColor(colorName);
        const matched = product.colors.find(
          (c) => c.name.toLowerCase() === colorName.toLowerCase()
        );
        if (matched?.image) {
          setActiveImage(matched.image);
        }
      }

      const updated = { ...prev, [colorName]: nextVal };
      // Ensure at least one color has quantity > 0
      const total = Object.values(updated).reduce((s, q) => s + q, 0);
      if (total === 0 && delta < 0) {
        updated[colorName] = 1;
      }
      return updated;
    });
  };

  // Build the list of selected variants with quantity > 0
  const selectedVariants = Object.entries(colorQuantities)
    .filter(([_, qty]) => qty > 0)
    .map(([colorName, qty]) => {
      const matched = product.colors.find(
        (c) => c.name.toLowerCase() === colorName.toLowerCase()
      );
      return {
        color: colorName,
        quantity: qty,
        image: matched?.image || product.image,
      };
    });

  const totalQuantity = selectedVariants.reduce((sum, v) => sum + v.quantity, 0) || 1;

  const handleAddToCart = () => {
    if (selectedVariants.length === 0) {
      onAddToCart(product, selectedSize, selectedColor, 1, activeImage);
    } else if (onAddToCartMulti) {
      onAddToCartMulti(product, selectedSize, selectedVariants);
    } else {
      selectedVariants.forEach((v) => {
        onAddToCart(product, selectedSize, v.color, v.quantity, v.image);
      });
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2200);
  };

  const handleBuyNow = () => {
    if (selectedVariants.length === 0) {
      onBuyNow(product, selectedSize, selectedColor, 1, activeImage);
    } else if (onBuyNowMulti) {
      onBuyNowMulti(product, selectedSize, selectedVariants);
    } else {
      selectedVariants.forEach((v) => {
        onAddToCart(product, selectedSize, v.color, v.quantity, v.image);
      });
      onBuyNow(
        product,
        selectedSize,
        selectedVariants[0].color,
        selectedVariants[0].quantity,
        selectedVariants[0].image
      );
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="py-8 sm:py-12 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back Bar */}
        <div className="flex items-center justify-between mb-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[rgba(255,255,255,0.15)] hover:bg-white/25 text-[#111111] border border-white/25 text-xs font-mono tracking-wider uppercase transition-colors shadow-2xs group backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Return to Catalog</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="px-3 py-2 rounded-xl bg-[rgba(255,255,255,0.15)] hover:bg-white/25 text-[#111111] border border-white/25 text-xs font-mono uppercase flex items-center gap-1.5 transition-colors shadow-2xs backdrop-blur-md"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
            </button>
            <button
              type="button"
              onClick={() => onToggleWishlist(product)}
              className={`p-2 rounded-xl border border-white/25 transition-colors shadow-2xs backdrop-blur-md ${
                isWishlisted
                  ? 'bg-[#111111] text-white'
                  : 'bg-[rgba(255,255,255,0.15)] hover:bg-white/25 text-[#111111]'
              }`}
              aria-label="Save to wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
            </button>
          </div>
        </div>

        {/* Main Product Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Large Product Imagery Showcase (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Primary Large Studio Frame */}
            <div className="relative w-full aspect-square bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl border border-white/25 flex items-center justify-center overflow-hidden group">
              <img
                key={activeImage}
                src={activeImage}
                alt={`${product.name} in ${selectedColor}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-center transition-all duration-300 group-hover:scale-105 filter drop-shadow-md mix-blend-multiply"
              />

              {/* Atelier Badge Tag */}
              <div className="absolute top-8 left-8 z-10 flex flex-col sm:flex-row gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#111111] text-white rounded text-[11px] font-mono tracking-widest uppercase shadow-xs">
                  {product.weightGsm} GSM · PORTO ATELIER
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 text-[#111111] border border-white/50 rounded text-[11px] font-mono tracking-wider uppercase shadow-xs">
                  COLOR: {selectedColor}
                </span>
              </div>
            </div>

            {/* Thumbnail Gallery (All available color variations & angles) */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono text-[#2B2B2B] uppercase tracking-wider block">
                Garment Visuals &amp; Colorways:
              </span>
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.colors.map((c, idx) => {
                  const img = c.image || product.image;
                  const isSelected = selectedColor.toLowerCase() === c.name.toLowerCase() || activeImage === img;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleColorSelect(c.name)}
                      className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-1.5 border-2 transition-all shrink-0 overflow-hidden flex flex-col items-center justify-center shadow-2xs group ${
                        isSelected
                          ? 'border-[#111111] ring-2 ring-[#111111]/30 scale-95'
                          : 'border-white/40 hover:border-[#111111]'
                      }`}
                      title={`View ${c.name}`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${c.name}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-black/75 text-white text-[9px] font-mono py-0.5 text-center truncate px-1">
                        {c.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Atelier Craftsmanship Highlights Bar */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-2xl border border-white/25 text-[#111111] shadow-2xs">
              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-[#111111] shrink-0" />
                <div className="text-[11px] leading-tight">
                  <span className="font-semibold block text-[#111111]">Express Shipping</span>
                  <span className="text-[#2B2B2B] font-mono text-[10px]">Complimentary &gt; $200</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <RefreshCw className="w-4 h-4 text-[#111111] shrink-0" />
                <div className="text-[11px] leading-tight">
                  <span className="font-semibold block text-[#111111]">30-Day Returns</span>
                  <span className="text-[#2B2B2B] font-mono text-[10px]">Pre-printed label</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#111111] shrink-0" />
                <div className="text-[11px] leading-tight">
                  <span className="font-semibold block text-[#111111]">Zero-Shrink Guarantee</span>
                  <span className="text-[#2B2B2B] font-mono text-[10px]">Pre-shrunk wash</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Garment Information & Order Controls (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/25 shadow-xl flex flex-col gap-6">
              
              {/* Product Header */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#2B2B2B] uppercase mb-2">
                  <span>CATEGORY: {product.category}</span>
                  <span className="text-[#111111] font-semibold">{product.inStock ? 'IN STOCK' : 'PRE-ORDER'}</span>
                </div>

                <h1 className="font-display font-medium text-3xl sm:text-4xl text-[#111111] leading-snug">
                  {product.name}
                </h1>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 mt-3">
                  <span className="font-display font-medium text-3xl sm:text-4xl text-[#111111] tabular-nums">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm font-mono text-[#2B2B2B]/70 line-through tabular-nums">
                      ${product.originalPrice}
                    </span>
                  )}
                  <span className="text-[11px] font-mono text-[#111111] bg-white/30 px-2 py-0.5 rounded">
                    Cash on Delivery available
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="text-[#2B2B2B] text-sm leading-relaxed font-sans border-y border-white/20 py-4">
                <p>{product.description}</p>
                <p className="mt-2 text-xs font-mono text-[#111111] font-medium">
                  {product.tagline}
                </p>
              </div>

              {/* Color Selection & Multi-Color Variant Quantities */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#111111]">
                  <span className="uppercase font-medium tracking-wider">
                    Select Colors &amp; Quantities:
                  </span>
                  <span className="text-[#2B2B2B]">
                    Active: <strong className="text-[#111111]">{selectedColor}</strong>
                  </span>
                </div>

                {/* Color swatches chips for quick photo switching */}
                <div className="flex items-center gap-2 flex-wrap pb-1">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => handleColorSelect(c.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all ${
                        selectedColor.toLowerCase() === c.name.toLowerCase()
                          ? 'border-[#111111] bg-white text-[#111111] font-bold shadow-2xs ring-2 ring-[#111111]'
                          : 'border-white/40 bg-white/40 text-[#111111] hover:border-[#111111]'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-stone-400"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                      {colorQuantities[c.name] > 0 && (
                        <span className="ml-1 px-1.5 py-0.2 rounded-full bg-[#111111] text-white text-[10px] font-bold">
                          ×{colorQuantities[c.name]}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Per-Color Quantity Variant Matrix (Customer can select Black x 2, Brown x 1, Grey x 3) */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-mono text-[#2B2B2B] uppercase tracking-wider">
                    Configure Quantities per Colorway:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.colors.map((c) => {
                      const qty = colorQuantities[c.name] || 0;
                      const isFocused = selectedColor.toLowerCase() === c.name.toLowerCase();
                      const variantImg = c.image || product.image;

                      return (
                        <div
                          key={c.name}
                          onClick={() => handleColorSelect(c.name)}
                          className={`flex items-center justify-between p-2.5 rounded-2xl border transition-all cursor-pointer ${
                            isFocused
                              ? 'border-[#111111] bg-white/70 shadow-2xs ring-1 ring-[#111111]'
                              : 'border-white/30 bg-white/20 hover:bg-white/35'
                          }`}
                        >
                          {/* Left: Thumbnail & Name */}
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="relative w-11 h-11 rounded-xl bg-white/40 border border-white/40 overflow-hidden shrink-0 flex items-center justify-center p-1">
                              <img
                                src={variantImg}
                                alt={c.name}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-contain mix-blend-multiply"
                              />
                              <span
                                className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 rounded-full border border-white"
                                style={{ backgroundColor: c.hex }}
                              />
                            </div>
                            <div className="min-w-0">
                              <div className="font-display font-medium text-xs text-[#111111] truncate flex items-center gap-1.5">
                                <span>{c.name}</span>
                                {isFocused && (
                                  <span className="text-[9px] font-mono uppercase bg-[#111111] text-white px-1.5 py-0.2 rounded shrink-0">
                                    Photo
                                  </span>
                                )}
                              </div>
                              <div className="text-[10px] font-mono text-[#2B2B2B] mt-0.5">
                                ${product.price} · <span className="text-emerald-800 font-medium">In Atelier</span>
                              </div>
                            </div>
                          </div>

                          {/* Right: Quantity Stepper for this specific color variant */}
                          <div
                            className="flex items-center border border-white/40 rounded-xl bg-white/70 px-2 py-1 shadow-2xs shrink-0"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              type="button"
                              onClick={() => handleColorQuantityChange(c.name, -1)}
                              className="text-[#111111] hover:text-black p-0.5 disabled:opacity-30 transition-opacity"
                              disabled={qty === 0}
                              aria-label={`Decrease ${c.name} quantity`}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-mono font-bold tabular-nums text-[#111111]">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleColorQuantityChange(c.name, 1)}
                              className="text-[#111111] hover:text-black p-0.5"
                              aria-label={`Increase ${c.name} quantity`}
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Size Selection (XS, S, M, L, XL, XXL) */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#111111] mb-2">
                  <span className="uppercase font-medium tracking-wider">
                    Select Size: <span className="font-semibold">{selectedSize}</span>
                  </span>
                  <span className="text-[#2B2B2B]">Unisex Atelier Fit</span>
                </div>

                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`py-3 rounded-xl text-xs font-mono font-medium uppercase border transition-all ${
                        selectedSize === sz
                          ? 'bg-[#111111] text-white border-[#111111] shadow-xs font-bold'
                          : 'bg-white/40 text-[#111111] border-white/30 hover:border-[#111111]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Multi-Color Selection Summary & Action Buttons */}
              <div className="space-y-3 pt-2">
                {/* Variant Breakdown Card */}
                <div className="p-3.5 bg-white/30 backdrop-blur-xs rounded-2xl border border-white/30 text-xs font-mono text-[#111111] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 shadow-2xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#2B2B2B] block">
                      Selected Variants ({selectedVariants.length} color{selectedVariants.length > 1 ? 's' : ''}):
                    </span>
                    <span className="font-semibold text-[#111111]">
                      {selectedVariants.length > 0
                        ? selectedVariants.map((v) => `${v.color} × ${v.quantity}`).join(', ')
                        : `${selectedColor} × 1`}
                    </span>
                  </div>
                  <div className="text-left sm:text-right sm:border-l sm:border-white/30 sm:pl-3">
                    <span className="text-[10px] uppercase text-[#2B2B2B] block">
                      Total ({totalQuantity} item{totalQuantity > 1 ? 's' : ''}):
                    </span>
                    <span className="font-display font-bold text-base text-[#111111] tabular-nums">
                      ${(product.price * totalQuantity).toFixed(0)}
                    </span>
                  </div>
                </div>

                {/* Add to Cart & Buy Now Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch gap-3">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className={`flex-1 py-4 px-6 rounded-xl text-xs font-medium tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg ${
                      isAdded
                        ? 'bg-[#2B2B2B] text-white'
                        : 'bg-[#111111] hover:bg-black text-white'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added {totalQuantity} Variant{totalQuantity > 1 ? 's' : ''} to Cart</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>
                          {selectedVariants.length > 1
                            ? `Add ${selectedVariants.length} Colors (${totalQuantity} pcs) to Cart`
                            : `Add to Cart (${totalQuantity} pc)`}
                          {' · '}${(product.price * totalQuantity).toFixed(0)}
                        </span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className="py-4 px-6 bg-[rgba(255,255,255,0.25)] hover:bg-white/40 text-[#111111] border border-white/35 rounded-xl text-xs font-medium tracking-wider uppercase transition-all shadow-xs flex items-center justify-center gap-2"
                  >
                    <span>Instant Checkout</span>
                  </button>
                </div>
              </div>

              {/* Technical Garment Specifications Table */}
              <div className="pt-4 border-t border-white/20 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="font-mono text-[#2B2B2B] uppercase">Textile Composition</span>
                  <span className="font-medium text-[#111111] text-right">{product.fabric}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="font-mono text-[#2B2B2B] uppercase">Fabric Density</span>
                  <span className="font-mono font-medium text-[#111111] tabular-nums">{product.weightGsm} GSM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="font-mono text-[#2B2B2B] uppercase">Silhouette & Fit</span>
                  <span className="font-medium text-[#111111]">{product.fit}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-mono text-[#2B2B2B] uppercase">Payment Terms</span>
                  <span className="font-mono font-medium text-[#111111]">Cash on Delivery (COD)</span>
                </div>
              </div>

              {/* Construction Details Bullets */}
              <div className="pt-4 border-t border-white/20">
                <div className="text-xs font-mono font-medium uppercase tracking-wider text-[#111111] mb-2">
                  Garment Construction Details
                </div>
                <ul className="space-y-1.5 text-xs text-[#2B2B2B] list-disc list-inside">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="font-sans">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* Related Silhouettes Section */}
        {relatedProducts.length > 0 && onSelectRelatedProduct && (
          <div className="mt-20 pt-12 border-t border-white/20">
            <div className="mb-8">
              <div className="text-xs font-mono tracking-widest text-[#2B2B2B] uppercase mb-1">
                COMPATIBLE SILHOUETTES
              </div>
              <h3 className="font-display font-medium text-2xl sm:text-3xl text-[#111111]">
                Complete the Look
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.slice(0, 3).map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectRelatedProduct(rel)}
                  className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-4 rounded-2xl border border-white/25 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center gap-4 group"
                >
                  <div className="w-20 h-20 bg-white rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2 border border-white/30">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-mono text-[#2B2B2B] uppercase">
                      {rel.category} · {rel.weightGsm} GSM
                    </div>
                    <div className="font-display font-medium text-base text-[#111111] line-clamp-1 mt-0.5">
                      {rel.name}
                    </div>
                    <div className="font-display font-medium text-sm text-[#111111] mt-1 tabular-nums">
                      ${rel.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
