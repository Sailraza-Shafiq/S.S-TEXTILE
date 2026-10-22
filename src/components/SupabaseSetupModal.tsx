import React, { useState } from 'react';
import { 
  X, 
  Database, 
  CheckCircle2, 
  Copy, 
  Check, 
  RefreshCw, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles,
  Server,
  Layers,
  ArrowRight
} from 'lucide-react';
import { 
  isSupabaseConfigured, 
  SUPABASE_URL, 
  saveSupabaseCredentials 
} from '../lib/supabase';
import { seedProductsToSupabase } from '../services/productService';

interface SupabaseSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRefreshProducts: () => void;
  productCount: number;
  dataSource: 'supabase' | 'fallback';
}

export const SupabaseSetupModal: React.FC<SupabaseSetupModalProps> = ({
  isOpen,
  onClose,
  onRefreshProducts,
  productCount,
  dataSource,
}) => {
  const isConnected = isSupabaseConfigured() && dataSource === 'supabase';

  const [inputUrl, setInputUrl] = useState(SUPABASE_URL);
  const [inputKey, setInputKey] = useState('');
  const [copiedSql, setCopiedSql] = useState(false);
  const [isSeeding, setIsSeeding] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);

  if (!isOpen) return null;

  const handleSaveCredentials = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      saveSupabaseCredentials(inputUrl, inputKey);
      setStatusMessage({
        text: 'Credentials updated. Refreshing database connection...',
        type: 'success',
      });
      setTimeout(() => {
        onRefreshProducts();
      }, 500);
    } catch (err: any) {
      setStatusMessage({
        text: err?.message || 'Failed to save configuration',
        type: 'error',
      });
    }
  };

  const handleCopySql = () => {
    const sql = `-- ====================================================================
-- S.S CLOTHING ATELIER — SUPABASE DATABASE SCHEMA
-- ====================================================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS public.categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS public.products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    tagline TEXT,
    category TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    original_price NUMERIC(10, 2),
    images TEXT[] NOT NULL DEFAULT '{}',
    sizes TEXT[] NOT NULL DEFAULT '{"XS", "S", "M", "L", "XL", "XXL"}',
    colors JSONB NOT NULL DEFAULT '[]'::jsonb,
    stock INTEGER NOT NULL DEFAULT 50,
    featured BOOLEAN NOT NULL DEFAULT false,
    fabric TEXT,
    weight_gsm INTEGER DEFAULT 480,
    fit TEXT DEFAULT 'Relaxed Boxy Fit',
    details TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. ORDERS TABLE
CREATE TABLE IF NOT EXISTS public.orders (
    id TEXT PRIMARY KEY,
    customer_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    notes TEXT,
    items JSONB NOT NULL,
    subtotal NUMERIC(10, 2) NOT NULL,
    shipping NUMERIC(10, 2) NOT NULL DEFAULT 0,
    total_amount NUMERIC(10, 2) NOT NULL,
    payment_method TEXT NOT NULL DEFAULT 'Cash on Delivery (COD)',
    status TEXT NOT NULL DEFAULT 'Pending' 
      CHECK (status IN ('Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. ORDER_ITEMS TABLE
CREATE TABLE IF NOT EXISTS public.order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id TEXT NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
    product_id TEXT NOT NULL,
    product_name TEXT NOT NULL,
    size TEXT NOT NULL,
    color TEXT NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price NUMERIC(10, 2) NOT NULL,
    subtotal NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ROW LEVEL SECURITY (RLS)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read on categories" ON public.categories FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Allow public read on products" ON public.products FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Allow write on products" ON public.products FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow public insert on orders" ON public.orders FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Allow public select on orders" ON public.orders FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Allow update on orders" ON public.orders FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow public insert on order_items" ON public.order_items FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Allow public select on order_items" ON public.order_items FOR SELECT TO anon, authenticated USING (true);`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(sql);
      setCopiedSql(true);
      setTimeout(() => setCopiedSql(false), 2500);
    }
  };

  const handleSeedProducts = async () => {
    setIsSeeding(true);
    setStatusMessage(null);
    try {
      const result = await seedProductsToSupabase();
      setStatusMessage({
        text: `Successfully seeded ${result.count} S.S garments to Supabase!`,
        type: 'success',
      });
      onRefreshProducts();
    } catch (err: any) {
      setStatusMessage({
        text: `Seeding error: ${err.message}. Ensure you have created the tables in Supabase SQL editor first.`,
        type: 'error',
      });
    } finally {
      setIsSeeding(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/65 backdrop-blur-xs transition-opacity" 
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div 
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl transform overflow-hidden rounded-3xl bg-[#A67B5B] p-6 sm:p-10 text-left shadow-2xl transition-all border border-white/30 text-[#111111]"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-white/90 border border-white/30 flex items-center justify-center text-[#111111] hover:bg-white"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-[#111111] text-white flex items-center justify-center shadow-xs">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#2B2B2B] uppercase">
                BACKEND ARCHITECTURE
              </div>
              <h2 className="font-display font-medium text-xl sm:text-2xl text-[#111111]">
                Supabase Database Integration
              </h2>
            </div>
          </div>

          <p className="text-xs text-[#2B2B2B] mb-6 font-sans">
            S.S uses Supabase for persistent product catalog management, relational order items, and cash-on-delivery order processing.
          </p>

          {/* Status Badge */}
          <div className={`p-4 rounded-2xl border mb-6 flex items-center justify-between ${
            isConnected
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : 'bg-amber-50 border-amber-200 text-amber-900'
          }`}>
            <div className="flex items-center gap-3">
              {isConnected ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              ) : (
                <Server className="w-5 h-5 text-amber-600 shrink-0" />
              )}
              <div>
                <div className="text-xs font-mono font-bold uppercase">
                  {isConnected ? 'Connected to Live Supabase Backend' : 'Active Local Atelier Store (Fallback Ready)'}
                </div>
                <div className="text-[11px] font-mono text-stone-600">
                  {isConnected 
                    ? `Live Supabase products loaded (${productCount} items)` 
                    : 'Serving high-fidelity local catalog. Connect your Supabase project below to sync.'}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onRefreshProducts}
              className="p-2 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-stone-900 shadow-2xs"
              title="Refresh connection"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Step 1: SQL Schema Copy */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 mb-6 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-stone-900">
                <Layers className="w-4 h-4 text-stone-700" />
                <span>Step 1: Run SQL Schema in Supabase</span>
              </div>
              <button
                type="button"
                onClick={handleCopySql}
                className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                {copiedSql ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy SQL Schema</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-[11px] text-stone-500 font-sans">
              Includes <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-800">products</code>, <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-800">orders</code> (with Pending status), <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-800">order_items</code>, and secure Row-Level Security (RLS) policies.
            </p>
          </div>

          {/* Step 2: Supabase Credentials Input */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 mb-6 shadow-2xs">
            <div className="text-xs font-mono font-bold uppercase text-stone-900 mb-2">
              Step 2: Client Public Credentials
            </div>
            <div className="text-[11px] font-mono text-stone-500 mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Public Anon Key Only — Service-role keys are never exposed.</span>
            </div>

            <form onSubmit={handleSaveCredentials} className="space-y-3">
              <div>
                <label className="block text-[11px] font-mono uppercase text-stone-700 mb-1">
                  VITE_SUPABASE_URL
                </label>
                <input
                  type="url"
                  placeholder="https://your-project-id.supabase.co"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs font-mono text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-stone-700 mb-1">
                  VITE_SUPABASE_ANON_KEY (Public Key)
                </label>
                <input
                  type="password"
                  placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                  value={inputKey}
                  onChange={(e) => setInputKey(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs font-mono text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  type="submit"
                  className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-mono uppercase font-semibold transition-colors"
                >
                  Save & Connect
                </button>

                {isSupabaseConfigured() && (
                  <button
                    type="button"
                    onClick={handleSeedProducts}
                    disabled={isSeeding}
                    className="px-4 py-2 bg-amber-900 hover:bg-amber-800 text-white rounded-xl text-xs font-mono uppercase font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isSeeding ? 'Seeding...' : 'Seed Products to Supabase'}</span>
                  </button>
                )}
              </div>
            </form>
          </div>

          {statusMessage && (
            <div className={`p-3 rounded-xl text-xs font-mono mb-4 ${
              statusMessage.type === 'success' 
                ? 'bg-emerald-100 text-emerald-900' 
                : 'bg-red-100 text-red-900'
            }`}>
              {statusMessage.text}
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-stone-200 text-xs font-mono text-stone-500">
            <span>S.S ATELIER CLOUD ENGINE</span>
            <button
              type="button"
              onClick={onClose}
              className="text-stone-800 hover:text-stone-950 underline"
            >
              Done / Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
