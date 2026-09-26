import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const LoginPage: React.FC = () => {
  const { login, navigate, showToast } = useApp();

  const [authMethod, setAuthMethod] = useState<'email' | 'mobile'>('email');
  const [email, setEmail] = useState('collector@autohub.in');
  const [mobile, setMobile] = useState('+91 98201 55678');
  const [password, setPassword] = useState('password123');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(authMethod === 'email' ? email : `${mobile}@autohub.in`, 'buyer');
    navigate('/dashboard');
  };

  const handleGoogleLogin = () => {
    login('collector.google@autohub.in', 'buyer');
    showToast('Authenticated via Google Single Sign-On', 'success');
    navigate('/dashboard');
  };

  return (
    <div className="w-full bg-[#111317] min-h-[calc(100vh-80px)] py-12 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-2xl p-8 space-y-6">
        {/* Brand Lockup */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#d1f032] shadow-[0_0_12px_#d1f032]"></div>
            <span className="text-xl font-extrabold text-white">Auto<span className="text-[#d1f032]">Hub</span></span>
          </div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">Access Your Garage</h2>
          <p className="text-xs text-[#c6c9ae]">
            Sign in to track shortlisted machines, view private telemetry, and manage offers.
          </p>
        </div>

        {/* Auth Method Switcher */}
        <div className="flex p-1 rounded-2xl bg-[#111317] border border-[#282a2e]">
          <button
            type="button"
            onClick={() => setAuthMethod('email')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
              authMethod === 'email'
                ? 'bg-[#d1f032] text-[#181e00]'
                : 'text-[#c6c9ae] hover:text-white'
            }`}
          >
            Email Address
          </button>
          <button
            type="button"
            onClick={() => setAuthMethod('mobile')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
              authMethod === 'mobile'
                ? 'bg-[#d1f032] text-[#181e00]'
                : 'text-[#c6c9ae] hover:text-white'
            }`}
          >
            Mobile OTP
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {authMethod === 'email' ? (
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
          ) : (
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
          )}

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-[#c6c9ae]">Password</label>
              <button
                type="button"
                onClick={() => showToast('Password reset link dispatched', 'info')}
                className="text-[11px] text-[#d1f032] hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full p-3.5 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white placeholder-[#90937a] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs sm:text-sm shadow-[0_8px_24px_rgba(209,240,50,0.3)] transition-all cursor-pointer"
          >
            Continue to AutoHub
          </button>
        </form>

        {/* Social SSO Divider */}
        <div className="flex items-center gap-3 my-2">
          <div className="flex-1 h-[1px] bg-[#282a2e]"></div>
          <span className="text-[10px] text-[#90937a] uppercase font-bold tracking-wider">or sign in with</span>
          <div className="flex-1 h-[1px] bg-[#282a2e]"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full py-3 rounded-full bg-[#111317] hover:bg-[#282a2e] text-white border border-[#282a2e] text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">account_circle</span>
          <span>Continue with Google</span>
        </button>

        <div className="text-center pt-2 text-xs text-[#c6c9ae]">
          Don't have an AutoHub account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="text-[#d1f032] hover:underline font-bold"
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
};
