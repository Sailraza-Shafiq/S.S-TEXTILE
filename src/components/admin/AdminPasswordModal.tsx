/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Key, Shield, Eye, EyeOff, Check, AlertCircle, Loader2 } from 'lucide-react';
import { changeAdminPassword } from '../../services/adminAuthService';

interface AdminPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newPasswordNotice: string) => void;
  initialCurrentPassword?: string;
}

export const AdminPasswordModal: React.FC<AdminPasswordModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialCurrentPassword = '',
}) => {
  const [currentPassword, setCurrentPassword] = useState(initialCurrentPassword);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!currentPassword.trim()) {
      setErrorMessage('Please enter your current administrator password.');
      return;
    }

    if (!newPassword.trim()) {
      setErrorMessage('Please enter a new password.');
      return;
    }

    if (newPassword.trim().length < 4) {
      setErrorMessage('New password must be at least 4 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('New passwords do not match. Please re-enter.');
      return;
    }

    if (newPassword === currentPassword) {
      setErrorMessage('New password must be different from current password.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await changeAdminPassword(currentPassword.trim(), newPassword.trim());
      if (res.success) {
        onSuccess(newPassword.trim());
        onClose();
      } else {
        setErrorMessage(res.message || 'Failed to update administrator password.');
      }
    } catch (err: any) {
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md transform overflow-hidden rounded-3xl bg-[#A67B5B] p-6 sm:p-8 text-left shadow-2xl transition-all border border-white/30 text-[#111111]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/20 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#111111] text-white flex items-center justify-center shadow-xs">
                <Key className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display font-medium text-lg text-[#111111]">
                  Change Admin Password
                </h3>
                <p className="text-[11px] font-mono text-[#2B2B2B]">
                  S.S ATELIER SECURITY SETTINGS
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/40 hover:bg-white flex items-center justify-center text-[#111111] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMessage && (
              <div className="p-3 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-start gap-2.5 text-xs text-rose-950 font-sans">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-800 mt-0.5" />
                <span className="leading-tight">{errorMessage}</span>
              </div>
            )}

            {/* Current Password */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#111111] mb-1.5 font-medium">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showCurrent ? 'text' : 'password'}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password..."
                  className="w-full px-4 py-2.5 bg-white/70 focus:bg-white text-[#111111] rounded-xl border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#111111] text-sm font-sans placeholder:text-[#2B2B2B]/50 transition-all pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2B2B2B] hover:text-[#111111]"
                  aria-label={showCurrent ? 'Hide password' : 'Show password'}
                >
                  {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#111111] mb-1.5 font-medium">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNew ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password (min. 4 characters)..."
                  className="w-full px-4 py-2.5 bg-white/70 focus:bg-white text-[#111111] rounded-xl border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#111111] text-sm font-sans placeholder:text-[#2B2B2B]/50 transition-all pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2B2B2B] hover:text-[#111111]"
                  aria-label={showNew ? 'Hide password' : 'Show password'}
                >
                  {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#111111] mb-1.5 font-medium">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password..."
                  className="w-full px-4 py-2.5 bg-white/70 focus:bg-white text-[#111111] rounded-xl border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#111111] text-sm font-sans placeholder:text-[#2B2B2B]/50 transition-all pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2B2B2B] hover:text-[#111111]"
                  aria-label={showConfirm ? 'Hide password' : 'Show password'}
                >
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Hint Notice */}
            <div className="p-3 bg-white/25 rounded-xl border border-white/30 text-[11px] font-mono text-[#2B2B2B]">
              <span className="font-semibold text-[#111111]">Notice:</span> Changing the password updates server authentication immediately.
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-white/30 hover:bg-white/50 text-[#111111] text-xs font-mono uppercase tracking-wider transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-5 py-2.5 rounded-xl bg-[#111111] hover:bg-black text-white text-xs font-mono font-medium uppercase tracking-wider transition-all shadow-md flex items-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Updating...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Save Password</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
