import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface NewsletterProps {
  onSuccess: (email: string) => void;
}

export const Newsletter: React.FC<NewsletterProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubmitted(true);
    onSuccess(email);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Glass Card on Cafe au Lait */}
        <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-3xl p-8 sm:p-14 border border-white/25 shadow-sm text-center relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#2B2B2B] uppercase mb-3">
            <span>MEMBERSHIP</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>THE S.S REGISTRY</span>
          </div>

          <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#111111] tracking-tight mb-3">
            Join the S.S Syndicate
          </h2>

          <p className="text-[#2B2B2B] text-sm sm:text-base max-w-lg mx-auto mb-8 font-sans">
            Acquire private allocations 24 hours prior to global drops. We send zero marketing noise—only lookbooks and release passwords.
          </p>

          {isSubmitted ? (
            <div className="p-6 bg-[#111111] text-white rounded-2xl max-w-md mx-auto flex items-center justify-center gap-3 animate-in fade-in duration-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-left">
                <div className="font-display font-medium text-sm tracking-wide">
                  Welcome to the S.S Registry
                </div>
                <div className="text-xs text-stone-300 font-mono">
                  Lookbook 01 & private passcode sent to {email}.
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3.5 bg-white border border-white/30 rounded-xl text-[#111111] placeholder:text-[#2B2B2B]/60 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#111111] focus:border-[#111111] transition-all font-sans"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#111111] hover:bg-black text-white text-xs font-medium tracking-wider uppercase rounded-xl transition-all flex items-center justify-center gap-2 shrink-0 shadow-sm"
                >
                  <span>Request Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {error && (
                <p className="text-xs text-red-600 mt-2 font-sans text-left">
                  {error}
                </p>
              )}

              <p className="text-[11px] text-[#2B2B2B] font-mono tracking-wide mt-3">
                Strict privacy. Unsubscribe at any moment. Zero algorithmic tracking.
              </p>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
