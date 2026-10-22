import React from 'react';
import { Trash2, Plus, Minus, ArrowLeft, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartPageProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onContinueShopping: () => void;
  onProceedToCheckout: () => void;
}

export const CartPage: React.FC<CartPageProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onContinueShopping,
  onProceedToCheckout,
}) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal >= 200 || items.length === 0 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <div className="py-10 sm:py-16 animate-in fade-in duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/20 mb-8">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-[#2B2B2B] mb-1">
              BAG SUMMARY · S.S ATELIER
            </div>
            <h1 className="font-display font-medium text-3xl sm:text-4xl text-[#111111]">
              Shopping Cart
            </h1>
          </div>

          <button
            type="button"
            onClick={onContinueShopping}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[rgba(255,255,255,0.15)] hover:bg-white/25 text-[#111111] border border-white/25 text-xs font-mono tracking-wider uppercase transition-colors self-start shadow-2xs group backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Continue Shopping</span>
          </button>
        </div>

        {items.length === 0 ? (
          /* Empty Bag State */
          <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-3xl p-12 text-center border border-white/25 shadow-sm max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-white/40 border border-white/30 flex items-center justify-center text-[#111111] mx-auto mb-4">
              <ShoppingBag className="w-7 h-7" />
            </div>
            <h2 className="font-display font-medium text-2xl text-[#111111] mb-2">
              Your bag is currently empty
            </h2>
            <p className="text-xs text-[#2B2B2B] mb-6 font-sans">
              Explore our modern streetwear essentials to discover custom 280–500 GSM heavyweight garments.
            </p>
            <button
              type="button"
              onClick={onContinueShopping}
              className="px-6 py-3 bg-[#111111] hover:bg-black text-white rounded-xl text-xs font-medium tracking-wider uppercase transition-all shadow-sm"
            >
              Explore Collection
            </button>
          </div>
        ) : (
          /* Cart Content Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Items List (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-4">
              {items.map((item) => {
                const itemSubtotal = item.product.price * item.quantity;
                return (
                  <div
                    key={item.id}
                    className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/25 shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center gap-4 transition-all"
                  >
                    {/* Product Image on Card Surface */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white/20 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2 border border-white/25 mx-auto sm:mx-0">
                      <img
                        src={item.image || item.product.image}
                        alt={`${item.product.name} in ${item.color}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </div>

                    {/* Details Column */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-display font-medium text-base text-[#111111] line-clamp-2">
                            {item.product.name}
                          </h3>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.id)}
                            className="text-[#2B2B2B]/60 hover:text-red-600 p-1 transition-colors"
                            title="Remove item"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Selected Size & Color */}
                        <div className="flex items-center gap-3 text-xs font-mono text-[#2B2B2B] mt-1">
                          <span>Size: <strong className="text-[#111111] font-semibold">{item.size}</strong></span>
                          <span>·</span>
                          <span>Color: <strong className="text-[#111111] font-semibold">{item.color}</strong></span>
                        </div>

                        {/* Unit Price */}
                        <div className="text-xs font-mono text-[#2B2B2B] mt-1">
                          Unit Price: <span className="text-[#111111] font-medium tabular-nums">${item.product.price}</span>
                        </div>
                      </div>

                      {/* Quantity Stepper & Subtotal */}
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/20">
                        {/* Stepper */}
                        <div className="flex items-center border border-white/30 rounded-lg bg-white/50 px-2 py-1 shadow-2xs">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="text-[#111111] hover:text-black p-1"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-xs font-mono font-bold tabular-nums text-[#111111]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="text-[#111111] hover:text-black p-1"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Line Subtotal */}
                        <div className="text-right">
                          <span className="text-[10px] font-mono text-[#2B2B2B] block uppercase">Subtotal</span>
                          <span className="font-display font-medium text-base text-[#111111] tabular-nums">
                            ${itemSubtotal}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary & Checkout Card (5 cols on lg) */}
            <div className="lg:col-span-5">
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/25 shadow-md space-y-6">
                
                <h2 className="font-display font-medium text-xl text-[#111111] border-b border-white/20 pb-4">
                  Order Summary
                </h2>

                {/* Calculation Rows */}
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between text-[#2B2B2B]">
                    <span>Total Garment Count</span>
                    <span className="font-semibold text-[#111111]">
                      {items.reduce((s, i) => s + i.quantity, 0)} items
                    </span>
                  </div>

                  <div className="flex justify-between text-[#2B2B2B]">
                    <span>Cart Subtotal</span>
                    <span className="font-semibold text-[#111111] tabular-nums">
                      ${subtotal}
                    </span>
                  </div>

                  <div className="flex justify-between text-[#2B2B2B]">
                    <span>Delivery</span>
                    <span className="font-semibold text-[#111111]">
                      {shipping === 0 ? 'Complimentary' : `$${shipping}`}
                    </span>
                  </div>

                  <div className="flex justify-between text-[#2B2B2B]">
                    <span>Payment Method</span>
                    <span className="font-semibold text-[#111111]">
                      Cash on Delivery (COD)
                    </span>
                  </div>

                  <div className="pt-4 border-t border-white/20 flex justify-between text-base font-display font-medium text-[#111111]">
                    <span>Total Amount</span>
                    <span className="tabular-nums">
                      ${total}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    onClick={onProceedToCheckout}
                    className="w-full py-4 px-6 bg-[#111111] hover:bg-black text-white rounded-xl text-xs font-medium tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={onContinueShopping}
                    className="w-full py-3 px-4 bg-[rgba(255,255,255,0.15)] hover:bg-white/25 text-[#111111] border border-white/25 rounded-xl text-xs font-mono uppercase transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>

                {/* Cash on Delivery Notice */}
                <div className="pt-4 border-t border-white/20 flex items-center gap-2.5 text-[11px] font-mono text-[#2B2B2B]">
                  <ShieldCheck className="w-4 h-4 text-[#111111] shrink-0" />
                  <span>Pay upon arrival via Cash on Delivery. Inspect before you pay.</span>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
