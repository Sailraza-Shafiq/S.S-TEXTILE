import React, { useState } from 'react';
import { X, CheckCircle2, Lock, ShieldCheck, ArrowRight, Package } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: (orderId: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
}) => {
  const [formData, setFormData] = useState({
    firstName: 'Alexander',
    lastName: 'Vance',
    email: 'alex.vance@example.com',
    address: '450 Mercer Street, Suite 8B',
    city: 'New York',
    state: 'NY',
    postalCode: '10013',
    country: 'United States',
    paymentMethod: 'card',
  });

  const [orderComplete, setOrderComplete] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = rawSubtotal >= 200 ? 0 : 15;
  const total = rawSubtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNumber = `SS-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedOrderId(orderNumber);
    setOrderComplete(true);
    onOrderSuccess(orderNumber);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/65 backdrop-blur-xs transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl transform overflow-hidden rounded-3xl bg-[#FAF8F4] p-6 sm:p-10 text-left shadow-2xl transition-all border border-stone-200"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-900"
          >
            <X className="w-4 h-4" />
          </button>

          {orderComplete ? (
            /* Order Confirmation View */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-stone-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>

              <div className="text-xs font-mono tracking-[0.25em] text-stone-500 uppercase mb-1">
                ORDER CONFIRMED
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-stone-900 mb-2">
                Order #{confirmedOrderId}
              </h2>
              <p className="text-sm text-stone-600 max-w-md mx-auto mb-8 font-sans">
                Thank you, {formData.firstName}. We are preparing your garment allocation. A confirmation receipt and courier tracking details have been dispatched to {formData.email}.
              </p>

              <div className="bg-white p-5 rounded-2xl border border-stone-200 max-w-md mx-auto mb-8 text-left text-xs font-mono space-y-2">
                <div className="flex justify-between border-b border-stone-100 pb-2 text-stone-500">
                  <span>DISPATCH TIMELINE</span>
                  <span className="text-stone-900 font-bold">24-48 HOURS</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2 text-stone-500">
                  <span>DELIVERY DESTINATION</span>
                  <span className="text-stone-900 font-semibold">{formData.city}, {formData.country}</span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>TOTAL PAID</span>
                  <span className="text-stone-900 font-bold text-sm tabular-nums">${total}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="px-8 py-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                Return to S.S Collection
              </button>
            </div>
          ) : (
            /* Checkout Form View */
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-stone-500 uppercase mb-2">
                <Lock className="w-3.5 h-3.5" />
                <span>ENCRYPTED ATELIER CHECKOUT</span>
              </div>

              <h2 className="font-display font-bold text-2xl text-stone-900 mb-6">
                Client Delivery Information
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-700 uppercase mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs focus:ring-1 focus:ring-stone-900 font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-stone-700 uppercase mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs focus:ring-1 focus:ring-stone-900 font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-700 uppercase mb-1">
                    Email for Shipment Tracking
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs focus:ring-1 focus:ring-stone-900 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-700 uppercase mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs focus:ring-1 focus:ring-stone-900 font-sans"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-stone-700 uppercase mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-stone-700 uppercase mb-1">
                      State / Region
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-stone-700 uppercase mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-sans"
                    />
                  </div>
                </div>

                {/* Payment Selection */}
                <div className="pt-4 border-t border-stone-200">
                  <label className="block text-xs font-mono text-stone-700 uppercase mb-2">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'card', label: 'Credit Card' },
                      { id: 'express', label: 'Apple Pay' },
                      { id: 'cod', label: 'COD (Delivery)' },
                    ].map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, paymentMethod: m.id })}
                        className={`py-2 px-3 rounded-xl border text-xs font-mono transition-all text-center ${
                          formData.paymentMethod === m.id
                            ? 'bg-stone-900 text-white border-stone-900'
                            : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Total breakdown */}
                <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1 text-xs font-mono">
                  <div className="flex justify-between text-stone-600">
                    <span>Items ({items.length})</span>
                    <span>${rawSubtotal}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Express Carbon-Neutral Delivery</span>
                    <span>{shipping === 0 ? 'Complimentary' : `$${shipping}`}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-stone-900 pt-1 border-t border-stone-100">
                    <span>Total Due</span>
                    <span className="tabular-nums">${total}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-stone-950 hover:bg-stone-900 text-white rounded-xl text-xs font-semibold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 mt-4"
                >
                  <span>Authorize & Place Order — ${total}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
