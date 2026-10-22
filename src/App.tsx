/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCollection } from './components/FeaturedCollection';
import { DedicatedCategorySection } from './components/DedicatedCategorySection';
import { WhySS } from './components/WhySS';
import { BrandStatement } from './components/BrandStatement';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CartPage } from './components/CartPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { ProductModal } from './components/ProductModal';
import { CheckoutPage } from './components/CheckoutPage';
import { ShopPage } from './components/ShopPage';
import { SearchModal } from './components/SearchModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { AboutModal } from './components/AboutModal';
import { ContactModal } from './components/ContactModal';
import { ToastContainer } from './components/Toast';
import { ProductCard } from './components/ProductCard';
import { SupabaseSetupModal } from './components/SupabaseSetupModal';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { PRODUCTS, CATEGORIES } from './data/products';
import { Product, CartItem, ToastMessage, ActivePage, ClothingSize, Order } from './types';
import { fetchProducts } from './services/productService';
import { isSupabaseConfigured } from './lib/supabase';
import { verifyAdminSession } from './services/adminAuthService';

const getInitialPage = (): ActivePage => {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path === '/admin' || path.startsWith('/admin') || hash === '#admin') {
      return 'admin';
    }
    if (path === '/shop' || hash === '#shop') return 'shop';
    if (path === '/cart' || hash === '#cart') return 'cart';
    if (path === '/checkout' || hash === '#checkout') return 'checkout';
  }
  return 'home';
};

