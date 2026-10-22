import { getSupabaseClient, isSupabaseConfigured } from '../lib/supabase';
import { CartItem, Order, OrderCustomerInfo, OrderStatus } from '../types';

export interface CreateOrderParams {
  customer: OrderCustomerInfo;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}

const LOCAL_STORAGE_ORDERS_KEY = 'ss_orders_archive';

/**
 * Retrieves locally cached orders (for fallback or offline resilience)
 */
export const getLocalOrders = (): Order[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn('Failed to parse local orders', e);
    return [];
  }
};

/**
 * Saves an order to local cache
 */
export const saveLocalOrder = (order: Order): void => {
  if (typeof window === 'undefined') return;
  try {
    const current = getLocalOrders();
    const updated = [order, ...current.filter((o) => o.id !== order.id)];
    localStorage.setItem(LOCAL_STORAGE_ORDERS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn('Failed to save order to localStorage', e);
  }
};

/**
 * Creates an order in Supabase with initial status "Pending"
 * and inserts relational records into order_items.
 */
export const createOrder = async (
  params: CreateOrderParams
): Promise<{ order: Order; source: 'supabase' | 'fallback'; error?: string }> => {
  const orderId = `SS-${Math.floor(100000 + Math.random() * 900000)}`;
  const now = new Date().toISOString();

  // Construct complete Order model with initial status "Pending"
  const order: Order = {
    id: orderId,
    orderId,
    customer: params.customer,
    customer_name: params.customer.customerName.trim(),
    phone: params.customer.phone.trim(),
    email: params.customer.email ? params.customer.email.trim() : undefined,
    address: params.customer.address.trim(),
    city: params.customer.city.trim(),
    notes: params.customer.notes ? params.customer.notes.trim() : undefined,
    items: params.items,
    subtotal: params.subtotal,
    shipping: params.shipping,
    total: params.total,
    total_amount: params.total,
    paymentMethod: 'Cash on Delivery (COD)',
    status: 'Pending', // Initial status requested: "Pending"
    createdAt: new Date().toLocaleString(),
    created_at: now,
  };

  // Always save to local cache for instant resilience
  saveLocalOrder(order);

  const supabase = getSupabaseClient();
  if (!supabase || !isSupabaseConfigured()) {
    return {
      order,
      source: 'fallback',
    };
  }

  try {
    // 1. Prepare items payload for JSONB storage in orders table
    const itemsPayload = params.items.map((item) => ({
      productId: item.product.id,
      name: item.product.name,
      size: item.size,
      color: item.color,
      quantity: item.quantity,
      unitPrice: item.product.price,
      subtotal: item.product.price * item.quantity,
      image: item.product.image,
    }));

    // 2. Insert into Supabase `orders` table
    const { error: orderError } = await supabase.from('orders').insert([
      {
        id: orderId,
        customer_name: order.customer_name,
        phone: order.phone,
        email: order.email || null,
        address: order.address,
        city: order.city,
        notes: order.notes || null,
        items: itemsPayload,
        subtotal: order.subtotal,
        shipping: order.shipping,
        total_amount: order.total_amount,
        payment_method: order.paymentMethod,
        status: 'Pending', // Initial status set to "Pending"
        created_at: now,
      },
    ]);

    if (orderError) {
      console.error('Supabase order insert error:', orderError);
      return {
        order,
        source: 'fallback',
        error: orderError.message,
      };
    }

    // 3. Relational structure: insert into `order_items` table
    const orderItemsRows = params.items.map((item) => ({
      order_id: orderId,
      product_id: item.product.id,
      product_name: item.product.name,
      size: item.size,
      color: item.color,
      quantity: item.quantity,
      unit_price: item.product.price,
      subtotal: item.product.price * item.quantity,
      created_at: now,
    }));

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItemsRows);

    if (itemsError) {
      console.warn('Note: order_items insert returned:', itemsError.message);
    }

    return {
      order,
      source: 'supabase',
    };
  } catch (err: any) {
    console.error('Exception during order creation:', err);
    return {
      order,
      source: 'fallback',
      error: err?.message || 'Network exception',
    };
  }
};

/**
 * Fetches all orders from Supabase (or fallback local archive)
 */
export const fetchOrders = async (): Promise<{ orders: Order[]; source: 'supabase' | 'fallback'; error?: string }> => {
  const supabase = getSupabaseClient();
  const localOrders = getLocalOrders();

  if (!supabase || !isSupabaseConfigured()) {
    return {
      orders: localOrders,
      source: 'fallback',
    };
  }

  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return {
        orders: localOrders,
        source: 'fallback',
        error: error.message,
      };
    }

    if (!data || data.length === 0) {
      return {
        orders: localOrders,
        source: 'supabase',
      };
    }

    const mappedOrders: Order[] = data.map((row: any) => ({
      id: row.id,
      orderId: row.id,
      customer: {
        customerName: row.customer_name,
        phone: row.phone,
        email: row.email || undefined,
        address: row.address,
        city: row.city,
        notes: row.notes || undefined,
      },
      customer_name: row.customer_name,
      phone: row.phone,
      email: row.email || undefined,
      address: row.address,
      city: row.city,
      notes: row.notes || undefined,
      items: Array.isArray(row.items) ? row.items : [],
      subtotal: Number(row.subtotal || row.total_amount),
      shipping: Number(row.shipping || 0),
      total: Number(row.total_amount),
      total_amount: Number(row.total_amount),
      paymentMethod: (row.payment_method as any) || 'Cash on Delivery (COD)',
      status: (row.status as OrderStatus) || 'Pending',
      createdAt: new Date(row.created_at).toLocaleString(),
      created_at: row.created_at,
    }));

    return {
      orders: mappedOrders,
      source: 'supabase',
    };
  } catch (err: any) {
    return {
      orders: localOrders,
      source: 'fallback',
      error: err?.message,
    };
  }
};

/**
 * Updates order status in Supabase and local archive
 * Allowed statuses: 'Pending' | 'Confirmed' | 'Shipped' | 'Delivered' | 'Cancelled'
 */
export const updateOrderStatus = async (
  orderId: string,
  status: OrderStatus
): Promise<boolean> => {
  // Update local
  const current = getLocalOrders();
  const updated = current.map((o) => (o.id === orderId ? { ...o, status } : o));
  localStorage.setItem(LOCAL_STORAGE_ORDERS_KEY, JSON.stringify(updated));

  const supabase = getSupabaseClient();
  if (!supabase || !isSupabaseConfigured()) {
    return true;
  }

  const { error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', orderId);

  if (error) {
    console.error('Failed to update order status in Supabase:', error);
    throw new Error(error.message);
  }

  return true;
};
