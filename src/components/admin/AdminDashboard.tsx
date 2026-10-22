/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Package, 
  ShoppingBag, 
  Plus, 
  Edit3, 
  Trash2, 
  LogOut, 
  ExternalLink, 
  RefreshCw, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Truck, 
  XCircle, 
  Phone, 
  MapPin, 
  User, 
  Calendar,
  AlertCircle,
  Key
} from 'lucide-react';
import { Product, Order, OrderStatus, ProductCategory } from '../../types';
import { SSLogo } from '../SSLogo';
import { AdminProductModal } from './AdminProductModal';
import { AdminPasswordModal } from './AdminPasswordModal';
import { saveProduct, deleteProduct } from '../../services/productService';
import { fetchOrders, updateOrderStatus } from '../../services/orderService';
import { logoutAdmin } from '../../services/adminAuthService';

interface AdminDashboardProps {
  products: Product[];
  onRefreshProducts: () => void;
  onNavigateToStore: () => void;
  onLogout: () => void;
  onToast: (title: string, message: string) => void;
}

type AdminTab = 'products' | 'orders';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  products,
  onRefreshProducts,
  onNavigateToStore,
  onLogout,
  onToast,
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('products');

  // Product modal state
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);
  const [productSearch, setProductSearch] = useState('');
  const [productCategoryFilter, setProductCategoryFilter] = useState<string>('all');
  const [deletingProductId, setDeletingProductId] = useState<string | null>(null);

  // Orders state
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoadingOrders, setIsLoadingOrders] = useState(false);
  const [orderStatusFilter, setOrderStatusFilter] = useState<string>('all');
  const [updatingOrderId, setUpdatingOrderId] = useState<string | null>(null);

  // Load orders
  const loadOrders = async () => {
    setIsLoadingOrders(true);
    try {
      const res = await fetchOrders();
      setOrders(res.orders);
    } catch (err: any) {
      console.error('Failed to fetch orders:', err);
      onToast('Orders Notice', 'Could not refresh orders from database.');
    } finally {
      setIsLoadingOrders(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = 
        p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
        p.id.toLowerCase().includes(productSearch.toLowerCase());
      const matchesCategory = 
        productCategoryFilter === 'all' || p.category === productCategoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [products, productSearch, productCategoryFilter]);

  // Filtered orders
  const filteredOrders = useMemo(() => {
    if (orderStatusFilter === 'all') return orders;
    return orders.filter((o) => o.status === orderStatusFilter);
  }, [orders, orderStatusFilter]);

  // Handle Save Product
  const handleSaveProduct = async (productData: Product) => {
    try {
      await saveProduct(productData);
      onToast(
        productToEdit ? 'Garment Updated' : 'Garment Created',
        `${productData.name} saved to catalog.`
      );
      onRefreshProducts();
      setIsProductModalOpen(false);
      setProductToEdit(null);
    } catch (err: any) {
      onToast('Error', err?.message || 'Failed to save product.');
    }
  };

  // Handle Delete Product
  const handleDeleteProduct = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to delete "${name}" from the store catalog?`)) {
      return;
    }
    setDeletingProductId(id);
    try {
      await deleteProduct(id);
      onToast('Garment Deleted', `${name} has been removed.`);
      onRefreshProducts();
    } catch (err: any) {
      onToast('Error', err?.message || 'Failed to delete product.');
    } finally {
      setDeletingProductId(null);
    }
  };

  // Handle Status Update
  const handleStatusChange = async (orderId: string, newStatus: OrderStatus) => {
    setUpdatingOrderId(orderId);
    try {
      await updateOrderStatus(orderId, newStatus);
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
      );
      onToast('Order Updated', `Order #${orderId} marked as ${newStatus}.`);
    } catch (err: any) {
      onToast('Update Failed', err?.message || 'Could not update status.');
    } finally {
      setUpdatingOrderId(null);
    }
  };

  // Handle Logout
  const handleLogoutClick = async () => {
    await logoutAdmin();
    onToast('Logged Out', 'Administrator session ended.');
    onLogout();
  };

  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case 'Pending':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Confirmed':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      case 'Shipped':
        return 'bg-purple-100 text-purple-900 border-purple-300';
      case 'Delivered':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      case 'Cancelled':
        return 'bg-rose-100 text-rose-900 border-rose-300';
      default:
        return 'bg-stone-100 text-stone-800 border-stone-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#A67B5B] text-[#111111] font-sans selection:bg-[#111111] selection:text-white pb-20">
      
      {/* Top Admin Header Bar */}
      <header className="sticky top-0 z-40 bg-[#A67B5B]/95 backdrop-blur-md text-[#111111] border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Brand & Admin Badge */}
          <div className="flex items-center gap-4">
            <SSLogo variant="navbar" />
            <div className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#111111] text-[10px] font-mono tracking-widest text-white uppercase border border-white/20">
              STAFF PORTAL
            </div>
          </div>

          {/* Navigation Tabs (Products & Orders only) */}
          <nav className="flex items-center gap-1 sm:gap-2 bg-[rgba(255,255,255,0.15)] p-1 rounded-2xl border border-white/20">
            <button
              type="button"
              onClick={() => setActiveTab('products')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono font-medium uppercase tracking-wider transition-all ${
                activeTab === 'products'
                  ? 'bg-[#111111] text-white shadow-xs'
                  : 'text-[#2B2B2B] hover:text-[#111111] hover:bg-white/10'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Products ({products.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('orders')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono font-medium uppercase tracking-wider transition-all ${
                activeTab === 'orders'
                  ? 'bg-[#111111] text-white shadow-xs'
                  : 'text-[#2B2B2B] hover:text-[#111111] hover:bg-white/10'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Orders ({orders.length})</span>
            </button>
          </nav>

          {/* Actions: Change Password, View Storefront & Logout */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPasswordModalOpen(true)}
              title="Change administrator password"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-[#111111] text-xs font-mono transition-colors border border-white/20"
            >
              <Key className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Password</span>
            </button>

            <button
              type="button"
              onClick={onNavigateToStore}
              title="Return to customer storefront"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-[#111111] text-xs font-mono transition-colors border border-white/20"
            >
              <span>Storefront</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={handleLogoutClick}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111111] hover:bg-black text-white text-xs font-mono font-medium transition-colors shadow-xs"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">

        {/* ======================================================== */}
        {/* SECTION 1: PRODUCTS                                      */}
        {/* ======================================================== */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            
            {/* Action Bar */}
            <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/25 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-mono tracking-widest text-[#2B2B2B] uppercase">
                  MANAGEMENT PORTAL
                </div>
                <h1 className="font-display font-medium text-2xl sm:text-3xl text-[#111111]">
                  Store Garment Catalog
                </h1>
                <p className="text-xs text-[#2B2B2B] mt-1 font-sans">
                  Manage clothing garments, pricing, inventory stock, and architectural photography.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setProductToEdit(null);
                  setIsProductModalOpen(true);
                }}
                className="px-5 py-3 bg-[#111111] hover:bg-black text-white rounded-xl text-xs font-mono uppercase font-medium tracking-wider transition-all shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Product</span>
              </button>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-2xl p-4 border border-white/25 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#2B2B2B]/60" />
                <input
                  type="text"
                  placeholder="Search garments by name or ID..."
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-white/90 border border-white/30 rounded-xl text-xs font-sans text-[#111111] placeholder:text-[#2B2B2B]/60 focus:outline-hidden focus:ring-1 focus:ring-[#111111]"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-[11px] font-mono text-[#2B2B2B] uppercase">Category:</span>
                <select
                  value={productCategoryFilter}
                  onChange={(e) => setProductCategoryFilter(e.target.value)}
                  className="px-3 py-1.5 bg-white/90 border border-white/30 rounded-xl text-xs font-sans text-[#111111] focus:outline-hidden"
                >
                  <option value="all">All Categories</option>
                  <option value="hoodies">Hoodies</option>
                  <option value="pants">Pants & Trousers</option>
                  <option value="t-shirts">T-Shirts</option>
                  <option value="jackets">Jackets</option>
                  <option value="shirts">Shirts</option>
                  <option value="new-arrivals">New Arrivals</option>
                  <option value="best-sellers">Best Sellers</option>
                </select>

                <button
                  type="button"
                  onClick={onRefreshProducts}
                  title="Reload catalog"
                  className="p-2 bg-white/90 hover:bg-white border border-white/30 rounded-xl text-[#111111]"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Product Cards Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-3xl p-12 text-center border border-white/25">
                <Package className="w-10 h-10 text-[#2B2B2B]/40 mx-auto mb-3" />
                <h3 className="font-display font-medium text-lg text-[#111111]">No garments found</h3>
                <p className="text-xs text-[#2B2B2B] mt-1 font-sans">Try modifying your search or add a new garment above.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-3xl p-6 border border-white/25 shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow"
                  >
                    <div>
                      {/* Photo Thumbnail */}
                      <div className="relative w-full aspect-[4/3] bg-white rounded-2xl p-4 mb-4 flex items-center justify-center overflow-hidden border border-white/30">
                        <img
                          src={product.image}
                          alt={product.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.featured && (
                          <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#111111] text-amber-300 text-[10px] font-mono uppercase font-medium tracking-wider">
                            <Sparkles className="w-3 h-3 text-amber-400" />
                            Featured
                          </span>
                        )}
                        <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-[#111111] text-white text-[10px] font-mono uppercase">
                          {product.category}
                        </span>
                      </div>

                      {/* Info */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-display font-medium text-base text-[#111111] line-clamp-1">
                          {product.name}
                        </h3>
                        <span className="font-mono font-medium text-sm text-[#111111] shrink-0 tabular-nums">
                          ${product.price}
                        </span>
                      </div>

                      <p className="text-xs text-[#2B2B2B] line-clamp-2 mb-4 font-sans leading-relaxed">
                        {product.description}
                      </p>

                      {/* Stock & Colors & Sizes meta */}
                      <div className="pt-3 border-t border-white/20 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#2B2B2B] mb-4">
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium text-[#111111]">Stock:</span>
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-medium ${
                            (product.stock ?? 50) > 10 
                              ? 'bg-emerald-100 text-emerald-900' 
                              : (product.stock ?? 50) > 0 
                              ? 'bg-amber-100 text-amber-900' 
                              : 'bg-red-100 text-red-900'
                          }`}>
                            {product.stock ?? 50} units
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          {product.colors?.slice(0, 4).map((c, i) => (
                            <span
                              key={i}
                              title={c.name}
                              className="w-3 h-3 rounded-full border border-white/60 shrink-0"
                              style={{ backgroundColor: c.hex }}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.sizes?.map((sz) => (
                          <span
                            key={sz}
                            className="px-1.5 py-0.5 rounded bg-white/40 border border-white/20 text-[10px] font-mono text-[#111111] font-medium"
                          >
                            {sz}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-white/20 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setProductToEdit(product);
                          setIsProductModalOpen(true);
                        }}
                        className="flex-1 py-2 px-3 bg-white/90 hover:bg-white border border-white/30 rounded-xl text-xs font-mono font-medium uppercase text-[#111111] flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDeleteProduct(product.id, product.name)}
                        disabled={deletingProductId === product.id}
                        className="p-2 bg-white/90 hover:bg-red-50 border border-white/30 hover:border-red-300 text-[#2B2B2B] hover:text-red-700 rounded-xl transition-colors disabled:opacity-50"
                        title="Delete product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}

        {/* ======================================================== */}
        {/* SECTION 2: ORDERS                                        */}
        {/* ======================================================== */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            
            {/* Orders Header */}
            <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/25 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-mono tracking-widest text-[#2B2B2B] uppercase">
                  FULFILLMENT & DISPATCH
                </div>
                <h1 className="font-display font-medium text-2xl sm:text-3xl text-[#111111]">
                  Customer Orders
                </h1>
                <p className="text-xs text-[#2B2B2B] mt-1 font-sans">
                  Cash on Delivery (COD) dispatch management. Update garment status as orders progress.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={loadOrders}
                  disabled={isLoadingOrders}
                  className="px-4 py-2.5 bg-white/90 hover:bg-white text-[#111111] border border-white/30 rounded-xl text-xs font-mono uppercase font-medium flex items-center gap-2 transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoadingOrders ? 'animate-spin' : ''}`} />
                  <span>Refresh Orders</span>
                </button>
              </div>
            </div>

            {/* Filter status buttons */}
            <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-2xl p-4 border border-white/25 shadow-2xs flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-[#2B2B2B] uppercase mr-2">Filter Status:</span>
              {(['all', 'Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'] as const).map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setOrderStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                    orderStatusFilter === st
                      ? 'bg-[#111111] text-white shadow-2xs'
                      : 'bg-white/80 text-[#2B2B2B] hover:bg-white border border-white/30'
                  }`}
                >
                  {st === 'all' ? `All (${orders.length})` : `${st} (${orders.filter(o => o.status === st).length})`}
                </button>
              ))}
            </div>

            {/* Orders List */}
            {filteredOrders.length === 0 ? (
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-3xl p-12 text-center border border-white/25">
                <ShoppingBag className="w-10 h-10 text-[#2B2B2B]/40 mx-auto mb-3" />
                <h3 className="font-display font-medium text-lg text-[#111111]">No orders found</h3>
                <p className="text-xs text-[#2B2B2B] mt-1 font-sans">
                  {orderStatusFilter === 'all' 
                    ? 'Orders placed via Cash on Delivery checkout will appear here.'
                    : `No orders currently marked as "${orderStatusFilter}".`}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredOrders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/25 shadow-xs hover:shadow-md transition-shadow"
                  >
                    {/* Top Row: Order ID, Date, Status */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/20 gap-3 mb-6">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold text-lg sm:text-xl text-[#111111] tracking-wider">
                            Order #{order.orderId || order.id}
                          </span>
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider border ${getStatusBadge(order.status)}`}>
                            {order.status === 'Pending' && <Clock className="w-3 h-3" />}
                            {order.status === 'Confirmed' && <CheckCircle2 className="w-3 h-3" />}
                            {order.status === 'Shipped' && <Truck className="w-3 h-3" />}
                            {order.status === 'Delivered' && <CheckCircle2 className="w-3 h-3" />}
                            {order.status === 'Cancelled' && <XCircle className="w-3 h-3" />}
                            Status: {order.status}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-mono text-[#2B2B2B] mt-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{order.createdAt || (order.created_at ? new Date(order.created_at).toLocaleString() : 'Recent')}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-[#111111] font-medium">{order.paymentMethod || 'Cash on Delivery (COD)'}</span>
                        </div>
                      </div>

                      {/* Total Amount Badge */}
                      <div className="text-left sm:text-right">
                        <div className="text-[10px] font-mono uppercase text-[#2B2B2B]">Total Payable</div>
                        <div className="font-display font-medium text-2xl text-[#111111] tabular-nums">
                          ${order.total || order.total_amount}
                        </div>
                      </div>
                    </div>

                    {/* Middle Row: Customer Info & Ordered Items */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
                      {/* Customer Details (5 cols) */}
                      <div className="lg:col-span-5 bg-white/90 backdrop-blur-xs p-5 rounded-2xl border border-white/30 space-y-2.5">
                        <h4 className="text-xs font-mono uppercase font-medium text-[#111111] flex items-center gap-1.5 pb-2 border-b border-stone-200">
                          <User className="w-3.5 h-3.5" />
                          <span>Delivery Consignee</span>
                        </h4>

                        <div className="text-xs font-sans text-[#2B2B2B] space-y-1.5">
                          <div className="font-medium text-sm text-[#111111]">
                            {order.customer_name || order.customer?.customerName}
                          </div>
                          
                          <div className="flex items-center gap-2 font-mono text-[#2B2B2B]">
                            <Phone className="w-3.5 h-3.5 text-[#2B2B2B]/60" />
                            <a 
                              href={`tel:${order.phone || order.customer?.phone}`}
                              className="hover:underline text-[#111111] font-medium"
                            >
                              {order.phone || order.customer?.phone}
                            </a>
                          </div>

                          {(order.email || order.customer?.email) && (
                            <div className="text-[#2B2B2B] font-sans">
                              {order.email || order.customer?.email}
                            </div>
                          )}

                          <div className="flex items-start gap-2 pt-1 text-[#2B2B2B]">
                            <MapPin className="w-3.5 h-3.5 text-[#2B2B2B]/60 shrink-0 mt-0.5" />
                            <div>
                              <div>{order.address || order.customer?.address}</div>
                              <div className="font-medium text-[#111111]">{order.city || order.customer?.city}</div>
                            </div>
                          </div>

                          {(order.notes || order.customer?.notes) && (
                            <div className="p-2 bg-stone-100 rounded-lg text-[11px] text-[#2B2B2B] italic border border-stone-200 mt-2 font-sans">
                              Note: {order.notes || order.customer?.notes}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Order Items Breakdown (7 cols) */}
                      <div className="lg:col-span-7 bg-white/90 backdrop-blur-xs p-5 rounded-2xl border border-white/30">
                        <h4 className="text-xs font-mono uppercase font-medium text-[#111111] pb-2 border-b border-stone-200 mb-3">
                          Allocated Garments ({order.items?.length || 0})
                        </h4>

                        <div className="divide-y divide-stone-100 space-y-2">
                          {order.items?.map((item: any, idx: number) => {
                            const name = item.product?.name || item.name || item.product_name || 'Garment';
                            const image = item.image || item.product?.image;
                            const size = item.size;
                            const color = item.color;
                            const qty = item.quantity;
                            const unitPrice = item.product?.price || item.unitPrice || item.unit_price;

                            return (
                              <div key={idx} className="pt-2 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                  {image && (
                                    <div className="w-10 h-10 rounded-lg bg-stone-50 border border-stone-200 p-0.5 flex items-center justify-center shrink-0">
                                      <img
                                        src={image}
                                        alt={name}
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                  )}
                                  <div>
                                    <div className="text-xs font-medium text-[#111111] font-display line-clamp-1">
                                      {name}
                                    </div>
                                    <div className="text-[11px] font-mono text-[#2B2B2B]">
                                      Size: {size} · {color} · Qty: {qty}
                                    </div>
                                  </div>
                                </div>

                                <div className="font-mono text-xs font-medium text-[#111111] tabular-nums">
                                  ${(unitPrice || 0) * (qty || 1)}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Row: Status Update Action Controls */}
                    <div className="pt-4 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span className="text-xs font-mono uppercase text-[#2B2B2B] font-medium">
                        Change Order Status:
                      </span>

                      <div className="flex flex-wrap items-center gap-1.5">
                        {(['Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'] as OrderStatus[]).map(
                          (targetStatus) => {
                            const isCurrent = order.status === targetStatus;
                            const isUpdating = updatingOrderId === order.id;

                            return (
                              <button
                                key={targetStatus}
                                type="button"
                                disabled={isCurrent || isUpdating}
                                onClick={() => handleStatusChange(order.id, targetStatus)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                                  isCurrent
                                    ? 'bg-[#111111] text-white shadow-2xs cursor-default'
                                    : 'bg-white/90 hover:bg-white text-[#111111] border border-white/30 disabled:opacity-40'
                                }`}
                              >
                                {targetStatus}
                              </button>
                            );
                          }
                        )}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        )}

      </main>

      {/* Add / Edit Product Modal */}
      <AdminProductModal
        isOpen={isProductModalOpen}
        onClose={() => {
          setIsProductModalOpen(false);
          setProductToEdit(null);
        }}
        onSave={handleSaveProduct}
        productToEdit={productToEdit}
      />

      {/* Admin Password Change Modal */}
      <AdminPasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        onSuccess={(newPasswordNotice) => {
          onToast('Security Update', 'Admin password has been changed successfully.');
        }}
      />

    </div>
  );
};
