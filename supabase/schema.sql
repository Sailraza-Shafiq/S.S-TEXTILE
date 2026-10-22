-- ====================================================================
-- S.S CLOTHING ATELIER — SUPABASE DATABASE SCHEMA
-- ====================================================================
-- Clean database structure for:
-- 1. products
-- 2. orders
-- 3. order_items (relational structure)
-- 4. categories
-- ====================================================================

-- Enable UUID extension if not already enabled
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
-- Fields requested:
-- - id
-- - name
-- - description
-- - category
-- - price
-- - images
-- - sizes
-- - colors
-- - stock
-- - featured
-- - created_at
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

-- Index on category & featured for instant lookups
CREATE INDEX IF NOT EXISTS idx_products_category ON public.products(category);
CREATE INDEX IF NOT EXISTS idx_products_featured ON public.products(featured);

-- 3. ORDERS TABLE
-- Fields requested:
-- - id
-- - customer_name
-- - phone
-- - email
-- - address
-- - city
-- - items
-- - total_amount
-- - status (Pending, Confirmed, Shipped, Delivered, Cancelled)
-- - created_at
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

CREATE INDEX IF NOT EXISTS idx_orders_status ON public.orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON public.orders(created_at DESC);

-- 4. ORDER_ITEMS TABLE (Clean Relational Structure)
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

CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON public.order_items(order_id);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- Secure public client access without exposing secret/service_role keys
-- ====================================================================

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Categories: Anyone can read
CREATE POLICY "Allow public read on categories"
ON public.categories FOR SELECT
TO anon, authenticated
USING (true);

-- Products: Anyone can read products
CREATE POLICY "Allow public read on products"
ON public.products FOR SELECT
TO anon, authenticated
USING (true);

-- Products: Allow authenticated/anon insert & update for admin panel
CREATE POLICY "Allow write on products"
ON public.products FOR ALL
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- Orders: Anyone (including guest customers) can create an order
CREATE POLICY "Allow public insert on orders"
ON public.orders FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Orders: Anyone can view their order by ID or admin access
CREATE POLICY "Allow public select on orders"
ON public.orders FOR SELECT
TO anon, authenticated
USING (true);

-- Orders: Allow update of status (e.g. for Admin operations)
CREATE POLICY "Allow update on orders"
ON public.orders FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- Order Items: Anyone can insert order items
CREATE POLICY "Allow public insert on order_items"
ON public.order_items FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Order Items: Anyone can view order items
CREATE POLICY "Allow public select on order_items"
ON public.order_items FOR SELECT
TO anon, authenticated
USING (true);
