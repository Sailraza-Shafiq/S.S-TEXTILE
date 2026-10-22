import React from 'react';
import { X, Check } from 'lucide-react';
import { SSLogo } from './SSLogo';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl transform overflow-hidden rounded-3xl bg-[#A67B5B] p-6 sm:p-12 text-left shadow-2xl transition-all border border-white/30 text-[#111111]"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-white/90 border border-white/30 flex items-center justify-center text-[#111111] hover:bg-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-4 mb-6">
            <SSLogo variant="stamp" />
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#2B2B2B] uppercase">
                ATELIER MANIFESTO
              </div>
              <h2 className="font-display font-medium text-2xl text-[#111111]">
                The Architecture of S.S
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-sm text-[#2B2B2B] font-sans leading-relaxed">
            <p>
              Founded in 2026, S.S was established as a counterbalance to the hyper-accelerated churn of contemporary streetwear. Rather than producing dozens of speculative graphic prints every few weeks, we obsess over the tactile and geometric fundamentals: fabric weight, drape, collar rigidity, and silent construction.
            </p>
            <p>
              Every garment in our catalog is engineered around our custom <strong>420–500 GSM loopback cotton</strong>, knitted on vintage shuttle looms in Portugal and Japan. We reject synthetic polyester blends; our cotton is 100% organic long-staple yarn, pre-washed with natural pumice stones to guarantee a permanent, zero-shrink fit.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-4 rounded-xl border border-white/25">
              <div className="font-mono text-xs font-medium text-[#111111] mb-1">Milling Standard</div>
              <p className="text-xs text-[#2B2B2B]">Double-combed 480 GSM cotton without chemical softeners.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-4 rounded-xl border border-white/25">
              <div className="font-mono text-xs font-medium text-[#111111] mb-1">Edition Size</div>
              <p className="text-xs text-[#2B2B2B]">Limited runs of 150–300 units per silhouette to avoid waste.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-4 rounded-xl border border-white/25">
              <div className="font-mono text-xs font-medium text-[#111111] mb-1">Carbon Neutral</div>
              <p className="text-xs text-[#2B2B2B]">Every freight route and client dispatch is 100% offset.</p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-[#111111] text-white rounded-xl text-xs font-medium tracking-wider uppercase hover:bg-black transition-colors"
            >
              Close Manifesto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
