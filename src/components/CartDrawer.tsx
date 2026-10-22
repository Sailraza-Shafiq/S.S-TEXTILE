import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  onViewCartPage: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onViewCartPage,
}) => {
  if (!isOpen) return null;

  const rawSubtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = rawSubtotal >= 200 || items.length === 0 ? 0 : 15;
  const total = rawSubtotal + shipping;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#A67B5B] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 border-l border-white/20 text-[#111111]">
          
          {/* Header */}
          <div className="p-6 border-b border-white/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-display font-medium text-xl tracking-tight text-[#111111]">
                Shopping Cart
              </span>
              <span className="text-xs font-mono font-medium px-2 py-0.5 bg-[#111111] text-white rounded-full">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#111111] hover:bg-white/25 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* COD Badge */}
          <div className="bg-[rgba(255,255,255,0.15)] px-6 py-2.5 border-b border-white/20 text-xs font-mono flex items-center justify-between text-[#2B2B2B]">
            <span>Payment Method:</span>
            <span className="font-medium text-[#111111] uppercase">Cash on Delivery</span>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-white/40 border border-white/30 flex items-center justify-center text-[#111111] mb-4">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="font-display font-medium text-[#111111] text-xl mb-1">
                  Your bag is empty
                </h3>
                <p className="text-xs text-[#2B2B2B] font-sans max-w-xs mb-6">
                  Select your desired size and silhouette to begin.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#111111] hover:bg-black text-white text-xs font-medium tracking-wider uppercase rounded-xl transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3.5 bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-2xl border border-white/25 shadow-2xs"
                >
                  {/* Item Image */}
                  <div className="w-20 h-20 bg-white/20 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-1.5 border border-white/25">
                    <img
                      src={item.image || item.product.image}
                      alt={`${item.product.name} in ${item.color}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>

                  {/* Item Specs */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-display font-medium text-xs text-[#111111] line-clamp-1 pr-2">
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#2B2B2B]/60 hover:text-red-600 transition-colors p-0.5"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-[11px] font-mono text-[#2B2B2B] mt-1">
                        <span>Size: <strong className="text-[#111111]">{item.size}</strong></span>
                        <span>·</span>
                        <span>Color: <strong className="text-[#111111]">{item.color}</strong></span>
                      </div>

                      <div className="text-[11px] font-mono text-[#2B2B2B] mt-0.5">
                        Unit: ${item.product.price}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20">
                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 border border-white/30 rounded-lg px-2 py-0.5 bg-white/50">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="text-[#111111] hover:text-black p-0.5"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono font-medium tabular-nums w-4 text-center text-[#111111]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="text-[#111111] hover:text-black p-0.5"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Line Subtotal */}
                      <span className="font-display font-medium text-xs text-[#111111] tabular-nums">
                        ${item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {items.length > 0 && (
            <div className="p-6 bg-[#A67B5B] border-t border-white/20 space-y-4">
              {/* Subtotal breakdowns */}
              <div className="space-y-1.5 text-xs text-[#2B2B2B] font-mono">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#111111] tabular-nums">
                    ${rawSubtotal}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-[#111111]">
                    {shipping === 0 ? 'Complimentary' : `$${shipping}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-white/20 flex justify-between text-sm font-display font-medium text-[#111111]">
                  <span>Total Amount</span>
                  <span className="tabular-nums">
                    ${total}
                  </span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={onCheckout}
                  className="w-full py-4 px-6 bg-[#111111] hover:bg-black text-white rounded-xl text-xs font-medium tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <span>Checkout (Cash on Delivery)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onViewCartPage}
                    className="flex-1 py-2.5 px-3 bg-[rgba(255,255,255,0.15)] hover:bg-white/25 text-[#111111] text-xs font-mono uppercase rounded-xl transition-colors text-center border border-white/25"
                  >
                    View Full Cart
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-2.5 px-3 bg-[rgba(255,255,255,0.15)] hover:bg-white/25 text-[#111111] text-xs font-mono uppercase rounded-xl transition-colors text-center border border-white/25"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#2B2B2B] font-mono uppercase text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#111111]" />
                <span>Pay upon delivery · Cash on Delivery</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
