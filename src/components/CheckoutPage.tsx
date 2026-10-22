import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Package, 
  Truck, 
  Phone, 
  MapPin, 
  User, 
  Mail, 
  DollarSign,
  Clock,
  Database
} from 'lucide-react';
import { CartItem, Order, OrderCustomerInfo } from '../types';
import { createOrder } from '../services/orderService';

interface CheckoutPageProps {
  items: CartItem[];
  onBackToCart: () => void;
  onContinueShopping: () => void;
  onOrderCompleted: (order: Order) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  items,
  onBackToCart,
  onContinueShopping,
  onOrderCompleted,
}) => {
  const [formData, setFormData] = useState<OrderCustomerInfo>({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    notes: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedOrder, setSubmittedOrder] = useState<Order | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderStorageSource, setOrderStorageSource] = useState<'supabase' | 'fallback'>('fallback');

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal >= 200 || items.length === 0 ? 0 : 15;
  const total = subtotal + shipping;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.customerName.trim()) {
      errs.customerName = 'Customer name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for courier delivery';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.address.trim()) {
      errs.address = 'Complete delivery address is required';
    }
    if (!formData.city.trim()) {
      errs.city = 'City is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Create order in Supabase with initial status "Pending"
      const result = await createOrder({
        customer: formData,
        items,
        subtotal,
        shipping,
        total,
      });

      setOrderStorageSource(result.source);
      setSubmittedOrder(result.order);
      onOrderCompleted(result.order);
    } catch (err) {
      console.error('Order creation error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // If order was placed, display the complete invoice & confirmation
  if (submittedOrder) {
    return (
      <div className="py-12 sm:py-20 animate-in fade-in duration-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/25 shadow-xl text-center text-[#111111]">
            {/* Success Icon */}
            <div className="w-16 h-16 rounded-full bg-[#111111] text-white flex items-center justify-center mx-auto mb-4 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>

            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xs font-mono tracking-[0.25em] text-[#2B2B2B] uppercase">
                ORDER CONFIRMED · CASH ON DELIVERY
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider bg-white/40 text-[#111111] border border-white/40">
                <Clock className="w-3 h-3" />
                Status: {submittedOrder.status}
              </span>
            </div>
            
            <h1 className="font-display font-medium text-3xl sm:text-4xl text-[#111111] mb-2">
              Order #{submittedOrder.orderId}
            </h1>

            <p className="text-sm text-[#2B2B2B] max-w-lg mx-auto mb-6 font-sans">
              Thank you, <strong className="font-medium text-[#111111]">{submittedOrder.customer.customerName}</strong>. Your order has been registered in the S.S atelier system with initial status <strong>"Pending"</strong>. Our courier will contact you at <strong className="font-mono text-[#111111]">{submittedOrder.customer.phone}</strong> prior to delivery.
            </p>

            {/* Storage source indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/40 rounded-full border border-white/30 text-[11px] font-mono text-[#2B2B2B] mb-8">
              <Database className="w-3.5 h-3.5 text-[#111111]" />
              <span>
                {orderStorageSource === 'supabase'
                  ? 'Record synchronised with Supabase database (orders table)'
                  : 'Recorded securely in atelier store'}
              </span>
            </div>

            {/* Order Items Breakdown */}
            <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-md rounded-2xl border border-white/25 p-6 text-left mb-6 space-y-4 text-[#111111]">
              <h3 className="font-display font-medium text-sm text-[#111111] border-b border-white/20 pb-3 uppercase tracking-wider">
                Garment Allocation ({submittedOrder.items.reduce((s, i) => s + i.quantity, 0)} Items)
              </h3>

              <div className="divide-y divide-white/15">
                {submittedOrder.items.map((item) => (
                  <div key={item.id} className="py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-white/20 border border-white/25 p-1 flex items-center justify-center shrink-0">
                        <img
                          src={item.image || item.product.image}
                          alt={`${item.product.name} in ${item.color}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain mix-blend-multiply"
                        />
                      </div>
                      <div>
                        <div className="font-display font-medium text-xs text-[#111111] line-clamp-1">
                          {item.product.name}
                        </div>
                        <div className="text-[11px] font-mono text-[#2B2B2B]">
                          Size: {item.size} · Color: {item.color} · Qty: {item.quantity}
                        </div>
                      </div>
                    </div>
                    <div className="font-display font-medium text-xs text-[#111111] tabular-nums">
                      ${item.product.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Details */}
              <div className="pt-4 border-t border-white/20 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#2B2B2B]">
                <div>
                  <span className="text-[#2B2B2B]/70 block text-[10px] uppercase">Recipient</span>
                  <span className="font-semibold text-[#111111]">{submittedOrder.customer.customerName}</span>
                </div>
                <div>
                  <span className="text-[#2B2B2B]/70 block text-[10px] uppercase">Contact Phone</span>
                  <span className="font-semibold text-[#111111]">{submittedOrder.customer.phone}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-[#2B2B2B]/70 block text-[10px] uppercase">Destination Address</span>
                  <span className="font-semibold text-[#111111]">
                    {submittedOrder.customer.address}, {submittedOrder.customer.city}
                  </span>
                </div>
              </div>

              {/* Financial Totals */}
              <div className="pt-4 border-t border-white/20 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-[#2B2B2B]">
                  <span>Subtotal</span>
                  <span className="text-[#111111] font-medium tabular-nums">${submittedOrder.subtotal}</span>
                </div>
                <div className="flex justify-between text-[#2B2B2B]">
                  <span>Delivery</span>
                  <span className="text-[#111111] font-medium">
                    {submittedOrder.shipping === 0 ? 'Complimentary' : `$${submittedOrder.shipping}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-white/20 flex justify-between text-base font-display font-medium text-[#111111]">
                  <span>Total Due (Pay Cash on Delivery)</span>
                  <span className="tabular-nums">${submittedOrder.total}</span>
                </div>
              </div>
            </div>

            {/* COD Instructions Alert */}
            <div className="p-4 bg-[#111111] text-white rounded-2xl text-xs font-mono text-left mb-8 flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="block font-medium text-white uppercase">Cash on Delivery Notice:</strong>
                <span className="text-stone-300">Please have exactly ${submittedOrder.total} in cash ready for the courier when your package arrives.</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onContinueShopping}
              className="px-8 py-3.5 bg-[#111111] hover:bg-black text-white rounded-xl text-xs font-medium tracking-wider uppercase transition-all shadow-sm"
            >
              Continue Shopping S.S
            </button>
          </div>

        </div>
      </div>
    );
  }

  // If bag is empty and no order submitted
  if (items.length === 0) {
    return (
      <div className="py-20 animate-in fade-in duration-300">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-3xl p-10 border border-white/25 shadow-md text-[#111111]">
            <div className="w-16 h-16 rounded-full bg-white/40 border border-white/30 flex items-center justify-center text-[#111111] mx-auto mb-4">
              <Package className="w-7 h-7" />
            </div>
            <h2 className="font-display font-medium text-2xl text-[#111111] mb-2">
              Your bag is currently empty
            </h2>
            <p className="text-xs text-[#2B2B2B] font-sans mb-6">
              Add your desired garments and silhouettes before proceeding to Cash on Delivery checkout.
            </p>
            <button
              type="button"
              onClick={onContinueShopping}
              className="w-full py-3.5 bg-[#111111] hover:bg-black text-white rounded-xl text-xs font-medium tracking-wider uppercase transition-all shadow-sm"
            >
              Browse Catalog
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Normal Checkout Form View
  return (
    <div className="py-10 sm:py-16 animate-in fade-in duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-white/20 mb-8">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-[#2B2B2B] mb-1">
              SECURE CHECKOUT · STEP 02 OF 02
            </div>
            <h1 className="font-display font-medium text-3xl sm:text-4xl text-[#111111]">
              Delivery & Order Placement
            </h1>
          </div>

          <button
            type="button"
            onClick={onBackToCart}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[rgba(255,255,255,0.15)] hover:bg-white/25 text-[#111111] border border-white/25 text-xs font-mono tracking-wider uppercase transition-colors shadow-2xs group backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Return to Bag</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Customer Information Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/25 shadow-md">
              
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#2B2B2B] uppercase mb-4">
                <Truck className="w-4 h-4 text-[#111111]" />
                <span>CUSTOMER DELIVERY DETAILS</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Customer Name */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-medium">
                    Customer Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Liam Vance"
                      value={formData.customerName}
                      onChange={(e) => {
                        setFormData({ ...formData, customerName: e.target.value });
                        if (errors.customerName) setErrors({ ...errors, customerName: '' });
                      }}
                      className={`w-full px-4 py-3 bg-white border rounded-xl text-xs sm:text-sm text-[#111111] placeholder:text-[#2B2B2B]/60 focus:outline-hidden focus:ring-2 focus:ring-[#111111] font-sans ${
                        errors.customerName ? 'border-red-400 bg-red-50/20' : 'border-white/40'
                      }`}
                    />
                  </div>
                  {errors.customerName && (
                    <p className="text-[11px] text-red-600 font-mono mt-1">{errors.customerName}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-medium">
                    Phone Number (for Courier & COD Delivery) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="e.g. +1 (555) 234-5678"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full px-4 py-3 bg-white border rounded-xl text-xs sm:text-sm text-[#111111] placeholder:text-[#2B2B2B]/60 focus:outline-hidden focus:ring-2 focus:ring-[#111111] font-sans ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-stone-300'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 font-mono mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Email (Optional) */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-mono uppercase text-[#111111] font-medium">
                      Email Address
                    </label>
                    <span className="text-[11px] font-mono text-[#2B2B2B]">(Optional for receipt & tracking)</span>
                  </div>
                  <input
                    type="email"
                    placeholder="e.g. liam@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-white/40 rounded-xl text-xs sm:text-sm text-[#111111] placeholder:text-[#2B2B2B]/60 focus:outline-hidden focus:ring-2 focus:ring-[#111111] font-sans"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-medium">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. New York, London, Toronto, Tokyo"
                    value={formData.city}
                    onChange={(e) => {
                      setFormData({ ...formData, city: e.target.value });
                      if (errors.city) setErrors({ ...errors, city: '' });
                    }}
                    className={`w-full px-4 py-3 bg-white border rounded-xl text-xs sm:text-sm text-[#111111] placeholder:text-[#2B2B2B]/60 focus:outline-hidden focus:ring-2 focus:ring-[#111111] font-sans ${
                      errors.city ? 'border-red-400 bg-red-50/20' : 'border-white/40'
                    }`}
                  />
                  {errors.city && (
                    <p className="text-[11px] text-red-600 font-mono mt-1">{errors.city}</p>
                  )}
                </div>

                {/* Complete Delivery Address */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-medium">
                    Complete Delivery Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="House/Apartment #, Street address, Landmark, Postal code"
                    value={formData.address}
                    onChange={(e) => {
                      setFormData({ ...formData, address: e.target.value });
                      if (errors.address) setErrors({ ...errors, address: '' });
                    }}
                    className={`w-full px-4 py-3 bg-white border rounded-xl text-xs sm:text-sm text-[#111111] placeholder:text-[#2B2B2B]/60 focus:outline-hidden focus:ring-2 focus:ring-[#111111] font-sans ${
                      errors.address ? 'border-red-400 bg-red-50/20' : 'border-white/40'
                    }`}
                  />
                  {errors.address && (
                    <p className="text-[11px] text-red-600 font-mono mt-1">{errors.address}</p>
                  )}
                </div>

                {/* Delivery Notes (Optional) */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#2B2B2B] mb-1">
                    Delivery Instructions <span className="text-[#2B2B2B]/70 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ring apartment buzzer #4B, call before arriving"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-white/40 rounded-xl text-xs text-[#111111] placeholder:text-[#2B2B2B]/60 focus:outline-hidden focus:ring-2 focus:ring-[#111111] font-sans"
                  />
                </div>

                {/* Payment Option: Simple Cash on Delivery */}
                <div className="pt-4 border-t border-white/20">
                  <div className="text-xs font-mono font-medium text-[#111111] uppercase mb-2">
                    Payment Method Selected
                  </div>
                  <div className="p-4 bg-white rounded-2xl border-2 border-[#111111] flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center font-medium text-xs">
                        $
                      </div>
                      <div>
                        <div className="font-display font-medium text-xs sm:text-sm text-[#111111]">
                          Cash on Delivery (COD)
                        </div>
                        <div className="text-[11px] text-[#2B2B2B] font-mono">
                          Pay cash to the courier when your order is delivered.
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 font-medium">
                      Guaranteed Active
                    </span>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 text-white rounded-xl text-xs font-medium tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 mt-6 cursor-pointer ${
                    isSubmitting
                      ? 'bg-stone-800 opacity-80 cursor-wait'
                      : 'bg-[#111111] hover:bg-black'
                  }`}
                >
                  {isSubmitting ? (
                    <span>Registering Order to Atelier System...</span>
                  ) : (
                    <span>Place Order (Cash on Delivery) · ${total}</span>
                  )}
                </button>

              </form>
            </div>
          </div>

          {/* Right: Order Items Review & Breakdown (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/25 shadow-md space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/20 pb-3">
                <h3 className="font-display font-medium text-lg text-[#111111]">
                  Order Items ({items.reduce((s, i) => s + i.quantity, 0)})
                </h3>
                <button
                  type="button"
                  onClick={onBackToCart}
                  className="text-xs font-mono text-[#2B2B2B] hover:text-[#111111] underline"
                >
                  Edit Cart
                </button>
              </div>

              {/* Items List */}
              <div className="divide-y divide-white/15 max-h-72 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.id} className="py-3 flex items-center gap-3">
                    <div className="w-14 h-14 bg-white/20 rounded-xl border border-white/25 p-1 flex items-center justify-center shrink-0">
                      <img
                        src={item.image || item.product.image}
                        alt={`${item.product.name} in ${item.color}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display font-medium text-xs text-[#111111] truncate">
                        {item.product.name}
                      </div>
                      <div className="text-[11px] font-mono text-[#2B2B2B] mt-0.5">
                        {item.size} · {item.color} · Qty: {item.quantity}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-display font-medium text-xs text-[#111111] tabular-nums">
                        ${item.product.price * item.quantity}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Financial Calculation Breakdown */}
              <div className="pt-4 border-t border-white/20 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-[#2B2B2B]">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#111111] tabular-nums">${subtotal}</span>
                </div>
                <div className="flex justify-between text-[#2B2B2B]">
                  <span>Delivery Charge</span>
                  <span className="font-medium text-[#111111]">
                    {shipping === 0 ? 'Complimentary' : `$${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-[#2B2B2B]">
                  <span>Payment Terms</span>
                  <span className="font-medium text-[#111111]">Cash on Delivery</span>
                </div>
                <div className="pt-3 border-t border-white/20 flex justify-between text-base font-display font-medium text-[#111111]">
                  <span>Total Due</span>
                  <span className="tabular-nums">${total}</span>
                </div>
              </div>

              {/* Guarantee */}
              <div className="p-4 bg-white rounded-2xl border border-white/30 flex items-start gap-3 text-xs text-[#2B2B2B]">
                <ShieldCheck className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                <p>
                  Zero online payment required today. Pay the exact balance of <strong>${total}</strong> in cash upon receipt.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
