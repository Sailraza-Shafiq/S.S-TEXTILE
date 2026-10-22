/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Lock, ArrowRight, ArrowLeft, Shield, Eye, EyeOff, Key, CheckCircle } from 'lucide-react';
import { SSLogo } from '../SSLogo';
import { loginAdmin } from '../../services/adminAuthService';
import { AdminPasswordModal } from './AdminPasswordModal';

interface AdminLoginProps {
  onSuccess: () => void;
  onBackToStore: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onSuccess, onBackToStore }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isChangeModalOpen, setIsChangeModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setErrorMessage('Please enter the admin password.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await loginAdmin(password);
      if (res.success) {
        onSuccess();
      } else {
        setErrorMessage(res.message || 'Invalid administrator password.');
      }
    } catch (err: any) {
      setErrorMessage('Authentication request failed. Please retry.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#A67B5B] flex flex-col items-center justify-center p-4 sm:p-6 selection:bg-[#111111] selection:text-white">
      {/* Container */}
      <div className="w-full max-w-md">
        
        {/* Back Link */}
        <div className="mb-6">
          <button
            type="button"
            onClick={onBackToStore}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#2B2B2B] hover:text-[#111111] transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to S.S Storefront</span>
          </button>
        </div>

        {/* Card */}
        <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/25 shadow-xl text-[#111111]">
          {/* Brand Mark */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <SSLogo variant="hero" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111111] text-white text-[10px] font-mono tracking-widest uppercase mb-2">
              <Shield className="w-3 h-3 text-amber-300" />
              <span>ATELIER ADMINISTRATION</span>
            </div>
            <h1 className="font-display font-medium text-2xl text-[#111111] tracking-tight">
              Staff Portal Access
            </h1>
            <p className="text-xs text-[#2B2B2B] mt-1 font-sans">
              Enter your secret administrator password to manage clothing catalog and customer orders.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label 
                htmlFor="admin-password" 
                className="block text-xs font-mono font-medium uppercase tracking-wider text-[#111111] mb-2"
              >
                Admin Password
              </label>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2B2B2B]">
                  <Lock className="w-4 h-4" />
                </div>
                
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  autoFocus
                  placeholder="Enter administrator password..."
                  className="w-full pl-10 pr-10 py-3 bg-white/90 border border-white/40 rounded-xl text-sm font-sans text-[#111111] placeholder:text-[#2B2B2B]/60 focus:outline-hidden focus:ring-2 focus:ring-[#111111] focus:border-[#111111] transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#2B2B2B] hover:text-[#111111]"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="p-3 bg-red-500/20 border border-red-500/40 rounded-xl text-xs font-sans text-red-950 animate-in fade-in duration-200">
                {errorMessage}
              </div>
            )}

            {/* Success Message */}
            {successMessage && (
              <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-xs font-sans text-emerald-950 flex items-center gap-2 animate-in fade-in duration-200">
                <CheckCircle className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>{successMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-[#111111] hover:bg-black text-white rounded-xl text-xs font-mono font-medium tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>{isLoading ? 'Verifying...' : 'Unlock Atelier Dashboard'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Change Password Link */}
          <div className="mt-5 text-center">
            <button
              type="button"
              onClick={() => setIsChangeModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#2B2B2B] hover:text-[#111111] underline decoration-dotted transition-colors"
            >
              <Key className="w-3.5 h-3.5" />
              <span>Change Admin Password</span>
            </button>
          </div>

          {/* Footer note */}
          <div className="mt-6 pt-5 border-t border-white/20 text-center">
            <p className="text-[11px] font-mono text-[#2B2B2B]">
              S.S CLOTHING CO. · SECURITY SYSTEM VER. 2.4
            </p>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      <AdminPasswordModal
        isOpen={isChangeModalOpen}
        onClose={() => setIsChangeModalOpen(false)}
        initialCurrentPassword={password}
        onSuccess={(newPass) => {
          setPassword(newPass);
          setSuccessMessage('Password changed successfully! You can now log in with your new password.');
          setErrorMessage(null);
        }}
      />
    </div>
  );
};