export default function App() {
  // Navigation Page View state ('home' | 'shop' | 'product-detail' | 'cart' | 'checkout' | 'admin')
  const [activePage, setActivePage] = useState<ActivePage>(getInitialPage);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
  
  // Dynamic products loaded from Supabase backend (with high-fidelity fallback)
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<'supabase' | 'fallback'>('fallback');
  const [isSupabaseModalOpen, setIsSupabaseModalOpen] = useState<boolean>(false);

  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [shopCategoryFilter, setShopCategoryFilter] = useState<string>('all');

  // Verify session whenever navigating to admin
  useEffect(() => {
    if (activePage === 'admin') {
      verifyAdminSession().then((authenticated) => {
        setIsAdminAuthenticated(authenticated);
      });
    }
  }, [activePage]);

  // Listen to popstate and hashchange for clean back/forward and /admin navigation
  useEffect(() => {
    const handlePopState = () => {
      setActivePage(getInitialPage());
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Load products from Supabase
  const loadCatalog = async () => {
    setIsLoadingProducts(true);
    try {
      const res = await fetchProducts();
      if (res.products && res.products.length > 0) {
        setProducts(res.products);
        setDataSource(res.source);
      }
    } catch (e) {
      console.error('Failed to load products from database:', e);
    } finally {
      setIsLoadingProducts(false);
    }
  };

  useEffect(() => {
    loadCatalog();
  }, []);

  // Synchronize selected product with active product list
  useEffect(() => {
    if (products.length > 0) {
      setSelectedProduct((prev) => {
        const found = products.find((p) => p.id === prev.id);
        return found || products[0];
      });
    }
  }, [products]);

  // Persistent Shopping Cart (stored in localStorage)
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ss_clothing_cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Could not read cart from localStorage', e);
    }
    // Default initial luxury item for instant intuitive UX
    return [
      {
        id: `cart-initial-${Date.now()}`,
        product: PRODUCTS[0],
        size: 'L',
        color: PRODUCTS[0].colors[0]?.name || 'Pitch Black',
        quantity: 1,
      },
    ];
  });

  // Persistent Wishlist
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('ss_clothing_wishlist');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return new Set(parsed);
      }
    } catch (e) {
      console.warn('Could not read wishlist from localStorage', e);
    }
    return new Set(['ss-pants-tailored']);
  });

  // Save Cart to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem('ss_clothing_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
  }, [cart]);

  // Save Wishlist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem('ss_clothing_wishlist', JSON.stringify(Array.from(wishlistIds)));
    } catch (e) {
      console.warn('Could not save wishlist to localStorage', e);
    }
  }, [wishlistIds]);

  // Modals & Drawers state
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, message: string) => {
    const newToast: ToastMessage = {
      id: `toast-${Date.now()}-${Math.random()}`,
      title,
      message,
    };
    setToasts((prev) => [...prev, newToast]);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Scroll to top upon page navigation and sync browser history URL
  const navigateTo = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof window !== 'undefined') {
      const newPath = page === 'home' ? '/' : `/${page}`;
      if (window.location.pathname !== newPath) {
        window.history.pushState(null, '', newPath);
      }
    }
  };

  // Open Product Details Page
  const handleOpenProductDetails = (product: Product) => {
    setSelectedProduct(product);
    navigateTo('product-detail');
  };

  // Cart operations
  const handleAddToCart = (
    product: Product,
    size: ClothingSize = 'M',
    color: string = product.colors[0]?.name || product.color,
    quantity: number = 1,
    selectedImage?: string
  ) => {
    // Resolve the exact image corresponding to the selected color
    const matchedColorObj = product.colors?.find(
      (c) => c.name.toLowerCase() === color.toLowerCase()
    );
    const itemImage = selectedImage || matchedColorObj?.image || product.image;

    setCart((prev) => {
      // Differentiate by product.id, size, AND selected color so different colors are independent cart lines
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.size === size &&
          item.color.toLowerCase() === color.toLowerCase()
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
          image: next[existingIndex].image || itemImage,
        };
        return next;
      }

      return [
        ...prev,
        {
          id: `cart-${product.id}-${size}-${color.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}`,
          product,
          size,
          color,
          quantity,
          image: itemImage,
        },
      ];
    });

    addToast('Added to Cart', `${product.name} (${size} · ${color})`);
  };

  // Add multiple color variants (e.g. Black × 2, Brown × 1, Grey × 3) as independent cart lines
  const handleAddToCartMulti = (
    product: Product,
    size: ClothingSize = 'M',
    variants: Array<{ color: string; quantity: number; image?: string }>
  ) => {
    if (!variants || variants.length === 0) return;

    setCart((prev) => {
      const next = [...prev];
      for (const v of variants) {
        if (v.quantity <= 0) continue;
        const matchedColorObj = product.colors?.find(
          (c) => c.name.toLowerCase() === v.color.toLowerCase()
        );
        const itemImage = v.image || matchedColorObj?.image || product.image;

        const existingIndex = next.findIndex(
          (item) =>
            item.product.id === product.id &&
            item.size === size &&
            item.color.toLowerCase() === v.color.toLowerCase()
        );

        if (existingIndex > -1) {
          next[existingIndex] = {
            ...next[existingIndex],
            quantity: next[existingIndex].quantity + v.quantity,
            image: next[existingIndex].image || itemImage,
          };
        } else {
          next.push({
            id: `cart-${product.id}-${size}-${v.color.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
            product,
            size,
            color: v.color,
            quantity: v.quantity,
            image: itemImage,
          });
        }
      }
      return next;
    });

    const totalQty = variants.reduce((s, v) => s + v.quantity, 0);
    const summary = variants.map((v) => `${v.color} × ${v.quantity}`).join(', ');
    addToast('Added to Cart', `${product.name} (${size}) · ${summary}`);
  };

  // Direct Buy / Order (Cash on Delivery)
  const handleBuyNow = (
    product: Product,
    size: ClothingSize,
    color: string,
    quantity: number,
    selectedImage?: string
  ) => {
    handleAddToCart(product, size, color, quantity, selectedImage);
    navigateTo('checkout');
  };

  const handleBuyNowMulti = (
    product: Product,
    size: ClothingSize,
    variants: Array<{ color: string; quantity: number; image?: string }>
  ) => {
    handleAddToCartMulti(product, size, variants);
    navigateTo('checkout');
  };

  const handleUpdateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === cartItemId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
    addToast('Removed from Cart', 'Item removed from your bag.');
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
        addToast('Removed from Saved', `${product.name} removed from your list.`);
      } else {
        next.add(product.id);
        addToast('Saved to Wishlist', `${product.name} added to your private list.`);
      }
      return next;
    });
  };

  const wishlistProducts = useMemo(
    () => products.filter((p) => wishlistIds.has(p.id)),
    [wishlistIds, products]
  );

  // Category subsets for dedicated home sections across all men's varieties
  const newArrivals = useMemo(() => products.filter((p) => p.isNew), [products]);
  const hoodies = useMemo(() => products.filter((p) => p.category === 'hoodies'), [products]);
  const pants = useMemo(() => products.filter((p) => p.category === 'pants'), [products]);
  const tshirts = useMemo(() => products.filter((p) => p.category === 't-shirts'), [products]);
  const shirts = useMemo(() => products.filter((p) => p.category === 'shirts'), [products]);
  const jackets = useMemo(() => products.filter((p) => p.category === 'jackets'), [products]);
  const coats = useMemo(() => products.filter((p) => p.category === 'coats'), [products]);
  const jeans = useMemo(() => products.filter((p) => p.category === 'jeans'), [products]);
  const sweatshirts = useMemo(() => products.filter((p) => p.category === 'sweatshirts'), [products]);
  const poloShirts = useMemo(() => products.filter((p) => p.category === 'polo-shirts'), [products]);
  const overshirts = useMemo(() => products.filter((p) => p.category === 'overshirts'), [products]);

  // Dedicated Admin Route View (/admin)
  if (activePage === 'admin') {
    return (
      <div className="min-h-screen bg-[#A67B5B] text-[#111111] font-sans selection:bg-[#111111] selection:text-white">
        <ToastContainer toasts={toasts} onDismiss={dismissToast} />
        {isAdminAuthenticated ? (
          <AdminDashboard
            products={products}
            onRefreshProducts={loadCatalog}
            onNavigateToStore={() => navigateTo('home')}
            onLogout={() => {
              setIsAdminAuthenticated(false);
              navigateTo('home');
            }}
            onToast={addToast}
          />
        ) : (
          <AdminLogin
            onSuccess={() => {
              setIsAdminAuthenticated(true);
              addToast('Staff Access Granted', 'Authenticated atelier administrative session.');
            }}
            onBackToStore={() => navigateTo('home')}
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#A67B5B] text-[#111111] flex flex-col font-sans selection:bg-[#111111] selection:text-white">
      
      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      {/* Main Responsive Navigation Bar */}
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistIds.size}
        onOpenCart={() => setIsCartDrawerOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigatePage={navigateTo}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenDatabase={() => setIsSupabaseModalOpen(true)}
        isSupabaseConnected={dataSource === 'supabase' && isSupabaseConfigured()}
        activePage={activePage}
      />

      {/* Main Content Router — All on #A67B5B */}
      <main className="flex-1">
        
        {/* ======================================================== */}
        {/* PAGE 1: HOME PAGE (All 10 Sections with Off-White Cards) */}
        {/* ======================================================== */}
        {activePage === 'home' && (
          <div>
            {/* 1. Premium Hero Section */}
            <Hero
              onShopClick={() => navigateTo('shop')}
              onExploreClick={() => {
                const el = document.getElementById('featured');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onQuickViewHeroLook={() => {
                const heroLook = products.find((p) => p.id === 'ss-campaign-uniform') || products[0];
                handleOpenProductDetails(heroLook);
              }}
            />

            {/* 2. New Arrivals Section */}
            <DedicatedCategorySection
              id="new-arrivals"
              title="New Arrivals"
              subtitle="Recent drop additions constructed with custom 280–500 GSM Japanese and Portuguese textiles."
              kicker="EDITION 01 DROP"
              products={newArrivals.slice(0, 3)}
              onQuickView={(p) => setQuickViewProduct(p)}
              onViewDetails={handleOpenProductDetails}
              onAddToCart={(p, sz, col, qty, img) => handleAddToCart(p, sz, col, qty || 1, img)}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onViewAll={() => {
                setShopCategoryFilter('new-arrivals');
                navigateTo('shop');
              }}
            />

            {/* 3. Featured Multi-Variety Men's Collection (All Categories) */}
            <FeaturedCollection
              products={products}
              onSelectProduct={handleOpenProductDetails}
              onQuickView={(p) => setQuickViewProduct(p)}
              onAddToCart={(p, sz, col, qty, img) => handleAddToCart(p, sz, col, qty || 1, img)}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onViewFullShop={(cat) => {
                if (cat) setShopCategoryFilter(cat);
                navigateTo('shop');
              }}
            />

            {/* Quick Link to Shop Full Collection */}
            <div className="py-8 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="p-8 bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-3xl border border-white/25 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <div className="text-xs font-mono tracking-widest text-[#2B2B2B] uppercase">
                    MEN'S ATELIER WARDROBE
                  </div>
                  <h3 className="font-display font-medium text-2xl sm:text-3xl text-[#111111] mt-1">
                    Explore the Complete 250+ Garment Selection
                  </h3>
                  <p className="text-xs text-[#2B2B2B] mt-0.5 font-sans">
                    Browse all hoodies, tailored trousers, selvedge jeans, wool coats, utility jackets, shirts, overshirts, and polos with unisex tailoring from XS to XXL.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => navigateTo('shop')}
                  className="px-8 py-3.5 bg-[#111111] hover:bg-black text-white rounded-xl text-xs font-medium tracking-wider uppercase transition-all shadow-md shrink-0"
                >
                  Open Full Shop
                </button>
              </div>
            </div>

            {/* 4. Outerwear: Jackets & Coats */}
            <DedicatedCategorySection
              id="jackets"
              title="Architectural Jackets & Coats"
              subtitle="Constructed from heavyweight virgin wool, technical nylon, and double-faced melton cloth with concealed hardware."
              kicker="MEN'S OUTERWEAR · SERIES 01"
              products={[...jackets.slice(0, 2), ...coats.slice(0, 1)]}
              onQuickView={(p) => setQuickViewProduct(p)}
              onViewDetails={handleOpenProductDetails}
              onAddToCart={(p, sz, col, qty, img) => handleAddToCart(p, sz, col, qty || 1, img)}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onViewAll={() => {
                setShopCategoryFilter('jackets');
                navigateTo('shop');
              }}
            />

            {/* 5. Fleece: Heavyweight Hoodies & Sweatshirts */}
            <DedicatedCategorySection
              id="hoodies"
              title="Heavyweight Hoodies & Sweatshirts"
              subtitle="Engineered with 480–500 GSM loopback organic french terry. Double-layer structured hoods with stand-collar geometry."
              kicker="CORE ATELIER FLEECE · SERIES 02"
              products={[...hoodies.slice(0, 2), ...sweatshirts.slice(0, 1)]}
              onQuickView={(p) => setQuickViewProduct(p)}
              onViewDetails={handleOpenProductDetails}
              onAddToCart={(p, sz, col, qty, img) => handleAddToCart(p, sz, col, qty || 1, img)}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onViewAll={() => {
                setShopCategoryFilter('hoodies');
                navigateTo('shop');
              }}
            />

            {/* 6. Shirting & Overshirts: Shirts & Heavy Twill Overshirts */}
            <DedicatedCategorySection
              id="shirts"
              title="Sartorial Shirts & Overshirts"
              subtitle="High-count cotton poplin, Belgian washed linen, and 380 GSM Japanese twill overshirts with clean concealed plackets."
              kicker="TAILORED SHIRTING · SERIES 03"
              products={[...shirts.slice(0, 2), ...overshirts.slice(0, 1)]}
              onQuickView={(p) => setQuickViewProduct(p)}
              onViewDetails={handleOpenProductDetails}
              onAddToCart={(p, sz, col, qty, img) => handleAddToCart(p, sz, col, qty || 1, img)}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onViewAll={() => {
                setShopCategoryFilter('shirts');
                navigateTo('shop');
              }}
            />

            {/* 7. Bottoms: Tailored Pants & Selvedge Jeans */}
            <DedicatedCategorySection
              id="pants"
              title="Tailored Trousers & Selvedge Denim"
              subtitle="Deep front knife pleats, relaxed drape, and 14oz Kurabo Japanese selvedge denim designed to fall cleanly over boots."
              kicker="MEN'S LEGWEAR · SERIES 04"
              products={[...pants.slice(0, 2), ...jeans.slice(0, 1)]}
              onQuickView={(p) => setQuickViewProduct(p)}
              onViewDetails={handleOpenProductDetails}
              onAddToCart={(p, sz, col, qty, img) => handleAddToCart(p, sz, col, qty || 1, img)}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onViewAll={() => {
                setShopCategoryFilter('pants');
                navigateTo('shop');
              }}
            />

            {/* 8. Knits & Tees: 280 GSM Box Tees & Knit Polos */}
            <DedicatedCategorySection
              id="t-shirts"
              title="280 GSM Boxy Tees & Knit Polos"
              subtitle="Long-staple combed cotton with thick 1.25-inch ribbing and mercerized knit collars that never roll or stretch."
              kicker="STUDIO KNITS · SERIES 05"
              products={[...tshirts.slice(0, 2), ...poloShirts.slice(0, 1)]}
              onQuickView={(p) => setQuickViewProduct(p)}
              onViewDetails={handleOpenProductDetails}
              onAddToCart={(p, sz, col, qty, img) => handleAddToCart(p, sz, col, qty || 1, img)}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onViewAll={() => {
                setShopCategoryFilter('t-shirts');
                navigateTo('shop');
              }}
            />

            {/* 7. Why S.S Section */}
            <WhySS />

            {/* 8. Brand Statement */}
            <BrandStatement />

            {/* 9. Newsletter / VIP Access Signup */}
            <Newsletter
              onSuccess={(email) => {
                addToast('Access Granted', `Welcome to the S.S Syndicate. Lookbook sent to ${email}`);
              }}
            />
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 2: COMPLETE SHOP PAGE WITH CATEGORY & SIZE FILTERS */}
        {/* ======================================================== */}
        {activePage === 'shop' && (
          <ShopPage
            products={products}
            initialCategory={shopCategoryFilter}
            onQuickView={(p) => setQuickViewProduct(p)}
            onViewDetails={handleOpenProductDetails}
            onAddToCart={(p, sz, col, qty, img) => handleAddToCart(p, sz, col, qty || 1, img)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {/* ======================================================== */}
        {/* PAGE 3: FULL PRODUCT DETAIL PAGE                         */}
        {/* ======================================================== */}
        {activePage === 'product-detail' && (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => navigateTo('shop')}
            onAddToCart={(p, sz, col, qty, img) => handleAddToCart(p, sz, col, qty, img)}
            onBuyNow={(p, sz, col, qty, img) => handleBuyNow(p, sz, col, qty, img)}
            onAddToCartMulti={handleAddToCartMulti}
            onBuyNowMulti={handleBuyNowMulti}
            isWishlisted={wishlistIds.has(selectedProduct.id)}
            onToggleWishlist={handleToggleWishlist}
            onSelectRelatedProduct={handleOpenProductDetails}
            relatedProducts={products.filter((p) => p.id !== selectedProduct.id)}
          />
        )}

        {/* ======================================================== */}
        {/* PAGE 4: FULL DEDICATED CART PAGE                         */}
        {/* ======================================================== */}
        {activePage === 'cart' && (
          <CartPage
            items={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveFromCart}
            onContinueShopping={() => navigateTo('shop')}
            onProceedToCheckout={() => navigateTo('checkout')}
          />
        )}

        {/* ======================================================== */}
        {/* PAGE 5: CHECKOUT PAGE (CASH ON DELIVERY)                */}
        {/* ======================================================== */}
        {activePage === 'checkout' && (
          <CheckoutPage
            items={cart}
            onBackToCart={() => navigateTo('cart')}
            onContinueShopping={() => navigateTo('shop')}
            onOrderCompleted={(order) => {
              setCart([]);
              addToast('Order Placed', `Confirmation #${order.orderId} registered.`);
            }}
          />
        )}

      </main>

      {/* Footer */}
      <Footer
        onNavigate={(target) => {
          if (target === 'shop') navigateTo('shop');
          else if (target === 'home') navigateTo('home');
          else {
            navigateTo('home');
            setTimeout(() => {
              const el = document.getElementById(target);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }}
        onFilterCategory={(cat) => {
          setShopCategoryFilter(cat);
          navigateTo('shop');
        }}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenDatabase={() => setIsSupabaseModalOpen(true)}
        onOpenAdmin={() => navigateTo('admin')}
        isSupabaseConnected={dataSource === 'supabase' && isSupabaseConfigured()}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartDrawerOpen}
        onClose={() => setIsCartDrawerOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          setIsCartDrawerOpen(false);
          navigateTo('checkout');
        }}
        onViewCartPage={() => {
          setIsCartDrawerOpen(false);
          navigateTo('cart');
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleToggleWishlist}
        onSelectProduct={(p) => {
          handleOpenProductDetails(p);
          setIsWishlistOpen(false);
        }}
      />

      {/* Product Quick View Modal */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, sz, col, qty, img) => handleAddToCart(p, sz, col, qty, img)}
        onAddToCartMulti={handleAddToCartMulti}
        onViewDetailsPage={(p) => {
          handleOpenProductDetails(p);
          setQuickViewProduct(null);
        }}
        isWishlisted={quickViewProduct ? wishlistIds.has(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(p) => handleOpenProductDetails(p)}
      />

      {/* About Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      {/* Contact Concierge Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Supabase Database Architecture & Connection Modal */}
      <SupabaseSetupModal
        isOpen={isSupabaseModalOpen}
        onClose={() => setIsSupabaseModalOpen(false)}
        onRefreshProducts={() => {
          loadCatalog();
          addToast('Catalog Synchronized', 'Fetched fresh data from database.');
        }}
        productCount={products.length}
        dataSource={dataSource}
      />

    </div>
  );
}
