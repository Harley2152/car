import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { INDIAN_CITIES } from '../data/cars';

export const ProfilePage: React.FC = () => {
  const { user, navigate, showToast } = useApp();

  const [name, setName] = useState(user?.name || 'Kabir Singhania');
  const [email, setEmail] = useState(user?.email || 'kabir.singhania@apexcapital.in');
  const [phone, setPhone] = useState(user?.phone || '+91 98201 55678');
  const [city, setCity] = useState(user?.city || 'Mumbai');
  const [notifySms, setNotifySms] = useState(true);
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifyPriceDrops, setNotifyPriceDrops] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Profile credentials and preferences updated', 'success');
  };

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="flex items-center gap-2 text-xs text-[#c6c9ae] mb-2">
          <span>Home</span>
          <span>/</span>
          <span className="text-[#d1f032]">Collector Profile</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
          Account Profile &amp; Verification
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left KYC Card */}
          <div className="lg:col-span-4 rounded-3xl bg-[#1a1c20] border border-[#282a2e] p-6 shadow-xl space-y-6 text-center">
            <div className="w-24 h-24 rounded-full bg-[#282a2e] border-2 border-[#d1f032] flex items-center justify-center mx-auto text-[#d1f032] text-3xl font-black shadow-lg">
              {name.charAt(0)}
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">{name}</h3>
              <p className="text-xs text-[#c6c9ae]">{email}</p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                <span>AutoHub KYC Verified</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#111317] border border-[#282a2e] text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#c6c9ae]">Driving License:</span>
                <span className="text-white font-mono font-bold">MH01-2018-0042</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#c6c9ae]">PAN Status:</span>
                <span className="text-emerald-400 font-bold">Linked &amp; Verified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#c6c9ae]">Account Role:</span>
                <span className="text-white font-bold capitalize">{user?.role || 'Collector'}</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full py-2.5 rounded-xl bg-[#282a2e] hover:bg-[#333539] text-white text-xs font-bold transition-colors"
              >
                Buyer Dashboard
              </button>
              <button
                onClick={() => navigate('/seller/dashboard')}
                className="w-full py-2.5 rounded-xl bg-[#111317] hover:bg-[#282a2e] text-[#d1f032] text-xs font-bold border border-[#282a2e] transition-colors"
              >
                Seller Studio
              </button>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-8 rounded-3xl bg-[#1a1c20] border border-[#282a2e] p-8 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white">Profile Details</h3>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#c6c9ae] block mb-1">Full Legal Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#c6c9ae] block mb-1">Primary Hub</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white"
                  >
                    {INDIAN_CITIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#c6c9ae] block mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#c6c9ae] block mb-1">Mobile Contact</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#282a2e] space-y-3">
                <h4 className="text-xs font-bold text-[#d1f032] uppercase tracking-wider">
                  Telemetry &amp; Notification Preferences
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-[#e2e2e8]">
                    <input
                      type="checkbox"
                      checked={notifyPriceDrops}
                      onChange={(e) => setNotifyPriceDrops(e.target.checked)}
                      className="accent-[#d1f032] w-4 h-4"
                    />
                    <span>Instant alerts on price drops for saved cars</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-[#e2e2e8]">
                    <input
                      type="checkbox"
                      checked={notifySms}
                      onChange={(e) => setNotifySms(e.target.checked)}
                      className="accent-[#d1f032] w-4 h-4"
                    />
                    <span>SMS updates for doorstep test drive arrivals</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-[#e2e2e8]">
                    <input
                      type="checkbox"
                      checked={notifyEmail}
                      onChange={(e) => setNotifyEmail(e.target.checked)}
                      className="accent-[#d1f032] w-4 h-4"
                    />
                    <span>Monthly valuation index &amp; market reports</span>
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  Save Profile Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
