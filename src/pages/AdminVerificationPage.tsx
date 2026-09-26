import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const AdminVerificationPage: React.FC = () => {
  const { cars, setCars, navigate, showToast } = useApp();

  const urlParams = new URLSearchParams(window.location.search);
  const targetId = urlParams.get('carId');

  const [selectedCarId, setSelectedCarId] = useState<string>(
    targetId || cars[0]?.id || ''
  );
  const [auditNotes, setAuditNotes] = useState<string>('All RTO documents verified against Parivahan master DB. Elcometer chassis scan is within factory threshold.');

  const car = cars.find((c) => c.id === selectedCarId) || cars[0];

  const handleApprove = () => {
    setCars((prev) =>
      prev.map((c) => (c.id === car.id ? { ...c, status: 'Active' } : c))
    );
    showToast(`Approved ${car.title} for AutoHub Showroom`, 'success');
  };

  const handleReject = () => {
    setCars((prev) =>
      prev.map((c) => (c.id === car.id ? { ...c, status: 'Draft' } : c))
    );
    showToast(`Verification rejected for ${car.title}. Notes sent to seller.`, 'warning');
  };

  const handleRequestChanges = () => {
    showToast(`Change request dispatched to seller: "${auditNotes}"`, 'info');
  };

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#282a2e]/60">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#c6c9ae] mb-1">
              <button onClick={() => navigate('/admin')} className="hover:text-white">Admin Dashboard</button>
              <span>/</span>
              <span className="text-[#d1f032]">Vehicle Verification Audit</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              140-Point Telemetry &amp; RC Verification Review
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedCarId}
              onChange={(e) => setSelectedCarId(e.target.value)}
              className="p-2 rounded-xl bg-[#1e2024] border border-[#282a2e] text-xs text-white"
            >
              {cars.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title} ({c.status})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 2-Column Audit Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visuals & Documents (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-xl">
              <h3 className="text-sm font-bold text-white mb-4">Submitted Media Evidence</h3>
              <div className="relative h-64 bg-[#0c0e12] rounded-2xl p-4 flex items-center justify-center mb-4">
                <img
                  src={car.images.hero}
                  alt={car.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {car.images.exterior.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Inspection angle"
                    className="w-full h-20 object-contain rounded-xl bg-[#0c0e12] p-1 border border-[#282a2e]"
                  />
                ))}
              </div>
            </div>

            {/* RC & Legal Registry Check */}
            <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white">Parivahan RTO Data Integrity</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  Matched 100%
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#111317]">
                  <span className="text-[#c6c9ae] block text-[10px]">Chassis / VIN:</span>
                  <span className="font-mono font-bold text-white">WP0AB2A92PS19****</span>
                </div>
                <div className="p-3 rounded-xl bg-[#111317]">
                  <span className="text-[#c6c9ae] block text-[10px]">Engine Number:</span>
                  <span className="font-mono font-bold text-white">DKN082491</span>
                </div>
                <div className="p-3 rounded-xl bg-[#111317]">
                  <span className="text-[#c6c9ae] block text-[10px]">Registration State:</span>
                  <span className="font-bold text-white">{car.history.regState}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#111317]">
                  <span className="text-[#c6c9ae] block text-[10px]">Insurance Validity:</span>
                  <span className="font-bold text-white">{car.history.insuranceValidTill}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Audit Findings & Decision Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-xl space-y-4">
              <h3 className="text-sm font-bold text-white">Seller &amp; Inspection Telemetry</h3>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#282a2e]">
                  <span className="text-[#c6c9ae]">Seller:</span>
                  <span className="text-white font-bold">{car.seller.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#282a2e]">
                  <span className="text-[#c6c9ae]">Seller Rating:</span>
                  <span className="text-[#d1f032] font-bold">{car.seller.rating} / 5.0</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#282a2e]">
                  <span className="text-[#c6c9ae]">Diagnostics Score:</span>
                  <span className="text-emerald-400 font-bold">{car.history.inspectionScore} / 100</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#282a2e]">
                  <span className="text-[#c6c9ae]">Odometer Verification:</span>
                  <span className="text-white font-bold">{car.km.toLocaleString('en-IN')} KM (ECU Verified)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#c6c9ae]">Current Listing Status:</span>
                  <span className="text-[#d1f032] font-bold uppercase">{car.status}</span>
                </div>
              </div>

              {/* Auditor Notes Field */}
              <div>
                <label className="text-xs font-bold text-[#c6c9ae] block mb-1">
                  Compliance Officer Notes
                </label>
                <textarea
                  rows={4}
                  value={auditNotes}
                  onChange={(e) => setAuditNotes(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white placeholder-[#90937a] focus:outline-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleApprove}
                  className="w-full py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  ✓ Approve &amp; Broadcast to Pan-India Showroom
                </button>

                <button
                  onClick={handleRequestChanges}
                  className="w-full py-2.5 rounded-full bg-[#282a2e] hover:bg-[#333539] text-[#d1f032] font-bold text-xs border border-[#333539] transition-all cursor-pointer"
                >
                  Request Additional Document / Rescan
                </button>

                <button
                  onClick={handleReject}
                  className="w-full py-2.5 rounded-full bg-rose-600/20 hover:bg-rose-600/30 text-rose-400 font-bold text-xs border border-rose-500/30 transition-all cursor-pointer"
                >
                  Reject &amp; Archive Listing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
