import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { navigate, showToast } = useApp();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      showToast(`VIP Telemetry alerts dispatched to ${email}`, 'success');
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#0c0e12] pt-12 pb-8 border-t border-[#282a2e]/50 shadow-[0_-12px_36px_-6px_rgba(0,0,0,0.6)]">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* VIP Drops & Hypercar Listings Newsletter Box */}
        <div className="p-8 rounded-3xl bg-[#1a1c20] border border-[#282a2e] mb-12 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl text-center lg:text-left">
            <div className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider mb-1">
              AutoHub Telemetry &amp; Dispatch
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white mb-1">
              Get VIP Drops &amp; Hypercar Listings First
            </div>
            <div className="text-xs sm:text-sm text-[#c6c9ae]">
              Receive exclusive allocations, verified vehicle valuation updates, and private collector drops directly in your inbox.
            </div>
          </div>
          <div className="w-full lg:w-auto flex-1 max-w-md">
            <form onSubmit={handleSubscribe} className="flex items-center p-1 rounded-full bg-[#282a2e] border border-[#333539]">
              <input
                className="w-full px-4 py-2 bg-transparent text-white placeholder-[#90937a] focus:outline-none text-xs sm:text-sm"
                placeholder="Enter your personal or business email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                className="px-6 py-2 rounded-full bg-[#d1f032] text-[#181e00] font-bold text-xs sm:text-sm hover:bg-[#b5d401] transition-all shadow-[0_4px_16px_rgba(209,240,50,0.3)] shrink-0"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* 4 Main Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* About AutoHub */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-widest">
              About AutoHub
            </div>
            <ul className="space-y-2 text-xs text-[#c6c9ae]">
              <li onClick={() => navigate('/about')} className="hover:text-white transition-colors cursor-pointer">
                Corporate Overview
              </li>
              <li onClick={() => navigate('/about')} className="hover:text-white transition-colors cursor-pointer">
                Leadership &amp; Team
              </li>
              <li onClick={() => navigate('/about')} className="hover:text-white transition-colors cursor-pointer">
                Careers at AutoHub
              </li>
              <li onClick={() => navigate('/services')} className="hover:text-white transition-colors cursor-pointer">
                Supercar Concierge
              </li>
              <li onClick={() => navigate('/about')} className="hover:text-white transition-colors cursor-pointer">
                Press Releases
              </li>
            </ul>
          </div>

          {/* Buy & Sell */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-widest">
              Buy &amp; Sell
            </div>
            <ul className="space-y-2 text-xs text-[#c6c9ae]">
              <li onClick={() => navigate('/sell-car')} className="hover:text-white transition-colors cursor-pointer">
                Direct Car Valuation
              </li>
              <li onClick={() => navigate('/used-cars')} className="hover:text-white transition-colors cursor-pointer">
                Certified Pre-Owned
              </li>
              <li onClick={() => navigate('/services')} className="hover:text-white transition-colors cursor-pointer">
                AutoHub Escrow Security
              </li>
              <li onClick={() => navigate('/finance')} className="hover:text-white transition-colors cursor-pointer">
                Supercar Financing
              </li>
              <li onClick={() => navigate('/services')} className="hover:text-white transition-colors cursor-pointer">
                Vehicle History Reports
              </li>
            </ul>
          </div>

          {/* Top Brands */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-widest">
              Top Brands
            </div>
            <ul className="space-y-2 text-xs text-[#c6c9ae]">
              <li onClick={() => navigate('/brands/Porsche')} className="hover:text-white transition-colors cursor-pointer">
                Porsche
              </li>
              <li onClick={() => navigate('/brands/BMW')} className="hover:text-white transition-colors cursor-pointer">
                BMW M Series
              </li>
              <li onClick={() => navigate('/brands/Mercedes-Benz')} className="hover:text-white transition-colors cursor-pointer">
                Mercedes-AMG
              </li>
              <li onClick={() => navigate('/brands/Audi')} className="hover:text-white transition-colors cursor-pointer">
                Audi Sport
              </li>
              <li onClick={() => navigate('/brands/Tata')} className="hover:text-white transition-colors cursor-pointer">
                Tata Motors EV
              </li>
              <li onClick={() => navigate('/brands/Mahindra')} className="hover:text-white transition-colors cursor-pointer">
                Mahindra Born Electric
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-widest">
              Customer Support
            </div>
            <ul className="space-y-2 text-xs text-[#c6c9ae]">
              <li onClick={() => navigate('/contact')} className="hover:text-white transition-colors cursor-pointer">
                24x7 India Highway Assistance
              </li>
              <li onClick={() => navigate('/test-drive')} className="hover:text-white transition-colors cursor-pointer">
                Inspection Hubs
              </li>
              <li onClick={() => navigate('/services')} className="hover:text-white transition-colors cursor-pointer">
                RC Transfer Assistance
              </li>
              <li onClick={() => navigate('/services')} className="hover:text-white transition-colors cursor-pointer">
                Warranty Shield
              </li>
              <li onClick={() => navigate('/help')} className="hover:text-white transition-colors cursor-pointer">
                Dispute Resolution &amp; FAQ
              </li>
            </ul>
          </div>
        </div>

        {/* India Hubs Row & Base Currency */}
        <div className="py-4 border-t border-[#1e2024] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-[#c6c9ae] text-xs">
            <span className="material-symbols-outlined text-[16px] text-[#d1f032]">hub</span>
            <span className="font-semibold text-white">India Hubs:</span>
            {['Mumbai', 'Delhi NCR', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Coimbatore'].map((hub, i, arr) => (
              <React.Fragment key={hub}>
                <span
                  onClick={() => navigate(`/buy-cars?city=${hub}`)}
                  className="hover:text-[#d1f032] transition-colors cursor-pointer"
                >
                  {hub}
                </span>
                {i < arr.length - 1 && <span className="text-[#454934]">•</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#282a2e] text-[#e2e2e8] text-[11px] font-bold tracking-wider">
            <span className="text-[#d1f032] font-extrabold text-sm">₹</span>
            <span>BASE CURRENCY: LAKHS / CRORES (INR)</span>
          </div>
        </div>

        {/* Bottom Copyright & App Badges */}
        <div className="pt-6 border-t border-[#1e2024] flex flex-col md:flex-row items-center justify-between gap-4 text-[#c6c9ae] text-xs">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">AutoHub Technologies Pvt Ltd.</span>
            <span>© 2025 All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => showToast('AutoHub iOS App is in TestFlight private beta', 'info')}
                className="px-3 py-1.5 rounded-full bg-[#282a2e] hover:bg-[#333539] text-white text-[11px] font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">phone_iphone</span>
                <span>App Store</span>
              </button>
              <button
                onClick={() => showToast('AutoHub Android App is available on Google Play', 'info')}
                className="px-3 py-1.5 rounded-full bg-[#282a2e] hover:bg-[#333539] text-white text-[11px] font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-[#d1f032]">smart_display</span>
                <span>Google Play</span>
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              <button aria-label="Global" className="w-8 h-8 rounded-full bg-[#282a2e] hover:bg-[#333539] flex items-center justify-center text-[#c6c9ae] hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[18px]">public</span>
              </button>
              <button aria-label="Forum" onClick={() => navigate('/help')} className="w-8 h-8 rounded-full bg-[#282a2e] hover:bg-[#333539] flex items-center justify-center text-[#c6c9ae] hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[18px]">forum</span>
              </button>
              <button aria-label="Share" onClick={() => showToast('Share link copied to clipboard', 'success')} className="w-8 h-8 rounded-full bg-[#282a2e] hover:bg-[#333539] flex items-center justify-center text-[#c6c9ae] hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[18px]">share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
