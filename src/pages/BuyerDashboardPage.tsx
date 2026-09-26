import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CarCard } from '../components/CarCard';

export const BuyerDashboardPage: React.FC = () => {
  const {
    cars,
    wishlist,
    testDriveBookings,
    savedSearches,
    removeSavedSearch,
    navigate,
    user,
    showToast
  } = useApp();

  const [activeTab, setActiveTab] = useState<
    'overview' | 'wishlist' | 'searches' | 'testdrives' | 'offers'
  >('overview');

  const wishlistedCars = cars.filter((c) => wishlist.includes(c.id));

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#282a2e]/60">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#c6c9ae] mb-1">
              <span>Home</span>
              <span>/</span>
              <span className="text-[#d1f032]">Buyer Account</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Welcome back, {user?.name || 'Collector'}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/buy-cars')}
              className="px-5 py-2.5 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">search</span>
              <span>Explore Marketplace</span>
            </button>
          </div>
        </div>

        {/* 2-Column Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar */}
          <aside className="lg:col-span-3 rounded-3xl bg-[#1a1c20] border border-[#282a2e] p-4 shadow-xl space-y-1">
            {[
              { id: 'overview', label: 'Overview', icon: 'dashboard' },
              { id: 'wishlist', label: `Saved Wishlist (${wishlist.length})`, icon: 'favorite' },
              { id: 'searches', label: `Saved Searches (${savedSearches.length})`, icon: 'bookmark' },
              { id: 'testdrives', label: `Test Drives (${testDriveBookings.length})`, icon: 'key' },
              { id: 'offers', label: 'Active Offers', icon: 'payments' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all text-left ${
                  activeTab === tab.id
                    ? 'bg-[#d1f032] text-[#181e00]'
                    : 'text-[#c6c9ae] hover:text-white hover:bg-[#1e2024]'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}

            <div className="border-t border-[#282a2e] my-3"></div>

            <button
              onClick={() => navigate('/messages')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold text-[#c6c9ae] hover:text-white hover:bg-[#1e2024] transition-all text-left"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Messages &amp; Chats</span>
            </button>

            <button
              onClick={() => navigate('/profile')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold text-[#c6c9ae] hover:text-white hover:bg-[#1e2024] transition-all text-left"
            >
              <span className="material-symbols-outlined text-[20px]">person</span>
              <span>Profile &amp; Documents</span>
            </button>
          </aside>

          {/* Main Area */}
          <main className="lg:col-span-9 space-y-8">
            {/* Overview KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div
                onClick={() => setActiveTab('wishlist')}
                className="p-5 rounded-2xl bg-[#1a1c20] border border-[#282a2e] hover:border-[#d1f032]/40 transition-all cursor-pointer"
              >
                <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                  Saved Cars
                </span>
                <span className="text-2xl font-black text-white">{wishlist.length}</span>
              </div>

              <div
                onClick={() => setActiveTab('searches')}
                className="p-5 rounded-2xl bg-[#1a1c20] border border-[#282a2e] hover:border-[#d1f032]/40 transition-all cursor-pointer"
              >
                <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                  Active Searches
                </span>
                <span className="text-2xl font-black text-[#d1f032]">{savedSearches.length}</span>
              </div>

              <div
                onClick={() => setActiveTab('testdrives')}
                className="p-5 rounded-2xl bg-[#1a1c20] border border-[#282a2e] hover:border-[#d1f032]/40 transition-all cursor-pointer"
              >
                <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                  Test Drives
                </span>
                <span className="text-2xl font-black text-white">{testDriveBookings.length}</span>
              </div>

              <div
                onClick={() => setActiveTab('offers')}
                className="p-5 rounded-2xl bg-[#1a1c20] border border-[#282a2e] hover:border-[#d1f032]/40 transition-all cursor-pointer"
              >
                <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                  Active Offers
                </span>
                <span className="text-2xl font-black text-emerald-400">1</span>
              </div>
            </div>

            {/* Test Drive Passes */}
            {(activeTab === 'overview' || activeTab === 'testdrives') && (
              <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#d1f032]">key</span>
                    <span>Confirmed Test Drive Passes</span>
                  </h3>
                  <button
                    onClick={() => navigate('/test-drive')}
                    className="text-xs font-bold text-[#d1f032] hover:underline"
                  >
                    + Book Another Test Drive
                  </button>
                </div>

                <div className="space-y-3">
                  {testDriveBookings.map((td) => (
                    <div
                      key={td.id}
                      className="p-5 rounded-2xl bg-[#111317] border border-[#282a2e] flex flex-col md:flex-row items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4 w-full md:w-auto">
                        <img
                          src={td.carImage}
                          alt={td.carTitle}
                          className="w-24 h-16 object-contain rounded-xl bg-[#0c0e12] p-1 shrink-0"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-white">{td.carTitle}</h4>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                              {td.status}
                            </span>
                          </div>
                          <div className="text-xs text-[#c6c9ae] mt-1 flex items-center gap-3">
                            <span className="flex items-center gap-1 text-[#d1f032]">
                              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                              {td.date}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-[14px]">location_on</span>
                              {td.hub}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                        <button
                          onClick={() => showToast('Test drive calendar pass downloaded to Apple Wallet / Google Calendar', 'success')}
                          className="px-4 py-2 rounded-full bg-[#282a2e] hover:bg-[#333539] text-xs font-bold text-white transition-colors"
                        >
                          Calendar Pass
                        </button>
                        <button
                          onClick={() => navigate(`/car/${td.carId}`)}
                          className="px-4 py-2 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] text-xs font-bold transition-colors"
                        >
                          View Car
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Saved Searches */}
            {(activeTab === 'overview' || activeTab === 'searches') && (
              <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#d1f032]">bookmark</span>
                    <span>Saved Searches &amp; Instant Telemetry Alerts</span>
                  </h3>
                </div>

                <div className="space-y-3">
                  {savedSearches.map((search) => (
                    <div
                      key={search.id}
                      className="p-4 rounded-2xl bg-[#111317] border border-[#282a2e] flex items-center justify-between gap-4"
                    >
                      <div>
                        <div className="text-sm font-bold text-white">{search.title}</div>
                        <div className="text-xs text-[#c6c9ae] mt-0.5">
                          Query: "{search.query}" • Saved {search.createdAt}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => navigate(`/buy-cars?q=${encodeURIComponent(search.query)}`)}
                          className="px-4 py-2 rounded-full bg-[#282a2e] hover:bg-[#d1f032] hover:text-[#181e00] text-xs font-bold text-white transition-colors"
                        >
                          Run Search
                        </button>
                        <button
                          onClick={() => removeSavedSearch(search.id)}
                          className="w-8 h-8 rounded-full bg-[#282a2e] hover:bg-rose-500/20 text-[#c6c9ae] hover:text-rose-400 flex items-center justify-center transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px]">delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist Vehicles Preview */}
            {(activeTab === 'overview' || activeTab === 'wishlist') && (
              <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-xl space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#d1f032]">favorite</span>
                    <span>Saved Wishlist ({wishlistedCars.length})</span>
                  </h3>
                  <button
                    onClick={() => navigate('/wishlist')}
                    className="text-xs font-bold text-[#d1f032] hover:underline"
                  >
                    View Full Wishlist Page →
                  </button>
                </div>

                {wishlistedCars.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {wishlistedCars.slice(0, 2).map((car) => (
                      <CarCard key={car.id} car={car} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 text-xs text-[#c6c9ae]">
                    No cars saved in your garage yet.
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
