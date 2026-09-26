import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const NotificationsPage: React.FC = () => {
  const { notifications, markAllNotificationsRead, markNotificationRead, navigate } = useApp();
  const [filterType, setFilterType] = useState<string>('all');

  const filtered = notifications.filter((n) => {
    if (filterType === 'all') return true;
    return n.type === filterType;
  });

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#282a2e]/60">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#c6c9ae] mb-1">
              <span>Home</span>
              <span>/</span>
              <span className="text-[#d1f032]">Telemetry Feed</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Notifications &amp; Activity
            </h1>
          </div>

          <button
            onClick={markAllNotificationsRead}
            className="px-4 py-2 rounded-full bg-[#1e2024] hover:bg-[#282a2e] text-xs font-bold text-white border border-[#282a2e] transition-colors"
          >
            Mark All as Read
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {[
            { id: 'all', label: 'All Activity' },
            { id: 'price_drop', label: 'Price Drops' },
            { id: 'test_drive', label: 'Test Drives' },
            { id: 'offer', label: 'Offers' },
            { id: 'verification', label: 'Verifications' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filterType === tab.id
                  ? 'bg-[#d1f032] text-[#181e00]'
                  : 'bg-[#1a1c20] text-[#c6c9ae] hover:text-white border border-[#282a2e]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                markNotificationRead(item.id);
                if (item.actionUrl) navigate(item.actionUrl);
              }}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                item.read
                  ? 'bg-[#1a1c20]/60 border-[#282a2e]'
                  : 'bg-[#1a1c20] border-[#d1f032]/40 shadow-lg'
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                    item.type === 'price_drop'
                      ? 'bg-[#d1f032]/20 text-[#d1f032]'
                      : item.type === 'test_drive'
                      ? 'bg-sky-500/20 text-sky-400'
                      : item.type === 'offer'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-purple-500/20 text-purple-400'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {item.type === 'price_drop'
                      ? 'trending_down'
                      : item.type === 'test_drive'
                      ? 'key'
                      : item.type === 'offer'
                      ? 'payments'
                      : 'verified'}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    {!item.read && (
                      <span className="w-2 h-2 rounded-full bg-[#d1f032]"></span>
                    )}
                  </div>
                  <p className="text-xs text-[#c6c9ae] mt-0.5">{item.message}</p>
                  <span className="text-[10px] text-[#90937a] mt-1 block">{item.timestamp}</span>
                </div>
              </div>

              {item.carImage && (
                <img
                  src={item.carImage}
                  alt="Car Preview"
                  className="w-16 h-10 object-contain rounded-lg bg-[#0c0e12] p-1 hidden sm:block shrink-0"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
