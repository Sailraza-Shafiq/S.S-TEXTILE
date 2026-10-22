import React, { useState } from 'react';
import { X, Heart, Plus, Minus, Check, ShieldCheck, Truck, ArrowRight } from 'lucide-react';
import { Product, ClothingSize } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: ClothingSize, color: string, quantity: number, selectedImage?: string) => void;
  onAddToCartMulti?: (product: Product, size: ClothingSize, variants: Array<{ color: string; quantity: number; image?: string }>) => void;
  onViewDetailsPage: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onAddToCartMulti,
  onViewDetailsPage,
  isWishlisted,
  onToggleWishlist,
}) => {
  if (!product) return null;

  const defaultColor = product.colors?.[0]?.name || product.color;
  const defaultImage = product.colors?.[0]?.image || product.image;

  const [selectedSize, setSelectedSize] = useState<ClothingSize>(product.sizes[2] || product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState<string>(defaultColor);
  const [activeImage, setActiveImage] = useState<string>(defaultImage);
  const [isAdded, setIsAdded] = useState(false);

  // Per-color quantities map: e.g. { "Black": 2, "Brown": 1, "Grey": 3 }
  const [colorQuantities, setColorQuantities] = useState<Record<string, number>>({
    [defaultColor]: 1,
  });

  // Sync state if product changes
  React.useEffect(() => {
    if (product) {
      const defCol = product.colors?.[0]?.name || product.color;
      setSelectedColor(defCol);
      setActiveImage(product.colors?.[0]?.image || product.image);
      setSelectedSize(product.sizes[2] || product.sizes[0] || 'M');
      setColorQuantities({ [defCol]: 1 });
    }
  }, [product?.id]);

  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName);
    const matched = product.colors?.find(
      (c) => c.name.toLowerCase() === colorName.toLowerCase()
    );
    if (matched?.image) {
      setActiveImage(matched.image);
    }
    // If not selected yet, set to 1
    setColorQuantities((prev) => {
      if (!prev[colorName] || prev[colorName] <= 0) {
        return { ...prev, [colorName]: 1 };
      }
      return prev;
    });
  };

  const handleColorQuantityChange = (colorName: string, delta: number) => {
    setColorQuantities((prev) => {
      const current = prev[colorName] || 0;
      const nextVal = Math.max(0, current + delta);

      if (delta > 0 && colorName.toLowerCase() !== selectedColor.toLowerCase()) {
        setSelectedColor(colorName);
        const matched = product.colors?.find(
          (c) => c.name.toLowerCase() === colorName.toLowerCase()
        );
        if (matched?.image) setActiveImage(matched.image);
      }

      const updated = { ...prev, [colorName]: nextVal };
      const total = Object.values(updated).reduce((s, q) => s + q, 0);
      if (total === 0 && delta < 0) {
        updated[colorName] = 1;
      }
      return updated;
    });
  };

  const selectedVariants = Object.entries(colorQuantities)
    .filter(([_, qty]) => qty > 0)
    .map(([colorName, qty]) => {
      const matched = product.colors?.find(
        (c) => c.name.toLowerCase() === colorName.toLowerCase()
      );
      return {
        color: colorName,
        quantity: qty,
        image: matched?.image || product.image,
      };
    });

  const totalQuantity = selectedVariants.reduce((sum, v) => sum + v.quantity, 0) || 1;

  const handleAdd = () => {
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
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl transform overflow-hidden rounded-3xl bg-[#A67B5B] p-6 sm:p-10 text-left shadow-2xl transition-all border border-white/30 text-[#111111]"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-white/90 border border-white/40 flex items-center justify-center text-[#111111] hover:bg-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left: Product Image Showcase */}
            <div className="md:col-span-6">
              <div className="relative w-full aspect-square bg-[rgba(255,255,255,0.15)] rounded-2xl overflow-hidden p-6 border border-white/25 flex items-center justify-center">
                <img
                  key={activeImage}
                  src={activeImage}
                  alt={`${product.name} in ${selectedColor}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain transition-all duration-300 filter drop-shadow-md mix-blend-multiply"
                />

                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-[#111111] text-white px-2 py-0.5 rounded">
                    {product.weightGsm} GSM ATELIER
                  </span>
                  <span className="text-[10px] font-mono tracking-wider uppercase bg-white/90 text-[#111111] px-2 py-0.5 rounded border border-white/50">
                    COLOR: {selectedColor}
                  </span>
                </div>
              </div>

              {/* View Full Product Page Link */}
              <button
                type="button"
                onClick={() => {
                  onViewDetailsPage(product);
                  onClose();
                }}
                className="mt-4 w-full py-2.5 px-4 bg-[rgba(255,255,255,0.15)] hover:bg-white/25 border border-white/25 text-[#111111] rounded-xl text-xs font-mono uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <span>Open Full Product Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right: Garment Specs & Purchase Module */}
            <div className="md:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#2B2B2B]">
                    {product.category} · {product.weightGsm} GSM
                  </span>
                  <button
                    type="button"
                    onClick={() => onToggleWishlist(product)}
                    className="flex items-center gap-1.5 text-xs text-[#111111] hover:text-black transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isWishlisted ? 'fill-[#111111] text-[#111111]' : ''
                      }`}
                    />
                    <span>{isWishlisted ? 'Saved' : 'Save'}</span>
                  </button>
                </div>

                <h2 className="font-display font-medium text-2xl sm:text-3xl text-[#111111] mb-2">
                  {product.name}
                </h2>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-display font-medium text-2xl text-[#111111] tabular-nums">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm font-mono text-[#2B2B2B]/60 line-through tabular-nums">
                      ${product.originalPrice}
                    </span>
                  )}
                  <span className="text-xs font-mono text-[#111111] bg-white/30 px-2 py-0.5 rounded">
                    Cash on Delivery Available
                  </span>
                </div>

                <p className="text-[#2B2B2B] text-xs sm:text-sm leading-relaxed mb-4 font-sans">
                  {product.description}
                </p>

                {/* Color Selection & Multi-Color Quantity Controls */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#111111] mb-2">
                    <span className="uppercase font-medium">
                      Colorways &amp; Quantities:
                    </span>
                    <span className="text-[#2B2B2B]">
                      Active: <strong className="text-[#111111]">{selectedColor}</strong>
                    </span>
                  </div>

                  {/* Quick Color Swatches */}
                  <div className="flex items-center gap-2 flex-wrap mb-3">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => handleColorSelect(c.name)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-mono transition-all ${
                          selectedColor.toLowerCase() === c.name.toLowerCase()
                            ? 'border-[#111111] bg-white text-[#111111] font-bold ring-2 ring-[#111111]'
                            : 'border-white/40 bg-white/40 text-[#111111] hover:border-[#111111]'
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-full border border-stone-300"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.name}</span>
                        {colorQuantities[c.name] > 0 && (
                          <span className="ml-0.5 px-1 py-0.2 rounded-full bg-[#111111] text-white text-[9px] font-bold">
                            ×{colorQuantities[c.name]}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Quantity Matrix per Colorway */}
                  <div className="grid grid-cols-2 gap-2 max-h-36 overflow-y-auto pr-1">
                    {product.colors.map((c) => {
                      const qty = colorQuantities[c.name] || 0;
                      const isFocused = selectedColor.toLowerCase() === c.name.toLowerCase();

                      return (
                        <div
                          key={c.name}
                          onClick={() => handleColorSelect(c.name)}
                          className={`flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer ${
                            isFocused
                              ? 'border-[#111111] bg-white/70 shadow-2xs ring-1 ring-[#111111]'
                              : 'border-white/30 bg-white/20 hover:bg-white/30'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span
                              className="w-3 h-3 rounded-full border border-stone-400 shrink-0"
                              style={{ backgroundColor: c.hex }}
                            />
                            <span className="text-xs font-mono font-medium text-[#111111] truncate">
                              {c.name}
                            </span>
                          </div>

                          <div
                            className="flex items-center border border-white/40 rounded-lg bg-white/80 px-1.5 py-0.5 shadow-2xs shrink-0"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              type="button"
                              onClick={() => handleColorQuantityChange(c.name, -1)}
                              className="text-[#111111] hover:text-black p-0.5 disabled:opacity-30"
                              disabled={qty === 0}
                              aria-label={`Decrease ${c.name} quantity`}
                            >
                              <Minus className="w-2.5 h-2.5" />
                            </button>
                            <span className="w-5 text-center text-xs font-mono font-bold tabular-nums text-[#111111]">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleColorQuantityChange(c.name, 1)}
                              className="text-[#111111] hover:text-black p-0.5"
                              aria-label={`Increase ${c.name} quantity`}
                            >
                              <Plus className="w-2.5 h-2.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Size Selector (XS, S, M, L, XL, XXL) */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-mono font-medium tracking-wider uppercase text-[#111111]">
                      Select Size: {selectedSize}
                    </label>
                  </div>

                  <div className="grid grid-cols-6 gap-1.5">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        className={`py-2 rounded-lg text-xs font-mono font-medium border transition-all ${
                          selectedSize === sz
                            ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                            : 'bg-white/40 text-[#111111] border-white/30 hover:border-[#111111]'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Variant Breakdown & Add Button */}
                <div className="space-y-2.5 mb-6">
                  <div className="p-2.5 bg-white/30 rounded-xl border border-white/30 text-[11px] font-mono text-[#111111] flex items-center justify-between">
                    <span className="truncate pr-2">
                      {selectedVariants.length > 0
                        ? selectedVariants.map((v) => `${v.color} × ${v.quantity}`).join(', ')
                        : `${selectedColor} × 1`}
                    </span>
                    <span className="font-bold tabular-nums shrink-0">
                      ${(product.price * totalQuantity).toFixed(0)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleAdd}
                    className={`w-full py-3.5 px-6 rounded-xl text-xs font-medium tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-2xs ${
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
                        <Plus className="w-4 h-4" />
                        <span>
                          {selectedVariants.length > 1
                            ? `Add ${selectedVariants.length} Colors (${totalQuantity} items) to Cart`
                            : `Add to Cart (${totalQuantity} item)`}
                          {' — '}${(product.price * totalQuantity).toFixed(0)}
                        </span>
                      </>
                    )}
                  </button>
                </div>

                {/* Textile Specs */}
                <div className="pt-3 border-t border-white/20 text-xs text-[#2B2B2B] font-mono space-y-1">
                  <div>TEXTILE: {product.fabric}</div>
                  <div>FIT: {product.fit}</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
