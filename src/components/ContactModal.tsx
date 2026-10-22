import React, { useState } from 'react';
import { X, CheckCircle2, Mail, MapPin, Clock } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xl transform overflow-hidden rounded-3xl bg-[#A67B5B] p-6 sm:p-10 text-left shadow-2xl transition-all border border-white/30 text-[#111111]"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-white/90 border border-white/30 flex items-center justify-center text-[#111111] hover:bg-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="text-[10px] font-mono tracking-widest text-[#2B2B2B] uppercase mb-1">
            CLIENT CONCIERGE
          </div>
          <h2 className="font-display font-medium text-2xl text-[#111111] mb-2">
            Inquire with the Atelier
          </h2>
          <p className="text-xs text-[#2B2B2B] mb-6 font-sans">
            Our private client team assists with sizing consultations, archive releases, and custom appointments.
          </p>

          {submitted ? (
            <div className="p-6 bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-2xl border border-white/25 text-center my-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
              <h3 className="font-display font-medium text-base text-[#111111] mb-1">
                Inquiry Received
              </h3>
              <p className="text-xs text-[#2B2B2B] font-sans">
                A member of the S.S client services team will respond to {form.email} within 12 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#111111] uppercase mb-1 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Marcus Chen"
                  className="w-full px-3.5 py-2.5 bg-white border border-white/30 rounded-xl text-xs font-sans text-[#111111] focus:ring-1 focus:ring-[#111111]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#111111] uppercase mb-1 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 bg-white border border-white/30 rounded-xl text-xs font-sans text-[#111111] focus:ring-1 focus:ring-[#111111]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#111111] uppercase mb-1 font-medium">
                  Inquiry Details
                </label>
                <textarea
                  rows={3}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Please specify sizing inquiries, order reference, or custom request..."
                  className="w-full px-3.5 py-2.5 bg-white border border-white/30 rounded-xl text-xs font-sans text-[#111111] focus:ring-1 focus:ring-[#111111]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#111111] hover:bg-black text-white rounded-xl text-xs font-medium tracking-wider uppercase transition-all shadow-sm"
              >
                Transmit Message
              </button>
            </form>
          )}

          <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-2 gap-4 text-xs font-mono text-[#2B2B2B]">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#111111]" />
              <span>concierge@ss-atelier.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#111111]" />
              <span>Response: &lt; 12 hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
