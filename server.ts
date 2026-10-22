import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Persistent admin config file path
const CONFIG_FILE = path.join(__dirname, 'src/data/admin-config.json');

function getStoredAdminPassword(): string {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      const raw = fs.readFileSync(CONFIG_FILE, 'utf8');
      const data = JSON.parse(raw);
      if (data && typeof data.adminPassword === 'string' && data.adminPassword.trim()) {
        return data.adminPassword.trim();
      }
    }
  } catch (err) {
    console.error('Error reading admin-config.json:', err);
  }
  return (process.env.ADMIN_PASSWORD || 'SSAtelier2026!').trim();
}

function saveStoredAdminPassword(newPassword: string): boolean {
  try {
    const dir = path.dirname(CONFIG_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(
      CONFIG_FILE,
      JSON.stringify(
        {
          adminPassword: newPassword,
          updatedAt: new Date().toISOString(),
        },
        null,
        2
      ),
      'utf8'
    );
    currentAdminPassword = newPassword;
    return true;
  } catch (err) {
    console.error('Error writing admin-config.json:', err);
    return false;
  }
}

// In-memory cache of current admin password
let currentAdminPassword = getStoredAdminPassword();

// Active admin session tokens stored in memory on the server
// Maps token -> expiration timestamp
const activeSessions = new Map<string, number>();

// Clean up expired sessions periodically (every 15 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [token, expiry] of activeSessions.entries()) {
    if (now > expiry) {
      activeSessions.delete(token);
    }
  }
}, 15 * 60 * 1000);

app.use(express.json());

/**
 * Server-side Admin Login
 * Verifies password against configured password or environment variable
 */
app.post('/api/admin/login', (req, res) => {
  try {
    const { password } = req.body;

    if (!password || typeof password !== 'string') {
      return res.status(400).json({ success: false, message: 'Password is required' });
    }

    const currentPass = currentAdminPassword || getStoredAdminPassword();

    // Secure timing-safe string comparison
    const inputBuf = Buffer.from(password.trim());
    const passBuf = Buffer.from(currentPass);

    let match = false;
    if (inputBuf.length === passBuf.length) {
      match = crypto.timingSafeEqual(inputBuf, passBuf);
    } else if (password.trim() === currentPass) {
      match = true;
    }

    if (match) {
      // Generate a cryptographically secure session token (24-hour validity)
      const token = crypto.randomBytes(32).toString('hex');
      const expiry = Date.now() + 24 * 60 * 60 * 1000;
      activeSessions.set(token, expiry);

      return res.json({
        success: true,
        token,
        expiresIn: 86400,
      });
    }

    return res.status(401).json({
      success: false,
      message: 'Invalid administrative password',
    });
  } catch (err: any) {
    console.error('Admin login error:', err);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

/**
 * Server-side Admin Password Change
 * Securely verifies current password or active session, then saves new password
 */
app.post('/api/admin/change-password', (req, res) => {
  try {
    const { currentPassword, newPassword, token } = req.body;

    if (!newPassword || typeof newPassword !== 'string' || newPassword.trim().length < 4) {
      return res.status(400).json({
        success: false,
        message: 'New password must be at least 4 characters long.',
      });
    }

    // Verify authorization: either a valid active admin token or the correct current password
    let isAuthorized = false;
    if (token && typeof token === 'string') {
      const expiry = activeSessions.get(token);
      if (expiry && expiry > Date.now()) {
        isAuthorized = true;
      }
    }

    const currentPass = currentAdminPassword || getStoredAdminPassword();

    if (!isAuthorized && currentPassword && typeof currentPassword === 'string') {
      const inputBuf = Buffer.from(currentPassword.trim());
      const passBuf = Buffer.from(currentPass);
      if (inputBuf.length === passBuf.length && crypto.timingSafeEqual(inputBuf, passBuf)) {
        isAuthorized = true;
      } else if (currentPassword.trim() === currentPass) {
        isAuthorized = true;
      }
    }

    if (!isAuthorized) {
      return res.status(401).json({
        success: false,
        message: 'Incorrect current password or expired session.',
      });
    }

    const success = saveStoredAdminPassword(newPassword.trim());
    if (!success) {
      return res.status(500).json({
        success: false,
        message: 'Failed to write new password configuration.',
      });
    }

    return res.json({
      success: true,
      message: 'Admin password successfully updated.',
    });
  } catch (err: any) {
    console.error('Change password error:', err);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

/**
 * Server-side Admin Session Verification
 */
app.post('/api/admin/verify', (req, res) => {
  try {
    const { token } = req.body;

    if (!token || typeof token !== 'string') {
      return res.json({ authenticated: false });
    }

    const expiry = activeSessions.get(token);
    if (expiry && expiry > Date.now()) {
      return res.json({ authenticated: true });
    }

    if (expiry && expiry <= Date.now()) {
      activeSessions.delete(token);
    }

    return res.json({ authenticated: false });
  } catch (err) {
    return res.json({ authenticated: false });
  }
});

/**
 * Server-side Admin Logout
 */
app.post('/api/admin/logout', (req, res) => {
  try {
    const { token } = req.body;
    if (token && typeof token === 'string') {
      activeSessions.delete(token);
    }
    return res.json({ success: true });
  } catch (err) {
    return res.json({ success: true });
  }
});

/**
 * Start Server:
 * Mounts Vite dev middleware in development,
 * or serves static build in production.
 */
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    // Development mode with Vite middleware
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
        watch: process.env.DISABLE_HMR === 'true' ? null : {},
      },
      appType: 'spa',
    });

    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[S.S Atelier] Server active at http://0.0.0.0:${PORT}`);
  });
}

startServer();
