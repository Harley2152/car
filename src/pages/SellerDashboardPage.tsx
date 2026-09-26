import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const SellerDashboardPage: React.FC = () => {
  const { cars, setCars, navigate, showToast } = useApp();
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'listings' | 'leads' | 'messages' | 'offers' | 'analytics'
  >('dashboard');

  // Filter listings owned by seller (or show top cars as mock listings)
  const myListings = cars.slice(0, 4);

  const handlePauseListing = (id: string) => {
    setCars((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === 'Active' ? 'Draft' : 'Active' }
          : c
      )
    );
    showToast('Listing status toggled', 'info');
  };

  const handleDeleteListing = (id: string) => {
    setCars((prev) => prev.filter((c) => c.id !== id));
    showToast('Listing removed from showroom', 'warning');
  };

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#282a2e]/60">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#c6c9ae] mb-1">
              <span>Home</span>
              <span>/</span>
              <span className="text-[#d1f032]">Seller Studio Hub</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Seller Command Console
            </h1>
          </div>

          <button
            onClick={() => navigate('/sell-car')}
            className="px-6 py-2.5 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs shadow-md transition-all inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>Create New Listing</span>
          </button>
        </div>

        {/* 2-Column Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Menu */}
          <aside className="lg:col-span-3 rounded-3xl bg-[#1a1c20] border border-[#282a2e] p-4 shadow-xl space-y-1">
            {[
              { id: 'dashboard', label: 'Dashboard Overview', icon: 'dashboard' },
              { id: 'listings', label: 'My Listed Vehicles', icon: 'directions_car' },
              { id: 'leads', label: 'Buyer Leads & Inquiries', icon: 'contacts' },
              { id: 'offers', label: 'Purchase Offers', icon: 'payments' },
              { id: 'analytics', label: 'Telemetry & Analytics', icon: 'analytics' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all text-left ${
                  activeTab === item.id
                    ? 'bg-[#d1f032] text-[#181e00]'
                    : 'text-[#c6c9ae] hover:text-white hover:bg-[#1e2024]'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}

            <div className="border-t border-[#282a2e] my-3"></div>

            <button
              onClick={() => navigate('/messages')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold text-[#c6c9ae] hover:text-white hover:bg-[#1e2024] transition-all text-left"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Messages</span>
            </button>

            <button
              onClick={() => navigate('/profile')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold text-[#c6c9ae] hover:text-white hover:bg-[#1e2024] transition-all text-left"
            >
              <span className="material-symbols-outlined text-[20px]">settings</span>
              <span>Settings</span>
            </button>
          </aside>

          {/* Main Dashboard Area */}
          <main className="lg:col-span-9 space-y-8">
            {/* KPI Statistics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              <div className="p-5 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
                <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                  Active Listings
                </span>
                <span className="text-2xl font-black text-white">4</span>
              </div>

              <div className="p-5 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
                <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                  Total Views
                </span>
                <span className="text-2xl font-black text-[#d1f032]">19,420</span>
              </div>

              <div className="p-5 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
                <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                  Verified Leads
                </span>
                <span className="text-2xl font-black text-white">165</span>
              </div>

              <div className="p-5 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
                <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                  Offers Received
                </span>
                <span className="text-2xl font-black text-emerald-400">12</span>
              </div>

              <div className="p-5 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
                <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                  Saved by Buyers
                </span>
                <span className="text-2xl font-black text-white">380</span>
              </div>
            </div>

            {/* My Listings Section */}
            {(activeTab === 'dashboard' || activeTab === 'listings') && (
              <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-xl space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">My Vehicle Inventory</h3>
                  <span className="text-xs text-[#c6c9ae]">Managing {myListings.length} Vehicles</span>
                </div>

                <div className="space-y-4">
                  {myListings.map((car) => (
                    <div
                      key={car.id}
                      className="p-4 rounded-2xl bg-[#111317] border border-[#282a2e] flex flex-col md:flex-row items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4 w-full md:w-auto">
                        <img
                          src={car.images.hero}
                          alt={car.title}
                          className="w-24 h-16 object-contain rounded-xl bg-[#0c0e12] p-1 shrink-0"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-white">{car.title}</h4>
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                car.status === 'Active'
                                  ? 'bg-emerald-500/20 text-emerald-400'
                                  : car.status === 'Pending Verification'
                                  ? 'bg-amber-500/20 text-amber-400'
                                  : 'bg-[#282a2e] text-[#c6c9ae]'
                              }`}
                            >
                              {car.status}
                            </span>
                          </div>
                          <div className="text-xs text-[#c6c9ae] mt-0.5">
                            {car.year} • {car.km.toLocaleString('en-IN')} KM • {car.city}
                          </div>
                          <div className="text-sm font-extrabold text-[#d1f032] mt-1">
                            {car.priceFormatted}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                        <div className="text-center text-xs">
                          <span className="text-[#c6c9ae] block text-[10px]">Views</span>
                          <span className="font-bold text-white">{car.viewsCount}</span>
                        </div>
                        <div className="text-center text-xs">
                          <span className="text-[#c6c9ae] block text-[10px]">Leads</span>
                          <span className="font-bold text-[#d1f032]">{car.leadsCount}</span>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => navigate(`/car/${car.id}`)}
                            title="View Listing"
                            className="w-8 h-8 rounded-full bg-[#282a2e] hover:bg-[#333539] text-[#c6c9ae] hover:text-white flex items-center justify-center transition-colors"
                          >
                            <span className="material-symbols-outlined text-[16px]">visibility</span>
                          </button>
                          <button
                            onClick={() => handlePauseListing(car.id)}
                            title="Pause Listing"
                            className="w-8 h-8 rounded-full bg-[#282a2e] hover:bg-[#333539] text-[#c6c9ae] hover:text-white flex items-center justify-center transition-colors"
                          >
                            <span className="material-symbols-outlined text-[16px]">pause</span>
                          </button>
                          <button
                            onClick={() => handleDeleteListing(car.id)}
                            title="Delete Listing"
                            className="w-8 h-8 rounded-full bg-[#282a2e] hover:bg-rose-500/20 text-[#c6c9ae] hover:text-rose-400 flex items-center justify-center transition-colors"
                          >
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Buyer Leads Section */}
            {(activeTab === 'dashboard' || activeTab === 'leads') && (
              <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-xl space-y-4">
                <h3 className="text-lg font-bold text-white">Recent Buyer Inquiries</h3>
                <div className="space-y-3">
                  {[
                    {
                      name: 'Vikram Mehta',
                      phone: '+91 98200 11980',
                      car: 'Porsche 911 Carrera S (992)',
                      type: 'Doorstep Test Drive Request',
                      time: '18 mins ago'
                    },
                    {
                      name: 'Aishwarya Nair',
                      phone: '+91 99010 44210',
                      car: 'BMW M4 Competition',
                      type: 'Financing Pre-Approval',
                      time: '2 hours ago'
                    },
                    {
                      name: 'Rohit Shenoy',
                      phone: '+91 97410 88200',
                      car: 'Audi e-tron GT EV',
                      type: 'Direct Purchase Inquiry',
                      time: 'Yesterday'
                    }
                  ].map((lead, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-[#111317] border border-[#282a2e] flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-white">{lead.name}</div>
                        <div className="text-[11px] text-[#c6c9ae]">
                          {lead.car} • <span className="text-[#d1f032]">{lead.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-[#90937a]">{lead.time}</span>
                        <a
                          href={`tel:${lead.phone}`}
                          className="px-3 py-1.5 rounded-full bg-[#282a2e] hover:bg-[#333539] text-xs font-bold text-white flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-[14px] text-[#d1f032]">call</span>
                          <span>Call</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics View */}
            {(activeTab === 'analytics' || activeTab === 'dashboard') && (
              <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-xl space-y-4">
                <h3 className="text-lg font-bold text-white">30-Day Showroom Telemetry</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-[#111317] border border-[#282a2e]">
                    <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                      Impression Velocity
                    </span>
                    <div className="text-xl font-bold text-white">+38.4%</div>
                    <span className="text-[10px] text-emerald-400">vs previous month</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#111317] border border-[#282a2e]">
                    <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                      Average Days to Liquidation
                    </span>
                    <div className="text-xl font-bold text-[#d1f032]">9.4 Days</div>
                    <span className="text-[10px] text-[#c6c9ae]">AutoHub Escrow record</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#111317] border border-[#282a2e]">
                    <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                      Price Realization
                    </span>
                    <div className="text-xl font-bold text-white">97.2%</div>
                    <span className="text-[10px] text-[#c6c9ae]">of requested list price</span>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
