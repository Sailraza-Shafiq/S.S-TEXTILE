/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, Check, Sparkles, Image as ImageIcon } from 'lucide-react';
import { Product, ProductCategory, ClothingSize, ProductColor } from '../../types';
import { 
  HOODIE_IMAGE, 
  PANTS_IMAGE, 
  TSHIRT_IMAGE, 
  JACKET_IMAGE, 
  HERO_MODEL_IMAGE,
  OVERSHIRT_IMAGE 
} from '../../data/products';

interface AdminProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => Promise<void>;
  productToEdit?: Product | null;
}

const ALL_SIZES: ClothingSize[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const CATEGORY_OPTIONS: { label: string; value: ProductCategory }[] = [
  { label: 'Heavyweight Hoodies', value: 'hoodies' },
  { label: 'Tailored Pants & Trousers', value: 'pants' },
  { label: '280 GSM Boxy T-Shirts', value: 't-shirts' },
  { label: 'Architectural Jackets', value: 'jackets' },
  { label: 'Overshirts & Shirts', value: 'shirts' },
  { label: 'New Arrivals Drop', value: 'new-arrivals' },
  { label: 'Best Sellers', value: 'best-sellers' },
];

const PRESET_IMAGES = [
  { label: 'Core Black Hoodie', url: HOODIE_IMAGE },
  { label: 'Tailored Black Trousers', url: PANTS_IMAGE },
  { label: 'Oversized Boxy Tee', url: TSHIRT_IMAGE },
  { label: 'Architectural Jacket', url: JACKET_IMAGE },
  { label: 'Chore Overshirt', url: OVERSHIRT_IMAGE },
  { label: 'Editorial Model Look', url: HERO_MODEL_IMAGE },
];

export const AdminProductModal: React.FC<AdminProductModalProps> = ({
  isOpen,
  onClose,
  onSave,
  productToEdit,
}) => {
  const isEditing = Boolean(productToEdit);

  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(185);
  const [originalPrice, setOriginalPrice] = useState<number | undefined>(undefined);
  const [category, setCategory] = useState<ProductCategory>('hoodies');
  const [description, setDescription] = useState('');
  const [tagline, setTagline] = useState('');
  const [fabric, setFabric] = useState('100% Organic Combed Long-Staple Cotton');
  const [weightGsm, setWeightGsm] = useState<number>(480);
  const [fit, setFit] = useState('Relaxed Boxy Fit');
  const [stock, setStock] = useState<number>(50);
  const [featured, setFeatured] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState('');
  const [selectedSizes, setSelectedSizes] = useState<ClothingSize[]>(['S', 'M', 'L', 'XL']);
  const [colors, setColors] = useState<ProductColor[]>([
    { name: 'Pitch Black', hex: '#111111' },
    { name: 'Washed Charcoal', hex: '#2A2A2A' },
  ]);

  const [newColorName, setNewColorName] = useState('');
  const [newColorHex, setNewColorHex] = useState('#111111');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setPrice(productToEdit.price);
      setOriginalPrice(productToEdit.originalPrice);
      setCategory(productToEdit.category);
      setDescription(productToEdit.description);
      setTagline(productToEdit.tagline || '');
      setFabric(productToEdit.fabric || '100% Organic Combed Long-Staple Cotton');
      setWeightGsm(productToEdit.weightGsm || 480);
      setFit(productToEdit.fit || 'Relaxed Boxy Fit');
      setStock(productToEdit.stock ?? 50);
      setFeatured(Boolean(productToEdit.featured || productToEdit.isBestSeller));
      setImageUrl(productToEdit.image || HOODIE_IMAGE);
      setSelectedSizes(productToEdit.sizes || ALL_SIZES);
      setColors(
        productToEdit.colors && productToEdit.colors.length > 0
          ? productToEdit.colors
          : [{ name: 'Pitch Black', hex: '#111111' }]
      );
    } else {
      // Default new garment
      setName('');
      setPrice(185);
      setOriginalPrice(undefined);
      setCategory('hoodies');
      setDescription('Constructed with architectural drape from dense organic loopback cotton. Pre-shrunk formulation for a permanent relaxed silhouette.');
      setTagline('480 GSM Loopback French Terry with minimalist tonal embroidery.');
      setFabric('100% Organic Combed Long-Staple Cotton');
      setWeightGsm(480);
      setFit('Relaxed Boxy Fit');
      setStock(50);
      setFeatured(false);
      setImageUrl(HOODIE_IMAGE);
      setSelectedSizes(['XS', 'S', 'M', 'L', 'XL', 'XXL']);
      setColors([
        { name: 'Pitch Black', hex: '#111111' },
        { name: 'Washed Charcoal', hex: '#2A2A2A' },
      ]);
    }
    setError(null);
  }, [productToEdit, isOpen]);

  if (!isOpen) return null;

  const toggleSize = (size: ClothingSize) => {
    if (selectedSizes.includes(size)) {
      if (selectedSizes.length === 1) return; // keep at least one size
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const handleAddColor = () => {
    if (!newColorName.trim()) return;
    setColors([...colors, { name: newColorName.trim(), hex: newColorHex }]);
    setNewColorName('');
  };

  const handleRemoveColor = (index: number) => {
    if (colors.length <= 1) return;
    setColors(colors.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Product name is required.');
      return;
    }
    if (price <= 0) {
      setError('Price must be greater than zero.');
      return;
    }
    if (!imageUrl.trim()) {
      setError('Product image is required.');
      return;
    }

    setIsSaving(true);
    setError(null);

    const productPayload: Product = {
      id: productToEdit ? productToEdit.id : `ss-${category}-${Date.now()}`,
      name: name.trim(),
      price: Number(price),
      originalPrice: originalPrice ? Number(originalPrice) : undefined,
      category,
      description: description.trim(),
      tagline: tagline.trim(),
      fabric: fabric.trim(),
      weightGsm: Number(weightGsm) || 480,
      fit: fit.trim(),
      color: colors[0]?.name || 'Pitch Black',
      colors,
      sizes: selectedSizes,
      image: imageUrl.trim(),
      images: [imageUrl.trim()],
      additionalImages: [imageUrl.trim()],
      stock: Number(stock) || 0,
      featured,
      isNew: category === 'new-arrivals' || featured,
      isBestSeller: category === 'best-sellers' || featured,
      inStock: (Number(stock) || 0) > 0,
      details: productToEdit?.details || [
        'Custom 480 GSM loopback organic french terry',
        'Minimalist S.S chest embroidery in dense tonal stitch',
        'Pre-shrunk cold wash formulation for permanent zero-shrink fit',
      ],
      created_at: productToEdit?.created_at || new Date().toISOString(),
    };

    try {
      await onSave(productPayload);
      onClose();
    } catch (err: any) {
      setError(err?.message || 'Failed to save product.');
    } finally {
      setIsSaving(false);
    }
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
          className="relative w-full max-w-2xl transform overflow-hidden rounded-3xl bg-[#A67B5B] p-6 sm:p-8 text-left shadow-2xl transition-all border border-white/30 text-[#111111]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/20 mb-6">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#2B2B2B] uppercase">
                {isEditing ? 'CATALOG MODIFICATION' : 'NEW GARMENT ENTRY'}
              </div>
              <h2 className="font-display font-medium text-xl sm:text-2xl text-[#111111]">
                {isEditing ? `Edit: ${name || 'Garment'}` : 'Add Garment to Catalog'}
              </h2>
            </div>
            
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/90 border border-white/30 flex items-center justify-center text-[#111111] hover:bg-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {error && (
            <div className="p-3 mb-5 bg-red-100 border border-red-200 rounded-xl text-xs font-sans text-red-800">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Product Name */}
            <div>
              <label className="block text-xs font-mono uppercase text-stone-800 font-semibold mb-1">
                Garment Name *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. S.S Heavyweight Boxy Hoodie"
                required
                className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-sans text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
              />
            </div>

            {/* Price & Stock & Category Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-stone-800 font-semibold mb-1">
                  Price ($ USD) *
                </label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  required
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-mono text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-stone-800 font-semibold mb-1">
                  Original Price ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  placeholder="Optional"
                  value={originalPrice !== undefined ? originalPrice : ''}
                  onChange={(e) => setOriginalPrice(e.target.value ? Number(e.target.value) : undefined)}
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-mono text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-stone-800 font-semibold mb-1">
                  Inventory Stock *
                </label>
                <input
                  type="number"
                  min="0"
                  value={stock}
                  onChange={(e) => setStock(Number(e.target.value))}
                  required
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-mono text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
                />
              </div>
            </div>

            {/* Category & Featured */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div>
                <label className="block text-xs font-mono uppercase text-stone-800 font-semibold mb-1">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as ProductCategory)}
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-sans text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
                >
                  {CATEGORY_OPTIONS.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-5 sm:pt-4">
                <label className="flex items-center gap-3 p-2.5 bg-white rounded-xl border border-stone-300 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                    className="w-4 h-4 rounded text-stone-950 focus:ring-stone-900 border-stone-400"
                  />
                  <div>
                    <div className="text-xs font-mono uppercase font-semibold text-stone-900 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Featured Atelier Piece</span>
                    </div>
                    <div className="text-[10px] text-stone-500 font-sans">
                      Promote on home showcase & flagship banners
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Image Selection */}
            <div>
              <label className="block text-xs font-mono uppercase text-stone-800 font-semibold mb-1">
                Product Image URL *
              </label>
              
              <div className="flex gap-3 mb-2">
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://... or /src/assets/images/..."
                  required
                  className="flex-1 px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-mono text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
                />

                {/* Preview Box */}
                <div className="w-11 h-11 rounded-xl bg-white border border-stone-300 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="Preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <ImageIcon className="w-5 h-5 text-stone-300" />
                  )}
                </div>
              </div>

              {/* Quick Preset Selector */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-[11px] font-mono text-stone-500 self-center">Brand Presets:</span>
                {PRESET_IMAGES.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => setImageUrl(preset.url)}
                    className={`px-2 py-1 rounded-md text-[10px] font-mono border transition-colors ${
                      imageUrl === preset.url
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-mono uppercase text-stone-800 font-semibold mb-1">
                Description & Textile Story
              </label>
              <textarea
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Fabric characteristics, drape, tailoring details..."
                className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-sans text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
              />
            </div>

            {/* Sizes Selection */}
            <div>
              <label className="block text-xs font-mono uppercase text-stone-800 font-semibold mb-1">
                Available Sizes
              </label>
              <div className="flex flex-wrap gap-2">
                {ALL_SIZES.map((sz) => {
                  const isSelected = selectedSizes.includes(sz);
                  return (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => toggleSize(sz)}
                      className={`w-11 h-9 rounded-lg font-mono text-xs font-bold transition-all border ${
                        isSelected
                          ? 'bg-stone-900 text-white border-stone-900 shadow-2xs'
                          : 'bg-white text-stone-400 border-stone-200 hover:border-stone-400'
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Colors */}
            <div>
              <label className="block text-xs font-mono uppercase text-stone-800 font-semibold mb-1">
                Available Colors ({colors.length})
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {colors.map((c, idx) => (
                  <div 
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-lg border border-stone-200 text-xs font-sans"
                  >
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-stone-300"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="font-medium text-stone-800">{c.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveColor(idx)}
                      disabled={colors.length <= 1}
                      className="text-stone-400 hover:text-red-600 disabled:opacity-30 ml-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Color Sub-form */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Color name (e.g. Raw Umber)"
                  value={newColorName}
                  onChange={(e) => setNewColorName(e.target.value)}
                  className="flex-1 px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs font-sans text-stone-900"
                />
                <input
                  type="color"
                  value={newColorHex}
                  onChange={(e) => setNewColorHex(e.target.value)}
                  className="w-8 h-8 rounded-lg border border-stone-300 cursor-pointer p-0.5"
                  title="Pick color hex"
                />
                <button
                  type="button"
                  onClick={handleAddColor}
                  className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-mono flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Color</span>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-200">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 bg-white hover:bg-stone-100 text-stone-800 rounded-xl text-xs font-mono uppercase font-semibold border border-stone-300 transition-colors"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSaving}
                className="px-6 py-2.5 bg-stone-950 hover:bg-stone-900 text-white rounded-xl text-xs font-mono uppercase font-bold transition-all shadow-sm flex items-center gap-1.5 disabled:opacity-50"
              >
                <Check className="w-4 h-4" />
                <span>{isSaving ? 'Saving...' : isEditing ? 'Update Garment' : 'Create Garment'}</span>
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};
