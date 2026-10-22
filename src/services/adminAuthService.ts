/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const ADMIN_TOKEN_KEY = 'ss_atelier_admin_token';

/**
 * Gets the stored admin authentication token
 */
export const getAdminToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem(ADMIN_TOKEN_KEY) || localStorage.getItem(ADMIN_TOKEN_KEY);
};

/**
 * Saves the admin authentication token
 */
export const setAdminToken = (token: string): void => {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(ADMIN_TOKEN_KEY, token);
  localStorage.setItem(ADMIN_TOKEN_KEY, token);
};

/**
 * Clears the admin authentication token
 */
export const clearAdminToken = (): void => {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(ADMIN_TOKEN_KEY);
  localStorage.removeItem(ADMIN_TOKEN_KEY);
};

/**
 * Performs server-side password authentication
 * Never exposes or compares the password on the frontend client.
 */
export const loginAdmin = async (
  password: string
): Promise<{ success: boolean; message?: string }> => {
  try {
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    if (res.ok && data.success && data.token) {
      setAdminToken(data.token);
      return { success: true };
    }

    return {
      success: false,
      message: data.message || 'Invalid administrative password.',
    };
  } catch (err: any) {
    console.error('Admin authentication request failed:', err);
    return {
      success: false,
      message: 'Server connection failed. Ensure server is active.',
    };
  }
};

/**
 * Verifies if the current stored token is authenticated by the server
 */
export const verifyAdminSession = async (): Promise<boolean> => {
  const token = getAdminToken();
  if (!token) return false;

  try {
    const res = await fetch('/api/admin/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    if (!res.ok) {
      clearAdminToken();
      return false;
    }

    const data = await res.json();
    if (!data.authenticated) {
      clearAdminToken();
      return false;
    }

    return true;
  } catch (err) {
    console.warn('Admin token verification network issue:', err);
    // If the server was temporarily unreachable, don't immediately lock out if token is present
    return Boolean(token);
  }
};

/**
 * Logs out the admin session both on the server and client
 */
export const logoutAdmin = async (): Promise<void> => {
  const token = getAdminToken();
  clearAdminToken();

  if (token) {
    try {
      await fetch('/api/admin/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
    } catch (e) {
      // Ignore cleanup error
    }
  }
};

/**
 * Changes the admin password
 */
export const changeAdminPassword = async (
  currentPassword: string,
  newPassword: string
): Promise<{ success: boolean; message: string }> => {
  const token = getAdminToken();
  try {
    const res = await fetch('/api/admin/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ currentPassword, newPassword, token }),
    });

    const data = await res.json();
    return {
      success: !!data.success,
      message: data.message || (data.success ? 'Password updated successfully' : 'Failed to update password'),
    };
  } catch (err: any) {
    console.error('Failed to change password:', err);
    return {
      success: false,
      message: 'Failed to communicate with server. Please try again.',
    };
  }
};
