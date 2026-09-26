import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const AdminDashboardPage: React.FC = () => {
  const { cars, setCars, navigate, showToast } = useApp();
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredVehicles = cars.filter((c) => {
    if (filterStatus === 'all') return true;
    return c.status === filterStatus;
  });

  const handleApprove = (id: string) => {
    setCars((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: 'Active' } : c))
    );
    showToast('Vehicle approved for Pan-India showroom listing', 'success');
  };

  const handleReject = (id: string) => {
    setCars((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: 'Draft' } : c))
    );
    showToast('Vehicle verification rejected. Feedback dispatched to seller.', 'warning');
  };

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#282a2e]/60">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#c6c9ae] mb-1">
              <span>AutoHub Core</span>
              <span>/</span>
              <span className="text-[#d1f032]">Administrative Console</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Marketplace Operations &amp; Verification Vault
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/admin/verification')}
              className="px-5 py-2.5 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">fact_check</span>
              <span>Pending Verifications</span>
            </button>
          </div>
        </div>

        {/* 6 Key Admin KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
            <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
              Total Users
            </span>
            <span className="text-xl font-black text-white">142,850</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
            <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
              Active Listings
            </span>
            <span className="text-xl font-black text-[#d1f032]">{cars.length}</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
            <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
              Cars Liquidated
            </span>
            <span className="text-xl font-black text-white">20,418</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
            <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
              Escrow Gross
            </span>
            <span className="text-xl font-black text-emerald-400">₹412.5 Cr</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
            <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
              Pending Audit
            </span>
            <span className="text-xl font-black text-amber-400">8</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
            <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
              New Inbound Leads
            </span>
            <span className="text-xl font-black text-white">340/day</span>
          </div>
        </div>

        {/* Master Vehicle Inventory Management Table */}
        <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-white">All Showroom Vehicles</h3>

            {/* Filter by Status */}
            <div className="flex items-center gap-2">
              {['all', 'Active', 'Pending Verification', 'Sold', 'Draft'].map((st) => (
                <button
                  key={st}
                  onClick={() => setFilterStatus(st)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    filterStatus === st
                      ? 'bg-[#d1f032] text-[#181e00]'
                      : 'bg-[#111317] text-[#c6c9ae] hover:text-white border border-[#282a2e]'
                  }`}
                >
                  {st === 'all' ? 'All Inventory' : st}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs min-w-[700px]">
              <thead>
                <tr className="border-b border-[#282a2e] text-[#c6c9ae] uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4">Vehicle</th>
                  <th className="py-3 px-4">Seller Details</th>
                  <th className="py-3 px-4">Listed Price</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Inspection</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#282a2e]/60">
                {filteredVehicles.map((car) => (
                  <tr key={car.id} className="hover:bg-[#111317]/50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={car.images.hero}
                          alt={car.title}
                          className="w-16 h-10 object-contain rounded-lg bg-[#0c0e12] p-1"
                        />
                        <div>
                          <div className="font-bold text-white">{car.title}</div>
                          <div className="text-[10px] text-[#c6c9ae]">
                            {car.year} • {car.city} • {car.km.toLocaleString('en-IN')} KM
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <div className="font-semibold text-white">{car.seller.name}</div>
                      <div className="text-[10px] text-[#c6c9ae]">{car.seller.phone}</div>
                    </td>

                    <td className="py-3 px-4 font-bold text-white">
                      {car.priceFormatted}
                    </td>

                    <td className="py-3 px-4">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          car.status === 'Active'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : car.status === 'Pending Verification'
                            ? 'bg-amber-500/20 text-amber-400'
                            : 'bg-[#282a2e] text-[#c6c9ae]'
                        }`}
                      >
                        {car.status}
                      </span>
                    </td>

                    <td className="py-3 px-4">
                      <span className="text-[#d1f032] font-bold">
                        {car.history.inspectionScore}/100 Passed
                      </span>
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => navigate(`/admin/verification?carId=${car.id}`)}
                          title="Review Telemetry"
                          className="px-2.5 py-1 rounded-lg bg-[#282a2e] hover:bg-[#333539] text-white text-[11px] font-bold transition-colors"
                        >
                          Audit
                        </button>
                        <button
                          onClick={() => handleApprove(car.id)}
                          title="Approve Listing"
                          className="px-2 py-1 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 text-[11px] font-bold transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(car.id)}
                          title="Reject Listing"
                          className="px-2 py-1 rounded-lg bg-rose-600/20 hover:bg-rose-600/30 text-rose-400 text-[11px] font-bold transition-colors"
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
