import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const ServicesPage: React.FC = () => {
  const { navigate, showToast } = useApp();

  // State for RC Verification Checker Modal
  const [rcNumber, setRcNumber] = useState('');
  const [rcVerifiedResult, setRcVerifiedResult] = useState<any | null>(null);
  const [rcChecking, setRcChecking] = useState(false);

  // State for Inspection Booking Modal
  const [inspectionModal, setInspectionModal] = useState(false);
  const [inspectionCity, setInspectionCity] = useState('Mumbai');
  const [inspectionDate, setInspectionDate] = useState('Tomorrow');

  const handleVerifyRC = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rcNumber.trim()) return;
    setRcChecking(true);
    setTimeout(() => {
      setRcChecking(false);
      setRcVerifiedResult({
        rc: rcNumber.toUpperCase(),
        status: 'Active & Verified',
        ownerSerial: '1st Owner',
        fitnessTill: '2037',
        taxStatus: 'Lifetime Paid',
        hypothecation: 'None (Clean Title)',
        insurance: 'Active till Oct 2026'
      });
      showToast('Parivahan RTO registry verified with 0 liabilities', 'success');
    }, 1200);
  };

  const services = [
    {
      id: 'inspection',
      title: '140-Point Doorstep Diagnostics',
      tagline: 'Technical Precision',
      desc: 'Book an AutoHub Master Engineer to perform laser chassis scan, OBD-II error readout, and paint thickness scan at your doorstep.',
      icon: 'verified',
      cta: 'Book Inspection',
      action: () => setInspectionModal(true)
    },
    {
      id: 'finance',
      title: 'Supercar & Luxury Financing',
      tagline: 'Custom Capital',
      desc: 'Instant pre-approval with leading private lenders (HDFC, ICICI, Kotak Prime) starting from 8.5% p.a. with zero prepayment penalty.',
      icon: 'payments',
      cta: 'Explore Finance',
      action: () => navigate('/finance')
    },
    {
      id: 'rc',
      title: 'Instant RC & Crime Registry Verification',
      tagline: 'Legal Escrow',
      desc: 'Screen any Indian registration mark against Parivahan databases, National Crime Records Bureau (NCRB), and RTO hypothecation records.',
      icon: 'description',
      cta: 'Verify RC Now',
      action: () => {
        const el = document.getElementById('rc-checker');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'valuation',
      title: 'Algorithmic Market Valuation',
      tagline: 'Real-time Comps',
      desc: 'Calculate accurate market liquidation and resale values backed by over 42,000 real Indian transaction data points.',
      icon: 'trending_up',
      cta: 'Value My Car',
      action: () => navigate('/sell-car')
    },
    {
      id: 'testdrive',
      title: 'VIP Doorstep Test Drive Staging',
      tagline: 'Direct Experience',
      desc: 'Experience your dream supercar or luxury SUV delivered to your doorstep in 24 major Indian cities with personal telemetry specialist.',
      icon: 'key',
      cta: 'Schedule Test Drive',
      action: () => navigate('/test-drive')
    },
    {
      id: 'insurance',
      title: 'Zero-Depreciation Insurance Renewal',
      tagline: 'Comprehensive Cover',
      desc: 'Bespoke high-value motor insurance policies with return-to-invoice protection, engine protection, and 24x7 pan-India towing.',
      icon: 'shield',
      cta: 'Get Insurance Quote',
      action: () => showToast('Connecting to AutoHub Insurance Concierge...', 'info')
    },
    {
      id: 'roadside',
      title: '24x7 India Highway Roadside Assist',
      tagline: 'Emergency Dispatch',
      desc: 'Flatbed hydraulic recovery, fuel drop, jumpstart, and flat tyre assistance across 4,200+ national and state highways in India.',
      icon: 'car_repair',
      cta: 'Emergency Hotline: 1800-AUTOHUB',
      action: () => showToast('Direct Highway SOS Hotline: +91 1800-2886-482', 'info')
    }
  ];

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d1f032]/15 text-[#d1f032] text-xs font-bold uppercase tracking-wider mb-2 border border-[#d1f032]/30">
            Ownership &amp; Liquidity Ecosystem
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AutoHub Concierge &amp; Technical Services
          </h1>
          <p className="text-sm text-[#c6c9ae] mt-2">
            Engineered to remove friction from buying, inspecting, insuring, financing, and owning high-performance machines.
          </p>
        </div>

        {/* 7 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((serv) => (
            <div
              key={serv.id}
              className="p-8 rounded-3xl bg-[#1a1c20] border border-[#282a2e] hover:border-[#d1f032]/40 transition-all flex flex-col justify-between space-y-6 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#282a2e] group-hover:bg-[#d1f032]/20 text-[#d1f032] flex items-center justify-center transition-all border border-[#333539]">
                    <span className="material-symbols-outlined text-[30px]">{serv.icon}</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#d1f032] uppercase tracking-wider">
                    {serv.tagline}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{serv.title}</h3>
                <p className="text-xs text-[#c6c9ae] leading-relaxed">{serv.desc}</p>
              </div>

              <button
                onClick={serv.action}
                className="w-full py-3 rounded-full bg-[#282a2e] hover:bg-[#d1f032] hover:text-[#181e00] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{serv.cta}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>

        {/* Interactive RC & Parivahan Checker Anchor */}
        <section id="rc-checker" className="p-8 sm:p-12 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-2xl mb-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <span className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider">
              Legal Integrity Verification
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Instant Online RC &amp; Challan Verification
            </h2>
            <p className="text-xs text-[#c6c9ae]">
              Enter any Indian motor vehicle registration number (e.g. MH01DE1234 or DL03CC9900) to inspect ownership integrity.
            </p>

            <form onSubmit={handleVerifyRC} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <input
                type="text"
                value={rcNumber}
                onChange={(e) => setRcNumber(e.target.value)}
                placeholder="Enter Registration No (e.g. MH-01-AB-1234)"
                className="w-full px-5 py-3.5 rounded-2xl bg-[#111317] border border-[#282a2e] text-white placeholder-[#90937a] text-sm focus:outline-none uppercase font-bold tracking-wider"
              />
              <button
                type="submit"
                disabled={rcChecking}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] text-xs font-bold transition-all shrink-0 cursor-pointer shadow-lg disabled:opacity-50"
              >
                {rcChecking ? 'Verifying...' : 'Verify RC Title'}
              </button>
            </form>

            {rcVerifiedResult && (
              <div className="p-6 rounded-2xl bg-[#111317] border border-emerald-500/40 text-left mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold text-white">
                    Registration Mark: <span className="text-[#d1f032]">{rcVerifiedResult.rc}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                    ✓ {rcVerifiedResult.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2 border-t border-[#282a2e]">
                  <div>
                    <span className="text-[#c6c9ae] block text-[10px]">Owner Serial:</span>
                    <span className="text-white font-bold">{rcVerifiedResult.ownerSerial}</span>
                  </div>
                  <div>
                    <span className="text-[#c6c9ae] block text-[10px]">Hypothecation:</span>
                    <span className="text-white font-bold">{rcVerifiedResult.hypothecation}</span>
                  </div>
                  <div>
                    <span className="text-[#c6c9ae] block text-[10px]">Road Tax:</span>
                    <span className="text-white font-bold">{rcVerifiedResult.taxStatus}</span>
                  </div>
                  <div>
                    <span className="text-[#c6c9ae] block text-[10px]">Insurance:</span>
                    <span className="text-white font-bold">{rcVerifiedResult.insurance}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Book Inspection Modal */}
      {inspectionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-3xl bg-[#1e2024] border border-[#282a2e] shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setInspectionModal(false)}
              className="absolute top-5 right-5 text-[#c6c9ae] hover:text-white"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
            <h3 className="text-xl font-bold text-white mb-1">
              Book Doorstep 140-Point Inspection
            </h3>
            <p className="text-xs text-[#c6c9ae] mb-4">
              AutoHub certified master technician visits with laser alignment tools and dyno scanner.
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#c6c9ae] block mb-1">Select City Hub</label>
                <select
                  value={inspectionCity}
                  onChange={(e) => setInspectionCity(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white"
                >
                  {['Mumbai', 'Delhi NCR', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'].map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#c6c9ae] block mb-1">Inspection Date</label>
                <select
                  value={inspectionDate}
                  onChange={(e) => setInspectionDate(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white"
                >
                  <option value="Tomorrow">Tomorrow, 10:00 AM</option>
                  <option value="Day After">Day After Tomorrow, 2:00 PM</option>
                  <option value="Weekend">This Weekend</option>
                </select>
              </div>

              <button
                onClick={() => {
                  showToast(`Doorstep inspection confirmed for ${inspectionCity}! Technician assigned.`, 'success');
                  setInspectionModal(false);
                }}
                className="w-full py-3.5 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs shadow-md transition-all mt-2"
              >
                Schedule Doorstep Inspection (₹2,499)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
