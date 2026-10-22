import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Environment variables for client-side Supabase connection
// WARNING: NEVER expose service_role or secret keys here! Only public anon keys.
const envUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const envAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Optional: allow client runtime configuration stored in localStorage for easy connection without rebuild
const localSavedUrl = typeof window !== 'undefined' ? localStorage.getItem('ss_supabase_url') || '' : '';
const localSavedKey = typeof window !== 'undefined' ? localStorage.getItem('ss_supabase_anon_key') || '' : '';

export const SUPABASE_URL = (envUrl && !envUrl.includes('your-project-ref')) ? envUrl : (localSavedUrl || '');
export const SUPABASE_ANON_KEY = (envAnonKey && !envAnonKey.includes('your-anon-key')) ? envAnonKey : (localSavedKey || '');

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    SUPABASE_URL && 
    SUPABASE_ANON_KEY && 
    SUPABASE_URL.startsWith('https://') &&
    SUPABASE_ANON_KEY.length > 20
  );
};

// Singleton instance
let clientInstance: SupabaseClient | null = null;

export const getSupabaseClient = (): SupabaseClient | null => {
  if (!isSupabaseConfigured()) {
    return null;
  }

  if (!clientInstance) {
    try {
      clientInstance = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
        },
      });
    } catch (err) {
      console.error('Failed to initialize Supabase client:', err);
      clientInstance = null;
    }
  }

  return clientInstance;
};

// Save Supabase credentials via UI if needed
export const saveSupabaseCredentials = (url: string, anonKey: string): boolean => {
  if (typeof window === 'undefined') return false;
  
  const cleanUrl = url.trim();
  const cleanKey = anonKey.trim();

  if (!cleanUrl || !cleanKey) {
    localStorage.removeItem('ss_supabase_url');
    localStorage.removeItem('ss_supabase_anon_key');
    clientInstance = null;
    return true;
  }

  if (!cleanUrl.startsWith('https://')) {
    throw new Error('Supabase URL must start with https://');
  }

  localStorage.setItem('ss_supabase_url', cleanUrl);
  localStorage.setItem('ss_supabase_anon_key', cleanKey);
  clientInstance = null; // Reset to force re-instantiation
  return true;
};
