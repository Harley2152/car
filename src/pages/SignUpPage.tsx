import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const SignUpPage: React.FC = () => {
  const { login, navigate, showToast } = useApp();

  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, role);
    showToast(`Welcome to AutoHub! Account activated as ${role.toUpperCase()}`, 'success');
    navigate(role === 'seller' ? '/seller/dashboard' : '/dashboard');
  };

  return (
    <div className="w-full bg-[#111317] min-h-[calc(100vh-80px)] py-12 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-2xl p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#d1f032] shadow-[0_0_12px_#d1f032]"></div>
            <span className="text-xl font-extrabold text-white">Auto<span className="text-[#d1f032]">Hub</span></span>
          </div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">Create Your Account</h2>
          <p className="text-xs text-[#c6c9ae]">
            Join India's premier verified car discovery and liquidation network.
          </p>
        </div>

        {/* Account Type Selector */}
        <div>
          <label className="text-xs font-bold text-[#c6c9ae] block mb-2">I want to:</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setRole('buyer')}
              className={`p-3 rounded-2xl text-xs font-bold border transition-all text-center flex flex-col items-center gap-1 ${
                role === 'buyer'
                  ? 'bg-[#d1f032] text-[#181e00] border-[#d1f032]'
                  : 'bg-[#111317] text-[#c6c9ae] border-[#282a2e]'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">directions_car</span>
              <span>Buyer Account</span>
            </button>
            <button
              type="button"
              onClick={() => setRole('seller')}
              className={`p-3 rounded-2xl text-xs font-bold border transition-all text-center flex flex-col items-center gap-1 ${
                role === 'seller'
                  ? 'bg-[#d1f032] text-[#181e00] border-[#d1f032]'
                  : 'bg-[#111317] text-[#c6c9ae] border-[#282a2e]'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">storefront</span>
              <span>Seller Studio</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-[#c6c9ae] block mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Kabir Singhania"
              className="w-full p-3.5 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white placeholder-[#90937a] focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#c6c9ae] block mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@domain.com"
              className="w-full p-3.5 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white placeholder-[#90937a] focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#c6c9ae] block mb-1">Mobile Number</label>
            <input
              type="tel"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="+91 98200 XXXXX"
              className="w-full p-3.5 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white placeholder-[#90937a] focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#c6c9ae] block mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min. 8 characters"
              className="w-full p-3.5 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white placeholder-[#90937a] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs sm:text-sm shadow-[0_8px_24px_rgba(209,240,50,0.3)] transition-all cursor-pointer"
          >
            Create Account
          </button>
        </form>

        <div className="text-center pt-2 text-xs text-[#c6c9ae]">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-[#d1f032] hover:underline font-bold"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};
