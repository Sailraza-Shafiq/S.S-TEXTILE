import { getSupabaseClient, isSupabaseConfigured } from '../lib/supabase';
import { PRODUCTS } from '../data/products';
import { Product, ClothingSize, ProductColor, DatabaseProductRow } from '../types';

/**
 * Transforms a Supabase products row into the frontend Product interface
 */
export const mapDatabaseRowToProduct = (row: any): Product => {
  const images = Array.isArray(row.images) && row.images.length > 0 
    ? row.images 
    : [row.image || PRODUCTS[0].image];

  // Parse colors if stored as JSON or string array
  let colors: ProductColor[] = [];
  if (Array.isArray(row.colors)) {
    colors = row.colors.map((c: any) => {
      if (typeof c === 'string') {
        return { name: c, hex: '#111111' };
      }
      return { name: c.name || 'Default', hex: c.hex || '#111111' };
    });
  }
  if (colors.length === 0) {
    colors = [{ name: row.color || 'Matte Black', hex: '#111111' }];
  }

  // Parse sizes
  const sizes: ClothingSize[] = Array.isArray(row.sizes) && row.sizes.length > 0
    ? (row.sizes as ClothingSize[])
    : ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return {
    id: String(row.id),
    name: row.name,
    category: row.category,
    price: Number(row.price),
    originalPrice: row.original_price ? Number(row.original_price) : undefined,
    description: row.description || '',
    tagline: row.tagline || 'Engineered with architectural proportions and bespoke milling.',
    fabric: row.fabric || '100% Organic Combed Long-Staple Cotton',
    weightGsm: row.weight_gsm ? Number(row.weight_gsm) : 480,
    color: colors[0]?.name || 'Pitch Black',
    colors,
    fit: row.fit || 'Relaxed Boxy Fit',
    sizes,
    image: images[0],
    images,
    additionalImages: images,
    stock: row.stock !== undefined ? Number(row.stock) : 50,
    featured: Boolean(row.featured),
    isNew: Boolean(row.category === 'new-arrivals' || row.featured),
    isBestSeller: Boolean(row.category === 'best-sellers' || row.featured),
    inStock: (row.stock !== undefined ? Number(row.stock) : 50) > 0,
    details: Array.isArray(row.details) ? row.details : [
      'Custom 480 GSM loopback organic french terry',
      'Minimalist S.S chest embroidery in dense tonal stitch',
      'Pre-shrunk cold wash formulation for permanent zero-shrink fit',
    ],
    created_at: row.created_at,
  };
};

/**
 * Transforms a frontend Product into a Supabase products row format
 */
export const mapProductToDatabaseRow = (p: Product): Record<string, any> => {
  return {
    id: p.id,
    name: p.name,
    description: p.description,
    tagline: p.tagline,
    category: p.category,
    price: p.price,
    original_price: p.originalPrice || null,
    images: p.images && p.images.length > 0 ? p.images : [p.image],
    sizes: p.sizes,
    colors: p.colors,
    stock: p.stock ?? 50,
    featured: Boolean(p.featured || p.isBestSeller),
    fabric: p.fabric,
    weight_gsm: p.weightGsm,
    fit: p.fit,
    details: p.details,
    created_at: p.created_at || new Date().toISOString(),
  };
};

const LOCAL_STORAGE_PRODUCTS_KEY = 'ss_local_products';

/**
 * Retrieves locally saved products archive
 */
export const getLocalProducts = (): Product[] => {
  if (typeof window === 'undefined') return PRODUCTS;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_PRODUCTS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length >= PRODUCTS.length) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to parse local products', e);
  }
  return PRODUCTS;
};

/**
 * Saves products archive to local storage
 */
export const saveLocalProducts = (products: Product[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LOCAL_STORAGE_PRODUCTS_KEY, JSON.stringify(products));
  } catch (e) {
    console.warn('Failed to save products to localStorage', e);
  }
};

/**
 * Fetches all products from Supabase.
 * Falls back to local/default catalog if Supabase is unconfigured or empty.
 */
export const fetchProducts = async (): Promise<{ products: Product[]; source: 'supabase' | 'fallback'; error?: string }> => {
  const supabase = getSupabaseClient();
  const localList = getLocalProducts();

  if (!supabase || !isSupabaseConfigured()) {
    return {
      products: localList,
      source: 'fallback',
    };
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase query error on products:', error.message);
      return {
        products: localList,
        source: 'fallback',
        error: error.message,
      };
    }

    if (!data || data.length === 0) {
      return {
        products: localList,
        source: 'fallback',
      };
    }

    const mappedProducts = data.map(mapDatabaseRowToProduct);
    saveLocalProducts(mappedProducts);
    return {
      products: mappedProducts,
      source: 'supabase',
    };
  } catch (err: any) {
    console.error('Failed to fetch products from Supabase:', err);
    return {
      products: localList,
      source: 'fallback',
      error: err?.message || 'Connection error',
    };
  }
};

/**
 * Seeds initial S.S catalog into Supabase products table
 */
export const seedProductsToSupabase = async (): Promise<{ count: number; error?: string }> => {
  const supabase = getSupabaseClient();
  if (!supabase) {
    throw new Error('Supabase client is not configured.');
  }

  const rows = PRODUCTS.map(mapProductToDatabaseRow);

  const { data, error } = await supabase
    .from('products')
    .upsert(rows, { onConflict: 'id' })
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return {
    count: data ? data.length : rows.length,
  };
};

/**
 * Creates or updates a product in Supabase and local archive
 */
export const saveProduct = async (product: Product): Promise<Product> => {
  // 1. Update local storage archive
  const current = getLocalProducts();
  const existingIdx = current.findIndex((p) => p.id === product.id);
  let updatedList: Product[];
  if (existingIdx > -1) {
    updatedList = [...current];
    updatedList[existingIdx] = product;
  } else {
    updatedList = [product, ...current];
  }
  saveLocalProducts(updatedList);

  const supabase = getSupabaseClient();
  if (!supabase || !isSupabaseConfigured()) {
    return product;
  }

  const row = mapProductToDatabaseRow(product);

  const { data, error } = await supabase
    .from('products')
    .upsert([row], { onConflict: 'id' })
    .select()
    .single();

  if (error) {
    console.warn('Note: Supabase upsert returned error:', error.message);
    return product;
  }

  return mapDatabaseRowToProduct(data);
};

/**
 * Deletes a product by ID from Supabase and local archive
 */
export const deleteProduct = async (productId: string): Promise<boolean> => {
  // 1. Remove from local storage
  const current = getLocalProducts();
  const updatedList = current.filter((p) => p.id !== productId);
  saveLocalProducts(updatedList);

  const supabase = getSupabaseClient();
  if (!supabase || !isSupabaseConfigured()) {
    return true;
  }

  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', productId);

  if (error) {
    console.warn('Note: Supabase delete returned error:', error.message);
  }

  return true;
};
