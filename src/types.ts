export type ProductCategory = 
  | 'hoodies'
  | 't-shirts'
  | 'shirts'
  | 'pants'
  | 'jeans'
  | 'coats'
  | 'jackets'
  | 'sweatshirts'
  | 'tracksuits'
  | 'shorts'
  | 'formal-wear'
  | 'casual-wear'
  | 'overshirts'
  | 'sweaters'
  | 'polo-shirts'
  | 'new-arrivals'
  | 'best-sellers';

export type ClothingSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
  stock?: number;
}

export type OrderStatus = 'Pending' | 'Confirmed' | 'Shipped' | 'Delivered' | 'Cancelled';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  description: string;
  tagline: string;
  fabric: string;
  weightGsm: number;
  color: string;
  colors: ProductColor[];
  fit: string;
  sizes: ClothingSize[];
  image: string;
  images?: string[];
  additionalImages?: string[];
  stock?: number;
  featured?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  inStock: boolean;
  details: string[];
  created_at?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  size: ClothingSize;
  color: string;
  quantity: number;
  image?: string;
}

export interface OrderCustomerInfo {
  customerName: string;
  phone: string;
  email?: string;
  address: string;
  city: string;
  notes?: string;
}

export interface Order {
  id: string;
  orderId: string;
  customer: OrderCustomerInfo;
  customer_name: string;
  phone: string;
  email?: string;
  address: string;
  city: string;
  notes?: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  total_amount: number;
  paymentMethod: 'Cash on Delivery (COD)';
  status: OrderStatus;
  createdAt: string;
  created_at?: string;
}

export interface DatabaseProductRow {
  id: string;
  name: string;
  description: string;
  tagline?: string;
  category: string;
  price: number;
  original_price?: number | null;
  images: string[];
  sizes: string[];
  colors: ProductColor[] | string[];
  stock: number;
  featured: boolean;
  fabric?: string;
  weight_gsm?: number;
  fit?: string;
  details?: string[];
  created_at?: string;
}

export interface DatabaseOrderRow {
  id: string;
  customer_name: string;
  phone: string;
  email?: string | null;
  address: string;
  city: string;
  notes?: string | null;
  items: any;
  subtotal: number;
  shipping: number;
  total_amount: number;
  payment_method: string;
  status: OrderStatus;
  created_at: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type?: 'success' | 'info';
}

export type ActivePage = 'home' | 'shop' | 'product-detail' | 'cart' | 'checkout' | 'admin';
