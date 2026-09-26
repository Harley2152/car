import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const Modals: React.FC = () => {
  const {
    contactModalCar,
    setContactModalCar,
    testDriveModalCar,
    setTestDriveModalCar,
    offerModalCar,
    setOfferModalCar,
    shareModalCar,
    setShareModalCar,
    inspectionModalCar,
    setInspectionModalCar,
    addTestDriveBooking,
    sendMessage,
    showToast,
    user
  } = useApp();

  // Test Drive Form State
  const [testDriveDate, setTestDriveDate] = useState('Tomorrow, 11:00 AM');
  const [testDriveHub, setTestDriveHub] = useState('Doorstep VIP Delivery');
  const [testDriveName, setTestDriveName] = useState(user?.name || '');
  const [testDrivePhone, setTestDrivePhone] = useState(user?.phone || '');

  // Offer Form State
  const [offerValue, setOfferValue] = useState<string>('');
  const [offerNote, setOfferNote] = useState('');

  // Contact Seller Form State
  const [contactMessage, setContactMessage] = useState('');

  return (
    <>
      {/* 1. CONTACT SELLER MODAL */}
      {contactModalCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-3xl bg-[#1e2024] border border-[#282a2e] shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setContactModalCar(null)}
              className="absolute top-5 right-5 text-[#c6c9ae] hover:text-white"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>

            <div className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider mb-1">
              Direct Telemetry &amp; Liaison
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Contact {contactModalCar.seller.name}
            </h3>
            <p className="text-xs text-[#c6c9ae] mb-4">
              Regarding {contactModalCar.title} ({contactModalCar.priceFormatted})
            </p>

            <div className="p-4 rounded-2xl bg-[#111317] border border-[#282a2e] flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-[#d1f032] text-[#181e00] font-bold flex items-center justify-center text-sm shrink-0">
                {contactModalCar.seller.name.substring(0, 2).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-white truncate">
                    {contactModalCar.seller.name}
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-[#d1f032]">
                    verified
                  </span>
                </div>
                <div className="text-[11px] text-[#c6c9ae]">
                  {contactModalCar.seller.location} • Response: {contactModalCar.seller.responseTime}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <a
                href={`tel:${contactModalCar.seller.phone}`}
                className="py-3 rounded-2xl bg-[#282a2e] hover:bg-[#333539] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-[#d1f032]">call</span>
                <span>{contactModalCar.seller.phone}</span>
              </a>
              <button
                onClick={() => {
                  showToast('Redirecting to WhatsApp chat with verified seller...', 'success');
                  setContactModalCar(null);
                }}
                className="py-3 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp Seller</span>
              </button>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] text-[#c6c9ae] uppercase font-bold tracking-wider block">
                Send Direct Message
              </label>
              <textarea
                rows={3}
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder={`Hi, I'm interested in inspecting this ${contactModalCar.year} ${contactModalCar.model}. Is the vehicle available for doorstep test drive?`}
                className="w-full px-4 py-3 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white placeholder-[#90937a] focus:outline-none"
              />
              <button
                onClick={() => {
                  const text = contactMessage || `Hi, I am interested in ${contactModalCar.title}.`;
                  sendMessage('conv-1', text);
                  setContactModalCar(null);
                  setContactMessage('');
                }}
                className="w-full py-3 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs shadow-[0_4px_16px_rgba(209,240,50,0.3)] transition-all"
              >
                Send Message via AutoHub Escrow
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. BOOK TEST DRIVE MODAL */}
      {testDriveModalCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-3xl bg-[#1e2024] border border-[#282a2e] shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setTestDriveModalCar(null)}
              className="absolute top-5 right-5 text-[#c6c9ae] hover:text-white"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>

            <div className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider mb-1">
              Complimentary Highway Staging
            </div>
            <h3 className="text-xl font-bold text-white mb-1">
              Book Test Drive: {testDriveModalCar.title}
            </h3>
            <p className="text-xs text-[#c6c9ae] mb-4">
              Experience the 0–100 acceleration, braking dynamics, and cockpit ergonomics.
            </p>

            {/* Vehicle Pill */}
            <div className="p-3 rounded-2xl bg-[#111317] border border-[#282a2e] flex items-center gap-3 mb-4">
              <img
                src={testDriveModalCar.images.hero}
                alt={testDriveModalCar.title}
                className="w-16 h-10 object-contain"
              />
              <div className="flex-1">
                <div className="text-xs font-bold text-white">{testDriveModalCar.title}</div>
                <div className="text-[10px] text-[#d1f032] font-semibold">
                  {testDriveModalCar.city} Hub • 140-Point Certified
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-5">
              <div>
                <label className="text-[10px] text-[#c6c9ae] uppercase font-bold tracking-wider block mb-1">
                  Test Drive Location Mode
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setTestDriveHub('Doorstep VIP Delivery')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                      testDriveHub === 'Doorstep VIP Delivery'
                        ? 'border-[#d1f032] bg-[#d1f032]/10 text-white'
                        : 'border-[#282a2e] text-[#c6c9ae] hover:text-white'
                    }`}
                  >
                    Doorstep VIP Delivery
                  </button>
                  <button
                    onClick={() => setTestDriveHub(`${testDriveModalCar.city} AutoHub Vault`)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                      testDriveHub !== 'Doorstep VIP Delivery'
                        ? 'border-[#d1f032] bg-[#d1f032]/10 text-white'
                        : 'border-[#282a2e] text-[#c6c9ae] hover:text-white'
                    }`}
                  >
                    AutoHub Showroom Vault
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] text-[#c6c9ae] uppercase font-bold tracking-wider block mb-1">
                    Preferred Date &amp; Time
                  </label>
                  <select
                    value={testDriveDate}
                    onChange={(e) => setTestDriveDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white focus:outline-none"
                  >
                    <option>Tomorrow, 11:00 AM</option>
                    <option>Tomorrow, 3:30 PM</option>
                    <option>This Weekend, 10:00 AM</option>
                    <option>This Weekend, 4:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] text-[#c6c9ae] uppercase font-bold tracking-wider block mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={testDrivePhone}
                    onChange={(e) => setTestDrivePhone(e.target.value)}
                    placeholder="+91 98200 XXXXX"
                    className="w-full px-3 py-2 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-[#c6c9ae] uppercase font-bold tracking-wider block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={testDriveName}
                  onChange={(e) => setTestDriveName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white focus:outline-none"
                />
              </div>
            </div>

            <button
              onClick={() => {
                addTestDriveBooking({
                  carId: testDriveModalCar.id,
                  carTitle: testDriveModalCar.title,
                  carImage: testDriveModalCar.images.hero,
                  city: testDriveModalCar.city,
                  hub: testDriveHub,
                  date: testDriveDate,
                  timeSlot: testDriveDate.split(', ')[1] || '11:00 AM',
                  userName: testDriveName || 'Automotive Enthusiast',
                  userPhone: testDrivePhone || '+91 98201 55678',
                  userEmail: user?.email || 'user@autohub.in'
                });
                setTestDriveModalCar(null);
              }}
              className="w-full py-3.5 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs sm:text-sm shadow-[0_8px_24px_rgba(209,240,50,0.3)] transition-all"
            >
              Confirm 100% Free Doorstep Test Drive
            </button>
          </div>
        </div>
      )}

      {/* 3. MAKE AN OFFER MODAL */}
      {offerModalCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-3xl bg-[#1e2024] border border-[#282a2e] shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setOfferModalCar(null)}
              className="absolute top-5 right-5 text-[#c6c9ae] hover:text-white"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>

            <div className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider mb-1">
              Direct Negotiation
            </div>
            <h3 className="text-xl font-bold text-white mb-1">
              Make an Offer: {offerModalCar.title}
            </h3>
            <p className="text-xs text-[#c6c9ae] mb-4">
              All offers are binding for 48 hours and subject to physical 140-point verification.
            </p>

            <div className="p-4 rounded-2xl bg-[#111317] border border-[#282a2e] mb-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#c6c9ae] uppercase">Listed Price</span>
                <div className="text-xl font-bold text-white">{offerModalCar.priceFormatted}</div>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#d1f032] uppercase font-bold">Fair Liquidation Window</span>
                <div className="text-xs text-[#c6c9ae]">
                  ₹{(offerModalCar.priceLakhs * 0.92).toFixed(1)}L - ₹{offerModalCar.priceLakhs}L
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-5">
              <div>
                <label className="text-[10px] text-[#c6c9ae] uppercase font-bold tracking-wider block mb-1">
                  Your Offer Amount (in Lakhs or Crores)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-[#d1f032] font-bold">₹</span>
                  <input
                    type="text"
                    value={offerValue}
                    onChange={(e) => setOfferValue(e.target.value)}
                    placeholder={`e.g. ${(offerModalCar.priceLakhs * 0.95).toFixed(2)} Lakh`}
                    className="w-full pl-9 pr-4 py-3 rounded-xl bg-[#111317] border border-[#282a2e] text-sm text-white placeholder-[#90937a] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-[#c6c9ae] uppercase font-bold tracking-wider block mb-1">
                  Offer Terms &amp; Condition Note
                </label>
                <textarea
                  rows={2}
                  value={offerNote}
                  onChange={(e) => setOfferNote(e.target.value)}
                  placeholder="e.g. Immediate RTGS wire transfer subject to RC inspection clearance."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white placeholder-[#90937a] focus:outline-none"
                />
              </div>
            </div>

            <button
              onClick={() => {
                if (!offerValue.trim()) {
                  showToast('Please specify your offer amount', 'warning');
                  return;
                }
                sendMessage(
                  'conv-1',
                  `Submitted formal purchase offer of ${offerValue} for ${offerModalCar.title}. Terms: ${offerNote || 'Immediate payment upon inspection.'}`,
                  offerValue
                );
                showToast(`Offer of ${offerValue} dispatched to seller`, 'success');
                setOfferModalCar(null);
                setOfferValue('');
                setOfferNote('');
              }}
              className="w-full py-3.5 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs sm:text-sm shadow-[0_8px_24px_rgba(209,240,50,0.3)] transition-all"
            >
              Submit Official Offer
            </button>
          </div>
        </div>
      )}

      {/* 4. SHARE MODAL */}
      {shareModalCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md rounded-3xl bg-[#1e2024] border border-[#282a2e] shadow-2xl p-6 relative">
            <button
              onClick={() => setShareModalCar(null)}
              className="absolute top-5 right-5 text-[#c6c9ae] hover:text-white"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>

            <div className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider mb-1">
              Share Telemetry
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Share {shareModalCar.title}
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-[#111317] border border-[#282a2e]">
                <input
                  type="text"
                  readOnly
                  value={`https://autohub.in/car/${shareModalCar.id}`}
                  className="w-full bg-transparent text-xs text-[#c6c9ae] px-2 focus:outline-none"
                />
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(`https://autohub.in/car/${shareModalCar.id}`);
                    showToast('Vehicle link copied to clipboard', 'success');
                    setShareModalCar(null);
                  }}
                  className="px-4 py-2 rounded-lg bg-[#d1f032] text-[#181e00] text-xs font-bold shrink-0"
                >
                  Copy
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2">
                <button
                  onClick={() => {
                    showToast('Link ready for WhatsApp dispatch', 'success');
                    setShareModalCar(null);
                  }}
                  className="p-3 rounded-xl bg-[#282a2e] hover:bg-[#333539] text-xs font-bold text-white flex flex-col items-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-emerald-400">chat</span>
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    showToast('Opening Twitter dispatch...', 'info');
                    setShareModalCar(null);
                  }}
                  className="p-3 rounded-xl bg-[#282a2e] hover:bg-[#333539] text-xs font-bold text-white flex flex-col items-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-sky-400">send</span>
                  <span>Twitter / X</span>
                </button>
                <button
                  onClick={() => {
                    showToast('Email composition opened', 'info');
                    setShareModalCar(null);
                  }}
                  className="p-3 rounded-xl bg-[#282a2e] hover:bg-[#333539] text-xs font-bold text-white flex flex-col items-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-amber-400">mail</span>
                  <span>Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. 140-POINT INSPECTION TELEMETRY MODAL */}
      {inspectionModalCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#1e2024] border border-[#282a2e] shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setInspectionModalCar(null)}
              className="absolute top-5 right-5 text-[#c6c9ae] hover:text-white"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>

            <div className="flex items-center gap-2 text-[11px] font-bold text-[#d1f032] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#d1f032] animate-pulse"></span>
              AutoHub Master Diagnostics Telemetry
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              140-Point Technical Certification
            </h3>
            <p className="text-xs text-[#c6c9ae] mb-6">
              Certified on {inspectionModalCar.title} • VIN / RC: {inspectionModalCar.history.regState}
            </p>

            {/* Score Pill */}
            <div className="p-5 rounded-2xl bg-[#111317] border border-[#282a2e] mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#d1f032]/20 border border-[#d1f032]/40 text-[#d1f032] font-black text-2xl flex items-center justify-center">
                  {inspectionModalCar.history.inspectionScore}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Overall Health Score: Exceptional</div>
                  <div className="text-xs text-[#c6c9ae]">
                    140 checks passed • Zero chassis realignment detected
                  </div>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <span className="text-[10px] text-[#d1f032] font-bold uppercase tracking-wider block">
                  Warranty Status
                </span>
                <span className="text-xs text-white font-semibold">12-Month Shield Active</span>
              </div>
            </div>

            {/* Inspection Checklist Categories */}
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-[#16181f] border border-[#282a2e]">
                <div className="flex items-center justify-between font-bold text-xs text-white mb-2">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-[#d1f032]">speed</span>
                    Powertrain &amp; Dyno Diagnostics (38 Points)
                  </span>
                  <span className="text-[#d1f032]">100% Passed</span>
                </div>
                <p className="text-[11px] text-[#c6c9ae]">
                  ECU error log zeroed, turbo boost pressure 1.25 bar within factory spec, oil viscosity 98%, no timing chain slack.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#16181f] border border-[#282a2e]">
                <div className="flex items-center justify-between font-bold text-xs text-white mb-2">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-[#d1f032]">directions_car</span>
                    Chassis, Suspension &amp; Laser Alignment (42 Points)
                  </span>
                  <span className="text-[#d1f032]">100% Passed</span>
                </div>
                <p className="text-[11px] text-[#c6c9ae]">
                  Micron laser measurement confirms 0.00mm subframe deviation. Bushings, dampers, and brake disc thickness at 88% remaining life.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#16181f] border border-[#282a2e]">
                <div className="flex items-center justify-between font-bold text-xs text-white mb-2">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-[#d1f032]">palette</span>
                    Paint Depth &amp; Structural Integrity (30 Points)
                  </span>
                  <span className="text-[#d1f032]">Factory Original</span>
                </div>
                <p className="text-[11px] text-[#c6c9ae]">
                  Elcometer digital scan averages 115-130 microns across all 14 body panels. Zero aftermarket repaint or filler detected.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#16181f] border border-[#282a2e]">
                <div className="flex items-center justify-between font-bold text-xs text-white mb-2">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-[#d1f032]">verified_user</span>
                    Legal, Crime &amp; RTO Ownership Verification (30 Points)
                  </span>
                  <span className="text-[#d1f032]">Clean RTO Title</span>
                </div>
                <p className="text-[11px] text-[#c6c9ae]">
                  Cleared against National Crime Records Bureau (NCRB), Parivahan RTO registry, and zero hypothecation liabilities.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                showToast('Full 12-page PDF diagnostic report downloaded', 'success');
                setInspectionModalCar(null);
              }}
              className="w-full py-3 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs shadow-md transition-all"
            >
              Download Full 12-Page Verified Engineering Certificate (PDF)
            </button>
          </div>
        </div>
      )}
    </>
  );
};
